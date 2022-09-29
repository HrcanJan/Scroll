// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0)
        linksContainer.getElementsByClassName.height = `${linksHeight}px`;
    else
        linksContainer.style.height = 0;
})

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeigh = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeigh)
        navbar.classList.add('fixed-nav');
    else
        navbar.classList.remove('fixed-nav');

    if(scrollHeight > 500)
        topLink.classList.add('show-link')
    else
        topLink.classList.remove('show-link')
})

// ********** smooth scroll ************

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href');
        const element = document.querySelector(id);

        // calculate the heights
        const navHeigh = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeigh;
        
        if(!fixedNav)
            position -= navHeigh;
        if(navHeigh > 82)
            position += containerHeight;

        window.scrollTo({
            left: 0,
            top: position,
        })

        linksContainer.style.height = 0;
    })
})