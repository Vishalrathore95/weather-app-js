const apiKey = "c0c43f138a85cd043e6850d4904a531b"; // Replace with your OpenWeatherMap API key
let city = ""; // Initialize with an empty string

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const apiUrlWithCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrlWithCity);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} KM/h`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Add an event listener to the search button
searchbtn.addEventListener("click", () => {
    city = searchbox.value; // Update the city variable with user input
    checkWeather(city);
});

// Initial call to checkWeather with the default city
checkWeather();
