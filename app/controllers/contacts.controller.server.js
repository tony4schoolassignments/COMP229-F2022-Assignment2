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

export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        };
        res.render('index', {title: 'Business Contacts List', page: 'contacts/list', contacts: contactsCollection, displayName: userDisplayName(req)})
    });
};

export function DisplayContactsAddPage(req, res, next){
    res.render('index', {title: 'Add Contact', page: 'contacts/update', contact: {}, displayName: userDisplayName(req)});
};

export function ProcessContactsAddPage(req, res, next){
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
        res.redirect('/contact-list')
    });
};

export function DisplayContactsUpdatePage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Update Contact', page: 'contacts/update', contact: contact, displayName: userDisplayName(req)});
    });  
};

export function ProcessContactsUpdatePage(req, res, next){
    let id = req.params.id;

    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        emailAddress: req.body.emailAddress
    });

    contactModel.updateOne({_id: id}, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/contact-list');
    });
};

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/contact-list');
    });
};