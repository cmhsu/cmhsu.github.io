var question = 1,
	correctAnswerCount = 0,
	wasAnswerCorrect = {},
	selected = {},
	allQuestions = [];

for (var i = 1; i <= 20; i++) {
	wasAnswerCorrect[i] = false;
	selected[i] = -1;
}


function restart() {
	correctAnswerCount = 0;
	for (var i = 1; i <= 20; i++) {
		wasAnswerCorrect[i] = false;
		selected[i] = -1;
	}
	$('.nav li').removeClass('active');
}

function getQuestions() {
	$.ajax({
		url: 'package.json',
		async: false,
		dataType: 'json',
		success: function(data) {
			allQuestions = data;
		}
	});
	return allQuestions;
}


function setActiveNav(number) {
	if (number == 1) {
		$('.nav li:nth-child(1)').addClass('active');
	}
	if (number == 2) {
		$('.nav li:nth-child(2)').addClass('active');
	}
	if (number == 3) {
		$('.nav li:nth-child(3)').addClass('active');
	}
	if (number == 4) {
		$('.nav li:nth-child(4)').addClass('active');
	}
};
