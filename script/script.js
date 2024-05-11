gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

gsap.from('.CTA', {
    y: '-40vh', duration: 1.5, repeat: -1
})


let bodyindex = document.querySelector('body')

let scrollIndex;
window.addEventListener('scroll', () => {
    bodyindex.classList.add('is-scrolling');
    window.clearTimeout(scrollIndex);
    scrollIndex = setTimeout(removeClassIsScrolling, 100);
});

function removeClassIsScrolling() {
    bodyindex.classList.remove('is-scrolling');
}

/* ---- Animation chapitre 1 ----- */
gsap.set("#path", {drawSVG: "0% 0%"});

gsap.timeline({
    scrollTrigger: {
        markers: false,
        pin: true,
        scrub: true,
        start: '100% bottom',
        end: '100% top',
        trigger: '#chapitre1'
    }
})
.to("#path", {
    drawSVG: "0% 100%",
    duration: 1,
    ease: "power1,inOut"
})
.to("#lettre", {
    duration: 10,
    morphSVG: {
        shape: "#madame",
        shapeIndex: 1
    }
});

/* ---- Animation chapitre 2 ----- */

let timeline_un = gsap.timeline({
    scrollTrigger: {
        markers: false,
        pin: true,
        scrub: true,
        start: '100% bottom',
        end: '100% top',
        trigger: '#chapitre2',  
    }
})
.fromTo('.personnage2', 
{ y: "0vh", opacity: 0.1},
{ y: "100vh", opacity: 2, rotation: 360, duration: 3}
);

/* ---- Animation chapitre 3 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: false,
        pin: true,
        scrub: 0.5,
        start: '100% bottom',
        end: '10% top',
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
);


/* ---- Animation chapitre 4 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: false,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 90%',
        trigger: '#chapitre4',
    }
})
.fromTo('.personnage4',
{x: "-20vw"},
{x: "30vw", duration: 10}
)
.fromTo('.monstre_chapitre_4',
{opacity: 0},
{opacity: 1}
)

/* ---- Animation chapitre 5 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: false,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 90%',
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

gsap.fromTo('.personnage6',
{opacity: 0},
{opacity: 1, duration: 1, repeat: -1, repeatDelay: 2}
)

/* ---- Animation chapitre 7 ----- */

gsap.timeline({
    scrollTrigger: {
       markers: false,
        pin: true,
        scrub: true,
        start: 'top 0%',
        end: 'bottom 90%',
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

/* ---- Animation chapitre 8 ----- */
let speed = 200;

gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: true,
        start: 'top top',
        end: 'bottom top',
        trigger: '.chapitre8',
        
    }
})
.to('#milieu', 
{x: "130vw", duration: 5}
)



/* ---- Animation chapitre 9 ----- */

gsap.timeline({
    scrollTrigger: {
        markers: false,
        pin: true,
        start: 'top 0%',
        end: 'bottom 90%',
        toggleActions: 'play reverse complete reset',
        trigger: '#chapitre9',
    }
})
.fromTo('.personnage9',
{x: "-20vw"},
{x: "5vw", duration: 2}
)
