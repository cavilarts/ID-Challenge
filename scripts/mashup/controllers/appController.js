define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'marionette',
    'crimesCollection',
    'crimeCategoriesCollection',
    'crimeCategoriesView',
    'mapView'
    ], function(
        _,
        $,
        Backbone,
        backboneLocalstorage,
        Marionette,
        CrimesCollection,
        CrimeCategoriesCollection,
        CrimeCategoriesView,
        MapView
    ){
        'use strict';
        var defaultState = 'All crime',
            AppController = Marionette.Controller.extend({

                "initialize": function(options) {
                    this.bootCategories();
                    this.bootMap();
                    this.bindEvents();
                },

                "bootMap": function(category) {
                    var crimesCollection,
                        crimesView;
                        
                    crimesCollection = new CrimesCollection();

                    crimesCollection.fetch();
                    crimesView = new MapView({
                        "collection": crimesCollection
                    });

                    if (category && category !== defaultState) {
                        crimesView.filter = function (child, index, collection) {
                            return child.get('category') === category;
                        };
                    }

                    crimesView.render();
                },

                "bootCategories": function() {
                    var categoriesCollection,
                        categoriesView,
                        options = this.options;

                    // Get categories
                    categoriesCollection = new CrimeCategoriesCollection();
                    categoriesCollection.fetch();

                    // View Instance
                    categoriesView = new CrimeCategoriesView({
                        "collection": categoriesCollection,
                        "eventAggregator": this.options.eventAggregator
                    });

                    // Display categories
                    options.regions.filter.show(categoriesView);
                },

                "bindEvents": function() {
                    this.options.eventAggregator.on(
                        'filter',
                        function(category) {
                            this.bootMap(category);
                        },
                        this
                    );
                }
            });

    return AppController;
});