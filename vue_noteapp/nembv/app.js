// var createError = require("http-errors");
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../vue_noteapp", "dist")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", require("./routes/api"));
// app.use(cookieParser());

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ success: false, msg: err.message });
  next(err);
});

const mongoose = require("mongoose");
const cfg = require("./cfg/cfg");
if (!cfg) {
  console.error("./cfg/cfg.js file not exists");
  process.exit(1);
}
mongoose.connect(cfg.db.url, err => {
  if (!err) {
    console.log("mongoose connected! ");
  }
});
// const url =
//   "mongodb+srv://kwongu14:123qwe@testreact.qycaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect(url, err => {
//   if (err) return console.log(err);
//   console.log("mongoose connected");
// });

const pg = require("./playGround");

mongoose.connect(cfg.db.url, err => {
  if (err) return console.error(err);
  console.log("mongoose connected");
  pg.test.model();
});

module.exports = app;
