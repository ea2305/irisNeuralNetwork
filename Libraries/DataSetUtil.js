/**
 * Data set Tools
 * @author Elihu A. Cruz Albores
 * @version 0.0.1
 * @since 21-06-2017
 */
'use strict';

module.exports = {

    /**
     * Return the addition of two vectors
     * @param {Object[]} Array : Data source, elements into array.
     * @returns {Number} Product of the addition operation.
     */
    additionArray : function( Array ) {
        let sum = 0;

        for (var i = Array.length - 1; i >= 0; i--) {
            sum += Array[i];
        }

        return sum;
    },

    /**
     * Vector Random Numbers
     * @param {Number} li : Min Limit
     * @param {Number} ls : Max limit
     * @returns {Number[]} Return one vector of random numbers.
     */
    uniqueRandomNumber : function ( li , ls ) {
        let o = [];
        for ( var i = li; i <= ls; i++) { o.push( i ); }
        for ( var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },

    /**
     * Array's shuffling
     * @param {Object[]} Array : Array of Elements will be shuffled
     * @param {Object[]} randomNumbers : Vector Seeder
     * @return {Number[]} Elements Shuffled
     */
    shuffle : function ( Array , randomNumbers ) {

        let buffer = [];

        for(let i = 0; i < randomNumbers.length; i++){
            buffer.push( Array[ randomNumbers[ i ] ] );
        }

        return buffer;
    },

    /**
     * Cross validation data generator
     * @param {Object[]} xData : X elements.
     * @param {Object[]} ydData : Yd elements.
     * @param {Number} k : number of data training.
     */
    getDataTest : function ( xData, ydData, k ) {

        if( xData.length !== ydData.length ) return false;

        const size = xData.length / k;
        let container = [];

        for (var i = 0 ; i < k; i++) {

            let tempX   = xData.slice();//Data copy
            let tempYd  = ydData.slice();
            let test_x  = [];
            let test_yd = [];

            //Get requirement blocks
            test_x  = tempX.splice( ( i * size) , size );
            test_yd = tempYd.splice( ( i * size) , size );

            //console.log( "size: " + size, "x: " + tempX.length, "yd: " + tempYd.length, "tX: " + test_x.length, "tYd: " + test_yd.length)
            container.push( { x :tempX , yd:tempYd , px:test_x , pyd: test_yd } );
        }

        return container;
    }

}
