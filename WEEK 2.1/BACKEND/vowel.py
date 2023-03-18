w = input('enter some words:')
s = set(w)
v = {'a', 'e', 'i', 'o', 'u'}
d = s.intersection(v)
print('the different vowels present in the given word :', d)
print('the number of different vowels :', len(d))
