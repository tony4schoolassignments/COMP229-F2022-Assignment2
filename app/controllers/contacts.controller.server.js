/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: contacts.controller.server.js
*/
import contactModel from '../models/contacts.js';
import { userDisplayName } from '../utils/index.js';

// function for displaying contact list
export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactsCollection){
        // if there is error
        if(err){
            console.error(err);
            res.end(err);
        };
        // no error then render page
        res.render('index', {title: 'Business Contacts List', page: 'contacts/list', contacts: contactsCollection, displayName: userDisplayName(req)})
    });
};

// function for displaying contact add page
export function DisplayContactsAddPage(req, res, next){
    // render this page
    res.render('index', {title: 'Add Contact', page: 'contacts/add', contact: {}, displayName: userDisplayName(req)});
};

// function for processing contact add page
export function ProcessContactsAddPage(req, res, next){
    // create new contact using name, number and email from req
    let newContact = contactModel({
        name: req.body.name,
        number: req.body.number,
        emailAddress: req.body.emailAddress
    });
    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        // redirect to contact list page when finished
        res.redirect('/contact-list')
    });
};

// function for displaying update page
export function DisplayContactsUpdatePage(req, res, next){
    // retreive id
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        // render update contact page
        res.render('index', {title: 'Update Contact', page: 'contacts/update', contact: contact, displayName: userDisplayName(req)});
    });  
};

// function for processing update page
export function ProcessContactsUpdatePage(req, res, next){
    // retreive id
    let id = req.params.id;
    // create new contact
    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        emailAddress: req.body.emailAddress
    });

    // update single model with same id 
    contactModel.updateOne({_id: id}, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        // redirect back to contact list page
        res.redirect('/contact-list');
    });
};

// function for deleting contacts
export function ProcessContactsDelete(req, res, next){
    // retreive id
    let id = req.params.id;
    // delete id 
    contactModel.remove({_id: id}, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        // redirect to contact list page
        res.redirect('/contact-list');
    });
};