def f1():
    def inner(a, b):
        print("the sum :", a+b)
        print("the average :", (a+b)/2)
    inner(10, 20)
    inner(20, 30)


f1()
