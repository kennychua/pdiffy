describe('pdiffy', function(){
	this.timeout(5000); // Set 5s timeout on all these async tests

	describe('#compareTo() on identical images', function(){
		it('should return true on data.isSameDimensions', function(done){
			pdiffy(testdata.google_original).compareTo(testdata.google_original).onComplete(function(data) {
				expect(data.isSameDimensions).to.equal(true);
				done();
			});
		})
		it('should return 0.00 on data.misMatchPercentage', function(done){
			pdiffy(testdata.google_original).compareTo(testdata.google_original).onComplete(function(data) {
				expect(data.misMatchPercentage).to.equal("0.00");
				done();
			});
		})
	})

	describe('original #compareTo() missing link', function(){
		it('should return true on data.isSameDimensions', function(done){
			pdiffy(testdata.google_original).compareTo(testdata.google_about_link_missing).onComplete(function(data) {
				expect(data.isSameDimensions).to.equal(true);
				done();
			});
		})
		it('should NOT return 0.00 on data.misMatchPercentage', function(done){
			pdiffy(testdata.google_original).compareTo(testdata.google_about_link_missing).onComplete(function(data) {
				expect(data.misMatchPercentage).to.equal("0.04");
				done();
			});
		})
	})

	describe('original #compareTo() transparency over missing link', function(){
		it('should return true on data.isSameDimensions', function(done){
			pdiffy(testdata.google_original).compareTo(testdata.google_about_link_transparent).onComplete(function(data) {
				expect(data.isSameDimensions).to.equal(true);
				done();
			});
		})
		it('should return 0.00 on data.misMatchPercentage', function(done){
			pdiffy(testdata.google_original).compareTo(testdata.google_about_link_transparent).onComplete(function(data) {
				expect(data.misMatchPercentage).to.equal("0.00");
				done();
			});
		})
	})

	describe('transparency over missing link #compareTo() original', function(){
		it('should return true on data.isSameDimensions', function(done){
			pdiffy(testdata.google_about_link_transparent).compareTo(testdata.google_original).onComplete(function(data) {
				expect(data.isSameDimensions).to.equal(true);
				done();
			});
		})
		it('should return 0.00 on data.misMatchPercentage', function(done){
			pdiffy(testdata.google_about_link_transparent).compareTo(testdata.google_original).onComplete(function(data) {
				expect(data.misMatchPercentage).to.equal("0.00");
				done();
			});
		})
	})

	describe('transparency over missing link #compareTo() missing link', function(){
		it('should return true on data.isSameDimensions', function(done){
			pdiffy(testdata.google_about_link_transparent).compareTo(testdata.google_about_link_missing).onComplete(function(data) {
				expect(data.isSameDimensions).to.equal(true);
				done();
			});
		})
		it('should return 0.00 on data.misMatchPercentage', function(done){
			pdiffy(testdata.google_about_link_transparent).compareTo(testdata.google_about_link_missing).onComplete(function(data) {
				expect(data.misMatchPercentage).to.equal("0.00");
				done();
			});
		})
	})

	describe('missing link #compareTo() transparency over missing link', function(){
		it('should return true on data.isSameDimensions', function(done){
			pdiffy(testdata.google_about_link_missing).compareTo(testdata.google_about_link_transparent).onComplete(function(data) {
				expect(data.isSameDimensions).to.equal(true);
				done();
			});
		})
		it('should return 0.00 on data.misMatchPercentage', function(done){
			pdiffy(testdata.google_about_link_missing).compareTo(testdata.google_about_link_transparent).onComplete(function(data) {
				expect(data.misMatchPercentage).to.equal("0.00");
				done();
			});
		})
	})

	// missing e in 'Google' test
	// data.getImageDataUrl() comparisons
})
