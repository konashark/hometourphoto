var PORTFOLIO_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');

        $('#screen').html(
            '<div id="portfolioScreen" class="screen">' +
            '   <div class="topSpacer"></div>' +
            '   <div class="container">' +
            '       <div class="row">' +
            '           <h1 class="col-md-12">Portfolio</h1>' +
            '       </div>' +
            '       <div class="row">' +

            '       <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:600px;height:300px;overflow:hidden;visibility:hidden;">' +
            '           <!-- Loading Screen -->' +
            '           <div data-u="loading" style="position:absolute;top:0px;left:0px;background:url("img/loading.gif") no-repeat 50% 50%;background-color:rgba(0, 0, 0, 0.7);"></div>' +
            '           <div id="carouselSlides" data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:600px;height:300px;overflow:hidden;">' +
            '               <!-- Insert Slides Here -->' +
            '               <a data-u="any" href="https://www.jssor.com" style="display:none">js slider</a>' +
            '           </div>' +
            '           <!-- Bullet Navigator -->' +
            '           <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">' +
            '               <!-- bullet navigator item prototype -->' +
            '               <div data-u="prototype" style="width:16px;height:16px;"></div>' +
            '           </div>' +
            '           <!-- Arrow Navigator -->' +
            '           <span data-u="arrowleft" class="jssora12l" style="top:0px;left:0px;width:30px;height:46px;" data-autocenter="2"></span>' +
            '           <span data-u="arrowright" class="jssora12r" style="top:0px;right:0px;width:30px;height:46px;" data-autocenter="2"></span>' +
            '       </div>' +
            '       </div>' +

            '       <div id="grid"></div>' +
            '       <div id="pages">' +
            '           <h3 id="pages-header">Online Flyer Pages</h3>' +
            '           Note: these are examples only. These properties are no longer for sale.' +
            '       </div>' +
            '   </div>' +
            '</div>');

        var slideContainer = $('#carouselSlides');

        var spotlight = PORTFOLIO_MODEL.getSpotlightData();
        var portfolio = PORTFOLIO_MODEL.getPortfolioData();
        var pages = PORTFOLIO_MODEL.getPropertyPages();

        spotlight.forEach(function (item, index) {
            slideContainer.append(
                '<div>' +
                '   <img data-u="image" src="' + item.url + '" />' +
                '</div>'
            );
        });

        portfolio.forEach(function (port, index) {
            $('#grid').append(
                '       <div class="row">' +
                '           <h2 class="portfolioLabel">' + port.label + '</h2>' +
                '       </div>'
            );

            portfolio[index].images.forEach(function (item, index) {
                var cell = $('<div class="gridCell"></div>');
                cell.css('background-image', 'url(' + item.url + ')');
                cell[0].IMAGE_URL = item.url;
                $('#grid').append(cell);
                cell.on('click', function() {
                    showFloatingWindow(this.IMAGE_URL);
                    return false;
                });
            });
        });

        pages.forEach(function (item, index) {
            $('#pages').append(
                '<h3>' +
                '   <a href="' + item.url + '">' + item.label + '</a>' +
                '</h3>'
            );
        });


        // Remove the floating window if user clicks anywhere on page except for another grid cell
        $('#portfolioScreen').on('click', function() {
            $('.portfolioFloat').remove();
            UTILS.setOpacity('.container', 1);
        });

        UTILS.setOpacity('#screen', 1);
    };

    // ********************************************
    var showFloatingWindow = function (url) {
        $('.portfolioFloat').remove();
        $('#portfolioScreen').append(
            '<div class="portfolioFloat">' +
            '   <div class="portfolioFloatImage"></div>' +
            '</div>'
        );
        $('.portfolioFloat').css({
            'height': parseInt($('.portfolioFloat').width() * .6666)
        });
        $('.portfolioFloatImage').css({
            'background-image': 'url(' + url + ')'
        });

        UTILS.setOpacity('.container',.5);
    };

    // ********************************************
    this.erase = function (callback) {
        console.log('VIEW: Erasing');
        $('.portfolioFloat').remove();
        UTILS.setOpacity('#screen', 0);
        setTimeout( function() {
            $('#screen').empty();
            if (typeof callback === 'function') {
                callback();
            }
        }, 300);
    };
}).apply(PORTFOLIO_VIEW);

