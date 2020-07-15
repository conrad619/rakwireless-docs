---
next: configure-the-gateway
---
# Accessing the Internet

Assuming you have successfully logged into your Gateway using SSH. Enter the following command in the command line:
```sh
sudo gateway-config
```

You will now then see a page like the following picture below:

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/config-options.png"
  width="100%"
  figure-number="1"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

## Connect through Wi-Fi
If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 3B+ by choosing "**5 Configure WIFI**". By default, the RAK7243 LPWAN Developer Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/wifi-config.png"
  width="100%"
  figure-number="2"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

:::warning ⚠️WARNING
 In order to enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/wifi-ssid.png"
  width="100%"
  figure-number="3"
  caption="Add a new SSID"
/>

* Start by selecting your country of residence:

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/region.png"
  width="100%"
  figure-number="4"
  caption="Selecting Country of Residence"
/>

* Enter the SSID of the network you want to connect:

:::warning ⚠️WARNING
 Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK7243 again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the [Reverting to Wi-Fi AP Mode](#reverting-to-wi-fi-ap-mode) section which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/set-wifi.png"
  width="100%"
  figure-number="5"
  caption="SID of the Network you want to connect to"
/>

* Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/set-password.png"
  width="100%"
  figure-number="6"
  caption="Password of the Wi-Fi"
/>

## Connect through Ethernet
If you want to connect to router through Ethernet Cable, do the following steps:

* In the main configuration menu, choose “**6 Configure LAN**”. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
* Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the gateway and the router must be in the same network segment, otherwise the connection will fail.
* By default, the IP Address of the gateway's Ethernet is `192.168.10.10`

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/gateway-eth-ip.png"
  width="100%"
  figure-number="7"
  caption="Default Gateway Ethernet IP Address"
/>

* Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/router-eth-ip.png"
  width="100%"
  figure-number="8"
  caption="LAN Interface IP Address of the Router"
/>

* Press OK then the success message will appear.
* Lastly, reboot the Gateway using the command "`sudo reboot`" in the command line and it will connect to the router successfully through Ethernet.
```sh
sudo reboot
```

## Optional Configurations
These configurations under this section are only optional and situational.

### Reverting to Wi-Fi AP Mode
In the event that you have entered either or both icorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK7243 LPWAN Developer Gateway to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

* Remove the SD Card from your RAK7243 LPWAN Developer Gateway and insert it into your PC. Your PC should be able to detect it same with the image below:

<rk-img
  src="/assets/images/wisgate/rak7243/quickstart/5.accessing the internet/rak-ap-file.png"
  width="50%"
  figure-number="9"
  caption="Creating rak_ap file to your SD Card"
/>

* Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```
cd > rak_ap
```

* Check if the rak_ap file is created succesffuly. If so, re-insert the SD Card into your RAK7243 LPWAN Developer Gateway and it should work again in Wi-Fi AP Mode.
