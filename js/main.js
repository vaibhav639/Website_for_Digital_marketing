//  Header Scroll 

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }
}

// owl carousel

// $(".owl-Carousel").owlCarousel({
//     items:4,
//     loop:true,
//     nav:false,
//     autoplay:true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 2
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 6
//         }
//     }
// });