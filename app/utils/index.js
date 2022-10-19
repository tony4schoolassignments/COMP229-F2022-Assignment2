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
    }
    return '';
}