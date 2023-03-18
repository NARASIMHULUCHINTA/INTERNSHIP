s = {10, 20, 4, 20, 4, 2, 32}
print(s)
s.add(10)
s.add(90)
s.add(70)
print(s)
l = [4, 5, 3, 23]
s.update(l)
print(s)
s.update(l, range(1, 5), 'narsi')
print(s)
s1 = s.copy()
print(s1)
print(s1.pop())
print(s1)
s.remove(10)
# s.remove(12345)==>error
s.discard(12345)  # ==>no error
print(s)
s.clear()
print(s)
