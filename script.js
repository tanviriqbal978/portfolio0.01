/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
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
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.offsetHeight;

if(

window.scrollY >= sectionTop &&
window.scrollY <
sectionTop + sectionHeight

){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active-link"
);

if(

link.getAttribute("href")
=== `#${current}`

){

link.classList.add(
"active-link"
);

}

});

});


/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector(
".contact-form"
);

if(form){

form.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const button =
form.querySelector("button");

const originalText =
button.innerText;

button.innerText =
"Message Sent ✓";

button.disabled = true;

setTimeout(()=>{

button.innerText =
originalText;

button.disabled = false;

},2500);

});

}


/* =========================
   PROJECT CARD HOVER
========================= */

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.transform =
"translateY(-6px)";

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0px)";

});

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(

".hero,\
.social-section,\
.section-card,\
footer"

);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:.08
}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/* =========================
   DYNAMIC STYLES
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:
translateY(30px);

transition:
all .7s ease;

}

.show{

opacity:1;

transform:
translateY(0);

}

.active-link{

position:relative;

}

.active-link::after{

content:"";

position:absolute;

left:0;
bottom:-6px;

width:100%;
height:2px;

background:#D9D9D9;

border-radius:999px;

}

`;

document.head.appendChild(style);


/* =========================
   CONSOLE SIGNATURE
========================= */

console.log(`

Tanvir Mohammad Iqbal

Web3 Researcher
On-chain Builder
Content Creator
Graphic Designer

100+ Protocol Campaigns
40+ Blockchain Networks
3+ Years In Web3

`);
