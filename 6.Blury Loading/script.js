// first solution

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


console.log(loadText);
console.log(bg);

let time = 0;
let blurAmount = 100;

let int = setInterval(loading, 25);

function loading() {
     time++;
     blurAmount--;
     console.log(time)

     if (time <= 100 && blurAmount >= 0) {
          loadText.textContent = `${time} %`;
          loadText.style.opacity = `${blurAmount / 100}`
          bg.style.filter = `blur(${blurAmount}px)`;
     } else {
          clearInterval(int)
     }
}






// other solution

// const loadText = document.querySelector('.loading-text')
// const bg = document.querySelector('.bg')

// let load = 0

// let int = setInterval(blurring, 30)

// function blurring() {
//   load++

//   if (load > 99) {
//     clearInterval(int)
//   }

//   loadText.innerText = `${load}%`
//   loadText.style.opacity = scale(load, 0, 100, 1, 0)
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
// }

// // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }
