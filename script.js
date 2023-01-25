
const output = document.querySelector('.output')
const buttons = document.getElementsByTagName("button");
const buttonsArray = [...buttons];
const inputHTML = document.querySelector('.input')
const dot = document.querySelector('.dot')
const operatorButtons = document.getElementsByClassName('operator')
const operatorArray = [...operatorButtons]

//math functions
function add(num1, num2) {
    
    return (num1 + num2)
}

function subtract(num1, num2) {
    
    return (num1 - num2)
}

function multiply(num1, num2) {
    
    return (num1 * num2).toFixed(0)
}

function divide(num1, num2) {
    
    return (num1 / num2).toFixed(10)
}


operatorArray.forEach(element => {
    element.disabled = true
});
//make array take inputs [1,2,3,4]
let inputArray = []
let result = 0
let num1 = 0
let num2 = 0
let operator = ''
let changeer = 0
buttonsArray.forEach((item) => item.addEventListener("click", calculator));

function calculator(e) {
    
    let input = parseFloat(inputHTML.textContent += e.target.textContent)
    output.textContent = ''

    console.log(input)
  
    operatorArray.forEach(element => {
        element.disabled = false
    });
    //store input in array
   
    if (e.target.classList.contains('operator')) {

        operatorArray.forEach(element => {
            element.disabled = true
        });


        inputArray.push(input)
        inputArray.push(e.target.textContent)
        console.log(e.target.textContent)
        console.log(inputArray )
        document.querySelector('.preOutput').textContent = ''
        for (let i = 0; i < inputArray.length; i++) {
            document.querySelector('.preOutput').textContent += inputArray[i]
        }
        inputHTML.textContent = ''


    }
    // do math 
    if (e.target.classList.contains('equals')) {
        result = 0
        num1 = 0
        num2 = 0
        operator = ''
        changeer = 0
        for (let i = 0; i < inputArray.length; i++) {
            if (typeof (inputArray[i]) == 'number') {
             
                num1 = inputArray[i]
                operator = inputArray[i + 1]

            }
            if (typeof (inputArray[i]) != 'number' && inputArray[i] != '=') {
                if (changeer != 0) {
                    operator = inputArray[i]
                    num2 = inputArray[i + 1]
                    result = oparate(changeer, operator, num2)
                    changeer = result
                    output.textContent
                } else {
                    operator = inputArray[i]
                    num2 = inputArray[i + 1]
                    changeer = oparate(num1, operator, num2)
                    result = changeer
                }
            }
        }

        output.textContent = result
        console.log(result)

        inputArray = []
    }
    //clear 
    if (e.target.classList.contains('clear')) {
        inputHTML.textContent = ''
        location.reload()
    }
    //backspace
    if (e.target.classList.contains('backspace')) {
        inputHTML.textContent = inputHTML.textContent.substring(0, inputHTML.textContent.length - 2)
        dot.disabled = false
    }
    //plus minus
    if (e.target.classList.contains('plusMinus')) {
        
        inputHTML.textContent = -input
    }
    //decimal point
    if (e.target.classList.contains('dot')) {
        if (inputHTML.textContent.includes('.')) {
            e.target.disabled = true
        }
    }

}

//take input from keyboard from keyboard
document.addEventListener('keydown', takeKeyInput)
function takeKeyInput(e) {
    e.preventDefault()
    let getOperators = {
        '/': 'divide',
        'x': 'multiply',
        '*': 'multiply',
        '%': 'remainder',
        '+': 'plus',
        '-': 'minus'
    }

    if (!isNaN(e.key) && e.key != ' ') {
        document.getElementById(`${e.key}`).click()
    } else if (['/', 'x', '+', '-', '*', '%'].includes(e.key)) {
        document.getElementById(getOperators[e.key]).click();
    } else if (e.key == 'Enter') {
        document.getElementById('equals').click()
    } else if (e.key == 'Backspace') {
        document.getElementById('backspace').click()
    } else if (e.key == '.') {
        document.getElementById('dot').click()
    }

}


function oparate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2)
    }
    if (operator == '-') {
        return subtract(num1, num2)
    }
    if (operator == 'x') {
        return multiply(num1, num2)
    }
    if (operator == '/') {
        return divide(num1, num2)
    }
}
