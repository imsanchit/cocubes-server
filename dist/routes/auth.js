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
var nodemailer = require('nodemailer');
var jwt = require("jsonwebtoken");
const database_1 = __importDefault(require("../config/database"));
var auth = express_1.Router();
auth.route('/signup')
    .post((req, res) => {
    const { username, email, phoneNumber } = req.body;
    const user = {
        username: username,
        email: email,
        phoneNumber: phoneNumber
    };
    (function insertUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO \`students\`(\`Created\`, \`Name\`, \`Email\`, \`Phone_Number\`, \`User_TypeID\`) VALUES (${Date.now()}, "${username}", "${email}", "${phoneNumber}", 1)`;
            database_1.default.query(`${query}`, function (error, results, fields) {
                if (error) {
                    const errorResp = {
                        "code": error.code,
                        "message": error.message
                    };
                    res.json(errorResp);
                    return;
                }
                const { insertId } = results;
                jwt.sign({
                    userId: insertId
                }, "secretKey", { expiresIn: '1d'
                }, (err, token) => {
                    var tomorrow = new Date();
                    tomorrow.setDate((new Date()).getDate() + 1);
                    const expiration = tomorrow.getTime();
                    const query = `INSERT INTO \`tokens\`(\`Created\`, \`UserID\`, \`Hash\`, \`Email_verified\`, \`Expiration\`) VALUES (${Date.now()}, "${insertId}", "${token}", false, "${expiration}")`;
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
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                type: 'OAuth2',
                                user: 'sanchit13103509cse@gmail.com',
                                clientId: '298351554194-lkm6ls22gg5seqhtq9u3htltt5aaqhp6.apps.googleusercontent.com',
                                clientSecret: 'zKrPXnFbUFfg0guacTpp2Bop',
                                refreshToken: '1/Wf3afmRUXsUk7zbRXNaUAln_m_9c7hn6uq4-VmTpOHZ_GjbUoK9sxj5hEipw2HG0'
                            }
                        });
                        const url = `http://localhost:3007/welcome?token=${token}`;
                        var mailOptions = {
                            from: 'Sanchit Mittal <sanchit13103509cse@gmail.com>',
                            to: email,
                            subject: 'Verify email',
                            html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`
                        };
                        transporter.sendMail(mailOptions, function (err, res) {
                            if (err) {
                                console.log('Error');
                            }
                            else {
                                console.log("Message sent: " + res.message);
                            }
                            transporter.close();
                        });
                    });
                });
            });
        });
    }());
});
exports.default = auth;
// .get((req: Request, res: Response) => {
//     (async function fetchUsers(){
//         dbConnection.query('SELECT * from students', function (error: MysqlError | null, results?: any, fields?: FieldInfo[]) {
//             if (error) throw error;
//             console.log(results)
//             res.send(results)
//         })
//     }())
//     // res.json(req.body);
// })
//# sourceMappingURL=auth.js.map