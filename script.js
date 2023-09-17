const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const door = document.getElementById('door');
const gif = document.getElementById('gif');
const warningHeader = document.querySelector('h1');

openButton.addEventListener('click', () => {
    door.style.background = 'none'; // Remove background image
    gif.style.display = 'block'; // Show the GIF
    warningHeader.innerText = 'Door is Open'; // Update warning header text
});

closeButton.addEventListener('click', () => {
    door.style.background = 'url(images/door_closed_800_wht.jpg) no-repeat'; // Restore closed door image
    door.style.backgroundSize = 'cover';
    gif.style.display = 'none'; // Hide the GIF
    warningHeader.innerText = 'Warning: Door is Closed'; // Restore warning header text
});