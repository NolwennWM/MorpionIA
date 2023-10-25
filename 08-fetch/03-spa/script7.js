'use strict'

const main = document.querySelector('main')
const routes = {
    "/" : "./page/home.html",
    "index7.html" : "./page/home.html",
    "/a%20propos" : "./page/a propos.html",
    "/contact" : "./page/contact.html",
    "/404" : "./page/404.html",
}
setLink(document)

window.history.pushState({}, "","/")
loadPage()
function setLink(parent)
{
    const tags = parent.querySelectorAll('a:not([href^="http"])')
    tags.forEach(a =>a.addEventListener("click", router))

}
function router(e)
{
    e.preventDefault()
    window.history.pushState({}, "", e.target.href)
    loadPage()
}

function loadPage() {
    const path = window.location.pathname;
    console.log(window.location);
    const route = routes[path] || routes[404];
    console.log(route);
    fetch(route).then(resp=>{
      if(!resp.ok) return;
      resp.text().then(data=>{
        main.innerHTML = data;
        setLink(main)
      })
    })
}
