const apiKey= "c1f6ccd45ae9a74e6f120e0bc745a4b8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`)
    const data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.description').innerHTML = data.weather[0].description;
    document.querySelector(".humidity-value").textContent = data.main.humidity + "%";
    document.querySelector(".windSpeed-value").textContent = data.wind.speed + "km/h";
 
}

const cityName = document.querySelector('.search input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', ()=> {
    checkWeather(cityName.value)
})
