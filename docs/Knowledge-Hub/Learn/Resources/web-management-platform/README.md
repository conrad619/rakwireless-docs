---
next: status-page
---

# Web Management Platform

This document describes in detail the functionality of the Web Management UI and how to use it for configuration and management of the Gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it.

Also, it instructs on the configuration of the WAN interface, the LoRa® Packet Forwarder, and Gateway MQTT Bridge and more. It explains how to do system-monitoring, the update of the firmware, and reset the device. Last but not least, it provides information on using the built-in LoRa® Server.

This guide functions as a reference for several products with similar functionality, thus some sections do not apply to certain products. When the word “Gateway” is used it refers to the three devices when the functionality is the same. In case there is a specific feature or difference, the name of the specific device will be mentioned.

:::tip 📝 NOTE
This document assumes you have already gone through the Quick Start Guide, and you know how to power on, connect to the Gateway, and then connect it to your network.
:::

## Accessing the Web Management Platform

To get started, open the browser, enter the IP address of the gateway, and open the login page of the WEB Management Platform. Enter root as both the username and password and then click login. You can choose in the options provided in this section to access the platform.

### Wi-Fi AP Mode

By default, the Gateway works in Wi-Fi AP Mode, which means that you can find an SSID named "**RAK7249_XXXX**" on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address.

• To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.

:::tip 📝 NOTE
No password is required to connect via Wi-Fi.
:::

Using your preferred web browser, input the aforementioned IP Address. You should see the same login page shown in figure 1 below. Use the following credentials:

* **Username**: root
* **Password**: root

<rk-img
  src="/assets/images/user-manual/web-management-platform/1.webui.jpg"
  width="100%"
  figure-number="1"
  caption="Web User Interface Log-in"
/> 

### WAN Port (DHCP IP) Mode
Connect the Ethernet cable to the port marked “**ETH**” on the gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your router. The router’s DHCP server should assign an IP Address to the Gateway. You can change the default settings below if you wish (details in the User Manual).

### WAN Port Direct Connection
Connect the Ethernet cable to the port marked “**ETH**” on the gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

The default IP is **169.254.X.X**. The last two segments(X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are 0F:01, and the IP address is 169.254.15.1. Make sure to manually set the address of your PC to one in the same network, like for example 169.254.15.100. You can then access the Web Management Platform using the Gateway's IP Address: 169.254.X.X.