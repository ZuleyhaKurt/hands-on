//! ARRAY SORT

const find=(arr,n) => {
    if(n > arr.length){
        console.log("out of range")
    }
    else{
        let newArr=arr.sort(function(a, b){return a-b})
        console.log(newArr)
        console.log(newArr[n-1])
    }
}
let array=[3,9,17,56,88,92,75,6,11,67]
let number =+prompt("enter a number ");
find(array,number)

///************ */
/******* */
//******** */
//! SSN VALİDATOR
const validator=()=>{
    
}