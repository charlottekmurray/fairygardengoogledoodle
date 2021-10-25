gsap.to('#higher-leg', {
  rotate: -13,
x: -.4,
  y: .5,
  repeat: -1,
  yoyo: true,
  duration: 1.2,
  ease:  "power1.inOut",
});

gsap.to('#lower-leg', {
  rotate: -10,
x: -.4,
  y: .5,
  repeat: -1,
  yoyo: true,
  duration: 1.2,
  ease:  "power1.inOut",
});

gsap.to('.left-wing', {
  rotate: 15,
x: 5,
y: -3,
  repeat: -1,
  yoyo: true,
  duration: .8
});

gsap.to('.right-wing', {
  rotate: -15,
x: -7,
y: 3,
  repeat: -1,
  yoyo: true,
  duration: .8
});

gsap.from('.mushroom', {
  scaleY: 0,
  scaleX: .3,
ease: "elastic.out( 1, 0.5)",
  transformOrigin:"center bottom",
  duration: 2
});

gsap.to('.mushroom', {
  delay: .8,
  scaleY: 1.1,
  scaleX: .9,
// ease: "elastic.out( 1, 0.5)",
  transformOrigin:"center bottom",
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  repeatDuration: 1
            });

gsap.from('#Gvine', {
  delay: 1,
 opacity: 0,
  duration: 1.5,
});

gsap.from('#Lvine', {
  delay: 1,
 opacity: 0,
  duration: 1.5,
});

gsap.to('#windows',{
  fill: "#F1AF2D",
  delay: 3.7,
  repeat: -1,
  yoyo: true,
  repeatDelay: 4
})

gsap.from(".leavesR",
         {
  scale: 0,
delay: 2,
  transformOrigin:"center right",
  duration: 2,
})

gsap.from(".leavesL",
         {
  scale: 0,
 delay: 2,
  transformOrigin:"center left",
  duration: 2
})


gsap.to('.leavesL', {
  delay: 3,
  rotate: 20,
  repeat: -1,
  yoyo: true,
   ease:  "power1.inOut",
  transformOrigin:"center left",
  duration: .9
  
})

gsap.to('.leavesR', {
  delay: 3,
  rotate: 25,
  repeat: -1,
  yoyo: true,
   ease:  "power1.inOut",
  transformOrigin:"center right",
  duration: 1.5
  
})