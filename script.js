function init(){


    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
init()

gsap.to(".page2 video",{
    width:"100%",
    // duration:3,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        scrub:1,
        pin:true
    }
})


gsap.to(".page2 ",{
  backgroundColor: "#B488F1",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start: "top 1%",
        end: "top 0%",
        scrub:true
        
          }
})


gsap.to(".page5 h2",{
  y:750,
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      start: "top 60%",
      scrub:true
  }
})

gsap.to(".page4 h2",{
  y:740,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 40%",
      // markers:true,
      scrub:true
  }
})



gsap.to(".brandname svg",{
   y:-100,
   stagger:0.5,
   delay:1,
   repeat:-1,
})
