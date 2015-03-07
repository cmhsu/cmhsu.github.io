var app = app || {};

app.Question = Backbone.Model.extend({
	defaults: {
		question: '',
		answer1: '',
		answer2: '',
		answer3: '',
		answer4: ''
	}
});
