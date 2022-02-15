
//Je crée une fonction qui va englober tout le procéssus de création des bulles
const counterDisplay = document.querySelector('h3');

let counter = 0;

const bubbleMaker = () => {
      // Création d'une balise span pour contenir laa bulle
      const bubble = document.createElement("span");
      document.body.appendChild(bubble);
      bubble.classList.add('bubble')
      //Je donne une dimension à la bulle
      const size = Math.random() * 200 + 100 + "px";
      bubble.style.height = size;
      bubble.style.width = size;
      //Je régle le positionnement de la bulle
      bubble.style.top = Math.random() * 100 + 50 + "%"
      bubble.style.left = Math.random() * 100 + "%"
      const plusMinus = Math.random() > 0.5 ? 1 : -1
      //Je vais chercher à toucher ma variable css
      bubble.style.setProperty('--left', Math.random() * 100 + plusMinus + "%");

      //Faire disparaitre une bulle au click

      bubble.addEventListener('click', () => {

            counter++
            counterDisplay.textContent = counter;
            bubble.remove();
      })
      // Arreter les bulle au bout de 8s avec setTimeout
      setTimeout(() => {
            bubble.remove()
      }, 8000)


}
//Création de plusieurs bulles avec la methode setInterval
setInterval(bubbleMaker, 1000)

