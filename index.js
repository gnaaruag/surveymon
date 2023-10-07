const db = require('./db/db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.json()) 
app.use(bodyParser.urlencoded({extended: true}));
app.use((express.static('public')))
app.set('view engine','ejs');
app.set('views','views'); 

const loginSignup = require('./routes/loginSignup');
const dash = require('./routes/dash');
const newsurvey = require('./routes/newsurvey');



app.use('/', loginSignup);
app.use('/', dash);
app.use('/', newsurvey);


db.connect(err => 
    {
        if (err) {
            throw err;
        }
        console.log('MySQL connected');
    }
);

app.listen(PORT, (req,res) => 
{
    console.log(`server running on port ${PORT}`);
}); 