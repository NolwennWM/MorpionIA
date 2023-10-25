function updateContentByLang(lang) {
    const langDataUrl = 'langue.json';
    fetch(langDataUrl)
        .then(response => response.json())
        .then(data => {
            const content = data[lang];
            console.log(lang);
            document.getElementById('h1').textContent = content.h1;
            document.getElementById('p').textContent = content.p;
        })
        .catch(error => console.error('Erreur de chargement du fichier JSON : ', error));
}
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    updateContentByLang(selectedLang);
   
});
