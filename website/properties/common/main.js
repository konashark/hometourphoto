var MAIN = {};
console.log('App is loading...');

(function() {

    // ***************************************
    this.init = function () {
        console.log('Initializing...');

        // We may have to wait for the template to finish loading

        var counter = 0;

        var pollForLoad = function () {
            if (document.getElementById('brokerLogo') == null && counter < 10) {
                counter++;
                console.log("Page loaded poll: " + counter);
                setTimeout(pollForLoad, 1000);
            } else {
                draw(PARAMS);
            }
        };

        pollForLoad();
    };

    // ***************************************
    var draw = function(params) {

        $('#screen').css( {
            'background-color': PARAMS.backColor || 'white',
            'color': PARAMS.foreColor || 'white',
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

        if (params.bedrooms) {
            $('#bedrooms').text('Beds: ' + params.bedrooms);
        } else {
            $('#bedrooms').remove();
        }

        if (params.bathrooms) {
            $('#bathrooms').text('Baths: ' + params.bathrooms);
        } else {
            $('#bathrooms').remove();
        }

        if (params.squareFeet) {
            $('#squareFeet').text('Sq Ft: ' + params.squareFeet);
        } else {
            $('#squareFeet').remove();
        }

        if (params.lotSize) {
            $('#lotSize').text('Lot Size: ' + params.lotSize);
        } else {
            $('#lotSize').remove();
        }

        if (params.garage) {
            $('#garage').text('Garage: ' + params.garage);
        } else {
            $('#garage').remove();
        }

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

    // ***************************************
    var showMap = function() {
        //$('#map').html('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');

        var map = new google.maps.Map(document.getElementById('mapInset'), {
            center: {lat: PARAMS.latitude, lng: PARAMS.longitude},
            zoom: 16
        });

        $('#mapAddress').text(PARAMS.address);
        $('#mapCity').text(PARAMS.city);
        $('#mapLongitude').text('Longitude: ' + PARAMS.longitude);
        $('#mapLatitude').text('Latitude: ' + PARAMS.latitude);

        //var img = new Image();
        //img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=16&size=640x640&sensor=false";
        //output.appendChild(img);
    };

 }).apply(MAIN);


//******************************
window.addEventListener('load', MAIN.init, false);
//******************************
