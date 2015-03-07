var Workspace = Backbone.Router.extend({
	routes: {
		"quiz/:number" : "getQuiz",
		"*other" : "defaultRoute"
	},

	getQuiz: function(number) {
		restart();
		question = ((+number)*(5)) - 4;
		setActiveNav(number);
		app.EventBus.trigger('changequiz')
	},

	defaultRoute: function() {
		restart();
		question = 1;
		setActiveNav(1);
		app.EventBus.trigger('changequiz')
	}

});
