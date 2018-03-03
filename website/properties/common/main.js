var MAIN = {};
console.log('App is loading...');

(function() {

    this.init = function () {
        console.log('Initializing...');

        document.addEventListener('keydown', eventHandler);

        draw(PARAMS);
    };

    var draw = function(params) {

        $('#screen').css( {
            'background-color': PARAMS.backColor || 'white',
            'background-image': 'url(' + PARAMS.backTile + ')'
        });

        $('.panel').css( {
            'background-color': PARAMS.panelColor || 'black',
            'color': PARAMS.panelTextColor || '#eee'
        });

        $('#addressBlock').css( {
            'background-color': PARAMS.addressBackColor || 'black',
            'color': PARAMS.addressForeColor || '#eee'
        });

        $('#detailsBlock').css( {
            'background-color': PARAMS.detailsBackColor || 'black',
            'color': PARAMS.detailsForeColor || '#eee'
        });

        $('.sectionSpacer').css( {
            'background-color': PARAMS.dividerColor || 'white',
        });

        $('.sectionHeader').css( {
            'color': PARAMS.sectionHeaderColor || '#eee'
        });

        $('#heading').text(params.address + ' - ' + params.city);
        $('#price').text('OFFERED AT ' + params.price);
        $('#description').text(params.description);
        $('#bedrooms').text('Beds: ' + params.bedrooms);
        $('#bathrooms').text('Baths: ' + params.bathrooms);
        $('#squareFeet').text('Sq Ft: ' + params.squareFeet);
        $('#lotSize').text('Lot Size: ' + params.lotSize);
        $('#garage').text('Garage: ' + params.garage);
        $('#agentName').text(params.agentName);
        $('#agentPhone').text(params.agentPhone);
        $('#agentUrl').text(params.agentUrl);
        $('#agentLicense').text(params.agentLicense);
        $('#brokerLicense').text('Broker Lic: ' + params.brokerLicense);

        if (PARAMS.brokerLogo.length) {
            $('#brokerLogo')[0].src = PARAMS.brokerLogo;
        }
        if (PARAMS.agentPhoto.length) {
            $('#agentPhoto')[0].src = PARAMS.agentPhoto;
        }

        $('#agentEmail').html('<a href="mailto:' + PARAMS.agentEmail + '?Subject=Regarding%20MLS%20' + PARAMS.mls + '"target="_top">'+ PARAMS.agentEmail + '</a>');
        $('#agentUrl').html('<a href="' + PARAMS.agentUrl + '">Property Listing</a>');
        $('#brokerUrl').html('<a href="' + PARAMS.brokerUrl + '">' + PARAMS.brokerUrlName + '</a>');

        if (PARAMS.hideSlideshow || PARAMS.imageList.length < 1) {
            $('#slideshowContainer').html('');
        } else {
            showSlider();
        }

        if (PARAMS.hideGallery || PARAMS.imageList.length < 1) {
            $('#galleryContainer').html('');
        } else {
            showGallery();
        }

        if (PARAMS.hideDescription || PARAMS.description.length < 5) {
            $('#descriptionContainer').html('');
        }

        if (PARAMS.hideVideoTour || !PARAMS.videoTourUrl.length) {
            $('#videoTourContainer').html('');
        } else {
            $('.videoContainer', '#videoTourContainer').append(
                '<iframe src="' + PARAMS.videoTourUrl + '" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
            );
        }

        if (PARAMS.hideAerialTour || !PARAMS.videoAerialUrl.length) {
            $('#videoAerialContainer').html('');
        } else {
            $('.videoContainer', '#videoAerialContainer').append(
                '<iframe src="' + PARAMS.videoAerialUrl + '" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
            );
        }

        if (PARAMS.hideLocation || !PARAMS.latitude) {
            $('#locationContainer').html('');
        } else {
            showMap();
        }
    };

    // ***************************************
    var showGallery = function () {
        for (var i = 0; i < PARAMS.imageList.length; i++) {
            var cell = $('<div class="gridCell"></div>');
            cell.css('background-image', 'url(' + PARAMS.imageList[i] + ')');
            $('#grid').append(cell);
        }
    };

    // ***************************************
    var showSlider = function () {
        var slideContainer = $('#carouselSlides');

        for (var i = 0; i < PARAMS.imageList.length; i++) {
            slideContainer.append(
                '<div>' +
                '   <img class="sliderImage" data-u="image" src="' + PARAMS.imageList[i] + '"/>' +
                '</div>'
            );
        }

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
            jssor_1_slider.$ScaleWidth($('.screen').width() *.6);
            return;
        }

        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*responsive code end*/

    };

    var showMap = function() {
        //$('#map').html('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');

        var map = new google.maps.Map(document.getElementById('mapInset'), {
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
