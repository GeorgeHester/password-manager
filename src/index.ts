/*
    Imported module(s)
*/
import express from 'express';
import accountRoutes from './routes/account';
import logger from './modules/logger';

import * as encryptionHandler from './modules/encryption-handler';
let x: encryptionHandler.Password = encryptionHandler.hashPassword('TestingPassword');
console.log(x.password, x.salt);


/*
    Generate express app
*/
const app = express();

/*
    Set routes for express app 
*/
app.use('/api/v1/account', accountRoutes);

/*
    Set the express app to listen
*/
app.listen(8000, () =>
{
    logger.log(logger.LogType.info, 'Server Listening');
});