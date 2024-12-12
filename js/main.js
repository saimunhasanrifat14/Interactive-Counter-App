let count = 0;
const display = document.getElementById('display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
    count++;
    display.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    display.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    display.textContent = count;
});