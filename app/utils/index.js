/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: index.js
*/
export function userDisplayName(req){
    if(req.user){
        return req.user.displayName;
    };
    return '';
};

// this function will send unauthenticated users back to login page
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    };
    next();
};