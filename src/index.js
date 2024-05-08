function refreshWeather(response){
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let weatherAppCity = document.querySelector("#weather-app-city");
  weatherAppCity.innerHTML = response.data.city;
  temperatureElement.innerHTML= Math.round(temperature);
}


function searchCity(city){
  let apiKey = `bbf4bdf8f1a79ed3fa97o6t0b5932918`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");