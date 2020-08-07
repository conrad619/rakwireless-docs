---
tags:
  - datasheet
  - wisblock
prev: /Product-Categories/WisBlock/RAK5802/Overview/
next: false
---

# RAK5802 WisBlock WisIO Module Datasheet



### Product Description

The RAK5802 module is part of the WisBlock series, specifically, it is one of the modules that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way, and must be combined with a WisCore and a WisBase module.

The RAK5802 is a RS485 ModBus extension module that allows users to provide IoT connectivity to a new/existing solution with RS485 interface. This module converts the RS485 signals into UART signals. These signals are collected by a MCU located inside of a WisCore module for further data transmission. 

The RAK5802 module features one RS485 interface. Inside, a protection circuity is added to protect against ESD hazard. The RAK5802 module complies with the IEC61000-4-2 standard and can protect up to 18 KV HBM ESD.

In addition, the RAK5802 supports one I2C interface, customer can use this I2C interface to connect external sensors.

### Product Features

* Supports one RS485 interface and ModBus.
* Supports WisIO interface. It is compatible with multiple WisCore modules, such as RAK4201.
* Supports up to 16 RS485 nodes
* Supports TX/RX signals automatic detection, no need to have DE signal for the RS485 chip.
* Supports low power consumption mode. The module can be powered off by the WisCore module for saving energy during idle periods.
* Reserved I2C expansion interface.
* Supports in the field fast crimping terminals.
* Designed with 18kV ESD protection level.
* Small dimensions of 35mm x 25mm.


## Specifications


### Overview

#### Block Diagram
The figure below shows the block diagram of the RAK5802 module. Internally, a RS485 converter translates the RS422 electrical differential signal into the UART signal. This component can be disabled by the Enable signal through the MCU in order to save power during idle periods.

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/block-diagram.jpg"
  width="75%"
  caption="RAK5802 block diagram"
/>

### Hardware

#### Pin Definition

##### RAK5802 Module 

The figure below shows the pin number of the sensor connector of the RAK5802 module.

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/rak5802-pins.jpg"
  width="35%"
  caption="RAK5802 sensor connector"
/>

The pin definition of the sensor connector is described in the table below:

| **Pin number** | **Function Description** | 
| ---- | ---- | 
| 1 | RS485-B | 
| 2 | RS485-A | 
| 3 | GND | 
| 4 | Power supply from battery on mainboard | 
| 5 | Analog 1 to MCU | 
| 6 | 3V3 input | 
| 7 | SDA for I2C interface | 
| 8 | SCL for I2C interface | 


##### WisIO Connector

The figure below shows the pin order of the WisIO connector on the module. Through this connector the RAK5802 module is attached to the WisBoard base board. 

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/wisconnector-pins.jpg"
  width="35%"
  caption="RAK5802 internal WisIO connector."
/>

The table below shows the functionalities of each pin of the WisIO connector: 

| **Pin number** | **Description** | **Pin number** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | Battery power | 2 | Battery power | 
| 3 | GND | 4 | GND | 
| 5 | NC, reserved for 3V3 | 6 | 3.3V power | 
| 7 | NC | 8 | NC | 
| 9 | NC | 10 | NC | 
| 11 | NC | 12 | NC | 
| 13 | NC | 14 | NC | 
| 15 | NC | 16 | NC | 
| 17 | NC | 18 | NC | 
| 19 | SDA for I2C1 | 20 | SCL for I2C1 | 
| 21 | Analog1 to MCU | 22 | NC | 
| 23 | NC | 24 | NC | 
| 25 | NC | 26 | NC | 
| 27 | NC | 28 | NC | 
| 29 | Reserved for DE | 30 | NC | 
| 31 | NC | 32 | NC | 
| 33 | UART_TX | 34 | UART_RX | 
| 35 | NC | 36 | NC | 
| 37 | NC | 38 | NC | 
| 39 | GND | 40 | GND | 

#### Electrical Characteristics

##### Absolute Maximum Ratings

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power supply for the module | -0.5 |  | 4.2 | V | 
| Iout | Step down IC output current |  |  | 1000 | mA | 
| TEMP | Working temperature | -30 |  | 65 | °C | 
| Storage | Storage Temperature | -40 |  | 85 | °C | 


##### Recommended Operating Conditions

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power supply for the<br>module | 2.6 |  | 4.2 | V | 
| 3V3 | 3.3V power supply | 3.0 | 3.3 | 3.6 | V | 

#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/board-dimensions.png"
  width="100%"
  caption="RAK5802 dimensions"
/>

##### RAK5802 Mounting Mechanism

The RAK5802 module is part of the WisIO category, which connects to the base board through the WisIO slot. The installation method is shown in the figure below.

- First, keep the RAK5802 module parallel to the base board, and gently place its WisConnector and plug it into the WisIO slot receptacle of the baseboard. The WisIO slot has an outer silkscreen on it to assist the alignment. At this point, apply force evenly along the module and press again. There will be a sound to confirm the successful completion of the attachment process. For detailed instructions, please refer to the "WisBlock Installation Guide.pdf".

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/wisconnector.png"
  width="50%"
  caption="WisConnector"
/>

- Second, secure the RAK5802 module with 3 x M1.2x3 pan head screws as shown in the figure below.

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/mounting-mechanism.png"
  width="75%"
  caption="RAK5802 mounting mechanism on a WisBase module"
/>

##### RAK5802 Sensor Connector Crimping Mechanism

The RAK5802 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The crimping terminal can support cable with a diameter between 24 AWG and 20 AWG. The usual stripping length is around 6 to 7 mm. 

As shown in the figure below, during crimping process, the user should first press down and maintain the spring head of the crimping terminal firmly, then insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, then release the spring head, and the crimping process is completed.

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/sensor-connector.png"
  width="50%"
  caption="AK5802 sensor connector"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/schematic-diagram.jpg"
  width="100%"
  caption="RAK5802 schematic diagram"
/>

## RAK5802 and WisBlock Compatibility

In the ecosystem of the WisBlock, the philosophy is to allow users to combine a WisBlock module of one category with WisBlock module of other categories. This is true in most of the cases but it’s important to review the compatibility matrix when designing a customized solution.

|  | **Compatible Wisblock Module** | **Description** | 
| ---- | ---- | ---- | 
| WisBase base board | RAK5005/RAK5005-O | RAK5802 can be attached in the WisIO slot of RAK5005/RAK5005-O base board. | 
| WisCore module | RAK4631 | RAK5802 is compatible with RAK4631 WisCore module. | 
|  | RAK4201 | Please select RAK4201L-485 for low band or RAK4201H-485 for high band. | 
|  | RAK4202 | RAK5802 is compatible with RAK4202 WisCore module. | 
|  | RAK4261 | RAK5802 is compatible with RAK4261 WisCore module. | 
|  | RAK4601 | RAK5802 is compatible with RAK4601 WisCore module. | 