/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: contacts.js
*/
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    number: String,
    emailAddress: String
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);