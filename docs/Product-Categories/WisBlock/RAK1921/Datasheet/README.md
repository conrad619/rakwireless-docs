---
tags:
  - datasheet
  - wisblock
next: false
prev: /Product-Categories/WisBlock/RAK1921/Overview/
---

# RAK1921 WisBlock WisIO Module Datasheet


### Product Description

The RAK1921 module is part of the WisBlock series that belongs to the accessory category. This module was designed to be part of a production-ready IoT solution in a modular way. As part of the accessory category, it is not mandatory to be part of a final solution, but on a certain occasion, it provides competitive advantages and improves the usability of the final solution.

RAK1921 is an OLED display module with a **128×64 dot matrix**. The main characteristics of this module are the following:

- High Brightness
- Self-emission
- High Contrast Ratio
- Slim/thin Outline
- Wide Viewing Angle
- Wide Temperature Range
- Low Power Consumption

### Product Features

- Display Color: **White**
- Dot Matrix: **128×64**
- Driver IC: **SSD1306**
- Interface: **IIC**
- Wide range of operating temperature: **-30°–70° C**
- Compatible RAK5005-O header interface

## Specifications

### Hardware

The hardware specification is categorized into four parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK1921 WisBlock WisIO Module.


#### Interfaces

The RAK1921 module is compatible with the RAK5005-O WisBoard baseboard. The RAK5005-O has reserved a dedicated I2C port with a 2.54 mm header, as shown in Figure 1 highlighted in a red rectangle, in which the RAK1921 can be attached to. 

<rk-img
  src="/assets/images/wisblock/rak1921/datasheet/interface.png"
  width="50%"
  caption="I2C pin header in the RAK5005-O"
/>



:::tip 📝 NOTE:
Be careful in selecting the baseboard, and make sure that RAK5005-O is chosen, because the RAK5005 is not compatible with the RAK1921 WisBlock WisIO module.
:::

#### Pin Definition


RAK1921 supports an I2C interface. For the pins available in the module, refer to Figure 1 above.  

<rk-img
  src="/assets/images/wisblock/rak1921/datasheet/pin-definition.png"
  width="50%"
  caption="RAK1921 Pin Definition"
/>


| **Name** | **Description** | 
| ---- | ---- | 
| VCC | Power Supply (2.4 –3.5V) | 
| GND | Grounding | 
| SCL | I2C Clock Signal | 
| SDA | I2C Data Signal | 


#### Electrical Characteristics

The absolute minimum and maximum ratings of the RAK1921 WisBlock WisIO Module are presenten in tabular representation. This should be followed accordingly to avoid future damages.

##### Absolute Maximum Ratings

| **Symbol** | **Description** | **Minimum** | **Nominal** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Vdd | Power Supply for the Module | –0.5 |  | 3.5 | V | 
| Temperature | Operation Temperature | –30 |  | 70 | ° C | 


##### Operating Conditions

| **Symbol** | **Description** | **Minimum** | **Nominal** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Vdd | Power Supply | 2.4 |  | 3.5 | V | 
| Lbr | Normal Mode Brightness | 80 | 100 |  | Cd/m² | 
|  | View Angle | 160 |  |  | degree (°) | 

#### Mechanical Characteristics


<rk-img
  src="/assets/images/wisblock/rak1921/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="Mechanical Dimensions"
/>




