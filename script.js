gsap.registerPlugin(ScrollTrigger);

// ✅ Fix refresh bug: set initial position of #pro
gsap.set("#pro", { top: "15%", left: "50%" });

// ================= FIRST ANIMATION =================
// Moves the image inside section .two
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",        // section that controls animation
    start: "top 95%",       // when section enters viewport
    end: "top 30%",         // when section almost reaches top
    scrub: 1.5,             // smooth scrolling
    markers: true           // for debugging (remove in production)
  }
});

// Animation from starting point to bottom-left
tl1.to("#pro", {
  top: "120%",              // move downward
  left: "5%",               // move to left side
  ease: "power1.inOut"      // smooth easing
});

// ================= SECOND ANIMATION =================
// Continues movement inside section .three
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",      // section that controls animation
    start: "top 95%",       // when .three enters
    end: "top 20%",         // adjust for slower/faster animation
    scrub: 1.5,
    markers: true
  }
});

// Animation continues + scaling down
tl2.to("#pro", {
  top: "210%",              // move further down
  left: "56%",              // move to center horizontally
  scale: 0.52,               // ✅ make smaller (0.7 = 70% of original size)
  ease: "power1.inOut"
});