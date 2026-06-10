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
   SIMPLE REVEAL
========================= */

const revealItems =
document.querySelectorAll(

".hero,\
.social-section,\
.section-card,\
.stats-section,\
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

revealItems.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

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

button.innerText =
"Message Sent ✓";

setTimeout(()=>{

button.innerText =
"Send Message";

},2500);

});

}


/* =========================
   REVEAL STYLES
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:
translateY(20px);

transition:
all .6s ease;

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

background:#2F2F2F;

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

`);
