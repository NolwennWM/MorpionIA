

// const dark = document.querySelector("#darkTheme")
// dark.addEventListener("input", changedarkTheme)
// function changedarkTheme(){
//     document.body.classList.toggle("dark", dark.checked)


//     if(dark.checked){
//         document.documentElement.style.setProperty("--fond","#333")
//         document.documentElement.style.setProperty("--text","antiquewhite")
//         localStorage.setItem("theme", "dark")
//     }
//     else{
       
//         document.documentElement.style.setProperty("--text","#333")
//         document.documentElement.style.setProperty("--fond","antiquewhite")
//         localStorage.removeItem("theme")
    

// }
// }

// dark.checked = localStorage.getItem("theme") === "dark"
// changedarkTheme()




// console.log(localStorage.key(0));
// // localStorage.clear();





// // theme 2



// const pink = document.querySelector("#pinkTheme")
// pink.addEventListener("input", changePinkTheme)
// function changePinkTheme(){
//     document.body.classList.toggle("pink", pink.checked)


//     if(pink.checked){
//         document.documentElement.style.setProperty("#ff0088","#333")
//         document.documentElement.style.setProperty("--text","antiquewhite")
//         localStorage.setItem("theme", "pink")
//     }
//     else{
       
//         document.documentElement.style.setProperty("--text","#333")
//         document.documentElement.style.setProperty("#ff0088","antiquewhite")
//         localStorage.removeItem("theme")
    

// }
// }

// pink.checked = localStorage.getItem("theme") === "pink"
// changePinkTheme()




// console.log(localStorage.key(0));



// // theme 3





// const green = document.querySelector("#greenTheme")
// green.addEventListener("input", changeGreenTheme)
// function changeGreenTheme(){
//     document.body.classList.toggle("green", green.checked)


//     if(green.checked){
//         document.documentElement.style.setProperty("#00ff26","#333")
//         document.documentElement.style.setProperty("--text","antiquewhite")
//         localStorage.setItem("theme", "green")
//     }
//     else{
       
//         document.documentElement.style.setProperty("--text","#333")
//         document.documentElement.style.setProperty("#00ff26","antiquewhite")
//         localStorage.removeItem("theme")
    

// }
// }

// green.checked = localStorage.getItem("theme") === "green"
// changeGreenTheme()




// console.log(localStorage.key(0));
















const selectTheme = document.getElementById("selectTheme");

selectTheme.addEventListener("change", changerTheme);

function changerTheme() {
    const themeSelectionne = selectTheme.value;

    document.body.className = themeSelectionne;

    if (themeSelectionne === "sombre") {
        document.documentElement.style.setProperty("--fond", "#333");
        document.documentElement.style.setProperty("--texte", "antiquewhite");
        localStorage.setItem("theme", "sombre");
    } else if (themeSelectionne === "rose") {
        document.documentElement.style.setProperty("--fond", "#ff0088");
        document.documentElement.style.setProperty("--texte", "antiquewhite");
        localStorage.setItem("theme", "rose");
    } else if (themeSelectionne === "vert") {
        document.documentElement.style.setProperty("--fond", "valeur-de-couleur-verte");
        document.documentElement.style.setProperty("--texte", "valeur-de-couleur-texte");
        localStorage.setItem("theme", "vert");
    }
    localStorage.removeItem("fond")
    localStorage.removeItem("text")
}

const themeSauvegarde = localStorage.getItem("theme");
if (themeSauvegarde) {
    selectTheme.value = themeSauvegarde;
    changerTheme(); 
}





const randomColorButton = document.getElementById("randomColorButton");

randomColorButton.addEventListener("click", changerCouleursAleatoires);

function changerCouleursAleatoires() {
    const fondAleatoire = getRandomColor();
    const texteAleatoire = getRandomColor();

    document.documentElement.style.setProperty("--fond", fondAleatoire);
    document.documentElement.style.setProperty("--texte", texteAleatoire);
    localStorage.setItem("fond", fondAleatoire);
    localStorage.setItem("text", texteAleatoire);
    document.body.className = "defaut"
    localStorage.removeItem("theme")
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const themealeatoire = localStorage.getItem("fond");
const texteAleatoire = localStorage.getItem("text");
if (themealeatoire && texteAleatoire) {
    document.documentElement.style.setProperty("--fond", themealeatoire);
    document.documentElement.style.setProperty("--texte", texteAleatoire);
    document.body.className = "defaut"
}







const selectLangue = document.getElementById("selectLangue");
const titleElement = document.getElementsByClassName("title")[0];


selectLangue.addEventListener("change", changerLangue);
const languageTexts = {
    fr: "Bienvenue dans l'application",
    en: "Welcome to the application",
    es: "Bienvenido dentro aplicación",
};

const savedLanguage = localStorage.getItem("selectedLanguage");
if (savedLanguage) {
    selectLangue.value = savedLanguage;
}

function changerLangue() {
    const selectedLanguage = selectLangue.value;
    titleElement.textContent = languageTexts[selectedLanguage]; 
    localStorage.setItem("selectedLanguage", selectedLanguage);
}

changerLangue();






