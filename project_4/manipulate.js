const addB = document.querySelector("#addB");
const list = document.querySelector("#list");
const userInput = document.querySelector("#userInput");

addB.addEventListener('click', function(){
    if (userInput.value.length > 0){
        const createList = document.createElement("li");
        createList.textContent = userInput.value;
        list.appendChild(createList);
        userInput.value = "";
    }
    else{
        alert("Iteam must be at least 1 digit")
    }
})