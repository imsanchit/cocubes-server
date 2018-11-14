import { Request, Response, Router } from "express";
import { NextFunction } from "connect";
var users = Router();

/* GET users listing. */
users.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

export default users;