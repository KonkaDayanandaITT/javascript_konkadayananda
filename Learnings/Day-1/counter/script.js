let savedCount = localStorage.getItem("count"); 
console.log(typeof(savedCount))
let count = savedCount !== null ? Number(savedCount): 0;

const countDisplay = document.getElementById("counter")
const incBtn = document.getElementById("incBtn")
const decBtn = document.getElementById("decBtn")
const reset = document.getElementById("reset")

function updateUi(){
    countDisplay.textContent = count;
    decBtn.disabled = count === 0;

    localStorage.setItem("count", count);
}

incBtn.addEventListener("click", function(){
    count++;
    updateUi();
})

decBtn.addEventListener("click", function(){
    count--;
    updateUi();
})

reset.addEventListener("click", function(){
    count = 0;
    updateUi();
})
updateUi();
