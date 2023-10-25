document.getElementById('fetchButton').addEventListener('click', () => {
    fetch("https://api.thedogapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {      
            if (data && data.length > 0) {
                const imageUrl = data[0].url;
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = `<img src="${imageUrl}" alt="Image de chien">`;
                resultElement.style.maxHeight = "500px"
                resultElement.style.maxWidth = "500px"
            }
        })
        .catch(error => console.error("Erreur lors de la requête à l'API : ", error));
});