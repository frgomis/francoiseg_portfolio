    // 1- on recupère "toggle-btn"
    const menuBtn = document.querySelector(".toggle-btn");
    console.log(menuBtn);
    // 2- on écoute le clique sur la div.toggle-btn
    menuBtn.addEventListener("click", function(){
        document.getElementById("sidebar").classList.toggle("active");
    })

    //Animation icone Hamburger
    const burger=document.querySelectorAll('.toggle-btn');

    burger.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("hello");

            btn.classList.toggle('active');
        })
    })