    // animation main section h2

    let h2 = document.querySelectorAll('h2');
    window.addEventListener('load', ()=>{
        const TL = gsap.timeline({paused:true});
        TL
        .staggerFrom(h2, 5, {transform: "scale(3)", ease: "power2.out"}, '-=9')
         
        TL.play();
    
    })