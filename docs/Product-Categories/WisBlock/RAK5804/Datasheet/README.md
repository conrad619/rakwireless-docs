---
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
---

# RAK5804 WisBlock WisIO Module Datasheet

## Overview

### Description


The RAK5804 module is part of the WisBlock series that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisCore and a WisBase module. 

The RAK5804 module is designed as an IO extension module that allows you to connect their own digital or analog devices or sensors to create a customized IoT solution. These sensors are connected through the two expansion connectors: **J2** and **J3**. To provide power to peripheral devices, the **3.3V** can be obtained from these expansion connectors. Internal protections allow shutting down the power supply when a short circuit is detected in the peripheral devices. Overcurrent cases are protected through **internal PTC thermistors** in the power supply circuit.  

Also, the RAK5804 module supports a USB interface, which can be used with RAK5005 to access the USB port of MCU of the WisCore module of the solution. 

All external expansion interfaces of the RAK5804 module are equipped with a TVS protection circuit to avoid damaging the mainboard and WisCore circuit with ESD when users plug in or unplug the interface.

### Features

- WisIO connector
- Supports **two (2) pieces of 10-pin IO** extension connectors.
- Supports **one (1) USB connector** to access WisCore Module.
- TVS protected circuity
- PTC thermistor to prevent output power overload
- Dimension: **25 mm x 15 mm**.



## Specifications


### Overview

The RAK5804 module can be mounted on the WisIO slot of the WisBase board. Figure 1 shows the mounting mechanism of the RAK5804 on a WisBase module, such as a RAK5005.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/mounting-mechanism.png"
  width="75%"
  caption="RAK5804 Mounting Mechanism on a WisBase module"
/>


### Hardware

The hardware specification is categorized into four parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK5804 WisBlock™ Module.

#### Interfaces

The RAK5804 presents an application to the IO pins and I2C and UART communication ports through the J2, J3, and J4 connectors. Users and connect through these connectors, sensors, digital I/O, analog I/O, and slave device through the I2C and UART ports to complete their final IoT solution. These pins are routed to the WisCore through the WisIO connector. 

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/j-connectors.png"
  width="75%"
  caption="RAK5804 J2, J3 and J4 I\/O connectors"
/>

##### J2 Connector

| **Pin Number** | **Function Description** | 
| ---- | ---- | 
| 1 | VBAT, Battery Power Supply | 
| 2 | 3.3V | 
| 3 | GND | 
| 4 | I2C1_SCL | 
| 5 | I2C1_SDA | 
| 6 | IO1, GPIO1 | 
| 7 | IO3, GPIO3 | 
| 8 | UART1_RX | 
| 9 | UART1_TX | 
| 10 | IO4, GPIO4 | 

<br>

##### J3 Connector

| **Pin Number** | **Function Description** | 
| ---- | ---- | 
| 1 | VBAT, Battery Powewr Supply | 
| 2 | 3.3V | 
| 3 | GND | 
| 4 | LED1 | 
| 5 | LED2 | 
| 6 | ANI1, ADC Input | 
| 7 | IO2, GPIO2 | 
| 8 | SW1 | 
| 9 | I2C2_SCL | 
| 10 | I2C2_SDA | 

<br>

##### J4 Connector

| **Pin** | **Description** | 
| ---- | ---- | 
| 1 | USB_VBUS (+5V) | 
| 2 | USB_DM | 
| 3 | USB_DP | 
| 4 | NC | 
| 5 | GND | 

<br>

#### Pin Definition


The RAK5804 module, as one of the WisIO module, comprises a standard WisIO connector. This connector allows the RAK5804 module to be mounted on a WisBlock baseboard, such as RAK5005. The pin order of the connector is shown in Figure 3.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/wisio-connector.png"
  width="75%"
  caption="RAK5804 WisBlock WisIO connector"
/>

| **Pin Number** | **Description** | **Pin Number** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | Battery Power | 2 | Battery Power | 
| 3 | GND | 4 | GND | 
| 5 | 3V3 Power | 6 | NC, Power Reserved for 3.3V | 
| 7 | USB+ | 8 | USB– | 
| 9 | VBUS | 10 | SW1 | 
| 11 | NC | 12 | NC | 
| 13 | NC | 14 | LED1 | 
| 15 | LED2 | 16 | NC | 
| 17 | NC | 18 | NC | 
| 19 | SDA for I2C1 | 20 | SDA for I2C1 | 
| 21 | NC | 22 | Analog1 to MCU | 
| 23 | NC | 24 | NC | 
| 25 | NC | 26 | NC | 
| 27 | NC | 28 | NC | 
| 29 | IO1 | 30 | IO2 | 
| 31 | IO3 | 32 | IO4 | 
| 33 | TXD1 | 34 | RXD1 | 
| 35 | SDA for I2C2 | 36 | SCL for I2C2 | 
| 37 | NC | 38 | NC | 
| 39 | GND | 40 | GND | 

<br>

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK5804 module and its recommended operating conditions. Refer to tables presented below. 

##### Absolute Maximum Ratings

| **Symbol** | **Description** | **Minimum** | **Nominal** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power Supply for the Module | –0.5 |  | 4.2 | V | 
| 3V3 | 3.3V Power Supply | –0.5 |  | 3.6 | V | 
| Ifuse | PTC Protection Current |  |  | 500 | mA | 
| TEMP | Working Temperature | –30 |  | 65 | ° C | 
| Storage | Storage Temperature | –40 |  | 85 | ° C | 

<br>

##### Recommended Operating Conditions

| **Symbol** | **Description** | **Minimum** | **Nominal** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power Supply for the module | 2.6 |  | 4.2 | V | 
| 3V3 | 3.3V Power Supply | 3.0 | 3.3 | 3.6 | V | 

<br>

#### Mechanical Characteristics


The mechanical dimensions of the RAK5804 module is shown in figure 4 below.


<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK5804 Mechanical Dimensions"
/>

#### Schematic Diagram

Figure 5 shows the schematic diagram of RAK5804 WisBlock WisIO connector, USB connector and the 10 mechanical holes.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK5804 Schematic Diagram"
/>
