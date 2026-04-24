let form = document.getElementById("todoForm");
let todoList = document.getElementById("todoList");

function showTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <div class="todo">
                <h3>${todo.title}</h3>
                <p>${todo.desc}</p>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.push({
        title: title,
        desc: desc
    });

    localStorage.setItem("todos", JSON.stringify(todos));

    form.reset();

    showTodos();
});

function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos));

    showTodos();
}

showTodos();