$(function () {
   
    //========dropmenu scroll===========//
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 350) {
            $(".header-part").addClass("bg-scroll");
        }
        else {
            $(".header-part").removeClass("bg-scroll");
        }
    });

    // back to top buton
    $(".back-to-top").click(function(){
        $("html, body").animate({scrollTop :0}, 500);
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
    if (scroll > 400) {
        $(".back-to-top").show(500);
    }
    else {
        $(".back-to-top").hide(500);
    }
});
//========dropmenu start===========//
    $(".dropmenuActive").click(function () {
        $(".dropmenu").slideToggle(500);
    });

//========dropmenu end===========//

//========bars manu start===========//

    $(".header-part-collapse").click(function () {
        $(".menu-part").slideToggle(500);
    });

    //========bars manu end===========//

    //========bars dropmenu start===========//

    $(".header-part-collapse").click(function () {
        $(".dropmenu").hide(500);
    });

       //========bars dropmenu end===========//

    //achivement start
    $('.counter').counterUp({
        time: 5000,
    });

    // achivement end

    // ======================

    // $(".hide-button").click(function (){
    //     $(".box").hide();
    // });

    // $(".show-button").click(function (){
    //     $(".box").show();
    // });

    // =============================//

    // $(".toggle-button").click(function (){
    //     $(".box").toggle(500);
    // });


// =============================//

});

// venobox start
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

new VenoBox({
    selector: '.my-video-links',
});
// venobox end

// event start
(() => {
    // Specify the deadline date
    const deadlineDate = new Date('December 31, 2023 00:00:00').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();
// event end

// wow js start
new WOW().init();
// wow js end


// slider start
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,

    slidesPerView: "auto",
    
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

    freeMode: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      loop: true,

       effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
// slider end
 
