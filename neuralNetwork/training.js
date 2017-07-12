/**
 * Neural Network training process
 * @author Elihu A. Cruz Albores
 * @sice 24-06-2017
 */

'use strict';

const DEBUG = true;

//System control
let Novabrain = require('novabrain');
let network = new Novabrain.Network(40 , 14, 5);//Network setting
let trainer = new Novabrain.Trainer( network );
let fileReader = require('../Libraries/ReadUtil');
let dataUtil   = require('../Libraries/DataSetUtil');

//Data control elements
//Number of elements
let totalelements = 100;
let trainingElements = 80;
let testElements = totalelements - trainingElements;

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

//Data read
X  = fileReader.getArrayFromText( 'x.txt', './training/Datasets/', 'utf8' );
Yd = fileReader.getArrayFromText( 'Yd.txt', './training/Datasets/', 'utf8' );

//Shuffle elements
seed  = dataUtil.uniqueRandomNumber( 0, ( totalelements - 1 ) ); //Get seeder to mix

//Mixup elements
newX  = dataUtil.shuffle( X  , seed );
newYd = dataUtil.shuffle( Yd , seed );

//We'll get the elements to use in the cross Validation
crossValidation = dataUtil.getDataTest( newX , newYd, 5 );
//console.log( crossValidation );

for (var i = 0; i < crossValidation[0].x.length ; i++)
    dataTraining.push( { input: crossValidation[0].x[i], output: crossValidation[0].yd[i] } );

for (var j = 0; j < crossValidation[0].px.length ; j++)
    dataTest.push( { input: crossValidation[0].px[j], output: crossValidation[0].pyd[j] } );

network.transfer = Novabrain.Transfer.HARDLIMIT;
//network.transfer = Novabrain.Transfer.TANH;

let resultTrain = trainer.train( dataTraining, {

    iterations : 2000000000000,
    learning   : 0.004,
    momentum   : 0, //Alfa
    treshold   : 0.004,
    callback   : null,
    interval   : 10

});

/**
 * FASE de validacion ====================================================================================
 */

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

network.layers.forEach( ( e, index ) => {

    console.log( index , " -> " , e.neurons);

})