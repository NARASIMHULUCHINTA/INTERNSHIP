const number = [1,-1,2,3];

//const filtered = number.filter(n => n>=0);

//const items = filtered.map(n => '<li>' + n + '<li>');

//const html = '<ul>' + items.join('') + '<ul>';


//const items = filtered.map(n => ({ value : n}))

const items = number
.filter(n => n>=0)
.map(n => ({ value : n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value)
console.log(items);

