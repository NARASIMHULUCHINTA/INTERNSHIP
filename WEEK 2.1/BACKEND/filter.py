def iseven(x):
    if x % 2 == 0:
        return True
    else:
        return False


l = [0, 3, 2, 45, 2, 2, 3, 42, 3, 2]
l1 = list(filter(iseven, l))
print(l1)
