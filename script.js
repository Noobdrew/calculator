
const output = document.querySelector('.output')
const buttons = document.getElementsByTagName("button");
const buttonsArray = [...buttons];


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

buttonsArray.forEach((item) => item.addEventListener("click", storeValue));

function storeValue(e) {
    let input = parseInt(document.querySelector('.input').textContent += e.target.textContent)
    output.textContent=''
    
    console.log(input)
    
    
    if (e.target.classList.contains('operator')) {
        inputArray.push(input)
        inputArray.push(e.target.textContent)
        console.log(e.target.textContent)
        console.log(inputArray)
     
        document.querySelector('.preOutput').textContent=''
        for(let i =0 ; i<inputArray.length;i++){
            document.querySelector('.preOutput').textContent += inputArray[i]
        }
        document.querySelector('.input').textContent=''
    }

    if (e.target.classList.contains('equals')) {

        for (let i = 0; i < inputArray.length; i++) {
            if (typeof (inputArray[i]) == 'number') {
                num1 = inputArray[i]
            }
            if (typeof (inputArray[i]) != 'number') {
                operator = inputArray[i]
                num2 = inputArray[i + 1]
                i = inputArray.length
            }
            console.log(`num1 ${num1} , num2 ${num2}, operator ${operator}`)
        }

        output.textContent = oparate(num1, operator, num2)
        inputArray = []
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
