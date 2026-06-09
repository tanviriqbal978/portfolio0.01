/* ==========================================
   TANVIR IQBAL PORTFOLIO
   SCRIPT.JS
========================================== */

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el => {
revealObserver.observe(el);
});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = +counter.dataset.target;

let current = 0;

const increment = target / 80;

const updateCounter = () => {

if(current < target){

current += increment;

counter.innerText = Math.ceil(current) + "+";

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

});

},

{
threshold:0.5
}

);

counters.forEach(counter=>{
counterObserver.observe(counter);
});


/* =========================
   HERO PARALLAX
========================= */

const hero = document.querySelector(".hero");
const pfp = document.querySelector(".pfp-wrapper");

if(hero && pfp){

hero.addEventListener("mousemove",(e)=>{

const rect = hero.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 10;
const rotateX = ((y / rect.height) - 0.5) * -10;

pfp.style.transform = `
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

hero.addEventListener("mouseleave",()=>{

pfp.style.transform = `
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

});

}


/* =========================
   PROJECT CARD HOVER
========================= */

const projects = document.querySelectorAll(".project-card");

projects.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 8;
const rotateX = ((y / rect.height) - 0.5) * -8;

card.style.transform = `
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = `
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

});

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

});

});


/* =========================
   FLOATING GRADIENTS
========================= */

const gradients = document.querySelectorAll(".gradient");

window.addEventListener("mousemove",(e)=>{

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

gradients.forEach((blob,index)=>{

const speed = (index + 1) * 20;

blob.style.transform = `
translate(
${(x - 0.5) * speed}px,
${(y - 0.5) * speed}px
)
`;

});

});


/* =========================
   HERO TITLE STAGGER
========================= */

window.addEventListener("load",()=>{

const titleLines =
document.querySelectorAll(".hero-title span");

titleLines.forEach((line,index)=>{

line.style.animationDelay =
`${index * 0.15}s`;

});

});


/* =========================
   ORBITAL ROTATION
========================= */

const orbital =
document.querySelector(".orbital");

if(orbital){

let rotation = 0;

function animateOrbital(){

rotation += 0.15;

orbital.style.transform =
`rotate(${rotation}deg)`;

requestAnimationFrame(
animateOrbital
);

}

animateOrbital();

}


/* =========================
   CUSTOM CURSOR GLOW
========================= */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

Object.assign(glow.style,{

position:"fixed",
width:"250px",
height:"250px",
borderRadius:"50%",
background:"rgba(255,255,255,.25)",
filter:"blur(70px)",
pointerEvents:"none",
zIndex:"9999",
transform:"translate(-50%, -50%)",
transition:"transform .05s linear"

});

window.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load",()=>{

document.body.style.opacity = "0";

setTimeout(()=>{

document.body.style.transition =
"opacity .8s ease";

document.body.style.opacity = "1";

},100);

});


/* =========================
   TICKER DUPLICATION
========================= */

const tickerTrack =
document.querySelector(".ticker-track");

if(tickerTrack){

tickerTrack.innerHTML +=
tickerTrack.innerHTML;

}


/* =========================
   CONSOLE EASTER EGG
========================= */

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━
Tanvir Mohammad Iqbal
Web3 Researcher
On-chain Builder
Content Creator
━━━━━━━━━━━━━━━━━━━━━━━
`);
