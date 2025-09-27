const buttons = document.querySelectorAll("button");
const equal = document.querySelector("#eq");
const userUpdate = document.querySelector("#userInputValue");

buttons.forEach(button => {
    button.addEventListener("click",function(){;
        if (button.value === "="){
            const userI = document.querySelector("#userInputValue");
            userI.value = eval(userI.value);
        }
        else if(button.value === "c"){
            userUpdate.value = ""
        }
        else{
            userUpdate.value += button.value;
        };
    });
});




