gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});

gsap.from('.progress-bar', {
  y: '-100%',
  duration: 1,
  ease: 'linear',
  scrollTrigger: {
    trigger: '.list',
    markers: true,
    // start the animation when the top of the box reaches 75% of the viewport height.
    start: 'top 50%',
    // end the animation when the top of the box reaches 25% of the viewport height.
    end: 'bottom 25%',
    scrub: true,
  },
});
