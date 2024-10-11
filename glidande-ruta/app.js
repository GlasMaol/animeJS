let animation;

document.querySelector('.button').addEventListener('click', function () {
    if (!animation) {
        animation = anime({
            targets: '.ruta',
            translateX: 300,
            duration: 2000,
            easing: 'linear',
            direction: 'alternate',
        });
    }

})
