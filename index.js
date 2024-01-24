const displayInput = document.getElementById('inputValue')

//Variables
const operators = ['-', '+', '%', '*', '/']
let operations = []
let currValue = ''

//functions and Operations

function handleInteraction(value){
    console.log(value)
    if (operators.includes(value)){
        console.log('operator')
        handleOperatorInput(value)
    } else {
        console.log('numeric')
        handleNumericInput(value)
    }
    updateUI()
}

function handleNumericInput(value) {
    currValue += value
    console.log('New Value: '+ currValue)
}

function handleOperatorInput() {

}

function handleEvaluate() {

}

function handleReset() {
    operations = []
    currValue = ''
    displayInput.innerText = 0
}

function updateUI() {
    displayInput.innerText = currValue
}