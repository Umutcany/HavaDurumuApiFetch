const url ="https://api.openweathermap.org/data/2.5/"
const key="e61114fa6d75c177534d63d90594d875"


const setQuery = (event) => {

    if(event.keyCode =="13" ) {   // key code deyince klavyede 13 numaraya atanmış olan tuş geliyor oda bizde enter 
        // gidip event.key=="Enter" yazsaydım hiç bir şey değişmezdi aynı olarak çalışırdı.
        getResult(searchBar.value)
        searchBar.value=""
    }
}
 

const getResult = (cityName) => {

let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
fetch(query)
.then(weather => {
    return weather.json()
})
.then(displayResult)

}


const displayResult = (result) =>{

    let city = document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let weather = document.querySelector(".temp")
    weather.innerText =`${Math.round(result.main.temp)}`

    let desc = document.querySelector(".desc")
    desc.innerText=`${result.weather[0].description}`

    let minMax = document.querySelector(".minmax")
    minMax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`
    
}

const searchBar =document.querySelector("#searchBar")
searchBar.addEventListener("keypress", setQuery)

