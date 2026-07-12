const date = document.getElementById("date");
const day = document.getElementById("day");
const time = document.getElementById("time");
const locationText = document.getElementById("location");


const temp = document.getElementById("temp");
const weatherCondition = document.getElementById("weather-condition");


const heatIndex = document.getElementById("heat-index");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");


const dashboard = document.querySelector(".dashboard");




let isDay = false;


const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
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


function updateClock() {

    const now = new Date();

    const dateNumber = now.getDate();
    const dayNumber = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();



    const amPm = hour >= 12 ? "PM" : "AM";

    let hour12 = hour % 12;

    if (hour12 === 0) {
        hour12 = 12;
    }


    date.textContent = `${dateNumber} ${months[month]}, ${year}`;

    day.textContent = days[dayNumber];

    time.textContent = `${hour12}:${minute}:${second} ${amPm}`;


    

       

}

function updateBackground() {

    if (isDay) {
       dashboard.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGDuB30yOatGICdK-zNG27-XWUy2a-mWrgx-VJv4VmPhWkWYFVZM2GSwH&s=10)";
    }
    else {
       dashboard.style.backgroundImage = "url(https://miro.medium.com/1*_wPQ0QXpZ5vfTQXs7V5jIQ.jpeg)";
    }


}



function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log(latitude);
            console.log(longitude);

            getWeather(latitude, longitude);

        });
    }
    else {
        console.log("Geolocation Not Supported")
    }



}



async function getWeather(lat, lon) {

    const apikey = "7a850f8e8fcf4ee4802154610260601";
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${lat},${lon}`
    )

    const data = await response.json();

    console.log(data);

    locationText.textContent = `${data.location.name}, ${data.location.region}`;

    temp.textContent = `${data.current.temp_c}°C`;
    weatherCondition.textContent = `${data.current.condition.text}`;


    heatIndex.textContent = `Heat Index : ${data.current.heatindex_c}°C`;
    humidity.textContent = `Humidity : ${data.current.humidity}%`;
    wind.textContent = `Heat Index : ${data.current.wind_kph}km/h`;


    isDay = data.current.is_day == 1;
    updateBackground();

     // // const isDay = hour >= 6 && hour < 18;

    // if (isDay) {
    //    dashboard.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGDuB30yOatGICdK-zNG27-XWUy2a-mWrgx-VJv4VmPhWkWYFVZM2GSwH&s=10)";
    // }
    // else {
    //    dashboard.style.backgroundImage = "url(https://miro.medium.com/1*_wPQ0QXpZ5vfTQXs7V5jIQ.jpeg)";
    // }
}


updateClock()
getLocation();
setInterval(updateClock, 1000);


dashboard.addEventListener("mouseenter", () => {
    if (isDay) {

       dashboard.style.backgroundImage = "url(https://i.pinimg.com/originals/e3/c5/0e/e3c50e7b1996478539e5cb76c8ba12ae.gif)";

    } else {

       dashboard.style.backgroundImage = "url(https://images.squarespace-cdn.com/content/v1/5fe7743a8dc8ae15a035e63c/1610927614129-F3DUM0FQS6V8ZVUYY2FQ/Panel-3---And-the-Autumn-Moon-is-Bright.gif)";

    }

});


dashboard.addEventListener("mouseleave", () => {
    updateBackground();
});


