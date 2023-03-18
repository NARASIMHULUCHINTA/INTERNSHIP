t = (10, 2, 30, 3, 34, 342)
s = (10, 20, 30, 540, 3, 4)
print(len(t))
print(t.count(3))
print(t.index(30))
# print(t.index(90))==>value error
t1 = tuple(sorted(t))
print(t1)
t2 = tuple(sorted(t, reverse=True))
print(t2)
print(min(t1))
print(max(t2))
print(t < s)

a = 10
b = 30
c = 40
d = 75
t = a, b, c, d
print(t)  # ==>tuple packing
a, b, c, d, e, f = s
print(a, b, c, d, e, f)
