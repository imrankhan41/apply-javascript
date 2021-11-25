function inchtoFeet(inches){
    var feet = inches/ 12;
    return feet;
}

var myInches = 132;
var feet =inchtoFeet(myInches);
console.log('my inches into feet', feet);

var dadiInches = 144;
var feet = inchtoFeet(dadiInches);
console.log('my inches into feet', feet);

var nanaInches = 142;
var feet = inchtoFeet(nanaInches);
console.log('my inches into feet', feet);

var naniInches = 156;
var feet = inchtoFeet(naniInches);
console.log('my inches into feet', feet);

// mile to kilometer

function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var run =26.45;
var marathon = mileToKilometer(run);
console.log('my miles into km', marathon);