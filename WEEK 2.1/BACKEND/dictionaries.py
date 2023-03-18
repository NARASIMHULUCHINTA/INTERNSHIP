d = {}
d[10] = 'narsi'
d[20] = 'vignesh'
d[30] = 'rajesh'
print(d)
print(d[10])
d[10] = 'sai'
print(d)
del d[10]
print(d)
d.clear()
print(d)
del d
# print(d)==> name d is not defined
list = [10, 20, 30, 60]
d = {}
d[100] = list
print(d)
