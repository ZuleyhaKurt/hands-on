const input=document.querySelector(".lang-input")
const addBtn=document.querySelector("#add-btn")
const delBtn=document.querySelector("#delete-btn")
const langList=document.getElementById("lang-list")

const newUl=document.createElement("ul")
langList.appendChild(newUl)

addBtn.addEventListener("click",()=>{
    if(!input.value) {
        alert("please enter a lang..")
    }
    else{ 
        newUl.innerHTML +=`<li>${input.value}</li>`
        input.value="";
    }
    input.focus();
})

delBtn.addEventListener("click",()=>{
    newUl.childElementCount > 0 
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("there is no item to delete")

})

input.addEventListener("keydown",(event) =>{
    // console.log(event)
    // console.log(event.target),
    // console.log(event.keycode)
    if(event.keyCode ===13){
        addBtn.click()
    }
    if(event.code==="Delete"){
        delBtn.click()
    }
})


window.addEventListener("load",()=>{
    input.focus()
})