const taskBtn = document.getElementById("taskbtn");
const headingTitle = document.getElementById("heading-title");
const clock = document.querySelector(".clock");
const options = document.querySelector(".options");



const taskManager = document.querySelector(".task-manager");

const closeBtn = document.getElementById("closebtn");






taskBtn.addEventListener("click", () => {

   

    dashboard.style.display = "none";
    taskManager.style.display = "block";
    headingTitle.textContent = "Your Personal Task Manager !"


});


closeBtn.addEventListener("click", () => {
    

    dashboard.style.display = "block";
    taskManager.style.display = "none";
    // headingTitle.textContent = "Your Personal Task Manager !"
})




const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const descriptionInput = document.getElementById("description-input");
const important = document.getElementById("important");
const addTaskBtn = document.getElementById("add-task");


const taskContainer = document.getElementById("task-container");


let tasks = []; // here our task will be store 
renderTasks();

taskForm.addEventListener("submit", (a) => {

    a.preventDefault();


    // console.log("I am Form");
    const taskValue = taskInput.value;
    const descriptionValue = descriptionInput.value;
    const importantValue = important.checked;

    if (taskValue.trim() === "" || descriptionValue.trim() === "") {
        alert("Please fill all the fields");
        return;
    };


    console.log(taskValue);
    console.log(descriptionValue);
    console.log(importantValue);

    // taskValue="";
    // descriptionValue="";
    // importantValue=false;


    const task = {
        id: Date.now(),// this will help the task to have unique id and we can use this id to delete the task from the array without making any mess
        title: taskValue,
        description: descriptionValue,
        important: importantValue,
    }

    tasks.push(task);

    console.log(tasks);



    taskForm.reset(); // this will generally reset the form fields to their default values. so we will get empty and clean filds after submitting 

    renderTasks(); // this will render the tasks in the task container

});


function renderTasks() {
    taskContainer.innerHTML = "";
    if (tasks.length === 0) {
        // console.log("No tasks to display");
        taskContainer.innerHTML = `
    <div class="empty-task">
        <h1>📝</h1>
        <h2>No Tasks Yet</h2>
        <p>Start by adding your first task.</p>
    </div>`;

        return;
    }
    tasks.forEach((task) => {
        taskContainer.innerHTML += `
        <div class="task">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>${task.important ? "🔥 Important" : ""}</p> 
            <div class="selections">
                            <button class="task-btn complete-btn" onclick="completeTask(${task.id})">Completed</button>
                            <button class="task-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                        </div>
        </div>
        `
    });
};

function deleteTask(id) {
    // console.log(id);
    tasks = tasks.filter((task) => {
        return task.id !== id;
    })

    renderTasks(); //it is besicaly updating the task list as we have deleted a task now 

};

function completeTask(id) {
    // console.log(id);

    tasks = tasks.forEach((task) => {
        if (task.id === id){
            task.compeled = true;
        }
    })

    renderTasks();
};