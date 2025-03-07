// $(document).ready(function () {
//     var $win = $(window);
  
//     $win.scroll(function () {
//       if ($win.scrollTop() > 0) {
//         $("#nav .container").addClass("scrolltop");
//       } else {
//         $("#nav .container").removeClass("scrolltop");
//       }
//     });
//   });
  
//   document.addEventListener("DOMContentLoaded", function () {
//     autohide = document.querySelector(".navbar");
  
//     navbar_height = document.querySelector(".navbar").offsetHeight;
  
//     if (autohide) {
//       var last_scroll_top = 0;
//       window.addEventListener("scroll", function () {
//         let scroll_top = window.scrollY;
//         if (scroll_top < last_scroll_top) {
//           autohide.classList.remove("scrolled-down");
//           autohide.classList.add("scrolled-up");
//         } else if (scroll_top < 600) {
//         } else {
//           autohide.classList.remove("scrolled-up");
//           autohide.classList.add("scrolled-down");
//         }
//         last_scroll_top = scroll_top;
//       });
//       // window.addEventListener
//     }
//     // if
//   });
//   // DOMContentLoaded  end

// const header = gsap.timeline({});

// header.fromTo('.desc h1', {x: -500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.2}, 'first')
// .fromTo('.desc p', {x: -500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.2}, 'first')
// .fromTo('.hr', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1.5}, 'second')
// .fromTo('.staff', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1.5}, 'second')
// .fromTo('.can', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1.5}, 'second')
// .fromTo('.rect', {y: 100, display: 'none'}, {y: 0, display: 'block', duration: 1}, 'third')
// .fromTo('.desc a', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1}, 'third')
// .fromTo('nav', {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, 'third');

// var timedelay = 1;

// function delayCheck() {
//     if(timedelay == 30) {
//         gsap.timeline().fromTo('.box-1', {y: 0}, {y: 100, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-1', {y: 100}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
//         .fromTo('.box-2', {y: 0}, {y: 80, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-2', {y: 80}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
//         .fromTo('.box-3', {y: 0}, {y: 150, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-3', {y: 150}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
//         .fromTo('.box-4', {y: 0}, {y: 100, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-4', {y: 100}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
//         .fromTo('.box-5', {y: 0}, {y: 100, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-5', {y: 100}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
//         .fromTo('.box-6', {y: 0}, {y: 180, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-6', {y: 180}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second')
//         .fromTo('.box-7', {y: 0}, {y: 120, ease: Linear.easeNone}, 'first')
//         .fromTo('.box-7', {y: 120}, {y: 0, ease: Linear.easeNone, delay: 0.2}, 'second');
//         timedelay = 28;
//     } 
//     timedelay = timedelay+1;
// }

// $(window).mousemove(function() {
//     timedelay = 1;
//     clearInterval(_delay);
//     _delay = setInterval(delayCheck, 1000);
// });

// _delay = setInterval(delayCheck, 1000);

$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 0) {
      $("#nav .container-lg").addClass("scrolltop");
    } else {
      $("#nav .container-lg").removeClass("scrolltop");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector("#nav .navbar");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector("#nav .navbar").offsetHeight;

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else if (scroll_top < 600) {
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end

document.querySelector('.first-button').addEventListener('click', function () {

  document.querySelector('.animated-icon1').classList.toggle('open');
});

const loopImage = gsap.timeline({repeat: -1});
const header = gsap.timeline();

loopImage
  .fromTo(
    ".hr-img",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "first"
  )
  .fromTo(
    ".hr-text",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "first"
  )
  .fromTo(
    ".staff-img",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "second"
  )
  .fromTo(
    ".staff-text",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "second"
  )
  .to(
    ".hr-img",
    { opacity: 0, display: 'none', duration: 0.5},
    "second"
  )
  .to(
    ".hr-text",
    { opacity: 0, display: 'none', duration: 0.5},
    "second"
  )
  .fromTo(
    ".can-img",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "third"
  )
  .fromTo(
    ".can-text",
    { opacity: 0, display: 'none'},
    { opacity: 1, display: 'block', duration: 3},
    "third"
  )
  .to(
    ".staff-img",
    { opacity: 0, display: 'none', duration: 0.5},
    "third"
  )
  .to(
    ".staff-text",
    { opacity: 0, display: 'none', duration: 0.5},
    "third"
  )
  .to(
    ".can-img",
    { opacity: 0, display: 'none', duration: 0.5},
    "fourth"
  )
  .to(
    ".can-text",
    { opacity: 0, display: 'none', duration: 0.5},
    "fourth"
  );

if(window.matchMedia("(min-width: 992px)").matches) {
  header
    .fromTo(
      ".desc h1",
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 },
      "first"
    )
    .fromTo(
      ".desc p",
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 },
      "first"
    )
    .fromTo(
      ".employee-img",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: 1.5 },
      "second"
    )
    .fromTo(
      ".title",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: 1.5 },
      "second"
    )
    .fromTo(
      ".rect",
      { y: 1000, display: "none" },
      { y: 0, display: "block", duration: 1 },
      "third"
    )
    .fromTo(
      ".desc a",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: 1 },
      "third"
    )
    .fromTo("nav", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "third");
}

$(window).on("resize", resize);

resize();

function resize() {
  if($('body').width() >= 320 && $('body').width() < 576) {
    loopImage.play(true);
    $('.staff-text').css('display', 'none');
    $('.can-text').css('display', 'none');
    $('.rect').css('display', 'none');
    $('.employee-img').css('display', 'none');
    header.kill();
  } else {
    loopImage.pause();
    $('.rect').css('display', 'block');
  }
}