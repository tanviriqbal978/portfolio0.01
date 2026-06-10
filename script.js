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
   ACTIVE NAV LINK
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
            window.scrollY < sectionTop + sectionHeight

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
   CONTACT FORM
========================= */

const form =
document.querySelector(".contact-form");

if (form) {

    form.addEventListener(
        "submit",
        e => {

            e.preventDefault();

            const btn =
            form.querySelector("button");

            const oldText =
            btn.innerText;

            btn.innerText =
            "Message Sent ✓";

            btn.disabled = true;

            setTimeout(() => {

                btn.innerText =
                oldText;

                btn.disabled = false;

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
