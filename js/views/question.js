var app = app || {};

app.QuestionView = Backbone.View.extend({
	tagName: 'div',
	className: 'questionContainer',
	template: _.template( $( '#question-template').html()),

	render: function() {
		this.$el.html( this.template(this.model.attributes));
		return this;
	}
});
