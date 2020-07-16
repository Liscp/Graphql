;
'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    connectDb = require('../config/db'),
    passport = require('cors'),
    cors = require('cors')
    parseurl = require('parseurl')
    


let app = express(),
    session = require('express-session'),
    db = connectDb(),
    sess = {
        secret: 'hola',
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        }
    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

//cors
app.use(cors(corsOptions))

//session
app.use(session(sess))

//passport
// app.use(passport.initialize())
// app.use(passport.session())

module.exports= app