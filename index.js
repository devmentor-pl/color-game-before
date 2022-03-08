document.addEventListener('DOMContentLoaded', isDOMContentLoaded);

function isDOMContentLoaded() {
    const colors = ['red', 'green', 'yellow'];

    const randomColor = chooseRandomColor(colors);

    displayrandomColor(randomColor);

    const productsList = document.querySelector('.productsList');

    productsList.addEventListener('click', e => {
        const product = e.target.innerText;
        isProductCorrect(randomColor, product);
    });
}

function chooseRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayrandomColor(randomColor) {
    const colorEl = document.querySelector('.color');
    colorEl.innerText = randomColor;
    colorEl.style.color = randomColor;
}

function isProductCorrect(color, product) {
    if (color === 'red' && (product === 'cranberry' || product === 'cherry')) {
        alert('Hurray!');
    } else if (
        color === 'yellow' &&
        (product === 'banana' || product === 'melon')
    ) {
        alert('Hurray!');
    } else if (
        color === 'green' &&
        (product === 'cucumber' || product === 'avocado')
    ) {
        alert('Hurray!');
    } else {
        alert('Wrong answer');
    }
}
