module.exports = function(grunt) {
    'use strict';
    /*http://floatleft.com/notebook/testing-your-javascript-with-jasmine-and-grunt/*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "http-server": {
            "dev": {
                "root": "",
                "port": 4242,
                "host": "0.0.0.0",
                "showDir" : true,
                "autoIndex": true,
                "runInBackground": false
            }
        },
        "sass": {
            "dist": {
                "options": {
                    "style": 'expanded'
                },
                "files": {
                    'styles/sass/main.css': 'styles/sass/index.scss'
                }
            }
        },
        "watch": {
            "css": {
                "files": 'styles/**/*.scss',
                "tasks": ['sass']
            }
        },
        "jasmine": {
            "customTemplate": {
                "src": 'scripts/app/**/*.js',
                "options": {
                    "specs" : 'spec/**/*.js',
                    "template": require('grunt-template-jasmine-requirejs'),
                    "templateOptions": {
                        "requireConfig": {
                            "baseUrl": '',
                            "paths": {
                                "underscore": 'scripts/bower_components/underscore/underscore',
                                "jquery": 'scripts/bower_components/jquery/dist/jquery.min',
                                "backbone": 'scripts/bower_components/backbone/backbone',
                                "marionette": 'scripts/bower_components/marionette/lib/backbone.marionette',
                                "backboneLocalstorage": 'scripts/bower_components/backbone.localstorage/backbone.localstorage',
                                "todoModel": 'scripts/app/models/todoModel',
                                "todoCollection": 'scripts/app/collections/todoCollection',
                                "appView": 'scripts/app/views/appView',
                                "todoView": 'scripts/app/views/todoView',
                                "todoRouter": 'scripts/app/routers/router',
                                "app": 'scripts/app/app'
                            }
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('server', ['http-server']);
    grunt.registerTask('test', ['jasmine']);

};