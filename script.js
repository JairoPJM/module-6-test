const apiKey=`143046b23dd0ddf39030f9ddd6da7da6`
const apiLink=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
const geoCode=`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`


const testCity="Atlanta"
const atlantaCords=

getData()

async function getData(){
const response= await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=143046b23dd0ddf39030f9ddd6da7da6&units=imperial")
const data = await response.json()
// console.log(data)
const temp=data.main.temp
const wind=data.wind.speed
const humidity=data.main.humidity



const tempElement = document.getElementById("temp");
tempElement.innerHTML = `temp : ${temp}`
console.log(tempElement)
}