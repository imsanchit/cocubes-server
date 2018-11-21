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
var jwt = require("jsonwebtoken");
var welcome = express_1.Router();
welcome.route('/')
    .get((req, res) => {
    const { token } = req.query;
    jwt.verify(token, "secretKey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        }
        else {
            const { userId } = authData;
            (function insertUser() {
                return __awaiter(this, void 0, void 0, function* () {
                    const query = `Update \`students\` set \`userVerified\` = true where \`ID\` = "${userId}"`;
                    database_1.default.query(`${query}`, function (error, results, fields) {
                        if (error) {
                            const errorResp = {
                                "code": error.code,
                                "message": error.message
                            };
                            res.json(errorResp);
                            return;
                        }
                        res.json(results);
                    });
                });
            }());
            // res.redirect("/")
            // res.json({
            //     message: "User verified",
            //     authData
            // })
        }
    });
});
exports.default = welcome;
//# sourceMappingURL=welcome.js.map