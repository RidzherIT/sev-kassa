create TABLE consalt(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(25),
    title VARCHAR(255),
    bool BOOLEAN
);
create TABLE feedback(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(25),
    description VARCHAR(255),
    star INTEGER,
    date VARCHAR(25)
);
create TABLE orders(
    id SERIAL PRIMARY KEY,
    fio VARCHAR(255), 
    phone VARCHAR(25), 
    email VARCHAR(25), 
    item VARCHAR(255), 
    sale INTEGER, 
    value INTEGER, 
    paid BOOLEAN, 
    success BOOLEAN
);
create TABLE product(
    id SERIAL PRIMARY KEY,
    img VARCHAR(55), 
    title VARCHAR(55), 
    sale INTEGER, 
    href VARCHAR(100), 
    description VARCHAR(255), 
    time INTEGER
);