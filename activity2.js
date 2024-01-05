function backtohomeuwish() {
    window.location = "activity_1.html";

}

function getscoreidk() {
     score = localStorage.getItem("score");
     document.getElementById("update").innerHTML = "<h1> score: " + score + "</h1>";


}