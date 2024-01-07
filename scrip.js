// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '664361ccdbmsh1b8eaa17ea0fe44p1d1d97jsn7c523dba12ef',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    CityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Bad response from server: ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            if (!response) {
                throw new Error("Response is undefined");
            }

            const unixTimestamp = response.sunset;
            const sunsetTime = new Date(unixTimestamp * 1000);
            const formattedSunsetTime = sunsetTime.toLocaleTimeString();

            const unixTimestamp2 = response.sunrise;
            const sunriseTime = new Date(unixTimestamp2 * 1000);
            const formattedSunriseTime2 = sunriseTime.toLocaleTimeString();


            
            // Update the HTML element

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
            sunrise.innerHTML =formattedSunriseTime2;
            sunset.innerHTML = formattedSunsetTime;
        })
        .catch(err => {
            // Handle errors and generate alert
            console.error(err);
            alert("Error fetching weather data");
        });
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Sangola");

function citys(city, obj) {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            const unixTimestamp = response.sunset;
            const sunsetTime = new Date(unixTimestamp * 1000);
            const formattedSunsetTime = sunsetTime.toLocaleTimeString();

            const unixTimestamp2 = response.sunrise;
            const sunriseTime = new Date(unixTimestamp2 * 1000);
            const formattedSunriseTime2 = sunriseTime.toLocaleTimeString();
            obj.innerHTML = `
        <th scope="row" class="text-start">${city}</th>
        <td>${response.temp} <sup><b>°C</b></sup></td>
        <td>${response.feels_like}</td>
        <td>${response.humidity}%</td>
        <td>${response.min_temp}</td>
        <td>${response.max_temp}</td>
        <td>${response.wind_speed}</td>
        <td>${response.wind_degrees}</td>
        <td>${formattedSunriseTime2}</td>
        <td>${formattedSunsetTime}</td>
        `
            // cloud_pct.innerHTML = response.cloud_pct;
        })
        .catch(err => console.error(err));
}
citys("Mumbai", mumbai);
citys("Pune", pune);
citys("Sangli", sangli);
citys("Sangli", sangli);
citys("Bengaluru", banglore);