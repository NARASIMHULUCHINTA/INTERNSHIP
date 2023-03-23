var person = {
    name : 'jack',
    DOB : 1990,
    job : 'navy officer'
}

function Person(pname,pDOB,pjob){
    this.name = pname;
    this.DOB = pDOB;
    this.job = pjob;

     
}

Person.prototype.calculateage = function()
{
    console.log(2023 - this.DOB);
}

Person.prototype.lastname = "clark"

Person.prototype.updatedob = function(Db)
{
    this.DOB = Db ;
}
var john = new Person('john',1992,'pilot')
console.log(john);
john.calculateage();

console.log(john);
console.log(john.lastname);
john.updatedob(1990);
john.calculateage();