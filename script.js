//Citation for video help is in README
class Calculator {
  constructor(previousOperandTextElement; currentOperandTextElement) {
  this.previousOperandTextElement = previousOperandTextElement this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.curentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {

  }

  appendNumber(number) {
    this.curentOperand = this.curentOperand.toString() + number.toString()
  }

  choseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.curentOperand
  }


}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const eaqualsButton = documnet.queryselector('[data-equals]')
const deleteButton = documnet.queryselector('[data-delete]')
const allClearButton = documnet.queryselector('[data-all-clear]')
const previousOperandTextElement = documnet.queryselector('[data-previous-operand]')
const currentOperandTextElement = documnet.queryselector('[data-current-operand]')
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})