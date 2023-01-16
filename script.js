const apiKey=`143046b23dd0ddf39030f9ddd6da7da6`
const apiLink=`api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
const geoCode=`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`


lat=51.5085
long=-0.1257

getData()

async function getData(){
const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&units=imperial&appid=143046b23dd0ddf39030f9ddd6da7da6`)
const data = await response.json()
console.log(data)
// let temp=data.main.temp
// let wind=data.wind.speed
// let humidity=data.main.humidity


    
    const searchBtn=document.querySelector("#search-btn").onclick=()=>{
        console.log("clicked")
        event.preventDefault()
        // currentData()
        // card1()+card2()+card3()+card4()+card5()
        
    }



// let currentData =function(){
// // Current data
// document.getElementById("current").getElementsByTagName("h2")[0]
// .innerHTML=`${search}`
// document.getElementById("current").getElementsByTagName("p")[0]
// .innerHTML = `Temp: ${temp}`;
// document.getElementById("current").getElementsByTagName("p")[1]
// .innerHTML = `wind: ${wind}`;
// document.getElementById("current").getElementsByTagName("p")[2]
// .innerHTML = `Humidity: ${humidity}`;
// }
// let card1=function(){
// document.getElementById("cards1").getElementsByTagName("h3")[0]
// .innerHTML=`${search}`
// document.getElementById("cards1").getElementsByTagName("p")[0]
// .innerHTML = `Temp: ${temp}`;
// document.getElementById("cards1").getElementsByTagName("p")[1]
// .innerHTML = `wind: ${wind}`;
// document.getElementById("cards1").getElementsByTagName("p")[2]
// .innerHTML = `Humidity: ${humidity}`;}
// let card2=function(){
//     document.getElementById("cards2").getElementsByTagName("h3")[0]
//     .innerHTML=`${search}`
//     document.getElementById("cards2").getElementsByTagName("p")[0]
//     .innerHTML = `Temp: ${temp}`;
//     document.getElementById("cards2").getElementsByTagName("p")[1]
//     .innerHTML = `wind: ${wind}`;
//     document.getElementById("cards2").getElementsByTagName("p")[2]
//     .innerHTML = `Humidity: ${humidity}`;}
//     let card3=function(){
//         document.getElementById("cards3").getElementsByTagName("h3")[0]
//         .innerHTML=`${search}`
//         document.getElementById("cards3").getElementsByTagName("p")[0]
//         .innerHTML = `Temp: ${temp}`;
//         document.getElementById("cards3").getElementsByTagName("p")[1]
//         .innerHTML = `wind: ${wind}`;
//         document.getElementById("cards3").getElementsByTagName("p")[2]
//         .innerHTML = `Humidity: ${humidity}`;}
//         let card4=function(){
//             document.getElementById("cards4").getElementsByTagName("h3")[0]
//             .innerHTML=`${search}`
//             document.getElementById("cards4").getElementsByTagName("p")[0]
//             .innerHTML = `Temp: ${temp}`;
//             document.getElementById("cards4").getElementsByTagName("p")[1]
//             .innerHTML = `wind: ${wind}`;
//             document.getElementById("cards4").getElementsByTagName("p")[2]
//             .innerHTML = `Humidity: ${humidity}`;}
//             let card5=function(){
//                 document.getElementById("cards5").getElementsByTagName("h3")[0]
//                 .innerHTML=`${search}`
//                 document.getElementById("cards5").getElementsByTagName("p")[0]
//                 .innerHTML = `Temp: ${temp}`;
//                 document.getElementById("cards5").getElementsByTagName("p")[1]
//                 .innerHTML = `wind: ${wind}`;
//                 document.getElementById("cards5").getElementsByTagName("p")[2]
//                 .innerHTML = `Humidity: ${humidity}`;
    
// }
}