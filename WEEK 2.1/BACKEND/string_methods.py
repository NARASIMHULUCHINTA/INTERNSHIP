s = "Narsi 1 nArsi"
print(s.count('narsi'))
print(s.count('narsi', 3, len(s)))
s = s.replace('rsi', 'vy')
print(s)
l = s.split()
print(l)
for i in l:
    print(i)
l = '-'.join(s)
print(l)
print(s.upper())
print(s.lower())
print(s.swapcase())
print(s.title())
print(s.capitalize())
print(s.startswith('Nrsi'))
print(s.endswith('a'))
