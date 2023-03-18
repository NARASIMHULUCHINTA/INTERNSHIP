s = input("enter main string  :")
subs = input("enter substring :")
flag = False
pos = -1
n = len(s)
count = 0
while True:
    pos = s.find(subs, pos+1, n)
    if pos == -1:
        break
    print("found at index:", pos)
    flag = True
    count += 1
if flag == False:
    print("not found")


print("no of occurances :", count)
