const selectField = document.querySelector(".selectField");
const lists = document.querySelector("#lists");
const options = document.querySelectorAll('.options');

selectField.onclick = function(){
    lists.classList.toggle('hide');
}

lists.onclick = function(){
    lists.classList.toggle('hide')
}



for(opt of options){
    opt.onclick = function(){
        selectField.innerHTML = this.textContent;
    }
}


