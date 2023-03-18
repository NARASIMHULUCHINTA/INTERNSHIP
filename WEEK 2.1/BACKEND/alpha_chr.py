s = input("enter some string :")
output = ''
for x in s:
    if x.isalpha():
        output = output+x
        previous = x
    else:
        newchr = chr(ord(previous)+int(x))
        output = output+newchr
print(output)
