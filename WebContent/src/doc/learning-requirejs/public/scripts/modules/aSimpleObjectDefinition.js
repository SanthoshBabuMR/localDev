require( ["jquery", "colors"], function( $,colors ) {
	var str = "";
		str += "<h1> colors object definition</h1>";
		str += "<p>";
		str += "rgb value for red   : " + colors.red;
		str += "<br />";
		str += "rgb value for green : " + colors.green;
		str += "<br />";
		str += "rgb value for blue  : " + colors.blue;
	$("body").append(
		str	
	);
})