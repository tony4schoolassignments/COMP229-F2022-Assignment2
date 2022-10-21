/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: user.js
*/
import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

// user object in our database. it has 3 properties: displayname, username and email address
const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
},{
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);