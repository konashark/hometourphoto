var UTILS = {};

(function() {
    // ********************************************
    this.setOpacity = function (selector, value) {
        setTimeout( function() { $(selector).css('opacity', value); }, 0);
    };

    // ********************************************
    // The following jQuery helpers are not terribly useful, but they make the code a little easier to read
    // ********************************************
    this.horizontalScroll = function(elem, pos) {
        $(elem).css('-webkit-transform', 'translateX(' + pos + 'px)'); // CSS3D way - often much faster
    };

    void this.horizontalScroll;

    // ********************************************
    this.verticalScroll = function(elem, pos) {
        $(elem).css('-webkit-transform', 'translateY(' + pos + 'px)'); // CSS3D way - often much faster
    };

    void this.verticalScroll;

    // ********************************************
    this.hideElement = function(elem) {
        $(elem).css('display', 'none');
    };

    void this.hideElement;

    // ********************************************
    this.showElement = function(elem) {
        $(elem).css('display', 'block');
    };

    void this.showElement;

    // ********************************************
    this.setColor = function(elem, color) {
        $(elem).css('color', color);
    };

    // ********************************************
    this.setBackColor = function(elem, color) {
        $(elem).css('background-color', color);
    };

    // ********************************************
    this.setTop = function(elem, top) {
        $(elem).css('top', top);
    };

    void this.setTop;

    // ********************************************
    this.setLeft = function(elem, left) {
        $(elem).css('left', left);
    };

    void this.setLeft;

    // ********************************************
    this.setWidth = function(elem, width) {
        $(elem).css('width', width);
    };

    void this.setWidth;

    // ********************************************
    this.setHeight = function(elem, height) {
        $(elem).css('height', height);
    };

    // ********************************************
    this.loadImage = function(elem, src, success, fail) {
        if (elem) {
            if (elem.length) {
                elem = elem[0];   // It's a jQuery object
            }

            if (src) {
                elem.addEventListener("error", function() {
                    // elem.src = CONFIG.DEFAULT_IMAGE;
                    if (fail) { fail(elem); }
                });
                elem.addEventListener("load", success);
                elem.src = src;
            } else {
                //elem.src = CONFIG.DEFAULT_IMAGE;
            }
        }
    };

    // ********************************************
    this.loadCss = function (filename) {
        var fileref = document.createElement("link");

        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = filename;

        document.getElementsByTagName("head")[0].appendChild(fileref);
    };

    // ********************************************
    this.getUrlParameter = function(parameterName) {
        var result = null;

        var items = location.search.substr(1).split("&");

        for (var index = 0; index < items.length; index++) {
            var tmp = items[index].split("=");

            if (tmp[0] === parameterName) {
                result = decodeURIComponent(tmp[1]);
            }
        }

        return result;
    };


}).apply(UTILS);

