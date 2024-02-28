const express = require('express');
const path = require('path');
const knex = require('knex');
const knexConfig = require('./knexfile');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/submitData', async (req, res) => {

    // Setup db connection
    const db = knex(knexConfig);
    const saltRounds = 5;
    const data = {
        name: req.body.cardHolderName,
        card_number: await bcrypt.hash(req.body.cardNumber, saltRounds),
        cvv: await bcrypt.hash(req.body.cvv, saltRounds),
        expiry_date: req.body.expirationDate
    };

    await db('creditcard_info')
        .insert(data)
        .then(() => {
            res.redirect('/?status=success');
        }).catch((err) => {
            res.redirect('/?status=error');
        }).finally(() => {
            db.destroy();
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});