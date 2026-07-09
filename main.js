const date = document.getElementById("date");
const day = document.getElementById("day");
const time = document.getElementById("time");
const locationText = document.getElementById("location");


const temp = document.getElementById("temp");
const weatherCondition = document.getElementById("weather-condition");


const heatIndex = document.getElementById("heat-index");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");


const main = document.querySelector(".main");


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
        main.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGDuB30yOatGICdK-zNG27-XWUy2a-mWrgx-VJv4VmPhWkWYFVZM2GSwH&s=10)";
    }
    else {
        main.style.backgroundImage = "url(https://miro.medium.com/1*_wPQ0QXpZ5vfTQXs7V5jIQ.jpeg)";
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
    //     main.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGDuB30yOatGICdK-zNG27-XWUy2a-mWrgx-VJv4VmPhWkWYFVZM2GSwH&s=10)";
    // }
    // else {
    //     main.style.backgroundImage = "url(https://miro.medium.com/1*_wPQ0QXpZ5vfTQXs7V5jIQ.jpeg)";
    // }
}


updateClock()
getLocation();
setInterval(updateClock, 1000);


main.addEventListener("mouseenter", () => {
    if (isDay) {

        main.style.backgroundImage = "url(https://i.pinimg.com/originals/e3/c5/0e/e3c50e7b1996478539e5cb76c8ba12ae.gif)";

    } else {

        main.style.backgroundImage = "url(https://64.media.tumblr.com/1260a4487351969c75af3240f1b6e1f0/e49f2d2fdb5f2d29-d7/s1024x512/636f1afeba2c27e2c214cea92d305524bb3935f9.gif)";

    }

});


main.addEventListener("mouseleave", () => {
    updateBackground();
});


