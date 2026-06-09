/* ==========================================
   TANVIR IQBAL PORTFOLIO
   SCRIPT.JS
========================================== */

/* -----------------------------
   HERO TITLE REVEAL
----------------------------- */

window.addEventListener("load", () => {

  const titleLines =
    document.querySelectorAll(".hero-title span");

  titleLines.forEach((line, index) => {

    line.style.opacity = "0";
    line.style.transform = "translateY(80px)";

    setTimeout(() => {

      line.style.transition =
        "all 0.8s cubic-bezier(.22,.61,.36,1)";

      line.style.opacity = "1";
      line.style.transform =
        "translateY(0px)";

    }, index * 150);

  });

});


/* -----------------------------
   SCROLL REVEAL
----------------------------- */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".about-card,.projects-header,.project-card,.stat-card,.contact-card"
).forEach(el=>{

el.classList.add("hidden");
observer.observe(el);

});


/* -----------------------------
   COUNTER ANIMATION
----------------------------- */

const statNumbers =
document.querySelectorAll(".stat-card h2");

const statObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const el = entry.target;

const text =
el.textContent;

if(text.includes("+")){

const target =
parseInt(text);

let current = 0;

const step =
target / 60;

function update(){

current += step;

if(current < target){

el.textContent =
Math.floor(current) + "+";

requestAnimationFrame(update);

}else{

el.textContent =
target + "+";

}

}

update();

}

statObserver.unobserve(el);

});

},{
threshold:0.5
});

statNumbers.forEach(item=>{
statObserver.observe(item);
});


/* -----------------------------
   HERO IMAGE PARALLAX
----------------------------- */

const hero =
document.querySelector(".hero");

const image =
document.querySelector(".hero-image");

if(hero && image){

hero.addEventListener("mousemove",(e)=>{

const rect =
hero.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*10;

const rotateX =
((y / rect.height)-0.5)*-10;

image.style.transform = `
scale(1.05)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;

});

hero.addEventListener("mouseleave",()=>{

image.style.transform =
"scale(1)";

});

}


/* -----------------------------
   PROJECT HOVER EFFECT
----------------------------- */

document
.querySelectorAll(".project-card")
.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x/rect.width)-0.5)*8;

const rotateX =
((y/rect.height)-0.5)*-8;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0px)";

});

});


/* -----------------------------
   CURSOR GLOW
----------------------------- */

const glow =
document.createElement("div");

glow.classList.add(
"cursor-glow"
);

document.body.appendChild(glow);

Object.assign(
glow.style,
{
position:"fixed",
width:"220px",
height:"220px",
borderRadius:"50%",
background:
"rgba(255,255,255,.25)",
filter:"blur(80px)",
pointerEvents:"none",
zIndex:"9999",
transform:
"translate(-50%,-50%)"
}
);

window.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);


/* -----------------------------
   TICKER DUPLICATE
----------------------------- */

const ticker =
document.querySelector(
".ticker-track"
);

if(ticker){

ticker.innerHTML +=
ticker.innerHTML;

}


/* -----------------------------
   SMOOTH SCROLL
----------------------------- */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* -----------------------------
   ADD CSS FOR REVEAL
----------------------------- */

const style =
document.createElement("style");

style.innerHTML = `

.hidden{
opacity:0;
transform:translateY(60px);
transition:
all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

`;

document.head.appendChild(style);


/* -----------------------------
   CONSOLE SIGNATURE
----------------------------- */

console.log(`

━━━━━━━━━━━━━━━━━━━━━━━━━━

Tanvir Mohammad Iqbal

Web3 Researcher
On-chain Builder
Content Creator

100+ Protocol Campaigns
40+ Blockchain Networks
3+ Years in Web3

━━━━━━━━━━━━━━━━━━━━━━━━━━


