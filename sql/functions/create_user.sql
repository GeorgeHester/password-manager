CREATE
OR REPLACE FUNCTION create_user(TEXT, TEXT, TEXT, TEXT, TEXT) RETURNS
SETOF users LANGUAGE plpgsql AS $$
BEGIN
RETURN 
QUERY
INSERT INTO users
    (
        first_name,
        last_name,
        email,
        password,
        password_salt
    )
VALUES
    (
        $1,
        $2,
        $3,
        $4,
        $5
    )
RETURNING *;
END;
$$;