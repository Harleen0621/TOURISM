
const nodemailer = require("nodemailer");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const connection = require("../config/database"); // Import database connection

// User Registration Route
router.post("/register", async (req, res) => {
    const { name, email, address, phone_number, password } = req.body;

    if (!name || !email || !password || !address || !phone_number) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email already exists
    const checkEmailQuery = "SELECT * FROM user_table WHERE email = ? or phone_number = ?";

    connection.query(checkEmailQuery, [email,phone_number], async (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length > 0) {
            // Email exists, redirect to login
            return res.json({ redirect: "/login.html", message: "User already exists. Please login." });
        } else {



            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert new user into database
            const insertQuery = "INSERT INTO user_table (username, email, phone_number, address, password) VALUES (?, ?, ?, ?, ?)";
            connection.query(insertQuery, [name, email, phone_number, address, hashedPassword], (err, result) => {
                if (err) {
                    console.error("Error inserting user:", err);
                    return res.status(500).json({ error: "Database error" });
                }
                res.json({ redirect: "/index.html", message: "User registered successfully!" });
            });
        }
    });
});

// Login Route
router.post("/login", (req, res) => {
    const { identifier, password } = req.body;
    
    const query = identifier.includes("@") 
        ? "SELECT * FROM user_table WHERE email = ?" 
        : "SELECT * FROM user_table WHERE phone_number = ?";
    
    connection.query(query, [identifier], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error" });
        }

        if (results.length === 0) {
            return res.status(400).json({ message: "User doesn't exist. Please register." });
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Login success
        res.json({ redirect: "/index.html" , message: "Login successful" }); 
    });
});

// Forgot Password Route (Email)
// router.post("/forgotPassword", (req, res) => {
//     const { email } = req.body;
//     const query = "SELECT * FROM user_table WHERE email = ?";
    
//     connection.query(query, [email], (err, results) => {
//         if (err) {
//             return res.status(500).json({ message: "Database error" });
//         }

//         if (results.length === 0) {
//             return res.status(400).json({ message: "User not found" });
//         }

//         const user = results[0];
//         const resetToken = generateResetToken(); // Implement token generation logic
//         sendPasswordResetEmail(user.email, resetToken);

//         res.json({ message: "Password reset email sent" });
//     });
// });

// Reset Password Route
router.post("/resetPassword", async (req, res) => {
    const { newPassword, identifier } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);


    const query = identifier.includes("@") 
    ? "SELECT * FROM user_table WHERE email = ?" 
    : "SELECT * FROM user_table WHERE phone_number = ?";

// Check whether the user email id or phone number is present or not
connection.query(query, [identifier], async (err, results) => {
    if (err) {
        return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
        return res.status(400).json({ message: "User doesn't exist. Please register." });
    }

});

// Update Password
const sql_query = identifier.includes("@") 
        ? "UPDATE user_table SET password = ? WHERE email = ?" 
        : "UPDATE user_table SET password = ? WHERE phone_number = ?";

    // Update password in database
    connection.query(sql_query, [hashedPassword, identifier], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error updating password" });
        }
        res.json({ message: "Password reset successfully" });
    });
    
});

// // Email Sending Function (Nodemailer)
// function sendPasswordResetEmail(userEmail, resetToken) {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your-email@example.com',
//             pass: 'your-email-password'
//         }
//     });

//     const resetUrl = `http://localhost:5000/resetPassword/${resetToken}`; // Example URL for resetting password

//     const mailOptions = {
//         from: 'your-email@example.com',
//         to: userEmail,
//         subject: 'Password Reset Request',
//         html: `<h1>Password Reset</h1><p>Please click <a href="${resetUrl}">here</a> to reset your password.</p>`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Email sent: " + info.response);
//         }
//     });
// }

// function generateResetToken() {
//     return Math.random().toString(36).substring(2, 15); // Simple example
// }


module.exports = router;

