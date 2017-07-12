/**
 * User routes
 * @author Elihu A. Cruz Albores
 * @version 0.1.0
 * @since 25-06-2017
 */

'use strict';

const express = require('express');
let user   = require('../controllers/User');
let router = express.Router();


//Read all elements GET
router.get('/', function( req, res, next ) {

    user.list( function ( users ) {
        res
            .json( users )
            .status(200);
    });
});

//Read especific element GET
router.get('/:userId', function( req, res, next ) {

    let id = req.params.userId;

    user.read( id , function ( user ) {
        res
            .json( user )
            .status(200);
    })
});

//Create element POST
router.post('/', function( req, res, next ) {

    let body = req.body;

    user.create( body, function ( user ) {
        res
            .json( user )
            .status(201);
    });

});

//Update element PUT
router.put('/:userId', function( req, res, next ) {

    let id = req.params.userId;
    let body = req.body;

    user.update( id, body, function ( result ) {
        res
            .json( result )
            .status(200);
    })
});

//Delete element DELETE
router.delete('/:userId', function( req, res, next ) {

    let id = req.params.userId;

    user.delete( id, function ( result ) {
        res
            .json( result )
            .status(200);
    });
});

module.exports = router;
