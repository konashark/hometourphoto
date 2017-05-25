var NAVBAR = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);
    var open = false;
    var HOME = 0;
    var SERVICES = 1;
    var PRICING = 2;
    var PORTFOLIO = 3;
    var CONTACT = 4;

    var selected = HOME;

    this.id = 'NAVBAR';

    log('Loaded');

    // ********************************************
    this.open = function () {
        log('NAVBAR open');

        $('#navbar').html(
            '   <img id="navbarLogo" src="./resources/images/htlogo-96.png">' +
            '   <div id="navbarName">HomeTour Photography</div>' +
            '   <div id="navbarName2">HomeTour Photography</div>' +
            '   <div id="navbarInfo">hometourphoto.com - xxx.xxx.xxxx</div>' +
            '<div id="navbarContainer">' +
            '   <div class="row">' +
            '       <div id="navbarHome" class="navOption" data-option="0">HOME</div>' +
            '       <div id="navbarServices" class="navOption" data-option="1">SERVICES</div>' +
            '       <div id="navbarPricing" class="navOption" data-option="2">PRICING</div>' +
            '       <div id="navbarPortfolio" class="navOption" data-option="3">PORTFOLIO</div>' +
            '       <div id="navbarContact" class="navOption" data-option="4">CONTACT</div>' +
            '   </div>' +
            '</div>'
        );

        // <span class = "glyphicon glyphicon-search"></span>

        $('.navOption').removeClass('selected');
        $('.navOption').eq(selected).addClass('selected');

        open = true;

        $('.navOption').on('click', function(event) {
            var item = this.getAttribute('data-option');
            jumpToScreen(item);
        });
    };

    // ********************************************
    this.close = function () {
        log('NABAR close');
        open = false;
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log('NAVBAR event handler: ' + event.keyCode);

        switch (event.keyCode) {
            case KEYMAP.ENTER:
                G.stateManager.transitionTo('HOME');
                break;
        }
        return false;    // true = consumed, stop propagation
    };

    // ********************************************
    var jumpToScreen = function (item) {
        var screens = ['HOME', 'SERVICES', 'PRICING', 'PORTFOLIO', 'CONTACT'];
        log('Navigating to screen ' + screens[item]);
        G.stateManager.transitionTo(screens[item]);
    }

}).apply(NAVBAR);

