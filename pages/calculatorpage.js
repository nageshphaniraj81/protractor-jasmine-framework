function calculatorpage(){
	this.firstinput = element(by.model("first"));
	this.secondinput = element(by.model("second"));
	this.goButton= element(by.id("gobutton"));
	this.resultText = element(by.css("h2[class='ng-binding']"));	
	this.getURL = function(){
		browser.get('http://juliemr.github.io/protractor-demo/');	
	} 
}

module.exports = new calculatorpage();