function myFunction() {
    let x = document.getElementsByClassName("drop-content");
    if (x.className === "drop") {
        x.className += " responsive";
    } else {
        x.className = "drop";
    }
}