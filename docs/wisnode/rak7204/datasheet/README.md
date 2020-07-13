---
tags: + datasheet
---

# RAK7200 LPWAN Tracker

<rk-img
  src="/assets/images/datasheet/rak7200/overview.jpg"
  width="50%"
  caption="RAK7200 LPWAN Tracker Overview"
/>

### Product Description

The **RAK7200 LPWAN tracker** device is the best available prototyping LoRa® sensor device with built-in 3.7V rechargeable Li-ion battery and GPS modem. The RAK7200 has built-in **S76G** which integrates the **ultra low power ARM Cortex-M3 STM32L073 microcontroller** and **SX1276 LoRa®** long range modem and on board **CXD5603GF GPS modem**.

It is a feature-packed tracker device for featured applications development. This device can be used as a quick prototyping tool for Internet-of-Things (IoT) and LoRaWAN® Integration. The RAK7200 is perfect for IoT Applications such as asset tracking, smart vehicle management and location-based services.

### Product Features

- **Supports sleep mode**, low power consumption.
- Built-in **digital output motion sensor LIS3DH**, which has dynamic user selectable full scales of ±2g/±4g/±8g/±18g and it is capable of measuring accelerations with output data rates from 1Hz to 5kHz.
- Built-in **nano pressure sensor LPS22HB** which functions as a digital output barometer.
- Built-in a **9-axis sensor** which include the triple-axis gyroscope and the triple-axis accelerometer and the triple-axis magnetometer.
- Supports latest LoRaWAN® 1.0.2 protocol stack and supports Activation by Personalization (ABP) or Over the Air Activation (OTAA) working mode.
- **On-board Antennas** for LoRa® modem and GPS.
- Supports Micro USB or built-in battery for power supply.
- **Supports global license-free frequency band**: EU433, CN470, EU868, US915, AS923, AU915, KR920 and IN865.

## Specifications

### Overview

#### Board Overview

The detailed dimensions of the **RAK7200 LPWAN Tracker** with the protective case is shown in the figure below:

<rk-img
  src="/assets/images/datasheet/rak7200/rak7200-dimensions.jpg"
  width="50%"
  caption="RAK7200 LPWAN Tracker Dimensions"
/>

#### Block Diagram

The block diagram below shows the internal architecture and external interfaces of the RAK7200 LPWAN Tracker.

<rk-img
  src="/assets/images/datasheet/rak7200/block-diagram.png"
  width="100%"
  caption="RAK7200 LPWAN Tracker Block Diagram"
/>

### Hardware

#### Interfaces

The RAK7200 device provides three external interfaces, as shown in the following figure.

<rk-img
  src="/assets/images/datasheet/rak7200/rak7200-interfaces.jpg"
  width="50%"
  caption="RAK7200 LPWAN Tracker Interfaces"
/>

- **Micro USB** - 5V DC power supply and UART communication.
- **Reset Button** - Used to reset the RAK7200 LPWAN Tracker. Press the Reset Button for more than 1 second, then the device will be reset.
- **BOOT0 Button -** When upgrading the firmware, you need to hold the BOOT0 Button, and then press the reset button to enter the boot mode. More information can be found here in the [RAK7200 LPWAN Tracker](/en-us/quick-start-guide/nodes/rak7200/#rak7200-lpwan-tracker) documentation.

##### LEDs

The RAK7200 LPWAN Tracker provides three LEDs for indicating the operating status, here are their functions:

<rk-img
  src="/assets/images/datasheet/rak7200/leds.jpg"
  width="50%"
  caption="RAK7200 LPWAN Tracker LEDs"
/>

- **LED1 Status** - Indicates that the Li-Ion Battery is Charging
- **LED2 Status** - Indicates that the Li-Ion Battery is Fully Charged.
- **LED3 Status** - Indicates that the device is sending data.

#### Pin Definition

<rk-img
  src="/assets/images/datasheet/rak7200/pinout-diagram.png"
  width="100%"
  caption="RAK7200 Pinout Diagram"
/>

| Pin | Name | Description    |
| --- | ---- | -------------- |
| 1   | TXD  | PA2_TXD_A      |
| 2   | RXD  | PA3_RXD_A      |
| 3   | SDA  | I²C_SDA        |
| 4   | SCL  | I²C_SCL        |
| 5   | NSS  | SPI_NSS_1 / NC |
| 6   | SCK  | SPI_SCK_1 / NC |
| 7   | MISO | SPI_MISO       |
| 8   | MOSI | SPI_MOSI       |

| Pin | Name  | Description  |
| --- | ----- | ------------ |
| 1   | 3V3   | 3.3 V Output |
| 2   | SWDIO | JTAG_SWDIO   |
| 3   | SWCLK | JTAG_SWCLK   |
| 4   | GND   | Ground       |
| 5   | GND   | Ground       |
| 6   | RX1   | UART1_RX     |
| 7   | TX1   | UART1_TX     |
| 8   | 3V3   | 3.3V Output  |

#### RF Requirements

##### Operating Frequencies

The device supports all LoRaWAN® frequency bands as the table below. Which is easy to configure while building the firmware from the source code.

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU433, EU868    |
| China         | CN470           |
| North America | US915           |
| Asia          | AS923           |
| Australia     | AU915           |
| Korea         | KR920           |
| Indian        | IN865           |

#### Antennas

The RAK7200 LPWAN Tracker has a built-in passive GPS Antenan and an iPex LoRa® Antenna. The performance and the parameters of the Antenna are as follows:

##### GPS Antenna

The GPS Antenna is shown in the following figure:

<rk-img
  src="/assets/images/datasheet/rak7200/gps-antenna.jpg"
  width="25%"
  caption="GPS Antenna"
/>

The table below lists the parameters of the built-in GPS Antenna.

| Items             | Parameter         |
| ----------------- | ----------------- |
| Outline Dimension | 15mm x 15mm x 4mm |
| Frequency         | 1575.42MHz        |
| Return Loss       | ≤ -10             |
| Polarization      | RHCP              |
| Gain @ Zenith     | ≥ -4dBi           |

S- Parameter of the GPS Antenna as pictured in the figure below:

<rk-img
  src="/assets/images/datasheet/rak7200/s-parameter.jpg"
  width="100%"
  caption="S-parameter of the GPS Antenna"
/>

##### LoRa® Antenna

The LoRa® Antenna is shown in the following Figure:

<rk-img
  src="/assets/images/datasheet/rak7200/lora-antenna.jpg"
  width="50%"
  caption="LoRa® Antenna"
/>

The table below lists the Efficiency / Gain of the built in LoRa® Antenna

| Freq       | 863MHz | 928MHz |
| ---------- | ------ | ------ |
| EFF        | 37.40% | 40.40% |
| Gain (dBi) | 0.23   | 1.25   |

LoRa® Antenna return loss is also shown in the figure below:

<rk-img
  src="/assets/images/datasheet/rak7200/loss-lora-antenna.jpg"
  width="100%"
  caption="Return Loss of the LoRa® Antenna"
/>

#### Electrical Characteristics

##### Working Mode

| Mode        | Condition | Power Consumption |
| ----------- | --------- | ----------------- |
| Sleep Mode  |           | 26 µA             |
| Normal Mode | Tx @20dB  | 124 mA            |
|             | Tx @17dB  | 108 mA            |
|             | Tx @13dB  | 89 mA             |
|             | Tx @10dB  | 79 mA             |
|             | Tx @7dB   | 69 mA             |
|             | Rx        | 44 mA             |

##### Power Consumption

The RAK7200 LPWAN Tracker has built-in rechargeable 3.7V Li-ion battery which can be charged via Micro USB, the built-in battery is shown in the following figure.

<rk-img
  src="/assets/images/datasheet/rak7200/built-in-battery.jpg"
  width="50%"
  caption="Built-in Battery in RAK7200 LPWAN Tracker"
/>

#### Environmental Requirements

The table below lists the operation and storage temperature Requirements.

| Parameter             | Min.   | Typical | Max.   |
| --------------------- | ------ | ------- | ------ |
| Operation Temp. Range | -10 °C | +25 °C  | +60 °C |
| Extended Temp. Range  | -10 °C |         | +80 °C |

#### Schematic Diagram

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus dolor at arcu pulvinar, vitae accumsan risus viverra. Mauris feugiat congue gravida. Curabitur ornare vulputate neque, vitae euismod urna varius tempor. Duis facilisis nulla purus, sed pharetra felis interdum a. In lacus arcu, commodo ut viverra eu, mollis eget massa. Pellentesque suscipit mi ac justo luctus viverra vitae ut ligula. Sed feugiat vitae est non convallis. Praesent quis laoreet sapien, sit amet mattis nisl.

### Software

| Model   | Version   | Source                                                                                                  |
| ------- | --------- | ------------------------------------------------------------------------------------------------------- |
| RAK7200 | V3.X.0.13 | [Download](https://downloads.rakwireless.com/LoRa/RAK7200-Tracker/Firmware/RAK7200_Latest_Firmware.zip) |

## Models / Bundles

### Ordering Information

| Part Number | Package                         | Description                        |
| ----------- | ------------------------------- | ---------------------------------- |
| RAK7200-03  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, EU868         |
| RAK7200-04  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, US915 / AU915 |
| RAK7200-05  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, KR920         |
| RAK7200-06  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, AS923         |
| RAK7200-07  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, IN865         |
