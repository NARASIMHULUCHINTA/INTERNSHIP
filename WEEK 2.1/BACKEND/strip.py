city = input("enter city name :")
list = ["hyderabad", "bangalore", "delhi", "mumbai"]
if city.strip() in list:
    print("your city is available")
else:
    print("not available")
