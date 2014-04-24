require( ["jquery"], function( $ ) {
	var str = "";
		str += "<h1>Load scripts</h1>";
		str += "<p>";
		str += "JQuery ";
		str += $ !== undefined ? "Loaded" : "not loaded";
		str += "</p>";
		
	$("body").append(
		str	
	);
});