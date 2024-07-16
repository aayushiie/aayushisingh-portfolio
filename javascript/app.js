//hamburger menu
const menuButton = document.querySelector('#menu-button');
const rootElement = document.documentElement;

menuButton.addEventListener('click', () => {
    rootElement.toggleAttribute('menu-open');
});


//link added to logo
const logo = document.querySelector('.left.image img')
logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/layout/index.html';
});


//custom cursor
const customCursor = document.getElementById('custom-cursor');
const hoverSpaces = document.querySelectorAll('.left, li, a, .text-body, .header, .link-1');

const updateCursorPosition = (event) => {
    customCursor.style.top = `${event.clientY}px`;
    customCursor.style.left = `${event.clientX}px`
}

// window.addEventListener('mousemove', (event) => {
//     updateCursorPosition(event)

//     if(hoverSpace.matches(':hover')){
//         customCursor.classList.add('zoom') 
//     } else{
//         customCursor.classList.remove('zoom')
//     }
// })

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