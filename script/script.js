gsap.from('.CTA', {
    y: '-50%', duration: 1.5, repeat: -1
})

window.addEventListener("scroll", function()
{
    body.classList.add("is-scrolling");
    let timer = setTimeout(function () {
        body.classList.remove("is-scrolling");
    }, 100);
}
)

gsap.fromTo('.personnage2', 
{ y: "0vh"},
{ y: "110vh", rotation: 360, duration: 3} 
)

let timeline_un = gsap.timeline()
.fromTo('.personnage3', 
{x: "-20vw"},
{x: "43vw", duration: 4, ease: "none"}
)
.fromTo('.monstre_chapitre_3',
{y: "0vh", opacity: 0},
{y: "20vh", opacity:1, duration: 1}
)

let timeline_deux = gsap.timeline()
.fromTo('.personnage4',
{x: "-20vw"},
{x: "30vw", duration: 3}
)
.fromTo('.monstre_chapitre_4',
{opacity: 0},
{opacity: 1}
)

let timeline_trois = gsap.timeline()
.fromTo('.personnage5',
{x: "-20vw"},
{x: "20vw", duration: 5, ease: "none"}
)
.fromTo('.monstre_chapitre_5',
{x: "110vw"},
{x: 200, duration: 0.25, ease: "none"}
)

let timeline_quatre = gsap.timeline()
.fromTo('.personnage6',
{opacity: 0},
{opacity: 1, duration: 5}
)


let timeline_cinq = gsap.timeline()
.fromTo('.personnage7',
{x: "-50vw"},
{x: "0vw", duration: 8, ease: "none"}
)
.fromTo('.yeux',
{opacity: 0},
{opacity: 1}
)

let timeline_six = gsap.timeline()
.fromTo('.personnage9',
{x: "-20vw"},
{x: "5vw", duration: 2}
)