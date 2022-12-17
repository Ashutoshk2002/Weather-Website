const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f477058fbamsh030ef71995755ddp107531jsnd29666d88ba2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;

      console.log(response);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");


const getWeather2 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //Mumbai
      cloud_pct_mumbai.innerHTML = response.cloud_pct;
      temp_mumbai.innerHTML = response.temp;
      feels_like_mumbai.innerHTML = response.feels_like;
      humidity_mumbai.innerHTML = response.humidity;
      min_temp_mumbai.innerHTML = response.min_temp;
      max_temp_mumbai.innerHTML = response.max_temp;
      wind_speed_mumbai.innerHTML = response.wind_speed;
      wind_degrees_mumbai.innerHTML = response.wind_degrees;
      sunrise_mumbai.innerHTML = response.sunrise;
      sunset_mumbai.innerHTML = response.sunset;


      console.log(response);
    })
    .catch((err) => console.error(err));
};

const getWeather3 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //moscow
      cloud_pct_moscow.innerHTML = response.cloud_pct;
      temp_moscow.innerHTML = response.temp;
      feels_like_moscow.innerHTML = response.feels_like;
      humidity_moscow.innerHTML = response.humidity;
      min_temp_moscow.innerHTML = response.min_temp;
      max_temp_moscow.innerHTML = response.max_temp;
      wind_speed_moscow.innerHTML = response.wind_speed;
      wind_degrees_moscow.innerHTML = response.wind_degrees;
      sunrise_moscow.innerHTML = response.sunrise;
      sunset_moscow.innerHTML = response.sunset;


      console.log(response);
    })
    .catch((err) => console.error(err));
};

const getWeather4 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //Tokyo
      cloud_pct_Tokyo.innerHTML = response.cloud_pct;
      temp_Tokyo.innerHTML = response.temp;
      feels_like_Tokyo.innerHTML = response.feels_like;
      humidity_Tokyo.innerHTML = response.humidity;
      min_temp_Tokyo.innerHTML = response.min_temp;
      max_temp_Tokyo.innerHTML = response.max_temp;
      wind_speed_Tokyo.innerHTML = response.wind_speed;
      wind_degrees_Tokyo.innerHTML = response.wind_degrees;
      sunrise_Tokyo.innerHTML = response.sunrise;
      sunset_Tokyo.innerHTML = response.sunset;


      console.log(response);
    })
    .catch((err) => console.error(err));
};

const getWeather5 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //Berlin
      cloud_pct_berlin.innerHTML = response.cloud_pct;
      temp_berlin.innerHTML = response.temp;
      feels_like_berlin.innerHTML = response.feels_like;
      humidity_berlin.innerHTML = response.humidity;
      min_temp_berlin.innerHTML = response.min_temp;
      max_temp_berlin.innerHTML = response.max_temp;
      wind_speed_berlin.innerHTML = response.wind_speed;
      wind_degrees_berlin.innerHTML = response.wind_degrees;
      sunrise_berlin.innerHTML = response.sunrise;
      sunset_berlin.innerHTML = response.sunset;


      console.log(response);
    })
    .catch((err) => console.error(err));
};

const getWeather6 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //Canberra
      cloud_pct_canberra.innerHTML = response.cloud_pct;
      temp_canberra.innerHTML = response.temp;
      feels_like_canberra.innerHTML = response.feels_like;
      humidity_canberra.innerHTML = response.humidity;
      min_temp_canberra.innerHTML = response.min_temp;
      max_temp_canberra.innerHTML = response.max_temp;
      wind_speed_canberra.innerHTML = response.wind_speed;
      wind_degrees_canberra.innerHTML = response.wind_degrees;
      sunrise_canberra.innerHTML = response.sunrise;
      sunset_canberra.innerHTML = response.sunset;

      console.log(response);
    })
    .catch((err) => console.error(err));
};

getWeather2("Mumbai");
getWeather3("Moscow");
getWeather4("Tokyo");
getWeather5("Berlin");
getWeather6("Canberra");
