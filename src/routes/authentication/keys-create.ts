/*
    Imported module(s)
*/
import databaseHandler from '../../modules/database-handler';
import logger from '../../modules/logger';
import express from 'express';
import * as keyHandler from '../../modules/key-handler';

/*
    Function to handle request
*/
async function request(request: express.Request, response: express.Response): Promise<void>
{
    let startEpoch = new Date();

    try 
    {
        for (let i = 0; i < Number(process.env.NUMBER_OF_KEYS); i++)
        {
            let key: keyHandler.Key = keyHandler.generateKey();

            await databaseHandler.databaseClient.query('CALL create_key($1, $2)',
                [
                    Buffer.from(key.public, 'hex').toString('base64'),
                    Buffer.from(key.private, 'hex').toString('base64')
                ]);
        };

        response.status(200).send({
            type: "success",
            detail: "Keys created"
        });
        logger.logRequest(logger.LogType.success, request, response, startEpoch, 'Keys Created');
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