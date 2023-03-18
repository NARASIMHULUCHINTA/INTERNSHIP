def smartdivision(func):
    def inner(a, b):
        if b == 0:
            print("we can't divide with zero")
        else:
            return func(a, b)
    return inner


@smartdivision
def division(a, b):
    return a/b


print(division(10, 20))
print(division(10, 4))
print(division(10, 0))
