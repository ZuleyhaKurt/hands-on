// //! ARRAY SORT

// const find=(arr,n) => {
//     if(n > arr.length){
//         console.log("out of range")
//     }
//     else{
//         let newArr=arr.sort(function(a, b){return a-b})
//         console.log(newArr)
//         console.log(newArr[n-1])
//     }
// }
// let array=[3,9,17,56,88,92,75,6,11,67]
// // let number =+prompt("enter a number ");
// find(array,2)

// ///************ */
// /******* */
// //******** */
// //! SSN VALİDATOR
// // const validator=(ssn)=>{
// //     if(ssn.length!=11){
// //         console.log("it's not valid")
// //     }
// //     else if (ssn[3]!="-" && ssn[6]!=="-"){
// //         console.log("it's not valid")
// //     }
// //     else if(ssn.splice(0,3))
// // }

// // let ssn="268-26-3556"
// // let newSsn=ssn.split("")
// // console.log(newSsn)
// // validator(newSsn)
// // // const first= newSsn.splice(0,3)
// // // console.log(first)
// // // const second=newSsn.splice(1,2)
// // // console.log(second)
// // // const third= newSsn.splice(2,5)
// // // console.log(third)
// // // console.log(newSsn)

// // 
// let arr=["285","12","2565"]
// console.log(arr[0].length)


const validator=(arr)=> {
    let newarray=arr.split("")
    let newarray2=arr.split("-")
    console.log(newarray)
    console.log(newarray2)

   
       if(isNaN( +newarray2[0]) || isNaN( +newarray2[1]) || isNaN(+newarray2[2])){
        console.log("this is invalid")
       }
    
        else if(newarray.length !=11){
            console.log("this enter is an  invalid")
        }
        else if (newarray[3]!=="-" && newarray[6]!=="-"){
            console.log("this enter is an  invalid")
        }
        
        else if (newarray2[0]==="000" || newarray2[0]==="666" || +newarray2[0]>900 ){
            console.log("this enter is an  invalid")
        }
        else {                                                                                                       console.log("your enter is valid, congrats")
        }  
}

let array="268-55-3466"
validator(array)