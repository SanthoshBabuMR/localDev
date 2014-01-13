'use strict';

var disemvowel = function (str) {
	return str.replace(/[aieou]/gi,function(i){
		return "";
	});
};