const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const toggles = document.querySelectorAll('.module .toggle');
const moduleContents = document.querySelectorAll('.module-content');
const form = document.querySelector('#lead-form');
const feedback = document.querySelector('.form-feedback');
const yearEl = document.getElementById('year');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('open');
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target instanceof HTMLAnchorElement && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

toggles.forEach((toggle, index) => {
    const content = moduleContents[index];
    if (!content) {
        return;
    }

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
            content.style.maxHeight = '0px';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

if (form && feedback) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');

        feedback.textContent = `${name || 'Takk'}! Du får kursoversikten på e-post innen kort tid.`;
        form.reset();
    });
}
