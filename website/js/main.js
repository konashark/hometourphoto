var MAIN = {};
console.log('App is alive!');
var G = G || {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);
    this.id = 'MAIN';

    this.init = function () {
        log('Initializing...');

        document.addEventListener('keydown', function (event) {
            var consumed = defaultEventHandler(event);
            if (consumed) {
                event.preventDefault();
            }
        });

        NAVBAR.open();

        G.eventMgr =  new EventBus();   // A tiny utility that allows us to send events within the app
        G.eventMgr.addListener(defaultEventHandler);
        G.eventMgr.dispatchEvent({ customType: 'Event Manager installed...' });

        G.stateManager = new StateManager;
        G.stateManager.newState(HOME);
        G.stateManager.newState(CONTACT);
        G.stateManager.newState(PORTFOLIO);
        G.stateManager.newState(PRICING);
        G.stateManager.newState(SERVICES);

        var route = G.stateManager.getCurrentRoute();
        if (route && route.length) {
            G.stateManager.routeTo(route);
        } else {
            G.stateManager.routeTo('home');
        }
    };

    // ********************************************
    // All events from the document or from the event bus are routed through this handler, which then
    // distributes the event to the current handler or handled here if not consumed
    // ********************************************
    var defaultEventHandler = function (event, payload) {

        var consumed = NAVBAR.eventHandler(event);

        if (!consumed) {
            var currentHandler = G.stateManager.getCurrentStateEventHandler();
            if (currentHandler) {
                consumed = currentHandler(event, payload);
            }

            // Check any system events sent by this app
            if (event.customType) {
                console.log('Got custom event: ' + event.customType);
            }

            if (!consumed) {
                switch (event.keyCode) {
                    default:
                        console.log('Key ' + event.keyCode + ' was not handled');
                        break;
                }
            }
        }

        return consumed;

    }.bind(this);

}).apply(MAIN);


//******************************
window.addEventListener('load', MAIN.init, false);
//******************************
