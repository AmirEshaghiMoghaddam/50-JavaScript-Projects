const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')





const randomFunc = {
     lower: getRandomLower,
     upper: getRandomUpper,
     number: getRandomNumber,
     symbol: getRandomSymbol
}


clipboardEl.addEventListener('click', () => {
     const password = resultEl.innerText;
     if (!password) {
          return;
     }
     navigator.clipboard.writeText(password);
     alert('Password copied to clipboard!')
})



generateEl.addEventListener('click', () => {
     const length = +lengthEl.value
     const hasLower = lowercaseEl.checked
     const hasUpper = uppercaseEl.checked
     const hasNumber = numbersEl.checked
     const hasSymbol = symbolsEl.checked

     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
     let generatedPass = ''
     const typesCount = lower + upper + number + symbol
     console.log(typesCount)
     const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

     if (typesCount === 0) {
          return ''
     }

     // console.log(typesArr)

     for (let i = 0; i < length; i += typesCount) {
          typesArr.forEach(type => {
               // console.log(type)
               const funcName = Object.keys(type)[0]
               // console.log(funcName)
               generatedPass += randomFunc[funcName]()
          }
          )
     }
     // console.log(generatedPass)
     const generatedPassWithLength = generatedPass.slice(0, length)
     // console.log(generatedPassWithLength)

     let finalPassword = randomOrder(generatedPassWithLength)

     return finalPassword

}

function getRandomLower() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
     return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
     const symbols = '!@#$%^&*(){}[]=<>/,.'
     return symbols[Math.floor(Math.random() * symbols.length)]
}


function randomOrder(input) {
     let result = ''
     let counter = 0
     let InputLength = input.length

     while (counter < InputLength) {
          result += input[(Math.floor(Math.random() * InputLength))]
          counter++
     }
     return result
}