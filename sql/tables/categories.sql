/*
    Add option for parent paramete
*/

CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    PRIMARY KEY(id)
);