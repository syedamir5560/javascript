/*
Memoization=>
    memoization is optimization techniqe that can be used to reduce time consuming calculation by saving
 previous input to cache and second time returning the result from it.

 let  sum = 0

function calc(n){
    for(let i = 0; i<=n;i++){
        sum+=i
    }
    return sum
}

let memo=(calc)=>{
let cache={};
return function(...args){
    let n = args[0];
    if(n in cache){
        console.log("cache")
        console.log(cache)
        return cache[n]
    }
    else{
        console.log("calculatinf fist time")
        let res = calc(n)
        cache[n]=res
        return res
        }
    }
}
console.time()
let  effi=memo(calc)
console.log(effi(4000))
console.timeEnd()

console.log("second")
console.time()
console.log(effi(4000))
console.timeEnd()
*/