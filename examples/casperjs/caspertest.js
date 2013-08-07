var casper = require('casper').create(
{	
	verbose:true,
	logLevel: "debug"
});

casper.start('http://google.com', function() {
	// Replace the following with path to a local copy of resemble.pdiffy.js 
	// PhantomJs/CasperJs only supports injection of local files, not over http
	phantom.injectJs('/home/htpc/Development/pdiffy/js/src/resemble.pdiffy.js'); 

	// whole page capture
	var screenie = this.captureBase64('png');

	//console.log(screenie);


	resemble(screenie).compareTo(screenie).onComplete(function(data){
		console.log(data);
		console.log(data.getImageDataUrl());
			return data;
	});
});

casper.run();
