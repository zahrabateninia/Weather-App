const apiKey= "c1f6ccd45ae9a74e6f120e0bc745a4b8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city){
    // add loading
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    // close loading
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
    const weatherIcon = document.querySelector(".weather-icon")

    if( data.weather[0].main == "Clouds"){
        document.body.style.backgroundImage = "url(weatherImages/cloudy.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/cloudySunny.png"
    }
    else if(data.weather[0].main == "Clear"){
        document.body.style.backgroundImage = "url(weatherImages/sunny.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/sunny.png"
    }
    else if(data.weather[0].main == "Rain"){
        document.body.style.backgroundImage = "url(weatherImages/rainy.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/rainy.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        document.body.style.backgroundImage = "url(weatherImages/rainy.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/drizzle.png"
    }
    else if(data.weather[0].main == "Haze"|| data.weather[0].main == "Smoke" || data.weather[0].main == "Dust"){ 
        // haze: dust and smoke in the air
        document.body.style.backgroundImage = "url(weatherImages/haze.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        document.body.style.backgroundImage = "url(weatherImages/snow.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/snowy.png"
    }
    else if(data.weather[0].main == "Mist" || data.weather[0].main == "Fog"){
        document.body.style.backgroundImage = "url(weatherImages/mistFog.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/mist.png"
    }
    else if(data.weather[0].main == "Tornado"){
        document.body.style.backgroundImage = "url(weatherImages/tornado.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/tornado.png"
    }
    else if(data.weather[0].main == "Thunderstorm"){
        document.body.style.backgroundImage = "url(weatherImages/storm.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/stormy.png"
    }
    else if(data.weather[0].main == "Wind"){
        document.body.style.backgroundImage = "url(weatherImages/windyClear.jpg)"
        document.body.style.backgroundSize = "cover"
        weatherIcon.src = "weatherImages/weather icons/windy.png"
    }
    
    
    
    
    

}