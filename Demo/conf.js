var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlReporter({
baseDirectory: 'C:\Users\akankshaj\AppData\Roaming\npm\node_modules\protractor\example', // a location to store screen shots.
docTitle: 'Report',
docName: 'protractor-tests-report.html'
});

exports.config = {
  //directConnect: true,
   seleniumAddress: 'http://localhost:4444/wd/hub',
 capabilities: {
	 'browserName': 'Chrome'
},
    
 
  // Framework to use. Jasmine is recommended.
	framework: 'jasmine',
	//specs: ['link_spec.js'],  
	specs: ['test_spec.js'],  
 
  
  // Options to be passed to Jasmine
   jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000
  },	
  
  onPrepare: function() {
       jasmine.getEnv().addReporter(reporter);
},
};