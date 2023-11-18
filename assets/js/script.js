// GLOBAL VARIABLES
const image = document.getElementById('shakingImage');
const quoteContainer = document.getElementById('quoteContainer');

const quotes = [
    'Banana',
    'Meatloaf',
    'For Funsies',
    'Banana Meatloaf',
    'Bueller… Bueller… Bueller…',
    "That's just how functions work",
    'We put code in your code so you can code while you code',
    'DO NOT MIX PROMISES AND CALLBACKS. It is a source of pain',
];

// Displays a random quote on top of the image
function showRandomQuote() {
    // Choose a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Create Quote
    const displayQuote = document.createElement('p');
    displayQuote.setAttribute('id', 'quote');
    displayQuote.textContent = randomQuote;

    // Display Quote
    quoteContainer.style.opacity = '1';
    quoteContainer.style.display = 'block';
    displayQuote.setAttribute('class', 'fade');
    quoteContainer.appendChild(displayQuote);

    setTimeout(() => {
        displayQuote.classList.remove('fade');
    }, 750);
};

function clearQuote() {
    quoteContainer.textContent = '';
}

// Makes image shake when clicked
function shakeImage(event) {
    event.preventDefault();

    clearQuote();

    image.classList.add('shake');

    setTimeout(() => {
      image.classList.remove('shake');
    }, 700);

    showRandomQuote();
};

// Image Event Listeners
image.addEventListener('click', shakeImage);
image.addEventListener('dblclick', (event) => {
    event.preventDefault();
});