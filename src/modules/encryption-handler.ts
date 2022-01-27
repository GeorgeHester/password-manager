/*
    Imported module(s)
*/
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const saltRounds: number = 10;

/*
    Password object types
*/
type Password = {
    password: string;
    salt: string;
};

/*
    Function to hash password for database storage
*/
function hashPassword(password: string): Password
{
    let salt = crypto.randomBytes(4).toString('hex');
    password = Buffer.from(password, 'utf-8').toString('hex');

    let saltBcrypt = bcrypt.genSaltSync(saltRounds);
    let hashedPassword = bcrypt.hashSync(Buffer.from(salt + password, 'hex'), saltBcrypt);

    return {
        password: hashedPassword,
        salt: Buffer.from(salt, 'hex').toString('base64')
    };
};

/*
    Module export
*/
export
{
    hashPassword
};

export type
{
    Password
};