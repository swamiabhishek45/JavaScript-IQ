const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnOpenModel = document.querySelector(".show-model");

const openModel = function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModel = function () {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
};

for(let i = 0 ;i<btnOpenModel.length; i++){
    btnOpenModel[i].addEventListener("click", openModel);
}

btnCloseModel.addEventListener("click", closeModel);

overlay.addEventListener('click', closeModel)

