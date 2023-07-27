CREATE TABLE poet(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    profile_quote VARCHAR(255)
);

CREATE TABLE quote(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    owner VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES poet (id)
);
