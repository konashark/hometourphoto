var PRICING_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');

        $('#screen').html(
            '<div id="servicesScreen" class="screen">' +
            '   <div class="topSpacer"></div>' +
            '   <div class="container">' +
            '       <div class="row">' +
            '           <h1 class="col-md-12">Pricing</h1>' +
            '       </div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/camera.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3>Professional Home Photography</h3>' +
            '               <div>It is our goal to provide the best quality service and the best prices. We try to keep the pricing as simple and straightforward as possible, but we also want to be able to provide a professional product for all budgets so you don\'t have to pay for what you don\'t need.</div>' +
            '               <div class="red">2018 Introductory specials now available in the Placer and Nevada County regions!</div>' +
            '               <br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Value</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$129</div>' +
            '                           <div class="bold red">$99</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">5-10 hand-processed photos. Best for vacant land, listings on a small budget, or small businesses or BnBs. Limited service area at this price.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Standard</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$199</div>' +
            '                           <div class="bold red">$169</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">~20 quality photos. Best for 2-3 bedroom houses.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Premiere</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$269</div>' +
            '                           <div class="bold red">$199</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">~30-35 quality photos. Best for larger or premium properties.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Estate</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$349</div>' +
            '                           <div class="bold red">$249</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">50+ quality photos for special properties. Best for larger or premium properties with landscaping and interior decorating.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Virtual Tour Video</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$69</div>' +
            '                           <div class="bold red">$49</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">Add a professional 1.5-3 minute video slideshow featuring all the amazing photos of your property, titles with the agent contact info, and professional music.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Custom Flyer</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$49</div>' +
            '                           <div class="bold red">$39</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">Let us turn your new photos into an attractive, modern sales flyer. Delivered as a .pdf or .jpg file.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Custom Web Page</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class=" cancel">$69</div>' +
            '                           <div class="bold red">$49</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">We can create a custom web page (hometourphoto.com sub-page) that showcases your photos, video slideshows, maps, agent contact info, links and more!</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Bonus Regional Photos</div>' +
            '                       <div class="col-sm-2">INCLUDED</div>' +
            '                       <div class="col-sm-8 last">Choose any photos from our library of local features and attractions for no additional cost.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Decor Prop Staging</div>' +
            '                       <div class="col-sm-2">INCLUDED</div>' +
            '                       <div class="col-sm-8 last">At your option, we can provide a few basic staging props (table setting, books, plants, decor objects) for a professional design touch.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Hand Processing</div>' +
            '                       <div class="col-sm-2">INCLUDED</div>' +
            '                       <div class="col-sm-8 last">Unlike many service providers that apply an automated "assembly line" processing to all of the photos, we analyze and adjust every image.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Custom Editing</div>' +
            '                       <div class="col-sm-2">Contact us</div>' +
            '                       <div class="col-sm-8 last">All of our editing is customized, but if you need some extra work such as removing unwanted objects or compositing a special sky, let us know. We will not create deceptive photos, but we can help make the most of what you have.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Multi-Format Photos</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">For your convenience, we provide the photos in two versions: full resolution, and smaller web/MLS-friendly sizes.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Fast Turn-around</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">Whenever possible, we strive for 24 hour or less turn-around. Busiest times may require a bit more.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Superior Service</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">We are a family run business and we take pride in our work. You will love our friendly service.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Flexible Billing Options</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">We accept checks, credit cards, PayPal, or business invoicing.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Extended Service Area</div>' +
            '                   <div class="col-sm-2">Contact us</div>' +
            '                   <div class="col-sm-8 last">We service most locations in Placer and Sacramento counties up to 40 miles radius from Auburn. There may be a small fee for out of the way or distant locations.</div>' +
            '               </div>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Twilight Hours</div>' +
            '                   <div class="col-sm-2">~$50</div>' +
            '                   <div class="col-sm-8 last">Based on availability - make your home stand out with a twilight glamour shot!</div>' +
            '               </div>' +

            '           </div>' +
            '       </div>' +

            '       <br>' +
            '       <div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/video_camera.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3>High-Definition Videography</h3>' +
            '               <div>Hand-edited live-action or slide-show videos for Real Estate presentation or of your special event.</div>' +
            '               <br>' +
            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Event Videography</div>' +
            '                   <div class="col-sm-2">$299-$999</div>' +
            '                   <div class="col-sm-8 last">Single or multiple camera coverage of your big event, whether it be a wedding, reunion, party, or meeting. Custom tailored packages available.</div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +

            '       <br>' +
            '       <div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/drone.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3>High-Definition Aerial Photography</h3>' +
            '               <div>Set yourself apart by adding amazing aerial photos or videos to your property listing!</div>' +
            '               <div>Note: by law, this service is not available in all areas, and is subject to weather and local terrain conditions.</div>' +
            '               <br>' +
            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Aerial Photos</div>' +
            '                   <div class="col-sm-2">$129</div>' +
            '                   <div class="col-sm-8 last">Add a real attention-grabbing touch! ~10 super-cool high-quality photos of your business or property from the air.</div>' +
            '               </div>' +
            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Aerial Video</div>' +
            '                   <div class="col-sm-2">$199</div>' +
            '                   <div class="col-sm-8 last">Add an attention-grabbing touch! Professional 1.5-3 minute (approx) high-definition, live-action video of your business or property. Includes custom title and end screen and background music.</div>' +
            '               </div>' +
            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Aerial Presentation Package</div>' +
            '                   <div class="col-sm-2">$299</div>' +
            '                   <div class="col-sm-8 last">Aerial photos, video, and a brief Virtual Tour video made from the stills.</div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +

            '       <br>' +
            '       <div class="row divider"></div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/web_page.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3 >Custom Web Pages</h3>' +
            '               <p>Not only are we professional photographers, we also design, develop, and deploy customized web pages. Whether it be for you business or your real estate listing, we can give you a custom web page at an incredible price. Property web page requires purchase of a photo package.</p>' +
            '               <br>' +
            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Online Property Flyer</div>' +
            '                       <div class="col-sm-2">$49</div>' +
            '                       <div class="col-sm-8 last">Add your own custom web site to your property listing! This is similar to what you would see on real estate sites like Zillow.com or Realtor.com but without the distracting ads and with your own unique web address! Includes interactive photo album, map, listing information, and agent contact information.</div>' +
            '               </div>' +
            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Business Website</div>' +
            '                       <div class="col-sm-2">from $149</div>' +
            '                       <div class="col-sm-8 last">We have many years experience in professional web development for Fortune 500 companies. Let us bring that expertise to your small business! Contact us to discuss your project. We can get you a simple, but attractive, page published on the world wide web for as little as $149!</div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '   <br><br><h4 style="text-align: center">Discounts available for combination packages or frequent business customers.</h4>' +

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
}).apply(PRICING_VIEW);

