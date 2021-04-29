$('.navBar').stickeyHeader({
  customNum:40
});

$('.flexslider').flexslider({
   animation: "fade",
   animationSpeed: 1000,
   slideshowSpeed: 7000,
   controlNav:false,
   prevText: "",
   nextText: "",

 });

 $('.animation').each(function(){
   var $el = $(this);
   $(window).scroll(function(){
     if(!($el.hasClass('animated')) && $el.onView()){
       $el.addClass($el.data('animation'))
       .addClass('animated')
       .css('animation-delay', $el.data('animation-delay') + "ms");
     }
   });
 });

      //Sandwich
      $('.sandwich-container').sandwich({
        menu: $('.menu-container'),
        closeOnClick: true
      });


      //team carousel
      $('#team-carousel').owlCarousel({
        margin:5,
        nav:false,
        dots:false,
        loop: true,
        responsiveClass:true,
        responsive:{
          0: {
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          }

        }
      });

    /*  $('#gallery').owlCarousel({
        margin:1,
        nav:true,
        navigation:true,
        dots:false,
        loop:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:4
          }
        }
      })
      .magnificPopup({
        delegate: '.link-plus',
        type: "image",
        gallery:{
          enabled: true
        },
        removalDelay:620,
        image: {
          cursor: 'mfp-zoom-out-cur',
          titleSrc: function(item){
            var title = $(item.el[0]).data('title');
            return '<small>'+ title +'</small>';
          } ,
          verticalFit: true
        }
      }); */

      $('.prev-gallery').click(function(){
        $('#gallery .owl-prev').click();
      });
      $('.next-gallery').click(function(){
        $('#gallery .owl-next').click();
      });

      $('#testimonials').owlCarousel({
        margin:30,
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        nav:false,
        dots:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          992:{
            items:3
          }
        },
        center:true
      });
      

      //portfoli-owlCarousel
      $('#portfolio-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          },
          1200:{
            items:4
          }
        }
      });

      $('#quote-image-carousel').owlCarousel({
        margin:60,
        loop:true,
        nav:false,
        dots:false,
        center:true,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          992:{
            items:3
          }
        }
      });


      $('.slides').slide({
        oneOpen:true
      });

      $(window).scroll(function(){
        if($(window).scrollTop() > $('.toTop-show').offset().top){
          $('.toTop').addClass('active');
        }
        else{
          $('.toTop').removeClass('active');
        }
      });
