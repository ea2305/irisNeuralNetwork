'use strict';

/**
 * Router calls and main functions definitions
 * @author Elihu A. Cruz Albores
 * @version 0.0.1
 * @since 21-06-2017
 */

const express = require('express');

let router = express.Router();

//Read all elements GET     http://127.0.0.1/neural/
router.get('/', function( req, res, next ){
    res
        .send('RETURN ALL ELEMENTS')
        .status(200);
});

//Read an element GET       http://127.0.0.1/neural/element_1
router.get('/:elementId', function( req, res, next ){
    res
        .send('RETURN AN ELEMENT')
        .status(200);
});

//Create an element POST    http://127.0.0.1/neural/
router.post('/', function( req, res, next ){
    res
        .send('ELEMENT WAS CREATED')
        .status(200);
});

//Update an element UPDATE  http://127.0.0.1/neural/element_1
router.put('/:elementId', function( req, res, next ){
    res
        .send('ELEMENT WAS UPDATED')
        .status(200);
});

//Delete an element DELETE  http://127.0.0.1/neural/element_1
router.delete('/:elementId', function( req, res, next ){
    res
        .send('ELEMENT WAS DELETED')
        .status(200);
});

module.exports = router;