/**
 * User controller
 * @author Elihu A. Cruz Albores
 * @version 0.1.1
 * @since 04-07-2017
 */
'use strict';

const models = require('../models/index');
let moment = require('moment')();

module.exports = {
    //read all elements
    list : function ( next ) {
        models.User.findAll().then( users => {
            next( users );
        })
    },
    //read element
    read : function (id, next ) {
        // search for known ids
        models.User.findById( id ).then( user => {
            next( user );
        })
    },
    //read element
    readByEmail : function (email, next ) {
        // search for known ids
        models.User.findOne({ where: { email: email } }).then( user => {
            next( user );
        })
    },
    //create element
    create : function ( body, next ) {
        models.User.findOrCreate({

            where: {email: body.email },
            defaults: {
                name: body.name,
                phone: body.phone,
                birthdate: moment.format('YYYY-MM-DD HH:mm:ss'),
                iris_weight_path: body.iris_weight_path,
                password: body.password
            }
        })
        .spread( function (user, created) {
            console.log( created );
            next( user );
        });
    },
    //update element
    update : function (id, body , next ) {
        models.User.update(
            {
                name: body.name,
                email: body.email,
                phone: body.phone,
                birthdate: moment.format('YYYY-MM-DD HH:mm:ss'),
                password: body.password,
                iris_weight_path: body.iris_weight_path

            },
            { where: { id: id }
        })
        .then( function ( user ) {
            next( user );
        })
    },
    //delete element
    delete : function ( id, next ) {
        models.User.destroy({
            where:{
                id : id
            }
        })
        .then( function ( user ) {
            next( user );
        })
    }
}