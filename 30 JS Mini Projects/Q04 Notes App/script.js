const container = document.querySelector(".notes-container");

function addNote() {
    const p = document.createElement("p");
    p.setAttribute("contenteditable", true);

    const img = document.createElement("img");
    img.src = "delete.png";

    container.appendChild(p).appendChild(img);
    saveNotes();
}

container.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes();
    }
});

function saveNotes(e) {
    localStorage.setItem("notes", container.innerHTML);
}

function showNotes() {
    container.innerHTML = localStorage.getItem("notes");
}

showNotes();
