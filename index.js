//Get them from
const form = document.getElementById("form");
const LatitudeInput = document.getElementById("latitude");
const LongitudeInput = document.getElementById("longitude");
const result1 = document.getElementById("result");
const aqiResult = document.getElementById("AQI");
const COResult = document.getElementById("CO");
const NO2Result = document.getElementById("NO2");
const O3Result = document.getElementById("O3");
const PM2Result = document.getElementById("PM2");
const PM10Result = document.getElementById("PM10");
const SO2Result = document.getElementById("SO2");

//when submit is clicked this will happen
form.addEventListener("submit", (event) => {
  //to prevent default settings
  event.preventDefault();

  //store values here using .vaule
  const latitude = LatitudeInput.value;
  const longitude = LongitudeInput.value;

  //API url and key and gets lat, lon by ${}
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=b53cff135a56178c33f88448a32074b5`;

  //Will fetch url and get the data
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      //will print each data based on the documentation
      const airQualityData = result.list[0];
      aqiResult.textContent = `${airQualityData.main.aqi}`;
      COResult.textContent = `${airQualityData.components.co}`;
      NO2Result.textContent = `${airQualityData.components.no2}`;
      O3Result.textContent = `${airQualityData.components.o3}`;
      PM2Result.textContent = `${airQualityData.components.pm2_5}`;
      PM10Result.textContent = `${airQualityData.components.pm10}`;
      SO2Result.textContent = `${airQualityData.components.so2}`;

      // Display the results when clicked
      result1.style.display = "flex";
    });
});
