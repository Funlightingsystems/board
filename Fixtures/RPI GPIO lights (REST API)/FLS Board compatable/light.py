import asyncio
import websockets
import logging
import RPi.GPIO as GPIO
import json
import requests

logging.basicConfig(level=logging.INFO)

# GPIO pin for controlling the light
GPIO_PIN = 18  # Replace with your desired GPIO pin number

# PWM configuration
PWM_FREQUENCY = 100  # Adjust the frequency as needed
PWM_INITIAL_DUTY_CYCLE = 0  # Initial duty cycle for the PWM signal

# Initialize PWM
GPIO.setmode(GPIO.BCM)
GPIO.setup(GPIO_PIN, GPIO.OUT)
pwm = GPIO.PWM(GPIO_PIN, PWM_FREQUENCY)
pwm.start(PWM_INITIAL_DUTY_CYCLE)

def control_light(value):
    # Adjust the PWM duty cycle based on the received value
    # Replace this with your own PWM control code
    duty_cycle = value / 255.0 * 100  # Map the range 0-255 to 0-100
    pwm.ChangeDutyCycle(duty_cycle)

async def websocket_handler(uri, pin_key):
    async with websockets.connect(uri) as websocket:
        while True:
            data = await websocket.recv()
            logging.info("Received data: %s", data)
            parsed_data = json.loads(data)
            pin_value = parsed_data.get(pin_key)  # Modify the key based on the expected pin in the WebSocket data
            if pin_value is not None:
                if 'D' in pin_key:
                    if isinstance(pin_value, int) and (pin_value == 1):
                        control_light(255)  # Full brightness for 'D' value of 1
                    else:
                        control_light(0)  # Turn off the light for any other 'D' value
                elif 'A' in pin_key:
                    if isinstance(pin_value, int) and (1 <= pin_value <= 255):
                        control_light(pin_value)
                    else:
                        logging.warning("Invalid pin value received: %s", pin_value)
                else:
                    logging.warning("Unsupported pin key received: %s", pin_key)

async def get_configuration(url):
    while True:
        try:
            response = requests.get(url)
            data = response.json()
            pin_key = data.get('patch')  # Modify the key based on the expected key for the pin in the API response
            if pin_key:
                logging.info("Configuration updated. New pin key: %s", pin_key)
                websocket_uri = "ws://10.0.0.169:8081"  # Replace with the WebSocket URI
                asyncio.create_task(websocket_handler(websocket_uri, pin_key))
            else:
                logging.warning("Pin key not found in the API response")
        except requests.exceptions.RequestException as e:
            logging.error("Error retrieving configuration: %s", e)
        await asyncio.sleep(60)  # Check for new configuration every 60 seconds

def main():
    url = "http://10.0.0.169:3000/lights/1234"  # Replace with your API URL
    asyncio.run(get_configuration(url))

if __name__ == "__main__":
    main()
