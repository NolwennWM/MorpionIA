"use strict"
const url ="https://api.thecatapi.com/v1/images/upload"
const api_key = "469f2c7f-9aad-4623-8e7a-d72c11a91b18"
const form = document.querySelector('form')
const resulte = document.querySelector('.result')
form.addEventListener("submit",uploadDog)
function uploadDog(e){
    e.preventDefault()
    const formdata = new FormData(form)
    console.log("chargement en cours !!!")
    resulte.textContent = "chargement en cours !!"
    fetch(url, {
        method:"post",
        headers: {"x-api-key":api_key},
        body: formdata
    }).then(checkReponse)
}
function checkReponse(result){
    console.log("chagement terminer !!!")
    resulte.textContent = "chargement terminer !!!"
    if (result.ok){
result.json().then(data=>{
    console.log(data ,data.url);
    resulte.innerHTML += `<img src="${data.url}" alt="dog">`
})
    }
    else
    {
        console.log(result.statusText);
        resulte.textContent = result.statusText
    }
   
}