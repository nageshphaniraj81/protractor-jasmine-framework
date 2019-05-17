 function shopselectpage() {

	this.shopLink = element(by.linkText("Shop"));
	this.checkOutText = element(by.partialLinkText("Checkout"));
	this.checkOutButton = element(by.partialLinkText("Checkout"));
	this.getShopURL = function() {
		browser.get('https://qaclickacademy.github.io/protocommerce/');
	};
	this.selectSamsung = function() {
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == "Samsung Note 8") {
					item.element(By.css("button[class*='btn-info']")).click();
				}
			})
		})
	};
	this.selectIPhone = function() {
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == "iphone X") {
					item.element(By.css("button[class*='btn-info']")).click();
				}
			})
		})
	};
	this.selectNokia = function() {
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == "Nokia Edge") {
					item.element(By.css("button[class*='btn-info']")).click();
				}
			})
		})
	};
	this.selectBlackberry = function() {
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == "Blackberry") {
					item.element(By.css("button[class*='btn-info']")).click();
				}
			})
		})
	};

}
module.exports = new shopselectpage();
