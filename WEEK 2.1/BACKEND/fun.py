def wish(name):
    print("good morning :", name)


wish('narsi')


def cal(a, b):
    sum = a+b
    mul = a*b
    sub = a-b
    return sum, mul, sub


a, b, c = cal(10, 20)
print(a, b, c)


def f2(*n):
    print("var-arg method ")


f2()
f2(10, 0, 2)
f2(1, 2, 4, 24, 2)


def sum(*n):
    result = 0
    for x in n:
        result = result+x
    print("the sum:", result)


sum()
sum(10, 20)
sum(10, 20, 30, 40)


def sum(name, *n):
    result = 0
    for x in n:
        result = result+x
    print("the sum by ", name, ":", result)


sum('narsi')
sum('sai', 10, 20)
sum('gani', 10, 20, 30, 40)


def sum(*n, name):
    result = 0
    for x in n:
        result = result+x
    print("the sum by ", name, ":", result)


sum(name='narsi')
sum(10, 20, name='sai')
sum(10, 20, 30, 40, name='gani')


def display(**kwargs):
    print("record information :")
    for k, v in kwargs.items():
        print(k, '....', v)


display(name='narsi', marks=90, age=22)


def f1(a, b, c, d=1, e=2):
    print(a, b, c, d, e)


f1(10, 20, 30, 40)
f1(10, 20, c=6)
