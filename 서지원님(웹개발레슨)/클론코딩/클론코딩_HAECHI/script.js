
const timeline_1 = gsap.timeline({
    scrollTrigger:{
        trigger : '.about-labs',
        toggleActions: "restart none none none"
    }
})

const timeline_2 = gsap.timeline({
    scrollTrigger:{
        trigger : '.about-audit',
        start: "top center",
        scrub: true,
        markers : true,
        toggleActions: "restart none none none"
    }
})

timeline_1.from('.about-labs img', {opacity:0, duration: 1.5})
        .from('.about-labs .text-container', {y:300, opacity:0, duration: 1})

timeline_2.from('.about-audit img', {opacity:0, duration: 1.5})
        .from('.about-audit .text-container', {y:300, opacity:0, duration: 1})