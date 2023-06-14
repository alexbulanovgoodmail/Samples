const sections = document.querySelectorAll('section');
const likns = document.querySelectorAll('nav a');

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      likns.forEach((link) => {
        link.classList.remove('active');
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};
