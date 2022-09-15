let randomNumber=Math.round(Math.random() *100)
console.log(randomNumber)
let score=10
// let topScore=0

let topScore=localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent=topScore
// console.log(topScore)
document.querySelector(".check-btn").addEventListener("click",()=>{
    const guessInput=+ document.querySelector(".guess-input").value;
    // console.log(guessInput)
    const msg=document.querySelector(".msg")
    const body=document.querySelector("body")

    if(!guessInput){
       msg.innerText="please enter a number"
    }
    else if (randomNumber === guessInput) {
        msg.innerHTML=`Congrats,You Win <i class="fa-solid fa-face-grin-hearts"></i>`;
        body.className="bg-success"

        if(score >= topScore){
            localStorage.setItem("topScore", score);
            document.querySelector(".top-score").textContent=score;
        }
        document.querySelector(".secret-number").textContent=randomNumber
    }else{
        score--;
        if(score >= 0){
        guessInput > randomNumber 
        ? msg.innerText="Decrase!" 
        : msg.innerText="Increase" 
        document.querySelector(".score").textContent= score;
        }else{
            msg.innerText="You Lost";
            document.querySelector(".secret-number").textContent=randomNumber
            document.querySelector(".check-btn").disabled=true;
            body.className="bg-danger"
        }
    }

})

document.querySelector(".again-btn").addEventListener("click",()=>{
    score=10;
    randomNumber=Math.round(Math.random() *100)
    console.log(randomNumber)
    document.querySelector(".score").textContent= score;
    document.querySelector(".check-btn").disabled=false;
    document.querySelector(".secret-number").textContent="?"
    document.querySelector("body").classList.remove("bg-success", "bg-danger")
    document.querySelector(".guess-input").value=""
    document.querySelector(".msg").innerText=`Starting`
    

})

// myObj={a:1, b:2,c:3};
// localStorage.setItem("OBJ",JSON.stringify(myObj))
// const readobj=localStorage.getItem("OBJ")
// const readOBJ=JSON.parse(localStorage.getItem("OBJ"))
// console.log(typeof readobj)
// console.log(typeof readOBJ)

document.querySelector(".guess-input").addEventListener("keydown" , (e)=> {
    if(e.code === "Enter"){
        document.querySelector(".check-btn").click()
    }
})