requirejs.config({
	"baseUrl" : 'scripts/',
	"paths": {
		"underscore": "bower_components/underscore/underscore",
		"jquery": "bower_components/jquery/dist/jquery.min",
		"backbone": "bower_components/backbone/backbone",
		"marionette": "bower_components/marionette/lib/backbone.marionette"
	}
});

require([
	'underscore',
	'jquery',
	'backbone',
	'marionette'
	],
	function(
		_,
		$,
		Backbone,
		marionette
){});