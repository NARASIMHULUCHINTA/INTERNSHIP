const number = [1,-1,2,3];

let sum = 0;

for(let n of number)
    sum += n;

console.log(sum);    

/*const sum1 =  number.reduce((accumulator,currentvalue) =>{
    return accumulator + currentvalue;
},0);
*/

/*const sum1 =  number.reduce((accumulator,currentvalue) =>{
    return accumulator + currentvalue;
});
*/

const sum1 =  number.reduce(
    (accumulator,currentvalue) => accumulator + currentvalue
 );


console.log(sum1);