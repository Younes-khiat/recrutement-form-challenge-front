const express = require('express');
const path = require('path'); // Make sure to include path
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
console.log('Views directory:', path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views')); // Explicitly set views directory

app.get('/', (req, res) => {
    res.render('index'); // Renders views/index.ejs
});

app.listen(3002, () => {
    console.log('Server is running on port 3000');
});