const img = document.querySelector("#img");
const like = document.querySelector("#like");
var id;
img.addEventListener("dblclick", () => {
    like.style.transform = " translate(-50%, -50%) scale(1)";
    like.style.color = "red";

    setTimeout(() => {
        like.style.transform = " translate(-50%, -50%) scale(0)";
    }, 1000);
});

// clearTimeout(id);
