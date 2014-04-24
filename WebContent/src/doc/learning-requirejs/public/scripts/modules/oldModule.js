require( ["jquery", "modules/colors"], function( $, colors ) {
	var str = "";
		str += "<h1>Exploring Map Attribute</h1>";
		str += "<p>";
		str += "colors module version being used : ";
		str +=	colors.version
		str += "</p>";
	$("body").append(
		str
	);
});