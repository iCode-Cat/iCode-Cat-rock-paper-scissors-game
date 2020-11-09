let items = document.querySelectorAll(".circle");
let triangle = document.querySelector(".triangle")
let main = document.querySelector(".icons-row-1");
let container = document.querySelector(".icon-container")
let score = document.getElementById("score");
let num;
let alert = document.getElementById("alert");
let btn = document.querySelector(".alert")
let button = document.getElementById("btn")
let zero;
const nextPlayer =  document.createElement("div");
let img = document.createElement("img");
const storedItem = localStorage.getItem("score")
if(score){
    
    score.innerText = storedItem
}

if(score.innerText.length === 0){
    score.innerText = 0

}



img.classList.add("height")






items.forEach(item => {
   
    item.addEventListener("click", function(e){
        
       dataNum = e.currentTarget.dataset.num
        num = e.currentTarget.dataset.num
        triangle.style.opacity="0%"
        zero=0
        
    })

    
    
function hideAll(){
    
    item.style.opacity=zero
    if(item.dataset.num == num){
     item.style.opacity="0%"
     
    }else{
        
    }
    let mySet = setInterval(() => {
        
        if(item.dataset.num == num){
            item.style.opacity="100%"
            
            main.classList.add("large")
            item.style.order="-3"
            main.appendChild(item)
            nextPlayer.style.order="-1"
            nextPlayer.classList.add("circle")
            nextPlayer.style.opacity="20%"
            main.appendChild(nextPlayer)
            btn.classList.add("alert")
            

            setTimeout(() => {
                if (random == 0){
                
                    nextPlayer.style.opacity="100%"
                    nextPlayer.classList.add("purp")
                    img.src="images/icon-paper.svg"
                    nextPlayer.appendChild(img)
                }
                if (random == 1){
                    
                    nextPlayer.style.opacity="100%"
                    nextPlayer.classList.add("yell")
                    img.src="images/icon-scissors.svg"
                    nextPlayer.appendChild(img)
                }
                if (random == 2){
                    
                    nextPlayer.style.opacity="100%"
                    nextPlayer.classList.add("red")
                    img.src="images/icon-rock.svg"
                    nextPlayer.appendChild(img)
                }
                count = storedItem;
                if (alert.innerHTML === "WIN"){
                    
                    count++
                
                }

                if (alert.innerHTML === "LOST"){
                    
                    count--
                    
                }
                score.innerHTML=count
                btn.style.display="flex"
                btn.style.opacity="100%"
            }, 1000);

            btn.style.position="relative"
            

           
            
        
           }
           
          
           
           clearInterval(mySet)
           
    }, 500);

    
   
}

this.addEventListener("click",()=>{

   
    
    if(random == dataNum ){
        console.log("DRAW");

        setTimeout(() => {
            alert.innerHTML="DRAW"
        }, 1500);

        
    }

    paper = 0
    scissors = 1
    rock = 2

    if(random > dataNum ){
        console.log("LOST");
        setTimeout(() => {
            alert.innerHTML="LOST"
        }, 1500);
        
    }
    if(random < dataNum ){
        console.log("WIN");
        setTimeout(() => {
            alert.innerHTML="WIN"
        }, 1500);
        
    }

   

    
    if(dataNum == 2 && random==0){
        console.log("LOST");
        setTimeout(() => {
            alert.innerHTML="LOST"
        }, 1500);
  }
    if(dataNum == 0 && random==2){
        console.log("WON");
        setTimeout(() => {
            alert.innerHTML="WIN"
            
        }, 1500);
        
        
  }

  
 
  hideAll()
  item.style.opacity="0%"
  
})



});

random = Math.round(Math.random()*2)

const saveToLocalStorage = () => {
   
    localStorage.setItem("score", score.innerHTML)
} 


btn.addEventListener("click", function(){
    
    location.reload();
    saveToLocalStorage()
})

clear.localStorage()

//LOCAL STORAGE



