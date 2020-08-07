---
prev: status-page
next: channel-plan
---

# Network

This section contains all the settings that affect the connectivity of the Gateway to the backbone network (Internet, Cloud, etc.) In essence, these settings all affect the backhaul connectivity, over which the LoRa® data is being relayed.

It contains the following sub-sections: **WAN Interface**, **Cellular Interface** (when the hardware is present), **Wi-Fi**, **Firewall**, **Diagnostics**, and **Ping Watchdog**.

## 1. WAN Interface

The user can check the Status (Uptime, IPv4 Address, Amount of transmitted and received packets and the MAC Address of the interface), or configure the protocol to be used for connecting to your provider’s network.

<rk-img
  src="/assets/images/user-manual/web-management-platform/6.wan-interface.jpg"
  width="100%"
  figure-number="1"
  caption="WAN Interface Configuration"
/>

- The following options are available for the protocol: **Static Address**, **DHCP client**, **None**, or **PPPoE**. The default is the DHCP client, if you choose None the interface will be disabled.

- Flipping the DNS switch allows you to enter a custom DNS server address.

- Also, one can set the Gateway metrics (how high is this interface in the connectivity priority, very useful for failover) and the MTU size (1500 standard).

## 2. Cellular Network Configuration

<rk-img
  src="/assets/images/user-manual/web-management-platform/7.cellular-interface.jpg"
  width="100%"
  figure-number="2"
  caption="Cellular Interface Configuration"
/>

The same statistics as with the WAN Interface are available. It is here that you set the **APN**, **User**, and **Password** (in case you need to, some service providers do not require these as they are automatically acquired).

- Make sure to enter the SIM’s PIN code if there is one, in the “**PIN Code**” field as it is something most users forget.
- The gateway metric determines the priority of this interfaces, compared with the other connectivity options. The lower the value the higher the priority.
- It is recommended that this interface has the highest Gateway metric (lowest priority) in order to conserve your traffic, which can be limited or costly.

:::tip 📝 NOTE 
There is also a field for the PIN Code in case your SIM card is locked.
:::

## 3. Wi-Fi

<rk-img
  src="/assets/images/user-manual/web-management-platform/8.wifi-interfaces.jpg"
  width="100%"
  figure-number="3"
  caption="Wi-Fi Interfaces"
/>

Enabling/Disabling the Wi-Fi is done from this page via the blue button at the top. Additionally, you can pick a radio channel or leave it on Auto configuration (default). The Wi-Fi always works in AP mode (so you can always access the Gateway via it), however, you can choose to enable/disable the Client Mode

- **Wireless Access Point**: By default, there is no encryption/password. One can access the Web UI via the IP address: **192.168.230.1** once connected to the AP. The SSID is "**RAK7240_XXXX**" by default, where the “**XXXX**” is filled with the last symbols from the interface’s MAC Address.

:::tip 📝 NOTE 
If you swipe the **Hidden** slider, the SSID will not be advertised.
:::

- **Wireless Client**: By default, the client mode is disabled. If you want to use it you have to click the “**Enable**” button. Click the “**Scan**” button to choose your preferred wireless network. Choose the encryption method, fill in the password and press **Save & Apply**. This will result in your Wi-Fi becoming one of the Gateway’s backhaul interfaces.

## 4. Firewall

The Firewall settings that can be configured are too many for the scope of this document and will not be discussed in details. Still functionality is abundant and you can configure **Zones**, **Port Forwarding**, and **Traffic rule**s can be imposed. Additionally, you can create Custom Rules that are not covered by the Firewall framework by default.

<rk-img
  src="/assets/images/user-manual/web-management-platform/9.network-firewall.jpg"
  width="100%"
  figure-number="4"
  caption="Firewall"
/>


## 5. Diagnostics

The connection diagnostic tools are in this section: **Ping**, **Traceroute**, **Nslookup**.

You can enter either an URL or an IP Address in the text box and execute the command with the button. Both IPv4 and IPv6 are supported (chosen via the drop-down menu). The results are conveniently displayed in a CLI box.

<rk-img
  src="/assets/images/user-manual/web-management-platform/10.diagnostics.jpg"
  width="100%"
  figure-number="5"
  caption="Diagnostics"
/>


## 6. Ping Watchdog

Ping Watchdog monitors the quality of network links by constantly pinging the specified IP Address or Domain name on the specified uplink network interface. When network link failures are detected, scheduled measures are taken automatically. Those include: Interface restart, Interface priority reduction, Device restart, etc.

:::tip 📝 NOTE 
Reducing the priority of an uplink interface only works when the LoRaWAN® Gateway uses both Ethernet and Cellular as uplink methods at the same time.
:::

- WAN interface represents the Ethernet interface and WWAN represents the Cellular.

- For example, if Ping Watchdog is enabled for both uplink interfaces at the same time and the response to the degradation of the link quality is set as Increase Gateway Metric the two uplink interfaces work as backups for each other. In the event of significant degradation on one, the Gateway switches to the other.


<rk-img
  src="/assets/images/user-manual/web-management-platform/11.ping-watchdog.jpg"
  width="100%"
  figure-number="6"
  caption="Ping Watchdog Interface Overview"
/>

<rk-img
  src="/assets/images/user-manual/web-management-platform/12.ping-watchdog-2.jpg"
  width="100%"
  figure-number="7"
  caption="Ping Watchdog Interface Overview"
/>

