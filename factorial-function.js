// let factorial =1;
// for (let i=1; i<=5; i++){
//     factorial = factorial * i;
//     console.log(factorial);
// }
function factorial(number){
    let fact =1;
    for (let i=1; i<=number; i++){
    fact = fact * i;
    }
    return fact;
}
let myNumber = 7;
let factorilaOut = factorial(myNumber);
console.log(factorilaOut);

let urNumber = 9;
let getFactorilaOut = factorial(urNumber);
console.log(getFactorilaOut);