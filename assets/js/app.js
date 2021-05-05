    // animation main section h2
        // animations mes nouveaux amis

    let h2 = document.querySelectorAll('h2');
    let aproposSpans = document.querySelector('span');
    window.addEventListener('load', ()=>{
        const TL = gsap.timeline({paused:true});
        TL
        .from(h2, 5, {transform: "scale(2)", ease: "power2.out"})
        .from(aproposSpans, 5, {transform: "scale(2)", ease: "power2.out"})
        gsap.to(aproposSpans, {duration: 2, text: "CSS3", ease: "none"});
         
        TL.play();
    
    })

    
   