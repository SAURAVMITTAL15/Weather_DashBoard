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
