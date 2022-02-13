/*
    Imported module(s)
*/
import crypto from 'crypto';

/*
    key object type
*/
type Key = {
    id?: string;
    public: string;
    private: string;
};

/*
    Function to generate key
*/
function generateKey(): Key
{
    /*
        Generate a random key pair
    */
    let { publicKey, privateKey } = crypto.generateKeyPairSync('ec',
        {
            namedCurve: 'secp256k1',
            publicKeyEncoding: {
                type: 'spki',
                format: 'der'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'der'
            }
        }
    );

    return {
        public: publicKey.toString('hex'),
        private: privateKey.toString('hex')
    };
};

/*
    Module export
*/
export
{
    generateKey
};

export type
{
    Key
};