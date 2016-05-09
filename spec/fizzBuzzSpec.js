

describe("fizzbuzz", function() {
  it("should return 1 when passing 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("should return fizz when passing 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

});

/*
describe 'fizzbuzz method' do
	context 'with valid input' do
		it 'should return 1 when passing 1' do
			expect(fizzbuzz(1)).to eq 1
		end
		it 'should return fizz when passing 3' do
			expect(fizzbuzz(3)).to eq 'fizz'
		end
		it 'should return buzz when passing 5' do
			expect(fizzbuzz(5)).to eq 'buzz'
		end
		it 'should return fizzbuzz when passing 15' do
			expect(fizzbuzz(15)).to eq 'fizzbuzz'
		end


	end
end
*/