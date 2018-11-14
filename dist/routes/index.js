"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var index = express_1.Router();
/* GET home page. */
index.get('/', function (req, res, next) {
    res.send("Sign in");
});
exports.default = index;
//# sourceMappingURL=index.js.map