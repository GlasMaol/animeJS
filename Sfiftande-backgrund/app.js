let animation;

document.querySelector('.button').addEventListener('click', function () {
    if (!animation) {
        animation = anime({
            targets: '.circle',
            backgroundColor: '#008000',
            duration: 2000,
            easing: 'linear',
            direction: 'alternate',
        });
    }
})