const express = require('express');
const path = require('path');
const creditCardRoutes = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/creditCard', creditCardRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});