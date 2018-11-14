import {Request, Response, Router} from 'express';
import { MysqlError, FieldInfo } from 'mysql';
import dbConnection from "../config/database"
import Students from "../models/Students";

var auth = Router();

auth.route('/signup')
    .get((req: Request, res: Response) => {
        (async function fetchUsers(){
            dbConnection.query('SELECT * from students', function (error: MysqlError | null, results?: any, fields?: FieldInfo[]) {
                if (error) throw error;
                console.log(results)
                res.send(results)
            })
        }())
        // res.json(req.body);
    })
    .post((req: Request, res: Response) => {
        const student = new Students("sanchit", "sanchitmittal1@gmail.com", "password", 1, 1, "1234", "male", new Date(), "line-1", "line-2", "city", "state", "country", 1, "class");        
        (async function insertUser(){
            const query = `INSERT INTO \`students\`(\`Created\`, \`Name\`, \`Email\`, \`Phone_Number\`, \`User_TypeID\`) VALUES (${Date.now()}, "${student.name}", "${student.email}", "${student.phoneNumber}", ${student.userTypeId})`;
            console.log(`query is ${query}`);
            dbConnection.query(`${query}`, function(error: MysqlError | null, results?: any, fields?: FieldInfo[]) {
                if (error) throw error;
                console.log(results)
                res.json(results)
            })
        }())        
    })
export default auth;