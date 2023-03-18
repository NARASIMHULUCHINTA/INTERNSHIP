l = eval(input("enter some values :"))
l1 = []
s = set(l)
print(s)

for x in l:
    if x not in l1:
        l1.append(x)
print(l1)
