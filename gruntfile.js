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
                "ext": "html",
                "runInBackground": false
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
                            "baseUrl": ''
                        }
                    }
                }
            }
        },
        "watch": {
            "css": {
                "files": '**/*.scss',
                "tasks": ['sass']
            }
        },
         "sass": {
            "dist": {
                "files": {
                    'main.css': '*.scss'
                }
            }
        },
        "handlebars": {
            files: [{
                expand: true,
                cwd: './foo/',
                src: '*.handlebars',
                dest: './foo/',
                ext: '.html'
            }],
            "templateData": "./foo/*.json",
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-compile-handlebars');

    grunt.registerTask('default', ['http-server']);
    grunt.registerTask('jasmine', ['jasmine']);
    grunt.registerTask('sass', ['sass']);
    grunt.registerTask('watch',['watch']);
};