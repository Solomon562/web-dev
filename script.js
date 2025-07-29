const faders = document.querySelectorAll('.fade');

const appearOnScroll = new 
IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            observer.unobserve(entry.target);
        }
    });

}, {
        threshold: 0.1,
    });

    faders.forEach(fadeEl => {
        appearOnScroll.observe(fadeEl);
    });


    const text = "I'm Lamku, a Web Developer";
    let index = 0;

    function type() {
        
        document.getElementById("typing").innerText = text.slice(0, ++index);
        if (index < text.length) setTimeout(type, 100);
    }

    window.onload = type;


    function toggleMenu() {
        document.getElementById("navLinks").classList.toggle("active")
    }

    


