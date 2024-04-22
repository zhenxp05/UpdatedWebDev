document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.location.hash = targetSectionId;
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
