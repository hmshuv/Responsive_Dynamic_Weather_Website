const apiKey = "d0ff83b0f3b34d47c8efbde11f209879";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   var data = await response.json();

    

document.querySelector(".City").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


if(data.weather[0].main == "Clouds"){
weatherIcon.src = "image/cloud.png";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "image/clear.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src = "image/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
weatherIcon.src = "image/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src = "image/mist.png";
}

document.querySelector(".weather").style.display = "block";




    


}

searchBtn.addEventListener("click", ()=>{
    
    checkWeather(searchBox.value);
});

checkWeather(); 