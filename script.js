// Add this at the beginning of your script.js file
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

window.addEventListener('scroll', function () {
    let offset = window.scrollY;
    document.querySelector('#hero').style.backgroundPositionY = offset * 0.7 + 'px';
});
