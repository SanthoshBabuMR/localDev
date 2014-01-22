describe("Async Test Suite", function ( ) {

  beforeEach( function() {
	  this = window.g;
	});
	
	afterEach ( function() {
		this = null;
	});

  it(" must fetch primary colors ", function ( ) {
	  runs(this.fetchColors())
	});
	
});