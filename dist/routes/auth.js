"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var express = require('express');
var router = express.Router();
var db = require('../config/database');
const Students = require('../models/students');
router.route('/signup')
    .get((req, res) => {
    (function fetchUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            db.query('SELECT * from students', function (error, results, fields) {
                if (error)
                    throw error;
                console.log(results);
                res.send(results);
            });
        });
    }());
    // res.json(req.body);
})
    .post((req, res) => {
    const s = new Students('sanchit', 'sanchitmittal1@gmail.com');
    const phone_number = "9717165634";
    const user_type_id = "1";
    (function insertUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO \`students\`(\`Created\`, \`Name\`, \`Email\`, \`Phone_Number\`, \`User_TypeID\`) VALUES (${Date.now()}, "${s.name}", "${s.email}", "${phone_number}", ${user_type_id})`;
            console.log(`query is ${query}`);
            db.query(`${query}`, function (error, results, fields) {
                if (error)
                    throw error;
                console.log(results);
                res.json(results);
            });
        });
    }());
});
module.exports = router;
//# sourceMappingURL=auth.js.map