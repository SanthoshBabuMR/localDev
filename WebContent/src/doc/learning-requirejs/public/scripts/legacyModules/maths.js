window.maths = {};

maths.add = function() {
	return parseInt(arguments[0], 10) + parseInt(arguments[1], 10);
}

maths.subtract = function() {
	return parseInt(arguments[0], 10) - parseInt(arguments[1], 10);
}

maths.sum = function() {
	var r = 0;
	for(var i=arguments.length;i>0;) {
		r += this.add( r, (arguments[--i], 10) );
	}
	return r;
}

maths.diff = function() {
	var r = parseInt(arguments[0], 10);
	var len = arguments.length;
	for(var i=1;i<=arguments.length-1;i++) {
		r = this.subtract( r, arguments[i] );
	}
	return r;
}
