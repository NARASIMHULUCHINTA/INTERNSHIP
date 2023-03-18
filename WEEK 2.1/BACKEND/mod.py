import time
from imp import reload
import module
print("program entering into sleeping state")
time.sleep(10)
reload(module)
print("this is last line of program")
