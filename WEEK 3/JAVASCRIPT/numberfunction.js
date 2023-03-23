var num1 =10;
//toString() number as a input and returns a string
console.log(num1.toString())
//"10"

var strNum1="10";
var strNum2="11.5";
var strNum3="ABC";
//parseInt()  string numeral as input and returns a number
console.log(parseInt(strNum1));
//10

console.log(parseFloat(strNum2));//11.5
console.log(parseFloat(strNum3));//Nan

var strFloat=87.456434;
console.log(strFloat.toFixed());//87
console.log(strFloat.toFixed(2));//87.45