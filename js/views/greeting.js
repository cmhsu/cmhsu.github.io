var app = app || {};

app.GreetingView = Backbone.View.extend({
	el: '#greeting-display',

	template: _.template( $( '#greeting-template').html()),

	events: {
		'keyup #your-name':'validateForm'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template());
	},

	validateForm: function() {
		var yourName = $('#your-name');
		var formValue = yourName.val().trim();
		if (formValue != '') {
			$('#warning').removeClass('glyphicon-warning-sign').addClass('glyphicon-ok');
			$('.has-feedback').removeClass('has-error').addClass('has-success');
			$('#submitName').addClass('btn-success').removeClass('btn-danger');
		}
		if (formValue == '') {
			$('#warning').addClass('glyphicon-warning-sign').removeClass('glyphicon-ok');
			$('.has-feedback').addClass('has-error').removeClass('has-success');
			$('#submitName').removeClass('btn-success').addClass('btn-danger');
		}
	}


});
