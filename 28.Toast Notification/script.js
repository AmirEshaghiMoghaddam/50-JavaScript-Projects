const button = document.getElementById('button');
const toasts = document.getElementById('toasts');


const messages = [
     'message one',
     'message two',
     'message three',
     'message four',
     'message five',
     'message six',
     'message seven',
     'message eight',
     'message nine',
     'message ten',
]

button.addEventListener('click', createNotification)

function createNotification() {

     let msg = document.createElement('div')
     msg.innerHTML = messages[getRandomMessage()]
     msg.classList.add('toast')
     toasts.appendChild(msg)
     setTimeout(() => {
          msg.classList.add('del')
     }
          , 5000)
     setTimeout(() => {
          toasts.removeChild(msg)
     }, 100000)


}

function getRandomMessage() {
     return (Math.floor(Math.random() * messages.length))
}