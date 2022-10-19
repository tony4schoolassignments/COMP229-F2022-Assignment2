/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: auth.route.server.js
*/
import {Router} from 'express';
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessRegisterPage,ProcessLogoutPage } from '../controllers/auth.controller.server.js';

const router = Router();

// Display Login Page
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);

// Display Registration Page
router.get('/register', DisplayRegisterPage);
// Process Registration Page
router.post('/register', ProcessRegisterPage);

// Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;