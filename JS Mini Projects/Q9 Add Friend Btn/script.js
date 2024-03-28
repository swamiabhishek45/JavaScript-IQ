const toggle = document.querySelector('#toggle');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');

add.addEventListener('click', function(){
    toggle.textContent = "Friend✅"
    toggle.style.color = "green"
})

remove.addEventListener('click', function(){
    toggle.textContent = "Stranger";
    toggle.style.color = "red"
})