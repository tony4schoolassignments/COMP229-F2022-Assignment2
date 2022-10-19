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
        DisplayContactsUpdatePage, ProcessContactsUpdatePage, ProcessContactsDelete } from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', DisplayContactsAddPage)
router.post('/contact-add', ProcessContactsAddPage);
router.get('/contact-update/:id', DisplayContactsUpdatePage);
router.post('/contact-update/:id', ProcessContactsUpdatePage);
router.get('/contact-delete/:id', ProcessContactsDelete);

export default router;