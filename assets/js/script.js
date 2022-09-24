let inputEL = $(".form-control");
let buttonEl = document.querySelector(".button-el");
let timeEl = $(".container");
setInterval(function() {timeEl.text(moment().format("HH:mm:ss"))}, 1000)

let currentDay = $("#currentDay");
currentDay.text(moment().format("dddd MMMM Do YYYY"));


let currentTime = moment().format("HH:mm:ss")
function colorTime() { 
    for (let i = 9; i <= 17; i++) {
        let past_hour = moment(`${i}:00:00`, "HH:mm:ss").format("HH:mm:ss")
        let upcoming_Hour = moment(`${i + 1}:00:00`, "HH:mm:ss").format("HH:mm:ss")
        if (past_hour < currentTime) {
            document.getElementById(`${i}`).style.background = "lightgrey"
        }
        
        if ((past_hour < currentTime) && (currentTime < upcoming_Hour)) {
            let current_time_Block = document.getElementById(`${i}`)
            current_time_Block.style.background = "lightblue"
        }
        
        if (currentTime < upcoming_Hour) {
            document.getElementById(`${i + 1}`).style.background = "lightgreen"

    }}
}

colorTime()

let List = localStorage.getItem("todoList");

inputEL.textContent = List;

buttonEl.addEventListener("click", function(){
    console.log("button")
    inputEL.textContent = List;
    localStorage.setItem("todoList", List);
})
   

