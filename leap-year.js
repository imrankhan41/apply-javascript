function leap(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return true;
    }
    else{
        return false;
    }
}
 const myYear = 2020;
 const isMyYear = leap(myYear);
 console.log(isMyYear);