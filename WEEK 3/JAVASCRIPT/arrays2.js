var mfri=['narsi','sai','gani','jaga','raj']
mfri.splice(3,0,'ch','gumma')
console.log(mfri)
mfri.splice(0,0,'hari')

mfri.splice(2,1)
console.log(mfri)
mfri.splice(0,2)
console.log(mfri)

var afri=['bala','jash','viky']
console.log(afri)

var mall=mfri.concat(afri)
console.log(mall)

mall.sort()
console.log(mall)

mall.reverse()
console.log(mall)
