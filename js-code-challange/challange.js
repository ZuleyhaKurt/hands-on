// // //! ARRAY SORT

// // const find=(arr,n) => {
// //     if(n > arr.length){
// //         console.log("out of range")
// //     }
// //     else{
// //         let newArr=arr.sort(function(a, b){return a-b})
// //         console.log(newArr)
// //         console.log(newArr[n-1])
// //     }
// // }
// // let array=[3,9,17,56,88,92,75,6,11,67]
// // // let number =+prompt("enter a number ");
// // find(array,2)

// // ///************ */
// // /******* */
// // //******** */
// // //! SSN VALİDATOR
// // // const validator=(ssn)=>{
// // //     if(ssn.length!=11){
// // //         console.log("it's not valid")
// // //     }
// // //     else if (ssn[3]!="-" && ssn[6]!=="-"){
// // //         console.log("it's not valid")
// // //     }
// // //     else if(ssn.splice(0,3))
// // // }

// // // let ssn="268-26-3556"
// // // let newSsn=ssn.split("")
// // // console.log(newSsn)
// // // validator(newSsn)
// // // // const first= newSsn.splice(0,3)
// // // // console.log(first)
// // // // const second=newSsn.splice(1,2)
// // // // console.log(second)
// // // // const third= newSsn.splice(2,5)
// // // // console.log(third)
// // // // console.log(newSsn)

// // // 
// // let arr=["285","12","2565"]
// // console.log(arr[0].length)


// const validator=(arr)=> {
//     let newarray=arr.split("")
//     let newarray2=arr.split("-")
//     console.log(newarray)
//     console.log(newarray2)

   
//        if(isNaN( +newarray2[0]) || isNaN( +newarray2[1]) || isNaN(+newarray2[2])){
//         console.log("this is invalid")
//        }
    
//         else if(newarray.length !=11){
//             console.log("this enter is an  invalid")
//         }
//         else if (newarray[3]!=="-" && newarray[6]!=="-"){
//             console.log("this enter is an  invalid")
//         }
        
//         else if (newarray2[0]==="000" || newarray2[0]==="666" || +newarray2[0]>900 ){
//             console.log("this enter is an  invalid")
//         }
//         else {                                                                                                       console.log("your enter is valid, congrats")
//         }  
// }

// let array="268-55-3466"
// validator(array)

// const noRepeat=(str)=>{
//     let arr=[...str]
//     const newarray=[]
//     newarray.push(arr[0])
//     for(i=1; i<arr.length; i++){
//         if (arr[i]!==arr[i-1]){
//             newarray.push(arr[i])
//         }
//     }console.log(newarray)
// }
// noRepeat("AAABBBCCDDDD")
// noRepeat([1,1,1,2,2,3,4,5])


// const noRepeat=(str)=>{
//     return [...str].filter((el,i,arr)=> el!==arr[i-1])
   
//     newarray.push(arr[0])
//     for(i=1; i<arr.length; i++){
//         if (arr[i]!==arr[i-1]){
//             newarray.push(arr[i])
//         }
//     }console.log(newarray)
// }
// console.log( noRepeat("AAABBBCCDDDD"))
// console.log( noRepeat([1,1,1,2,2,3,4,5]))


// const obja={a:10, b:20, c:30}

// function combine (){

// }
// console.log(combine(objA,objB,objC))

//! ROMAN RAKAMLARI
// const cover=(s) => {
// let sayi=0;
// let sonuc="";
// sayi=Math.floor((s/1000))
// switch (sayi)
// {
// case 1: sonuc+= "M"; s = s % 1000; break;
// case 2: sonuc+= "M";sonuc+= "M" ; s= s%1000; break;
// case 3: sonuc+= "M";sonuc+= "M" ;sonuc+= "M" ; s= s%1000; break;
// default: break;
// }

// sayi = Math.floor(s/100);

// switch (sayi)
// {
// case 1: sonuc+= "C"; s= s%100; break;
// case 2: sonuc+= "C"; sonuc+= "C" ;s= s%100; break;
// case 3: sonuc+= "C"; sonuc+= "C" ;sonuc+= "C" ;s= s%100; break;
// case 4: sonuc+= "C";sonuc+="D"; s= s%100; break;
// case 5: sonuc+= "D"; s= s%100; break;
// case 6: sonuc+= "D";sonuc+= "C" ; s= s%100; break;
// case 7: sonuc+= "D";sonuc+= "C" ;sonuc+= "C" ; s= s%100; break;
// case 8: sonuc+= "D";sonuc+= "C" ;sonuc+= "C" ;sonuc+= "C" ; s= s%100; break;
// case 9: sonuc+= "C";sonuc+= "M" ; s= s%100; break;
// default: break;
// }

// sayi = Math.floor(s / 10);

// switch (sayi)
// {
// case 1: sonuc+= "X"; s= s%10; break;
// case 2: sonuc+= "X"; sonuc+="X"; s= s%10; break;
// case 3: sonuc+= "X";sonuc+= "X"; sonuc+= "X"; s= s%10; break;
// case 4: sonuc+= "X"; sonuc+="L"; s= s%10; break;
// case 5: sonuc+= "L"; s= s%10; break;
// case 6: sonuc+= "L"; sonuc+="X"; s= s%10; break;
// case 7: sonuc+= "L";sonuc+= "X"; sonuc+= "X"; s= s%10; break;
// case 8: sonuc+= "L";sonuc+= "X"; sonuc+= "X";sonuc+="X" ; s= s%10; break;
// case 9: sonuc+= "X"; sonuc+="C"; s= s%10; break;
// default: break;
// }

// switch (s)
// {
// case 1: sonuc+= "I"; s= s%10; break;
// case 2: sonuc+= "I";sonuc+= "I" ; s= s%10; break;
// case 3: sonuc+= "I";sonuc+= "I" ;sonuc+= "I" ; s= s%10; break;
// case 4: sonuc+= "I";sonuc+= "V" ; s= s%10; break;
// case 5: sonuc+= "V"; s= s%10; break;
// case 6: sonuc+= "V"; sonuc+= "I" ;s= s%10; break;
// case 7: sonuc+= "V"; sonuc+= "I" ;sonuc+= "I" ;s= s%10; break;
// case 8: sonuc+= "V"; sonuc+= "I" ;sonuc+= "I" ;sonuc+= "I" ;s= s%10; break;
// case 9: sonuc+= "I";sonuc+= "X" ; s= s%10; break;
// default: break;
// }

// return sonuc;

// }

// console.log(cover(1125))
//**********************
//! 2 ARRAY CONCANT AND SORT
// const order=(a,b) => {
// for(i=0;i<b.length;i++){
//     a.push(b[i])

// }
// b.map(c=>a.push(c))
// console.log(a.sort((a,b)=>a-b))
// }

// order([2,4,8],[3,7,10])
//***************************************
//! cc1 /////////////
// const reverse=(str)=>{
// let newstr="";
// for(let i=str.lenght -1;i >= 0; i--){
//     newstr=newstr + str[i];
// }
// return newstr;
// }
// const value="ayse"
// console.log(value[2])
//  const result=reverse(value)
//  console.log(result)

//! ******************************
// const reverseWord=(str)=>{
// let newstr1=str.split(" ")
// let newstr2="";
// for(let i=newstr1.lenght - 1;i >= 0; i--){
//         newstr2=newstr2 +" "+ newstr1[i];
// }
// console.log(newstr2)


// }
// const value="seviyorum seni Mustafa"
// reverseWord(value)

let fullStack ={
        languages:["js","react","html"],
        jira:true,
        github:true,
        difficulty:8,
}
let sonuc=""
for(const item of fullStack["languages"]){
      sonuc=sonuc + item + ","
      
}
console.log(sonuc)