numbers = [10, 20, 0, 5, 0, 30]
for n in numbers:
    if n == 0:
        print("Hey how we can't divide with zero")
        continue
    print("100/{}={}".format(n, 100/n))
