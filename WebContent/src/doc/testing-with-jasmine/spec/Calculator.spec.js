describe("Calculator", function() {

  beforeEach(function(){
	  calc = Calculator;
	  calc.current = 0;
	});
	afterEach(function(){
	  calc = null;
	});
	
	describe("When adding numbers", function(){
		it("can add a number", function() {
			expect(calc.add(5)).toEqual(5);
		});
		
		it("can add number of numbers", function() {
			expect(calc.add(1,2,3)).toEqual(6);
			expect(calc.add(4,5,6)).toEqual(21);
		});
	});
	
	describe("When subtracting numbers", function(){
		it("can subtract a number", function() {
			expect(calc.subtract(5)).toEqual(-5);
			expect(calc.subtract(4,5,6)).toEqual(-20);
		});	
	});
	
	it("should store current value at all times", function() {
	  expect(calc.current).toBeDefined();
	  calc.current = 15;
		expect(calc.current).toEqual(15);
	});
	
	it("can reset calculator", function() {
	  calc.current = 50;
	  calc.reset();
		expect(calc.current).toEqual(0);
		
		calc.current = 10;
		expect(calc.current).toEqual(10);
		
		calc.reset();
		expect(calc.current).toEqual(0);
	})

});