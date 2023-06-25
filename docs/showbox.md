# Showbox
## About
The showbox is a device based around the Raspberry Pi 3B+, designed to run all aspects of the show including lighting and communication. The system is configured to start all of the services on first boot. You can connect into the showbox using the default username and password:
```
Username: pi
Password: raspberry
```
A wireless access point is also included the default credentials for this are:
```
IP address: 10.3.141.1
DHCP range: 10.3.141.50 — 10.3.141.254
SSID: raspi-webgui
Password: ChangeMe
```
The lighting configuration dashboard runs on port 80, If your computer is setup to point at the DNS server of the showbox or you are connected to the isolated network of the showbox you can view it by going to the addresses
```
http://10.3.141.1/ (Configuration Utility)
ws://10.3.141.1:8081/ (Communication outgoing)
ws://10.3.141.1:8080/ (Communication incoming)
http://10.3.141.1:5380/ (DNS configuration)
```
Do not change the username and password, if you do, you will have to resetup your lights at the software level.

## DNS
The showbox comes with a built in DNS server, this DNS server is provided by Technitium DNS, you can see the WebUI for Technitium by going to http://10.3.141.1:5380 in your browser, the default username and password are as follows:
```
Username: Admin
Password: Raspberry
```
You can add more DNS records here if you want to add additional showboxes into the system.
The DNS configuration should be set like so on the client machines.
```
Server 1: 10.3.141.1
Server 2: 1.1.1.1
(Additional server 2 configurations are listed below)
8.8.8.8
8.8.4.4
9.9.9.9
```
A complete list of DNS servers is available here: https://www.lifewire.com/free-and-public-dns-servers-2626062

## Light configuration
To use the light configuration you must first visit the page itself by going to either: http://10.3.141.1/ or http://fls.board/ Once you are on that page you should be greeted with a page that looks like the following
![Image of configuration landing screen](https://github.com/Funlightingsystems/board-documentation-resources/blob/main/image.png?raw=true)
Each item should be fairly self explanatory but here is a basic breakdown.

Serial number - The number used to identify your light

Type - The type of light, not servicable from the webUI, check the documentation for the configuration system and use 'curl' to set it manually.

Patch - The specific button on the board that the light is controlled with.

Colour - Doesn't change the colour of the light, it just gives a basic representation of the colour for someone who is looking at the system.

Save - Saves the configuration currently in the feilds on the website to the configuration file

Load - Loads the setup for the light from the configuration file.

Download config - Downloads the config file in a nice JSON format.


![Image of the configuration utility with all fields filled out](https://github.com/Funlightingsystems/board-documentation-resources/blob/main/Screenshot%202023-06-24%20105613.png?raw=true)

The next portion of the configuration utility is the grid, the grid shows all of the lights currently defined in the configuration file, this can be accessed by pressing the black dot in the corner of the screen. 


![Dot](https://github.com/Funlightingsystems/board-documentation-resources/blob/main/dot.png?raw=true)

Once you have loaded the grid view you should be met with a screen that looks like this:

![grid](https://github.com/Funlightingsystems/board-documentation-resources/blob/main/grid.png?raw=true)
