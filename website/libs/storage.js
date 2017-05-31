var STORAGE = {};

(function() {
    var NOT_SUPPORTED_MSG = "Local Storage not supported on this device.";

    this.persistentWrite = function(name, value) {
        if (typeof (localStorage) === "object") {
            localStorage.setItem(name, JSON.stringify(value));
        } else {
            console.warn(NOT_SUPPORTED_MSG);
        }
    };

    this.persistentRead = function(name) {
        if (typeof (localStorage) === "object") {
            var value = localStorage.getItem(name);
            if (value !== "undefined") {
                try {
                    return JSON.parse(value);
                } catch (e) {
                    return value;
                }
            }
            return value;
        }
        console.warn(NOT_SUPPORTED_MSG);
    };

    this.persistentRemove = function(name) {
        if (typeof (localStorage) === "object") {
            localStorage.removeItem(name);
        } else {
            console.warn(NOT_SUPPORTED_MSG);
        }
    };

    void this.persistentRemove;

}).apply(STORAGE);
