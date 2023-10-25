let mots = [];
let motADeviner = "";
let motAffiche = "";
let erreurs = 0;
let lettresDisponibles = "abcdefghijklmnopqrstuvwxyz";
let maxErreurs = 6; 
let essaisManques = 0;
let context;
let canvas = document.getElementById('mon_canvas');

async function chargerMots() {
    try {
        const response = await fetch("mots.json"); 
        const data = await response.json();
        mots = data.mots;
    } catch (error) {
        console.error("Erreur de chargement du fichier JSON :", error);
    }
}

function demarrerPartie() {
    chargerMots().then(() => {
        motADeviner = mots[Math.floor(Math.random() * mots.length)];
        if (motADeviner) {
            motAffiche = "-".repeat(motADeviner.length);
            erreurs = 0;
            lettresDisponibles = "abcdefghijklmnopqrstuvwxyz";
            resetCanvas(); 
            document.getElementById("new-game-container").innerHTML = ""; 

            mettreAJourAffichage();
            creerBoutonsLettres();
            creerClavierVirtuel();
        } else {
            console.error("Aucun mot à deviner n'a été chargé.");
        }
    });
}

function mettreAJourAffichage() {
    document.getElementById("word-display").textContent = motAffiche;
    document.getElementById("error").textContent = erreurs;
}

function creerBoutonsLettres() {
    const conteneurBouton = document.getElementById("button-container");
    conteneurBouton.innerHTML = "";

    for (let i = 0; i < lettresDisponibles.length; i++) {
        const lettre = lettresDisponibles[i];
        const bouton = document.createElement("button");
        bouton.textContent = lettre;
        bouton.addEventListener("click", () => devinerLettre(lettre, bouton));
        conteneurBouton.appendChild(bouton);
    }
}

function creerClavierVirtuel() {
    document.addEventListener("keydown", (event) => {
        const lettre = event.key.toLowerCase();
        if (lettresDisponibles.includes(lettre)) {
            devinerLettre(lettre);
        }
    });
}

function resetCanvas() {
    if (!canvas) {
        alert("Impossible de récupérer le canvas");
    } else {
        context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    essaisManques = 0;
}

function devinerLettre(lettre, bouton) {
    if (motAffiche.includes(lettre)) {
        return;
    }

    if (motADeviner.includes(lettre)) {
        for (let i = 0; i < motADeviner.length; i++) {
            if (motADeviner[i] === lettre) {
                motAffiche = setCharAt(motAffiche, i, lettre);
            }
        }
    } else {
        erreurs++;
        updateHangman(erreurs);
    }

    lettresDisponibles = lettresDisponibles.replace(lettre, '');

    mettreAJourAffichage();
    bouton.classList.add("button-selected");
    bouton.disabled = true;

    if (motAffiche === motADeviner) {
        document.getElementById("result").textContent = "Vous avez gagné ! Le mot était '" + motADeviner + "'.";
        afficherMotSecret();
        proposerNouvellePartie();
    } else if (erreurs >= maxErreurs) {
        document.getElementById("result").textContent = "Vous avez perdu. Le mot était '" + motADeviner + "'.";
        afficherMotSecret();
        proposerNouvellePartie();
    }
}

function afficherMotSecret() {
    document.getElementById("word-display").textContent = motADeviner;
}

function proposerNouvellePartie() {
    const newGameContainer = document.getElementById("new-game-container");
    if (newGameContainer.childElementCount === 0) {
        const boutonNouvellePartie = document.createElement("button");
        boutonNouvellePartie.textContent = "Nouvelle partie";
        boutonNouvellePartie.addEventListener("click", demarrerPartie);
        newGameContainer.appendChild(boutonNouvellePartie);
    }
}

function setCharAt(str, index, char) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + char + str.substr(index + 1);
}

function updateHangman(erreurs) {
    essaisManques++;
    switch (essaisManques) {
        case 1:
            context.beginPath();
            context.lineCap = 'round';
            context.lineWidth = "10";
            context.lineJoin = 'round';
            context.strokeStyle = "rgb(23, 145, 167)";
            context.moveTo(35, 295);
            context.lineTo(5, 295);
            context.stroke();
            break;
        case 2:
            context.moveTo(20, 295);
            context.lineTo(20, 5);
            context.stroke();
            break;
        case 3:
            context.lineTo(200, 5);
            context.stroke();
            break;
        case 4:
            context.lineTo(200, 50);
            context.stroke();
            break;
        case 5:
            context.moveTo(20, 50);
            context.lineTo(70, 5);
            context.stroke();
            break;
        case 6:
            context.beginPath();
            context.fillStyle = "red";
            context.arc(200, 50, 20, 0, Math.PI * 2);
            context.fill();
            break;
        case 7:
            context.beginPath();
            context.strokeStyle = "red";
            context.moveTo(200, 50);
            context.lineTo(200, 150);
            context.stroke();
            break;
        case 8:
            context.beginPath();
            context.moveTo(200, 80);
            context.lineTo(160, 110);
            context.stroke();
            break;
        case 9:
            context.beginPath();
            context.moveTo(200, 80);
            context.lineTo(240, 110);
            context.stroke();
            break;
        case 10:
            context.beginPath();
            context.moveTo(200, 150);
            context.lineTo(180, 200);
            context.stroke();
            break;
        case 11:
            context.beginPath();
            context.moveTo(200, 150);
            context.lineTo(220, 200);
            context.stroke();
            context.beginPath();
            context.fillStyle = "rgb(23, 145, 167)";
            context.arc(200, 62, 16, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.fillStyle = "red";
            context.arc(200, 50, 20, 0, Math.PI * 2);
            context.fill();
            break;
        default:
            essaisManques = 0;
            context.clearRect(0, 0, 300, 300);
    }
}

demarrerPartie();
