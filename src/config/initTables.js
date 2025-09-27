// Get the pool from the db.js

const pool = require("../service/db.js");

const createTablesSQL = `
-- Modules table
DROP TABLE IF EXISTS Modules;

CREATE TABLE Modules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    alt VARCHAR(50),
    credits INT,
    hours INT,
    renamed VARCHAR(255),
    description TEXT,
    learnings JSON,
    difficulty DECIMAL(2,1),
    link VARCHAR(255),
    year_sem VARCHAR(20)
);
`;

// Data to insert
const modules = [
    [
        "ST0523 - Fundamentals Of Programming (FOP)",
        "/assets/images/fop/fop_cover.png",
        "FOP",
        5,
        75,
        "Programming Methodology",
        "Module aims to improve problem-solving skills and learn basic programming methodology!",
        JSON.stringify(["NodeJS","Functions","Arrays","Objects","Variables","Data Types"]),
        3,
        "/fop/intro",
        "year1_sem1"
    ],
    [
        "ST2413 - Fundamentals Of Computing (FOC)",
        "/assets/images/foc/foc_cover.jpg",
        "FOC",
        4,
        60,
        "Computer Organisation",
        "Module aims to improve understanding of basic computer hardware components, computer networking and usage of the Linux Operating System. It also touches a little bit on how to use AWS EC2 instance.",
        JSON.stringify(["Low Level computer workings","Binary","Computer Networking","TCP/IP","Ubuntu Linux & Filesystem","HTTP","AWS Cloud"]),
        4.5,
        "/foc/intro",
        "year1_sem1"
    ]
];

// Parameterized query
const insertModulesSQL = `
    INSERT INTO Modules
    (title, img, alt, credits, hours, renamed, description, learnings, difficulty, link, year_sem)
    VALUES ?
`;


pool.query(createTablesSQL, (err) => {
    if (err) {
        console.error("Error creating tables:", err);
    }
    console.log("All tables created successfully.");

    // Execute bulk insert
    pool.query(insertModulesSQL, [modules], (err, results) => {
        if (err) {
            console.error("Error inserting modules:", err);
        } else {
            console.log("Modules inserted successfully:", results.affectedRows);
            process.exit();
        }
    });
});