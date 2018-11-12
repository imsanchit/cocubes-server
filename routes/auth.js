var express = require('express');
var router = express.Router();
var db = require('../database');
const Students = require('../models/students')

router.route('/signup')
    .get((req, res) => {
        (async function fetchUsers(){
            db.query('SELECT * from students', function (error, results, fields) {
                if (error) throw error;
                console.log(results)
                res.send(results)
            })
        }())
        // res.json(req.body);
    })
    .post((req, res) => {
        const s = new Students('sanchit', 'sanchitmittal1@gmail.com');
        const phone_number = "9717165634";
        const user_type_id = "1";
        (async function insertUser(){
            const query = `INSERT INTO \`students\`(\`Created\`, \`Name\`, \`Email\`, \`Phone_Number\`, \`User_TypeID\`) VALUES (${Date.now()}, "${s.name}", "${s.email}", "${phone_number}", ${user_type_id})`;
            console.log(`query is ${query}`);
            db.query(`${query}`, function(error, results, fields) {
                if (error) throw error;
                console.log(results)
            })
        }())
        res.json(results);
    })
module.exports = router;