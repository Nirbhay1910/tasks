const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const cors = require('cors');

// Start express app
const app = express();
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// ROUTES
app.use('/api/v1/users', userRouter);

module.exports = app;
