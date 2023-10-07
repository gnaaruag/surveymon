const express = require('express');
const router = express.Router();

const db = require('../db/db');
const { parse } = require('dotenv');


router.get('/dashboard', (req,res)=> {
    res.render('dashboard');
});

router.post('/dashboard', (req,res) => {
    
});

module.exports = router;