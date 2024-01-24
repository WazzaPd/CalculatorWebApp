const displayInput = document.getElementById('inputValue')

//Variables
const operators = ['-', '+', '%', '*', '/']
let operations = []
let currValue = ''

//Functions and Operations

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

function handleOperatorInput(value) {
    if (!currValue) {
        return
    }

    operations.push(currValue)
    operations.push(value)
    currValue = ''
}

function handleEvaluate() {
    let finalAmount = operations[0]
    let prevOperator = null
    if(!currValue || operations.length === 0){
        return
    } else {
        operations.push(currValue)
        currValue = ''
    }
    
    for(let i = 1; i < operations.length; i++){
        if(i % 2 === 0){
            //Numerical
            finalAmount = eval(`${finalAmount} ${prevOperator} ${operations[i]}`)
        } else {
            //Operator
            prevOperator = operations[i]
        }
    }
    operations = []
    currValue = finalAmount
    updateUI()
}

function handleReset() {
    operations = []
    currValue = ''
    updateUI()
}

function updateUI() {
    const displayString = operations.join(' ') + ' ' +currValue
    displayInput.innerText = displayString.trim() ? displayString : '0'
    console.log(operations)
}