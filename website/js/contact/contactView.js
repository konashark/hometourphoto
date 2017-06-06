var CONTACT_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');

        $('#screen').html(
            '<div id="servicesScreen" class="screen">' +
            '   <div class="topSpacer"></div>' +
            '   <div class="container">' +
            '       <div class="row">' +
            '           <h1 class="col-md-12">Contact Us:</h1>' +
            '       </div>' +
            '       <br>' +
            '       <div class="row">' +
            '           <span class="col-xs-1"></span>' +
            '           <h2 style="line-height: 1.25" class="col-xs-10">We service the Placer and Nevada County region (Roseville, Auburn, Colfax, Grass Valley, Nevada City, Lake of the Pines, Truckee, etc). Please contact us with any questions you may have regarding our service.</h2>' +
            '           <span class="col-xs-1 contactText"></span>' +
            '       </div>' +
            '       <br>' +
            '       <div class="row">' +
            '           <span class="col-xs-1"></span>' +
            '           <span class="col-xs-1 glyphicon glyphicon-earphone contactIcon"></span>' +
            '           <span class="col-xs-10 contactText">Phone: xxx.xxx.xxxx</span>' +
            '       </div>' +
            '       <br>' +
            '       <div class="row">' +
            '           <span class="col-xs-1"></span>' +
            '           <span class="col-xs-1 glyphicon glyphicon-envelope contactIcon"></span>' +
            '           <a href="mailto:hometourphoto@gmail.com?Subject=Inquiry"><span class="col-xs-10 contactText">hometourphoto@gmail.com</span></a>' +
            '       </div>' +
            '       <br>' +
            '       <div class="row">' +
            '           <span class="col-xs-1"></span>' +
            '           <span class="col-xs-1 glyphicon glyphicon-file contactIcon"></span>' +
            '           <a href="http://hometourphoto.com"><span class="col-xs-10 contactText">hometourphoto.com</span></a>' +
            '       </div>' +
            '   </div>' +
            '   <div class="topSpacer"></div>' +
            '</div>');

        UTILS.setOpacity('#screen', 1);
    };

    // ********************************************
    this.erase = function (callback) {
        console.log('VIEW: Erasing');
        UTILS.setOpacity('#screen', 0);
        setTimeout( function() {
            $('#screen').empty();
            if (typeof callback === 'function') {
                callback();
            }
        }, 300);
    };
}).apply(CONTACT_VIEW);

