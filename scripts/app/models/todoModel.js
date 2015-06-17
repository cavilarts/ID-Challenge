define([
    'underscore',
    'jquery',
    'backbone'
    ], function(
        _,
        $,
        Backbone
    ){
        var app = app || {};

        function init(){
            createModel();
        }

        function createModel(){
            app.Todo = Backbone.Model.extend({
                // Set the defaults
                "defaults": {
                    "title": "",
                    "completed": false
                },
                // Custome methods
                "toggle": function() {
                    this.save({
                      "completed": !this.get('completed')
                    });
                }
            });
        }

        return {
            init: init,
            app : app
        };
});