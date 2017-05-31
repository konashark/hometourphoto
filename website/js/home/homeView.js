var HOME_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');
        $('#screen').html('<div id="homeScreen" class="screen">HOME</div>');

        $('#homeScreen').html(
        '<div class="topSpacer"></div>' +
        '<div class="container">' +
        '   <div class="row">' +
        '       <div class="col-md-4">' +
        '           <h2>About Us...</h2>' +
        '           <p>The team at <span class="bold">HomeTour Photography</span> is serious about making your home or business look great. We\'ve been a part of the photography community for over 30 years - everything from managing photo labs, to teaching photographic techniques, to selling our own landscape art photography.</p>' +
        '           <p> Now, through our family-owned company, <span class="bold">HomeTour Photography</span>, we bring these skills, and love of the art, to real estate and product photography to help make you shine!</p>' +
        '           <img src="./resources/images/home-2.jpg" class="img-responsive">' +
        '           <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>' +
        '       </div>' +
        '       <div class="col-md-4">' +
        '           <img src="./resources/images/home-1.jpg" class="img-responsive">' +
        '           <p></p></p><p>We serve most of <span class="bold">Sacramento</span> and <span class="bold">Placer</span> counties and can often provide 24 hour turn-around time on our photo processing and editing.</p>' +
        '            <p><span class="bold">Call us today!</span></p><p></p>' +
        '           <img src="./resources/images/logo-128.png" class="img-responsive" style="margin-left:auto; margin-right:auto">' +
        '       </div>' +
        '       <div class="col-md-4">' +
        '           <h2>Pro DSLR Imaging</h2>' +
        '           <p>We use high-end cameras, lenses, and lighting in our work. We employ <span class="bold">High Dynamic Range</span> technology where it makes sense.</p>'+
        '           <p>Every photo is <span class="bold">hand-edited</span> to our exacting expectations. Unlike many others, we do not charge a premium for basic custom processing.</p>' +
        '           <p>It is our goal to give you a professional product at entry-level prices.</p>' +
        '           <img src="./resources/images/home-3.jpg" class="img-responsive">' +
        '       </div>' +
        '   </div>' +

        '   <div class="row">' +
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

}).apply(HOME_VIEW);

