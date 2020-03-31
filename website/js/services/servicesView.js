var SERVICES_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');

        $('#screen').html(
            '<div id="servicesScreen" class="screen">' +
            '   <div class="topSpacer"></div>' +
            '   <div class="container">' +
            '       <div class="row">' +
            '           <h1 class="col-md-12">Services</h1>' +
            '       </div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/camera.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '              <h3>Professional Home Photography</h3>' +
            '               <div>Experienced photographers using quality DSLR cameras, lighting, and professional post-production editing. Portraits, such as for agent profiles, can also be arranged.</div>' +
            '           </div>' +
            '       </div>' +
            '       <div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/video_camera.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '              <h3>High-Definition Videography</h3>' +
            '               <div>Hand-edited live-action or slide-show videos for Real Estate presentation or of your special event.</div>' +
            '           </div>' +
            '       </div>' +
            '       <div></div><div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/drone.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3>High-Definition Aerial Photography</h3>' +
            '               <div>Set yourself apart by adding amazing aerial photos or videos to your property listing!</div>' +
            '               <div>Note: by law, this service is not available in all areas, and is subject to local terrain.</div>' +
            '           </div>' +
            '       </div>' +
            '       <div></div><div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/web_page.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3 >Custom Web Pages</h3>' +
            '               <p>Not only are we professional photographers, we also design, develop, and deploy customized web pages. Whether it be for your business or your real estate listing, we can give you a custom web page at an incredible price.</p>' +
            '           </div>' +
            '       </div>' +
            '       <div></div><div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/logo-128.png">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3 >Electronic Delivery</h3>' +
            '               <p>All products are delivered electronically. You will receive a web link to a collaborative web page from which you can download your photos/videos/documents.</p>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '   <div class="topSpacer"></div>' +
            '</div>');

            /*
            '<div class="container">' +
            '   <h2>Table</h2>' +
            '   <p>The .table-hover class enables a hover state on table rows within a tbody:</p>' +
            '   <table class="table table-hover">' +
            '       <thead>' +
            '           <tr>' +
            '               <th>#</th>' +
            '               <th>Firstname</th>' +
            '           </tr>' +
            '       </thead>' +
            '       <tbody>' +
            '           <tr>' +
            '               <td>1</td>' +
            '               <td>Anna</td>' +
            '           </tr>' +
            '           <tr>' +
            '               <td>1</td>' +
            '               <td>Anna</td>' +
            '           </tr>' +
            '           <tr>' +
            '               <td>1</td>' +
            '               <td>Anna</td>' +
            '           </tr>' +
            '       </tbody>' +
            '   </table>' +
            '</div>');
            */

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
}).apply(SERVICES_VIEW);

