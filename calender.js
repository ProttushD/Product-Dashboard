const calenderBtn = document.getElementById("calenderbtn");
const calenderCloseBtn = document.getElementById("calender-closebtn");
const calender = document.querySelector(".calender");

const calenderHeadingTitle = document.getElementById("calender-heading-title");


calenderBtn.addEventListener("click", () => {


    dashboard.style.display = "none";
    calender.style.display = "block";
    calenderHeadingTitle.textContent = "Plan Your Day to Be More Productive!"



});

calenderCloseBtn.addEventListener("click", () => {


    dashboard.style.display = "block";
    calender.style.display = "none";
})





const calenderContainer = document.getElementById("calender-container");



const timings = [
    // "6:00 - 7:00",
    // "7:00 - 8:00",
    // "8:00 - 9:00",
    // "9:00 - 10:00",
    // "10:00 - 11:00",
    // "11:00 - 12:00",
    // "12:00 - 13:00",
    // "13:00 - 14:00",
    // "14:00 - 15:00",
    // "15:00 - 16:00",
    // "16:00 - 17:00",
    // "17:00 - 18:00",
    // "18:00 - 19:00",
    // "19:00 - 20:00",
    // "20:00 - 21:00",
    // "21:00 - 22:00",
    // "22:00 - 23:00",
    // "23:00 - 24:00"

    {
        id: 1,
        time: "6:00 - 7:00",
        plan: ""
    },
    {
        id: 2,
        time: "7:00 - 8:00",
        plan: ""
    },
    {
        id: 3,
        time: "8:00 - 9:00",
        plan: ""
    },
    {
        id: 4,
        time: "9:00 - 10:00",
        plan: ""
    },
    {
        id: 5,
        time: "10:00 - 11:00",
        plan: ""
    },
    {
        id: 6,
        time: "11:00 - 12:00",
        plan: ""
    },
    {
        id: 7,
        time: "12:00 - 1:00",
        plan: ""
    },
    {
        id: 8,
        time: "1:00 - 2:00",
        plan: ""
    },
    {
        id: 9,
        time: "2:00 - 3:00",
        plan: ""
    },
    {
        id: 10,
        time: "3:00 - 4:00",
        plan: ""
    },
    {
        id: 11,
        time: "4:00 - 5:00",
        plan: ""
    },
    {
        id: 12,
        time: "5:00 - 6:00",
        plan: ""
    },
    {
        id: 13,
        time: "6:00 - 7:00 PM",
        plan: ""
    },
    {
        id: 14,
        time: "7:00 - 8:00 PM",
        plan: ""
    },
    {
        id: 15,
        time: "8:00 - 9:00 PM",
        plan: ""
    },
    {
        id: 16,
        time: "9:00 - 10:00 PM",
        plan: ""
    },
    {
        id: 17,
        time: "10:00 - 11:00 PM",
        plan: ""
    },
    {
        id: 18,
        time: "11:00 - 12:00 AM",
        plan: ""
    }
];



function renderCalender() {
    calenderContainer.innerHTML = "";

    timings.forEach((slot) => {
        calenderContainer.innerHTML += `
        <div class="calender-cards glass" onclick="editPlan(${slot.id})">
            <h5>${slot.time}</h5>
            <p>${slot.plan || "Click here to add your plan..."}</p>
        </div>
        `
    });
}

renderCalender();

// with the above function with the help of forEach we can do it dynamically without writing the html multipal times


function editPlan(id) {

    const plan = prompt("Enter Your Plan");

    if (plan === null) {
        return;
    }

    if (plan.trim() === "") {
        alert("Please enter a plan.");
        return;
    }

    timings.forEach((slot) => {

        if (slot.id === id) {

            slot.plan = plan;

        }

    });

    renderCalender();

}