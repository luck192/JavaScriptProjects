document.addEventListener("DOMContentLoaded",function(){

    const taskInput = document.getElementById("inputid");
    const addButton = document.getElementById("buttonid");
    const listContainer = document.getElementById("listContainer");
        
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
 
    taskInput.addEventListener("keypress", function(event){
        if( event.key == "Enter"){
            addButton.click();
        }
    })

    addButton.addEventListener('click',function(){
     const tasktext = taskInput.value.trim();
     if(tasktext ==""){
        alert("alert: kch to task krle");
     }else{
        
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.textContent = tasktext;
        li.appendChild(span);
        listContainer.appendChild(li);
        // make a task;
        taskInput.value ="";

        //save in local memory
        saveData();
     }
    }); 
    listContainer.addEventListener('click',function(e){
            console.log("target dekh le:", e);
            if(e.target.tagName === "SPAN"){
                e.target.closest("li").remove();
                saveData();
            }
            else if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                saveData();
            }
        }) 
     showTask();
} );



