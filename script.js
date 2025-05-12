// Create All Read Elements In Variable

const userLocation = document.getElementById('userLocation');
const convertor = document.getElementById('convertor');
const searchButton = document.querySelector('.button');
const weatherIcon = document.querySelector('.weatherIcon');
const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');
const description = document.querySelector('.description');
const date = document.querySelector('.date');
const city = document.querySelector('.city');


const Hvalue = document.getElementById('Hvalue');
const Wvalue = document.getElementById('Wvalue');
const SRvalue = document.getElementById('SRvalue');
const SSvalue = document.getElementById('SSvalue');
const TMIvalue = document.getElementById('TMIvalue');
const TMAvalue = document.getElementById('TMAvalue');
const Pvalue = document.getElementById('Pvalue');
const LAvalue = document.getElementById('LAvalue');
const LOvalue = document.getElementById('LOvalue');

const WEATHER_API_KEY = "62e08acdf74856601b9ba2ae1aa0e7a4";
const WEATHER_DATA_FETCH = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}&q=`;

// // Create a logic for one location details Show
// const startProgramShow = userLocation.innerText = "Mathura"

// // Fetch Data For openweather map Api key  
// fetch(WEATHER_DATA_FETCH + startProgramShow)
// .then((response) => response.json())
// .then((data) => {
//     // create a weather according to location temperature using openweather api data
//     weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
//     // Show Data to WebBrowser
//     temperature.innerHTML = data.main.temp;
//     feelsLike.innerHTML = "Feels like " + data.main.feels_like;
//     description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp;` +data.weather[0].description;
//     const options = {
//         weekday : "long",
//         month : "long",
//         day : "numeric",
//         hour : "numeric",
//         minute : "numeric",
//         hour12 : true,
//     }
//     date.innerHTML = getLongFormatDateTime(data.dt, data.timezone, options);;
//     city.innerHTML = `${data.name} ,${data.sys.country}`;   

    
//     Hvalue.innerHTML = Math.round(data.main.humidity)+ "<span>%</span>";
//     Wvalue.innerHTML = Math.round(data.wind.speed)+ "<span>m/s</span>";
//     const options1 = {
//         hour : "numeric",
//         minute : "numeric",
//         hour12 : true,
//     };
//     SRvalue.innerHTML = getLongFormatDateTime(data.sys.sunrise, data.timezone, options1);
//     SSvalue.innerHTML = getLongFormatDateTime(data.sys.sunset, data.timezone, options1);;
//     TMIvalue.innerHTML = data.main.temp_min;
//     TMAvalue.innerHTML = data.main.temp_max;
//     Pvalue.innerHTML = data.main.pressure+ "<span>hPa</span>";
//     LAvalue.innerHTML = data.coord.lat;
//     LOvalue.innerHTML = data.coord.lon;
// });

// // Create a Event Listner For Search Button And Use Search All Location Data
// searchButton.addEventListener('click', () => {
//     // Fetch Data For Locations
//     // create a weather according to location temperature using openweather api data
//     fetch(WEATHER_DATA_FETCH + userLocation.value)
//     .then((response) => response.json())
//     .then((data) => {
//         // Show Data For WebBrowser
//         weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
//         temperature.innerHTML = data.main.temp;
//         feelsLike.innerHTML = "Feels like " + data.main.feels_like;
//         description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp;` +data.weather[0].description;
//         const options = {
//             weekday : "long",
//             month : "long",
//             day : "numeric",
//             hour : "numeric",
//             minute : "numeric",
//             hour12 : true,
//         }
//         date.innerHTML = getLongFormatDateTime(data.dt, data.timezone, options);;
//         city.innerHTML = `${data.name} ,${data.sys.country}`;


//         Hvalue.innerHTML = Math.round(data.main.humidity)+ "<span>%</span>";
//         Wvalue.innerHTML = Math.round(data.wind.speed)+ "<span>m/s</span>";
//         const options1 = {
//             hour : "numeric",
//             minute : "numeric",
//             hour12 : true,
//         };
//         SRvalue.innerHTML = getLongFormatDateTime(data.sys.sunrise, data.timezone, options1);
//         SSvalue.innerHTML = getLongFormatDateTime(data.sys.sunset, data.timezone, options1);;
//         TMIvalue.innerHTML = data.main.temp_min;
//         TMAvalue.innerHTML = data.main.temp_max;
//         Pvalue.innerHTML = data.main.pressure+ "<span>hPa</span>";
//         LAvalue.innerHTML = data.coord.lat;
//         LOvalue.innerHTML = data.coord.lon;
//     });    
// });

// Create for short code for fetch data using if-else condition
let locationToFetch;

// Check if the input box is empty or read
if (userLocation.value === "") {
    locationToFetch = "Mathura";
} else {
    locationToFetch = userLocation.value;
}

// Function to fetch and update weather data
function fetchWeather(location) {
    fetch(WEATHER_DATA_FETCH + location)
        .then((response) => response.json())
        .then((data) => {
            // Show Data in WebBrowser
            weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
            temperature.innerHTML = data.main.temp;
            feelsLike.innerHTML = "Feels like " + data.main.feels_like;
            description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp;` + data.weather[0].description;

            const options = {
                weekday: "long",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            };
            date.innerHTML = getLongFormatDateTime(data.dt, data.timezone, options);
            city.innerHTML = `${data.name} ,${data.sys.country}`;

            Hvalue.innerHTML = Math.round(data.main.humidity) + "<span>%</span>";
            Wvalue.innerHTML = Math.round(data.wind.speed) + "<span>m/s</span>";

            const options1 = {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            };
            SRvalue.innerHTML = getLongFormatDateTime(data.sys.sunrise, data.timezone, options1);
            SSvalue.innerHTML = getLongFormatDateTime(data.sys.sunset, data.timezone, options1);

            TMIvalue.innerHTML = data.main.temp_min;
            TMAvalue.innerHTML = data.main.temp_max;
            Pvalue.innerHTML = data.main.pressure + "<span>hPa</span>";
            LAvalue.innerHTML = data.coord.lat;
            LOvalue.innerHTML = data.coord.lon;
        });
}

// Initial weather fetch based on condition
fetchWeather(locationToFetch);

// Event listener for search button
searchButton.addEventListener('click', () => {
    fetchWeather(userLocation.value)
});

// Create a Function for date and time format
function formatUnixTime(dtValue, offSet, options = {}) {
    const formatDate = new Date((dtValue+offSet) *1000);
    return formatDate.toLocaleTimeString([], {timeZone: "UTC", ...options});
}

// Create A function for read arguments and return FormatUnixtime Function 
function getLongFormatDateTime(dtValue, offSet, options){
    return formatUnixTime(dtValue, offSet, options)
}