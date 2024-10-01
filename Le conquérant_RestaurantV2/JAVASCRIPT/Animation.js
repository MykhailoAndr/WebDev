/*------------------------Menu_icon------------------------*/
var menu = document.getElementById("menu");

menu.onclick = function () {
    menu.classList.toggle("openmenu");
}







/*------------------------Main_txt------------------------*/
gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' })
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 60%',
            end: 'top 40%',
            scrub: false,
            markers: false,
            toggleActions: 'play play reverse reverse'
        },
        scaleX: 0,
        y: -20,
        transformOrigin: 'top',
        stragger: 0.1,
        duration: .5
    })
})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)







/*------------------------Icon------------------------*/
gsap.to('.icon_anim', {
    positionX: 0,
    y: -10,
    stragger: 0.1,
    scrollTrigger: {
        trigger: '.icon_anim',
        start: '35% 65%',
        scrub: false,
        markers: false,
        end: '35% 50%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Other_txt------------------------*/
gsap.registerPlugin(ScrollTrigger)
const splitTypes2 = document.querySelectorAll('.reveal-type_other')

splitTypes2.forEach((words, i) => {
    const text2 = new SplitType(words, { types: 'words' })
    gsap.from(text2.words, {
        scrollTrigger: {
            trigger: words,
            start: '45% 60%',
            end: '45% 50%',
            scrub: false,
            markers: false,
            toggleActions: 'play play reverse reverse'
        },
        positionX: 0,
        y: -10,
        transformOrigin: 'top',
    })
})

const lenis2 = new Lenis()
lenis2.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis2.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)







/*------------------------ImagePreload------------------------*/
const images = 
document.querySelectorAll(".main__page3_block_2_imagegroup2, .main__page3_block_2_imagegroup1, .main__page1_block_2, .main__page5_block_0_imagegroup1, .main__page5_block_0_imagegroup2, .footer_page1_block0_imagegroup1, .main__page3_block_3_imagegroup7_in_1, .main__page4_block_2_imagegroup1, .main__page2_block_2, .main__page3_block_2");

const removeOverlay = overlay => {
	let tl = gsap.timeline();

	tl.to(overlay, {
        delay: .4,
		duration: 1.4,
		ease: "Power2.easeInOut",
		height: "0%"
	});
	return tl;
};

const scaleInImage = image => {
	let tl = gsap.timeline();

	tl.from(image, {
        delay: .4,
		duration: 1.4,
		scale: 1.4,
	});
	return tl;
};

images.forEach(image => {
  
	gsap.set(image, {
		visibility: "visible"
	});
  
	const overlay = image.querySelector(".buff_anim, .buff_anim1, .buff_anim2, .buff_anim5_1, .buff_anim5_2, .buff_anim6_1, .buff_anim7_in_1, .buff_anim8_1, .buff_anim2, .buff_anim3");
	const img = image.querySelector(".img_anim, .img_anim1, .img_anim2, .img_anim5_1, .img_anim5_2, .img_anim6_1, .img_anim7_in_1, .img_anim8_1, .img_anim2, .img_anim3");

	const masterTL = gsap.timeline({ paused: true });
	masterTL
    .add(removeOverlay(overlay))
    .add(scaleInImage(img), "-=1.4");
  

  let options = {
  } 
	const io = new IntersectionObserver((entries, options) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				masterTL.play();
			} 
		});
	}, options);

	io.observe(image);
});







/*------------------------Btn------------------------*/
gsap.to('.btn_anim', {
    positionX: 0,
    y: -5,
    stragger: 0.1,
    scrollTrigger: {
        trigger: '.btn_anim',
        start: '35% 75%',
        scrub: false,
        markers: false,
        end: '35% 60%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Btn2------------------------*/
gsap.to('.btn_anim2', {
    positionX: 0,
    y: -5,
    stragger: 0.1,
    scrollTrigger: {
        trigger: '.btn_anim2',
        start: '100% 85%',
        scrub: false,
        markers: false,
        end: '100% 70%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Image2------------------------*/
gsap.to('.main__page2_img', {
    scale: 1.03,
    duration: .8,
    scrollTrigger: {
        trigger: '.main__page2_img',
        start: '35% 80%',
        markers: false,   
        end: '35% 60%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Btn4------------------------*/
gsap.to('.btn_anim4', {
    positionX: 0,
    y: -5,
    stragger: 0.1,
    scrollTrigger: {
        trigger: '.btn_anim4',
        start: '100% 85%',
        scrub: false,
        markers: false,
        end: '100% 70%',
        toggleActions: 'play play reverse reverse'
    }
})






/*------------------------Image4------------------------*/
gsap.to('.main__page4_img', {
    scale: 1.015,
    duration: .8,
    scrollTrigger: {
        trigger: '.main__page4_img',
        start: '60% 80%',
        markers: false,   
        scrub:false,
        end: '60% 60%',
        toggleActions: 'play play reverse reverse'
    }
})






/*------------------------Image3------------------------*/
gsap.to('.buff_forZooming_3_2_2', {
    scale: 1.03,
    duration: .8,
    scrollTrigger: {
        trigger: '.buff_forZooming_3_2_2',
        start: '50% 80%',
        markers: false,    
        scrub:false,
        end: '50% 60%',
        toggleActions: 'play play reverse reverse'
    }
})

gsap.to('.buff_forZooming_3_2_1', {
    scale: 1.03,
    duration: .8,
    scrollTrigger: {
        trigger: '.buff_forZooming_3_2_1',
        start: '50% 80%',
        markers: false,    
        scrub:false,
        end: '50% 60%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Image5------------------------*/
gsap.to('.buff_forZooming_5_0_2', {
    scale: 1.03,
    duration: .8,
    scrollTrigger: {
        trigger: '.buff_forZooming_5_0_2',
        start: '50% 80%',
        markers: false,   
        scrub:false,
        end: '50% 60%',
        toggleActions: 'play play reverse reverse'
    }
})

gsap.to('.buff_forZooming_5_0_1', {
    scale: 1.03,
    duration: .8,
    scrollTrigger: {
        trigger: '.buff_forZooming_5_0_1',
        start: '50% 80%',
        markers: false,   
        scrub:false,
        end: '50% 60%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Image6------------------------*/
gsap.to('.buff_forZooming_6_0_1', {
    scale: 1.03,
    duration: .8,
    scrollTrigger: {
        trigger: '.buff_forZooming_6_0_1',
        start: '60% 70%',
        markers: false,    
        scrub:false,
        end: '60% 60%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Btn5------------------------*/
gsap.to('.btn_anim5', {
    positionX: 0,
    y: -5,
    stragger: 0.1,
    scrollTrigger: {
        trigger: '.btn_anim5',
        start: '50% 85%',
        scrub: false,
        markers: false,
        end: '50% 70%',
        toggleActions: 'play play reverse reverse'
    }
})







/*------------------------Buttons_preload2------------------------*/
gsap.set('.Two',{
    yPercent: +200,
    opacity: 0
})

const tmln = gsap.timeline({
    scrollTrigger:{
        start: '20% 80%',
        end: '+=1',
        scrub: 3,
        markers: false,
        once: true
    }
}) 

tmln
    .to('.Two',{
        opacity: 1,
        yPercent: 0     
    },"<")







/*------------------------Buttons_preload3------------------------*/
gsap.set('.three',{
    yPercent: +200,
    opacity: 0
})

const tmln2 = gsap.timeline({
    scrollTrigger:{
        start: '32% 80%',
        end: '+=1',
        scrub: 3,
        markers: false,
        once: true
    }
}) 

tmln2
    .to('.three',{
        opacity: 1,
        yPercent: 0     
    },"<")







/*------------------------Buttons_preload4------------------------*/
gsap.set('.four',{
    yPercent: +200,
    opacity: 0
})

const tmln3 = gsap.timeline({
    scrollTrigger:{
        start: '68% 80%',
        end: '+=1',
        scrub: 4,
        markers: false,
        once: true
    }
}) 

tmln3
    .to('.four',{
        opacity: 1,
        yPercent: 0     
    },"<")






/*------------------------Buttons_preload5------------------------*/
gsap.set('.five',{
    yPercent: +200,
    opacity: 0
})

const tmln4 = gsap.timeline({
    scrollTrigger:{
        start: '100% 45%',
        end: '+=1',
        scrub: 4,
        markers: false,
        once: true
    }
}) 

tmln4
    .to('.five',{
        opacity: 1,
        yPercent: 0     
    },"<")







/*------------------------Text_preload1------------------------*/
gsap.set('.txt_prl1',{
    yPercent: +200,
    opacity: 0
})

const timeline1 = gsap.timeline({
    scrollTrigger:{
        start: '47% 80%',
        end: '+=1',
        scrub: 4,
        markers: false,
        once: true
    }
}) 

timeline1
    .to('.txt_prl1',{
        yPercent: 0,
        opacity: 1   
    })