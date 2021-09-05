const tl=gsap.timeline({defaults:{ease: "power1.out"}});


tl.to(".intro-logo",{y:"0%", duration:1});
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.1});
tl.to(".intro",{y:"-100%",duration:1},"-=1" );
tl.fromTo("nav",{opacity:0},{opacity:1,duration:0.5});
tl.fromTo(".hero__text",{opacity:0},{opacity:1,duration:0.5},"-=0.5");
tl.fromTo(".waves",{opacity:0},{opacity:1,duration:0.5},"-=0.65");