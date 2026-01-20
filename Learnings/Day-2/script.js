const box = document.getElementById("box");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn")

changeTextBtn.addEventListener("click", () =>{
    box.innerText = "Text Changed!";
});

changeColorBtn.addEventListener("click", () => {
    box.style.backgroundColor = "lightgreen";
});