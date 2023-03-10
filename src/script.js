//////////CITY INPUT//////////

function search(city) {
  let apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition); //fetch data from OpenWeather API so you can display the Weather condition
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  let humidity = Math.round(response.data.main.humidity);
  document.querySelector("#humidity").innerHTML = `${humidity}%`;
  let wind = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `${wind}km/h`;
  document.querySelector(
    "#description"
  ).innerHTML = `${response.data.weather[0].main}`;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value; //whatever value is typed in
  search(city);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", handleSubmit);

/////// GETTING CURRENT LOCATION ////////

function searchLocation(position) {
  let apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
  let lat = "position.coords.latitude";
  let lon = "position.coords.longitude";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  // this is an event
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#currentLocation-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

search("Manila"); // for initial display

/////////////////////DATE AND TIME////////////////////

let now = new Date();

let date = now.getDate();
let year = now.getFullYear();

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let day = days[now.getDay()]; // 0-6

let day = now.toLocaleString("default", { weekday: "long" });

// let months = [
//   "Jan",
//   "Feb",
//   "March",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// let month = months[now.getMonth()]; // 0-11

let month = now.toLocaleString("default", { month: "short" });
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${hours}:${minutes} | ${day} | ${month} ${date}, ${year}`;

//////////////////////CONVERSION////////////////////////

// function convertFarenheit(event) {
//   event.preventDefault();

//   let temperature = document.querySelector("#temperature");
//   temperature.innerHTML = `64`;
// }

// let farenheit = document.querySelector("#farenheit-conversion");
// farenheit.addEventListener("click", convertFarenheit);

// function convertCelsius(event) {
//   event.preventDefault();

//   let temperature = document.querySelector("#temperature");
//   temperature.innerHTML = `31`;
// }

// let celsius = document.querySelector("#celsius-conversion");
// celsius.addEventListener("click", convertCelsius);