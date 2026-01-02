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
    const navItems = document.querySelectorAll("#navlinks p")

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
    
    /* Typing Settings */
    const roles = [
        "Web Developer",
        "Front-End Developer",
        "Back-End Learner"
    ];

    let laptopOn = false;
    let roleIndex = 0;
    let charIndex = 0;
    let typing = true;

    if(isMobile) {
        laptop.classList.add("on");
        title.textContent = "I'm Justine";
        subtitle.textContent = "Web Developer";
        laptopOn = true;
    }

    function typeOnceMobile(text){
        let i = 0;
        subtitle.textContent = "";

        function type() {
            if(i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, 120);
            }
        }

        type();
    }

    function typeCycle() {
        const current = roles[roleIndex];

        if (typing) {

            if (charIndex < current.length) {
                subtitle.textContent += current.charAt(charIndex);
                charIndex++;
                setTimeout(typeCycle, 90);
            } else {
                typing = false;
                setTimeout(typeCycle, 1400);
            }
        } else {

            if(charIndex > 0){
                subtitle.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeCycle, 50);
            } else {
                typing = true;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeCycle, 400);
            }
        }
    }

    laptop.addEventListener("click", () => {
        if (laptopOn || isMobile) return;
        laptopOn = true;

        laptop.classList.add("on");

        setTimeout(() =>{
            title.textContent = "I'm Justine";
        }, 1500);

        setTimeout(() =>{
            subtitle.textContent = "";

            if (isMobile) {
                typeOnceMobile("Web Developer");
                return;
            }

            roleIndex = 0;
            charIndex = 0;
            typing = true;
            typeCycle();

        }, 2200);
    });

});
