/**
 * User routes
 * @author Elihu A. Cruz Albores
 * @version 0.1.0
 * @since 25-06-2017
 */

'use strict';

const express = require('express');

let router = express.Router();

//Read all elements GET
router.get('/', function( req, res, next ) {
    res
        .send('DISPLAY USERS')
        .status(200);
});

//Read especific element GET
router.get('/:userId', function( req, res, next ) {
    res
        .send('DISPLAY USER')
        .status(200);
});

//Create element POST
router.post('/', function( req, res, next ) {
    res
        .send('USER WAS CREATED')
        .status(200);
});

//Update element PUT
router.put('/:userId', function( req, res, next ) {
    res
        .send('UPDATE USER')
        .status(200);
});

//Delete element DELETE
router.delete('/:userId', function( req, res, next ) {
    res
        .send('USER WAS DELETED')
        .status(200);
});

module.exports = router;







