cart = [10, 20, 600, 60, 70, 90]
for item in cart:
    if item > 500:
        print("sorry we cannot process this order :", item)
        break
    print("processing item :", item)
else:
    print("congrats...all items processed successfully")
