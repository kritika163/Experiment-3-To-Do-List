function addTask() {
    let task = document.getElementById("task");
    let text = task.value;

    if (text == "") {
        alert("Enter a task first");
        return;
    }

    let item = document.createElement("li");
    item.innerText = text;

    item.onclick = function() {
        item.classList.toggle("done");
    };

    let del = document.createElement("button");
    del.innerText = "Delete";

    del.onclick = function() {
        item.remove();
    };

    item.appendChild(del);
    document.getElementById("list").appendChild(item);

    task.value = "";
}
