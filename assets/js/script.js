// GLOBAL VARIABLES

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

// Makes image shake when clicked
function shakeImage() {
    const image = document.getElementById('shakingImage');
    image.classList.add('shake');

    setTimeout(() => {
      image.classList.remove('shake');
    }, 700);
  }

