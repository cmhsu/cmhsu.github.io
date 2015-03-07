var app = app || {};

app.LastPageView = Backbone.View.extend({
	el: '#last-page',

	events: {
		'click #play-again': 'playAgain'
	},

	template: _.template( $( '#lastpage-template').html()),

	initialize: function() {
		$('#question-display').html('');
		this.listenTo(app.EventBus, 'changequiz', this.hideView);
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	playAgain: function() {
		restart();
		var quizNumber = question / 5;
		setActiveNav(quizNumber);
		question -= 4;
		this.$el.html('');
		app.EventBus.trigger('changequiz');
		this.model.remove();
	},

	hideView: function() {
		this.$el.html('');
	}

});
