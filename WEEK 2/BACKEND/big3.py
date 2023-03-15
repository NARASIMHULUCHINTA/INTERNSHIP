a = eval(input('enter 1st number :'))
b = eval(input('enter 2nd number :'))
c = eval(input('enter 3rd number :'))
if a > b and a > c:
    print("bigger number is :", a)
elif b > c:
    print("bigger number is :", b)
else:
    print("bigger number is :", c)
