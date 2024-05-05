gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

gsap.from('.CTA', {
    y: '-50%', duration: 1.5, repeat: -1
})

/* ---- Animation chapitre 1 ----- */



/* ---- Animation chapitre 2 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre2',  
    }
})
.fromTo('.personnage2', 
{ y: "0vh", opacity: 0.1},
{ y: "110vh", opacity: 2, rotation: 360, duration: 3} 
);

/* ---- Animation chapitre 3 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre3',
    }
})
.fromTo('.personnage3', 
{x: "-20vw"},
{x: "43vw", duration: 4, ease: "none"}
)
.fromTo('.monstre_chapitre_3',
{y: "0vh", opacity: 0},
{y: "20vh", opacity:1, duration: 1}
)


/* ---- Animation chapitre 4 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre4',
    }
})
.fromTo('.personnage4',
{x: "-20vw"},
{x: "30vw", duration: 3}
)
.fromTo('.monstre_chapitre_4',
{opacity: 0},
{opacity: 1}
)

/* ---- Animation chapitre 5 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre5',
    }
})
.fromTo('.personnage5',
{x: "-20vw"},
{x: "20vw", duration: 5, ease: "none"}
)
.fromTo('.monstre_chapitre_5',
{x: "110vw"},
{x: 200, duration: 0.25, ease: "none"}
)

/* ---- Animation chapitre 6 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre6',
    }
})
.fromTo('.personnage6',
{opacity: 0},
{opacity: 1, duration: 5}
)

/* ---- Animation chapitre 7 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre7',
    }
})
.fromTo('.personnage7',
{x: "-50vw"},
{x: "0vw", duration: 8, ease: "none"}
)
.fromTo('.yeux',
{opacity: 0},
{opacity: 1}
)

/* ---- Animation chapitre 9 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: true,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 50%',
        trigger: '#chapitre9',
    }
})
.fromTo('.personnage9',
{x: "-20vw"},
{x: "5vw", duration: 2}
)