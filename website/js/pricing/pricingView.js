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
            '           <h1 class="col-md-12">2020 Pricing</h1>' +
            '       </div>' +
            '       <div class="row">' +
            '           <img class="icon col-lg-1 col-md-1 col-sm-12" src="./resources/images/camera.svg">' +
            '           <div class="col-lg-1 col-md-1 col-sm-12"></div>' +
            '           <div class="col-lg-10 col-md-10 col-sm-12">' +
            '               <h3>Professional Home Photography</h3>' +
            '               <div>It is our goal to provide the best quality service and the best prices. We try to keep the pricing as simple and straightforward as possible, but we also want to be able to provide a professional product for all budgets so you don\'t have to pay for what you don\'t need. The vast majority of our clients pay ONLY the standard package price with no costly add-ons.</div>' +
            '               <br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Standard</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class="bold red">$189</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">20-30 quality photos. Appropriate for smaller homes. May also include basic aerial photos!</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Premiere</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class="bold red">$249</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">35-45 quality photos. Best for larger or premium properties. May also include basic aerial photos!</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Estate</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class="bold red">$299</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">50+ quality photos. Best for larger or premium properties. May also include basic aerial photos!</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Aerial Photos</div>' +
            '                       <div class="col-sm-2 bold red">INCLUDED</div>' +
            '                       <div class="col-sm-8 last"><b>If conditions and georgraphy allow, we can include ~3 aerial (drone) photos with every package - for FREE! ($100 value)</b></div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Virtual Tour Video</div>' +
            '                       <div class="col-sm-2">' +
/*            '                           <div class=" cancel">$69</div>' + */
            '                           <div class="">$50</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">Add a professional 1.5-3 minute video-file slideshow featuring all the amazing photos of your property, titles with or without agent contact info, and professional music.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Custom Flyer</div>' +
            '                       <div class="col-sm-2">' +
            '                           <div class="">$50</div>' +
            '                       </div>' +
            '                       <div class="col-sm-8 last">Let us turn your new photos into an attractive, modern sales flyer. Includes QR Code icon to link to your listing! Delivered as a .pdf or .jpg file. Price includes flyer based on our existing or similar template. QR Code link to online listing included.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Bonus Regional Photos</div>' +
            '                       <div class="col-sm-2">INCLUDED</div>' +
            '                       <div class="col-sm-8 last">Choose any photos from our library of local features and attractions for no additional cost.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Hand Processing</div>' +
            '                       <div class="col-sm-2">INCLUDED</div>' +
            '                       <div class="col-sm-8 last"><b>Unlike many RE photo providers that use an automated "assembly line" processing, we analyze and adjust every image for exposure, color, composition, and perspective correction.</b></div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Multi-Resolution Photos</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">For your convenience, we provide the photos in two versions: full resolution, and smaller web/MLS-friendly sizes.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Fast Turn-around</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">Whenever possible, we strive for Noon-the-next-day or 24 hour turn-around. Electronic delivery via web browser so you can download your photos as soon as they are ready.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Superior Service</div>' +
            '                   <div class="col-sm-2">INCLUDED</div>' +
            '                   <div class="col-sm-8 last">We are a family run business and we take pride in our work. You will love our friendly service. Your job is our job - we want you to be successful. We will do what it takes to be your PARTNER rather than just your contractor.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">No Standard Travel Fees</div>' +
            '                   <div class="col-sm-2 red bold">NONE/RARE</div>' +
            '                   <div class="col-sm-8 last">We service most reasonably accessible locations in Placer and Nevada counties. <b>There is NO TRAVEL CHARGE for properties within 30 miles of Colfax.</b> $1.00/mi (one-way) beyond that. Many competitors charge a travel fee for ALL jobs.</div>' +
            '               </div><br>' +

            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Twilight Hours / Weekends</div>' +
            '                   <div class="col-sm-2">$0-$50</div>' +
            '                   <div class="col-sm-8 last">Based on availability - make your home stand out with a twilight glamour shot! Frequent customers often get this service for FREE when available.</div>' +
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
            '               <div>Video services available for a variety of projects. Prices custom tailored.</div>' +
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
            '               <div class="red">Note: by law, this service is not available in all areas, and is subject to weather and local terrain conditions. In some situations we may only be able to fly below the tree tops.</div>' +
            '               <br>' +
            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Aerial Photos - Basic</div>' +
            '                   <div class="col-sm-2">FREE</div>' +
            '                   <div class="col-sm-8 last">Add a real attention-grabbing touch! ~3 super-cool high-quality photos of your business or property from the air. $100 for aerial photos only. Regular customers may get the basic package FREE included with any photo package where applicable.</div>' +
            '               </div><br>' +
            '               <div class="row priceTable">' +
            '                   <div class="col-sm-2 bold">Aerial Photos</div>' +
            '                   <div class="col-sm-2">$149-$199</div>' +
            '                   <div class="col-sm-8 last">A more comprehensive portfolio of aerial shots. 10+ super-cool high-quality photos of your business or property from the air. $99 as add-on to photo package.</div>' +
            '               </div><br>' +
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
            '                       <div class="col-sm-2">$50</div>' +
            '                       <div class="col-sm-8 last">Add your own custom web site to your property listing! This is similar to what you would see on real estate sites like Zillow.com or Realtor.com but without the distracting ads and with your own unique web address (sub-page off of HomeTourPhoto.com) Includes interactive photo album, map, listing information, and agent contact information.</div>' +
            '               </div><br>' +
            '               <div class="row priceTable">' +
            '                       <div class="col-sm-2 bold">Business Website</div>' +
            '                       <div class="col-sm-2">from $149 & up</div>' +
            '                       <div class="col-sm-8 last">We have many years experience in professional web development for Fortune 500 companies. Let us bring that expertise to your small business! Contact us to discuss your project. We can get you a simple, but attractive, page published on the world wide web for as little as $149! (plus domain name and hosting fees from third party providers)</div>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '   <br><br><h4 class="red" style="text-align: center">Discounts available for new agents, referrals, and frequent business customers.</h4>' +

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

