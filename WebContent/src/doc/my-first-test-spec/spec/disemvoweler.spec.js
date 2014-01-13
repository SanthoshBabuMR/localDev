// test suite

describe("Disemvoweler", function() {
	
	it("should remove all uppercase vowels", function(){
		expect(disemvowel("Hello World")).toEqual("Hll Wrld");
	});
	
	it("should remove all lowercase vowels", function(){
		expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
	});
	
	it("should not change empty string", function(){
		expect(disemvowel("")).toEqual("");
	});
	
	it("should not change strings with no vowels", function(){
		expect(disemvowel("HMmm")).toEqual("HMmm");
	});
	
});
