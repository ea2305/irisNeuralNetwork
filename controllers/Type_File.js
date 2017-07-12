/**
 * TypeFile controller
 * @author Elihu A. Cruz Albores
 * @version 0.1.1
 * @since 04-07-2017
 */
'use strict';

const models = require('../models/index');

module.exports = {

    //read all elements
    list : function ( next ) {
        models.Type_File.findAll().then( files => {
            next( files );
        })
    },
    //read element
    read : function ( id, next ) {
        // search for known ids
        models.Type_File.findById( id ).then( file => {
            next( file );
        })
    },
    //create element
    create : function ( body, next ) {
        models.Type_File.findOrCreate({

            where: {name: body.name },
            defaults: {
                description: body.description
            }
        })
        .spread( function ( file, created) {
            console.log( created );
            next( file );
        });
    },
    //update element
    update : function (id, body , next ) {
        models.Type_File.update(
            {
                name: body.name,
                description: body.description
            },
                { where: { id: id }
            }
        )
        .then( function ( file ) {
            next( file );
        })
    },
    //delete element
    delete : function ( id, next ) {
        models.Type_File.destroy({
            where:{
                id : id
            }
        })
        .then( function ( file ) {
            next( file );
        })
    }
}