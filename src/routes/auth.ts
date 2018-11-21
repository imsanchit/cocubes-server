import {Request, Response, Router} from 'express';
import { MysqlError, FieldInfo } from 'mysql';
var nodemailer = require('nodemailer');
var jwt = require("jsonwebtoken");
import dbConnection from "../config/database"
import { JsonWebTokenError } from "jsonwebtoken";

var auth = Router();

auth.route('/signup')
    .post((req: Request, res: Response) => {

        const { username, email, phoneNumber } = req.body;

        const user = {
            username: username,
            email: email,
            phoneNumber: phoneNumber 
        };

        (async function insertUser(){
            const query = `INSERT INTO \`students\`(\`Created\`, \`Name\`, \`Email\`, \`Phone_Number\`, \`User_TypeID\`) VALUES (${Date.now()}, "${username}", "${email}", "${phoneNumber}", 1)`;
            dbConnection.query(`${query}`, function(error: MysqlError | null, results?: any, fields?: FieldInfo[]) {
                if (error) {
                    const errorResp = {
                        "code": error.code,
                        "message": error.message
                    }
                    res.json(errorResp)
                    return
                }

                const { insertId } = results;
                  
                jwt.sign({
                    userId: insertId
                }, "secretKey", { expiresIn: '1d'

                }, (err: JsonWebTokenError, token: any) => {
                    var tomorrow = new Date();
                    tomorrow.setDate((new Date()).getDate() + 1);
                    const expiration = tomorrow.getTime();

                    const query = `INSERT INTO \`tokens\`(\`Created\`, \`UserID\`, \`Hash\`, \`Email_verified\`, \`Expiration\`) VALUES (${Date.now()}, "${insertId}", "${token}", false, "${expiration}")`;
                    dbConnection.query(`${query}`, function(error: MysqlError | null, results?: any, fields?: FieldInfo[]) {
                        if (error) {
                            const errorResp = {
                                "code": error.code,
                                "message": error.message
                            }
                            res.json(errorResp)
                            return
                        }
                        res.json(results)

                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                    type: 'OAuth2',
                                    user: 'sanchit13103509cse@gmail.com',
                                    clientId: '298351554194-lkm6ls22gg5seqhtq9u3htltt5aaqhp6.apps.googleusercontent.com',
                                    clientSecret: 'zKrPXnFbUFfg0guacTpp2Bop',
                                    refreshToken: '1/Wf3afmRUXsUk7zbRXNaUAln_m_9c7hn6uq4-VmTpOHZ_GjbUoK9sxj5hEipw2HG0'
                            }
                        })
                        
                        const url = `http://localhost:3000/welcome?token=${token}`

                        var mailOptions = {
                            from: 'Sanchit Mittal <sanchit13103509cse@gmail.com>',
                            to: email,
                            subject: 'Verify email',
                            html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`
                        }
                        
                        transporter.sendMail(mailOptions, function (err: any, res: any) {
                            if(err){
                                console.log('Error');
                            } else {
                                console.log("Message sent: " + res.message);
                            }
                            transporter.close();
                        })                       
                        
                    })
                })
                
            })
        }())
    })
export default auth;

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