define([
    'underscore',
    'jquery',
    'backbone',
    'crimeCategoryModel'
    ], function(
        _,
        $,
        Backbone,
        CrimeCategoryModel
    ){
        'use strict';
        var CrimeCategoriesCollection = Backbone.Collection.extend({
            "model": CrimeCategoryModel,
            "url": "https://data.police.uk/api/crime-categories?date=2015-06"
        });

        return CrimeCategoriesCollection;
 });


