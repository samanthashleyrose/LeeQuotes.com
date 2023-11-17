// Makes image shake when clicked
function shakeImage() {
    const image = document.getElementById('shakingImage');
    image.classList.add('shake');

    setTimeout(() => {
      image.classList.remove('shake');
    }, 500);
  }