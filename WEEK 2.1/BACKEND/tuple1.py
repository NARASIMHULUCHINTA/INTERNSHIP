t = eval(input("enter some tuple of numbers :"))
l = len(t)
sum = 0
for x in t:
    sum = sum+x
print("the sum :", sum)
print("the average :", sum/l)
