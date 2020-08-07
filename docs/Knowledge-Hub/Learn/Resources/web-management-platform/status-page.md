---
prev: /Knowledge-Hub/Learn/Resources/user-manual/web-management-platform/
next: network
---

# Status Page

The Status Page is where statistics about the gateway behavior can be monitored in real-time.

## 1. Overview

Figure 1 below is the default page you will see every time you log into the gateway. It contains the following sub areas/windows that give an overview of some of the most important Gateway metrics.


<rk-img
  src="/assets/images/user-manual/web-management-platform/2.status-overview.jpg"
  width="100%"
  figure-number="1"
  caption="Status Overview of the WEB Management Platform."
/>

The following are the parts of the Overview window:

- **Received**: Shows the total number of uplink LoRa® messages received by the gateway.
- **Transmitted**: Shows the total number of downlink LoRa® messages sent by the gateway.
- **Active Nodes**: Shows the number of active LoRaWAN® Nodes within the LoRaWAN® Gateway coverage. (**Those that have sent no data for more than 10 min are discarded from the count**.)
- **Busy Nodes**: Shows the number of busy nodes within the LoRaWAN® gateway coverage (**Nodes with an average message spacing of fewer than 60 seconds**.)
- **Duty Cycle of the LoRa® Channel**: The graph represents the [Duty Cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle.html) load by frequency channel (**Data is kept for the last 12 hours**). The minimum resolution along the time axis is 60 seconds. Each value is an average of over 60 seconds. The values are color code – green to red, low to high.
- **RSSI & SNR**: These graphs show how many of the total amount packets haw an RSSI/SNR value within a certain range. This is also shown in a pie chart to the side of the graphs.
- **Uplink Traffic**: The graph shows the packet per minute rate as a function of time. Above the image, one can see the color-coding of the different Spreading Factors, where the actual height of the values is a sum of all the packets overall spreading factors for the time sample.
- **Downlink Traffic**: The graph shows the packet per minute rate as a function of time. Above the image, one can see the color-coding of the different Spreading Factors, where the actual height of the values is a sum of all the packets overall spreading factors for the time sample. Additionally, you have sub-windows displaying the System, Memory, LoRa Network Server, Network (WAN). Cellular, and Wi-Fi information. Those have their separate sections and will be discussed in detail further down.
- **System**: Information for the Hostname and model of the Gateway can be found here. There is also the Local Time and Uptime of the Gateway. Most importantly, you can see the Firmware version here.
- **Memory**: There are bars in this section that shows how much the Total Available, Free, and Buffered Memory is.
- **LoRa Network Server**: You can see the statistics for your network server. A number of associated LoRa® Nodes, Uplink, Downlink, Received Join, Rejected Join, those types of packets all have numerical values associated with them. Additionally, you can check the Uptime and whether you have the MQTT Integration running.
- **Network**: The WAN status with its Type and Addressing parameters, together with the time since it has been connected are displayed here.
- **Cellular**: The connection status of your cellular together with the corresponding Network ID and the parameters of your Sim (**ICCID, IMSI, Phone number**).
- **Wireless**: The status of the Wi-Fi is displayed here. There are connectivity status, signal strength, and IP addressing parameters for both the AP and Client interfaces.
- **Dynamic DNS**: You can oversee your Dynamic DNS configuration here, assuming you have one configured, otherwise there are example values.


## 2. LoRaWAN® Packet Logger

This is where a log of the LoRa® messages is shown in real-time. There are several options for filtering as well as the possibility to download the statistics in a file. Additionally, there is a summary (**Total, Uplink, and Downlink**), below the filter fields.

By clicking on a particular packet, you get an expanded window with the detailed metadata for it as well as some RF parameters. Additionally, there is a graph area below the packet list that displays the “**Air Time**” per node and also the load per frequency channel.

<rk-img
  src="/assets/images/user-manual/web-management-platform/3.packet-logger-view.jpg"
  width="100%"
  figure-number="2"
  caption="LoRaWAN® Packet Logger View of the WEB Management Platform."
/>

You can choose to filter the packets by one of the following:

- **Type**: Filter by message type. By default, all messages are displayed, where possible options are: Join Request/Accept, Unconfirmed Data Up/Down, and Confirmed Data Up/Down
- **DevAddr**: Filter messages based on node addresses.
- **Hide CRC_ERR packet**: When it is selected, no "CRC"  check error message will be displayed.

## 3. System Log

The complete system logs. It is useful mainly for debugging purposes. It reports both system information (especially useful when booting up the Gateway) and actual data from LoRa® frames coming from end nodes. The button for pausing the auto-refresh of the log is in the top right.


<rk-img
  src="/assets/images/user-manual/web-management-platform/4.system-log.jpg"
  width="100%"
  figure-number="4"
  caption="System Log"
/>

## 4. Firewall

This section shows only information about traffic on different ports, addresses, etc. It is organized in tables, however, there are no configuration options here, this is only for observation. There is a dedicated sub-section for the Firewall Settings in the Network section, where you can actually configure, rather only observe. The only actions you can perform here are to “Reset Counters” or “Restart Firewall” via the links on the top left.

<rk-img
  src="/assets/images/user-manual/web-management-platform/5.firewall.jpg"
  width="100%"
  figure-number="5"
  caption="Firewall Status"
/>