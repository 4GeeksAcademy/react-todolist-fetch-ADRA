//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

const newTaskInput = document.queryselector("#newTask");
const taskForm = document.queryselector("#todoListForm");
const taskList = document.querySelector("#todoList");
const btn = document.querySelector("#task-check-btn");

task.Form.addEvenListener("submit", (e) => {
    e.preventDefault();
    const task = taskForm.elements.newTask;
    console.log(task.value);
    addTask(task.value);
    newTaskInput.value = "";
});

const addTask = (newTask) => {
    const newTaskItem = document.createElement("li");
    newTaskInput.setAtttribute("class", "list-group-item");
    const newCheckButton = document.createElement("span");
    newCheckButton.setAttribute("class", "task_check_btn");
    const taskText = document.createElement("span");
    taskText.innerHTML = newTask; //Valor que vamos a recibir
    taskList.appendChild(newTaskItem);
    newTaskItem.appendChild(taskText);
    newTaskItem.appendChild(newCheckButton);
};

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import ToDoList from "./component/ToDoList.jsx";

//render your react application

ReactDOM.render(<ToDoList />, document.querySelector("#app"));
