/**
 * Created by gerem on 7/24/17.
 */
/**
 * Neural Network training process
 * @author Elihu A. Cruz Albores
 * @sice 24-06-2017
 */

'use strict';

const DEBUG = true;

//System control
let Novabrain = require('novabrain');
let network;
let trainer;

// Util tools
let fileReader = require('../Libraries/ReadUtil');
let dataUtil   = require('../Libraries/DataSetUtil');

module.exports = {
    getWeights : function ( bufferIris ) {

        let totalelements = bufferIris.length * 3;
        let trainingElements = bufferIris.length * 2;
        let testElements = totalelements - trainingElements;


        let layerInput = bufferIris[0].length;

        let network = new Novabrain.Network( layerInput , 11 , 1 );//Network setting
        let trainer = new Novabrain.Trainer( network );

        //Container elements
        let X;
        let Yd;
        let seed;
        let newX;
        let newYd;

        //Validation data
        let crossValidation;
        let dataTraining = [];
        let dataTest     = [];

        // Obtención de elementos
        /*
            5 elements of user are 1
            10 elements of users are 0
        */
        let dataset = this.prapareDataSet( bufferIris );


        //Shuffle elements
        seed  = dataUtil.uniqueRandomNumber( 0, ( totalelements - 1 ) ); //Get seeder to mix

        //Mixup elements
        newX  = dataUtil.shuffle( dataset.X  , seed );
        newYd = dataUtil.shuffle( dataset.Yd , seed );

        //We'll get the elements to use in the cross Validation
        crossValidation = dataUtil.getDataTest( newX , newYd, 5 );

        for (var i = 0; i < crossValidation[0].x.length ; i++)
            dataTraining.push( { input: crossValidation[0].x[i], output: crossValidation[0].yd[i] } );

        for (var j = 0; j < crossValidation[0].px.length ; j++)
            dataTest.push( { input: crossValidation[0].px[j], output: crossValidation[0].pyd[j] } );

        network.transfer = Novabrain.Transfer.HARDLIMIT;
        // network.transfer = Novabrain.Transfer.TANH;

        let resultTrain = trainer.train( dataTraining, {

            iterations : 2000000000000,
            learning   : 0.01,
            momentum   : 0, //Alfa
            treshold   : 0.005,
            callback   : function( result ){
                console.log(result.error);
            },
            interval   : 10

        });

        return JSON.stringify( network.export() );
/*
        let  result;
        let  wished;
        let  errors;
        let  totalError = 0;
        let  systemError;

        for (let i = dataTest.length - 1; i >= 0; i--) {

            result = network.output( dataTest[i].input );
            wished = dataTest[i].output;

            errors = result.map( ( err , index ) => { return ( wished[ index ] - err ) });

            totalError  += dataUtil.additionArray( errors );
            systemError = dataUtil.additionArray( errors );

            //numObj.toFixed(6);
            //console.log(" Deseado : ", wished , " Obtenido : " , result, " Error : ", errors ," Error del sistema : " , systemError );

            if( DEBUG ) {
                console.log("\n Deseado : ", wished );
                console.log(" Obtenido : ", result.map( (e) => { return e.toFixed(4).toString() } ))
                console.log(" Errors : ", errors.map( (e) => { return e.toFixed(4).toString() } ))
                console.log(" System Error : " , systemError , "\n");
            }
        }

        let MSEv = totalError;
        let MSEe = ( trainingElements * resultTrain.error );
        let MST  = ( ( 1 / totalelements ) * ( MSEe + MSEv ) );

        //console.log( "Error Entrenamiento: " , resultTrain.error, " Iterators: ", resultTrain.iterations, " Times: ", resultTrain.time );
        console.log( "MSEv: ", MSEv , " Error Training: ", resultTrain.error , " MSEe: ", MSEe , " MST: ", MST );
*/


    },

    validation : function ( network , data ) {
        let result = network.output( data );
    },

    prapareDataSet : function ( vector ) {

        let size = vector[0].length;

        let dataset = {
            X  : [],
            Yd : []
        };

        // Load elements from user request
        vector.forEach( ( element ) => {
            dataset.X.push( element );
            dataset.Yd.push( [1] );
        });

        let elements = vector.length * 3;
        for ( let i = 0 ; i < elements; i++ ) {
            dataset.X.push( this.getTrashVector( size ) );
            dataset.Yd.push( [0] );
        }

        return dataset;
    },

    getTrashVector : function ( size ) {

        let vector = [];

        // We will replace this part :*
        for ( let i = 0 ; i < size ; i++ ) {
            vector.push( this.getRandomNumber( 0, 1 ) );
        }

        return vector;
    },

    getRandomNumber : function ( min, max ) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

}