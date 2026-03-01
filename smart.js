/* ===================== SMART.JS — Portfolio Scripts ===================== */

// ---- Custom Cursor ----
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});


// ---- Header scroll effect ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// ---- Mobile menu ----
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close navbar on link click
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

const activateNavLink = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};
window.addEventListener('scroll', activateNavLink);


// ---- Intersection Observer: Scroll Animations ----
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Fade up elements
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


// ---- Skill Cards Animation ----
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));


// ---- Stat Counter Animation ----
const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-num').forEach(num => {
                const target = parseInt(num.getAttribute('data-target'));
                animateCounter(num, 0, target, 1800);
            });
            countObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsRow = document.querySelector('.stats-row');
if (statsRow) countObserver.observe(statsRow);

function animateCounter(el, start, end, duration) {
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = easeOutQuart(progress);
        el.textContent = Math.floor(eased * (end - start) + start);
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}


// ---- Timeline Items Fade ----
const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
    timelineObserver.observe(item);
});


// ---- Project cards stagger ----
const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.35s, box-shadow 0.35s`;
    projectObserver.observe(card);
});


// ---- Contact Form ----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// removed hostname matching here.

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;

        // Loading state
        btn.innerHTML = '<span>Sending...</span> <i class="bx bx-loader-alt bx-spin"></i>';
        btn.disabled = true;

        fetch("https://formspree.io/f/mreavbog", {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(contactForm)
        })
        .then(response => response.json())
.then(data => {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
    console.log('Formspree response:', data);
    if (data.ok) {
        formSuccess.classList.add('show');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
    } else {
        alert(JSON.stringify(data.errors));
    }
})
        .catch(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            alert('Something went wrong. Please try again.');
        });
    });
}


// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ---- Add fade-up class to section headings and other elements ----
document.querySelectorAll('.section-heading, .section-sub, .about-content p, .contact-info p').forEach(el => {
    el.classList.add('fade-up');
    fadeObserver.observe(el);
});