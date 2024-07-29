const leftBox = document.querySelector("#left");
const rightBox = document.querySelector("#right");
const boxes = document.querySelectorAll(".box");

console.log(boxes);
for (box of boxes) {
    box.addEventListener("dragstart", function (e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function () {
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function () {
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}
