    // animation main section h2

    let h2 = document.querySelectorAll('h2');
    window.addEventListener('load', ()=>{
        const TL = gsap.timeline({paused:true});
        TL
        .staggerFrom(h2, 3, {transform: "scale(0)", ease: "power2.out"}, '-=2')
         
        TL.play();
    
    })