// 143046b23dd0ddf39030f9ddd6da7da6

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
var input=document.querySelector("#fname")
var wBtn=document.querySelector("#btn")
wBtn.addEventListener("click",anything)


function anything(){
    let urlWeather=`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=143046b23dd0ddf39030f9ddd6da7da6`

    fetch(urlWeather)
    .then(response=>response.json())
    .then(data=>console.log(data.list[0].main.temp))
}

function name(params) {
    
}

array.forEach(element => {
    
});

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}