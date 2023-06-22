# The web based system to configure your lighting system.
This system is designed to be as easy to use a possible.


## First Run
Prerequisites:
1. Have the board, and fixtures.
2. Know the serial numbers of the fixtures.
3. Have a linux based device ready for use.
3.B) A raspberry pi computer works best, just not anything below a pi 3.
3.C) Must have at least 8gb of free storage, the more the better.

Instructions:
1. SSH into the computer that you are trying to run the system on, or open up the terminal application.
2. Type in the command
```
git clone http://github.com/funlightingsystems/board
```
or if you are not using the root user (will prompt for password)
``` 
sudo git clone http://github.com/funlightingsystems/board
```
After running those commands to clone the repo, install the dependencies.
```
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install nodejs npm -y
npm install fs ws express
```
Once you have installed the required dependencies enter into the directory with the configuration system
```
cd board/'Configuration Software'
```
To run the system please enter the command:
```
node server.js
```




To view the web portal enter the IP address of the computer followed by :3000, for example if the configuration utility is running on the same machine as the web browser you can enter the ip into our browser as:
```
127.0.0.1:3000
```
or
```
localhost:3000
```
If it is on a different device you can access it using the ip address of the device on your local area network (LAN)
```
10.0.0.1:3000
```
If you are unsure about the IP please check your routers configuration page.

## Configuring

curl -X POST -H "Content-Type: application/json" -d '{
  "serialNumber": SerialNumber,
  "patch": "DIMMER#, A(button)#",
  "colour": "Colour setup",
  "type": "Type of light"
}' http://ADDRESS:3000/lights/1234
```
an example of this would look like so:
```
curl -X POST -H "Content-Type: application/json" -d '{
  "serialNumber": 1234,
  "patch": "D1, A1",
  "colour": "RGB",
  "type": "PAR Can"
}' http://localhost:3000/lights/1234
```
or 
```
curl -X POST -H "Content-Type: application/json" -d '{
  "serialNumber": 1111,
  "patch": "A1",
  "colour": "green",
  "type": "LED Strip"
}' http://localhost:3000/lights/1111
```
Before running the command please ensure that for optimal results you run it all on the same line like so.
```
curl -X POST -H "Content-Type: application/json" -d '{"serialNumber": 1234, "patch": "D1, A1", "colour": "RGB", "type": "SomeType"}' http://localhost:3000/lights/1234
```

if you are on a windows based powershell command prompt please use this modified command with a simular syntax:
```
curl -X POST -H "Content-Type: application/json" -d "{\"serialNumber\": 1234, \"patch\": \"D1, A1\", \"colour\": \"RGB\", \"type\": \"SomeType\"}" http://localhost:3000/lights/1234
```

### If everything went according to plan you should see the output:
``` 
OK
```

<br>
If inputting the lighting data is too hard, an up to date version of the configuration file will be posted from time to time, this WILL overwrite your current data if you chose to update. Do this carefully. Backup any data you want to keep. To update you can run the command 
"
git clone http://github.com/funlightingsystems/board.git 
"
from the directory immediatly outside of the directory called board.

Thanks for reading this mouthful of stuff!

