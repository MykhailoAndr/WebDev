gsap.set('.header__panel_background',{
    opacity: 0
})

const tl = gsap.timeline({
    scrollTrigger:{
        start: 'top+=200',
        end: '+=1',
        toggleActions: 'play none none none',
        scrub: 2,
        markers: false
    }
})

tl
    .to('.header__panel',{
        padding: 0
    })
    .to('.header__panel_background',{
        opacity: 1
    })   
    .to('.panel_anim_logo',{
        scale: .6
    })