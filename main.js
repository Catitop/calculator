const elementsButton = document.querySelectorAll('button');
const calculatorResult = document.querySelector('.calculator_result');
const operationKeys = ['+', '-', '/', '%', 'x', '*']
let showValueOnScreen = '';
let numberResult = '';
let isPressedKeyEqual = false

function addResultCalc() {
  isPressedKeyEqual = true
  console.log(numberResult)
  let result = eval(numberResult)
  calculatorResult.innerHTML = result;
  numberResult = result;
}

function resetLaterOfSignal() {
  showValueOnScreen = ''
}

function cleanNumbers() {
  isPressedKeyEqual = false
  numberResult = '';
  showValueOnScreen = ''
  calculatorResult.innerHTML = '0';
}

function invertSignal() {
    showValueOnScreen = Number(showValueOnScreen) * -1
    calculatorResult.innerHTML = showValueOnScreen
}

function percentage() {
  numberResult = eval(numberResult) / 100
  calculatorResult.innerHTML = numberResult
}

function insertResult(key) {
  if(operationKeys.includes(key)) {
    isPressedKeyEqual = false
    resetLaterOfSignal();
  }
  
  if (key === 'AC') {
    cleanNumbers();
    return;
  }

  if (key === '=') {
    addResultCalc();
    return;
  }

  if (key === 'x') {
    key = '*';
  }

  if (key === '+/-') {
    invertSignal();
    return;
  }

  if (key === '%') {
    percentage();
    return;
  }

  if(isPressedKeyEqual) {
    cleanNumbers();
  }

  if (!operationKeys.includes(key)) {
    showValueOnScreen += key;
  }

  numberResult = numberResult + String(key);
  calculatorResult.innerHTML = showValueOnScreen;

  console.log(showValueOnScreen)
}

elementsButton.forEach((elementButton) => {
  elementButton.addEventListener('click', () => {
    insertResult(elementButton.innerHTML);
  });
});

// 50 + (-51) = -1