/**
 * Files routes
 * @author Elihu A. Cruz Albores
 * @version 0.1.0
 * @since 25-06-2017
 */

'use strict';

const express = require('express');
let file   = require('../controllers/File');
let router = express.Router();


//Read all elements GET
router.get('/', function( req, res, next ) {

    file.list( function ( users ) {
        res
            .send( users )
            .status(200);
    });
});

//Read especific element GET
router.get('/:fileId', function( req, res, next ) {

    let id = req.params.fileId;

    file.read( id , function ( user ) {
        res
            .send( user )
            .status(200);
    })
});

//Create element POST
router.post('/', function( req, res, next ) {

    let body = req.body;

    file.create( body, function ( user ) {
        res
            .send( user )
            .status(201);
    });

});

//Update element PUT
router.put('/:fileId', function( req, res, next ) {

    let id = req.params.fileId;
    let body = req.body;

    file.update( id, body, function ( result ) {
        res
            .json( result )
            .status(200);
    })
});

//Delete element DELETE
router.delete('/:fileId', function( req, res, next ) {

    let id = req.params.fileId;

    file.delete( id, function ( result ) {
        res
            .json( result )
            .status(200);
    });
});

module.exports = router;
