// const n1 = document.getElementById("num1")
// const n2 = document.getElementById("num2")
// const add = document.getElementById("add")
// const sum1 = document.getElementById("sum")

// add.addEventListener("click",()=>{
// let sum =0
// sum=parseInt(n1.value)+parseInt(n2.value)
// console.log(sum);
// sum1.innerHTML=sum
// })

// const input = document.getElementById("input")
// const prime = document.getElementById("prime")
// const likeC = document.getElementById("likecounter")




const genarate_prime=(z)=>{
    let arr=[]
    for(let j=2;j<=z;j++){
        if(isPrime(j)){
            arr.push(j)
        }
    }
    return arr
}
const isPrime=(x)=>{
    let c=0;
for(let i=1;i<x;i++){
    if(x%i===0){
        c++
    }
}
if(c>1){
    return false
}
else{
    return true
}
}
// console.log(genarate_prime(100));
console.log(1==="1");
// input.addEventListener('click',genarate_prime)