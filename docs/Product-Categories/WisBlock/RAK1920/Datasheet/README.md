---
tags:
  - datasheet
  - wisblock
prev: ../Overview/
next: false
---

# RAK1920 WisBlock WisIO Datasheet

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/htkmdakt0tdhi3ixvzpj.jpg"
  width="35%"
  caption="RAK1920 WisIO Module"
/>

## Overview

### Description

The RAK1920 module is part of the WisBlock series, specifically, it is one of the modules that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way, and must be combined with a WisCore and a WisBase module. 

The RAK1920 module is a sensor extension module, it supports several defacto-standard interfaces in the IoT market and allows customers to integrate sensors manufactured by Mikroe, SparkFun, SeeedStudio, and others. For example, the RAK1920 supports the Click Boards™ series of module provided by Mikroe, Qwiic Connect™ sensor interface designed by SparkFun, and it supports all kinds of I²C module digital I/O, UART and ADC sensors with a Grove™ interface.


### Features

- Interface to all Click Boards of Mikroe
- Interface to all Qwiic sensors of SparkFun
- Interface to all I2C and Digital I/O sensors of Grove
- Interface to UART and ADC sensors options of Grove
- Reserved I2C interface
- 3.3V and 5V sensors options

## Specifications

### Hardware

The hardware specification is categorized into four parts. It discusses the interfacing, its corresponding functions and the diagram of the module as well. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK1920 WisBlock WisIO Module.

#### Interfaces

##### Mikroe Click Boards Interfaces

The RAK1920 supports all the Click boards modules manufactured by Mikroe through the mikroBUS™ interface, the figure below shows the pin number of the mikroBUS.

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/mikroe-interface.jpg"
  width="35%"
  caption="Mikroe’s mikroBUS® interface"
/>

The figure below shows the definition of the mikroBUS interface:

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/mikrobus-interface.jpg"
  width="75%"
  caption="mikroBUS interface pin definition"
/>

##### Grove Sensor Interfaces 

The RAK1920 module supports the Grove I2C and digital I/O sensors. The figure below shows the pin number and definition of the Grove sensor. By default, VCC is connected to 3.3V line of the WisIO connector.

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/grove-interface.jpg"
  width="35%"
  caption="Grove Sensor interfaces"
/>

By default, the I2C is enabled in the RAK1920 module, but if it is required, the RAK1920 module can also supports sensors with Grove UART interface and ADC sensors. To enable the UART interface, a resistance connection needs to be added by the customer. When use Grove UART interface sensor module, replace R9 to R10, R11 to R12, when use Grove ADC interface (not ADC to I2C module) sensor module, replace R13 to R14, change R15 to R16. The figure below shows replace connection resistance location.

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/replace-connection-resistance-location.jpg"
  width="35%"
  caption="Replace connection resistance location"
/>

The figure below shows Grove sensor cables:

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/grove-sensor-cable.jpg"
  width="35%"
  caption="Grove Sensor cables"
/>


The table below is the Grove cable color and function definition.

| **Pin** | **Color** | **Function** | 
| ---- | ---- | ---- | 
| 1 | Yellow | Digital IO1 /ADC CH1 /UART RX /I2C Cock | 
| 2 | White | Digital IO2 /ADC CH2 /UART TX /I2C Data | 
| 3 | Red | VCC | 
| 4 | Black | GND | 


##### Qwiic Sensor Interface

The RAK1920 module supports sensors manufactured by SparkFun through the Qwiic Connet interface. The figure below shows the Qwiic Connect interface.

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/qwicc-connect-interface.jpg"
  width="35%"
  caption="Qwiic Connect® interface"
/>

The figure below shows a Qwiic Connect cable:

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/qwicc-cable.jpg"
  width="35%"
  caption="Qwicc Cable"
/>

The table below shows the Qwiic Connect cable color and function definition:

| **Pin** | **Color** | **Function** | 
| ---- | ---- | ---- | 
| 1 | Yellow | I2C Cock | 
| 2 | Blue | I2C Data | 
| 3 | Red | 3.3V | 
| 4 | Black | GND | 


##### Reserved I2C Interface

The RAK1920 module has a reserved I2C interface, it can be used for generic I2C interface sensors. Note, this I2C interface only supports 3.3V type of sensors. The figure below shows the reversed I2C interface.

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/reserved-i2c-interface.jpg"
  width="35%"
  caption="Reserved I2C Interface"
/>

#### Electrical Characteristics

##### Absolute Maximum Ratings

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power supply for the module | -0.5 |  | 4.2 | V | 
| Iout | Boost converter output current |  |  | 800 | mA | 


##### Recommended Operating Conditions

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power supply for the module | 2.6 |  | 4.2 | V | 
| 3V3 | 3.3V power supply |  | 3.3 |  | V | 
| 5V | 5.5V power supply |  | 5.0 |  | V | 


#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/board-dimensions.jpg"
  width="35%"
  caption="Mechanical Dimensions"
/>

#### Schematic Diagram

##### Power Supply

The RAK1920 module supports 3.3V and 5V options, by default, the 3.3V is used as the power source of sensors. The module integrates a  boost converter from the VBAT to 5V. The VBAT is the battery output voltage, usually between 3.7V and 4.2V. The EN pin enables this boost converter and is controlled by the WisCore module of the overall solution. 

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/power-supply-ckt.jpg"
  width="75%"
  caption="Power supply"
/>

##### WisIO Connector

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/wisio-connector-ckt.jpg"
  width="75%"
  caption="WisIO Connector"
/>


The RAK1920 module uses only a subset of all the pins available in the WisIO connector. These are shown in the table below:

| **Name** | **Description** | **Comment** | 
| ---- | ---- | ---- | 
| VBAT | battery output voltage | Maximum: 4.2 Volts | 
| 3V3 | 3.3 V | Default, sensor power supply | 
| TXD1/RXD1 | UART interface | Connected only to the Click Boards connector. | 
| CS/SCK/MOSI/MISO | SPI interface | Connected only to the Click Boards | 
| SDA/SCL | I2C interface | All I2C sensors | 
| AIN0/AIN1 | ADC input interfaces | Grove or click Boards | 
| INT | Hardware Interrupt | Connected only to the Click Boards connector. | 
| RST | Reset | Connected only to the Click Boards connector | 
| PWM | PWM input | Connected only to the Click Boards connector. | 
| EN | Boost Converter Enable | IO5 | 
| IO1/IO3 | General purpose I/O | Connected to Grove digital I/O sensors’ connectors. | 


###### WisIO Connector Pin Order 

The figure below shows the WisIO connector’s pin order. The connector is located in the bottom layer of the RAK1920 module.

<rk-img
  src="/assets/images/wisblock/rak1920/datasheet/wisio-connector-pin-order.jpg"
  width="35%"
  caption="WisIO connector’s pin order"
/>



