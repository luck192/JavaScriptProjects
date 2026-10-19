document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById("searchButton");
    const usernameInput = document.getElementById("userName");
    const statsContainer = document.querySelector(".statsContainer");

    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    
    const easyLabel= document.getElementById("EasyLabel");
    const mediumLabel= document.getElementById("MediumLabel");
    const hardLabel= document.getElementById("HardLabel");

    const cardStats = document.querySelector(".stats-card");

    //retunr true or fals based on regx
function validateUserName(Enteredusername){
        
        if( Enteredusername.trim() ===""){
            alert("UserName:Should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{3,20}$/;
        const isMatching = regex.test(Enteredusername);
        if(isMatching === false){
            alert("Error: invalid userName");
        }
        return isMatching;
    }

async function fetchUserDetails(Enteredusername){
      const url = `https://alfa-leetcode-api.onrender.com/${Enteredusername}/solved`
      try{
        searchButton.textContent = "searching...";
        searchButton.disabled = true;

        const response = await fetch( url );
        //response is also an object or agr status code 404 aya toh .ok pkdlega
        // response.errors[0].extensions.skip_sentry
        if(!response.ok ){
            throw new Error("fetch ni ho payaa");
        }
        const data = await response.json();
        console.log("Logging data:", data);
        //  console.log("Logging data:", data.easySolved);
        displayUserData( data );
      }
       //   code_lucky-1
      catch(error){
       statsContainer.innerHTML = `<p>${error.message}$</p>`
      }
      finally{
         searchButton.textContent = "Search";
         searchButton.disabled = false;
      }
    }

    function displayUserData(data){
        easyLabel.textContent = `${data.easySolved}/${820}`;
        const progressEasy = (data.easySolved/820)*100;
        easyProgressCircle.style.setProperty("--progress-degree",`${progressEasy}%`);
        
        mediumLabel.textContent= `${data.mediumSolved}/${1711}`;
        const progressMedium= (data.mediumSolved/1711)*100;
        mediumProgressCircle.style.setProperty("--progress-degree",`${progressMedium}%`);

        hardLabel.textContent= `${data.hardSolved}/${732}`;
        const progresshard= (data.hardSolved/732)*100;
        hardProgressCircle.style.setProperty("--progress-degree",`${progresshard}%`);
        
    }
    
    usernameInput.addEventListener("keydown", function(e){
        if( e.key =="Enter"){
            searchButton.click();
        }
    });
    searchButton.addEventListener('click', function(){
        const Enteredusername = usernameInput.value ;
        console.log("logging username",Enteredusername);
        if(validateUserName(Enteredusername)){
            //api -> https://leetcode-stats-api.herokuapp.com/<E>
            fetchUserDetails(Enteredusername);
        }
        
    })
})