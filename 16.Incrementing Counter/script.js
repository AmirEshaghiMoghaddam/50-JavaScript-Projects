
// one solution
// const counters = document.querySelectorAll('.counter');

// counters.forEach((counter) => {
//      counter.textContent = '0';
//      let c = +counter.textContent;
//      // + turn string to number
//      console.log(typeof c)
//      const target = +counter.dataset.target;
//      console.log(typeof target)
//      setInterval(() => {
//           if (c < target) {
//                c += target / 100;
//                counter.textContent = Math.ceil(c);
//           } else {
//                counter.textContent = target;
//           }
//      }, 1)
// })




// another solution
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
     counter.textContent = 0;
     console.log(typeof counter.textContent)

     const updateCounter = () => {
          const target = +counter.getAttribute('data-target')
          const c = +counter.textContent

          const increment = target / 100

          if (c < target) {
               counter.textContent = `${Math.ceil(c + increment)}`
               setTimeout(updateCounter, 1)
          } else {
               counter.textContent = target
          }
     }

     updateCounter()
})