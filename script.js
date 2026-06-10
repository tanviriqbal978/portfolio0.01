/* ==================================
   TANVIR IQBAL PORTFOLIO
   SCRIPT.JS
================================== */

/* -----------------------
   SMOOTH SCROLL
----------------------- */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
        document.querySelector(
            link.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});


/* -----------------------
   ACTIVE NAV LINK
----------------------- */

const sections =
document.querySelectorAll(
"section[id]"
);

const navLinks =
document.querySelectorAll(
".navbar nav a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(section => {

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

    navLinks.forEach(link => {

        link.classList.remove(
        "active-link"
        );

        if(
        link.getAttribute("href") ===
        `#${current}`
        ){

            link.classList.add(
            "active-link"
            );

        }

    });

});


/* -----------------------
   REVEAL ON SCROLL
----------------------- */

const revealElements =
document.querySelectorAll(
".section-card,.project-card,.tool-card,.mini-stat"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "revealed"
            );

        }

    });

},

{
threshold:.1
}

);

revealElements.forEach(el=>{

    el.classList.add(
    "hidden-reveal"
    );

    revealObserver.observe(el);

});


/* -----------------------
   CONTACT FORM
----------------------- */

const form =
document.querySelector(
".contact-form"
);

if(form){

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const button =
    form.querySelector(
    "button"
    );

    button.innerText =
    "Message Ready ✓";

    setTimeout(()=>{

        button.innerText =
        "Send Message";

    },2500);

});

}


/* -----------------------
   TICKER DUPLICATE
----------------------- */

const ticker =
document.querySelector(
".ticker-track"
);

if(ticker){

ticker.innerHTML +=
ticker.innerHTML;

}


/* -----------------------
   CURRENT YEAR
----------------------- */

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Tanvir Mohammad Iqbal`;

}


/* -----------------------
   CSS HELPERS
----------------------- */

const style =
document.createElement(
"style"
);

style.innerHTML = `

.hidden-reveal{

opacity:0;

transform:
translateY(30px);

transition:
all .6s ease;

}

.revealed{

opacity:1;

transform:
translateY(0);

}

.active-link{

font-weight:700;

position:relative;

}

.active-link::after{

content:'';

position:absolute;

left:0;
bottom:-6px;

width:100%;
height:2px;

background:#111;

}

`;

document.head.appendChild(
style
);


/* -----------------------
   CONSOLE SIGNATURE
----------------------- */

console.log(`

━━━━━━━━━━━━━━━━━━━━━━

Tanvir Mohammad Iqbal

Web3 Researcher
On-chain Builder
Content Creator
Graphic Designer

100+ Protocol Campaigns
40+ Blockchain Networks
Active Since 2022

━━━━━━━━━━━━━━━━━━━━━━

`);
