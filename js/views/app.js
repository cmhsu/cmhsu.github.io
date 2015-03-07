var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#question-display',

	events: {
		'click #next':'showNextQuestion',
		'click #back':'showPrevQuestion',
		'click #submit':'showLastPage'
	},

	initialize: function(allQuestions) {
		new app.GreetingView();
		this.collection = new app.Questions(allQuestions);
		this.listenTo(app.EventBus, 'startover', this.render);
		this.listenTo(app.EventBus, 'changequiz', this.render);
		this.render();
	},

	render: function() {
		this.model = this.collection.get(question);
		var questionView = new app.QuestionView({model: this.model});
		this.$el.html(questionView.render().el);
		if (selected[question] > -1) {
			var selectedAnswer = selected[question];
			var prevSelected = $('input[name="choices"]').get(selectedAnswer);
			$(prevSelected).prop('checked', true);
		}
	},

	validateAnswer: function() {
		var checkedInput = $('input[name="choices"]:checked');
		if (checkedInput[0] == null) {
			$('#please-select').removeClass('display-none').addClass('display-block');
			return false;
		}
		selected[question] = +checkedInput.val();
		if (+checkedInput.val() == +this.model.get('correctAnswer')) {
			wasAnswerCorrect[question] = true;
			correctAnswerCount += 1;
		}
	},

	showNextQuestion: function() {
		if (this.validateAnswer() === false) {
			return;
		}
		else {
				question += 1;
				this.render();
		}
	},

	showPrevQuestion: function() {
		if (wasAnswerCorrect[question - 1] === true) {
			correctAnswerCount -= 1;
			wasAnswerCorrect[question - 1] = false;
		}
		var checkedInput = $('input[name="choices"]:checked');
		if (checkedInput[0] != null) {
			selected[question] = +checkedInput.val();
		}
		question -= 1;
		this.render();

	},

	showLastPage: function() {
		if (this.validateAnswer() === false) {
			return
		}
		else {
			this.model.set({score: correctAnswerCount});
			var lastPageView = new app.LastPageView({model: this.model});
			return lastPageView.render().el;
		}
	}

});
