
import {Request, Response, Router} from "express";
import { NextFunction } from "connect";

var index = Router()

/* GET home page. */
index.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send("Sign in")
});

export default index;