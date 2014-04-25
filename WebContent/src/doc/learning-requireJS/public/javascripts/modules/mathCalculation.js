require( ["jquery"], function( $ ) {

	var operators = $(".operators");
	var operands = $(".operands");
	var calculate = $(".calculate");
	var outputCalculation = $("#calcOutput");


	var mapKeys = function() {
		$(document).keyup(function(e){
			$(".operators:contains('"+String.fromCharCode(e.which)+"')").trigger("click");
			$(".operands:contains('"+String.fromCharCode(e.which)+"')").trigger("click");
			$(".calculate:contains('"+String.fromCharCode(e.which)+"')").trigger("click");
		});
	}

	var calc = function() {
		var c = arguments[0] || "";
		if( c !== "") {
			outputCalculation.html(eval(arguments[0]));
		}
	}

	var handleEvents = function() {
		operands.on("click", function(e){
			outputCalculation.html(outputCalculation.html() + $(this).html())
		});
		operators.on("click", function(e){
			outputCalculation.html(outputCalculation.html() + $(this).html())
		});
		calculate.on("click", function(e) {
			calc(outputCalculation.html())
		});

	}

	var init = function() {
		handleEvents();
		//mapKeys();
	}

	
	init();

});