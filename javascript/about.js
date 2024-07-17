//hamburger menu
const menuButton = document.querySelector('#menu-button');
const rootElement = document.documentElement;

menuButton.addEventListener('click', () => {
    const menuOpen = rootElement.toggleAttribute('menu-open');
    
    if (menuOpen) {
        disableScroll();
    } else {
        enableScroll();
    }
});

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

//link added to logo
const logo = document.querySelector('.left.image img')
logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/index.html';
});

//custom cursor
const customCursor = document.getElementById('custom-cursor');
const hoverSpaces = document.querySelectorAll('a');

const updateCursorPosition = (event) => {
    customCursor.style.top = `${event.clientY}px`;
    customCursor.style.left = `${event.clientX}px`;
};

window.addEventListener('mousemove', (event) => {
    updateCursorPosition(event);
});

hoverSpaces.forEach(space => {
    space.addEventListener('mouseenter', () => {
        customCursor.classList.add('zoom');
        space.style.color = 'var(--black)';
    });
    space.addEventListener('mouseleave', () => {
        customCursor.classList.remove('zoom');
        space.style.color = '';
    });
});