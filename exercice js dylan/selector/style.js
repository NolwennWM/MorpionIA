"use strict"

const lis = document.getElementsByTagName("li");
console.log(lis,lis[0]);

lis[0].textContent = "marbre"

const ps = document.getElementsByClassName("step")
const p1 = document.getElementsByClassName("marche1")
console.log(ps,p1)

const h1 = document.getElementById("mainintitle");
console.log(h1);


const p2 = document.querySelector(".marche2");
console.log(p2);

const lis2 = document.querySelectorAll("footer li")
console.log(lis2, lis2[0])


const header = document.querySelector("header")
const h = header.querySelector('h1')


console.log(header.nextElementSibling)
console.log(header.nextSibling)
console.log(lis2[2].previousElementSibling)
console.log(header.children)
console.log(lis2[2].parentElement, header.parentElement)
console.log(lis2[2].closest("footer"))



header.append(lis2[0])
lis2[2].remove()
console.log(lis2[2])


header.removeChild(h)