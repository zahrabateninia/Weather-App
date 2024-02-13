const apiKey= "c1f6ccd45ae9a74e6f120e0bc745a4b8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Isfahan";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)


}

checkWeather()
