const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('./knexfile');
const bcrypt = require('bcrypt');

router.post('/submit', async (req, res) => {
    
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

module.exports = router;