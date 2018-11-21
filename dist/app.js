"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = __importDefault(require("./routes/auth"));
const welcome_1 = __importDefault(require("./routes/welcome"));
const users_1 = __importDefault(require("./routes/users"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/auth', auth_1.default);
app.use('/welcome', welcome_1.default);
app.use('/users', users_1.default);
// http://localhost:3000/welcome?token=${token}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    console.log(`error message should be ${err.message}`);
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send(err);
});
exports.default = app;
//# sourceMappingURL=app.js.map