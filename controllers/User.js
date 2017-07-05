/**
 * User controller
 * @author Elihu A. Cruz Albores
 * @version 0.1.1
 * @since 04-07-2017
 */
var models = require('../models/index');

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
    //create element
    create : function ( body, next ) {
        models.User.findOrCreate({

            where: {email: body.email },
            defaults: {
                name: body.name,
                phone: body.phone,
                dirthdate: body.dirthdate,
                iris_weight_path: body.iris_weight_path
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
                dirthdate: body.dirthdate,
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