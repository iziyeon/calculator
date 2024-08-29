let buttons = document.querySelectorAll(".number");
let display = document.querySelector("#calculator-display");
let operator = document.querySelectorAll(".operator");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear")

let displayNumber1 = "";
let displayNumber2 = "";
let calculateOperator = "";

buttons.forEach(number => {
    number.addEventListener("click", (event) => {
        let buttonClick = event.target.innerText;
        if (display.textContent === "0") {
            display.textContent = buttonClick;
        } else {
            display.textContent = display.textContent + buttonClick;
        }
        
        if (calculateOperator === "") {
            displayNumber1 = displayNumber1 + buttonClick;
            console.log(displayNumber1)
        }

    });
});

operator.forEach(operator => {
    operator.addEventListener("click", (event) => {
        let buttonClick = event.target.innerText;
        display.textContent = displayNumber1;
        calculateOperator = buttonClick;
        console.log(calculateOperator)
    });
});

buttons.forEach(number => {
    number.addEventListener("click", (event) => {
        if (displayNumber1 && calculateOperator) {
            let buttonClick2 = event.target.innerText;

            displayNumber2 = displayNumber2 + buttonClick2;
            display.textContent = displayNumber2;
            console.log(displayNumber2)
        }


    });
});

let calculate = function (firstOperand, calculateOperator, secondOperand) {
    let answer = eval(`${firstOperand}${calculateOperator}${secondOperand}`);
    return answer;
};

result.addEventListener("click", function () {
    let firstOperand = Number(displayNumber1);
    let secondOperand = Number(displayNumber2);

    let answer = calculate(firstOperand, calculateOperator, secondOperand);
    display.textContent = answer;
    console.log(answer)
});
clear.addEventListener("click", () => {
    n1 = ''
    n2 = ''
    calOperator = ''
    display.textContent = '0'
  })