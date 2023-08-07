# Led Matrix.

The LED matrix is designed to be as user-friendly as possible while not lacking in feature. This wall was designed by lighting techs, for lighting techs. Please note that this is still heavily in development and many changes are to come. 

## Setting up

To setup your wall matrix you must first assemble the stand. The stand consits of two tripods on either side and an extendable crossbar. 


```
Add the building instructions here for the stand and tripod
```

Then after you have assembled the stand you will need to attach the mounting clips. Open the "gate" of the clip and slide it onto the crossbar. After you have attached the sufficient number of clips using the guide down below.

```
(Number of light panel columns) x 2 = (Total clips needed)
```
Please ensure that you are setting this up in near an outlet or have power planned out. We are not responsible for any damages to your electrical because you made a mistake here.

After you have attached the clips for the bars you can visually inspect the ties to make sure they are clean and have no blemishes. Once this has been ensured you can start by sliding the wall segments up the cables and attach it to the mounting clip. It will be wobbly but this will be solved once the units touch the ground. 

After you have assembled your unit and it looks like so, you can continue on to the next step.

The unit is ready for power. Please connect the power distribution unit (PDU) to the wall outlet using the side with one single powercon connector. The remaining 3-4 powercon connectors each provide 5V power out to the unit, if you do not have enough output ports either use a second PDU or use a single powercon cable after it has been through the small power unit. 

Once power has been successfully connected please start up the wireless router provided to you, this can also be in the form of a "showbox". Once the router has been successfully booted please connect to it using the controlling laptop, open the lighting control application called LMCSHD (Large Matrix Control Software High Definition.) Connect the server side controlling pack to the laptop via usb, give it a minute or two to power on. 

Now you can connect power to the rest of the display, the display will boot. To show that it is connected each panel will show a dot in the bottom left corner. Once all dots have been illuminated you can check the webpage hosted by the wall by going to 

```
IP ADDRESS:80
```
Once it has been verified that all units have been connected you can go into LMCSHD and press Serial -> Connect to device -> (Use all defaults) Connect.

The visualizer on the side should auto detect your configuration, if it doesn't please try a different COM port after restarting the application. You can now use the various features inside LMCSHD to control your matrix.

Well, happy Matrixing!
