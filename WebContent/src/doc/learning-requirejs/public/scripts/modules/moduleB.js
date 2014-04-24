define(["exports", "moduleA"], function( exports, a ){

	var name = "moduleB";
	modulesLoaded = [a.name, name];

	console.log( modulesLoaded );
	exports.modulesLoaded = function() { return modulesLoaded };
});