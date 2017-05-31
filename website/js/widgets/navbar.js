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
            '   <img id="navbarLogo" src="./resources/images/logo-128.png">' +
            '   <div id="navbarName">HomeTour Photo</div>' +
            '   <div id="navbarName2">HomeTour Photo</div>' +
            '   <div id="navbarInfo">hometourphoto.com - xxx.xxx.xxxx</div>' +
            '<div id="navbarContainer">' +
            '   <div class="row">' +
            '       <div id="navbarHome" class="navOption" data-item="0" data-state="HOME">HOME</div>' +
            '       <div id="navbarServices" class="navOption" data-item="1" data-state="SERVICES">SERVICES</div>' +
            '       <div id="navbarPricing" class="navOption" data-item="2" data-state="PRICING">PRICING</div>' +
            '       <div id="navbarPortfolio" class="navOption" data-item="3" data-state="PORTFOLIO">PORTFOLIO</div>' +
            '       <div id="navbarContact" class="navOption" data-item="4" data-state="CONTACT">CONTACT</div>' +
            '   </div>' +
            '</div>'
        );

        // <span class = "glyphicon glyphicon-search"></span>

        setFocus();

        open = true;

        $('.navOption').on('click', function(event) {
            var item = this.getAttribute('data-state');
            selected = parseInt(this.getAttribute('data-item'));
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
    var setFocus = function (screen) {
        $('.navOption').removeClass('selected');
        $('.navOption').eq(selected).addClass('selected');
    };

    // ********************************************
    var jumpToScreen = function (screen) {
        log('Navigating to screen ' + screen);
        setFocus();
        G.stateManager.transitionTo(screen);
    }

}).apply(NAVBAR);

