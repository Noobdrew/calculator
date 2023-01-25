
const output = document.querySelector('.output')
const buttons = document.getElementsByTagName("button");
const buttonsArray = [...buttons];
const inputHTML = document.querySelector('.input')
const dot = document.querySelector('.dot')

//math functions
function add(num1, num2) {
    console.log(num1 + num2)
    return (num1 + num2)
}

function subtract(num1, num2) {
    console.log(num1 - num2)
    return (num1 - num2)
}

function multiply(num1, num2) {
    console.log(num1 * num2)
    return (num1 * num2).toFixed(0)
}

function divide(num1, num2) {
    console.log(num1 / num2)
    return (num1 / num2).toFixed(10)
}



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
    
    // console.log(input)
    inputHTML.textContent

    //store input in array
    if (e.target.classList.contains('operator')) {
        console.log(input)
        inputArray.push(input)
        inputArray.push(e.target.textContent)
        console.log(e.target.textContent)
        console.log(inputArray)

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

let inputArrayKeyboard = []
document.addEventListener('keydown', takeKeyInput)
function takeKeyInput(e) {
    let input

    //take number from keyboard
    if (e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105) {
        inputHTML.textContent += parseFloat(e.key)
        output.textContent = ''

    }
    //take operators from keyboard
    if (e.which == 107 || e.which == 109 || e.which == 106 || e.which == 111 || e.key == "Enter") {
        input = parseFloat(inputHTML.textContent)
        inputArrayKeyboard.push(input)
        if (e.key == "Enter") {
            inputArrayKeyboard.push('=')
        } else if (e.which == "106") {
            inputArrayKeyboard.push('x')
        }
        else {
            inputArrayKeyboard.push(e.key)
            console.log(inputArrayKeyboard)

        }
        document.querySelector('.preOutput').textContent = ''
        for (let i = 0; i < inputArrayKeyboard.length; i++) {
            document.querySelector('.preOutput').textContent += inputArrayKeyboard[i]
        }
        inputHTML.textContent = ''
    }
    //enter runs calculation
    if (e.key == 'Enter') {
        console.log(inputArrayKeyboard)
        result = 0
        num1 = 0
        num2 = 0
        operator = ''
        changeer = 0
        for (let i = 0; i < inputArrayKeyboard.length; i++) {
            if (typeof (inputArrayKeyboard[i]) == 'number') {
                num1 = inputArrayKeyboard[i]
                operator = inputArrayKeyboard[i + 1]

            }
            if (typeof (inputArrayKeyboard[i]) != 'number' && inputArrayKeyboard[i] != '=') {
                if (changeer != 0) {
                    operator = inputArrayKeyboard[i]
                    num2 = inputArrayKeyboard[i + 1]
                    result = oparate(changeer, operator, num2)
                    changeer = result
                    output.textContent
                } else {
                    operator = inputArrayKeyboard[i]
                    num2 = inputArrayKeyboard[i + 1]
                    changeer = oparate(num1, operator, num2)
                    result = changeer
                }
            }
        }

        output.textContent = result

        inputArrayKeyboard = []
    }
    //backspace
    if(e.key=='Backspace'){
        inputHTML.textContent = inputHTML.textContent.substring(0, inputHTML.textContent.length - 1)
        dot.disabled = false
    }
    //decimal point
    if(e.key == '.'){
        inputHTML.textContent +='.'
        if (inputHTML.textContent.includes('.')) {
            e.target.disabled = true
        }
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


//oparate(inputNumber1, inputNumber2, operator)


//make array into int/string and asing it to some var  num1= 1234

//when operator is called clear input array

//take new inputs in array
