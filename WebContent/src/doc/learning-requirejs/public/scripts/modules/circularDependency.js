require( ["jquery", "moduleA", "moduleB"], function( $, a, b) {

	var str = "";
		str += "<h1>Testing for module load during circular dependency</h1>";
		str += "<p>";
		str += (a === undefined)? "moduleA loaded" : "moduleA not loaded";
		str += "<br />";
		str += (b === undefined)? "moduleB loaded" : "moduleB not loaded";
		str += "</p>";

	$("body").append(
		str
	);
} )