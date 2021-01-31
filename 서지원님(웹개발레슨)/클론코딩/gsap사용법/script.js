// gsap.from('.header', {duration:2, y: -100, opacity:0, ease:'bounce'})
// gsap.from('.link', {duration:1, opacity:0, delay:1, stagger: 0.5})
// gsap.from('.main', {duration:1, opacity:0, delay:2.5})

const timeline = gsap.timeline()

timeline.from('.header', {duration:2, y: -100, opacity:0, ease:'bounce'})
        .from('.link', {duration:1, opacity:0, stagger: 0.5})
        .from('.main', {duration:1, opacity:0}, '<1.0')

const button = document.querySelector(".button")
button.addEventListener('click', function(){
    timeline.reverse()
})

gsap.to(".box1", {duration:2.5, x:500, rotation:360})
gsap.to(".box2", {duration:2.5, x:500, scale: 0.5})