
function Buy() {
var image= document.getElementById("image");
var buy = document.getElementById("buy");
image.addEventListener("mouseenter",function(){
    gsap.to(buy,{
        opacity:1,
        scale:1
    });
})
image.addEventListener("mouseleave",function(){
    gsap.to(buy,{
        opacity:0,
        scale:0
    })
})
image.addEventListener("mousemove",function(dets) {
    gsap.to(buy,{
        left:dets.x,
        top:dets.y
    })    
})
}
Buy();

function locomotiveAnimations(){



    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveAnimations();


function mainLoading(){

    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.3
    })
    gsap.from("#book",{
        y:100,
        opacity:0,
        delay:1,
        duration:0.5,
        stagger:0.3
    })
}
mainLoading();
    
function cursorAnimation(){
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        gsap.to('#cursor',{
        transform: 'translate(-50%,-50%) scale(1)',
        left:dets.x,
        top:dets.y
        })
    })
})
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){
        gsap.to('#cursor',{
        transform: 'translate(-50%,-50%) scale(0)',
        left:dets.x,
        top:dets.y
        })
    })
})
}
cursorAnimation();


function navbarAnimations(){
gsap.to('#nav-left svg',{
    transform:'translateY(-110%)',
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top -5%",
        end:"top 0%",
        scrub:true
    }
})

gsap.to('#nav-right #links',{
    transform:'translateY(-110%)',
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0%",
        end:"top -5%",
        // markers:true,
        scrub:true
    }
})
}
navbarAnimations()

function footerAnimations(){
gsap.from('#nav-left svg',{
    transform:'translateY(-110%)',
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 20%",
        end:"top 15%",
        // markers:true,
        scrub:true
    }
})

gsap.from("#page6 .contact svg path",{
    opacity:0,
    scale:1,
    transform:'rotateZ(10deg)',
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 20%",
        end:"top 1%",
        scrub:true,
    }
})
}
footerAnimations();
//swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        loop:true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        grabCursor:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
function pageTwoAnimations(){
gsap.from(".elem",{
    opacity:0,
    scale:0.9,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"bottom 20%",
        end:"bottom 10%",
    }
})
}
pageTwoAnimations();

function pageThreeAnimations(){
    gsap.from(".child",{
        y:100,
        opacity:0,
        duration:0.8,
        stagger:0.5,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 20%",
            end:"top 10%",
        }
    })
}
pageThreeAnimations();


var menu = document.getElementById("menu");
var colmenu = document.querySelector(".menu");
var navleft=document.getElementById("nav-left");
var navright=document.querySelectorAll(".link");
var l1=document.getElementById("link1");
var l2=document.getElementById("link2");
var l3=document.getElementById("link3");
var shop = document.getElementById("shop");

menu.addEventListener("click",function(){
    menu.classList.remove("ri-menu-line");
    menu.classList.add("ri-close-line");

    if(colmenu.style.height==="0vh"){
        colmenu.style.height="100vh";
        // colmenu.style.backgroundColor="black";
        navleft.style.color="white";
        l1.style.color="white";
        l2.style.color="white";
        l3.style.color="white";
        shop.style.backgroundColor="black";
        shop.style.color="#f7f7f7";
        gsap.from(".menu .biglinks a",{
            y:100,
            opacity:0,
            delay:0.5,
            duration:0.2,
            stagger:0.05
        })
        
    }
    else{
        colmenu.style.height="0vh"
        // colmenu.style.backgroundColor="transparent"
        navleft.style.color="black";
        l1.style.color="black";
        l2.style.color="black";
        l3.style.color="black";
        shop.style.backgroundColor="#f7f7f7";
        shop.style.color="black";
        menu.classList.remove("ri-close-line");
        menu.classList.add("ri-menu-line");
    }
})