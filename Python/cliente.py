import socket

import time
from datetime import datetime


#UDP_IP = "3.222.161.155"
#Intancia Vic
UDP_IP = "3.89.222.210"
UDP_PORT = 5000

#Intancia Ana
#UDP_IP = "3.223.237.243"
#UDP_PORT = 41500


print("UDP target IP:", UDP_IP)
print("UDP target port:", UDP_PORT)


sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP

while True:
#    MESSAGE = str(adquisicion())
    now = datetime.now()
    fecha = now.strftime('%Y-%m-%d')
    hora = time.strftime("%H:%M:%S")

    MESSAGE = '22.968965530395508, 0, 0, 10.78'+', ' + fecha +', '+ hora
    MESSAGE = bytes(MESSAGE,'utf-8')
    print("message:", MESSAGE)
    sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
    time.sleep(2)
