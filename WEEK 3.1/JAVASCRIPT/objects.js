var audi={
    name :"audi",
    manufacturer:
    {
        name:"motors",
        location:"paris"
    },
    topspeed:"766",
    color:"blue",
    applybrakes:function()
    {
        setTimeout(function(){
            console.log('carstopped');
        }, 5000)
    }
}

console.log(audi.name)
console.log(audi.manufacturer)
console.log(audi.manufacturer.name)
console.log(audi.applybrakes)
console.log(typeof(audi))