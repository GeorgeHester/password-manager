CREATE TABLE IF NOT EXISTS keys ( 
    id UUID DEFAULT uuid_generate_v4(),
    public_key TEXT NOT NULL UNIQUE,
    private_key TEXT NOT NULL UNIQUE,
    PRIMARY KEY (id)
);