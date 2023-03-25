var firstname = 'roselime' ;
var person = {
    firstname : 'jack',
    DOB : 1990,
    job : "pilot",
    getname : function() {
        console.log(this.firstname)
        console.log(firstname);
    },
    parents : {
        firstname : 'ryan',
        DOB : 1877,
        job : "army",
        getname : function() {
            console.log(this.firstname);
        }
    }
}

person.getname();
person.parents.getname();