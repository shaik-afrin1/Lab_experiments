const apiKey = 'YOUR_API_KEY'; // <-- Replace this with your OpenWeatherMap API key!
const cityInput = document.getElementById('cityInput');
const fetchBtn = document.getElementById('fetchBtn');
const weatherResult = document.getElementById('weatherResult');
const errorMsg = document.getElementById('errorMsg');

// Fetch weather data for a city
async function fetchWeather(city) {
    errorMsg.textContent = '';
    weatherResult.innerHTML = '';
    if (!city) {
        errorMsg.textContent = "Please enter a city name.";
        return;
    }
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        if (response.ok && data.main) {
            localStorage.setItem("lastCity", city); // Save city
            displayWeather(data);
        } else {
            throw new Error(data.message || "City not found.");
        }
    } catch (err) {
        errorMsg.textContent = "Not found or network error: " + err.message;
    }
}

// Display weather info in the DOM
function displayWeather(data) {
    weatherResult.innerHTML = `
        <div class="weather-info">
            <span class="city">${data.name}, ${data.sys.country}</span><br>
            <span class="temp">${data.main.temp}&deg;C</span><br>
            <span class="desc">${data.weather[0].description}</span>
        </div>
    `;
}

// Event listeners
fetchBtn.addEventListener('click', () => {
    fetchWeather(cityInput.value.trim());
});
cityInput.addEventListener('keydown', e => {
    if (e.key === "Enter") fetchWeather(cityInput.value.trim());
});

// On page load, check localStorage and auto-fetch
window.onload = () => {
    const last = localStorage.getItem("lastCity");
    if (last) {
        cityInput.value = last;
        fetchWeather(last);
    }
};
