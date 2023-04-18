//filter
//map
//reduce

/*const data = [1, 2, 3, 4, 5];

var output = 0;
for (var i = 0; i < data.length; i++) {
    output = output + data[i];
}

console.log(output);

const data1 = [1, 2, 3, 4, 5];

const op = data1.reduce((sum, currentValue) => {
    //console.log(currentValue);
    //console.log(sum);

    return sum + currentValue;
});

console.log(op);*/


const selectyourchoice = (action) => {
    /*switch (action.operation) {
        case 'addition':
            return action.a + action.b;
        case 'substraction':
            return action.a - action.b;

    }*/
    const temp = action.data;
    for (var i = 0; i < temp.length; i++) {
        console.log(temp[i])
    }
};



var op = selectyourchoice({
    a: 10, b: 20, operation: "addition",
    data: [
        1, 2, 3, 4, 5
    ],
});

//var op1 = selectyourchoice({ a: 10, b: 20, operation: "substraction" });

console.log(op);