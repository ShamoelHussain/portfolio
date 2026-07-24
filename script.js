const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });
}

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const year = document.getElementById('year');
if (year) {
    year.textContent = new Date().getFullYear();
}
