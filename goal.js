const goalBtn = document.getElementById("goalbtn");
const goal = document.querySelector(".goal");

const goalCloseBtn = document.getElementById("goal-closebtn");
const text = document.getElementById("goal-heading-title");


goalBtn.addEventListener("click", () => {
    dashboard.style.display = "none";
    goal.style.display = "block"
    text.textContent = "Your Goals !";
})

goalCloseBtn.addEventListener("click", () => {
    dashboard.style.display = "block";
    goal.style.display = "none"
})


const goalForm = document.getElementById("goal-form");
const goalInput = document.getElementById("goal-input");
const goalDescription = document.getElementById("goal-description-input");
const addGoalBtn = document.getElementById("add-goal");

const goalContainer = document.getElementById("goal-container");

let goals = [];
loadGoals();
addGoal();



goalForm.addEventListener("submit", (e) => {
    e.preventDefault();


    const goalValue = goalInput.value;
    const goalDescriptionValue = goalDescription.value;


    // console.log(goalValue);
    // console.log(goalDescriptionValue);

    if (goalValue.trim() === "" || goalDescriptionValue.trim() === "") {
        alert("please Enter Your Before Submitting");
        return;
    }

    const newGoal = {
        id: Date.now(),
        title: goalValue,
        description: goalDescriptionValue,
        completed: false
    }


    goals.push(newGoal);
    saveGoal();
    // console.log(goals);

    goalForm.reset();
    addGoal();


});


function addGoal() {
    console.log(goals);
    goalContainer.innerHTML = "";
    if (goals.length === 0) {
        goalContainer.innerHTML = `
    <div class="empty-goal">
        <h1>📝</h1>
        <h2>No Goals Yet</h2>
        <p>Start by adding your first Goal.</p>
    </div>`;
        return;
    }

    goals.forEach((goal) => {
        goalContainer.innerHTML += `
        <div class="goal-box glass">
            <h3>${goal.title}</h3>
            <p>${goal.description}</p>
            <p>${goal.completed ? "✅ Completed" : "🎯 In Progress"}</p>
            <div class="selections">
                            <button class="task-btn complete-btn" onclick="completeGoal(${goal.id})">Completed</button>
                            <button class="task-btn delete-btn" onclick="deleteGoal(${goal.id})">Delete</button>
                        </div>
        </div>
        `
    });
    
};

function deleteGoal(id){
    goals = goals.filter((goal) =>{
        return goal.id !== id;
    })
    saveGoal();
    addGoal();
};

function completeGoal(id){

    goals.forEach(goal => {

        if(goal.id === id){
            goal.completed = true;
        }

    });

    saveGoal();
    addGoal();
}

function saveGoal() {
    console.log("Saving:", goals);
    console.log("JSON:", JSON.stringify(goals));

    localStorage.setItem("goals", JSON.stringify(goals));
}

function loadGoals(){
    const saveGoal= localStorage.getItem("goals");

    if (saveGoal){
        goals = JSON.parse(saveGoal);
    }
}

