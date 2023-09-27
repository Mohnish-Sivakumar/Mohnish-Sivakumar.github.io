
const cursor = document.querySelector('.layer_red');
const hidden_text = document.querySelector('.part1');
const card1 = document.querySelector('.card');

const limitWidth = 910;
const limitHeight = 700;

window.addEventListener('mousemove', (e) => {
    // Get the mouse coordinates relative to the "pro" element
    // Check if the mouse is over the hidden_text element
    const x = e.clientX;
    const y = e.clientY;

    const isMouseOverHiddenText = e.target === hidden_text;

    // Adjust the offset values based on whether the mouse is over hidden_text
    const xOffset = isMouseOverHiddenText ? -200 : -20;
    const yOffset = isMouseOverHiddenText ? -200 : -20;

    // Update the CSS variables
    cursor.style.setProperty('--x', `${x + xOffset}px`);
    cursor.style.setProperty('--y', `${y + yOffset}px`);
    
    if (window.innerWidth < limitWidth || window.innerHeight < limitHeight) {
        document.documentElement.style.setProperty("--cursor-x", "0px");
        document.documentElement.style.setProperty("--cursor-y", "0px");
        document.documentElement.style.setProperty("--cursor-size", "0px");
      }
});



hidden_text.addEventListener('mouseenter', (e) => {
    // Get the mouse coordinates relative to the "pro" element
    // Update the CSS variables
    if (window.innerWidth < limitWidth || window.innerHeight < limitHeight) {
        document.documentElement.style.setProperty("--cursor-size", "0px");
        
      } else {
        document.documentElement.style.setProperty("--cursor-size", "300px");
      }    

});

card1.addEventListener('mouseenter', (e) => {
console.log("PLS")
});

hidden_text.addEventListener('mouseleave', (e) => {
    // Get the mouse coordinates relative to the "pro" element
    // Update the CSS variables
    if (window.innerWidth < limitWidth || window.innerHeight < limitHeight) {
        document.documentElement.style.setProperty("--cursor-size", "0px");
      } else {
        document.documentElement.style.setProperty("--cursor-size", "50px");
      } 
});
