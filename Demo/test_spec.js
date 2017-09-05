describe('Enter text', function(){
	
it("it should enter text", function() {
		browser.get('https://angularjs.org');
		element(by.model("yourName")).sendKeys("This is for testing");
		browser.driver.sleep(3000);
		var dynamicText = element(by.binding("yourName")).getText();
		
			if (expect(dynamicText).toEqual("Hello This is for testing!")){
			console.log("String matching");
			}
			
			else {
		 	 console.log("String not matching");
		 }
			});
				
					
	});
	
	