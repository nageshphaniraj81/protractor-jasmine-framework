describe('Automate protractor website', function() {

	var calc = require("../pages/calculatorpage.js");
	var using = require('jasmine-data-provider');
	var calcData = require("../dataproviders/calculatordata.js");
	
	
    //Setup
	beforeEach(function() {
		calc.getURL();
	});
	
	
	//Here data stores actual data & 
	//description stores sub object name in data provider file
	//For every iteration, one data is picked
	 using(calcData.calculatordata, function (data, description) {
		 it(description, function() {	
				calc.firstinput.sendKeys(data.firstinput);
				calc.secondinput.sendKeys(data.secondinput);
				calc.goButton.click();
				expect(calc.resultText.getText()).toBe(data.result);
			})
	  });


	//tear down
	afterEach(function() {
	});

})
