---
tags: + datasheet
sidebar: auto
sidebarDepth: 3
displayAllHeaders: true
prev: /wisgate/rak1921/overview/
---

# RAK1921 OLED Display Module 

# Overview

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

## Hardware

### Interfaces

The RAK1921 module is compatible with the RAK5005-O WisBoard baseboard. The RAK5005-O has reserved a dedicated I2C port with a 2.54 mm header, as shown in Figure 1 highlighted in a red rectangle, in which the RAK1921 can be attached to. 

<rk-img
  src="/assets/images/wisblock/rak1921/datasheet/interface.png"
  width="50%"
  caption="I2C pin header in the RAK5005-O"
/>



:::tip 📝 NOTE:
Be careful in selecting the baseboard, and make sure that RAK5005-O is chosen, because the RAK5005 is not compatible with the RAK1921 OLED display module.
:::

### Pin Definition


RAK1921 supports a I2C interface. Refer to figure 1 for the pins available in the module.  

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


### Electrical Characteristics

This section shows the absolute minimum and maximum ratings of the RAK1921 OLED Display Module in tabular representation.

### Absolute Maximum Ratings

| **Symbol** | **Description** | **Minimum** | **Nominal** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Vdd | Power Supply for the Module | –0.5 |  | 3.5 | V | 
| Temperature | Operation Temperature | –30 |  | 70 | ° C | 


### Operating Conditions

| **Symbol** | **Description** | **Minimum** | **Nominal** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Vdd | Power Supply | 2.4 |  | 3.5 | V | 
| Lbr | Normal Mode Brightness | 80 | 100 |  | Cd/m² | 
|  | View Angle | 160 |  |  | degree (°) | 

## Mechanical Characteristics


Figure 3 below shows the RAK1921 physical dimensions.

<rk-img
  src="/assets/images/wisblock/rak1921/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="Mechanical Dimensions"
/>




