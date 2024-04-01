
const mainElement = document.getElementById('main');


if (mainElement) {
  mainElement.parentNode.removeChild(mainElement);
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
// Replace 'YOUR-NAME' with your actual name
const yourName = 'Joey'; // Replace with your name
const victoryText = `${yourName} is the champion`;

// Set the text content of the h1 element
newHeader.textContent = victoryText;

// Append the new h1 element to the body (or another suitable container)
document.body.appendChild(newHeader);