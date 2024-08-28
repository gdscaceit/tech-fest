const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the registration form
app.get('/register', (req, res) => {
    res.render('register');
});

// Route to handle form submission
app.post('/register', (req, res) => {
    const { name, email, phone, event } = req.body;

    // Here you can handle the registration logic, e.g., saving data to a database
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Event: ${event}`);

    // After processing, you can redirect or show a success message
    res.send('Registration successful!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
