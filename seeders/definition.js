/**
 * Created by gerem on 7/4/17.
 */
'use strict';

let models = require('../models/index');
let moment = require('moment')();

['pepe','memo','paco','lalo'].forEach( (e)=>{

    models.User.create({
        name: e,
        email: e + "@mail.com",
        phone: "090090990099",
        birthdate: moment.format('YYYY-MM-DD HH:mm:ss'),
        iris_weight_path: "./none" + e + ".txt"
    });

});
