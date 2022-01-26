/*
    Imported module(s)
*/
import express from 'express';
import accountRoutes from './routes/account';

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
    console.log('Listening');
});