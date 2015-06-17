define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'todoModel'
    ], function(
        _,
        $,
        Backbone,
        BackboneLocalstorage,
        todoModel
    ){
        var app,
            TodoList;


        function init(){
            createCollection();
        }

        function createCollection(){

            app = todoModel.app || {};

            TodoList = Backbone.Collection.extend({
                "model": app.Todo,

                "localStorage": new BackboneLocalstorage('todos-backbone'),

                "completed": function() {
                    return this.filter(function( todo ) {
                        return todo.get('completed');
                    });
                },

                "remaining": function() {
                    return this.without.apply( this, this.completed() );
                },

                "nextOrder": function() {
                    if ( !this.length ) {
                        return 1;
                    }
                    return this.last().get('order') + 1;
                },

                "comparator": function( todo ) {
                    return todo.get('order');
                }
            });

            app.Todos = new TodoList();

        }

        return {
            init: init,
            appTodos: app
        };
});
