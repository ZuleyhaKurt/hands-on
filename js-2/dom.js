const list=document.getElementById("li")
console.log(list)
list[2].style.color="red"
list[4].innerText="Django/Flask"
console.log(list[1].textContent)
console.log(list[1].innerText)

list[4].innerHTML= "<p>c++</p>"