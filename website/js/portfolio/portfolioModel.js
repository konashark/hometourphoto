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
            { url: 'resources/images/portfolio/RIVERSIDE-13.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-14.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-15.jpg' },
            { url: 'resources/images/portfolio/RIVERSIDE-16.jpg' }
        ];

        portfolio[1] = {};
        portfolio[1].label = 'Cantor';
        portfolio[1].images = [
            { url: 'resources/images/portfolio/2795CANTOR-23.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-1.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-4.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-9.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-13.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-16.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-17.jpg' },
            { url: 'resources/images/portfolio/2795CANTOR-22.jpg' },
        ];

        portfolio[2] = {};
        portfolio[2].label = 'Tahoe Vista';
        portfolio[2].images = [
            { url: 'resources/images/portfolio/TAHOEVISTA-11.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-7.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-2.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-4.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-5.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-8.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-9.jpg' },
            { url: 'resources/images/portfolio/TAHOEVISTA-10.jpg' }
        ];

        portfolio[3] = {};
        portfolio[3].label = 'Meadow Vista / Winchester';
        portfolio[3].images = [
            { url: 'resources/images/portfolio/winchester-1000.jpg' },
            { url: 'resources/images/portfolio/winchester-1004.jpg' },
            { url: 'resources/images/portfolio/winchester-1007.jpg' },
            { url: 'resources/images/portfolio/winchester-1011.jpg' },
            { url: 'resources/images/portfolio/winchester-1012.jpg' },
            { url: 'resources/images/portfolio/winchester-1018.jpg' },
            { url: 'resources/images/portfolio/winchester-1022.jpg' },
            { url: 'resources/images/portfolio/winchester-1032.jpg' },
            { url: 'resources/images/portfolio/winchester-1040.jpg' },
            { url: 'resources/images/portfolio/winchester-1044.jpg' },
            { url: 'resources/images/portfolio/winchester-1046.jpg' },
            { url: 'resources/images/portfolio/winchester-1050.jpg' }
        ];

        portfolio[4] = {};
        portfolio[4].label = 'Auburn & Colfax';
        portfolio[4].images = [
            { url: 'resources/images/portfolio/colfax-100.jpg' },
            { url: 'resources/images/portfolio/colfax-101.jpg' },
            { url: 'resources/images/portfolio/colfax-102.jpg' },
            { url: 'resources/images/portfolio/colfax-103.jpg' },
            { url: 'resources/images/portfolio/colfax-104.jpg' },
            { url: 'resources/images/portfolio/colfax-105.jpg' },
            { url: 'resources/images/portfolio/colfax-106.jpg' },
            { url: 'resources/images/portfolio/colfax-107.jpg' },
            { url: 'resources/images/portfolio/colfax-108.jpg' },
            { url: 'resources/images/portfolio/colfax-109.jpg' },
            { url: 'resources/images/portfolio/colfax-110.jpg' },
            { url: 'resources/images/portfolio/colfax-111.jpg' },
            { url: 'resources/images/portfolio/colfax-112.jpg' },
            { url: 'resources/images/portfolio/colfax-113.jpg' },
            { url: 'resources/images/portfolio/colfax-114.jpg' },
            { url: 'resources/images/portfolio/colfax-115.jpg' },
            { url: 'resources/images/portfolio/colfax-116.jpg' },
            { url: 'resources/images/portfolio/colfax-117.jpg' },
            { url: 'resources/images/portfolio/colfax-118.jpg' },
            { url: 'resources/images/portfolio/colfax-119.jpg' },
            { url: 'resources/images/portfolio/colfax-120.jpg' },
            { url: 'resources/images/portfolio/colfax-121.jpg' },
            { url: 'resources/images/portfolio/colfax-122.jpg' },
            { url: 'resources/images/portfolio/colfax-123.jpg' },
            { url: 'resources/images/portfolio/colfax-124.jpg' },
            { url: 'resources/images/portfolio/colfax-125.jpg' },
            { url: 'resources/images/portfolio/colfax-126.jpg' }
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

