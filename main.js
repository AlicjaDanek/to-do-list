const form = document.querySelector("form");
const input1 = document.querySelector("input.addTask");
const input2 = document.querySelector("input.dot");
const taskNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const list = document.getElementsByClassName("task");


const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = list.length;


}

const addTask = (e) => {
    e.preventDefault();
    const taskName = input1.value;
    if (taskName === "") return;
    const li = document.createElement("li");
    li.innerHTML = taskName + "<button>remove</button>";
    li.className = "task";
    ul.appendChild(li);
    input1.value = "";
    taskNumber.textContent = list.length;
    li.querySelector("button").addEventListener("click", removeTask);
    input2.addEventListener("input", (e) => {
        let things = [...list];
        let searchText = e.target.value.toLowerCase();
        things = things.filter(item => item.textContent.toLowerCase().includes(searchText));
        ul.textContent = "";
        things.forEach(item => ul.appendChild(item))
        taskNumber.textContent = list.length;
        if (input2.value === "") {
            for (let thing of things) {
                ul.appendChild(li);
            }
            taskNumber.textContent = list.length;
        }
    })


}

form.addEventListener("submit", addTask);