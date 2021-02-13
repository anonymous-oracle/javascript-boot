const buttons = document.querySelectorAll('button');
// button.onclick = function() {

// };

const buttonClickHandler = (event) => { 
    
    // event.target.disabled = true; // disables the button

    console.log(event); 
};
const anotherButtonClickHandler = () => {
    console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;
const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(()=>{
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// SUPPOSE WE USED ANONYMOUS FUNCTIONS FOR CALLBACKS, THEN THE REMOVE EVENT LISTENER WON'T WORK
// BECAUSE THE ANONYMOUS FUNCTIONS GET CREATED EVERYTIME WITH NEW REFERENCE VALUES

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', buttonClickHandler);
});

window.addEventListener('scroll', event => {
    console.log(event);
});