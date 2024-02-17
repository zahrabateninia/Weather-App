const apiKey= "c1f6ccd45ae9a74e6f120e0bc745a4b8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const loading = document.querySelector('.loading')
async function checkWeather(city){
    // add loading
    loading.style.display = 'block'
    document.querySelector('.card').style.display = 'none';
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    // close loading
    loading.style.display = 'none'
    document.querySelector('.card').style.display = 'block';
    if(response.status == 404){
        showErrorMsg()
        return;
    }

    const data = await response.json();
    updateUI(data)  
}

function showErrorMsg(){
    const errorMsg = document.querySelector(".error-msg")
    errorMsg.style.display = "block"
    document.querySelector('.weather').style.display = 'none';
}

const cityName = document.querySelector('.search input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', ()=> {
    checkWeather(cityName.value)
})

function updateUI(data){
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.description').innerHTML = data.weather[0].description;
    document.querySelector(".humidity-value").textContent = data.main.humidity + "%";
    document.querySelector(".windSpeed-value").textContent = data.wind.speed + "km/h";
    changeWeatherIconAndBg(data)
    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".error-msg").style.display = "none";
}

function changeWeatherIconAndBg(data){
    // based on weather condition change the icon
    const weatherIcon = document.querySelector(".weather-icon");
    const body = document.body;

    let backgroundImage;
    let weatherIconSrc;

    switch (data.weather[0].main) {
        case "Clouds":
            backgroundImage = "url(weatherImages/cloudy.jpg)";
            weatherIconSrc = "weatherImages/weather icons/cloudySunny.png";
            break;
        case "Clear":
            backgroundImage = "url(weatherImages/sunny.jpg)";
            weatherIconSrc = "weatherImages/weather icons/sunny.png";
            break;
        case "Rain":
            backgroundImage = "url(weatherImages/rainy.jpg)";
            weatherIconSrc = "weatherImages/weather icons/rainy.png";
            break;
        case "Drizzle":
            backgroundImage = "url(weatherImages/rainy.jpg)";
            weatherIconSrc = "weatherImages/weather icons/drizzle.png";
            break;
        case "Haze":
        case "Smoke":
        case "Dust":
            backgroundImage = "url(weatherImages/haze.jpg)";
            weatherIconSrc = "weatherImages/weather icons/mist.png";
            break;
        case "Snow":
            backgroundImage = "url(weatherImages/snow.jpg)";
            weatherIconSrc = "weatherImages/weather icons/snowy.png";
            break;
        case "Mist":
        case "Fog":
            backgroundImage = "url(weatherImages/mistFog.jpg)";
            weatherIconSrc = "weatherImages/weather icons/mist.png";
            break;
        case "Tornado":
            backgroundImage = "url(weatherImages/tornado.jpg)";
            weatherIconSrc = "weatherImages/weather icons/tornado.png";
            break;
        case "Thunderstorm":
            backgroundImage = "url(weatherImages/storm.jpg)";
            weatherIconSrc = "weatherImages/weather icons/stormy.png";
            break;
        case "Wind":
            backgroundImage = "url(weatherImages/windyClear.jpg)";
            weatherIconSrc = "weatherImages/weather icons/windy.png";
            break;
        default:
            break;
    }
    body.style.transition = "background-image 1.5s ease-in-out"; 
    body.style.backgroundImage = backgroundImage;
    weatherIcon.src = weatherIconSrc;
    

}