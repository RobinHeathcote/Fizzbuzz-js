

describe("fizzbuzz", function() {
  it("should return 1 when passing 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("should return fizz when passing 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });
  it("should return fizz when passing 5", function() {
    expect(fizzBuzz(5)).toEqual("buzz");
  });

  it("should return fizzbuzz when passing 15", function() {
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  });

  it("should return fizzbuzz when passing 30", function() {
    expect(fizzBuzz(30)).toEqual("fizzbuzz");
  });
});
