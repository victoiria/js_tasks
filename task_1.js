class Calculator {   
    calculatePlus(firstNumber, secondNumber){
        alert(`Add: ${firstNumber + secondNumber}`);
    }
    calculateMinus(firstNumber, secondNumber){
        alert(`Subtract: ${firstNumber - secondNumber}`);
    }    
    calculateTimes(firstNumber, secondNumber){
        alert(`Multiply: ${firstNumber * secondNumber}`);
    }
    calculateDividedBy(firstNumber, secondNumber){
        alert(`Divide: ${firstNumber / secondNumber}`);
    }
    calculatePercent(firstNumber, secondNumber){
        alert(`Percent: ${firstNumber % secondNumber}`);
    }
}
let calculator = new Calculator();
let firstNumber = +prompt('Enter first number!');
let secondNumber = +prompt('Enter second number!');
console.log(typeof secondNumber);
calculator.calculatePlus(firstNumber, secondNumber);
calculator.calculateMinus(firstNumber, secondNumber);
calculator.calculateTimes(firstNumber, secondNumber);
calculator.calculateDividedBy(firstNumber, secondNumber);
calculator.calculatePercent(firstNumber, secondNumber);