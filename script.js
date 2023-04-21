function locomotiveJs() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });




  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

locomotiveJs()  // Call function for locomotive js




var over = document.querySelector("#overlay")
var scrol = document.querySelector("#scrol")
over.addEventListener("mouseenter", function () {
  scrol.style.scale = 1

})
over.addEventListener("mouseleave", function () {
  scrol.style.scale = 0
})
overlay.addEventListener("mousemove", function (dets) {
  scrol.style.left = `${dets.x - 45}px`
  scrol.style.top = `${dets.y - 50}px`
})



$('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });


gsap.from("#page2 h1", {
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page2 h1",
    start: "top 95%",
    // markers: true,
    scroller: "#main"
  },
  onStart: function () {
    $('#page2 h1').textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#page2 h2", {
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page2 h2",
    start: "-140 99%",
    // markers: true,
    scroller: "#main"
  },
  onStart: function () {
    $('#page2 h2').textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#page3 h1", {
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page3 h1",
    start: "top 67%",
    // markers: true,
    scroller: "#main"
  },
  onStart: function () {
    $('#page3 h1').textillate({ in: { effect: 'fadeInUp' } });
  }
})



// gsap.from("#page3 h2", {
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: "#page3 h2",
//     start: "10 68%",
//     markers: true,
//     scroller: "#main"
//   },
//   onStart: function () {
//     $('#page3 h2').textillate({ in: { effect: 'fadeInUp' } });
//   }
// })

gsap.to("#page2 img", {
  rotate: 8,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2 img",
    start: "top 70%",
    // markers:true,
    scrub: true,
  }
})

gsap.to("#nav", {
  background: "linear-gradient(#ffffffd9,#ffffff9d,#ffffff00)",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#nav",
    start: "top -112%",
    // end:"top -35%",
    // markers: true,
    scrub: true,

  }
})

gsap.to("svg", {
  top: "4%",
  scale: 1.4,
  scrollTrigger: {
    scroller: "#main",
    trigger: "svg",
    start: "top 35%",
    end: "top -45%",
    // markers: true,
    scrub: true,
  }
})

gsap.to("svg", {
  fill: "#111",

  scrollTrigger: {
    scroller: "#main",
    trigger: "svg",
    start: "top -68%",
    end: "top -60%",
    // markers: true,
    scrub: true,
  }
})


gsap.to("#nav h3", {
  color: "#111",

  scrollTrigger: {
    scroller: "#main",
    trigger: "#nav",
    start: "top -110%",
    // end:"top -35%",
    // markers: true,
    scrub: true,
  }
})

gsap.to("#nav", {
  background: "linear-gradient(#00000065,#00000051,#00000007)",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#nav",
    start: "top -357%",
    // end:"top -35%",
    // markers: true,
    scrub: true,
  }
})
gsap.to("#nav h3", {
  color: "#fff",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#nav",
    start: "top -357%",
    // end:"top -35%",
    // markers: true,
    scrub: true,
  }
})


gsap.to("svg", {
  fill: "#fff",

  scrollTrigger: {
    scroller: "#main",
    trigger: "svg",
    start: "top -315%",
    end: "top -60%",
    // markers: true,
    scrub: true,
  }
})

var page3 = document.querySelector("#page3")
var img = document.querySelector("#page3 #img-div")
page3.addEventListener("mousemove", function () {
  img.style.scale = 1
})
page3.addEventListener("mouseleave", function () {
  img.style.scale = 0
})


document.querySelector("#page3").addEventListener("mousemove", function (dets) {
  document.querySelector("#page3 #img-div").style.left = `${dets.x}px`
  document.querySelector("#page3 #img-div").style.top = `${dets.y - 30}px`
})


document.querySelector("#page4").addEventListener("mousemove", function (dets) {
  document.querySelector("#page4>img").style.left = dets.x + "px"
  document.querySelector("#page4>img").style.top = dets.y + "px"
  document.querySelector("#page4>img").style.scale = 1

 
  document.querySelector("#page4>button").style.left = (dets.x + 50) + "px"
  document.querySelector("#page4>button").style.top = (dets.y + 200) + "px"
  document.querySelector("#page4>button").style.scale = 1
 
 
})
document.querySelector("#page4").addEventListener("mouseleave", function (dets) {
  document.querySelector("#page4>img").style.left = dets.x + "px"
  document.querySelector("#page4>img").style.top = dets.y + "px"
  document.querySelector("#page4>img").style.scale = 0
  document.querySelector("#page4>button").style.left = (dets.x + 50) + "px"
  document.querySelector("#page4>button").style.top = (dets.y + 200) + "px"
  document.querySelector("#page4>button").style.scale = 0
})

var elem = document.querySelectorAll(".elem")
elem.forEach(function(e){
  var a = e.getAttribute("data-img")
  e.addEventListener("mouseenter",function(){
      document.querySelector("#page4>img").setAttribute("src",a)
  })
})




gsap.to("#page6",{
  scrollTrigger:{
    trigger:"#page6",
    pin:true,
    start:"top 0%",
    end:"top 100%",
    scroller:"#main",
    // markers:true,
    scrub:true
  }
})



gsap.to("#img2",{
  y:-500,
  rotate:-2,
  pin:true,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6 #img2",
    start:"top 75%",
    end:"top 60%",
    // markers:true,
    scrub:2,
  }
})



var page7 = document.querySelector("#page7")
var img = document.querySelector("#page7 #img-div1")
page7.addEventListener("mousemove", function () {
  img.style.scale = 1
})
page7.addEventListener("mouseleave", function () {
  img.style.scale = 0
})


document.querySelector("#page7").addEventListener("mousemove", function (dets) {
  document.querySelector("#page7 #img-div1").style.left = `${dets.x}px`
  document.querySelector("#page7 #img-div1").style.top = `${dets.y}px`
})

var page9 = document.querySelector("#page9")
var images= document.querySelector("#page9 #scale-img .images")
var button= document.querySelector("#page9 #scale-img .images button")
page9.addEventListener("mousemove",function(){
  button.style.scale=1

})
page9.addEventListener("mouseleave",function(){
  button.style.scale=0

})
document.querySelector("#page9 #scale-img .images button").addEventListener("mousemove", function (dets) {
  document.querySelector("#page9 #scale-img .images button").style.left = `${dets.x-50}px`
  document.querySelector("#page9 #scale-img .images button").style.top = `${dets.y+50}px`
})