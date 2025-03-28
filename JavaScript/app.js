function updateTime (){
//los angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime =moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
"h:m:ss[<small>]A[</small>]"
);
}
//paris

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
if (parisElement){
let parisTimeElement = parisElement.querySelector(".time");
let parisTime =moment().tz("Europe/paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisimeElement.innerHTML = parisTime.format(
"h:m:ss[<small>]A[</small>]"
);
}
}

function updateCity(event) {
let cityTimeZone = event.target,value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
     <div>
   <h2>${cityTimeZone}</h2>
   <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
   <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
}

updateTime ();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
