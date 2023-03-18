s=lambda x:x*x
print(s(2))
s=lambda a,b:a+b
print("the sum {} and {} is : {}".format(2,4,s(2,4)))
s=lambda a,b:a if a>b else b
print("the biggest of {} and {} is : {}".format(200,100,s(200,100)))