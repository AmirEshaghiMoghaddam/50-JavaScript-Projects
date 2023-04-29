// 
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => panel.addEventListener('click', function () {
     const allItems = [...panel.parentElement.children];
     allItems.forEach((item) => item.classList.remove('active'))
     panel.classList.add('active');

}));

