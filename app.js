const resultHTML = document.querySelector(".display-box");
const btns = document.querySelectorAll(".btn");
const operatorBtn = document.querySelectorAll(".operators");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

let firstNumBox = null;
let operatorBox = null;
let secondNumBox = null;
let resultBox = "0";
updateResult();

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operatorBox === null) {
      firstNumBox = (firstNumBox === null ? "" : firstNumBox) + btn.textContent;
    } else {
      secondNumBox =
        (secondNumBox === null ? "" : secondNumBox) + btn.textContent;
    }
    updateDisplay(); // Update display with current input
  });
});

operatorBtn.forEach((op) => {
  op.addEventListener("click", () => {
    if (firstNumBox !== null && secondNumBox === null) {
      operatorBox = op.textContent; // Set operator
      updateDisplay(); // Update display
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (firstNumBox !== null && operatorBox !== null && secondNumBox !== null) {
    let num1 = parseFloat(firstNumBox);
    let num2 = parseFloat(secondNumBox);
    let result = 0;

    switch (operatorBox) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "Error";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Error";
    }

    resultBox = result.toString();
    firstNumBox = resultBox;
    operatorBox = null;
    secondNumBox = null;
    updateResult();
  }
});

clearBtn.addEventListener("click", () => {
  firstNumBox = null;
  operatorBox = null;
  secondNumBox = null;
  resultBox = "";
  resultHTML.value = "0";
});

function updateDisplay() {
  if (firstNumBox === null && secondNumBox === null) {
    resultHTML.value = "0"; // If nothing is entered, show 0
  } else {
    resultHTML.value = `${firstNumBox || ""} ${operatorBox || ""} ${
      secondNumBox || ""
    }`;
  }
}

function updateResult() {
  resultHTML.value = resultBox;
}
