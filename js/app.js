const nav = document.querySelector("nav");
const openNavbar = document.querySelector(".open-nav");
const subscribeBtn = document.querySelector('.SubscribeBtn');
const mailInput= document.querySelector('.SubscribeMail');
const topAnimationElements =document.querySelectorAll('[data-animation="top"]')
const leftAnimationElements =document.querySelectorAll('[data-animation="left"]')
openNavbar.addEventListener("change",()=>{
    nav.classList.toggle("open-navigation");
}) 

topAnimationElements.forEach((element)=>{
    gsap.fromTo(element,
    {
        y:200,
        opacity:0
    },{
        scrollTrigger:element,
        y:0,
        opacity:1,
        duration: 2,
        
    })
})

leftAnimationElements.forEach((element)=>{
    gsap.fromTo(element,
    {
        x:-2000,
        opacity:0
    },{
        scrollTrigger:element,
        x:0,
        opacity:1,
        duration: 2,
        
    })
})