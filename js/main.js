// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =========================
// Scroll Animations
// =========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.2

});

document.querySelectorAll(

".fade-in,.slide-left,.slide-right,.scale"

).forEach(item=>{

    observer.observe(item);

});

const leadershipSection = document.querySelector("#leadership");
const eventsSection = document.querySelector("#events");

if (leadershipSection && eventsSection) {

    eventsSection.after(leadershipSection);

}