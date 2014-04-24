define(["exports", "moduleB"], function( exports, b ){

	var name = "moduleA";
	modulesLoaded = [b.name, name];

	console.log( modulesLoaded );
	exports.modulesLoaded = function() { return modulesLoaded };
});