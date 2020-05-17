function operate () {
}


let resultOnScreen = null;

// Manipulating DOM for results
const screen = document.querySelector('#screen');

const currentInput = document.createElement('h2');
currentInput.textContent = `empty`;
screen.appendChild(currentInput);


// Inputs
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		currentInput.textContent = currentInput;
		currentInput.appendChild(screen);

		operate();
	});
});

