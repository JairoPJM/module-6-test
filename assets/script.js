// 143046b23dd0ddf39030f9ddd6da7da6

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

var timeNow=moment().format("MMMM Do YYYY")
console.log(timeNow)
var day1=moment().add([1], 'days').format("MMMM Do YYYY")
var day2=moment().add([2], 'days').format("MMMM Do YYYY")
var day3=moment().add([3], 'days').format("MMMM Do YYYY")
var day4=moment().add([4], 'days').format("MMMM Do YYYY")
var day5=moment().add([5], 'days').format("MMMM Do YYYY")

console.log(day1)
console.log(day2)
console.log(day3)
console.log(day4)
console.log(day5)


var input=document.querySelector("#fname")
var wBtn=document.querySelector("#btn")
wBtn.addEventListener("click",anything)


function anything(){
    let urlWeather=`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=143046b23dd0ddf39030f9ddd6da7da6`

    fetch(urlWeather)
    .then(response=>response.json())
    .then(function(data){
        console.log(data)
        console.log(data.list[0].main.temp)
        console.log(data.list[0].wind.speed)
        console.log(data.list[0].main.humidity)

    })}

function name(params) {
    
}

array.forEach(element => {
    
});

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

