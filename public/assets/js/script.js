// evento de carga


window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('preloader').remove()
  })
})


// active scroll
const navChange = document.getElementById('header')
const ActiveBacktotop = document.getElementById('backtotop')

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1) {
    navChange.classList.add('header-active')
    ActiveBacktotop.classList.add('backtotop-active')
  } else {
    navChange.classList.remove('header-active')
    ActiveBacktotop.classList.remove('backtotop-active')
  }
})

// input file styles

function cambiar(){
  let changeNameFile  = document.getElementById('file-upload').files[0].name;
  document.getElementById('modal-info').innerHTML = changeNameFile;
}

// navburger

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('main-menu-show')
    })


  }
}
showMenu('burger', 'main-menu')

//ocultar menuburger al hacer clic

const links = Array.from(document.querySelectorAll('.main-menu__link'))
const nav = document.getElementById('main-menu')

for (let i = 0; i < links.length; i++) {
  if (links) {
    links[i].addEventListener('click', () => {
      nav.classList.toggle('main-menu-show')
    })
  }
}

// dejar subrayado la seccion en la que estoy

//smooth scroll animation

const scroll = new SmoothScroll('.ss-animation', {
  speed: 800
})



// progress bar


const bars1 = document.querySelector('.bar1')
const bars2 = document.querySelector('.bar2')
const bars3 = document.querySelector('.bar3')
const bars4 = document.querySelector('.bar4')
const bars5 = document.querySelector('.bar5')
const bars6 = document.querySelector('.bar6')

function animateBar(e , mx){
  const smallBP = matchMedia('(max-width:712px)')
  const mediumBP = matchMedia('(min-width:713px)')
  if (scrollY >= 900 && scrollY <= 1850 && smallBP.matches) {
    e.style.animation = "animate 3s ease"
    e.style.maxWidth = mx
  } else if(scrollY >= 300 && scrollY <= 1500 && mediumBP.matches){
    e.style.animation = "animate 3s ease"
    e.style.maxWidth = mx
    
  }else {
    e.style.animation = "none"
    e.style.maxWidth = "0%"
  }
}

addEventListener('scroll', () => animateBar(bars1 , '90%'))
addEventListener('scroll', () => animateBar(bars2 , '80%'))
addEventListener('scroll', () => animateBar(bars3 , '75%'))
addEventListener('scroll', () => animateBar(bars4 , '70%'))
addEventListener('scroll', () => animateBar(bars5 , '60%'))
addEventListener('scroll', () => animateBar(bars6 , '50%'))

// imprimir modal

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const modalBtn2 = document.querySelector('#modal-btn2');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

