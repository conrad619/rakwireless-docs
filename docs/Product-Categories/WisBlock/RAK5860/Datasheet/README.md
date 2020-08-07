---
prev: /Product-Categories/WisBlock/RAK5860/Overview/
next: false
tags:
  - datasheet
  - wisblock
---
# RAK5860 WisBlock WisIO Module Datasheet

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/rak5860.png"
  width="50%"
  caption="RAK5860 WisBlock WisIO Module"
/>

### Product Description

The RAK5860 module is part of the WisBlock series, specifically, it is one of the modules that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way, and must be combined with a WisCore and a WisBase module. 

The RAK5860 is a module designed to work with the RAK5005 base board, it provides wireless communication (LTE Cat M1, LTE Cat NB2) features to the final application. This module support LTE-FDD network, and supports half-duplex operation in LTE network. It also provides optional GNSS functionality.

For debugging purpose, a Micro-USB connector is used for sending AT commands, data transmission and receiving GNSS NMEA output. Once the module is integrated with the RAK5005 base board, the internal UART port of the module is connected through the WisIO connector to a WisCore module.

### Product Features 

- Quectel BG77 with LTE Cat M1, LTE cat NB2 and GNSS
- iPEX connectors for the LTE and GPS antenna
- Micro-USB connector.
- Nano SIM and ESIM options
- Status Indication LEDs.
- Power Supply: 2.6-4.2V, typical supply voltage 3.3V
- Module size: 25mm x 35mm

## Overview

### Board Overview

Figure 2 shows a realistic view and main component description of the RAK5860 Module

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/board-overview.png"
  width="75%"
  caption="RAK5860 Board Realistic View"
/>

#### RAK2305 Mounting Sketch

Figure 3 shows how RAK5860 module (a WisIO module) is integrated with the
RAK5005 base board. The mounting sketch is shown.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/mounting-sketch.png"
  width="75%"
  caption="Mounting Sketch"
/>


### Block Diagram
Figure 4 shows the block diagram of the RAK5860 Module

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/block_diagram.png"
  width="75%"
  caption="RAK5860 Block Diagram"
/>

## Specifications

### Electrical Characteristics
#### Absolute Maximum Ratings

Table below shows the absolute maximum ratings of the RAK5860 module.

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power Supply for the Module | -0.5 |  | 4.2 | V | 
| USB_VBUS | USB Connection Detection | 1.3 |  | 1.8 | V | 
| Voltage at Digital Pins |  | -0.3 |  | 2.09 | V | 


#### Recommended Operating Conditions

Table below shows the recommended operating conditions of the RAK5860 module.

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power Supply for the Modulke | 2.6 | 3.3 | 4.2 | V | 
| USB_VBUS | USB Conenction Detection | 1.3 |  | 1.8 | V | 
| USBPHY_3P3 | Power for USB PHY Circuit |  | 3.3 |  | V | 

Figure 5 shows the dimensions of the RAK5860 module.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/mechanical_dimensions.png"
  width="75%"
  caption="Mechanical Dimensions"
/>

### Schematic Diagram
The following sections will describe the schematic of the RAK5860 module, which include: 

- Turn on/off module
- WisIO Connector
- Voltage-level translator
- SIM card circuit
- USB Connector
- Status Indication LEDs
- Main Antenna
- GNSS Antenna

#### Turn on/off mechanism

Figure 6 shows a circuit to allow turn on or to turn off the module. By default, the internal Quectel BG77 module is in power off mode, it can be turned on by driving WIS_PWRKEY to high state (positive digital pulse) for a period of 500-1000ms. 

Driving WIS_PWRKEY high for 650-1500ms, the module will execute power-down procedure after WIS_PWRKEY is released, then enter off mode.  

Alternatively, the user can send a command **AT+QPOWD** command turn off the internal Quectel BG77 module.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/turn-on-off.png"
  width="50%"
  caption="Turn On/Off Module Circuit"
/>

#### WisIO Connector

Figure 7 shows the definition of WisIO connector. 

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/wisio.png"
  width="75%"
  caption="WisIO Connector Pin Definition"
/>

The RAK5860 only uses a subset of all the pins available in the WisIO connector. These are shown in the Table below:

| **Name** | **Description** | **Comment** | 
| ---- | ---- | ---- | 
| VBAT | BG77 Power Supply | Max 4.2V | 
| 3v3_S | 3.3V for GNSS Antenna |  | 
| 3V3 | 3.3V For Voltage Level Transistor |  | 
| WIS_PWRKEY | Turn on/off BG77 | Active High | 
| WIS_TX | UART TXD | BG77 MAIN_RX, 1.8V power domain | 
| WIS_RX | UART RXD | BG77 MAIN_TX, 1.8V power domain | 


#### WisIO Connector Pin order

Figure 8 shows the WisIO connector’s pin order. The connector is located in the
bottom layer of the RAK5860 module.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/pin_order.png"
  width="50%"
  caption="WisIO Connector Pin Order"
/>

#### Voltage-level translator

Within the BG77, all interfaces are designed to work with 1.8V level. RAK5860 features  a voltage-level translator in order to down convert the 3.3V coming from the WisCore module. The Figure 9 shows the design of the internal voltage-level translator.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/voltage-level-translator.png"
  width="50%"
  caption="3.3V to 1.8V voltage-level translator"
/>

When WIS_TX is high (3.3V), the NPN triode is turned off, BG77_RX is pulled high (1.8V)

When WISTX is low (0V), the NPN triode is turned on, BG77 RX is low (0V).

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/voltage_level-translator-1.png"
  width="50%"
  caption="1.8V to 3.3V voltage-level translator"
/>

When BG77_TX is low (0V), the NPN triode is turned on, WIS_RX is low (0V)

When BG77TX is high (1.8V), the NPN triode is turned off, WIS RX is pulled high (3.3V)

:::tip 📝 NOTE:
VDD_EXT is 1.8V, from BG77 internal regulator, BG77 pin 21
:::

#### SIM card circuit

The RAK5860 module only supports the 1.8V ESIM/SIM card, the following Figure 12 shows SIM interface circuit. by default, we use Nano SIM card, eSIM is no mounting. In order to offer good ESD protection, a TVS diode array is added in the SIM card circuitry

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/sim_card.png"
  width="75%"
  caption="SIM Card Circuit"
/>

#### USB Connector

The RAK5860 module provides a Micro-USB connector for connection with a host device. The USB data lines USB+ and USB- are connected directly to the BG77. The VBUS line can be used for USB connection detection. 

In order to offer good ESD protection, a TVS diode array is added in the USB connector circuit.


<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/usb_connector.png"
  width="50%"
  caption="USB Connector"
/>

The USB connection detection pin input voltage range is 1.3-1.8V. The Figure 14 shows the USB connection detection pin power supply. 


<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/usb_connection_detection.png"
  width="50%"
  caption="USB connection detection pin power supply"
/>

#### Power supply for USB PHY circuit

The Figure 15 shows the power supply for USB PHY circuit.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/usb_phy.png"
  width="50%"
  caption="Power supply for USB PHY circuit"
/>

#### Status Indication LEDs

Figure 16 shows the operation status and network activity status led circuit, when BG77 is powered on, blue led is lit, different activity network status, the green led is lit or not is different.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/status_indication-led.png"
  width="75%"
  caption="Status indication LED circuit"
/>

#### Main Antenna

The RAK5860 module’s main antenna has a reserve π-type matching circuit for better RF performance, we use U.FL connector for main antenna.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/main_antenna.png"
  width="50%"
  caption="Main Antenna Circuit"
/>

#### GNNS Antenna

The RAK5860 module is designed with an active antenna, the Figure 18 shows the GNSS antenna circuit. 3V3_S from WisIO connector, we use a U.FL connector for GNSS antenna.

<rk-img
  src="/assets/images/wisblock/rak5860/datasheet/gnss_antenna.png"
  width="50%"
  caption="GNSS Antenna circuit"
/>
