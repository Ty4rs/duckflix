
document.addEventListener('DOMContentLoaded', function() {
var menu = document.querySelector(".menu")
var menuUl = document.querySelector(".navbar ul")
let click = 0;
var close = document.querySelector(".close")

menu.addEventListener("click", ()=>{
    if(click ==0){
        click = 1
        menuUl.style.transform = "translate(0%)"
        menuUl.style.display = "flex"
    }
    else{
        click = 0
        
        menuUl.style.transform = "translate(100%)"
    }
})
close.addEventListener("click", ()=>{
    if(click ==0){
        click = 1
        menuUl.style.transform = "translate(0%)"
        menuUl.style.display = "flex"
    }
    else{
        click = 0
        menuUl.style.transform = "translate(100%)"
        menuUl.style.display = "none"
    }
})
})