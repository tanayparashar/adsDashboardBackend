var createError = require('http-errors');
var bodyParser = require('body-parser')
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({path: './.env'});
var mongoose = require('./database/database')

// import routes
var indexRouter = require('./routes/index.routes');
var assetsRouter = require('./routes/campaign.routes');
var deviceRouter = require('./routes/product.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//init routes
app.use('/', indexRouter);
app.use('/api/v1/campaign', assetsRouter);
app.use('/api/v1/product', deviceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;