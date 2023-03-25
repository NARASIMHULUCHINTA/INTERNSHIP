var mobj = {
    "name" : 'john',
    "age" : 28,
    "lastname" : undefined,
    "getname" : function()
    {
        return this.name
    },
    "married" : false,
    "score" : [23,24,25,26],
    "maths" : null
}

console.log(mobj.age);

var marr = [
    {
        "name" : 'john',
        "age" : 28
    },
    {
        "name" : 'jack',
        "age" : 23
    },
    {
        "name" : 'smith',
        "age" : 20
    }
]

console.log(marr[0]);
console.log(marr[0].name);

var strjson = JSON.stringify(mobj);
console.log(strjson);
console.log(JSON.parse(strjson));
