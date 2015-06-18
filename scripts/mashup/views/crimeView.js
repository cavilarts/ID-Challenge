define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'handlebars',
    ], function(
        _,
        $,
        Backbone,
        Marionette,
        Handlebars
    ){
        'use strict';
        var CrimeView = Marionette.ItemView.extend({
            
            "template": Handlebars.compile($('#crime-marker').html()),

            "initialize": function(options) {
                var location = this.model.get('location'),
                    myLatlng;

                myLatlng = new google.maps.LatLng(location[1],location[0]);

                this.marker = new google.maps.Marker({
                  position: myLatlng,
                  map: this.options.map,
                  title: this.model.get('street')
                });

                this.infowindow = new google.maps.InfoWindow({
                    content: this.parseInfoWindow()
                });

                this.markerListener = google.maps.event.addListener(this.marker, 'click', _.bind(this.openWindow, this));
                this.mapListener = google.maps.event.addListener(this.options.map, 'open:infowindow', _.bind(this.closeWindow, this));

                return this;
            },

            "render": function() {
                return this.marker;
            },

            "parseInfoWindow": function() {
                return this.template(this.model.toJSON());
            },

            "openWindow": function() {
                google.maps.event.trigger(this.options.map, 'open:infowindow');
                this.infowindow.open(this.options.map, this.marker);
            },

            "closeWindow": function() {
                this.infowindow.close();
            }
        });
    return CrimeView;
});