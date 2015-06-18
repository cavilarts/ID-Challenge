define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'marionette',
    'crimeCategoryView'
    ], function(
        _,
        $,
        Backbone,
        backboneLocalstorage,
        Marionette,
        CrimeCategoryView
    ){

        'use strict';
        var CrimeCategoriesView = Marionette.CollectionView.extend({
            "childView": CrimeCategoryView,

            "tagName": "select",
            
            "className": "controls",

            "events": {
                "change": "filterData"
            },

            "filterData": function(el) {
                this.options.eventAggregator.trigger('filter', el.currentTarget.value);
            }

        });
        return CrimeCategoriesView;
});