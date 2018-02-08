$(document).ready(function(){


   

    // Products 
    var owl = $("#products_list");

    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
        ],
        lazyLoad : true,
        autoPlay : true,
        pagination: false,
        navigation: true

    });


    // Clients 
    var owl = $("#client_logos");

    owl.owlCarousel({

        itemsCustom: [
            [0, 2],
            [450, 3],
            [600, 3],
            [700, 4],
            [1000, 5],
            [1200, 5],
            [1400, 5],
            [1600, 6]
        ],
        lazyLoad : true,
        autoPlay : true,
        pagination: false,
        navigation: true

    });

    /*
   *   Nicescroll 
   **/

    jQuery("body").niceScroll({
    cursorcolor:"#6D2746",
    cursorborder:"0px",
    cursorwidth :"8px",
    zindex:"9999"
  });

});