def decor(func):
    def inner(name):
        if name == 'narsi':
            print("hello narsi bad evening...")
        else:
            func(name)
    return inner


@decor
def wish(name):
    print("hello", name, "good evening")


decorfun = decor(wish)

wish("narsi")
wish("ravi")
decorfun("narsi")
decorfun("raj")
