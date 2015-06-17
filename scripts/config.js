requirejs.config({
    baseUrl : 'scripts/',
    paths: {
        underscore: 'bower_components/underscore/underscore',
        jquery: 'bower_components/jquery/dist/jquery.min',
        backbone: 'bower_components/backbone/backbone',
        marionette: 'bower_components/marionette/lib/backbone.marionette',
        backboneLocalstorage: 'bower_components/backbone.localstorage/backbone.localstorage',
        todoModel: 'app/models/todoModel',
        todoCollection: 'app/collections/todoCollection',
        appView: 'app/views/appView',
        todoView: 'app/views/todoView',
        todoRouter: 'app/routers/router',
        app: 'app/app'
    }
});

require([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'backboneLocalstorage',
    'todoModel',
    'todoCollection',
    'todoView',
    'appView',
    'todoRouter',
    'app'
    ],
    function(
        _,
        $,
        Backbone,
        marionette,
        backboneLocalstorage,
        todoModel,
        todoCollection,
        todoView,
        appView,
        todoRouter,
        app
){
    todoModel.init();
    todoCollection.init();
    todoView.init();
    appView.init();
    todoRouter.init();
    app.init();
});