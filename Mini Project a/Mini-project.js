const userinput = document.getElementById('user-input');
const addbtn = document.getElementById('add-btn');
const tasklist = document.getElementById('task-list');
const clearbtn = document.getElementById('clear-btn');
addbtn.addEventListener('click', function() {
    const task = userinput.value.trim();
    if (task) {
        const listItem = document.createElement('li');
        listItem.innerText = task;
        tasklist.appendChild(listItem);
        userinput.value = '';
    }
});
clearbtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        tasklist.innerHTML = '';
    }else {
        alert("Clear action cancelled.");
    }   
});