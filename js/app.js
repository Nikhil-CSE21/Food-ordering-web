$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:3,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:3,
         }
      },
      {
         breakpoint:576,
         settings:{
            slidesToShow:2,
         }
      },

      {
         breakpoint:300,
         settings:{
            slidesToShow:1
         }
      }


     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});