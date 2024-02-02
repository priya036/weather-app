const apiKey = '97a71b81b32952501c20b09067acc961';
const locationForm = document.querySelector('#location-form');
const locationInput = document.querySelector('#location-input');
const weatherInfo = document.querySelector('#weather-info');

locationForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = locationInput.value;
  getWeatherData(location);
});

async function getWeatherData(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  displayWeatherData(data);
}

function displayWeatherData(data) {
  const weatherInfoHtml = `
    <h2>Current weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Conditions: ${data.weather[0].description}</p>
    <p>Wind speed: ${data.wind.speed} km/h</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
  weatherInfo.innerHTML = weatherInfoHtml;
  weatherInfo.style.display = 'block';
}


// const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);