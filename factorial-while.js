// function getFactorial(number){
//     let factorial=1;
//     let i=1;
//     while(i<=number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// let myNumber = 7;
// let factorilaOut = getFactorial(myNumber);
// console.log(factorilaOut);

// function getFactorial(number){
//     let factorial =1;
//     let i = number;
//     while(i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// let myNumber = 7;
// let factorilaOut = getFactorial(myNumber);
// console.log(factorilaOut);


function getFactorial(number){
    let factorial =1;
    for( let i = number;i >= 1 ;  i--;){
        factorial = factorial * i;
    }
    return factorial;
}
let myNumber = 7;
let factorilaOut = getFactorial(myNumber);
console.log(factorilaOut);