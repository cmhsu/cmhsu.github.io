var app = app || {};

app.NavView = Backbone.View.extend({
	el: '#navbar-display',

	template: _.template( $( '#navbar-template').html()),

	events: {
		'click .nav':'setActive'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
	},

	setActive: function(event) {
		$('.nav li').removeClass('active');
		$(event.target).parent().addClass('active');
	}

});
