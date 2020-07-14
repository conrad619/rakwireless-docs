---
prev: /wisgate/rak7243/quickstart/
next: access-the-internet
---

# Accessing your Gateway

After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the **RAK7243 LPWAN Developer Gateway** and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway. In this section, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

:::warning ⚠️WARNING
Before powering the RAK7243 LPWAN Developer Gateway you should install the LoRa® and GPS antennas. Not doing so might damage the boards.
:::

## Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/wifi.png" 
  width="100%"
  figure-number="1"
  caption="RAKwireless Access Point"
/>

::: tip 📝 NOTE:
“XXXX” is the last 2 bytes of your RAK7243’s WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the Gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password:** rakwireless
- **Default IP Address:** `192.168.230.1`
  :::

## Via the Ethernet Port on the Raspberry Pi 3B+

You can also connect your PC with the Gateway through an Ethernet cable. By default, the IP address of the Gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`.

- To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click **Ethernet**.

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/network&sharing.png"
  width="100%"
  figure-number="2"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4)**.

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/ethernetproperties.png"
  width="100%"
  figure-number="3"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/tcpipv4.png"
  width="100%"
  figure-number="4"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your Gateway from your PC successfully using the IP Address `192.168.10.10` through SSH.

## Log into the Gateway

### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely **Putty**, **BitVise SSH Client**, **MobaXterm** and many more. Feel free to choose one that fits your needs. You will be using Putty for this guide.

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/puttywindows.png"
  width="75%"
  figure-number="5"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the Gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`
- If you have connected to the Gateway through **Ethernet**, the IP Address is `192.168.10.10`
- It will then prompt you to enter the username and password. The default username and password is provided below:
  - **Username**: pi
  - **Password**: raspberry

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/commandline.png"
  width="100%"
  figure-number="6"
  caption="Command line after log in"
/>

### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “**Terminal**” and then return:

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/mac_terminal.png"
  width="100%"
  figure-number="7"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i`"

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/sshmac.jpg"
  width="100%"
  figure-number="8"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to login to your Gateway, the default password is "**raspberry**".
- If you connect your PC with the Gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

<rk-img
  src="/assets/images/quick-start-guide/rak7243/4.accessing your gateway/loginsuccess.jpg"
  width="100%"
  figure-number="9"
  caption="Log-in Successful Notification"
/>

### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.
