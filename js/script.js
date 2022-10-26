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
    image : 'argentina.jpg'
  },
  {
    titolo : 'Chile',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque',
    image : 'chile.jpg'
  },
  {
    titolo : 'Colombia',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image : 'colombia.jpg'
  },
  {
    titolo : 'Peru',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat',
    image : 'peru.jpg'
  },
  {
    titolo : 'Sweden',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image : 'sweden.jpg'
  }
];

const firstContainer = document.querySelector('.first-container');

//ciclo forEach di lettura
//console.log(`${element.titolo} e ${element.descrizione} e ${element.image}`);

carouselData.forEach((element) => {
  const country = element.titolo;
  const text = element.descrizione;
  const photo = element.image;
  const container = `
  <div class="container">
  
  <div class="slider">
      <img class="" src="img/${photo}" alt="Foto1">
      <div class="text">
        <h2 class="title">${country}</h2>
        <p class="description">${text}</p>
      </div>
  </div>

  <div class="h-carousel d-flex">
      <img class="" src="img/${photo}" alt="Foto1">
      <img class="" src="img/${photo}" alt="Foto2">
      <img class="" src="img/${photo}" alt="Foto3">
      <img class="" src="img/${photo}" alt="Foto4">
      <img class="" src="img/${photo}" alt="Foto5">
  
      <div class="btn left">&larr;</div>
      <div class="btn right">&rarr;</div>
  </div>
  
  </div>`
  
  
  firstContainer.innerHTML = container;
});



//container.innerHTML = carouselData;
//console.log(carouselData);