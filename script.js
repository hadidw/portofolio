let bg = document.getElementById('bg1');
let rock = document.getElementById('rock');
let girl = document.getElementById('girl');
let birds = document.getElementById('birds');
let title = document.getElementById('main-title');
let btn = document.getElementById('button');
let nav = document.querySelector('nav');
let nama = document.getElementById('title-name');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    birds.style.left = value*0.75+'px';
    bg.style.top = value*0.7+'px';
    title.style.marginRight=value*1+'px';
    btn.style.marginTop=value*0.2+'px';
    nav.style.top = value * 0.7 +'px';
})


// function textScroll(){
//     const controller = new ScrollMagic.Controller();
//     const timeline = new TimelineMax();
//     timeline.to('#love-one', 3,{y:500})
//     new ScrollMagic.Scene({
//         duration: '100%',
//         triggerElement:'.second-section',
//         triggerHook:1
//     })
//     .setTween(timeline)
//     .addIndicators()
//     .setPin('.third-section')
//     .addTo(controller);
// }

// textScroll()

// const controller = new ScrollMagic.Controller();
// const timeline = new TimelineMax();

// timeline
//     .to('#title-name', 3,{y:300},'-=3')

// let scene = new ScrollMagic.Scene({
//     triggerElement:'.second-section',
//     duration: '100%',
//     triggerHook:0
// }) 
//     .addIndicators()
//     .setTween(timeline)
//     .setPin('.second-section')
//     .addTo(controller)

function thirdScroll(){
    const controller = new ScrollMagic.Controller();
    const timeline = new TimelineMax();
    timeline
        .to('#love-one',1,{x:100})
        .to('#love-two',1,{x:-100},'-=1')
    new ScrollMagic.Scene({
        duration: '5%',
        triggerElement:'.fifth-section',
        triggerHook:0
    })
    .setTween(timeline)
    .setPin('.fifth-section')
    .addTo(controller);
}

thirdScroll()

let copyBtn = document.getElementById('copyBtn');
let copyEmail = document.getElementById('copyEmail');

copyBtn.onclick = function(){
    navigator.clipboard.writeText(copyEmail.innerHTML);
    copyBtn.innerHTML = "Copied!";
    setTimeout(function(){
        copyBtn.innerHTML = "Click to Copy";
    }, 2000);
}

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
    });
}
navSlide();
    