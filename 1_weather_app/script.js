const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const ville = document.getElementById('city');
const clearIcon = document.querySelector('.clear-icon')
function getWeatherData() {
    const APIKey = '166472416bdbf564b04d6b39c02e5558';
    const city = searchInput.value;

    if (city === '') return;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${APIKey}`
    )
        .then(response => response.json())
        .then(json => {
        if (json.cod === '404') {
            error404.innerText = 'Aucune ville trouvée';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            return;
        }
        

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
            image.src = 'images/clear.png';
            break;

            case 'Rain':
            image.src = 'images/rain.png';
            break;

            case 'Snow':
            image.src = 'images/snow.png';
            break;

            case 'Clouds':
            image.src = 'images/cloud.png';
            break;

            case 'Haze':
            image.src = 'images/mist.png';
            break;

            default:
            image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        container.style.height = '590px';
        weatherDetails.style.display = "flex"
    });
}

search.addEventListener('click', getWeatherData);

// Permet de valdier avec la touche ENTER
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        getWeatherData();
    }
});

// Efface l'input
clearIcon.addEventListener('click', () => {
    searchInput.value = '';
})
