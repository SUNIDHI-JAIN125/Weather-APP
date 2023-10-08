const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32280bd2b3msh2922b8bc26522d0p17d554jsn6c597d45ee7e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


  const getWeather = async(city) => {
    cityName.innerHTML = city
try{
  let response= await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city, options);

     let data = await response.json();
     if(response.status === 400)
     {   
         cloud_pct.innerHTML = "0"
     temp.innerHTML = "0"
     feels_like.innerHTML = "0"
     humidity.innerHTML = "0"
     min_temp.innerHTML = "0"
     max_temp.innerHTML = "0"
     wind_speed.innerHTML = "0"
     wind_degrees.innerHTML = "0"
     sunrise.innerHTML = "0"
     sunset.innerHTML = "0" 
       return ;
     }
        
            console.log(data);
            cloud_pct.innerHTML = data.cloud_pct
            temp.innerHTML = data.temp
            feels_like.innerHTML = data.feels_like
            humidity.innerHTML = data.humidity
            min_temp.innerHTML = data.min_temp
            max_temp.innerHTML = data.max_temp
            wind_speed.innerHTML = data.wind_speed
            wind_degrees.innerHTML = data.wind_degrees
            sunrise.innerHTML = data.sunrise
            sunset.innerHTML = data.sunset
        } catch(error) {
          console.error('Error: ', error);
    }
};


submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if (city.value.trim()) {
        getWeather(city.value);
      } else {
        getWeather("Delhi");
      }
})


getWeather("Delhi");
// default weather of Delhi city










