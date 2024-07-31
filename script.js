lucide.createIcons();

gsap.fromTo(
  ".card",
  {
    scale: 0
  },
  {
    scale: 1,
    stagger: 0.06,
    ease: "elastic.out(1, 0.8)",
    delay: 0.5
  }
);

// Existing card animation code...

// Title animation
gsap.to("#title", {
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
  repeatDelay: 1
});