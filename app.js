const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const morgan = require('morgan'); // Optional: use this if you prefer morgan instead of the custom logger

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const logger = require('./middleware/logger'); // Using our own logger middleware

const app = express();

// Optional: switch to morgan by commenting this line and uncommenting the morgan line above
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

module.exports = app;
