var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	// Direct connect
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	specs : [ '../tests/*.js' ],
		
	// Precondition before all tests
	onPrepare : function() {

		browser.manage().window().maximize();
		browser.manage().deleteAllCookies();
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'reports/screenshots'
		}));
	},
	
	suites :
	{
		smoke : ['../tests/shopcheckouttest.js'],
	    regression : ['../tests/shopregistrationtest.js',
	    	          '../tests/calculatortest.js',
	    	          '../tests/shopselecttest.js',
	    	          '../tests/shopcheckouttest.js']
	},
	
	capabilities : {
		'browserName' : 'chrome'
	},
	
	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		showColors : true, // Use colors in the command line report.
	}
};