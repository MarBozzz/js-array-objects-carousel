/*
**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietroLo screenshot allegato è solo dimostrativo ma cercate di mettere le thumb in basso e non laterlamente
**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
****
**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?
****
*/

//creo l'array
const carouselData = [
  {
    titolo : 'Argentina',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitatione',
    image :'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    titolo : 'Chile',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque',
    image : 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
  },
  {
    titolo : 'Colombia',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image : 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
  },
  {
    titolo : 'Peru',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat',
    image : 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    titolo : 'Sweden',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image : 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'

  }
];

const slider = document.querySelector('.slider-container');
const thumbs = document.querySelector('.thumbs-container');
const generalContainer = document.querySelector('.container');

const buttonNext = document.querySelector('.next');
buttonNext.isNext = true;
const buttonPrev = document.querySelector('.prev');
buttonPrev.isNext = false;

buttonNext.addEventListener('click', nextPrev);
buttonPrev.addEventListener('click', nextPrev);

let counterImages = 0;
//const counterThumb = 0;

let isMouseOver = false;
generalContainer.addEventListener('mouseenter', () => {
  isMouseOver = true;
})
generalContainer.addEventListener('mouseleave', () => {
  isMouseOver = false;
})

let isNextDirection = true;
generalContainer.addEventListener('dblclick', () => {
  //toggle, deve diventare il contrario di se stessa
  isNextDirection = !isNextDirection;
})

document.addEventListener('keypress', (event) => {
  if (event.code === 'Space'){
    isMouseOver = !isMouseOver;
  }
})


init ();

function init (){

  slider.innerHTML ='';
  thumbs.innerHTML ='';

  carouselData.forEach((element, index) => {
    slider.innerHTML += getTemplateSl(element);
    thumbs.innerHTML += getTemplateThumbs(element, index)
  })

  activatePic();
  //activateThumb()
}

function nextPrev() {
  //console.log(this.isNext);
  //disattivare le img a indice counterimage
  deActivatePic()
  //incrementare o decrementare il counter
  if (this.isNext){
    counterImages++;
    if (counterImages === carouselData.length) counterImages = 0;
    //attivare le img a indice counter
  } else {
    counterImages--;
    if (counterImages === -1) counterImages = carouselData.length -1;
  }
  //attivare le img a indice counter
  activatePic();
}

function autoslider(isNext) {
  if (isNext){
    counterImages++;
    if (counterImages === carouselData.length) counterImages = 0;
  } else {
    counterImages--;
    if (counterImages === -1) counterImages = carouselData.length -1;
  }
}

function activatePic() {
  document.getElementsByClassName('current-image')[counterImages].classList.add('active');
  document.getElementsByClassName('current-thumb')[counterImages].classList.add('active')
}
function deActivatePic() {
  document.getElementsByClassName('current-image')[counterImages].classList.remove('active');
  document.getElementsByClassName('current-thumb')[counterImages].classList.remove('active')
}
/*
function activateThumb() {
  document.getElementsByClassName('current-thumb')[counterThumb].classList.add('active')
}*/

function getTemplateSl (element) {
    const country = element.titolo;
    const text = element.descrizione;
    const photo = element.image;

    return `
    
      <div class="current-image">
        <img class="hide" src="${photo}" alt="${country}">
        <div class="text">
          <h2 class="title hide">${country}</h2>
          <p class="description hide">${text}</p>
        </div>
      </div>
    
    `
}

function getTemplateThumbs (element, index) {
  const country = element.titolo;
  const photo = element.image;
  return `
  <div class="current-thumb d-flex" onclick="chooseThumb(${index})">
    <img class="" src="${photo}" alt="${country}">
  </div>
  `
}

function chooseThumb (index){
  //console.log(index);
  deActivatePic();
  counterImages = index;
  activatePic();
}

setInterval(() => {

  if (!isMouseOver) {
    deActivatePic();
    autoslider (isNextDirection);
    activatePic();
  } 
}, 2500);