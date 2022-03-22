let menu=document.getElementById("drop");
let hb=document.getElementById("drop-content");

hb.addEventListener("click",function (){
    if(menu.style.display==="block") {
        hb.innerHTML="<i class=\"fa-solid fa-bars\"></i>";
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
        hb.innerHTML="<i class=\"fa-solid fa-bars\"></i>";
    }
});

window.addEventListener("resize", function(){
    if(window.matchMedia("(max-width: 600px)").matches)
    {
        menu.style.display="none";
        hb.innerHTML="<i class=\"fa-solid fa-bars\"></i>";
    }
});