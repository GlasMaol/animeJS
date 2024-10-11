let animation;

document.querySelector('.button').addEventListener('click', function () {
    if (!animation) {
        animation = anime({
            targets: '.square',
            rotate: 85,
            duration: 300,
            easing: 'spring(1, 80, 10, 0)',
            direction: 'alternate',
        });
    }
})