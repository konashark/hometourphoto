var HOME = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'HOME';
    this.flags = {};

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing HOME...');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering HOME...');
        NAVBAR.open();
        HOME_VIEW.draw();
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting HOME...');
        // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
        // in the module flags above. If set, this function will be passed a callback function. The state will
        // not transition until the callback is called by this function.
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log('HOME event handler: ' + event.keyCode);
        if (event.keyCode) {
            switch (event.keyCode) {
                case KEYMAP.ENTER:
                    G.stateManager.transitionTo('MODULEB');
                    break;
            }
        }
        return false;    // true = consumed, stop propagation
    }

}).apply(HOME);

