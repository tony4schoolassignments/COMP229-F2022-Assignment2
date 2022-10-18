/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: contacts.controller.server.js
*/
import contactModel from '../models/contacts.js';

export function DisplayContactList(req, res, next){
    contactModel.find(function(err, contactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts List', page: 'contacts/list', contacts: contactsCollection})
    })
}