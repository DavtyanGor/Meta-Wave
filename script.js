//burger
let nav = document.querySelectorAll('.header__navigation')
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    nav[0].classList.toggle('burger__active');
})

//tabs
tab1.classList.add('section5__items')
img5.style.filter = 'grayscale(100%)'
let arr = ['./img/story.png', './img/story2.jpg', './img/story3.jpg']

  
let tabs = document.querySelectorAll('.section5__item-1')
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
        for (let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove('section5__items')
        }
        img5.src = arr[i]
        tabs[i].classList.add('section5__items')
    })
}

const myAtropos = Atropos({
    el: '.atrop'
  });
const myAtropos2 = Atropos({
    el: '.atrop2'
  });
const myAtropos3 = Atropos({
    el: '.atrop3'
  });