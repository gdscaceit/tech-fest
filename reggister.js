const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');

// Render the registration form
router.get('/', (req, res) => {
    res.render('register');
});

// Handle form submission
router.post('/', async (req, res) => {
    const { name, email, phone, event } = req.body;

    // Create a new registration document
    const newRegistration = new Registration({
        name,
        email,
        phone,
        event,
    });

    try {
        // Save to MongoDB
        await newRegistration.save();
        res.send('Registration successful!'); // You can redirect or render a success page
    } catch (error) {
        console.error('Error saving registration:', error);
        res.status(500).send('Something went wrong. Please try again.');
    }
});

module.exports = router;
