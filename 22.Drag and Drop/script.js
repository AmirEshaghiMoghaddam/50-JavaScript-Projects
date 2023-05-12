const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


// or using forEach()
for (const empty of empties) {
     empty.addEventListener('dragover', dragOver)
     empty.addEventListener('dragenter', dragEnter)
     empty.addEventListener('dragleave', dragLeave)
     empty.addEventListener('drop', dragDrop)
}


// With a regular function this represents the object that calls the function
// here div.fill calls the function
function dragStart() {
     // console.log(this.className)
     this.className += ' hold'
     // console.log(this.className)
     // this.classList.add('Amir')
     // console.log(this.className)
     setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
     this.className = 'fill'
}

function dragOver(e) {
     e.preventDefault()
}

function dragEnter(e) {
     e.preventDefault()
     this.className += ' hovered'
}

function dragLeave() {
     this.className = 'empty'
}

function dragDrop() {
     this.className = 'empty'
     this.append(fill)
}