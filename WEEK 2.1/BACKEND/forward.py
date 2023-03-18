s = input("enter some string :")
n = len(s)
i = 0
print("data IN forward direction")
while i < n:
    print(s[i], end='')
    i += 1
print()
print("data IN backward direction")
i = n-1
while i >= 0:
    print(s[i], end='')
    i -= 1
