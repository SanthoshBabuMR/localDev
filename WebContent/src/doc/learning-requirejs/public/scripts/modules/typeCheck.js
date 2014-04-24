define([], function(){
	var findType = function() {
		if( arguments[0] === undefined ) {
			return undefined;
		}
		if( arguments[0] === null ) {
			return null;
		}
		return (/\s([a-z]+)\(\)/ig).exec(arguments[0].constructor.toString())[1];
	}
	return {
		getTypeOf: findType
	}
});