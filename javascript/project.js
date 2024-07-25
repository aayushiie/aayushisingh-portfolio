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
const hoverSpaces = document.querySelectorAll('a, .container');

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

//pre-page loader
const loaderContainer = document.querySelector('.loader-container')
const pageContent = document.querySelector('#page-content')

window.addEventListener('load', () => {
    loaderContainer.classList.add('hidden')
    pageContent.classList.add('visible')
})

//links
const writing = document.querySelector('.card-1')
writing.addEventListener('click', (event) => {
    const targetPath = '/layout/writing.html';
    window.location.href = targetPath;
});

const design = document.querySelector('.card-2')
design.addEventListener('click', (event) => {
    window.location.href = '/layout/program.html';
});

const program = document.querySelector('.card-3')
program.addEventListener('click', (event) => {
    window.location.href = '/layout/design.html';
});

