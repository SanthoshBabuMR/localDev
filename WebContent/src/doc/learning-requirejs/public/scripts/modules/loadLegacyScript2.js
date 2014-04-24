require( ["jquery", "backbone", "underscore", "maths"], function( $, bb, _, simpleMath ) {
	var str = "";
		str += "<h1>Load non-AMD modules widget</h1>";
		str += "<p>";
		str += "JQuery ";
		str += $ !== undefined ? "Loaded" : "not loaded";
		str += "<br />";
		str += "backbone ";
		str += bb !== undefined ? "Loaded" : "not loaded";
		str += "<br />";
		str += "underscore ";
		str += _ !== undefined ? "Loaded" : "not loaded";
		str += "<br />";
		str += "maths ";
		str += simpleMath !== undefined ? "Loaded" : "not loaded";
		str += "</p>";
		
	$("body").append(
		str	
	);
});