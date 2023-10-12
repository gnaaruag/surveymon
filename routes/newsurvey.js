const base = require('../public/js/generateb64id');
const express = require('express');
const router = express.Router();

const db = require('../db/db');
const { parse } = require('dotenv');
const { json } = require('body-parser');


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

router.post('/success', (req,res) => {
    res.redirect('dashboard');
    var objlen = Object.keys(req.body).length / 6;
    var keys = Object.keys(req.body);
    console.log(typeof(keys[0]))
    console.log(keys);
    jsonObjSend = {};
    var i = 0;
    while (true) {
        if (i == objlen) {
            break;
        }
        else {
            var j = 6 * i;
            jsonObjInst =  {
                "question" : req.body[keys[j]],
                "reqCheck" : req.body[keys[j+1]],
                "opt1" : req.body[keys[j+2]],
                "opt2" : req.body[keys[j+3]],
                "opt3" : req.body[keys[j+4]],
                "opt4" : req.body[keys[j+5]],

            };
            jsonObjSend[`question${i+1}`] = jsonObjInst
        }
        i++;
    }
    // console.log(JSON.stringify(jsonObjSend));
});

module.exports = router;