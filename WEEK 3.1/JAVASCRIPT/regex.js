var str = "This 101 is a black ball pen.This pen is really smooth.It is a parker PEN"

//var pattern =  /pen/gi;
var pattern = new RegExp('pen','gi');
var pattern1 = new RegExp('[0-9]','g');
var pat = /./ig;

console.log(str.match(pat));
console.log(str.match(pattern));
console.log(str.match(pattern1));