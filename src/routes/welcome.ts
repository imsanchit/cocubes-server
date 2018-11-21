import {Request, Response, Router} from 'express';
import { MysqlError, FieldInfo } from 'mysql';
import dbConnection from "../config/database"
var jwt = require("jsonwebtoken");

var welcome = Router();

welcome.route('/')
    .get((req: Request, res: Response) => { 
        
        const {token} = req.query

        jwt.verify(token, "secretKey", (err: any, authData: any) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const { userId } = authData;


                (async function insertUser(){
                    const query = `Update \`students\` set \`userVerified\` = true where \`ID\` = "${userId}"`;
                    dbConnection.query(`${query}`, function(error: MysqlError | null, results?: any, fields?: FieldInfo[]) {
                        if (error) {
                            const errorResp = {
                                "code": error.code,
                                "message": error.message
                            }
                            res.json(errorResp)
                            return
                        }
                        // res.redirect("/")
                        res.json(results)
                    })
                }())
            }
        })
        
    })
export default welcome;