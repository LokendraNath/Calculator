const resultHTML = document.querySelector(".display-box");
const btns = document.querySelectorAll(".btn");
const operatorBtn = document.querySelectorAll(".operators");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

let firstNumBox = "";
let operatorBox = "";
let secondNumBox = "";
let resultBox = "";
let resultDisBox = "0";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operatorBox) {
      firstNumBox += btn.textContent;
    } else {
      secondNumBox += btn.textContent;
    }
    resultDisplay();
  });
});

operatorBtn.forEach((op) => {
  op.addEventListener("click", () => {
    if (!operatorBox) {
      firstNumBox = resultBox;
      secondNumBox = "";
    }
    operatorBox = op.innerHTML;
    console.log(operatorBox);
    resultDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  resultBox = "";
  let result = "";
  if (operatorBox == "-") {
    result = firstNumBox - secondNumBox;
  } else if (operatorBox == "/") {
    result = firstNumBox / secondNumBox;
  } else if (operatorBox == "x") {
    result = firstNumBox * secondNumBox;
  } else if (operatorBox == "+") {
    result = Number(firstNumBox) + Number(secondNumBox);
  } else if (operatorBox == "%") {
    result = firstNumBox % secondNumBox;
  }
  resultBox += result;
  operatorBox = "";
  resultFunc();
});
clearBtn.addEventListener("click", () => {
  resultBox = "";
  firstNumBox = "";
  operatorBox = "";
  secondNumBox = "";
  resultDisBox = 0;
  resultHTML.value = resultDisBox;
});

function operationDis() {
  resultHTML.value = resultDisBox;
}
function resultDisplay() {
  resultDisBox = `${firstNumBox} ${operatorBox} ${secondNumBox}`;
  resultHTML.value = resultDisBox;
}
function resultFunc() {
  resultHTML.value = resultBox;
}
