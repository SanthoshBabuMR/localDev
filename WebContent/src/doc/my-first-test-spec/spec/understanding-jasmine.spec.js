// understanding jasmine test suite

/*
beforeEach(function(){
  var toBeLarge = function(){
		  this.message = function() {
			  return "Expected " + this.actual + "to be large";
			};
			return this.actual > 100;
		}
  
	jasmine.addMatchers(toBeLarge);	
});
*/

describe("Understanding Jasmin Test Suite", function() {

  beforeEach(function(){
	
    window.console && console.log('# begin spec');
	
	});
  
	afterEach(function(){
	
    window.console && console.log('# end spec');
	
	});
	
  describe("toBeLarge - custom matcher", function() {
    
		
		// spec
		xit("expect 120 to be large", function(){
		  expect(120).toBeLarge();
		});
		
		
	});
		
	describe("toThrow", function(){
	  
		// spec
		it("expect function fn to throw an error", function() {
		  var fn = function(x){
			  if(x) {
				  throw new Error();
				}			  
			};
			expect(fn.bind(null, true)).toThrow();
		});
		
	});
	
	describe("toMatch", function(){
	  
		// spec
		it("expect 'mother nature' to match 'nature'", function(){
		  expect('mother nature').toMatch(/nature/);
		});
		
		// spec
		it("expect 'moThER NaTuRE' to match 'NATURE'", function(){
		  expect('moThER NaTuRE').toMatch(/NATURE/i);
		});
		
		// spec
		it("expect myname@email.com to match \w+@\w+\.\w+", function(){
		  expect("myname@email.com").toMatch(/\w+@\w+\.\w+/);
		});
		
	});
	
	describe("toBeCloseTo", function(){
	
	  // spec
		it("expect 48.542 to be close to 48.5", function(){
      expect(48.542).toBeCloseTo(48.5,1)
    });
		
	});
	
	describe("toBeLessThan", function(){ 
	  
		// spec
		it("expects -15 to be less than 0", function(){
		  expect(-15).toBeLessThan(0);
		});
		
		// spec
		it("expects 'var a = [1,2]' to be greater than 'var b = [1,2,3]'", function(){
		  var a = [1,2];
			var b = [1,2,3];
		  expect(a).toBeLessThan(b);
		});
		
		// spec
		it("expects literal 'a' to be less than literal 'z'", function(){
		  expect('a').toBeLessThan('z');
		});
		
	});
	
	describe("toBeGreaterThan", function(){ 
	  
		// spec
		it("expects 30 to be greater than 15", function(){
		  expect(30).toBeGreaterThan(15);
		});
		
		// spec
		it("expects 'var b = [1,2,3]' to be greater than 'var a = [1,2]'", function(){
		  var a = [1,2];
			var b = [1,2,3];
		  expect(b).toBeGreaterThan(a);
		});
		
	});
	
	describe("toBeNaN", function(){
	  
		// spec
		it("expect parseInt('a') to be NaN", function() {
		  expect(parseInt('a')).toBeNaN();
		});
		
		// spec
		it("expect 5*'x' to be NaN", function() {
		  expect(5*'x').toBeNaN();
		});
		
		// spec
		it("expect 0/0 to be NaN", function() {
		  expect(0/0).toBeNaN();
		});
		
	});
	
	describe("toBeNull", function() {
	
	  // spec
		it("expect null to be null", function() {
		  expect(null).toBeNull();
		});
	 
	});	
	
  describe("toBeUndefined", function() {
		
		// spec
		it("expect var a to be defined", function() {
			var a;
			expect(a).toBeUndefined();
		});
		
		// spec
		it("expect undefined to be defined", function() {
			expect(undefined).toBeUndefined();
		});
		
	});	
	
	describe("toBeDefined", function() {
		
		// spec
		it("expect var a = 5 to be defined", function() {
			var a = 5;
			expect(a).toBeDefined();
		});
		
		// spec
		it("expect fn to be defined", function() {
			function fn() {};
			expect(fn).toBeDefined();
		});
		
		// spec
		it("expect null to be defined", function() {
			expect(null).toBeDefined();
		});
		
	});
	
	describe("toContain", function() {
		
		// spec
		it("expect 'hello world' to contain 'hello'", function() {
			expect("hello world").toContain("hello");
		});
		
		// spec
		it("expect var arr = [1,2,3] to contain 3", function() {
			var arr = [1,2,3];
			expect(arr).toContain(3);
		});
	});
	
	describe("not", function() {
		// spec
		it("expect string '5' to not equal numeric 5", function() {
			expect('5').not.toEqual(5);
		});
		
		// spec
		it("expect {} to not equal {}", function() {
			expect({}).not.toBe({});
		});
		
	});
	
	describe("toBeFalsy", function() {
		
		// spec
		it("expect 0 to be false", function() {
		  expect(0).toBeFalsy();	
		});
		
		// spec
		it("expect null to be false", function() {
			expect(null).toBeFalsy();
		});
		
		// spec
		it("expect 'var foo' to be false", function() {
			var foo;
			expect(foo).toBeFalsy();
		});
		
	});
	
	describe("toBeTruthy", function() {
		
		// spec
		it("expect 1 to be true", function() {
		  expect(1).toBeTruthy();	
		});
		
		// spec
		it("expect 'var fn = function() {}' to be true", function() {
			var fn = function() {};
			expect(fn).toBeTruthy();
		});
		
	});
	
	describe("toBe", function() {

		// spec
		it("expect arr=[1,2,3] to not equal [1,2,3]", function() {
			var arr = [1,2,3];
			expect(arr).not.toBe([1,2,3]);
		});
		
		// spec
		it("expect arr=[1,2,3] to equal arr", function() {
			var arr = [1,2,3];
			expect(arr).toBe(arr);
		});
		
	});
	
	describe("toEqual", function() {
		// spec
		it("expect true to be true", function() {
			expect(true).toEqual(true)
		});
		
		// spec
		it("expect '5 + 10' to equal 15", function() {
			expect(5+10).toEqual(15);
		});
		
		// spec 
		it("expect a to be 1", function() {
			a = 1;
			expect(a).toEqual(1);
		});
		
		// spec
		it("expect {} to equal {}", function() {
			expect({}).toEqual({});
		});

	});
	
	
	
});
