// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   let listeDeChiffres = [];

//   for (let i = 0; i < 20; i++) {
//     let chiffreAleatoire = getRandomInt(1, 100);
//     listeDeChiffres.push(chiffreAleatoire);
//   }
// console.log("Liste de chiffres non triée :");
// console.log(listeDeChiffres);

// function triABulles(liste) {
//   let n = liste.length;
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (liste[i] > liste[i + 1]) {
//         let temp = liste[i];
//         liste[i] = liste[i + 1];
//         liste[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// triABulles(listeDeChiffres);

// console.log("Liste de chiffres triée :");
// console.log(listeDeChiffres);

"use strict";
console.log(document);
console.dir(document);

const h = document.createElement("header");
console.log(h);
const m = document.createElement("main");
const f = document.createElement("footer");

h.innerHTML = "<h1> super site en js </h1>";
f.innerHTML = `<ul> <li>menu1</li> <li>menu2</li> <li>menu3</li> </ul>`;
console.log(h, f);

console.log(document.body);

if (document.body) {
  document.body.append(h, m, f);
}

for (let i = 0; i < 5; i++) {
  const p = document.createElement("p");

  p.textContent = `<strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat voluptatibus corporis aliquam natus, quia, harum eveniet commodi asperiores odit, est eligendi id fuga debitis voluptates doloribus qui necessitatibus doloremque excepturi
`;
  m.appendChild(p);
}





const d = document.createElement("div");
console.log(d);
if (document.body) {
  document.body.append(d);


 
  let h = document.createElement("h2");
  let a = document.createTextNode("sante")
  d.append(a);


  const p = document.createElement("p");

  p.textContent = `<strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat voluptatibus corporis aliquam natus, quia, harum eveniet commodi asperiores odit, est eligendi id fuga debitis voluptates doloribus qui necessitatibus doloremque excepturi
`;
  d.appendChild(p);
}

var btn = document.createElement("button");  
var btn1 = document.createElement("button");       
 let b = document.createTextNode("CLICK ME");       
 let z = document.createTextNode("CLICK ME"); 
btn.append(b);
btn1.append(z);                                
d.append(btn,btn1);


