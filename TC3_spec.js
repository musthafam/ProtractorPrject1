describe('Weather Test case',function(){
	beforeEach(function(){
		browser.get('https://weather.com/en-IN');
	});
	it('Tc1',function(){
		expect(browser.getTitle()).toBe('The Weather Channel - National and Local Weather Forecast, Hurricane, Radar and Report from weather.com');
	});
	
	it('Tc2',function(){
		element(by.css('a.dropdown-toggle')).click();
		element(by.cssContainingText('span.continent','Americas')).click();
	});
});