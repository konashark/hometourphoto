var CONTACT = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'CONTACT';
    this.asyncExit = true;

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing CONTACT...');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering CONTACT...');
        CONTACT_VIEW.draw();
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting CONTACT...');
        // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
        // in the module flags above. If set, this function will be passed a callback function. The state will
        // not transition until the callback is called by this function.
        CONTACT_VIEW.erase(callback);
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log('CONTACT event handler: ' + event.keyCode);
        switch (event.keyCode) {
            case KEYMAP.ENTER:
                G.stateManager.transitionTo('HOME');
                break;
        }
        return false;    // true = consumed, stop propagation
    }
}).apply(CONTACT);

