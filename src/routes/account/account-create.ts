/*
    Imported module(s)
*/
import databaseHandler from '../../modules/database-handler';
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
        let databaseResponse: postgres.QueryResult = await databaseHandler.databaseClient.query('SELECT * FROM create_account($1, $2, $3, $4, $5, $6, $7, $8)',
            [
                request.headers['id'],
                request.body.account.category.name,
                request.body.account.name,
                request.body.account.website.toLowerCase(),
                request.body.account.username,
                request.body.account.email.toUpperCase(),
                request.body.account.password,
                request.body.account.notes
            ]);

        /*let databaseResponse = databaseHandler.databaseClient.query('SELECT * FROM get_accounts($1)',
            [
                request.headers['id']
            ]);8?

        console.log(databaseResponse);

        /*
            Get all accounts for user and return as table data
        */


        response.status(200).send({
            type: "success",
            detail: "Account created"
        });
        logger.logRequest(logger.LogType.success, request, response, startEpoch, 'Account Create Successfully');
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