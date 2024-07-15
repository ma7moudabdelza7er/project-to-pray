let d1 = document.getElementById("d1");
let day = document.getElementById("day");
let mon = document.getElementById("month");
let fay = document.getElementById("fay");
let cairo = document.getElementById("cairo");
let Alx = document.getElementById("Alx");
selected = document.getElementById("selected");
city = document.getElementById("title-of-city");
// console.log(selected);
obj = {
  "Cairo":"القاهرة",
  "Alexandria":"الاسكندرية",
  "Fayoum":"الفيوم"
}
const weekday =["الاحد","الاثنين","الثلثاء","الاربعاء","الخميس","الجمعه","السبت"];
const month = ["يباير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسيمبر"];

const data = new Date();
d1.innerHTML = data.getDate()

day.innerHTML = weekday[data.getDay()]
mon.innerHTML = month[data.getMonth()];

    selected.addEventListener('change',function(e){
    city.innerHTML = obj[e.target.value];
      axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${e.target.value}&country=Egypt`)
// &method=8')
  .then(function (response) {
    fajr = document.getElementById("fajr");
    zah = document.getElementById("zah");
    Asr = document.getElementById("asr");
    ma = document.getElementById("ma")
    ash = document.getElementById("ash");
    Sunrise = document.getElementById("Sunrise");
    console.log(response.data.data.timings);
    fajr.innerHTML = response.data.data.timings.Fajr;
    Sunrise.innerHTML = response.data.data.timings.Sunrise;
    zah.innerHTML = response.data.data.timings.Dhuhr;
   Asr.innerHTML = response.data.data.timings.Asr;
   ma.innerHTML = response.data.data.timings.Maghrib;
   ash.innerHTML = response.data.data.timings.Isha;
   
  })
    })
    
