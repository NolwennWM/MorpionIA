"use strict"



const form = document.querySelector("form")

form.addEventListener("submit", saveData)

function saveData(e)
{
    e.preventDefault()
    const data = new FormData(form)
    // console.log(data);
    const user = {};
    data.forEach((value, name) => {
        user[name] = value

    }
)
console.log(user, typeof user);
showUser(user)
const strUser = JSON.stringify(user)
console.log(strUser, typeof strUser);
localStorage.setItem("user" ,strUser)
}



function showUser(u) {
    const h1 = document.querySelector('h1')
    h1.textContent = `je suis ${u.prenom}, ${u.age} ans !`
    
}

const userString = localStorage.getItem("user")
if(userString){

    console.log(userString, typeof userString);
    const user = JSON.parse(userString)
    console.log(user, typeof user);
    showUser(user)
}
