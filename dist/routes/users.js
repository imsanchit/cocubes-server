"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { jwt } from "jsonwebtoken"
var users = express_1.Router();
/* GET users listing. */
users.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = users;
//# sourceMappingURL=users.js.map