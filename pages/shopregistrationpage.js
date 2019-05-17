function shopregistrationpage(){
	
  this.name = element(by.name("name"));
  this.email = element(by.css("input[name='email']"));
  this.password = element(by.id("exampleInputPassword1"));
  this.icecream = element(by.css("input[type='checkbox']"));
  this.gender = element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
  this.employmentStatus = element.all(by.name("inlineRadioOptions")).first();
  this.birthday = element(by.name("bday"));
  this.submit = element(by.buttonText("Submit"));
  this.successText = element(by.css("div[class*='success']"));
  this.nameMinCharError = element(by.css("[class='alert alert-danger']"));
  this.getShopURL = function(){browser.get('https://qaclickacademy.github.io/protocommerce/');};
}

module.exports = new shopregistrationpage();

