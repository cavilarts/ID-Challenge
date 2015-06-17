"use strict";
module.exports = function(grunt) {
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
        }

    });

    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', ['http-server']);
};