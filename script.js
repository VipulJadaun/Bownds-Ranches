function locomotiveJs(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
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
overlay.addEventListener("mousemove",function(dets){
    scrol.style.left = `${dets.x - 45}px`
    scrol.style.top = `${dets.y - 50}px`
})


gsap.to("#page2 img",{
    rotate:8,

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        start:"top 70%",
        // markers:true,
        scrub:true,
    }
})

gsap.to("#nav",{
  background: "linear-gradient(#ffffffd9,#ffffff9d,#ffffff00)",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#nav",
    start:"top -112%",
    // end:"top -35%",
    markers:true,
    scrub:true,

  }
})

gsap.to("svg",{
  top:"4%",
  scale:1.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:"svg",
    start:"top 35%",
    end:"top -45%",
    markers:true,
    scrub:true,
  }
})

gsap.to("svg",{
  fill:"#111",

  scrollTrigger:{
    scroller:"#main",
    trigger:"svg",
    start:"top -68%",
    end:"top -60%",
    markers:true,
    scrub:true,
  }
})


gsap.to("#nav h3",{
  color:"#111",
 
  scrollTrigger:{
    scroller:"#main",
    trigger:"#nav",
    start:"top -110%",
    // end:"top -35%",
    markers:true,
    scrub:true,
  }
})

gsap.to("#nav",{
  background: "linear-gradient(#00000065,#00000051,#00000007)",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#nav",
    start:"top -357%",
    // end:"top -35%",
    markers:true,
    scrub:true,
  }
})
gsap.to("#nav h3",{
  color:"#fff",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#nav",
    start:"top -357%",
    // end:"top -35%",
    markers:true,
    scrub:true,
  }
})


gsap.to("svg",{
  fill:"#fff",

  scrollTrigger:{
    scroller:"#main",
    trigger:"svg",
    start:"top -315%",
    end:"top -60%",
    markers:true,
    scrub:true,
  }
})