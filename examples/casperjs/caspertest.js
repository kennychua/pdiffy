// Initialise Casper, and instruct it to do lots of logging
var casper = require('casper').create(
{	
	verbose:true,
	logLevel: "debug"
});

// Navigate to Google homepage
casper.start('http://google.com', function() {
	// Replace the following with path to a local copy of resemble.pdiffy.js 
	// PhantomJs/CasperJs only supports injection of local files, not over http
	phantom.injectJs('/home/htpc/Development/pdiffy/js/src/resemble.pdiffy.js'); 

	// whole page capture
	actual_screenshot = 'data:image/png;base64,' + this.captureBase64('png');
});

// compare the screenshot against a known baseline
casper.then(function() {
	// Assume the variable 'expected_screenshot' holds the base64 representation of the screenshot
	// you know to be correct (and has transparency ignore blocks, if required)
	//
	//    var expected_screenshot = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...truncated...';
	//
	// However, in this example, we just make expected_screenshot == actual_screenshot
	expected_screenshot = actual_screenshot;
	resemble(actual_screenshot).compareTo(expected_screenshot).onComplete(function(data){
		results = data;
	});
});

// Wait for the async compareTo(...) to return, then do assertion check for test results
casper.waitFor(function check() {
	return (results!== undefined);
}, function then() {
		this.test.assertEquals(results.misMatchPercentage, "0.00", "Expected and actual screenshots match");
		// The following will return the base64 representation of the pdiff results - highlighting areas 
		// that are different
		//results.getImageDataUrl();
});

casper.run();


