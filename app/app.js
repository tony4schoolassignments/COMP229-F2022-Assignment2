/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: app.js
*/
// Third party modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// import Mongoose module
import mongoose from 'mongoose';

// Configuration module
import { MongoURI, Secret } from '../config/config.js';

// Import routes 
import indexRouter from "./routes/index.route.server.js"
import contactRouter from "./routes/contacts.route.server.js";


// Instantiate Express
const app = express();

// Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

// Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set up middlewares
// Set up ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
// Using third party modules
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Loading public folder as static files on client side
app.use(express.static(path.join(__dirname, '../public')));
app.unsubscribe(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use routes from index.route.server.js
app.use('/', indexRouter);
app.use('/', contactRouter);

export default app;
