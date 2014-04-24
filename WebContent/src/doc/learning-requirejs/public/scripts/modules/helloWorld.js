require( ["jquery"], function( $ ) {
	var str = "";
		str += "<h1>Hello World widget</h1>";
		str += "<p>Hello there ...</p>";
	$("body").append(
		str
	);
});