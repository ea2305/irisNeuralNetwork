'use strict';

/**
 * Router calls and main functions definitions
 * @author Elihu A. Cruz Albores
 * @version 0.0.1
 * @since 21-06-2017
 */

const express = require('express');

let router = express.Router();
let dataset = require( '../neuralNetwork/trainModule' );
let fileReader = require('../Libraries/ReadUtil');
let dataUtil   = require('../Libraries/DataSetUtil');

const Novabrain = require('novabrain');
let currNetwork;


//Read all elements GET     http://127.0.0.1/neural/
router.get('/', function( req, res, next ){
    res
        .json(currNetwork)
        .status(200);
});

//Read an element GET       http://127.0.0.1/neural/element_1
router.get('/:elementId', function( req, res, next ){

    res
        .json("Return Element")
        .status(200);
});

//Create an element POST    http://127.0.0.1/neural/
router.post('/', function( req, res, next ){
    console.log(' Obtención de datos de registro');

        // entradas verdaderas
        // datos erroneos

    // Obtención de red neuronal
        // Creación
        // Guardados en archivo


    res
        .json('ELEMENT WAS CREATED')
        .status(200);
});

//Update an element UPDATE  http://127.0.0.1/neural/element_1
router.put('/:elementId', function( req, res, next ){
    res
        .json('ELEMENT WAS UPDATED')
        .status(200);
});

//Delete an element DELETE  http://127.0.0.1/neural/element_1
router.delete('/:elementId', function( req, res, next ){
    res
        .json('ELEMENT WAS DELETED')
        .status(200);
});

module.exports = router;