word = input("enter some word:")
d = {}
for x in word:
    d[x] = d.get(x, 0)+1
for k, v, in sorted(d.items()):
    print("{} occured {} times".format(k, v))
