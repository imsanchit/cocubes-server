"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../config/database"));
const Students_1 = __importDefault(require("../models/Students"));
var auth = express_1.Router();
auth.route('/signup')
    .get((req, res) => {
    (function fetchUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * from students', function (error, results, fields) {
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
    const student = new Students_1.default("sanchit", "sanchitmittal1@gmail.com", "password", 1, 1, "1234", "male", new Date(), "line-1", "line-2", "city", "state", "country", 1, "class");
    (function insertUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO \`students\`(\`Created\`, \`Name\`, \`Email\`, \`Phone_Number\`, \`User_TypeID\`) VALUES (${Date.now()}, "${student.name}", "${student.email}", "${student.phoneNumber}", ${student.userTypeId})`;
            console.log(`query is ${query}`);
            database_1.default.query(`${query}`, function (error, results, fields) {
                if (error)
                    throw error;
                console.log(results);
                res.json(results);
            });
        });
    }());
});
exports.default = auth;
//# sourceMappingURL=auth.js.map