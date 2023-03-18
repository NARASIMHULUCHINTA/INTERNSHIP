l = [10, 20, 30, 40, 323, 20, 30, 20, 10, 10, 10]
target = int(input("etner the value to search :"))
try:
    print(target, "available and its first occurance is at :", l.index(target))
except ValueError():
    print(target, "not available")
