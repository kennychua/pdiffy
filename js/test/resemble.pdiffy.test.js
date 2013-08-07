
describe('pdiffy', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			expect([1,2,3].indexOf(5)).to.equal(-1);
		})
	})
	describe('#compareTo()', function(){
		it('should return XXX', function(done){
			this.timeout(10000);
			console.log("hello");
			resemble(testdata.google_original).compareTo(testdata.google_original).onComplete(function(data) {
			console.log("hello2");
				console.log(data);
				expect('xxx').to.equal('abc');
				return data;
				done();
			});
		})
	})
})
