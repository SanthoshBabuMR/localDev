require( ["jquery", "maths"], function( $, simpleMATH ) {
	var str = "";
		str += "<h1> simpleMATH Widget</h2>";
		str += "<p>";
		str += "add( 15,10 ) : ";
		str += simpleMATH.add( 15,10 );
		str += "<br />";
		str += "diff( 30,50 ) : ";
		str += simpleMATH.diff( 30,50 );
		str += "</p>";

	$("body").append(
		str	
	);
});