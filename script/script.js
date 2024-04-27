gsap.from('.CTA', {
    y: '-50%', duration: 1.5, repeat: -1
})

gsap.fromTo('.personnage2', 
{ y: -10},
{ y: 1000, rotation: 360, duration: 3} 
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