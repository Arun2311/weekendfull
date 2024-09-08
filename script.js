// data type

// javascript

// String  ""

// "Arun"

// Number 

// Boolean

// undefined

// null





// var name =null

// console.log(name);


// console.log(6%2);

// compariosn
// ==
// ===

// console.log(null > null);




// logical operator

// and 
// or
// not




// if else else if and switch case

// var age = 19
// if (age > 19) {
//     console.log("drive");
// }
// else if (age > 15) {
//     console.log("learn drivbe then get licene");
// }
// else {
//     console.log("not drive");

// }

// if (age > 19) {
//     console.log("drive");

// }


// if (age > 15) {
//     console.log("learn drivbe then get licene");

// }




// switch case task


// ternary operatorv


// var age  =  19

// var def =  age > 18 ? "u can dive" :  "u cant drive"

// console.log(def);


// for loop

// with one dsa or leetcode question


// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// count factors

// given a number 
// 12 - 1,2,3,4,6,12 - 6

// var no = 36
// var count = 0
// for (var i = 1; i <= no; i++) {
//     if (no % i == 0) {
//         count++
//     }
// }

// console.log(count);

// optimisation 


// function

// ADd(2,4)
// console.log(ADd,"1");

// function ADd(a,b){
//     console.log(a+b);
// }



// function expression 

// console.log(Add , "2");

// var Add = function(a,b){
//     console.log(a+b);
// }



// es6 intro








// ecma

// ecmascript 
// es1
// es2
// es3

// es6

// let,const

// var a = 10
// a= 12 
// // --- reassign
// var a =  14
// console.log(a);


// const a = 10

// a = 12
// console.log(a);


// es15

// arrow function

// const add = () => {

// }





// function arrw 


// array

// object




// arrow function.


// function checkage(){

// }


// const checkage =()=>{
//     console.log("AAA");
// }

// checkage()


// Non primitive ds


// primitve  = ""

// var a = "Arunnnn"

// console.log(a[1]);



// Array and object


// let a = ["luffy" ,"Zoro" ,1,true,"sanji"]



// a.push("nami")  - adding last array

// a.pop() =--- removing last in array

// a.unshift("ssaas") - adding first ""

// a.shift()  removing first


// console.log(a);

// let details = {
//     name:"Arun",
//     age:23,

// }

// details.age =  21

// console.log(details);


// array and object\


// array of objects


// let cardetails = [
//     {
//         name:"swift"
//     },
//     {
//         name:"innova"
//     },
//     {
//         name:"bmw"

//     }
// ]


// console.log(cardetails[1]["name"]);

// Node js 
// Express js
// mongodb - with queries and mongose

// TWO ways 
// 1.rest api
// 2.graphql



// array foreach


// let a = ["luffy" ,"Zoro" ,"sanji" ,"nami" ,"ussop"]

// a.forEach((da,i)=>{
// console.log(da,i);
// })


// let b =  a.map((da,i)=>{
//    return da

// })
// console.log(b);


// filter

// let a = ["dluffy" ,"Zoro" ,"sanji" ,"nami" ,"ussop"]

// let b = a.find((da)=> da.length>4)


// console.log(b);

// reduce

// let score = [20,56,57,46,84,34,56]


// let ts = score.reduce((acc,curr)=>{
// return acc + curr
// })

// console.log(ts);



// let a =  [1,2,3]

// let b =  [4,5,6]

// let d = [8,9]
// let c =  a.concat(b,d)

// console.log(c);\
// \

// let score = [20,56,57,46,84,34,56]



// console.log(score.slice(2,6));


// splice



// let a = ["dluffy" ,"Zoro" ,"sanji" ,"nami" ,"ussop"]

// a.splice(1,0,"arun") insert

// a.splice(1,1,"arun","sass")


// console.log(a);

// let score = [20,52,52,42,84,34,56]

// // some every

// let b  =  score.every((a)=>a%2==0)
// console.log(b);
// console.log(score.indexOf(5724));



// let a =  "hello"


// console.log(!a,"-----------! 1");

// console.log(!!a ,"----------! 2") ;

// console.log(!!!a ,"----------! 3");


// let a  = 2
// let b  = "2"

// console.log(a !== b);





// console.log("a");

// setTimeout(()=>{
// console.log("b");
// },1000);

// console.log("c");

// // console.log("d");


// // setTimeout(()=>{
// //     console.log("e");
// //     },500);

// // console.log("f");

// // console.log("g");



// let a  ={

//     name:"Arun",
//     age :25,
//     addres:{
//         city:"Kpm",
//         state:"tn"
//     }
// }

// // let b  = {...a} --shalwo copy

// let b  = JSON.parse(JSON.stringify(a))


// b.age = 26
// b.addres.city = "chenn"




// console.log(b, "----b");

// console.log(a ,"----a");



// call abc/k

// function a(cb){
// console.log("a");

// cb()
// }


// function b(){
//     console.log("b");
// }

// a(b)

// primis/e


// new prom


// let response = fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((data) => {

//         let a = data.json()
//         return a
//     })
//     .then((datajson) => {
//         console.log(datajson);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// const apifetch = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     let data  = await  response.json()
//     console.log(data);
// }

// apifetch()
// console.log(response);







// Dom


// js to json - stringfy


// json to js - parse




// let a = {
//     name:"arun",
//     age:245
// };

// console.log(a);

// let b  = JSON.stringify(a)
// let c  = JSON.parse(b)
// console.log(c);




// DOM

// const name = {a:1,b:3,c:4,d:5}

// let {a,b,c,d} = name


// console.log(b);


// today 

// js two place 


// console.log(this);


// function ad(){
//     console.log(this);
    
// }

// ad()


// var a  =  {
//     name :"arun",
//     show:function(){
//         // console.log(this)
//         function adddd(){
//          console.log(this);
         
//         }
//         adddd()
//     }
// }

// a.show()



// let a   = []


// let a  = {
//     name:"arum",
//     age:24,
//     adr:{
//         state:"tn",
//         city:"kpm"
//     }
// }


// // let b = {...a}
// let  b  =  JSON.parse(JSON.stringify(a))
// b.age =  256
// a.adr.city ="ch"


// console.log(a);

// console.log(b);




// let a = 23

// let   b = a
// b = 25



Array.prototype.map= function(call,arg){
    console.log("custom map created",);
}




















let a  = [1,2,3,4,6]


let b = a.map((vv)=>{
    // console.log(vv);
    
})




// console.log(a);
