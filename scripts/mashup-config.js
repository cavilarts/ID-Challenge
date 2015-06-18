requirejs.config({
    baseUrl : 'scripts/',
    paths: {
        underscore: 'bower_components/underscore/underscore',
        jquery: 'bower_components/jquery/dist/jquery.min',
        backbone: 'bower_components/backbone/backbone',
        marionette: 'bower_components/marionette/lib/backbone.marionette',
        backboneLocalstorage: 'bower_components/backbone.localstorage/backbone.localstorage',
        handlebars: 'bower_components/handlebars/handlebars',
        app: 'mashup/app/app',
        crimeCategoryModel: 'mashup/models/crimeCategoryModel',
        crimeModel: 'mashup/models/crimeModel',
        crimeCategoriesCollection: 'mashup/collections/crimeCategoriesCollection',
        crimesCollection: 'mashup/collections/crimesCollection',
        crimeCategoriesView: 'mashup/views/crimeCategoriesView',
        crimeCategoryView: 'mashup/views/crimeCategoryView',
        crimeView: 'mashup/views/crimeView',
        mapView: 'mashup/views/mapView',
        appController: 'mashup/controllers/appController'
    },
    waitSeconds: 2
});

require([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'backboneLocalstorage',
    'handlebars',
    'crimeCategoryModel',
    'crimeCategoriesCollection',
    'crimeCategoryView',
    'crimeCategoriesView',
    'crimeModel',
    'crimesCollection',
    'crimeView',
    'mapView',
    'appController',
    'app',
    ],
    function(
        _,
        $,
        Backbone,
        marionette,
        backboneLocalstorage,
        Handlebars,
        crimeCategoryModel,
        crimeCategoriesCollection,
        crimeCategoriesView,
        crimeCategoryView,
        crimeModel,
        crimesCollection,
        crimeView,
        mapView,
        appController,
        app
){
    
});