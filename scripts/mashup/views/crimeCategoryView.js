define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'handlebars'
    ], function(
        _,
        $,
        Backbone,
        Marionette,
        Handlebars
    ){
        'use strict';
        var CrimeCategoryView = Marionette.ItemView.extend({
            "template": Handlebars.compile($('#filter-list-item').html()),

            "onRender": function () {
                this.$el = this.$el.children();
                this.$el.unwrap();
                this.setElement(this.$el);
            }
        });

        return CrimeCategoryView;
});