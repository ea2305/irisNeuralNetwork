/**
 * Type Files routes
 * @author Elihu A. Cruz Albores
 * @version 0.1.0
 * @since 25-06-2017
 */

'use strict';

const express = require('express');
let type_file   = require('../controllers/Type_File');
let router = express.Router();

//Read all elements GET
router.get('/', function( req, res, next ) {

    type_file.list( function ( users ) {
        res
            .json( users )
            .status(200);
    });
});

//Read especific element GET
router.get('/:typeFileId', function( req, res, next ) {

    let id = req.params.typeFileId;

    type_file.read( id , function ( user ) {
        res
            .json( user )
            .status(200);
    })
});

//Create element POST
router.post('/', function( req, res, next ) {

    let body = req.body;

    type_file.create( body, function ( user ) {
        res
            .json( user )
            .status(201);
    });

});

//Update element PUT
router.put('/:typeFileId', function( req, res, next ) {

    let id = req.params.typeFileId;
    let body = req.body;

    type_file.update( id, body, function ( result ) {
        res
            .json( result )
            .status(200);
    })
});

//Delete element DELETE
router.delete('/:typeFileId', function( req, res, next ) {

    let id = req.params.typeFileId;

    type_file.delete( id, function ( result ) {
        res
            .json( result )
            .status(200);
    });
});

module.exports = router;
