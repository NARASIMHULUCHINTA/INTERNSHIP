n = int(input("enter the number of students:"))
d = {}
for i in range(n):
    name = input("enter student name :")
    marks = input("enter student marks:")
    d[name] = marks
print(d)
while True:
    name = input("enter student name to get marks :")
    marks = d.get(name, -1)
    if marks == -1:
        print("student not found")
    else:
        print("the marks of {} : {}".format(name, marks))
    option = input("do you want to find another student marks[Y/N] :")
    if (option == 'N'):
        break
print("thanks for using our application")
