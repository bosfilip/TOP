

function stringChange(){
    userInput = document.getElementById("input1").value
    arrInput = userInput.split("-")
    joinedArr = arrInput.join("")
    document.getElementById("paragraph1").textContent = joinedArr
}



