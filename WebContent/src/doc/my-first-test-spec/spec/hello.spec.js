// "Hello World" suite
describe("Hello World", function() {
  
  // specification
  it("says hello", function() {
    expect(helloWorld()).toEqual("Hello World");  
  });
  
  // specification
  it("contains the word \"world\"", function() {
    expect(helloWorld()).toContain("World");  
  });
  
});