////////////// ***********PROMISE**************** /////////////////////STARTS 

// let promise = new Promise((resolve, reject) => {
//   alert("this is promise")
// })

// console.log("hello world")
// setTimeout(function(){
//      console.log("print after  4 sec")
// }, 400 );

// console.log("har dil main basti hu main heroine hu ")
// console.log(promise)

// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending ")
//   setTimeout(() =>{

//      resolve(true)
//   },3000)
// })



// let p1 = new Promise((resolve, reject) => {
//   console.log("promise is pending ")
//   setTimeout(() =>{
//     //  console.log("hey everyone your work is fulfill now ")
//      reject(new Error("i am an error"))
//   },3000)
// })
// console.log(p , p1)

// p.then((value) => {
//   console.log(value)
// })

// p1.catch((error) =>{
//   console.log("some error occures in p1 ")

// })


// let p = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("your are successfully")
//     resolve(36)
//   },2000)
// })

// p.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve, reject) => {
//     console.log("2 promise")
//     resolve(34)
//   })
// }).then((value) => {
//   console.log("we are done ")
// })

//////////////////////////////////////   25 05  ///////////////////////////////////////////////////
// let p = new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("resolve after 2 sec ")
//         resolve( 23)
//        }, 2000)
// })

// p.then((value)=>{
// console.log(value)
// return new Promise((resolve, reject) => {
//   setTimeout(()=>{  resolve("promise 2")})

  
// })
// }).then((value)=>{
//   console.log("we aer done")
//   return 2
// }).then(()=>{
//   console.log ("final done ")
// })


// const loadScript = (src)=>{
//   return new Promise((resolve, reject) => {
    

// let script = document.createElement("script")
// script.type= "text/javascript"
// script.src = src
// document.body.appendChild(script)
// script.onload = () =>{
// resolve(1)
// }
// script.onerror = 
// })
// }

// let p = new Promise((resolve, reject) => {
//   alert("hey buddy ")
//   setTimeout(()=>{
//     resolve(22)
//   })
// }, 4000)

// p.then(()=>{
//   console.log("hey this wooorks")
// })

// p.then(()=>{
// console.log ("its done")
// })
// /////////////////////////////////////////////////////////////////////SOLVED//////////////////////////////////////
// let p = new Promise((resolve, reject) => {
  
//   setTimeout(()=>{
//     resolve("value 1")
//   },1000)
// })

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("value 2")
//   },2000)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("value 3")
//   },4000)
// })

// // p.then((value)=>{
// //   console.log(value)
// // })

// // p1.then((value)=>{
// //   console.log(value)
// // })


// // p2.then((value)=>{
// //   console.log(value)
// // })

// let promise_all=Promise.all([p,p1,p2])
// promise_all.then((value)=>{
//   console.log(value)
// })  


/////////////////////////////////////  "AWAIT"//////// "this function is not working /////////////////////
// async function aditi () {let bhopalweather = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     alert("45 degree celcius")
//   },2000)
// })

// let uttrakhandweather = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     alert("5 degree celcius")
//   },6000)
// })

// // bhopalweather.then(alert)
// // uttrakhandweather.then(alert)
// console.log("very hot  weather of bhopal")
// let bho = await bhopalweather
// console.log("very hot  weather of bhopal : " + bho)



// console.log("feteching weather of uttrakhand")
// let utt = await uttrakhandweather
// console.log("very hot  weather of uttrakhand  :" + utt)
// return[bho , utt]
// }

// // console.log("thankyou")
// let s =aditi()
// s.then((value)=>{
//   console.log(value)
// })

//////////////////////////////        error handling   ////////////////////////////////////////////////////////


// setTimeout(() => {
//     console.log("i am hacking u ...........")
// }, 1000);

// try{
//     console.log (ritik)
// }

// catch(error){
// console.log("balle balle")
// }

// setTimeout(() => {
//     console.log("u are hacked \'aditya \'.....")
// }, 3000);

// setTimeout(() => {
//     console.log("Now give me your account no ")
// }, 5000);


// setTimeout(() => {
//     console.log("i cradit all your money")
// }, 6000);

// try {
//     let age = prompt("entre your age !!")
//     age = Number.parseInt(age)
//     if(age>100){
//   throw new ReferenceError("your are so luckey")

//     }

//     else{
//         console.log("pretty young u are")
//     }
//     console.log(aditi)
//    throw new ReferenceError("aditi is very rich")
// } catch (error) {
// console.log(error . name)
// console.log(error.message)
// }

// console.log("running")

// const p=   ()=>  {
// try {
//     let a = 23
    
//     console.log("chal rha h code ")
// return

// } catch (error) {
//     console.log("nhi chal rha h code")
// }

// finally{
//     console.log ("chalna he chalna h issko ")
// }

// }

// p()

// console.log("aur sab badhiya")

// let age= prompt("what is your age ???")
// age = Number.parseInt(age)
let runagain = true;


const Cardrive=(age)=>{
return age>=18?true:false
}


while (runagain) {
    let age= prompt("what is your age ???")
age = Number.parseInt(age)
if (age<0){
    console.error("pls enter valid age ")
    break
}

if(Cardrive(age)){
    alert("yes u can drive >>>>.")
}
else{
    alert("you cant drive ")
}
runagain = confirm("do u want to see again")
}