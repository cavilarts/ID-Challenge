define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'marionette',
    'crimeView'
    ], function(
        _,
        $,
        Backbone,
        backboneLocalstorage,
        Marionette,
        CrimeView
    ){
        'use strict';
        var MapView =  Marionette.CollectionView.extend({
            "childView": CrimeView,

            "el": "#map-canvas",

            "initialize": function() {
                var mapOptions = {
                    zoom: parseInt(this.$el.attr('data-zoom'), 10),
                    center: {lat: parseFloat(this.$el.attr('data-lat')), lng: parseFloat(this.$el.attr('data-lng'))}
                };

                this.map = new google.maps.Map(this.$el[0], mapOptions);
                
                this.childViewOptions = {
                    map: this.map
                };

                return this;
            }
        });

        return MapView;
});