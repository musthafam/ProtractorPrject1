describe('AngularJs test',function(){
	var loginData = require('./Test.json');
	beforeEach(function(){
		browser.get('https://www.angularjs.org/');
	});
	xit('Test case 1',function(){
		
		expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
	});
	
	it('Test case 2',function(){
		
		element(by.model('yourName')).sendKeys(loginData[1].username);
		//var gettext = element(by.binding('yourName')).getText();
		var gettext = element(by.css('h1.ng-binding')).getText();
		expect(gettext).toBe('Hello admin1!');
	});
	
	xit('Test case 3',function(){
		
		var allelement;
		allelement=element.all(by.css('a.dropdown-toggle'));
		expect(allelement.count()).toBe(3);
		allelement.get(0).click();
		element(by.cssContainingText('a', 'Tutorial')).click();
		expect(browser.getTitle()).toBe('AngularJS: Tutorial: Tutorial');
	});
	
	xit('Test case 4',function(){
		
		var allelement;
		allelement=element.all(by.css('a.dropdown-toggle'));
		expect(allelement.count()).toBe(3);
		allelement.get(1).click();
		element(by.cssContainingText('a', 'Contribute')).click();
		expect(browser.getTitle()).toBe('AngularJS: Miscellaneous: Develop');
		element(by.model('$ctrl.selectedVersion')).$('[label="v1.6.4"]').click();
	});
	
});