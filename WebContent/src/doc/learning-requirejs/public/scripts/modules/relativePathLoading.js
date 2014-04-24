require( ["jquery", "moduleObjectAnalyser"], function( $, MOA ) {

	var str = "";
		str += "<h1>Module Object Analyser Widget</h1>";
		str += "<p>";
		str += MOA;
		str += "</p>";

	$("body").append(
		str
	);	
});