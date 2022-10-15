/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: index.route.server.js
*/
import { Router } from 'express';
// importing functions from index.controller.server.js
import {  displayAboutPage, displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage } from '../controllers/index.controller.server.js';

// instantiate router 
const router = Router();
// wiring the path to their respective function that will render the page
router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);

export default router;