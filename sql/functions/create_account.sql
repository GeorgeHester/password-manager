CREATE
OR REPLACE FUNCTION create_account(UUID, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT) RETURNS
SETOF accounts LANGUAGE plpgsql AS $$
BEGIN
RETURN 
QUERY
INSERT INTO accounts
    (
        user_id,
        category_id,
        name,
        website,
        username,
        email,
        password,
        notes
    )
VALUES
    (
        $1,
        (
            SELECT id
            FROM get_or_create_category($2)
        ),
        $3,
        $4,
        $5,
        $6,
        $7,
        $8
    )
RETURNING *;
END;
$$;