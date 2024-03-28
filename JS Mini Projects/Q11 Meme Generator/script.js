const btn = document.querySelector("#btn");
const title = document.querySelector("#title");
const img = document.querySelector("#img");
const author = document.querySelector("#author span");

btn.addEventListener("click", function () {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            title.innerHTML = `<h4>${data.title}</h4>`
            img.src =`${data.url}`;
            author.innerHTML = `<span>${data.author}</span>`
        })
});
