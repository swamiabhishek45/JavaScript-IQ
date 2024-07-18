var field = document.querySelector('textarea');

field.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
}