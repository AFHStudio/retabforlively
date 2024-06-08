const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

var myDate = new Date();
var hrs = myDate.getHours();



var greet;
if (hrs < 12)
  greet = 'Good morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good evening';



const key = '719d1c97dd98f1a4f06d87a13956cb2a';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${key}&units=metric`)
.then(response => response.json())
.then(data => {
  const temp = data.main.temp;
  document.getElementById('weather').innerHTML = `${temp}°C`;
  var weathericon = data.weather[0].icon;
  const weathericonid = document.getElementById('weathericon')
  weathericonid.src = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;
})

function livelyPropertyListener(name, val) {
    switch (name) {
      case "backgroundpicture":
        const bg = document.getElementById("background")
        bg.src = val
        break;
      case "username":
        document.getElementById("welcome").innerText = greet + "," + " " + val + ".";
        break;
      case "city":
        const key = '719d1c97dd98f1a4f06d87a13956cb2a';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${key}&units=metric`)
        .then(response => response.json())
        .then(data => {
          const temp = data.main.temp;
          document.getElementById('weather').innerHTML = `${temp}°C`;
          var weathericon = data.weather[0].icon;
          const weathericonid = document.getElementById('weathericon')
          weathericonid.src = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;
        })
        break;
        case "font":
        if (val === 0) {
          document.getElementById("fontstylesheet").href = "fonts/inter.css";
        } else if (val === 1) {
          document.getElementById("fontstylesheet").href = "fonts/helveticaneue.css";
        } else if (val === 2) {
          document.getElementById("fontstylesheet").href = "fonts/rubik.css";
        } else if (val === 3) {
          document.getElementById("fontstylesheet").href = "fonts/productsans.css";
        }
        break;
    }
  }