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
]

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

        setTimeout(() => {
            quoteContainer.style.opacity = '0';
            quoteContainer.style.display = 'none';
            displayQuote.textContent = '';
        }, 5000);
    }, 750);
};

// Makes image shake when clicked
function shakeImage() {
    image.classList.add('shake');

    setTimeout(() => {
      image.classList.remove('shake');
    }, 700);

    showRandomQuote();
};

// Image Event Listener
image.addEventListener('click', shakeImage);