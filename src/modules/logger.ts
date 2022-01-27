/*
    Imported module(s)
*/
import chalk from 'chalk';

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
    switch (type)
    {
        case LogType.error:
            console.log(`[${chalk.bgRed(' Error ')}][ ${data} ]`);
            break;
        case LogType.success:
            console.log(`[${chalk.bgGreen(' Success ')}][ ${data} ]`);
            break;
        case LogType.warning:
            console.log(`[${chalk.bgYellow(' Warning ')}][ ${data} ]`);
            break;
        case LogType.info:
            console.log(`[${chalk.bgBlue(' Info ')}][ ${data} ]`);
            break;
        default:
            console.log(`[ ${chalk.bgBlue(' Info ')} ][ ${data} ]`);
            break;
    };
};

/* 
    Function to log request
*/
function logRequest(type: LogType, data: string)
{
};

/*
    Module export
*/
export = {
    LogType,
    log,
    logRequest
};