---
prev: ../Overview/
next: false
tags:
  - RAK5010-M
---

# Quick Start Guide

## Prerequisites

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/1.prerequisites/1.front-view.jpg"
  width="50%"
  caption="Front View of RAK5010"
/>

### What do you need?

Before going through each step in the installation guide of the RAK5010-M WisTrio NB-IoT Tracker, make sure to prepare the necessary items listed below:

1. RAK5010-M WisTrio NB-IoT Tracker
2. USB-UART Module
3. Jumper Wires
4. Micro USB / 3.7V rechargeable battery / 5V Solar Panel Port
5. JTAG Emulator


:::tip 📝 NOTE:
 This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware upgraded, refer to the sections below:
 - [Upgrading The Firmware](/Product-Categories/WisTrio/RAK5010-M/Quickstart/#upgrading-the-firmware)
:::

### What's included in the Package?

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/1.prerequisites/2.package-inclusion.jpg"
  width="100%"
  caption="RAK5010-M Package Inclusion"
/>

## Product Configuration

### AT Commands for RAK5010-M WisTrio NB-IoT Tracker

This section of this section demonstrates on how to configure the RAK5010-M Wistrio NB-IoT Tracker thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| **AT Command** | **Description** | 
| ---- | ---- | 
| at+version                                                 | Gets the current firmware version number. | 
| at+set_config=device:restart                               | After set, the device restarts. | 
| at+get_config=device:status                                | Gets all information about the device’s hardware components and their current status. | 
| at+set_config=device:sleep:**X**                           | After set, the device sleeps or wakes up immediately. <br><br> • **0** - sleep <br> • **1** - wake up | 
| at+set_config=device:gps:**X**                             | • **X** - **0**: close, **1**: open, **2**: sleep, **3**: standby | 
| at+set_config=device:cellular:**X**                        | • **X** - **0**: close, **1**: open | 
| at+set_config=cellular:send_interval:**X**:**Y**           | Sets the interval of sending packet loop. <br><br> • **X** - **0**: off, **1**: on. <br><br> • **Y -** the interval time (ms) This value must be more than 150000 (150s). <br><br> If the X is set to 1, it means that the device will sleep for Y ms after sending a packet automatically in a loop, until you set X to 0. | 
| at+scan=cellular                                           | Scan the around Cellular networks    | 
| at+set_config=cellular:**XXX**:**Y**:**ZZZ**:<br>**AAA**:**BBB**:**C** | Set the IP address and port which you want to send data to through Cellular.<br><br> • **XXX -** The IP address you want to send data to. <br> <br> • **Y -** The port you want to send data to. <br><br> • **ZZZ -** The cellular operator’s long name you want to connect, for example: CHINA MOBILE. <br> <br> • **AAA -** The short name of the Cellular operator, for example: CMCC. <br> <br> • **BBB -** The operator’s APN name, for example CMNET. <br><br> • **C -** The number of the Cellular network type. For example, 0 indicates GSM, 8 indicates LTE cat.M1, and 9 indicates LTE cat.NB1. | 
| at+set_config=cellular:(**XXX**)                           | Set the Cellular module using the Cellular module’s common AT commands which come from its manufacture. <br> <br> • **XXX -** The Cellular module’s common AT commands. <br><br> For the full list of supported Quectel BG96 AT Commands, go to their [site](https://www.quectel.com/product/bg96.htm). | 
| at+send=cellular:**XXX**                                   | Send a data through cellular. <br> • **XXX** - The data you want to send. | 
| at+set_config=hologram:**XXX**                             | Configure the Hologram SIM card.<br> <br> • **XXX -** the device key of the Hologram SIM card. You can find it on [**Hologram web page**](https://dashboard.hologram.io) after activating the Hologram SIM card. | 
| at+send=hologram:user:**XXX**                              | Send a data to Hologram server. <br><br> • **XXX** - the data you want to send. | 
| at+send=hologram:sensor                                    | Send a packet of the current sensor’s data to Hologram server. | 
| at+set_config=ble:work_mode:**X**:**Y**                    | Set the work mode for BLE. <br><br> • **X** - **0**: BLE peripheral mode, **1**: BLE central mode, **2**: Beacon scan mode <br> <br> • **Y** - **0**: normal range, **1**: BLE long range <br><br> For more information about BLE Connection Modes, refer to [RAK5010 BLE Connection Modes](/Product-Categories/WisTrio/RAK5010/Quickstart/#bluetooth-connection-modes). | 

### Configuring the RAK5010-M WisTrio NB-IoT Tracker

You can configure your RAK5010-M WisTrio NB-IoT Tracker by sending AT Commands either through UART or through Micro USB.

:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK5010-M, check [AT Commands for RAK5010-M WisTrio NB-IoT Tracker](/Product-Categories/WisTrio/RAK5010-M/Quickstart/#at-commands-for-rak5010-m-wistrio-nb-iot-tracker).
:::

#### Through Micro USB

- To begin with, connect your RAK5010-M with your PC through microUSB/USB as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/1.microusb-interface.jpg"
  width="100%"
  caption="MicroUSB Interface for RAK5010-M"
/>

- Open the serial port tool in your PC.

:::tip 📝 NOTE:
Any serial tool will work, but it is recommended to use the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).
:::


- Configure the serial communication tool by selecting the proper port of the computer and configure the link as: 115200 bauds, 8 bits, No parity bit and 1 stop bit.
- After pushing the RST button on RAK5010-M, you can see the following contents in the serial port tool, shown in the Figure 4.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/2.rak-serial-port-tool.jpg"
  width="50%"
  caption="RAK serial port tool connected to RAK5010-M"
/>

#### Through UART

- If you want to use RAK5010-M WisTrio NB-IoT Tracker through UART, you should connect the RAK5010-M in your machine through UART as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/3.rak5010-m-to-uart.jpg"
  width="100%"
  caption="RAK5010-M WisTrio NB-IoT Tracker to UART"
/>

- Try to send a simple AT command to RAK5010-M to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK5010-M in the same way.

```sh
at+version
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/4.get-firmware-version.jpg"
  width="50%"
  caption="RAK Serial Port Tool, get firmware version"
/>

### Connecting to Cellular Network

In this section, a procedure to configure RAK5010-M to a Cellular network is presented. For demonstration, a SIM card issued by China Mobile is used. There are two methods to connect and send packets over the Cellular network: Manuel and Automatic mode.

To establish a connection to a Cellular network, the following element are necessary:

- Mobile operator’s MCC and MNC
- Mobile operator’s APN parameter and password (optional)
- Remote server IP and port number. 

#### Manual Connection Mode

1. Scan the available cellular network providers. Send the following AT command.

```sh
at+scan=cellular
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/1.scanning-for-cellular-networks.jpg"
  width="50%"
  caption="Scanning for Cellular Networks"
/>


- After waiting around 30 seconds, an output similar to the Figure 8 appears. In this case, two providers were detected: CHINA MOBILE and CHN-UNICOM. In your local area, you should different results.


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/2.scanned-cellular-network.jpg"
  width="50%"
  caption="Scanned Cellular Network  shown in Serial Port"
/>


2. Connect to the SIM card’s operator.

Once the Cellular network operator is identified, send the following AT command to choose the Cellular operator compatible with the SIM card in use. As shown in the Figure 9, in this example, the SIM card belongs to CHINA MOBILE.

```sh
at+set_config=cellular:(AT+COPS=1,0,\"CHINA MOBILE\",0)
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/3.cellular-operator.jpg"
  width="50%"
  caption="RAK Serial Port Tool, choose to the Cellular operator"
/>


3. Configure the APN

The next step is to configure the APN required by the Cellular operator. In the case, CHINA MOBILE’s APN is “CMCC”. The username and password are not required, therefore empty “ ” is applied instead. The final parameter “1” refers to the authentication mode (PAP). The following command is sent, as shown in the Figure 10.

```sh
at+set_config=cellular:(AT+QICSGP=1,1,\"CMCC\",\"\",\"\",1)
```
<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/4.register-cellular-operator.jpg"
  width="50%"
  caption="RAK Serial Port Tool, register to the Cellular operator"
/>



4. Enable the GPRS interface 

Once the APN is configured, the PDP context must be activated, in order to use the GPRS interface. The following AT command is sent, as shown in the Figure 11.


```sh
at+set_config=cellular:(AT+QIACT=1)
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/5.gprs-interface.jpg"
  width="50%"
  caption="RAK Serial Port Tool, enable the GPRS interface."
/>



5. Set the IP address of the remote server

 Then, set the IP address of the server which will receive the packet sending from RAK5010-M. In the example, the remote server has the IP address of 118.21.121.60, and there is a process listening at the port 12111.

```sh
at+set_config=cellular:118.31.121.60:12111:CHINA MOBILE:CMMC:CMMNET:0
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/6.configure-remote-server-ip.jpg"
  width="50%"
  caption="RAK Serial Port Tool, configure the remote server's IP."
/>

:::tip 📝 NOTE:
This IP address is just\nused for example, and it is my testing server actually. For your configuration, use your own server IP address.
:::

6. Sending data 

Finally, The RAK5010-M is configured properly, and it’s ready for sending data over the Cellular network. In this case, some random characters are sent: “123456”. The following AT command is sent, as shown in the Figure 13.

```sh
At+send=cellular:123456
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/7.send-data-to-remote-server.jpg"
  width="50%"
  caption="RAK Serial Port Tool, sending data to remote server."
/>



7. Receiving data

A TCP/IP process must be listening on the IP and port previously defined. The IP address must be a public IP number. Please also make sure the port used is not blocked by a firewall. The Figure 14 shows that the list of characters sent in the previous step were properly received by the TCP/IP process.


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/8.receive-data.jpg"
  width="50%"
  caption="Receive Data shown in the terminal"
/>


As you see in the **Figure 14**, the server has received the packet successfully, and the data sent is “**123456**” which is same with the one we just sent out.

#### Automatic Connection Mode

The procedure of the automatic connection mode is very similar to the manual mode, except for the step 6, in which the transmission interval and the periodic data transmission parameters are set. 

1. Scan the available cellular network providers. Send the following AT command.

- Same as the manual mode

2. Connect to the SIM card’s operator. 

- Same as the manual mode

3. Configure
the APN

- Same as the manual mode

4. Enable the GPRS interface

- Same as the manual mode

5. Set the IP address of the remote server 

- Same as the manual mode

6. Set data transmission interval

In order to activate the automatic data transmission, the following AT command must be sent. As shown in the Figure 15, an interval of 180000 milliseconds (3 minutes) was configured. The “1” before the interval indicates the periodic data sending loop is activated.

```sh
at+set_config=cellular:send_interval:1:180000
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/9.set-transmission-interval.jpg"
  width="50%"
  caption="RAK Serial Port Tool, set the data transmission interval"
/>

As you see, this setting means that we open the sending loop and the interval time at 180 seconds. To know more details about the command, refer to the **[AT Commands for RAK5010-M WisTrio NB-IoT Tracker](/Product-Categories/WisTrio/RAK5010-M/Quickstart/#at-commands-for-rak5010-m-wistrio-nb-iot-tracker)**.

7. Restart the module

To apply the new configuration, the module must be restarted. Send the following AT command as shown in the Figure 16.

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/10.restart-the-module.jpg"
  width="50%"
  caption="RAK Serial Port Tool, restart the module."
/>



8. Receiving the data. 

After restarting, RAK5010-M will connect automatically to the Cellular network with the parameters configured previously. The RAK5010-M will sleep during the interval and wake up, activate the accelerometer, and the GPS, format the packet and send the data to the destination. Process logs will be displayed in the console as shown in the Figure 17.


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/11.console-logs.jpg"
  width="50%"
  caption="RAK Serial Port Tool, console logs of the periodic data transmission."
/>


On the server side. A packet should be received every 180 seconds. The data format is shown in the Figure 18.



<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/12.received-data.jpg"
  width="50%"
  caption="Data received on the server side."
/>

## Miscellaneous

### Upgrading the Firmware

Before you proceed, it is recommended to keep the RAK5010-M module updated to the latest version of the firmware. [**Download**](https://downloads.rakwireless.com/Cellular/RAK5010/) the latest firmware, manuals, datasheets of the RAK5010-M.

1. Download the latest compiled firmware from the [RAKwireless website](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010-M_Latest_Firmware.zip).

2. The firmware file is in a ".**zip**" format. Decompress it to get a file with "**.hex**" extension.

3. Connect the RAK5010-M module with a computer through JTAG as shown in Figure 19.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/1.jtag.jpg"
  width="100%"
  caption="RAK5010 and PC Connection through JTAG"
/>

4. Connect the micro USB cable to your PC to supply power to the module or use an external 18650 litium batterry.

5. Install J-Link tool on your computer. You can download the software from the [RAKwireless website](https://downloads.rakwireless.com/en/Cellular/Tools/).

6. RAKWireless has prepared a set of scripts to simplify the configuration of the J-Flash tool projects. Download “**RAK itracker flash tool**” from the [website](https://downloads.rakwireless.com/en/Cellular/Tools/).

7. Decompress the "**.zip**" file, you will get a folder as shown as the Figure 20:

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/2.rak-itracker.jpg"
  width="75%"
  caption="RAK iTracker flash tool folder"
/>

8. Copy the "**.hex**" file of RAK5010-M from step 2 into the folder shown above. 

9. Rename the firmware file to “**production_final.hex**”.

10. Execute the script “**nrf52840_program.bat**”. 

11. On completion of the flashing process, the J-Flash tool will close automatically.



