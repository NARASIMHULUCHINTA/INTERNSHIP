l = []
for x in range(1, 11):
    l.append(x*x)
print(l)

l1 = [x*x for x in range(1, 11)]
print(l1)

l1 = [x+x for x in range(1, 11)]
print(l1)

l1 = [x for x in range(1, 11) if x % 2 == 0]
print(l1)

l1 = [2**x for x in range(1, 11)]
print(l1)

l1 = [x**2 for x in range(1, 11) if (x**2) % 2 != 0]
print(l1)

word = ['narsi', 'sai', 'gani']
l = [w[0] for w in word]
print(l)

l = [w for w in word if len(w) > 3]
print(l)

n1 = [10, 20, 30, 40]
n2 = [29, 40, 30, 23]
n3 = [x for x in n1 if x not in n2]
print(n3)


word = 'the quick brown fox jumps over the lazy dog'.split()
print(word)
l = [w.upper() for w in word]
print(l)
l = [[w.upper(), len(w)] for w in word]
print(l)
