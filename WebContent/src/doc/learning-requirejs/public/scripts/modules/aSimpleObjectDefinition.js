require( ["jquery", "colors", "module"], function( $, colors, module ) {
	var rgb = colors.rgb;
	var str = "";
		str += "<h1> colors object definition</h1>";
		str += "<p>";
		str += "rgb value for red   : " + rgb.red;
		str += "<br />";
		str += "rgb value for green : " + rgb.green;
		str += "<br />";
		str += "rgb value for blue  : " + rgb.blue;
		str += "</p>";
	$("body").append(
		str	
	);
})