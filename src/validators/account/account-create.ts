/*
    Imported module(s)
*/
import joi, { ValidationResult } from 'joi';

/*
    Function to validate request with schema
*/
function validate(request: any, response: any, next: any): void
{
    /*
        Specific
    */
    let validBody = joi.object({
        account: {
            name: joi.string().required(),
            website: joi.string().allow(''),
            username: joi.string().allow(''),
            email: joi.string().allow(''),
            password: joi.string().required(),
            notes: joi.string().allow(''),
            category: {
                name: joi.string().required()
            }
        }
    });

    let validHeaders = joi.object({

    });
    /*
        Specific
    */

    let bodyIsValid: ValidationResult = validBody.validate(request.body, { allowUnknown: true });
    let headersAreValid: ValidationResult = validHeaders.validate(request.headers, { allowUnknown: true });

    if (bodyIsValid.error || headersAreValid.error)
    {
        let errorMessage: string = '';

        if (bodyIsValid.error)
        {
            errorMessage = bodyIsValid.error.message;
        }
        else if (headersAreValid.error)
        {
            errorMessage = headersAreValid.error.message;
        };

        response.status(400).send({
            type: "error",
            detail: errorMessage
        });
        return;
    };

    next();
};

/*
    Module export
*/
export = validate;