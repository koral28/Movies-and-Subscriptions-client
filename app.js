var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var session = require("express-session");

var indexRouter = require("./routes/index");
var createDBRouter = require("./routes/createDB");
var membersRouter = require("./routes/members");
var moviesRouter = require("./routes/movies");
var subscriptionsRouter = require("./routes/subscriptions");

var app = express();
app.use(session({ secret: "my-secret" }));
require("./configs/database");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/createDB", createDBRouter);
app.use("/api/members", membersRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/subscriptions", subscriptionsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var server = app.listen(8080, function () {
  console.log("Ready on port %d", server.address().port);
});

module.exports = app;
