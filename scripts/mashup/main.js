define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'marionette',
    'app'
    ], function(
        _,
        $,
        Backbone,
        backboneLocalstorage,
        Marionette,
        app
    ){
        'use strict';
        CrimeLocation.addRegions({
			"filter": ".filter"
		});

		CrimeLocation.mainController  = new CrimeLocation.AppController({
			"regions": CrimeLocation.getRegions()
		});

		CrimeLocation.start();
});