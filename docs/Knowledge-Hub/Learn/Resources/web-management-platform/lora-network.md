---
prev: channel-plan
next: services
---

# LoRa® Network

All the LoRa® Settings reside in this section. Its subsections change depending on what “**Mode**” you choose to work-in in the “**Network Settings**” subsection. As the three modes (**Network Server**, **Basic Station**, and **Packet Forwarder**) are very different, we will go through each one in detail.

:::tip 📝 NOTE
The one thing that is the same for all of the modes is the "**LoRaWAN Network Settings**" area at the top of the "**Network Settings**" sub-section. It is in this area where the Gateway EUI and the Mode drop-down menu reside.
:::

<rk-img
  src="/assets/images/user-manual/web-management-platform/15.lora-network-settings.jpg"
  width="100%"
  figure-number="1"
  caption="LoRaWAN Network Settings"
/>

**As there are additional menus that appear when one uses the “Network Server” Mode, it is the one that will be discussed in the greatest detail. The other two Modes only have the “Network Settings” sub-menu and relatively less configuration options.**

## 1. Network Settings

This page changes depending on which of the 3 options for the Mode you have chosen.


### Network Server

As this Mode provides a fully functioning LoRa® Server instance, there is a complete set of features to configure.

* **Region**: It is only displayed, can’t be changed as this is done in the “Channel Plan” menu.
* **Enable ADR**: Adaptive Data Rate, turned on/off.
* **Minimum/Maximum Allowed data-rate**: Dr0 to DR7 can be selected in order to limit the ADR possible values range
* **ADR Margin** (dB): A value to keep in dB to make sure that the data rate is not overestimated resulting in a poor performance (error rate and range). Default value is 10.
* **Network ID**: A decimal number to distinguish between networks if you are deploying multiple ones
* **Rx 1 Delay** (sec): The delay of the first receive window in seconds.
* **Rx 1 DataRate Offset**: It determines the data rate of the downlink frames originating from the Gateway for the Rx1 window. By default, it is 0 – identical to the uplink.
* **Rx 2 Frequency** (Hz): The frequency of the second receive window in Hz.
* **Rx 2 Datarate**: The Data Rate of the frames to be sent in the second receive window.
* **Downlink Tx Power** (dBm): This is useful in case you want to opt for a larger antenna with more gain, however you want to stay within regulations. Values from -6 to 20 are permissible.
* **Disable Frame-counter Validate**: This will turn on/off Frame counter validation.
* **Device-status request interval** (sec): It shows how often should the end devices be polled for their status Log Level - choose one of for, useful for troubleshooting.
* **Statistic Period**: It shows how often the statistics will be gathered. Possible values are: 1 min, 10 min, 1h, 1 day.


<rk-img
  src="/assets/images/user-manual/web-management-platform/16.network-settings.jpg"
  width="100%"
  figure-number="2"
  caption="Network Settings - Network Server"
/>

### Basic Station

This Mode allows one to utilize the Basic Station, which is Semtech’s latest packet-forwarder iteration. For more information on how Basic Station operates please refer to the [Basic Station official website](https://doc.sm.tc/station/).

There are 3 sub-sections listed below. Each of the above needs an URI and Port, together with the corresponding token/key/certificate of TLS authentication is used.

- Cups Boot Server
- XUPS Server
- LNS Server


<rk-img
  src="/assets/images/user-manual/web-management-platform/17.basic-station.jpg"
  width="100%"
  figure-number="3"
  caption="Network Settings - Basic Station"
/>

### Packet Forwarder

This Mode utilizes the **Semtech Legacy Packet-forwarder**. An important thing to mention is the fact that this mode has two Protocol options that change the core functionality. One can choose via the Protocol drop-down menu to use the Gateway either as a pure **Semtech Packet forwarder** or as an **MQTT bridge**.

**1. General Setup - Semtech UDP GWMP Protocol**

This is something that every Gateway supports, that has been there from the very beginning of the LPWAN days. Just a general means of forwarding your LoRa® frame data over UDP to a LoRa® Server instance. The most popular/well-known setup of this is to use it together with TTN (The Things Network), which was more or less what made LoRa® popular back in 2016. This can naturally be pointed toward any LoRa® Server, not necessarily TTN.

<rk-img
  src="/assets/images/user-manual/web-management-platform/18.semtech-protocol.jpg"
  width="100%"
  figure-number="4"
  caption="Network Settings – Semtech UDP GWMP Protocol"
/>

Take note of the following parameters. Refere to figure 4 above.

* **Gateway EUI**: The value in this field is necessary for registering your gateway with any LoRa® Network Server.
* **Protocol**: As mentioned, this is either a Packet forwarder or an MQTT bridge. (The former is chosen for the purpose of going through the settings.)
* **Server Address**: The URL of the LoRa® Server. (In the example: the EU TTN address)
* **Server Port Up/Down**: The ports of the LoRa® Server that are going to be used for inbound and outbound traffic.
* **Push Timeout** (ms): Time delay for the server response after sending uplink data.
* **Statistic Interval** (s): How often statistics are pushed to the server.
* **Keepalive Interval** (s): This exists to make sure that periodically data is pushed via the Gateway to make sure the server is aware that the Gateway is online. (For example, the MQTT bridge will unsubscribe from the topics after certain period of inactivity.)
* **Automatic Data Recovery**: This is an important feature that allows LoRa® frames to be stored on the SD card (provided there is one in the slot), if there is no connection to the LoRa® Network Server. Upon restoring connectivity, these buffed messages will be forwarded, so no data will be lost. This is done in blocks of 8 (FIFO), until all are cleared from the buffer.
* **Auto-restart Threshold**: A number that defines how many times the Keepalive Interval can expire before the Packet forwarder restarts.
* **Is LoRaWAN Network**: If you choose “NO” here you will enable frames that are not compliant with the LoRaWAN® specification to be forwarded (in case you have your proprietary LoRa® Server solution). By default, “YES” is selected and non LoRaWAN® packets are dropped.
* **Log Level**: You can choose from 5 different log levels (Error/Warning/Notice/Info/Debug). This will affect System Log. From Errors only to full system log for debugging.

**2. General Setup - LoRa Gateway MQTT Bridge**

The Gateway is capable of working with an external LoRa® Server, where the MQTT Broker is pointed toward an external Server or the Built-in Server. For this purpose, there are several tabs with their corresponding parameters to be filled.

<rk-img
  src="/assets/images/user-manual/web-management-platform/19.lora-mqtt-bridge.jpg"
  width="100%"
  figure-number="5"
  caption="LoRa MQTT Bridge - General Setup"
/>

**General Setup**: The is where you configure the behavior of the MQTT Bridge.

1. In **LoRa Network Server Type**, you have four (4) options:
- **Built-in LoRa® Network Server** – pointing to the Built-in Server
- **ChirpStack 2.x** – for MQTT 2.x Broker (JSON) endpoints
- **ChirpStack 3.x** – for MQTT 3.x Broker (PROTOBUF) endpoints
- **ChirpStack 3.x** – for MQTT 3x 3.x Broker (JSON-V3) endpoint

2. **MQTT Broker Address**: The IP Address of the machine where the MQTT Broker is hosted (127.0.0.1 for the Built-in one).
3. **MQTT Broker Port**: The corresponding port (1883 default).
4. **MQTT Protocol Version**: You can choose between V3.1 and V3.1.1.
5. **Client ID**: An ID that is used to associate with the topic. If left empty, a random one will be generated.
6. **Clean Session**: With this button enabled, the broker will not store any subscription information or undelivered messages.
7. **Will Retain**: With this button enabled, the last message published will be retained.
8. **QoS**: You can set the desired Quality of Service level.
9. **Keepalive**: The keep alive interval in seconds (10 default).
10. **Enable Authentication**: The switch turns on Encryption of the transmitted data. You need to configure the Certificates used to encrypt the data in order for secure authentication to be performed.
11. **Username**: The username, if one is use, leave blank if there isn’t one.
12. **Password**: The password, if one is use, leave blank if there isn’t one. Can be randomly generated with the green arrows to the side of the field.
13. **SSL/TLS Mode**: By default, this is Disabled. You can choose one of 3 other modes: **CA signed server certificate**, **Self-signed server certificate**, **Self-signed server**, & **Client certificate**.
14. **TLS Version**: The version of the TLS protocol to be used. Options are **TLSv1**, **TLSv1.1**, **TLSv1.2**.
15. **CA Certificate, Client Certificate, Client Key, Client Key Passphrase**: You can have one or all of these to set up depending on the SSL/TLS Mode chosen. These are to be generated via the appropriate algorithm and distributed between the MQTT Broker and the LoRa® Server Please refer to the MQTT Bridge with TLS Encryption Configuration Manual for details on how to edit the settings in order for the Gateway to work as an MQTT Bridge with TLS Encryption.
16. **Log Level**: The granularity of the log information is chosen from the following levels: **ERROR**, **INFO** (default), **DEBUG**, **TRACE**.

**MQTT Topic Template Setup**: MQTT Topic Template SetupThere are two types of templates, depending on which LoRa® Network Server Type you choose.

- ChirpStack 2.x Topic Template

<rk-img
  src="/assets/images/user-manual/web-management-platform/20.mqtt-setup1.jpg"
  width="100%"
  figure-number="6"
  caption="LoRa® MQTT Bridge – MQTT Topic Template Setup 1"
/>

- ChirpStack 3.x Topic Template, Built-in Server

<rk-img
  src="/assets/images/user-manual/web-management-platform/21.mqtt-setup2.jpg"
  width="100%"
  figure-number="7"
  caption="LoRa® MQTT Bridge – MQTT Topic Template Setup 2"
/>


**3. Packet Filter**

By enabling this functionality, you can filter incoming traffic and only forward packets from the desired nodes in order to optimize bandwidth usage over backhaul.  You can filter by OUI or Network ID by whitelisting.

The Enable Auto Filter slider allows nodes to be automatically dropped in accordance with a set of parameters. One can set threshold values for **Discard Period (1800s), Join Period (1800s), Join Interval (6), Join Count 1 (5) and Join Count 2 (20)**.

<rk-img
  src="/assets/images/user-manual/web-management-platform/22.packet-filter.jpg"
  width="100%"
  figure-number="8"
  caption="Packet Filter"
/>

**4. GPS Information**

In case, you want to enter the GPS parameters for the Gateway manually. Flipping the Fake GPS switch turns this functionality on/off.

<rk-img
  src="/assets/images/user-manual/web-management-platform/23.gps.jpg"
  width="100%"
  figure-number="9"
  caption="GPS Information"
/>

## 2. Network Server Status

There is a dedicated page for the status of your Built-in Network Server. You get Data in both Table and Graph form.

<rk-img
  src="/assets/images/user-manual/web-management-platform/24.server-status.jpg"
  width="100%"
  figure-number="10"
  caption="Network Server Status"
/>

**1. Tabular Data**

- **Uptime**: How long the Built-in Server has been working without interruption
- **Devices**: The total amount of end-devices that are currently authenticated with the server.
- **Gateways**: The total amount of gateways that re forwarding frames to the server.
- **Total Uplink**: The total uplink frames processed.
- **Total Downlink**: The total downlinks frames transmitted.
- **Data Downlink**: The total downlink frames that carry data (non-services).
- **Total OTAA Requests**: The total authentication requests submitted by end-nodes.
- **Rejected OTAA Request**: The total authentication requests that were rejected.

**2. Graphical Data**

- **RSSI Distribution**: It reflects the RSSI in increments of 20dBm starting from -120dBm and going up to -40dBm. One can get an idea of how many of the total packets received fall within a certain RSSI level and draw conclusions.
- **SNR Distribution**: It reflects the SNR in increments of 5dB starting from -15dB and going up to 5dB. One can get an idea of how many of the total packets received fall within a certain SNR level and draw conclusions.
- **DataRate Distribution**: The percentage of packets that have a certain Data Rate (DR0 to DR7)
- **Traffic History**: The general graphs reflecting the amount of traffic in packets versus time. Good for evaluating the time of the heaviest traffic to prevent potential fallouts.

## 3. Gateway

In this section you can add and External Gateways to work with your LoRa® Network Server. This way packet forwarded by the listed Gateways will be forwarded as though they were within the range of this device and processed by the Application Server.

:::tip 📝 NOTE
By default, you do not need to add the current Gateway as the Network Server works on it anyway, even though it is not listed.
:::

<rk-img
  src="/assets/images/user-manual/web-management-platform/25.gateway-settings.jpg"
  width="100%"
  figure-number="11"
  caption="Gateway Settings"
/>

Below is a short explanation of the main parameters:

### Gateway

Here you can add a Gateway. You simply need to input the EUI into the text box and press the Add button. Additionally, you can add a Name, Description and the coordinates of the Gateway.


### Gateway Backend Configuration

This section allows you to configure the Gateway to use the Built-in Server to act as a MQTT Bridge.

**1. General Setup**

These setting are the same as for the LoRa® Gateway MQTT Bridge, refer to its section [LoRa Network](/Knowledge-Hub/Learn/Resources/user-manual/web-management-platform/lora-network.html#packet-forwarder) for more information.

**2. MQTT Topic**

Here you can get information on the topic templates: Uplink MQTT Topic, Downlink MQTT Topic, Downlink acknowledge MQTT Topic, Gateway Statistic MQTT Topic.

<rk-img
  src="/assets/images/user-manual/web-management-platform/26.gateway-settings2.jpg"
  width="100%"
  figure-number="12"
  caption="Gateway Settings"
/>

## 4. Application

In order for End-node data to be processed by the Built-in LoRa® Server you need to have an Application under which you register the device. This will allow a node to join the network and you can decrypt its data payload.

The first time you access this section there will be no applications created by default. Enter a name in the field, choose one of the two type from the drop-down menu (more on this further down) and press the “**Add**” button.

<rk-img
  src="/assets/images/user-manual/web-management-platform/27.ns-application.jpg"
  width="100%"
  figure-number="13"
  caption="NS Application"
/>

Now, you need to configure some parameters. These are separated in 3 tabs, which we will go through in order:

<rk-img
  src="/assets/images/user-manual/web-management-platform/28.ns-configuration.jpg"
  width="100%"
  figure-number="14"
  caption="NS Application Configuration"
/>

### Application Configuration

These are the mandatory things to configure, so they come first.

1. **Device Authentication Mode**: This reflects the choice you made when creating the Application.

- **Unified Application Key**: have the same key for every device that is a part of the Application
- **Separate Application Key**: allow for devices in the same application to use different application keys

2. **Name**: Chose something distinguishable.
3. **Auto Add LoRa Device**: If this is turned on, a field appears where you enter the Application EUI (or generate a random one). The idea here is to have your device be automatically added to the device pool if the Device EUI it has not already been added, provided the join request has the correct Application EUI and Key. This speeds up the process of adding a device to your network (from user perspective).
4. **Application EUI**: You can enter one manually or generate a random one via the “green arrows” button. Make sure this one matches the one in the node.
5. **Application Key**: Manual or random generation options are available.
6. **Description**: Not a mandatory field.


### Payload Format

There are only two options here. More features to come on future updates.

<rk-img
  src="/assets/images/user-manual/web-management-platform/29.payload-format.jpg"
  width="100%"
  figure-number="15"
  caption="NS Application Payload Format"
/>

You can choose to have no encoding or to use **Cayenne LPP** (a popular low power format). This allows to directly work with services using the format, without the need to do post processing. As this functionality separates the data field (provided you have chosen the Cayenne LPP and your node has the corresponding encoding) you should be able to have the parsed data field. You can choose to only forward the parsed data via the flip-switch. This will effectively not forward data objects that are not adhering to the Cayenne LPP format.

### Integrations

This tab allows the user to make a simple HTTPS integration to directly publish data.

<rk-img
  src="/assets/images/user-manual/web-management-platform/30.ns-integration.jpg"
  width="100%"
  figure-number="16"
  caption="NS Integrations"
/>

- There are several fields that need to be filled in, starting with the **Data Encoder/Decoder type** (Base 64 or HEX String). Once selected you can Enable the functionality with the slider.
- Afterwards make sure to fill the rest of the fields: HTTP/HTTPS Headers, Uplink data URL, Join notification URL, Ack notification URL, Device-status notification URL.
- You can test the HTTP endpoint integration with a free service like [https://webhook.site](https://webhook.site/)
- Last but not least, select a value for the Maximum number of concurrent connections and the Maximum length of the queue (default values are 16 and 64 respectively).
- The parameters and their configuration are out of the scope of this document as they are not specific to this device and there is plenty on information on the topic from various sources. Furthermore, you can check our documentation hub information and examples on the topic.
- Once your Application configuration is as you desire you can press the “**Save & Apply**” button. This will return you to the main Application section screen.

<rk-img
  src="/assets/images/user-manual/web-management-platform/31.ns-main-screen.jpg"
  width="100%"
  figure-number="17"
  caption="NS Main Application screen"
/>


- Press the “**Edit**” button to get access to the Application parameters, these includes both the parameters you entered when creating it (you can adjust these if you like) and a new tab where you can add a Device. As this is a fresh Application there are no registered devices.

<rk-img
  src="/assets/images/user-manual/web-management-platform/32.ns-devices-tab.jpg"
  width="100%"
  figure-number="18"
  caption="NS Application – Devices tab"
/>

### Devices

You need to enter a valid **Device EUI** in the text box (16 HEX symbols) and press the “**Add**” button. This starts the process and brings you to the screen where the parameters are configured. Additionally, you can Batch Add devices and Import/Export.


<rk-img
  src="/assets/images/user-manual/web-management-platform/33.ns-configuration-tab.jpg"
  width="100%"
  figure-number="19"
  caption="NS Device – Configuration tab"
/>


**1. Configuration**

The configurable parameters are in this tab, the other tabs available are only for monitoring purposes.

- **Device name**: A distinguishable name for your device.
- **Class**: LoRa® device class (both A and C are supported, B will be available in future updates).
- **Join mode**: The type of authentication method (both OTAA and ABP are supported).
- **Frame-counter Width**: The option for 16 and 32 bit exists.
- **Enable LPTP**: A proprietary protocol that allows for jumbo packets to be transferred. If such a packet arrives the Application Server will buffer it and assemble it once all the portions are available.
- **Description**: A human readable description of what the devices is to do.

**2. Activation**

This portion of the interface is empty to start with and will be popular ted with values once the devices have been authenticated and have joined the network. This applies if you use OTAA. In the case of ABP, the parameters in the Activation tab are entered manually and they will be present from the start.

<rk-img
  src="/assets/images/user-manual/web-management-platform/34.ns-activation-tab.jpg"
  width="100%"
  figure-number="20"
  caption="NS Device – Activation tab"
/>

**3. Downlink**

The user is given the option to create dummy downlink frames in order to test. Option for selecting whether the frame requires an Acknowledgment or not is present. In order to successfully transmit a downlink, you need to enter a valued Frame port and the payload bytes in HEX format.

<rk-img
  src="/assets/images/user-manual/web-management-platform/35.ns-downlink-tab.jpg"
  width="100%"
  figure-number="21"
  caption="NS Device – Downlink tab"
/>

**4. Live Device Data**

This is perhaps the most useful tool in the Application Server interface, as it allows the user to monitor the LoRa® traffic in real time. By clicking on a given packet one can expand its windows and access detailed information containing both meta data and payload. In case the node is transmitting in LPP the payload is decrypted and decoded and one can see the information (in the case of Figure 10 there is some environmental data – temperature, barometric pressure, etc.)

<rk-img
  src="/assets/images/user-manual/web-management-platform/36.ns-live-device.jpg"
  width="100%"
  figure-number="22"
  caption="NS Device – Live Device Data tab"
/>

**5. Overview**

One last thing to note is that there is an additional page to the Device data, which however only appears when the device has been authenticated and has started transmitting. It provides statistics similar to the ones on the Main interface page (RSSI, SNR, etc.), however this are not for the Gateway as a whole, but only for the particular device.

<rk-img
  src="/assets/images/user-manual/web-management-platform/37.ns-overview.jpg"
  width="100%"
  figure-number="23"
  caption="NS Device – Overview tab"
/>


## 5. Global Integration

This feature allows for integration of the Built-in LoRa® Application Server with an External MQTT broker.

<rk-img
  src="/assets/images/user-manual/web-management-platform/38.ns-global-integration.jpg"
  width="100%"
  figure-number="24"
  caption="NS Global Integration"
/>

### General Setup

You can refer to the Gateway MQTT Bridge section for a detailed explanation of the parameters.


### MQTT Topic Template Setup

Here you can get information on the topic templates: Join Topic, Uplink Topic, Downlink Topic, Ack Topic, Status Topic.

<rk-img
  src="/assets/images/user-manual/web-management-platform/39.mqtt-topic-template.jpg"
  width="100%"
  figure-number="25"
  caption="NS Global Integration MQTT Topic Template"
/>

