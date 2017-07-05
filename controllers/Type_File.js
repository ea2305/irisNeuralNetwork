/**
 * TypeFile controller
 * @author Elihu A. Cruz Albores
 * @version 0.1.1
 * @since 04-07-2017
 */

module.exports = {

    //read all elements
    list : function ( next ) {
        models.Type_File.findAll().then( type_files => {
            next( type_files );
        })
    },
    //read element
    read : function ( id, next ) {
        // search for known ids
        models.Type_File.findById( id ).then( type_file => {
            next( type_file );
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
            .spread( function ( type_file, created) {
                console.log( created );
                next( type_file );
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
            })
            .then( function ( type_file ) {
                next( type_file );
            })
    },
    //delete element
    delete : function ( id, next ) {
        models.Type_File.destroy({
            where:{
                id : id
            }
        })
        .then( function ( type_file ) {
            next( type_file );
        })
    }
}