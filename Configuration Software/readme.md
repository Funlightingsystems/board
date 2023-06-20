# The web based system to configure your lighting system.
## This system is designed to be as easy to use a possible.

If you are setting up your system for the first time please run this command on a linux-based terminal
```
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
```curl -X POST -H "Content-Type: application/json" -d '{"serialNumber": 1234, "patch": "D1, A1", "colour": "RGB", "type": "SomeType"}' http://localhost:3000/lights/1234
```

if you are on a windows based powershell command prompt please use this modified command with a simular syntax:
```curl -X POST -H "Content-Type: application/json" -d "{\"serialNumber\": 1234, \"patch\": \"D1, A1\", \"colour\": \"RGB\", \"type\": \"SomeType\"}" http://localhost:3000/lights/1234
```

### If everything went according to plan you should see the output:
``` 
OK
```

<br>
If inputting the lighting data is too hard, an up to date version of the configuration file will be posted from time to time, this WILL overwrite your current data if you chose to update. Do this carefully. Backup any data you want to keep. To update you can run the command `git clone http://github.com/funlightingsystems/board.git` from the directory immediatly outside of the directory called board.

Thanks for reading this mouthful of stuff!

