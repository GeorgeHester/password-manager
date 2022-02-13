CREATE TABLE IF NOT EXISTS account_custom_fields (
    user_id UUID,
    account_id UUID,
    field_name TEXT NOT NULL,
    field_data TEXT,
    PRIMARY KEY (user_id, account_id, field_name),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);