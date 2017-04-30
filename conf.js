// An example configuration file.
exports.config = {
  directConnect: true,
  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome' 
    //'marionette': true,
	//firefoxPath: 'C:/Program Files (x86)/Mozilla Firefox/firefox.exe'
  },
  
  //localSeleniumStandaloneOpts : {
  //jvmArgs : ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer.exe'] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
//},

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['TC2_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColours: true ,
    defaultTimeoutInterval: 30000
  }
};
