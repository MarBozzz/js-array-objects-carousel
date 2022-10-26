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
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat odit illo voluptas? Reiciendis aperiam est, quia impedit illum atque reprehenderit obcaecati libero at',
    image : 'img/argentina.jpg'
  },
  {
    titolo : 'Chile',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat odit illo voluptas? Reiciendis aperiam est, quia impedit illum atque reprehenderit obcaecati libero at',
    image : 'img/chile.jpg'
  },
  {
    titolo : 'Colombia',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat odit illo voluptas? Reiciendis aperiam est, quia impedit illum atque reprehenderit obcaecati libero at',
    image : 'img/colombia.jpg'
  },
  {
    titolo : 'Peru',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat odit illo voluptas? Reiciendis aperiam est, quia impedit illum atque reprehenderit obcaecati libero at',
    image : 'img/peru.jpg'
  },
  {
    titolo : 'Sweden',
    descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem quaerat odit illo voluptas? Reiciendis aperiam est, quia impedit illum atque reprehenderit obcaecati libero at',
    image : 'img/sweden.jpg'
  }
];


//ciclo forEach di lettura
carouselData.forEach((element) => {
  console.log(`${element.titolo} e ${element.descrizione} e ${element.image}`);
});

const container = document.querySelector('.container');

