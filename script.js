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

function videoController() {
const video = document.getElementById('customVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="ri-pause-circle-line"></i>';
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="ri-play-circle-line"></i>';
    }
});

// Mute/Unmute functionality
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>';
});

}
videoController()

// alert("yet this is not responsive..")




Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



gsap.from(".page1 h1",{
 y:'300',
})

gsap.from(".page2 video",{
 y:'300',
})


gsap.to(".page2 video",{
    width:"100%",
    borderRadius:"0",
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

gsap.to(".brandname svg",{
  y:-250,
  stagger:0.5,
  delay:2,
  repeat:-1,
})


gsap.from(".page3 h1",{
y:500,
stagger:0.1,
    scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      start: "top 50%",
      end : "top 100%",
      // markers:true,
    }  
});


gsap.to(".page5 h2",{
  y:600,
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      start: "top 60%",
      scrub:true
  }
})

gsap.to(".page6 h2",{
  y:600,
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      start: "top 60%",
      scrub:true
  }
})

gsap.to(".page4 h2",{
  y:600,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 40%",
      // markers:true,
      scrub:true
  }
})

gsap.to(".page4 ",{
  backgroundColor: "#F3F3E9",
  duration: 1.5, // Duration of the transition (in seconds)
  ease: "power1.inOut", 
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start: "top -1%",
        end: "top -0%",
        scrub:true
        
          }
})

gsap.from(".page7 h1",{
  y:500,
  stagger:0.1,
      scrollTrigger:{
        trigger:".page7",
        scroller:".main",
        start: "top 50%",
        end : "top 100%",
        // markers:true,
      }  
  });
  
function page8anim(){
  
    // Function to animate the number from 0 to the final value
    function animateCount(element, endValue) {
      let currentNumber = 0;
      const duration = 2000; // Duration in milliseconds (2 seconds)
      const increment = endValue / (duration / 16); // Increment value per frame

      const countInterval = setInterval(() => {
          currentNumber += increment; // Increase the current number
          element.textContent = Math.round(currentNumber); // Update the displayed number

          // Add a "%" or "+" if it exists in the original text
          if (element.getAttribute('data-suffix')) {
              element.textContent += element.getAttribute('data-suffix');
          }

          if (currentNumber >= endValue) {
              clearInterval(countInterval); // Stop the animation when it reaches the final value
              element.textContent = endValue + (element.getAttribute('data-suffix') || ''); // Ensure the final number is correct
          }
      }, 16); // Update every 16 milliseconds (~60 frames per second)
  }

  // Get all h1 elements within the class .page8 .left
  const numberElements = document.querySelectorAll(".page8 .left h1");

  // GSAP animation
  gsap.from(".page8 .left h1", {
      scrollTrigger: {
          trigger: ".page8",
          scroller: ".main",
          start: "top 50%",
          end: "top 100%",
          // markers: true, // Use for debugging scroll positions
          onEnter: () => {
              // Loop through each h1 element and animate the numbers
              numberElements.forEach((element) => {
                  // Extract the number from the text (remove non-numeric characters like '%' and '+')
                  const endValue = parseInt(element.textContent.replace(/\D/g, ''));
                  const suffix = element.textContent.replace(/[0-9]/g, '').trim(); // Get non-numeric characters

                  // Store the suffix (like "%" or "+") in a data attribute to preserve it during animation
                  element.setAttribute('data-suffix', suffix);

                  // Call the animateCount function to start the animation
                  animateCount(element, endValue);
              });
          }
      }
  });

}

page8anim()


gsap.to(".page9",{
  y:-100,
  scale:0.98 ,
  borderRadius:"5%",
  scrollTrigger:{
      trigger:".page9",
      scroller:".main",
      start: "top -20%",
        end : "top -20%",
      // markers:true,
      scrub:1,  
  }
})




