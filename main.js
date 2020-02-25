const toDoList = [];
const form = document.querySelector("form");
const input1 = document.querySelector("input.addTask");
const input2 = document.querySelector("input.dot");
const taskNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const list = document.getElementsByClassName("task");


const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList();
    taskNumber.textContent = list.length;


}

const addTask = (e) => {
    e.preventDefault();
    const taskName = input1.value;
    if (taskName === "") return;
    const li = document.createElement("li");
    li.innerHTML = taskName + "<button>remove</button>";
     li.className = "task";
    toDoList.push(li);
    renderList();
    
    
   
    ul.appendChild(li);
    input1.value = "";
    taskNumber.textContent = list.length;
    input2.addEventListener("input", (e) => {
        let things = toDoList;
        const searchText = e.target.value.toLowerCase();
        things = things.filter(item => item.textContent.toLowerCase().includes(searchText));
        ul.textContent = "";
        things.forEach(item => ul.appendChild(item))
        taskNumber.textContent = list.length;
    })
 li.querySelector("button").addEventListener("click", removeTask);

}
const renderList = ()=>{
    ul.textContent = '';
    toDoList.forEach((toDoElement, key)=>{
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })}

form.addEventListener("submit", addTask);
