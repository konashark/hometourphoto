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
        '       <div class="col-xs-12 col-sm-6 col-md-4">' +
        '           <h2>About Us...</h2>' +
        '           <p>The team at <span class="bold">HomeTour Photo</span> is serious about making your home or business look great. We\'ve been a part of the photography community for over 30 years - everything from managing photo labs, to teaching photographic techniques, to selling our own landscape art photography.</p>' +
        '           <img src="./resources/images/home-1.jpg" class="img-responsive">' +
        '           <p> Now, through our family-owned company, <span class="bold">HomeTour Photo</span>, we bring these skills, and love of the art, to real estate photography to help make you shine!</p>' +
        '           <img src="./resources/images/home-6.jpg" class="img-responsive">' +
        '           <p>We want to be your <span class="bold">partner</span>, not just  a contractor. Your success is our success, and we will do what it takes to help market your home.</p>' +
//        '           <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>' +
        '       </div>' +
        '       <div class="col-xs-12 col-sm-6 col-md-4">' +
        '           <img src="./resources/images/home-2.jpg" class="img-responsive">' +
        '           <p></p></p><p>We are based in the beautiful mountain town of <span class="bold">Colfax, California</span>, and we serve most of <span class="bold">Placer</span> and <span class="bold">Nevada</span> counties. We typically provide 4-24 hour turn-around time on our photo processing and editing, then deliver  your images via the web for the fastest response time.</p>' +
        '           <img src="./resources/images/home-5.jpg" class="img-responsive" style="margin-left:auto; margin-right:auto">' +
        '           <p></p>' +
        '           <p>So, whether you\'re representing a tiny starter home or condo, or marketing a mansion, <span class="bold">HomeTour Photo</span> is ready to offer you the same great service.</p>' +
        '           <p><span class="bold">Call us today!</span></p>' +
        '           <p></p>' +
        '           <img src="./resources/images/logo-128.png" class="img-responsive" style="margin-left:auto; margin-right:auto">' +
        '       </div>' +
        '       <div class="col-xs-12 col-sm-6 col-md-4">' +
        '           <h2>Pro DSLR Imaging</h2>' +
        '           <p>We use professional quality cameras, lenses, and lighting in our work. We employ <span class="bold">High Dynamic Range</span> technology where it makes sense, or use natural lighting or multiple-flash lighting where appropriate.</p>'+
        '           <img src="./resources/images/home-3.jpg" class="img-responsive">' +
        '           <p>Every photo is <span class="bold">hand-edited</span> to our exacting expectations.</p>' +
        '           <p>It is our goal to give you <b>professional photography</b> and <b>desktop publishing</b> at up-front, entry-level prices.</p>' +
        '           <img src="./resources/images/home-4.jpg" class="img-responsive">' +
        '           <p>For a limited time <span class="bold">HomeTour Photo</span> is offering <b>FREE aerial shots</b> with most packages - subject to law and environmental conditions.</p>' +
        '       </div>' +
        '   </div>' +

        '   <div class="row">' +
        '   </div>' +
        '</div>' +
        '<div class="topSpacer"></div>');

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

