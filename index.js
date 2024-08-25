const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

const user_id = "BasiReddy_HarshithaReddy_09042005";
const email = "basi.harshithareddy2021@vitstudent.ac.in";
const roll_number = "21BDS0294";

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        if (!Array.isArray(data)) {
            throw new Error("Invalid input format.");
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowerAlphabets = alphabets.filter(item => item === item.toLowerCase());
        const highestLowercaseAlphabet = lowerAlphabets.length ? [lowerAlphabets.sort().pop()] : [];

        res.status(200).json({
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        });
    } catch (error) {
        res.status(400).json({
            is_success: false,
            message: error.message
        });
    }
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
