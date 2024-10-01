/*const tl  = gsap.timeLine({ paused: true});
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.Plugin.getRule("#hamburger span:before");

gsap.set(spanBefore, {background:"#000"});
gsap.set(".menu", {visibility:"hidden"});
gsap.set(".menu", {visibility:"hidden"});



function revealMenu(){
    revealMenuItems();
    const hamburger = document.getElementById("hamburger");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.onclick = function (e) {
        hamburger.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
}

revealMenu();

function revealMenuItems(){
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Ƶ";
    const end ="M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Ƶ";

    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

tl.to("hamburger", 1.25,{
    marginTop: "-5px",
    x: -40,
    y: 40,
    ease:power4,
});

tl.to("#hamburger span", 1,{
    background:"#e2e2dc",
    ease: power2,
},"<");

tl.to(
    spanBefore,
    1,
    {
        background: "e2e2dc",
        ease:power2,
    }, "<"
);

tl.to(".btn .btn-outline", 1.2, {
    x:-40,
    y:40,
    width:"140px",
    height:"140px",
    border:"1px solid #e2e2dc",
    ease:power4,
}, "<");

tl.to(path, 0.8,{
    attr:{
        d:start,
    },
    ease:Power2.easeIn,
}, "<").to(path, 0.8, {
    attr:{
        d:end,
    }, 
    ease:Power2.easeOut,
}, "-0.5");

tl.to(".menu", 1, {
    visibility: "visible"
}, "-=0.5");

tl.to("menu-item > a", 1,{
    top: 0,
    ease: "power3.out",
    stragger:{
        amount:0.5
    }
}, "-=1").reverse();
}

*/




/*
console.clear();

const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}
	
	init();
})();
*/




let side1 = document.querySelector(".side1");
let side2 = document.querySelector(".side2");
let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

console.log(side1, side2, overlay, open, close);

open.addEventListener("click", () => {
  overlay.style.transform = "translateX(0)";
  side2.style.transform = "translateX(0)";
  console.log("side1, side2")
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateX(110%)";
  side2.style.transform = "translateX(-110%)";
});

