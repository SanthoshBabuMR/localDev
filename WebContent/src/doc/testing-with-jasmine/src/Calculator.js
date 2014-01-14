window.Calculator = {

  current: 0,

  add: function() {
	  var result = this.current;
	  for(var i=arguments.length-1 ; i>-1; i--) {
		  result += arguments[i]
		}
    return this.current = result;
  },
	
	subtract: function() {
	  var result = this.current;
	  for(var i=arguments.length-1 ; i>-1; i--) {
		  result -= arguments[i]
		}
    return this.current = result;
	},
	
	reset: function() {
	  this.current = 0;
	}

}