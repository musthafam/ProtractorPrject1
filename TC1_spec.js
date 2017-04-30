describe('This is the first test case', function() {
	
	var width = 800;
var height = 600;

	it('First it block', function(){
		browser.get('http://www.thetestroom.com/jswebapp');
		browser.driver.manage().window().setSize(width, height);
		expect(browser.getTitle()).toBe('Zoo Adoption | Home');
		element(by.model('person.name')).sendKeys('This is Musthafa');
		element(by.binding('person.name')).getText().then(function(text)
		{
			console.log(text);
			
		}
		);
	}
	);
});