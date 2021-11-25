function factorial(n){
   if (n==1){
       return 1;
   }
    return n * factorial(n-1);
}
let myNumber =  7;
let factorilaOut = factorial(myNumber);
console.log(factorilaOut);