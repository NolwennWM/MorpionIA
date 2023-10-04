function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let listeDeChiffres = [];
  
  for (let i = 0; i < 20; i++) {
    let chiffreAleatoire = getRandomInt(1, 100);
    listeDeChiffres.push(chiffreAleatoire);
  }
console.log("Liste de chiffres non triée :");
console.log(listeDeChiffres);

function triABulles(liste) {
  let n = liste.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (liste[i] > liste[i + 1]) {
        let temp = liste[i];
        liste[i] = liste[i + 1];
        liste[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}


triABulles(listeDeChiffres);

console.log("Liste de chiffres triée :");
console.log(listeDeChiffres);