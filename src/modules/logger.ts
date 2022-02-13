/*
    Imported module(s)
*/
import chalk from 'chalk';
import express from 'express';

/*
    Logger log types
*/
enum LogType 
{
    error,
    success,
    warning,
    info
};

/*
    Function to log normal data
*/
function log(type: LogType, data: string)
{
    let date: Date = new Date();
    let string: string = `[ ${date.toISOString()} ]`;

    switch (type)
    {
        case LogType.error:
            string += `[${chalk.bgRed(' Error ')}]`;
            break;
        case LogType.success:
            string += `[${chalk.bgGreen(' Success ')}]`;
            break;
        case LogType.warning:
            string += `[${chalk.bgYellow(' Warning ')}]`;
            break;
        case LogType.info:
            string += `[${chalk.bgBlue(' Info ')}]`;
            break;
        default:
            string += `[${chalk.bgBlue(' Info ')}]`;
            break;
    };

    string += `[ ${data} ]`;

    console.log(string);
};

/* 
    Function to log request
*/
function logRequest(type: LogType, request: express.Request, response: express.Response, epoch: Date, data: string)
{
    let date: Date = new Date(epoch);
    let string: string = `[ ${date.toISOString()} ]`;

    switch (type)
    {
        case LogType.error:
            string += `[${chalk.bgRed(' Error ')}]`;
            break;
        case LogType.success:
            string += `[${chalk.bgGreen(' Success ')}]`;
            break;
        case LogType.warning:
            string += `[${chalk.bgYellow(' Warning ')}]`;
            break;
        case LogType.info:
            string += `[${chalk.bgBlue(' Info ')}]`;
            break;
        default:
            string += `[${chalk.bgBlue(' Info ')}]`;
            break;
    };

    string += `[ ${request.protocol.toUpperCase()} ]`;
    string += `[ ${request.method} ]`;
    string += `[ ${request.originalUrl} ]`;
    string += `[ ${response.statusCode} ]`;
    string += `[ ${process.env.MODE == 'development' ? request.ip : request.headers['x-real-ip']} ]`;
    string += `[ ${request.hostname} ]`;
    string += `[ ${Date.now() - date.getTime()}ms ]`;
    string += `[ ${response.getHeader('content-length')} ]`;
    string += `[ ${data} ]`;

    console.log(string);
};

/*
    Module export
*/
export = {
    LogType,
    log,
    logRequest
};