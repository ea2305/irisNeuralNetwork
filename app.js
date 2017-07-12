
/**
 * Main definition of node Application
 * @author Elihu A. Cruz Albores
 * @version 0.0.1
 * @since 18-06-2017
 */
'use strict';

//Variable definitions
const express = require('express');

let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let sassMiddleware = require('node-sass-middleware');

//Router definitions
let index = require('./routes/index');
let user_router  = require('./routes/user');
let file_router  = require('./routes/file');
let type_file_router = require('./routes/type_file');
let neuralNetwork = require('./routes/neuralNetwork');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

//Router configurations
app.use('/', index);
app.use('/user', user_router);
app.use('/file', file_router);
app.use('/type_file', type_file_router);
app.use('/network', neuralNetwork );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
   res
       .json({
           msg : "Error, Resource not found"
       })
       .status(400);
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
