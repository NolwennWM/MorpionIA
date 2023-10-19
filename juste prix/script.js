document.addEventListener('DOMContentLoaded', function () {
    const animationContainer = document.getElementById('animationContainer');
    const loadingBarContainer = document.getElementById('loadingBarContainer');
    const loadingBar = document.getElementById('loadingBar');
    const jeuContainer = document.getElementById('jeuContainer');
    const objetADeviner = document.getElementById('objetADeviner');
    const messageZone = document.getElementById('messageZone');
    const propositionInput = document.getElementById('proposition');
    const validerButton = document.getElementById('valider');
    const recommencerButton = document.getElementById('recommencer');
    const winGif = document.getElementById('winGif');
    const looserGif = document.getElementById('looserGif');

    const images = ["objet1.jpg", "objet2.jpg", "objet3.jpg", "objet4.jpg", "objet5.jpg", "objet6.jpg","objet7.jpg","objet8.jpg"];
    let imageIndex = 0; 

    function afficherImageActuelle() {
        objetADeviner.src = images[imageIndex];
    }

    function afficherImageAleatoire() {
        
        imageIndex = Math.floor(Math.random() * images.length);
        afficherImageActuelle();
    }

    afficherImageAleatoire();

  
    setTimeout(function () {
        animationContainer.style.display = 'none';
        jeuContainer.style.display = 'block';
        chargerJeu();
    }, 3000);

    const dureeChargement = 2000; 
    const interval = 20; 
    let tempsEcoule = 0;

    function miseAJourBarre() {
        tempsEcoule += interval;
        const pourcentage = (tempsEcoule / dureeChargement) * 100;
        loadingBar.style.width = pourcentage + '%';

        if (tempsEcoule < dureeChargement) {
            requestAnimationFrame(miseAJourBarre);
        } else {
            loadingBarContainer.style.display = 'none';
        }
    }

    requestAnimationFrame(miseAJourBarre);

   
    function chargerJeu() {
       
        let nombreSecret = Math.floor(Math.random() * 100) + 1;
        console.log(nombreSecret);
        let nombreEssais = 7; 
        let essaisRestants = nombreEssais;
     

     
        function comparerProposition() {
            const proposition = parseInt(propositionInput.value, 10);

            if (isNaN(proposition) || proposition < 1 || proposition > 100) {
                messageZone.textContent = 'Choisissez un prix entre 1 et 100€..';
              
            } else {
                nombreEssais--;

                if (proposition === nombreSecret) {
                    messageZone.textContent = `Félicitations ! Vous avez trouvé le prix ${nombreSecret}€`;
                    validerButton.disabled = true;
                    recommencerButton.style.display = 'block';
                    winGif.style.display = 'block'; 
                } else if (proposition < nombreSecret) {
                    messageZone.textContent = 'Le prix secret est plus grand.';
                } else {
                    messageZone.textContent = 'Le prix secret est plus petit.';
                }

                if (nombreEssais > 0) {
                    essaisRestants = nombreEssais;
                    messageZone.textContent += ` Il vous reste ${essaisRestants} essais.`;
                } else {
                    messageZone.textContent += ` Désolé, vous avez utilisé tous vos essais. Le prix secret était ${nombreSecret} €.`;
                    validerButton.disabled = true;
                    recommencerButton.style.display = 'block';
                    looserGif.style.display = 'block';
                }
            }
        }

        validerButton.addEventListener('click', comparerProposition);

        function recommencerJeu() {
            afficherImageAleatoire();
            nombreSecret = Math.floor(Math.random() * 100) + 1;
            nombreEssais = 7;
            essaisRestants = nombreEssais;
            propositionInput.value = '';
            messageZone.textContent = 'Choisissez un nombre entre 1 et 100.';
            validerButton.disabled = false;
            recommencerButton.style.display = 'none';
            winGif.style.display = 'none';
            looserGif.style.display = 'none'; 
        }

        recommencerButton.addEventListener('click', recommencerJeu);
    }
});



