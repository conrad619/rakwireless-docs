---
prev: /Product-Categories/WisBlock/RAK5801/Overview/
next: false
tags:
  - datasheet
  - wisblock
---

# RAK5801 WisBlock WisIO Module Datasheet

## Overview

### Description

The RAK5801 module is part of the WisBlock series that belongs to the WisIO category. This module is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisCore and a WisBase module. 

The RAK5801 is a **4-20mA current loop extension module** that allows the users to provide IoT solutions to analog sensors with a 4-20mA interface. This module converts the 4-20mA current signal into voltage range supported by the WisCore module (MCU) for further digitalization and data transmission

The RAK5801 module features **two input channels of 4-20mA**. Inside, high precision operation amplified is used, which supports a wide range of operating temperatures for the signal amplification and conversion. 

Also, this module integrates a **12V power supply**, which can be used by users to power the external sensors. The RAK5801 can be connected to a 2-wire or 3-wire or 4-wire types of 4-20mA sensor. The connection of the 4-20mA sensors is done through the fast crimping terminals without the need for special tools, which simplify the installation process on the fields.


### Features

- Supports two channels of **4-20mA** current analog input.
- Supports WisIO interface, and it is compatible with multiple WisCore modules, such as RAK4201.
- **0.005mA** conversion accuracy. 
- Supports low power consumption mode. The module can be powered off by the WisCore module for saving energy during idle periods.
- Supports 12V output to provide power to external sensors. 
- Reserved **I2C** expansion interface.
- Supports in the field fast crimping terminals.
- Designed with **2kV ESD** protection level.
- Small dimensions of **35mm x 25mm**.

## Specifications

### Overview


The overview discusses the block diagram of the board. It also shows the installation mechanism on how to mount the board into the baseboard.


#### Block Diagram

The RAK5801 module was designed to convert 4-20mA current signals into voltage signals by applying a resistor. As shown in Figure 1, this voltage signal is conditioned with an operational amplifier to the level supported by an analog input of an MCU. Inside of the MCU, the analog signal is then digitalized by an ADC.


<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/block-diagram.png"
  width="100%"
  caption="RAK5801 Block Diagram"
/>

Once the signal is digitalized, you can recover the original current value by applying the following relation: 

``I = U/149``

Where:
- I = Original Current
- U = ADC Reading
- Unit: mA

#### Installation

##### Mounting Mechanism

The RAK5801 module is part of the WisIO category, which connects to the baseboard through the WisIO slot. To install the module, execute the following steps:

1.Keep the RAK5801 module **parallel to the baseboard**. Gently place its WisConnector and plug it into the WisIO slot receptacle of the baseboard. The WisIO slot has an outer silkscreen on it to assist the alignment. At this point, apply force evenly along with the module and press again. There will be a sound to confirm the successful completion of the attachment process. 

:::tip 📝 NOTE:
For detailed instructions, refer to the **WisBlock Installation Guide**.
:::

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/wisconnector.png"
  width="75%"
  caption="WisConnector"
/>


2.Secure the RAK5801 module with **3 x M1.2 x3 pan head screws** as shown in Figure 3 below.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/mounting-mechanism.png"
  width="75%"
  caption="WisConnector"
/>

##### Sensor Connector Crimping Mechanism

The RAK5801 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The crimping terminal can support cable with a width between **24AWG** and **20 AWG**. The usual stripping length is around 6 to 7 mm. 

Execute the following steps of the crimping process:

1.Press down and maintain the spring head of the crimping terminal firmly. 

2.Insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, release the spring head, and the crimping process is completed.


<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/crimping-process.png"
  width="75%"
  caption="RAK5801 Sensor Connector"
/>

### Hardware

#### Device Specification

The following table shows the parameters and the description of the RAK5801 WisBlock WisIO Module:

| **Parameter** | **Description** | 
| ---- | ---- | 
| Analog Input Interface | 2 channels of 4-20mA | 
| Analog Sampling Resolution | 0.005mA | 
| Analog Sampling Accuracy | 1% | 
| Analog Maximum Input Current | 25mA (There is a risk to burn the circuit surpassing this limit) | 
| Analog Port ESD Protection Level | 2kV HBM | 
| Current Sampling Resistor | 49.9 Ω | 
| Operational Amplifier Gain | 3.0 | 
| Input Voltage | 3.0V – 3.6V | 
| Output Voltage | 12V | 
| Output Current | Maximum 30mA | 
| Operating Temperature | -30° C ~ 65° C | 
| Storage Temperature | -40°C ~ 85°C | 
| Module Dimensions | 35x25mm | 


#### Pin Definition

This section covers the pin number of the sensor connector, the definition, and the functionalities of each pin shown in a tabular representation.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/sensor-connector.png"
  width="30%"
  caption="RAK5801 Sensor Connector"
/>

| **Pin Number** | **Function Description** | 
| ---- | ---- | 
| 1 | SCL of the I2C interface | 
| 2 | SDA of the I2C interface | 
| 3 | 3V3 output | 
| 4 | VBAT, Battery output | 
| 5 | 12V output for external sensors | 
| 6 | GND | 
| 7 | Analog input 0 | 
| 8 | Analog input 1 | 


With the  WisIO connector, the RAK5801 module is attached to the WisBoard baseboard. Refer to Figure 2 for the pin order of the WisIO connector of the module. 

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/internal-wisio-connector.png"
  width="75%"
  caption="RAK5801 Internal WisIO Connector"
/>

The functionalities of each pins of the WisIO connector are tabulated below.

| **Pin Number** | **Description** | **Pin Number** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | Battery Power | 2 | Battery Power | 
| 3 | GND | 4 | GND | 
| 5 | NC, reserved for 3V3 | 6 | 3.3V Power | 
| 7 | NC | 8 | NC | 
| 9 | NC | 10 | NC | 
| 11 | NC | 12 | NC | 
| 13 | NC | 14 | NC | 
| 15 | NC | 16 | NC | 
| 17 | NC | 18 | NC | 
| 19 | SDA for I2C1 | 20 | SCL for I2C1 | 
| 21 | NC | 22 | Analog to MCU | 
| 23 | NC | 24 | NC | 
| 25 | NC | 26 | NC | 
| 27 | NC | 28 | NC | 
| 29 | Enable note1 | 30 | NC | 
| 31 | NC | 32 | Analog0 to MCU | 
| 33 | NC | 34 | NC | 
| 35 | NC | 36 | NC | 
| 37 | NC | 38 | NC | 
| 39 | GND | 40 | GND | 

:::tip 📝 NOTE:
This signal controls the dc-dc power supply on RAK5801, before capture analog signal, please set this pin to high to enable power for RAK5801.
:::

#### Mechanical Characteristics

Refer to figure 7 below for the mechanical dimensions of the RAK5801 module.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/mechanical-dimensions.png"
  width="100%"
  caption="RAK5801 Mechanical Dimensions"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK5801 Schematic Diagram"
/>

## Typical Application

### Two-wire sensor

Execute the following steps for **2-wire 4-20mA sensor**. (Refer to Figure 9.)

1. Connect sensor（+）to VOUT(PIN5) of RAK5801.
2. Connect sensor(-) to AIN0 or AIN1 of RAK5801.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/two-wire.png"
  width="40%"
  caption="RAK5801 connects 2-wire Sensor"
/>

### Four-wire Sensor

Execute the four-wire sensor, for the 4-wire sensor:

1. Use an external power supply to the power sensor.
2. Connect the output of the sensor to AIN0 or AIN1 of RAK5801.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/four-wire.png"
  width="40%"
  caption="RAK5801 connects 4-wire Sensor"
/>

## WisBlock Compatability


Since a WisBlock module can be combined with a variety of different functional modules, the pin functions of the MCU are multiplexed, so the interface expansion module for each specific function may need to be appropriately adapted for the WisBlock shipped according to standards. The adaptable modules of RAK5801 are as shown in the following table:

| **WisBlock Module** | **Adaptable Module** | **Description** | 
| ---- | ---- | ---- | 
| WisBase Baseboard | RAK5005/RAK5005-O | RAK5801 can be attached in the WisIO slot of RAK5005/RAK5005-O baseboard. | 
| WisCore Module | RAK4631 | RAK5801 is compatible with RAK4631. | 
|  | RAK4201 | Low Band: **RAK4201L-ADC**<br>High Band: **RAK4201H-ADC** | 
|  | RAK4202 | Refer to Note 1 for the hardware adaptions to the RAK5005 and RAK4202 shipped according to standards. | 
|  | RAK4261 | Refer to Note 2 for the hardware adaptations to the RAK5005 and RAK4262 shipped according to standards. | 

:::tip 📝 NOTE:
Non-adaptable WisBlock module for RAK5801: **RAK4601**

1. Only **analog0** channel analog data collection is supported when the RAK4202+RAK5801 module shipped according to standards is applied. **RAK5801** and **RAK5005** require adaptation as follows when the analog0 analog data channel is to be applied. The adapted RAK5005 does not support battery power collection.

- For RAK5005 adaptation: Remove **R7**.
- For RAK5801 adaptation: Change R94 to **R95.** Apply **PA0** to read the analog data of Channel **analog1**. Apply **PA2** to read the analog data of Channel **analog0**.

Adaptation when applying **RAK4261+RAK5801**:

1.Only **analog0** channel analog data collection is supported when the RAK4261+RAK5801 module shipped according to standards is applied. **RAK5801** and **RAK5005** require adaptation as follows when the analog1 analog data channel is to be applied. The adapted RAK5005 does not support battery power collection.
- For RAK5005 adaptation: Remove **R7**.

- For RAK5801 adaptation: Change R94 to **R95.** Apply **PA0** to read the analog data of Channel **analog1**. Apply **PA2** to read the analog data of Channel **analog0.**
:::
