const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const db = require('../db/db');


const { parse } = require('dotenv');


router.get('/', (req,res) => 
{
    res.render('login');
});

router.get('/signup', (req,res) => {
    res.render('signup')
})

router.post('/signup', async (req,res) =>
{
    try {
        const hashed = await bcrypt.hash(req.body.password, 10);
        console.log(hashed);
        let sql = `INSERT INTO user (organisation_name, user_name, password) VALUES ('${req.body.orgname}', '${req.body.username}',
         '${hashed}')`;
        db.query(sql, err => 
            {
                if (err) {
                    throw err;
                }
                else {
                    console.log('user created');
                }
            });
        res.render('login');
    }
    catch {
        res.status(500).send('something went wrong...');
    }
});

router.post('/login' , async (req,res) => 
{
    let sql = `SELECT * FROM user WHERE user_name = '${req.body.username}'`;
    db.query(sql, async (err, result) =>
    {
        if (err){
            throw err;
        }
        else {
            if (await bcrypt.compare(req.body.password, result[0].password)) {
                res.send('succes');
            }
            else {
                res.render('login')
            }
        }
    });
});





module.exports = router;