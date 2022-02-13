CREATE TABLE IF NOT EXISTS accounts (
    id UUID DEFAULT uuid_generate_v4(),
    user_id UUID,
    category_id UUID,
    name TEXT NOT NULL,
    website TEXT,
    username TEXT,
    email TEXT,
    password TEXT NOT NULL,
    creation_time TIMESTAMPTZ DEFAULT NOW(),
    modified_time TIMESTAMPTZ DEFAULT NOW(),
    notes TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS tags (
    id UUID DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
);