/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: index.controller.server.js
*/

// function that renders Home page
export function displayHomePage(req, res, next){
    res.render('index', { title: 'Home', page: 'home' });
};

// function that renders About Me page
export function displayAboutPage(req, res, next){
    res.render('index', { title: 'About Me', page: 'about' });
};

// function that renders Projects page
export function displayProjectsPage(req, res, next){
    res.render('index', { title: 'Projects', page: 'projects' });
};

// function that renders Services page
export function displayServicesPage(req, res, next){
    res.render('index', { title: 'Services', page: 'services' });
};

// function that renders Contact page
export function displayContactPage(req, res, next){
    res.render('index', { title: 'Contact', page: 'contact' });
};