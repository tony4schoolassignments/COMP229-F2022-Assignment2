/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: auth.controller.server.js
*/
import express from 'express';
import passport from 'passport';

// need to include the User Model for authentication 
import User from '../models/user.js';

// import DisplayName Utility method
import { userDisplayName } from '../utils/index.js';

// Display login page function
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: userDisplayName(req)})
    };
    return res.redirect('/contact-list');
};

// display register page
export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: userDisplayName(req)})
    };
    return res.redirect('/contact-list');
};

// Processing function for login page
export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info){
        // error checking
        if(err){
            console.error(err);
            res.end(err);
        };
        // error message when user logs in with account that doesn't exist
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        };
        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            };
            return res.redirect('/contact-list');
        });
    })(req, res, next);
};

// process function for register page
export function ProcessRegisterPage(req, res, next){
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });
    User.register(newUser, req.body.password, function(err){
        // error handling
        if(err){
            if(err.name == "UserExistsError"){
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error');
            } else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error');
            };
            return res.redirect('/register');
        };
        // if no error
        return passport.authenticate('local')(req, res, function(){
            return res.redirect('/contact-list');
        });
    });
};

// logout funcion
export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        };
        console.log("User logged out successfully");
    });
    res.redirect('/login');
};