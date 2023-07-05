const input = document.getElementById("input");
const url = "//api.openweathermap.org/data/2.5/weather?";
const apiKey = "6067a70163901b15d5ce9b69930a8362";
const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

function getCity(e) {
  if (e.keyCode == "13") {
    let cityName = input.value;
    getResult(cityName);
  }
}

const getResult = (cityName) => {
  let query = `${url}q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;

  fetch(query)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      city.innerText = `${data.name} , ${data.sys.country}`;
      temperature.innerText = `${Math.round(data.main.temp)}°C`;
      humidity.innerText = `${data.main.humidity}%`;
      wind.innerText = `${data.wind.speed}`;
    });
};

// EventListener
input.addEventListener("keypress", getCity);
