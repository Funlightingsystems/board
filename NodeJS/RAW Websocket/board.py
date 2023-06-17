import serial.tools.list_ports
import os
import time
import asyncio
import websockets

def find_arduino_port():
    arduino_ports = [
        p.device
        for p in serial.tools.list_ports.comports()
        if 'Arduino' in p.description
    ]
    if arduino_ports:
        return arduino_ports[0]  # Return the first found Arduino port
    else:
        return None

async def send_data(websocket, path):
    arduino_port = find_arduino_port()
    if arduino_port:
        ser = serial.Serial(arduino_port, 9600)
        try:
            while True:
                if ser.in_waiting:
                    data = ser.readline().decode().strip()
                    await websocket.send(data)

                await asyncio.sleep(0.1)  # Add a small delay to reduce CPU usage
        except websockets.exceptions.ConnectionClosedError:
            pass
        finally:
            ser.close()
    else:
        print("Arduino not found. Please make sure it is connected.")

def start_server():
    asyncio.get_event_loop().run_until_complete(
        websockets.serve(send_data, 'localhost', 8080)  # Replace 'localhost' with your desired server IP
    )
    asyncio.get_event_loop().run_forever()

if __name__ == '__main__':
    start_server()
