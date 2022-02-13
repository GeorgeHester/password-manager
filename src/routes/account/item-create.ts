/*
    Imported module(s)
*/
import databaseHandler from '../../modules/database-handler';

/*
    Function to handle request
*/
async function request(request: any, response: any): Promise<void>
{
    try 
    {
        






    }
    catch (error)
    {
        response.status(500).send({
            type: "error",
            detail: "Server error"
        });
    };
};

/*
    Module export
*/
export = request;