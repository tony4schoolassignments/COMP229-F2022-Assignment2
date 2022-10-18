/*
    COMP229-401 Fall 2022
    Assignment 2 - Express Portfolio – Authentication 
    Date: October 21, 2022

    Author: Junesik (Tony) Han
    Student #: 301252900

    Filename: contacts.route.server.js
*/
import { Router } from "express";

import { DisplayContactList } from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/');

router.get('/contact-list', DisplayContactList);

export default router;