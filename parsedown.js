var Parsedown = (
    
    function () {
        
        "use strict";
        var instances;
        
        // Additional private variables declared here.
        
        function ParseInstance (name = 'default') {
            if (instances[name]) {
                return instances[name];
            }
            instances[name] = this;
            
            // Additional initialization should be done here.
        }
        
        ParseInstance.instance = function (name = 'default') {
            return instances[name] || new ParseInstance(name);
        }
        
        // Additional public members defined here.
        // Use prototype for members of instanciated object.
        // Use normal . selector for static object members
        
        return ParseInstance;
        
    }()
    
);