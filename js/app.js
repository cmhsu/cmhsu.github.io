$(function() {
	getQuestions();

	app.EventBus = new app.Questions;

	new app.NavView();

	new app.AppView(allQuestions);

	app.QuizRouter = new Workspace();
	Backbone.history.start();

});
