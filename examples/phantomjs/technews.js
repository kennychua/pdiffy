var page = require('webpage').create();
var resemble = require('../../js/src/resemble.pdiffy.js');

page.viewportSize = { width: 320, height: 480 };
page.open('http://news.google.com/news/i/section?&topic=t', function (status) {
	phantomjs.injectJs('../../js/src/resemble.pdiffy.js');
    if (status !== 'success') {
        console.log('Unable to access the network!');
    } else {
        page.evaluate(function () {
            var body = document.body;
            body.style.backgroundColor = '#fff';
            body.querySelector('div#title-block').style.display = 'none';
            body.querySelector('form#edition-picker-form').parentElement.parentElement.style.display = 'none';
        });
        page.render('technews.png');
		var screenie = page.renderBase64();

resemble.resemble(screenie).compareTo(screenie).onComplete(function(data){
	console.log(data);
			/*
				{
						  misMatchPercentage : 100, // %
						  	  isSameDimensions: true, // or false
							  	  getImageDataUrl: function(){}
								  	}
										*/
});
    }
    phantom.exit();
});
