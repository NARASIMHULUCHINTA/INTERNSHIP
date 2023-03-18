l = [10, 20, 30, 40, 10, 'narsi']
print(len(l))
print(l.count(10))
print(l.index(20))
l.append(10)
l.append(20)
l.append(34576)
print(l)
s = []
for x in range(101):
    if x % 10 == 0:
        s.append(x)
print(s)
l.insert(1, 'narsi')
l.insert(50, 777)
l.insert(-10, 43)
print(l)
l.extend(s)
print(l)
l1 = l.reverse()
print(l)

l4 = l.copy()
print(l4)
