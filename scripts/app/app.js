define([
    'underscore',
    'jquery',
    'backbone',
    'backboneLocalstorage',
    'todoRouter',
    'todoModel'
    ], function(
        _,
        $,
        Backbone,
        backboneLocalstorage,
        todoRouter,
        todoModel
    ){
        'use strict';

        var app = todoModel.app || {},
            ENTER_KEY = 13;

        function init(){
            // appView.init();
            new app.AppView();
        }

        return {
            init: init
        };
});