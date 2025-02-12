require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mysql = require("mysql2");

// Create MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Execute connection
connection.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL:", err);
    } else {
        console.log("Connected to MySQL successfully! (database.js)");
    }
});

module.exports = connection;
