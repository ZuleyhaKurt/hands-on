const h1=document.querySelector("#header h1");
  h1.onmouseover=function () {
    h1.style.color="red";
    h1.style.fontweight="300";
    console.log("onmouseover")
  };
  h1.onmouseout=() =>{
    h1.style.color ="black";
    h1.style.fontWeight="900"
    console.log("onmouseout")
  };
  h1.addEventListener("click",() =>{
    alert("H1 pressed")
  })

  ///////
  document.getElementById("btn").addEventListener("click",function(){
    const input = document.querySelector("#input")
!input.value 
       ? alert("Please enter a item") 
       :alert(`${input.value} entered`)
    input.value="";
  })

  const print=()=>{
    console.log("starting")
  }
  print()

  const list =document.querySelectorAll(".list");
  
  list.forEach((li)=>{
    li.style.transition="all 0.8s"
    li.style.lineHeight="2rem";
    
    li.onmouseover=()=>{
        li.style.fontSize="2rem"
        li.style.transform="translateX(10px)"

    };
    li.onmouseout=()=>{
        li.style.fontSize="1rem"
        li.style.transform="translateX(-10px)"
    }
  })

  window.onload=function(){
    document.querySelector("#input").focus();
  };