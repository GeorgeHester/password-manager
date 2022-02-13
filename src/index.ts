/*
    Imported module(s)
*/
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
import accountRoutes from './routes/account';
import administrationRoutes from './routes/administration';
import authenticationRoutes from './routes/authentication';
import logger from './modules/logger';
import databaseHandler from './modules/database-handler';

//import * as encryptionHandler from './modules/encryption-handler';
//let x: encryptionHandler.Password = encryptionHandler.hashPassword('TestingPassword');
//console.log(x.password, x.salt);

/*
    Function to initalise server
*/
async function initialise()
{
    /*
        Connect to database
    */
    await databaseHandler.connectToDatabase();

    /*
        Generate express app
    */
    const app = express();

    /*
        Disable express headers
    */
    app.disable('x-powered-by');
    app.disable('x-ratelimit-limit');
    app.disable('x-ratelimit-remaining');
    app.disable('x-ratelimit-reset');
    app.disable('server');

    /*
        Use express json
    */
    app.use(express.json());

    /*
        Set routes for express app 
    */
    app.use('/api/v1/account', accountRoutes);
    app.use('/api/v1/administration', administrationRoutes);
    app.use('/api/v1/authentication', authenticationRoutes);

    logger.log(logger.LogType.info, 'Server Connecting');

    /*
        Set the express app to listen
    */
    let server = app.listen(process.env.SERVER_PORT, () =>
    {
        logger.log(logger.LogType.success, 'Server Listening');
        logger.log(logger.LogType.info, `Port: ${process.env.SERVER_PORT}`);
    });

    /*    server.on('error', () =>
        {
    
        });
    */
};

initialise();