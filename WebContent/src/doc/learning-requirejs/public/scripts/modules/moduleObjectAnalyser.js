define(function( require ) {
	var tc = require("modules/typeCheck");
	var color = require("modules/colors");
	var type = tc.getTypeOf(color);
	return "colors module return type : " + type;
})