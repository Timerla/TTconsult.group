const time = 1000;
const step = 1;

function outNum(num, elem) {
    let e = document.querySelector('#out');
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
              clearInterval(interval);
         }
    e.innerHTML = n;
    },
t);
};

outNum(98, '#out');


const timeTwo = 1000;
const stepTwo = 1;
function outNumTwo(num, elem) {
    let et = document.querySelector('#out-two');
    nem = 0;
    let te = Math.round(timeTwo/(num/stepTwo));
    let interval = setInterval(() => {
        nem = nem + stepTwo;
        if(nem == num) {
              clearInterval(interval);
         }
    et.innerHTML = nem;
    },
te);
};

outNumTwo(100, '#out-two');

const timeTree = 800;
const stepTree = 1;
function outNumTree(num, elem) {
    let et = document.querySelector('#out-tree');
    nt = 0;
    let tem = Math.round(timeTree/(num/stepTree));
    let interval = setInterval(() => {
        nt = nt + stepTree;
        if(nt == num) {
              clearInterval(interval);
         }
    et.innerHTML = nt;
    },
tem);
};

outNumTree(5, '#out-tree');

const container = document.querySelector('.container');
const scrollButtonLeft = document.querySelector('.scroll-button-left');
const scrollButtonRight = document.querySelector('.scroll-button-right');

    scrollButtonLeft.addEventListener('click', () => {
      if(window.innerWidth >= 1501){
        container.scrollBy({
          left: -469, 
          behavior: 'smooth' 
        });
      }
      if(window.innerWidth <= 1500 && window.innerWidth >= 1051){
        container.scrollBy({
          left: -386, 
          behavior: 'smooth' 
        });
      } if(window.innerWidth <= 1050 && window.innerWidth >= 651){
        container.scrollBy({
          left: -400, 
          behavior: 'smooth' 
        });
      } if(window.innerWidth <= 550){
        container.scrollBy({
          left: -376, 
          behavior: 'smooth' 
        });
      }
      checkScrollButtons();
    });

    scrollButtonRight.addEventListener('click', () => {
      if(window.innerWidth >= 1501){
        container.scrollBy({
          left: 469, 
          behavior: 'smooth' 
        });
      }
      if(window.innerWidth <= 1500 && window.innerWidth >= 1050){
        container.scrollBy({
          left: 376, 
          behavior: 'smooth' 
        });
      } if(window.innerWidth <= 1050 && window.innerWidth >= 651){
        container.scrollBy({
          left: 400, 
          behavior: 'smooth' 
        });
      } if(window.innerWidth <= 550){
        container.scrollBy({
          left: 376, 
          behavior: 'smooth' 
        });
      }
      checkScrollButtons();
    });

    function checkScrollButtons() {
      // Проверяем, достигнут ли конец скролла
      if (container.scrollLeft === 0) {
        scrollButtonLeft.classList.add('hidden');
      } else {
        scrollButtonLeft.classList.remove('hidden');
      }

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollButtonRight.classList.add('hidden');
      } else {
        scrollButtonRight.classList.remove('hidden');
      }
    }

    // Вызываем функцию сразу после загрузки страницы
    checkScrollButtons();


    
      



    
let burger = document.getElementById('burger'),
nav = document.getElementById('main-nav'),
burgerTwo = document.getElementById('burgerTwo'),
slowmo = document.getElementById('slowmo'),
btnLines = document.querySelectorAll('.btn-line'),
body = document.querySelector('body');

burger.addEventListener('click', function(e){
this.classList.toggle('is-open');
nav.classList.toggle('is-open');
body.classList.toggle('menu-open');
})

burgerTwo.addEventListener('click', function(e){
  this.classList.remove('is-open');
  })






function openModal() {

  document.querySelector('.pop_up').style.display = 'block';
  document.querySelector('.pop_up').style.transform = 'translateY(-44.5%) scale(0)';
  document.querySelector('.pop_up').style.transition = '1.9s ease-in';
  document.querySelector('.pop_up').style.transform = 'translateY(0) scale(100%)'; 
  document.body.style.overflow = 'hidden';
}

function closeModal() {

  document.querySelector('.pop_up').style.display = 'none';
  document.body.style.overflow = 'scroll';
}

