import socket
import mysql.connector

UDP_IP = "172.31.93.255"
UDP_PORT = 5000

sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
try:
    sock.bind((UDP_IP, UDP_PORT))
except socket.error:
    print("Error")

while True:
    conexion1 = mysql.connector.connect(host="db4free.net", user="baenav",passwd="qwertyuiop", database="proyecto_diseno")
    cursor1 = conexion1.cursor()
    sql ="insert into datos(P1, P2, P3, P4, fecha, hora) values (%s,%s,%s,%s,%s,%s)"
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    reply = data[0:len(data)]
    reply = reply.split(", ");
    print(reply)
    cursor1.execute(sql, reply)
    conexion1.commit()
    conexion1.close()

    conexion2 = mysql.connector.connect(host="diseno1.cl8ozxx0esmz.us-east-1.rds.amazonaws.com", user="anamacn",passwd="qwertyuiop", database="diseno_1")
    cursor2 = conexion2.cursor()
    sql ="insert into diseno_1(P1, P2, P3, P4, fecha, hora) values (%s,%s,%s,%s,%s,%s)"
    #data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    reply = data[0:len(data)]
    reply = reply.split(", ");
    print(reply)
    cursor2.execute(sql, reply)
    conexion2.commit()
    conexion2.close()
