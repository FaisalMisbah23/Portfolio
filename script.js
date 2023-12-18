// function locomotive(){
//   gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
// el: document.querySelector("#main"),
// smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
// scrollTop(value) {
//   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, // we don't have to define a scrollLeft because we're only scrolling vertically.
// getBoundingClientRect() {
//   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// locomotive()

// for loader

var tl=gsap.timeline()

function time(){
  var a = 0
  setInterval(function(){
      a += Math.floor(Math.random()*20)
      if(a<100){
          document.querySelector("#loader h1").innerHTML = a+"%";
      }else{
          a = 100
          document.querySelector("#loader h1").innerHTML = a+"%";
      }
  },150)
}

tl.to("#loader h1",{
  delay:0.5,
  duration:1,
  onStart:time()
})
tl.to("#loader",{
  top:"-100vh",
  delay:0.4,
  duration:1.5,
}
)

tl.call(typeWriter);

var i = 0;
var h1Txt = 'Faisal Misbah';
var pTxt = `I'm a Frontend Developer`;
var speed = 100;



gsap.from(".home",{
  opcaity:0,
  scale:0,
 
scrollTrigger:{
  trigger:(".home"),
  scroller:"#main",
  // markers:true,
    scrub:2,
}
})



gsap.from(".portfolio",{
  opcaity:0,
  scale:0.7,

scrollTrigger:{
  trigger:(".portfolio"),
  scroller:"#main",
  // markers:true,
}
})






// gsap.from(".box p",{
//   y:100,
//   duration:0.5,
// scrollTrigger:
// {
//   trigger:".box p",
//   scroller:"#main",
//   top:"top 70%",
//   end:"top 30%",
//     scrub:2,
//     // markers:true
// }
// })


// gsap.registerPlugin(ScrollTrigger);

// let revealContainers = document.querySelectorAll("#about .box .image");
// revealContainers.forEach((container) => {
//   let image = container.querySelector("#about .box .image img");
//   // let tl = gsap.timeline({
//   //   scrollTrigger: {
//   //     trigger:"#about",
//   //     scroller:"#main",
//   //     top:"top 70%",
//   //     end:"top 30%",
//   //       scrub:2,
//   //     toggleActions: "restart none none reset"
//   //   }
//   // });

//   // tl.set(container, { autoAlpha: 1 });
//   gsap.from(container, 1.5, {
//     xPercent:-50,
//     ease: Power2.out,
//     scrollTrigger: {
//       trigger:"#about",
//       scroller:"#main",
//       top:"top 40%",
//       end:"top 20%",
//         scrub:2,
//       toggleActions: "restart none none reset"}
//   });
//   // gsap.from(image, 1.5, {
//   //   xPercent: 1000,
//   //   scale: 1.3,
//   //   delay: -1.5,
//   //   ease: Power2.out,
//   //   scrollTrigger: {
//   //     trigger:"#about",
//   //     scroller:"#main",
//   //     top:"top 70%",
//   //     end:"top 30%",
//   //       scrub:2,
//   //     toggleActions: "restart none none reset"}
//   // });
// });






document.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};



function cursorEffect(){
  var page1Content = document.querySelector(".home");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (dets) {
  gsap.to(cursor,{
      x:dets.x,
      y:dets.y
  })
});
page1Content.addEventListener('mouseenter',function(){
  gsap.to(cursor,{
      scale:1,
      opacity:1
  })
})
page1Content.addEventListener('mouseleave',function(){
  gsap.to(cursor,{
      scale:0,
      opacity:0
  })
})
}
cursorEffect();


function typeWriter() {
  if (i < h1Txt.length) {
    document.querySelector(".home h1 span").innerHTML += h1Txt.charAt(i);
  } else if (i - h1Txt.length < pTxt.length) {
    document.querySelector(".home p").innerHTML += pTxt.charAt(i - h1Txt.length);
  } else {
    // Animation completed
    return;
  }

  i++;
  setTimeout(typeWriter, speed);
}