s = input("etner some string:")
i = 0
print("even position :")
while i < len(s):
    print(s[i], end=',')
    i = i+2
print()
print("odd position:")
i = 1
while i < len(s):
    print(s[i], end=',')
    i = i+2
