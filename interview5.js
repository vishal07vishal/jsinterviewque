//1
let button=document.getElementById("btn");
button.addEventListener("click",function(){
    let heading=document.getElementsByTagName("h1")[0].innerText='MERN stack'
})

//2
// Write code to get 1st H1 element from a webpage using DOM

let heading1 = document.getElementsByTagName("h1")[0];

//3
setInterval(()=>{
let time= new Date()
let a=time.getHours()
let b=time.getMinutes()
let c=time.getSeconds()

const hours=document.getElementById("hours")

const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds");

hours.innerHTML=a;
minutes.innerHTML=b;
seconds.innerHTML=c;
},1000)

//4
let heading=document.getElementById("heading")
const btn2=document.getElementById("btn2")

btn2.addEventListener("click",function(){
    heading.innerText='Welcome to Elevation Academy!!!';
})

//5
const btn3 = document.getElementById('btn3')
const hello=document.getElementById("hello")
btn3.addEventListener('click',function(){
    hello.style.display ="none";
}) 

//6
let array = [1,0,1,0,1,0];
let count=0;
for(let i of array){
    if(i == 0){
         count=count+1;
    }
}

console.log(count);

//7
let arr = [2,3,4,5,6];
let x=0;
let a=0;
for(let i=0 ; i<arr.length ; i++ ){
    if(arr[i]%2==0){
        x=x+1;
    }
    else{
        a=a+1;
    }
}
console.log(x);
console.log(a);


// //8
// function findVowels(str){
//     let length2 = str.length;
//     let count2 = 0;
//     for( i = 0; i<arrlength2 ; i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count = count2 + 1
//         }
//     }
//     console.log(count2);

// }
// findVowels("vishalaa");