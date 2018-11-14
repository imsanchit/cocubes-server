import createHttpError from "http-errors";
import express from "express";
import { Request, Response } from "express";
import path from "path";
import logger from "morgan";

import indexRouter from "./routes/index";
import authRouter from "./routes/auth";
import usersRouter from "./routes/users";
import { NextFunction } from "connect";

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createHttpError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(`error message should be ${err.message}`)
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err)
});

export default app;