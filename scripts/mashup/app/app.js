define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'marionette',
    'appController'
    ], function(
        _,
        $,
        Backbone,
        backboneLocalstorage,
        Marionette,
        AppController
    ){
        'use strict';

        var CrimeLocation = new Marionette.Application(),
            eventAggregator = _.extend({}, Backbone.Events);

        CrimeLocation.addRegions({
            "filter": ".filter"
        });

        CrimeLocation.mainController  = new AppController({
            "regions": CrimeLocation.getRegions(),
            "eventAggregator": eventAggregator
        });

        CrimeLocation.start();
 });