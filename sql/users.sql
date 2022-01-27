CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    password_salt TEXT NOT NULL,
    creation_time TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO users(first_name, last_name, email, password, password_salt)