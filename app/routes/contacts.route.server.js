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

router.get('/contact-list', AuthGuard,  DisplayContactsList);
router.get('/contact-add', AuthGuard, DisplayContactsAddPage)
router.post('/contact-add', AuthGuard, ProcessContactsAddPage);
router.get('/contact-update/:id', AuthGuard, DisplayContactsUpdatePage);
router.post('/contact-update/:id', AuthGuard, ProcessContactsUpdatePage);
router.get('/contact-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;