const display = document.getElementById('result');

let previousAnswer = '';

const buttons = document.querySelectorAll('.calculator input[type="button"]');
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleClick(event) {
  const buttonValue = event.target.value;

  if (buttonValue === 'Enter') {
    evaluateExpression();
  } else if (buttonValue === 'clear') {
    clearDisplay();
  } else if (buttonValue === 'del') {
    deleteLastCharacter();
  } else if (buttonValue === 'ans') {
    addToDisplay(previousAnswer);
  } else {
    addToDisplay(buttonValue);
  }
}
function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
function evaluateExpression() {
  try {
    const result = eval(display.value);
    display.value = result;
    previousAnswer = result;
  } catch (error) {
    display.value = 'Error';
  }
}
function clearDisplayAfterDelay() {
    setTimeout(clearDisplay, 100);
  }



