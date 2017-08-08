/**
 * User routes
 * @author Elihu A. Cruz Albores
 * @version 0.1.0
 * @since 25-06-2017
 */

'use strict';

const express = require('express');
const crypto = require('crypto');

let user   = require('../controllers/User');
let router = express.Router();
let dataset = require( '../neuralNetwork/trainModule' );
let fileReader = require('../Libraries/ReadUtil');
let dataUtil   = require('../Libraries/DataSetUtil');

const Novabrain = require('novabrain');
let currNetwork;

//Read all elements GET
router.get('/', function( req, res, next ) {

    user.list( function ( users ) {
        res
            .json( { users : users } )
            .status(200);
    });
});

//auth
router.post('/auth', function( req, res, next ) {

    let body = req.body;
    if( body.PostData != null ){
        body = JSON.parse( body.PostData );
    }

    user.readByEmail( body.email, function ( user ) {
        // curl -H "Content-Type: application/json" -X POST -d '{"email":"testpop@gmail.com","vector":"[1,1,1,1,1,1,1,1,1,1,1,1]"}' http://localhost:3000/user/auth


        let vectIris =  body.vector;

        // Obtenemos datos
        currNetwork = new Novabrain.Network( vectIris.length , 11 , 1 );//Network setting
        currNetwork.transfer = Novabrain.Transfer.HARDLIMIT();

        let nameUser = crypto.createHmac('sha256', 'A1234**--**ImTheBoneOfMySword' ).update(body.email).digest('hex')
        try {
            currNetwork.import( fileReader.readJSON( nameUser + '.json' ) );
        } catch ( e ){
            console.error( "Read Weights : ", e )
            res.json( {
                error : true,
                validation : 0
            } )
                .status(500);
        }

        //Verificamos iris o pass
        let result = Math.round( currNetwork.output( vectIris ) );
        console.log( "1 : ", result );

        res
            .json( {validation : result} )
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
    if( body.PostData != null ){
        body = JSON.parse( body.PostData );
    }

    console.log(body)

    user.create( body, function ( user ) {

        // Obtención de datos por array
        // replace elemento with the POST resquest element of Android mobile

        let VectorIris = body.vector;

        // Llamada a función de entrenamiento
        let network = dataset.getWeights( VectorIris );

        // Guardamos el archivo
        let nameUser = crypto
            .createHmac('sha256', 'A1234**--**ImTheBoneOfMySword' )
            .update(body.email)
            .digest('hex');

        fileReader.writeFileDataset( nameUser + '.json', network );

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
