document.addEventListener("DOMContentLoaded", () => {

    /* My nav animation*/
    let tl = gsap.timeline();

    tl.from("nav",{
        y: -100,
        duration: 0.8,
        opacity: 0,
        ease: "power2.out"
    });

    tl.from(".logo, .part2 p",{
        y: - 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,  /*Appear one after another */
        ease: "back.out(1.7)"
    });

    /* Laptop click ON */
    const laptop = document.getElementById("laptop");
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");

    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll("#navLinks p")

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        document.body.classList.toggle("nav-open");
    });

    navItems.forEach(items => {
        items.addEventListener("click", () =>{
            navLinks.classList.remove("active");
            document.body.classList.remove("nav-open");
        });
    });

    function isMobile() {
    return window.innerWidth <= 768;
}

    function typeOnce(text){
        let i = 0;
        subtitle.textContent = "";

        function type() {
            if(i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }

        type();
    }

    let laptopOn = false;

    if(isMobile()) {
        laptop.classList.add("on");
        title.textContent = "I'm Justine";
        laptopOn = true;
        typeOnce("Web Developer");
    }

    laptop.addEventListener("click", () => {
        if (laptopOn || isMobile()) return;
        laptopOn = true;

        laptop.classList.add("on");

        setTimeout(() => {
            title.textContent = "I'm Justine";
        }, 1500);

        setTimeout(() => {
            typeOnce("Web Developer");
        }, 2200);
    });

});
