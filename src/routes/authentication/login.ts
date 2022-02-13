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
        await databaseHandler.databaseClient.query('SELECT * FROM create_account($1, $2, $3, $4, $5, $6, $7, $8)',
            [
                request.headers['id'],
                request.body.account.category.name,
                request.body.account.name,
                request.body.account.website,
                request.body.account.username,
                request.body.account.email,
                request.body.account.password,
                request.body.account.notes
            ]);

        let databaseResponse = databaseHandler.databaseClient.query('SELECT * FROM get_accounts($1)',
            [
                request.headers['id']
            ]);

        console.log(databaseResponse);

        /*
            Get all accounts for user and return as table data
        */


        response.status(200).send({
            type: "success",

            detail: "Account created"
        })


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