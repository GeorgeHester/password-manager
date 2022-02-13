CREATE
OR REPLACE FUNCTION get_or_create_category(TEXT) RETURNS
SETOF categories LANGUAGE plpgsql AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM categories WHERE name = $1) THEN
        INSERT INTO categories
            (name)
        VALUES
            ($1)
        RETURNING *;
    ELSE
        SELECT *
        FROM categories
        WHERE name = $1;
    END IF;
END;
$$;