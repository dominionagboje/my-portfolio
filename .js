<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dominion | Portfolio</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <nav>
        <div class="logo">Domi<span>.</span></div>

        <ul id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <button id="menuBtn">☰</button>
    </nav>


    <section id="home" class="hero">

        <div class="hero-content">

            <p class="welcome">WELCOME TO MY WEBSITE</p>

            <h1>
                Hey, I'm
                <span>Dominion</span>
            </h1>

            <p>
                I'm a creative developer who enjoys coding,
                designing websites and building cool digital projects.
            </p>

            <div class="buttons">

                <a href="#projects" class="btn primary">
                    Explore My Work
                </a>

                <a href="#contact" class="btn secondary">
                    Contact Me
                </a>

            </div>

        </div>

    </section>


    <section id="about">

        <h2>About <span>Me</span></h2>

        <div class="card">

            <h3>Who Am I?</h3>

            <p>
                I'm Dominion. I enjoy technology, coding,
                creativity and learning how to build things
                with computers.
            </p>

        </div>

    </section>


    <section id="skills">

        <h2>My <span>Skills</span></h2>

        <div class="cards">

            <div class="card">
                <div class="icon">💻</div>
                <h3>Web Development</h3>
                <p>Building websites with HTML, CSS and JavaScript.</p>
            </div>

            <div class="card">
                <div class="icon">🎨</div>
                <h3>Design</h3>
                <p>Creating attractive and modern interfaces.</p>
            </div>

            <div class="card">
                <div class="icon">🎮</div>
                <h3>Game Development</h3>
                <p>Experimenting with games and interactive projects.</p>
            </div>

        </div>

    </section>


    <section id="projects">

        <h2>My <span>Projects</span></h2>

        <div class="cards">

            <div class="card project">
                <h3>School Website</h3>
                <p>
                    A modern school website project.
                </p>
                <button class="projectBtn">
                    View Project
                </button>
            </div>

            <div class="card project">
                <h3>Game Project</h3>
                <p>
                    An interactive game I'm working on.
                </p>
                <button class="projectBtn">
                    View Project
                </button>
            </div>

            <div class="card project">
                <h3>Future Project</h3>
                <p>
                    Something exciting coming soon.
                </p>
                <button class="projectBtn">
                    View Project
                </button>
            </div>

        </div>

    </section>


    <section id="contact">

        <h2>Contact <span>Me</span></h2>

        <div class="contact-box">

            <h3>Let's Build Something 🔥</h3>

            <p>
                Want to talk about a project?
                Send me a message.
            </p>

            <form id="contactForm">

                <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                >

                <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                >

                <textarea
                    id="message"
                    placeholder="Your message"
                    required
                ></textarea>

                <button type="submit" class="btn primary">
                    Send Message
                </button>

            </form>

            <p id="formMessage"></p>

        </div>

    </section>


    <footer>
        <p>© 2026 Dominion. All Rights Reserved.</p>
    </footer>


    <script src="script.js"></script>
    ```javascript
// ==========================
// MOBILE MENU
// ==========================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ==========================
// CONTACT FORM
// ==========================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const formMessage =
                document.getElementById(
                    "formMessage"
                );

            formMessage.textContent =
                `Thanks ${name}! 🚀 Your message has been received.`;

            formMessage.style.color =
                "#67e8f9";

            contactForm.reset();

        }
    );

}
const profile = document.getElementById("myProfile");
const circle = document.getElementById("profileCircle");
const glow = document.getElementById("profileGlow");

if (profile) {

    let angle = 0;

    function animateProfile() {

        angle += 0.03;

        const y = Math.sin(angle) * 5;

        circle.style.transform =
            `translateY(${y}px)`;

        requestAnimationFrame(animateProfile);
    }

    animateProfile();


    profile.addEventListener("mouseenter", () => {

        circle.style.transform =
            "scale(1.08)";

        circle.style.boxShadow =
            "0 0 45px rgba(103,232,249,0.75)";

        glow.style.opacity = "0.7";
        glow.style.transform = "scale(1.15)";
    });


    profile.addEventListener("mouseleave", () => {

        circle.style.boxShadow =
            "0 0 30px rgba(103,232,249,0.45)";

        glow.style.opacity = "0.45";
        glow.style.transform = "scale(1)";
    });

}

</body>
</html>
