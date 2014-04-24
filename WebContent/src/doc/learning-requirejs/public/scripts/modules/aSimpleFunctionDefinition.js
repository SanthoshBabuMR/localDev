require( ["jquery", "typeCheck"], function( $, tc ){

	var str = "";
	var foo;
	str += "<h1>A simple typeCheck Widget</h1>";
	str += "<p>";
	str += "foo is : " + tc.getTypeOf(foo);
	str += "<br />";
	foo = function() {};
	str += "foo is : " + tc.getTypeOf(foo);
	str += "<br />";
	foo = 15;
	str += "foo is : " + tc.getTypeOf(foo);
	str += "<br />";
	foo = "bar";
	str += "foo is : " + tc.getTypeOf(foo);
	str += "<br />";
	foo = null;
	str += "foo is : " + tc.getTypeOf(foo);
	str += "<br />";
	foo = new Boolean(true);
	str += "foo is : " + tc.getTypeOf(foo);
	str += "<br />";
	foo = [12, "alpha"];
	str += "foo is : " + tc.getTypeOf(foo);
	str += "</p>";

	$("body").append(
		str
	);
});