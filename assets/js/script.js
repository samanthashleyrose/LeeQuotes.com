// GLOBAL VARIABLES
const image = document.getElementById('shakingImage');
const quoteContainer = document.getElementById('quoteContainer');

const quotes = [
    {
        quote: `Banana`
    },
    {
        quote: `Meatloaf`
    },
    {
        quote: `For\nFunsies`
    },
    {
        quote: `Banana\nMeatloaf`
    },
    {
        quote: `Bueller… \nBueller… \nBueller…`
    },
    {
        quote: `That's just how\nfunctions\nwork`
    },
    {
        quote: `We put code in\nyour code so you\ncan code while\nyou code`
    },
    {
        quote: `DO NOT MIX PROMISES AND \nCALLBACKS. It\nis a source\nof pain`
    }
];

// Displays a random quote on top of the image
function showRandomQuote() {
    // Choose a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Create Quote
    const displayQuote = document.createElement('p');
    displayQuote.setAttribute('id', 'quote');
    displayQuote.innerHTML = randomQuote.quote.replace(/\n/g, '<br>');

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