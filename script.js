
const $numbers = document.querySelectorAll('.number')
const $operators = document.querySelectorAll('.operator')
const buttons = document.getElementsByTagName("button");
const buttonsArray = [...buttons];


//math functions
function add(num1, num2) {
    console.log(num1 + num2)
    return num1 + num2
}

function subtract(num1, num2) {
    console.log(num1 - num2)
    return num1 - num2
}

function multiply(num1, num2) {
    console.log(num1 * num2)
    return num1 * num2
}

function divide(num1, num2) {
    console.log(num1 / num2)
    return num1 / num2
}

//make array take inputs [1,2,3,4]
let inputArray = []


buttonsArray.forEach((item) => item.addEventListener("click", storeValue));

function storeValue(e) {
   let input = parseInt(document.querySelector('.input').textContent += e.target.textContent)
    console.log(input)
    if (e.target.classList.contains('operator')) {
        console.log(e.target.textContent)
        document.querySelector('.input').textContent = ''
        inputArray.push(input) 
    }
    console.log(inputArray)
   
}




function oparate(num1, num2, operator) {
    if (operator == '+') {
        add(num1, num2)
    }
    if (operator == '-') {
        subtract(num1, num2)
    }
    if (operator == '*') {
        multiply(num1, num2)
    }
    if (operator == '/') {
        divide(num1, num2)
    }
}


//oparate(inputNumber1, inputNumber2, operator)


//make array into int/string and asing it to some var  num1= 1234

//when operator is called clear input array

//take new inputs in array
