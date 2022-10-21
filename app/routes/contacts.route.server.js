/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: contacts.route.server.js
*/
import { Router } from "express";

import { DisplayContactsAddPage, DisplayContactsList, ProcessContactsAddPage,
        DisplayContactsUpdatePage, ProcessContactsUpdatePage, 
        ProcessContactsDelete } from "../controllers/contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

// wiring path /contact-list to function DisplayContactsList that will render the page
// AuthGuard is function that prevents unauthorized users to accesing this path.
router.get('/contact-list', AuthGuard,  DisplayContactsList);
// rest of these follow same logic as above. 
// get will call display functions and post will call process functions to update data on the site
router.get('/contact-add', AuthGuard, DisplayContactsAddPage)
router.post('/contact-add', AuthGuard, ProcessContactsAddPage);
router.get('/contact-update/:id', AuthGuard, DisplayContactsUpdatePage);
router.post('/contact-update/:id', AuthGuard, ProcessContactsUpdatePage);
router.get('/contact-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;