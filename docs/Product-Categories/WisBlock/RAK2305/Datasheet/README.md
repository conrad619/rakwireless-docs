---
tags:
  - datasheet
  - wisblock
prev: /Product-Categories/WisBlock/RAK2305/Overview/
next: false
---

# RAK2305 WisBlock WisIO Module Datasheet

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/rak2305.png"
  width="50%"
  caption="RAK2305 WisBlock WisIO Module"
/>


### Product Description

The RAK2305 module is part of the WisBlock series, specifically, it is one of the modules that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way, and must be combined with a WisCore and a WisBase module.

The RAK2305 module is a 2.4 GHz Wi-Fi and Bluetooth in a single module. The core of the module is an ESP32-WROVER-B, which features a PCB antenna. This module is designed to be part of the Internet-of-Things (IoT) applications. It can function as a master or a slave in a Bluetooth network. Internally it supports SPI/I2C/UART interfaces.

### Product Features

-  Wi-Fi + BLE module for Internet-of-Things
-  I/O ports: UART/I2C/SPI/GPIO
- 4MB SPI flash and 8MB PSRAM
- Ultra-Low-Power Consumption
- Wi-Fi 802.11 b/g/n
- Module size: 29.5 x 25mm

## Specifications

### Overview

The overview covers the RAK2305 WisBlock™ board overview and block diagram. It also shows how to mount the board into to the baseboard. 


#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/board_overview.png"
  width="50%"
  caption="Board Overview"
/>


#### Mounting Sketch

Figure 3 shows how RAK2305 module (a WisIO module) is integrated with the
RAK5005 base board. The mounting sketch is shown.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/mounting-sketch.png"
  width="100%"
  caption="Mounting Sketch"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/block_diagram_rak2305.png"
  width="50%"
  caption="RAK2305 Block Diagram"
/>

### Hardware 

The hardware specification is categorized into four parts. It discuses the interfacing of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK2305 WisBlock WisIO Module.


#### Interfaces


##### UART Interface

The RAK2305 module provides two UART interfaces: UART0 and UART1.  The UART0 can be used update firmware or to access logs output through WisBlock baseboard USB interface. The UART1 is the main communication interface with WisCPU module.

##### SPI Interface

The RAK2305 supports one single SPI Interface. It can be operated either in the master or slave mode, both can be implemented in full duplex or half-duplex communication modes. The SPI interface supports the following features:

- Four SPI transfer modes, which is defined by the polarity (CPOL) and the phase (CPHA) of the SPI clock.
- An internal FIFO buffer of 64-byte.

##### I2C Interface

The RAK235 module provides a I2C bus interface. Depending on the user’s configuration, it can serve as I2C master or slave. The I2C interface supports:

- Standard mode (100 Kbit/s) and Fast mode (400 Kbit/s).
- Up to 5MHz, constrained by the SDA pull-up strength.

- 7-bit/10-bit addressing mode

The RAK2305 module allow users to access directly to the  registers to control I2C interfaces, which add more flexibility in the design of the final solution.

##### Download Interface

The RAK2305 module uses the UART0 interface to download customized application code into the ESP32’s flash memory. The users can use an USB to UART cable for this purpose. Alternatively, once the RAK2305 is mounted on top of WisBase base board, such as the RAK5005, then users can access to the UART0 interface through the RAK5005’s USB interface instead. The pinout if the USB port of the RAK2305 is shown in the Figure 5.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/usb-uart0-interface.png"
  width="30%"
  caption="USB/UART0 Interface"
/>

:::warning ⚠️ WARNING
Before download, you need to pull down IO0.
:::

#### Electrical Characteristics

##### Absolute Maximum Ratings

Table below shows the absolute maximum ratings supported by the RAK2305 Module

| **Symbol** | **Description** | **Min** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power Supply For the Module | 0.5 |  | 4.2 | V | 
| Iout | Step Down IC Output Current |  |  | 1000 | mA | 


##### Recommended Operating Conditions

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Vbat | Power Supply For the Module | 2.6 |  | 4.2 | V | 
| 3v3 | 3.3V Power Supply |  | 3.3 |  | V | 


#### Mechanical Characteristics

Figure 6 shows the dimensions and the mechanic drawing of the RAK2305 Module.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/rak2305_dimensions.png"
  width="100%"
  caption="RAK2305 Module Dimensions"
/>

#### Schematic Diagram

The following sections describes the schematic of the RAK2305 module.

##### Power Supply

Figure 7 shows the schematic of the power supply of the RAK2305 module. In the diagram, VBAT is the battery voltage supplied from the WisBlock base board RAK5005.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/power_supply.png"
  width="100%"
  caption="Power Supply"
/>

##### WisIO Connector

Figure 8 shows the pin definition of WisIO connector. 

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/wisio-connector.png"
  width="100%"
  caption="WisIO Connector"
/>

| **Name** | **Description** | **Comment** | 
| ---- | ---- | ---- | 
| VBAT | Battery Output Voltage | Max 4.2V | 
| 3V3_R | WisBlock Base Board 3.3V | By Default, No Connected | 
| VDD | 3.3V | By Default, No Connected | 
| TXD0/RXD0 | UART0 interface | Interface for firmware download and log output | 
| TXD1/RXD1 | UART1 interface | Main serial communication interface | 
| LED1/LED2 | LED interface | To control the base board’s LED | 
| EN | ESP32 module Enable | Active High | 


##### WisIO Connector Pin Order

Figure 9 shows WisIO connector and its pin order. This connector is located on the bottom side of the module.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/wisio-connector-pin-order.png"
  width="40%"
  caption=" WisIO Connector Pin Order"
/>


##### Core Module

The core components inside of the RAK2305 module is the ESP32-WROVER-B, which comes with a PCB antenna. The module is designed to work with 3.3V supplied by the base board. In order to prevent any instability on EN (Enable pin), a RC delay circuit is added to this pin, and the EN pin is pulled up to 3.3V by default. The Figure 10 shows the section of the schematic that involves the ESP32-WROVER-B component.


<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/core_module.png"
  width="100%"
  caption="RAK2305 Core Component's Schematic"
/>


| **Name** | **Description** | **Comment** | 
| ---- | ---- | ---- | 
| 3.3V | Power Supply | 3.3V | 
| GND | Ground |  | 
| TXD1/RXD1 | UART1 interface | Main communication interface | 
| TXD0/RXD0 | UART0 interface | Interface for firmware update or log output | 
| LED1/LED2 | LED interface | Baseboard LED control | 
| EN | ESP32 Module Enable | Active High | 
| STATUS_LED | LED on module | Active Low | 
| GPIO0 | BOOT0 | Low: UART Download Mode<br><br>High: FLASH Operation<br>Mode | 


