const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (confirm("Really Want to know?")) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
        });
});
