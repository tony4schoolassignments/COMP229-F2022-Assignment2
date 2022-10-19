/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: index.controller.server.js
*/
import { userDisplayName } from "../utils/index.js";

// function that renders Home page
export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home', displayName: userDisplayName(req) });
};

// function that renders About Me page
export function displayAboutPage(req, res, next){
    res.render('index', { title: 'About Me', page: 'about', displayName: userDisplayName(req) });
};

// function that renders Projects page
export function displayProjectsPage(req, res, next){
    res.render('index', { title: 'Projects', page: 'projects', displayName: userDisplayName(req) });
};

// function that renders Services page
export function displayServicesPage(req, res, next){
    res.render('index', { title: 'Services', page: 'services', displayName: userDisplayName(req) });
};

// function that renders Contact page
export function displayContactPage(req, res, next){
    res.render('index', { title: 'Contact', page: 'contact', displayName: userDisplayName(req) });
};