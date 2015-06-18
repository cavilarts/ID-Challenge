define([
    'underscore',
    'jquery',
    'backbone',
    'crimeModel'
    ], function(
        _,
        $,
        Backbone,
        CrimeModel
    ){
        'use strict';
        var CrimesCollection = Backbone.Collection.extend({
          
            "model": CrimeModel,
            "url": "https://dazzling-heat-2075.firebaseio.com/.json"

        });
        return CrimesCollection;
});