print(int(123.456), int(True), int(False), int("10"), int("1111"))
# int(10+20j),int(ob111),int("10.5") ==> error
print(float(10), float(True), float(False), float("10.5"), float())
# float(10+20j),float(ob111),float("ten") ==> error
print(complex(10), complex(10.5), complex(True), complex(False), complex(
    "10"), complex(10, 20), complex(10, 20.5), complex(True, False))
# complex(ob111),complex("ten"),complex("10,"15") ==> error
print(bool(0.00), bool(0.1), bool(0), bool(4), bool(10+20j),
      bool(0+0j), bool(''), bool(' '), bool('narsi'))
print(str(10), str(10.5), str(True), str(False), str(10+20j))
