const apiKey=`143046b23dd0ddf39030f9ddd6da7da6`
const apiLink=`api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
const geoCode=`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`

const searchBtn=document.querySelector(".btn").onclick=()=>{
    let searchBox=document.querySelector("input[name=city]")
    let searchName=searchBox.value
    getLocation()
    console.log(searchName)
    event.preventDefault()
    


async function getLocation(){
    const response= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchName}&limit=1&appid=${apiKey}`)
    const data = await response.json()
    const lat =data[0].lat
    const lon=data[0].lon
    // console.log(lat ,lon)
    getWeather()

async function getWeather(){
const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
const data2 = await response.json()
console.log(data2)
console.log(data2.list[0].weather[0].icon)
    htmlPost()
console.log(`http://openweathermap.org/img/wn/${data2.list[0].weather[0].icon}@2x.png`)
    function htmlPost(){
        // Current data
        
        document.getElementById("current").getElementsByTagName("h2")[0]
        .innerHTML=`${searchName} (${data2.list[0].dt_txt.slice(0,10)}) <img src= http://openweathermap.org/img/wn/${data2.list[0].weather[0].icon}@2x.png />`
        document.getElementById("current").getElementsByTagName("p")[0]
        .innerHTML = `Temp: ${data2.list[0].main.temp}°F`;
        document.getElementById("current").getElementsByTagName("p")[1]
        .innerHTML = `Wind: ${data2.list[0].wind.speed}`;
        document.getElementById("current").getElementsByTagName("p")[2]
        .innerHTML = `Humidity: ${data2.list[0].main.humidity}%`;





document.getElementById("cards1").getElementsByTagName("h3")[0]
.innerHTML=`${data2.list[8].dt_txt.slice(0,10)} <img src= http://openweathermap.org/img/wn/${data2.list[8].weather[0].icon}@2x.png />`
document.getElementById("cards1").getElementsByTagName("p")[0]
.innerHTML = `Temp: ${data2.list[8].main.temp}°F`;
document.getElementById("cards1").getElementsByTagName("p")[1]
.innerHTML = `Wind: ${data2.list[8].wind.speed}`;
document.getElementById("cards1").getElementsByTagName("p")[2]
.innerHTML = `Humidity: ${data2.list[8].main.humidity}%`;

    document.getElementById("cards2").getElementsByTagName("h3")[0]
    .innerHTML=`${data2.list[16].dt_txt.slice(0,10)} <img src= http://openweathermap.org/img/wn/${data2.list[16].weather[0].icon}@2x.png />`
    document.getElementById("cards2").getElementsByTagName("p")[0]
    .innerHTML = `Temp: ${data2.list[16].main.temp}°F`;
    document.getElementById("cards2").getElementsByTagName("p")[1]
    .innerHTML = `Wind: ${data2.list[16].wind.speed}`;
    document.getElementById("cards2").getElementsByTagName("p")[2]
    .innerHTML = `Humidity: ${data2.list[16].main.humidity}%`;

        document.getElementById("cards3").getElementsByTagName("h3")[0]
        .innerHTML=`${data2.list[24].dt_txt.slice(0,10)} <img src= http://openweathermap.org/img/wn/${data2.list[23].weather[0].icon}@2x.png />`
        document.getElementById("cards3").getElementsByTagName("p")[0]
        .innerHTML = `Temp: ${data2.list[24].main.temp}°F`;
        document.getElementById("cards3").getElementsByTagName("p")[1]
        .innerHTML = `Wind: ${data2.list[24].wind.speed}`;
        document.getElementById("cards3").getElementsByTagName("p")[2]
        .innerHTML = `Humidity: ${data2.list[24].main.humidity}%`;

            document.getElementById("cards4").getElementsByTagName("h3")[0]
            .innerHTML=`${data2.list[32].dt_txt.slice(0,10)}<img src= http://openweathermap.org/img/wn/${data2.list[30].weather[0].icon}@2x.png />`
            document.getElementById("cards4").getElementsByTagName("p")[0]
            .innerHTML = `Temp: ${data2.list[32].main.temp}°F`;
            document.getElementById("cards4").getElementsByTagName("p")[1]
            .innerHTML = `Wind: ${data2.list[32].wind.speed}`;
            document.getElementById("cards4").getElementsByTagName("p")[2]
            .innerHTML = `Humidity: ${data2.list[32].main.humidity}%`;

                document.getElementById("cards5").getElementsByTagName("h3")[0]
                .innerHTML=`${data2.list[39].dt_txt.slice(0,10)} <img src= http://openweathermap.org/img/wn/${data2.list[39].weather[0].icon}@2x.png />`
                document.getElementById("cards5").getElementsByTagName("p")[0]
                .innerHTML = `Temp: ${data2.list[39].main.temp}°F`;
                document.getElementById("cards5").getElementsByTagName("p")[1]
                .innerHTML = `Wind: ${data2.list[39].wind.speed}`;
                document.getElementById("cards5").getElementsByTagName("p")[2]
                .innerHTML = `Humidity: ${data2.list[39].main.humidity}%`;
    
}}}}
