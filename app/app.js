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

// Auth Step 1 - Import modles
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Step 2 - Define our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - Import the user model
import User from './models/user.js';


// import Mongoose module
import mongoose from 'mongoose';

// Configuration module
import { MongoURI, Secret } from '../config/config.js';

// Import routes 
import indexRouter from "./routes/index.route.server.js"
import contactRouter from "./routes/contacts.route.server.js";
import authRouter from "./routes/auth.route.server.js";


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

// Auth Step 4 - Setup Express
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Auth Step 5 - Setup Flash
app.use(flash());

// Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

// Auth Step 7 - Implementing the Auth Strategy
passport.use(User.createStrategy());

// Auth Step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use routes from index.route.server.js
app.use('/', indexRouter);
app.use('/', contactRouter);
app.use('/', authRouter);

export default app;
