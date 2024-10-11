let animation;

document.querySelector('.button').addEventListener('click', function () {
    if (!animation) {
        animation = anime({
            targets: '.square',
            keyframes: [
                {
                    translateX: '100px',
                    duration: 500,
                    easing: 'linear',
                },
                {
                    translateY: '135px',
                    duration: 1000,
                    easing: 'linear'
                },
                {
                    translateX: '-100px',
                    duration: 1000,
                    easing: 'linear'
                },
                {
                    translateY: 0,
                    duration: 1000,
                    easing: 'linear'
                },
                {
                    translateX: 0,
                    duration: 500,
                    easing: 'linear'
                }

            ],
            direction: 'alternate',
        });
    }
})