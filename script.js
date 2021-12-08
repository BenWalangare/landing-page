const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (confirm("Really Want to know?")) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    });
});

const headerLink = document.querySelectorAll('li');

headerLink.forEach((li) => {
    if (li.addEventListener('mouseenter', (e) => {
        e.target.style.borderBottom = 'thick solid white';
    }));
    if (li.addEventListener('mouseleave', (e) => {
        e.target.style.borderBottom = '';
    }));
});