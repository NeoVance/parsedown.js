var Parsedown = (
    
    function () {
        
        "use strict";
        var instances;
        
        // Function isArray
        // Checks to see if any object is an initialized array.
        var isArray = function(o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }
        
        // Additional private members declared here.
        
        function ParseInstance (name = 'default') {
            // initialize instances
            if (! isArray(instances)) {
                instances = [];
            }
            
            if (! instances[name]) {
                instances[name] = this;
            }
            
            // Additional initialization should be done here.
            
            //
            // Setters
            //
            var break_marker = "  \n";
            this.set_breaks_enabled = function(breaks_enabled) {
                break_marker = breaks_enabled ? "\n" : "  \n";
            }
            
            //
            // Fields
            //
            var reference_map = []; // These need to have getters/setters
            var escape_sequence_map = []; // for use in prototype.parse
            
            return instances[name];
        }
        
        ParseInstance.instance = function (name = 'default') {
            return instances[name] || new ParseInstance(name);
        }
        
        // Additional public members defined here.
        // Use prototype for members of instanciated object.
        // Use normal . selector for static object members
        
        ParseInstance.prototype.parse = function (text) {
            
        }
        
        return ParseInstance;
        
    }()
    
);

// initialize JQuery plugin
(
    
    function ($) {
        
        // if JQuery is not an object just return.
        if ($ === null) {
            return;
        }
        
        $.fn.parsedown = function() {
            // Set the html of the selected element to the parsed output of the
            // text inside that element
            this.html(Parsedown.instance(this.selector).parse(this.text));
            // return this for chaining.
            return this;
        }
        
    }(JQuery)
    
);
