define([
    'underscore',
    'jquery',
    'backbone',
    'todoModel',
    ], function(
        _,
        $,
        Backbone,
        todoModel
    ){
        function init(){
            var app = todoModel.app || {},
                Workspace;
            
            Workspace = Backbone.Router.extend({
                "routes":{
                    "*filter": "setFilter"
                },

                "setFilter": function(param) {
                    // Set the current filter to be used
                    if (param) {
                        param = param.trim();
                    }
                    app.TodoFilter = param || '';

                    app.Todos.trigger('filter');
                }
            });

            app.TodoRouter = new Workspace();
            Backbone.history.start();
        }

        return {
            init: init
        };
});