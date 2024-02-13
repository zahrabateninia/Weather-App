const apiKey= "c1f6ccd45ae9a74e6f120e0bc745a4b8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Isfahan";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    const data = await response.json();
    // changeCardUI()
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.description').innerHTML = data.weather[0].description;
    document.querySelector('.humidity-value').innerHtml = data.main.humidity + "%";
    document.querySelector(".windSpeed-value").innerHtml = data.wind.speed + "km/h";

    console.log(data)
 
}

checkWeather()
