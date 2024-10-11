document.getElementById('animateBtn').addEventListener('click', function () {

    const userInput = document.getElementById('userInput').value;

    const outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = '';

    const textWrapper = userInput.replace(/\S/g, "<span class='letter'>$&</span>");
    outputDiv.innerHTML = textWrapper;

    anime.timeline({ loop: false })
        .add({
            targets: '.output .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 150,
            delay: (el, i) => 100 * i
        });
})