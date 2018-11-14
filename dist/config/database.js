"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
var dbConnection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cocubes'
});
dbConnection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... ");
    }
    else {
        console.log(`Error connecting database ... ${err}`);
    }
});
exports.default = dbConnection;
// module.exports = connection;
//# sourceMappingURL=database.js.map