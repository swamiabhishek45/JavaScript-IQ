const container = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    container.innerHTML = localStorage.getItem("notes");
}
function saveNotes() {
    localStorage.setItem("notes", container.innerHTML);
}

function addNote() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    img.src = "delete.png";
    container.appendChild(inputBox).appendChild(img);
}

container.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((note) => {
            note.onkeyup = function () {
                saveNotes();
            };
        });
    }
});

showNotes();
