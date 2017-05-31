var PORTFOLIO = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'PORTFOLIO';
    this.asyncExit = true;

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing PORTFOLIO...');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering PORTFOLIO...');
        PORTFOLIO_VIEW.draw();
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting PORTFOLIO...');
        // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
        // in the module flags above. If set, this function will be passed a callback function. The state will
        // not transition until the callback is called by this function.
        PORTFOLIO_VIEW.erase(callback);
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log('MODULE-B event handler: ' + event.keyCode);
        switch (event.keyCode) {
            case KEYMAP.ENTER:
                G.stateManager.transitionTo('HOME');
                break;
        }
        return false;    // true = consumed, stop propagation
    }
}).apply(PORTFOLIO);

