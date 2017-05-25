var HOME_MODEL = {};

(function() {
    var value = 0;

    // ********************************************
    this.get = function () {
        return value;
    };

    // ********************************************
    this.set = function (v) {
        value = v;
    };

}).apply(HOME_MODEL);

