/*
    Imported module(s)
*/
import postgresql from 'pg';
import logger from './logger';

const databaseClient = new postgresql.Client({
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.HOST,
    port: Number(process.env.PORT)
});

/*
    Function to connect to database
*/
async function connectToDatabase()
{
    logger.log(logger.LogType.info, 'Database Connecting');

    try 
    {
        await databaseClient.connect();
        logger.log(logger.LogType.success, 'Database Connected');
    }
    catch (error)
    {
        logger.log(logger.LogType.error, 'Database Connection Error');
        console.log(error);
    };
};

/*
    Module export
*/
export = {
    databaseClient,
    connectToDatabase
};