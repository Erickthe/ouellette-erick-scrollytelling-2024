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
{ y: -10},
{ y: 1200, rotation: 360, duration: 3} 
)

let timeline_un = gsap.timeline()
.fromTo('.personnage3', 
{x: -200},
{x: 1000, duration: 6, ease: "none"}
)
.fromTo('.monstre_chapitre_3',
{y: 0, opacity: 0},
{y: 200, opacity:1, duration: 2}
)

let timeline_deux = gsap.timeline()
.fromTo('.personnage4',
{x: -200},
{x: 600, duration: 3}
)
.fromTo('.monstre_chapitre_4',
{opacity: 0},
{opacity: 1}
)

let timeline_trois = gsap.timeline()
.fromTo('.personnage5',
{x: -175},
{x: 500, duration: 5, ease: "none"}
)
.fromTo('.monstre_chapitre_5',
{x: 1180},
{x: 200, duration: 0.25, ease: "none"}
)

let timeline_quatre = gsap.timeline()
.fromTo('.personnage6',
{opacity: 0},
{opacity: 1, duration: 5}
)


let timeline_cinq = gsap.timeline()
.fromTo('.personnage7',
{x: -1500},
{x: 75, duration: 8, ease: "none"}
)
.fromTo('.yeux',
{opacity: 0},
{opacity: 1}
)

let timeline_six = gsap.timeline()
.fromTo('.personnage9',
{x: -1500},
{x: 0}
)