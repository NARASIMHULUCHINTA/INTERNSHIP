x = 10
print(x)
del x
# print(x) --> error

s = "durga"
del s
# print(s)


s1 = "durga"
s2 = "durga"
print(id(s1), id(s2))
del s1
print(s2)
