module.exports = {
    verbose: false,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
             "disabled" : false,
             "browsers": [
             
         {
          "browserName": "safari",
          "platform": "OS X 10.10",
          "version": "8"
        },
        {
          "browserName": "chrome",
          "platform": "OS X 10.10",
          "version": "48"
        } ,
        {
          "browserName": "firefox",
          "platform": "OS X 10.10",
          "version": "44"
        } 

        
        
      ]
             
           
            
            
        }
    } ,
   
    suites:      ['test/*.html']
};
