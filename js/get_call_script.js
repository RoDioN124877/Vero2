let popup = document.getElementById('get__call__conteiner');
let pp_btn = document.getElementById('get__call__btn');
let pp_btn_2 = document.getElementById('get__call__btn__2');
let body = document.getElementsByTagName('body');
pp_btn.onclick = function(){
    popup.style.display="flex";
}
pp_btn_2.onclick = function(){
    popup.style.display="flex";
}
window.onclick = function (e){
    if(e.target == popup){
        popup.style.display = "none";
    }
}


