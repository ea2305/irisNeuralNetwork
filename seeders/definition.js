/**
 * Created by gerem on 7/4/17.
 */
'use strict';

let models = require('../models/index');
let moment = require('moment')();

//Users
['pepe','memo','paco','lalo'].forEach( (e)=>{

    models.User.create({
        name: e,
        email: e + "@mail.com",
        phone: "090090990099",
        password: "e",
        birthdate: moment.format('YYYY-MM-DD HH:mm:ss'),
        iris_weight_path: "./none" + e + ".txt"
    });

});

//Files
['file_1','file_2','file_3','file_4'].forEach( (e)=>{

    models.File.create({
        name: e,
        description: "data of " + e
    });

});

//Type_Files
['text','video','music','pdf'].forEach( (e)=>{

    models.Type_File.create({
        name: e,
        description: "Data type: " + e
    });

});