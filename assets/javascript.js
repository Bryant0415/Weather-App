var button = document.querySelector(".submit");
var currentCitySearch = document.querySelector(".cityInput");
var currentCityDisplay = document.querySelector(".currentCity");
var currentTempDisplay = document.querySelector(".currentTemp");
var currentWindDisplay = document.querySelector(".currentWind");
var currentHumidityDisplay = document.querySelector(".currentHumidity");
var currentDate = new Date();
var currentDateDisplay = (currentDate.getMonth()+1)+'-'+(currentDate.getDate())+'-'+currentDate.getFullYear();
document.getElementById('currentDate').innerHTML = currentDateDisplay;
var api = "49918547cb3d6d701361bd5e61e8f18b";
var userInput = document.querySelector('#userInput')
var searchHistoryArr = [];



//WHEN I search for a city
//THEN I am presented with current and future conditions for that city

button.addEventListener("click", function citySearch () {
  var displayBox = document.getElementById('columnRight');
  displayBox.style.display = 'flex';
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+currentCitySearch.value+"&units=imperial&appid=49918547cb3d6d701361bd5e61e8f18b"
  ) 
    .then((response) => response.json())
    .then((data) => {
   var currentCityDisplayValue = data['name']
   var currentTempDisplayValue = data['main']['temp']
    var currentWindDisplayValue = data['wind']['speed']
    var currentHumidityDisplayValue = data['main']['humidity'] 
   

//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date,  the temperature, the humidity, and the the wind speed

    currentCityDisplay.innerHTML = currentCityDisplayValue
    currentTempDisplay.innerHTML = "Temp: " + currentTempDisplayValue + "&#x2109;"
    currentWindDisplay.innerHTML = "Wind: " + currentWindDisplayValue + "MPH"
    currentHumidityDisplay.innerHTML = "Humidity: " + currentHumidityDisplayValue + "%"
    
   
    //That city is added to the search history

    var li = document.createElement('li')
    li.innerHTML = currentCityDisplayValue
    userInput.appendChild(li)
    searchHistoryArr.push(currentCityDisplayValue)
    localStorage.setItem('savedSearch', searchHistoryArr)
    
    });
});

window.addEventListener('load', (event) => {
    li = document.createElement('li')
    li.innerHTML = localStorage.getItem('savedSearch')
    userInput.appendChild(li)
});

//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, the temperature, the wind speed, and the humidity

button.addEventListener("click", function () {
  var displayRow2 = document.getElementById('row2');
  var displayRow3 = document.getElementById('row3');
  displayRow2.style.display = 'flex';
  displayRow3.style.display = 'flex';
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q="+currentCitySearch.value+"&units=imperial&appid=49918547cb3d6d701361bd5e61e8f18b"
  )
    .then((response) => response.json())
    .then((data) =>{
      var forecastDateDisplayValue = data['list'][0]['dt']
      var forecast1Date = new Date(forecastDateDisplayValue*1000)
      forecastDate1.innerHTML = forecast1Date.toDateString()

      var forecastDateDisplayValue = data['list'][8]['dt']
      var forecast2Date = new Date(forecastDateDisplayValue*1000)
      forecastDate2.innerHTML = forecast2Date.toDateString()

      var forecastDateDisplayValue = data['list'][16]['dt']
      var forecast3Date = new Date(forecastDateDisplayValue*1000)
      forecastDate3.innerHTML = forecast3Date.toDateString()

      var forecastDateDisplayValue = data['list'][24]['dt']
      var forecast4Date = new Date(forecastDateDisplayValue*1000)
      forecastDate4.innerHTML = forecast4Date.toDateString()

      var forecastDateDisplayValue = data['list'][32]['dt']
      var forecast5Date = new Date(forecastDateDisplayValue*1000)
      forecastDate5.innerHTML = forecast5Date.toDateString()

      var forecastTemp1Value = data['list'][0]['main']['temp']
      var forecastWind1Value = data['list'][0]['wind']['speed']
      var forecastHumidity1Value = data['list'][0]['main']['humidity']
      forecastTemp1.innerHTML = "Temp: " + forecastTemp1Value + "&#x2109;"
      forecastWind1.innerHTML = "Wind: " + forecastWind1Value + "MPH"
      forecastHumidity1.innerHTML = "Humidity: " + forecastHumidity1Value + "%"

      
      var forecastTemp2Value = data['list'][8]['main']['temp']
      var forecastWind2Value = data['list'][8]['wind']['speed']
      var forecastHumidity2Value = data['list'][8]['main']['humidity']
      forecastTemp2.innerHTML = "Temp: " + forecastTemp2Value + "&#x2109;"
      forecastWind2.innerHTML = "Wind: " + forecastWind2Value + "MPH"
      forecastHumidity2.innerHTML = "Humidity: " + forecastHumidity2Value + "%"

      
      var forecastTemp3Value = data['list'][16]['main']['temp']
      var forecastWind3Value = data['list'][16]['wind']['speed']
      var forecastHumidity3Value = data['list'][16]['main']['humidity']
      forecastTemp3.innerHTML = "Temp: " + forecastTemp3Value + "&#x2109;"
      forecastWind3.innerHTML = "Wind: " + forecastWind3Value + "MPH"
      forecastHumidity3.innerHTML = "Humidity: " + forecastHumidity3Value + "%"

      
      var forecastTemp4Value = data['list'][24]['main']['temp']
      var forecastWind4Value = data['list'][24]['wind']['speed']
      var forecastHumidity4Value = data['list'][24]['main']['humidity']
      forecastTemp4.innerHTML = "Temp: " + forecastTemp4Value + "&#x2109;"
      forecastWind4.innerHTML = "Wind: " + forecastWind4Value + "MPH"
      forecastHumidity4.innerHTML = "Humidity: " + forecastHumidity4Value + "%"

      
      var forecastTemp5Value = data['list'][32]['main']['temp']
      var forecastWind5Value = data['list'][32]['wind']['speed']
      var forecastHumidity5Value = data['list'][32]['main']['humidity']
      forecastTemp5.innerHTML = "Temp: " + forecastTemp5Value + "&#x2109;"
      forecastWind5.innerHTML = "Wind: " + forecastWind5Value + "MPH"
      forecastHumidity5.innerHTML = "Humidity: " + forecastHumidity5Value + "%"


    });

    
});





//an icon representation of weather conditions,
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city