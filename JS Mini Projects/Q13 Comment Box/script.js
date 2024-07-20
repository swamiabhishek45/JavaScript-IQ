var field = document.querySelector("textarea");
var bakUp = field.getAttribute("placeholder");
var btn = document.querySelector("#btn");
var clear = document.querySelector("#clear");
const commentsContainer = document.querySelector("#commentContainer");
const commentBtn = document.querySelector("#commentBtn");

field.onfocus = function () {
    this.setAttribute("placeholder", "");
    this.style.borderColor = "#333";
    btn.style.display = "block";
};

field.onblur = function () {
    this.setAttribute("placeholder", bakUp);
    this.style.borderColor = "#888";
};

clear.onclick = function () {
    btn.style.display = "none";
    field.value = "";
};

commentBtn.onclick = function () {
    // Get the value of the comment input
    const commnetText = field.value;

    // Check if the commnet is not empty

    if (commnetText.trim() !== "") {
        // create a new div for comment
        const commentElem = document.createElement("div");
        // commentElem.className = "";
        commentElem.textContent = commnetText;

        // Add the comment to comment container
        commentsContainer.appendChild(commentElem);
        field.value = "";
    }
};
