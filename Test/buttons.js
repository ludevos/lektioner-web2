// Button click event listener
// () => is a shorthand for function(){}

// window.onload is an event that occurs when the entire page has loaded.
window.onload = () => {
    const button = document.getElementById('alertButton');

    // .addEventListener() is a method that attaches an event handler to the specified element
    // 'click' is the event type
    button.addEventListener('click', () => {
    alert('Button clicked!');
    });

    // Time button
    const timeButton = document.getElementById('timeButton');
    const timeDisplay = document.getElementById('timeDisplay');

    timeButton.addEventListener('click', () => {
    const currentTime = new Date(); // date() is a built-in object that represents a single moment in time
    timeDisplay.textContent = 'Current time: ' + currentTime.toLocaleTimeString(); 
    });

    // Lightbulb buttons
    // const is a variable that cannot be reassigned
    const turnOff = document.getElementById('turnOff');
    const turnOn = document.getElementById('turnOn');
    const img = document.getElementById('lightbulb');

    turnOff.addEventListener('click', () => {
    img.src = 'img/lightbulbOff.gif';
    });

    turnOn.addEventListener('click', () => {
    img.src = 'img/lightbulbOn.gif';
    });

    
};
