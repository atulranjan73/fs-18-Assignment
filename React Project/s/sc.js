// let ans = Math.max(1,2,4,5,6,7,4,4,1,44,44,3)
// console.log(ans)

// function Sum(a ,b ){
//     return a+b;
// }


//  var myA = [2,3]
// let  ans = Sum(...myA);
// console.log(ans);


console.log("hello")
console.log("hello")

function Sum(...a){
    let sum = 0 ;
    for (const i of a) {
         Sum += i;
        
    }
    return Sum; 
}

console.log(Sum(4,5,4));