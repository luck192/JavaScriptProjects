document.addEventListener("DOMContentLoaded", function(){
 
    const searchButton = document.querySelector(".searchicon");
    const searchBox= document.querySelector("#cityinput");
    const temperature = document.getElementById("temperature");
    const humidPercentage = document.getElementById("humidPercentage");
    const windSpeed = document.getElementById("windSpeed");
    const weathericon = document.getElementById("weathericon");
    const WeatherDescription = document.getElementById("WeatherDescription");
    const container = document.querySelector(".container");

    const city = document.getElementById("cityName");
    
    searchBox.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            searchButton.click();
        }
    })
    function validCityName(cityname){
        if(cityname.trim()===""){
            alert("city name should not be blank");
            return false;
        }
        const regex =/^[a-zA-Z\s]+$/;
        const Valid = regex.test( cityname) ;
        if(!Valid){
            alert("city name is not Valid");
        }
         return Valid;
    }
    async function checkWeather(cityname){
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;
        const apiKey = "&appid=4b47ca2faee65c5de918b673f1ab1074";

        try{
            searchButton.classList.add("loading");
       
            const response = await fetch(`${apiurl}${cityname}${apiKey}`);
             if(!response.ok ){
                throw new Error("weather fetch ni ho payaa");
             }
             const parsedData = await response.json();

             displayDataToUser(parsedData);
           
        }
        catch(error){
            console.log(" error:", error.message);
        }
        finally{
            searchButton.classList.remove("loading");
        }
       
        
    }
    function displayDataToUser(parsedData){
         let currTemp = Math.floor(parsedData.main.temp);
         temperature.textContent = `${currTemp}°c`;
         
         humidPercentage.textContent = `${parsedData.main.humidity}%`;

         windSpeed.textContent = `${parsedData.wind.speed}km/h`;

          if( parsedData.weather[0].main =="Clouds"){
             WeatherDescription.innerHTML = "Cloudy";
             container.style.boxShadow =` 20px 20px 80px  rgb(15, 4, 4)`;
             weathericon.src = "images/clouds.png"
          }
          else if( parsedData.weather[0].main =="Clear"){
             WeatherDescription.innerHTML = "Clear";
             container.style.boxShadow =`1px 1px 60px rgb(227, 162, 30) `;
             weathericon.src = "images/clear.png"
          }
          else if( parsedData.weather[0].main =="Rain"){
             WeatherDescription.innerHTML ="Rainy";
             container.style.boxShadow =`5px 5px 60px `;
             weathericon.src = "images/rain.png"
          }
         else if( parsedData.weather[0].main =="Drizzle"){
             WeatherDescription.innerHTML = "Drizzle"
             weathericon.src = "images/drizzle.png"
          }
         else if( parsedData.weather[0].main =="Mist"){
             WeatherDescription.innerHTML = "mist"
             weathericon.src = "images/mist.png"
          }
    }
    searchButton.addEventListener('click',function(){
    
       const cityName = searchBox.value;
       if( validCityName( cityName) ){
           city.textContent = cityName;
           checkWeather( cityName );
       }
      
    })
})