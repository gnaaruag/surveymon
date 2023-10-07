const base = require('../public/js/generateb64id');
const express = require('express');
const router = express.Router();

const db = require('../db/db');
const { parse } = require('dotenv');


router.get('/create', (req,res)=> {
    var base64id = base(10);
    console.log(base64id);
    // let url = '/create/' + base(10);
    let url = '/create/' + base64id;

    let sql = `SELECT survey_id FROM id_cache WHERE survey_id = '${base64id}'`;

    db.query(sql, async (err, result) =>
    {
        if (err){
            throw err;
        }
        else {
            if (result.length == 0) {
                let sql2 = `INSERT INTO id_cache(survey_id) VALUES ('${base64id}')`;
                db.query(sql2, (err) => {
                    if (err) {
                        throw err;
                    }
                });
                console.log(url);
                res.redirect(url);
            }
            else {
                console.log('already exists')
            }
        }
    });
    
    
});

router.get('/create/:id', (req,res) => {
    console.log(req.params.id);
    res.render('newsurvey');
});

module.exports = router;