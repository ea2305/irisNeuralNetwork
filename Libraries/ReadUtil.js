/**
 * File reader
 * @author Elihu A. Cruz Albores
 * @version 0.1.2
 * @since 05-06-2017
 */
'use strict';

const fs = require( 'fs' );

/**
 * Get text from a file with a format
 * @param {String} nameFile : Name of file
 * @param {String} path : Current path of file
 * @param {String} format : Type of file
 * @return {Number[]} text : Elements in the text read
 */
module.exports = {
    getArrayFromText : function ( nameFile, path, format ) {
        //Setting up elements
        path = path || './';
        format = format || 'utf8';
        let text = [];


        try{

            //Lectura de los datos
            let currentText = fs.readFileSync( path + nameFile , 'utf8' );

            //Obtencion de elementos de prueba X
            text = currentText.split('\n').map( ( element, index ) => {
                return element.split(' ').map( ( conv ) => { return parseInt( conv )} );
            });

        }catch( e ){ console.error( `Error> ${ e }` ) }

        return text;
    }
};