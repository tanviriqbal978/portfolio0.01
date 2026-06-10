/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight

        ) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if (

            link.getAttribute("href")
            === `#${current}`

        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});


/* =========================
   PROJECT CARD HOVER
========================= */

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-6px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0px)";

        }
    );

});


/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector(
".contact-form"
);

if (form) {

    form.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            const button =
            form.querySelector(
                "button"
            );

            const oldText =
            button.innerText;

            button.innerText =
            "Message Sent ✓";

            button.disabled = true;

            setTimeout(() => {

                button.innerText =
                oldText;

                button.disabled = false;

            }, 2500);

        }
    );

}


/* =========================
   ACTIVE LINK STYLE
========================= */

const style =
document.createElement("style");

style.innerHTML = `

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
