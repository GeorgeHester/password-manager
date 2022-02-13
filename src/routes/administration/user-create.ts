/*
    Imported module(s)
*/
import databaseHandler from '../../modules/database-handler';
import * as encryptionHandler from '../../modules/encryption-handler';
import postgres from 'pg';
import logger from '../../modules/logger';
import express from 'express';

/*
    Function to handle request
*/
async function request(request: express.Request, response: express.Response): Promise<void>
{
    let startEpoch = new Date();

    try 
    {
        let userExistsResponse: postgres.QueryResult = await databaseHandler.databaseClient.query('SELECT * FROM get_user_by_email($1)',
            [
                request.body.email
            ]);

        if (userExistsResponse.rowCount > 0)
        {
            response.status(409).send({
                type: "error",
                detail: "Email already in use"
            });
            logger.logRequest(logger.LogType.error, request, response, startEpoch, 'Email Already In Use');
            return;
        };

        let userPassword: encryptionHandler.Password = encryptionHandler.hashPassword(request.body.password);

        let createUserResponse: postgres.QueryResult = await databaseHandler.databaseClient.query('SELECT * FROM create_user($1, $2, $3, $4, $5)',
            [
                request.body.firstName,
                request.body.lastName,
                request.body.email,
                userPassword.password,
                userPassword.salt
            ]);

        response.status(200).send({
            type: "success",
            detail: "User successfully created"
        });
        logger.logRequest(logger.LogType.success, request, response, startEpoch, 'User Created Successfully');
    }
    catch (error)
    {
        response.status(500).send({
            type: "error",
            detail: "Server error"
        });
        logger.logRequest(logger.LogType.error, request, response, startEpoch, 'Server Error');
        console.log(error);
    };
};

/*
    Module export
*/
export = request;