# Light Communication
## Setting up
### Prerequisites

1. Have the board, and fixtures.

2. Know the serial numbers of the fixtures.

3. Have a linux based device ready for use.

### Instructions:


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

Once you have installed the required dependencies enter into the directory with the configuration system.

```
cd board/'NodeJS'/'RAW Websocket'
```

To run the system please enter the command:

```
node index.js
```

3. The server is now setup, you should see the output:
```
Incoming WebSocket server running on port 8080
Outgoing WebSocket server running on port 8081
```
4. You have successfully started the server, continuously let this run in the background.


## About
The server runs by transmitting the data from the board to the lights through a websocket with the plain text protocol. This does mean that theoretically people CAN hack your shows, always plan for people trying to hack your shows. Use an isolated network with a secure password. Hardwire in devices if you have to. The transmitted data is JSON data.
