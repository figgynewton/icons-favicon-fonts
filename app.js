let menu=document.getElementById("menu");
let hb=document.getElementById("menu-button");

hb.addEventListener("click",function (){
    if(menu.style.display==="none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
});

window.addEventListener("resize", function(){
    if(window.matchMedia("(min-width: 600px)").matches){
        menu.style.display="none";
    }
});