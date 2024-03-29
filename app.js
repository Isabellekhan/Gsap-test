const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.to(".slider", { y: "-100%", duration: 1.2 });
tl.to(".footer", { y: "0%", duration: 1.2 }, "-=1");
tl.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1 });
