var MAIN = {};
console.log('App is loading...');

(function() {

    this.init = function () {
        console.log('Initializing...');

        document.addEventListener('keydown', eventHandler);

        draw(PARAMS);
    };

    var draw = function(params) {
        $('#heading').text(params.address + ' - ' + params.city);

        showSlider();
        showMap();
    };

    var showSlider = function () {
        var slideContainer = $('#carouselSlides');

        var params = {};
        params.images = [
            { url: './web/' + PARAMS.photoPrefix + '-1.jpg' },
            { url: './web/' + PARAMS.photoPrefix + '-2.jpg' },
            { url: './web/' + PARAMS.photoPrefix + '-3.jpg' },
            { url: './web/' + PARAMS.photoPrefix + '-4.jpg' },
        ];

        params.images.forEach(function (item, index) {
            slideContainer.append(
                '<div>' +
                '   <img data-u="image" src="' + item.url + '" />' +
                '</div>'
            );
        });

        /*
        params.images.forEach(function (item, index) {
            var cell = $('<div class="gridCell"></div>');
            cell.css('background-image', 'url(' + item.url + ')');
            $('#grid').append(cell);
        });
        */

        var jssor_1_SlideshowTransitions = [
            {$Duration:1200,$Opacity:2}
        ];

        var jssor_1_options = {
            $AutoPlay: 1,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*responsive code begin*/
        /*remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 600);
                jssor_1_slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*responsive code end*/

    };

    var showMap = function() {
        //$('#map').html('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: PARAMS.latitude, lng: PARAMS.longitude},
            zoom: 15
        });

        $('#mapAddress').text(PARAMS.address);
        $('#mapCity').text(PARAMS.city);
        $('#mapLongitude').text('Longitude: ' + PARAMS.longitude);
        $('#mapLatitude').text('Latitude: ' + PARAMS.latitude);

        //var img = new Image();
        //img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=16&size=640x640&sensor=false";
        //output.appendChild(img);
    };



    // ********************************************
    // All events from the document or from the event bus are routed through this handler, which then
    // distributes the event to the current handler or handled here if not consumed
    // ********************************************
    var eventHandler = function (event, payload) {

        switch (event.keyCode) {
            default:
                console.log('Key ' + event.keyCode + ' was not handled');
                break;
        }

    }.bind(this);

}).apply(MAIN);


//******************************
window.addEventListener('load', MAIN.init, false);
//******************************
