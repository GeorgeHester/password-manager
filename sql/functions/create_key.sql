CREATE
OR REPLACE PROCEDURE create_key(TEXT, TEXT) LANGUAGE plpgsql AS $$
BEGIN
INSERT INTO keys
    (
        public_key,
        private_key
    )
VALUES
    (
        $1,
        $2
    );
END;
$$;