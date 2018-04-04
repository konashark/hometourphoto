var PORTFOLIO_MODEL = {};

(function() {

    // ********************************************
    this.getSpotlightData = function () {
        return [
            { url: 'resources/images/portfolio/SPOTLIGHT-1.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-2.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-3.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-4.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-5.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-6.jpg' },
            { url: 'resources/images/portfolio/SPOTLIGHT-7.jpg' }
        ];
    };

    // ********************************************
    this.getPortfolioData = function () {
        var portfolio = [];
        portfolio[0] = {};
        portfolio[0].label = 'Riverside';
        portfolio[0].images = [
            { url: 'resources/images/portfolio/RIVERSIDE-8.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-18.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-1.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-2.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-3.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-4.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-5.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-6.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-7.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-9.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-10.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-11.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-12.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-13.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-14.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-15.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-16.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-17.jpg' }
        ];

        portfolio[1] = {};
        portfolio[1].label = 'Cantor';
        portfolio[1].images = [
            { url: 'resources/images/portfolio/2795CANTOR-27.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-23.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-1.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-4.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-9.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-10.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-13.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-16.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-17.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-20.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-21.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-22.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-24.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-26.jpg' }
        ];

        portfolio[2] = {};
        portfolio[2].label = 'Tahoe Vista';
        portfolio[2].images = [
            { url: 'resources/images/portfolio/TAHOEVISTA-11.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-7.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-1.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-2.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-3.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-4.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-5.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-6.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-8.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-9.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-10.jpg' }
        ];

        return portfolio;
    };

    // ********************************************
    this.getPropertyPages = function () {
        return [
            { label: "Montana Lane, Colfax", url: 'http://www.hometourphoto.com/properties/MontanaLane' },
            { label: "Oak Ridge Drive, Colfax", url: 'http://www.hometourphoto.com/properties/1384OakRidge' }
        ];
    };


}).apply(PORTFOLIO_MODEL);

