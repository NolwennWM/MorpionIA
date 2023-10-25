  document.addEventListener("DOMContentLoaded", function() {
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const fetchDataButton = document.getElementById("fetchData");
    
    const apiKey = "15eea983aca61125d385c93797f9195a";
  


    fetchDataButton.addEventListener("click", function() {
        const lat = 50.5940167;
        const lon = 3.1360448;
         const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`; 
        fetch(apiUrl) 
            .then(response => response.json())
            .then(data => {
                console.log(data);
             
            
                const temperatureKelvin = data.current.temp
                const humidity = data.current.humidity;
                const temperatureCelsius = temperatureKelvin - 273.15
                temperatureElement.textContent = temperatureCelsius.toFixed(0) + "°C"; 
                humidityElement.textContent = humidity + "%";
            })
            .catch(error => {
                console.error("Erreur de récupération des données météorologiques :", error);
            });
    });
});