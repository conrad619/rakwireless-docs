---
tags:
  - datasheet
  - wisblock
prev: /Product-Categories/WisBlock/RAK5005-O/Overview/
next: false
---

# RAK5005-O WisBase Board Datasheet

## WisBlock Overview

**WisBlock modules** are part of a series of stackable boards built by RAKWireless for the IoT industry. WisBlock modules support dozens type of CPUs, sensors, and interface circuit boards. This concept allows customers to build their own electronic solutions very quickly, using building blocks to materialize their new ideas. Also, through high-speed connectors and easily attachable interconnections, customers will be able to composite reliable industrial products.

WisBlock series are divided into four modules: **WisBase**, **WisDuo**, **WisSensor**, and **WisIO** modules.

**RAK5005-O** module falls in the category of WisBase module. It is the **motherboard of WisBlock** that allow to attach a CPU, sensor, and IO modules through the standardized expansion connectors. These connectors provide a data bus interconnection between the modules attached to the baseboard. Also, the WisBase module integrates the power supply circuitry for battery charging, USB ports, indicator LEDs, buttons, and extended IO interfaces.

WisDuo module is the core computing and wireless connectivity unit within the WisBlock series. It integrates an MCU, a LoRa, a BLE, and other wireless transceiver modules in a single package. The data collected by sensors are processed by the MCU and sent to the cloud through LoRa wireless links. The BLE interface can also be used for short-range communication and indoor positioning function.

The WisSensor module integrates **MEMS sensors** of different types. Each WisBase base board can support up to four WisSensor modules. Customers can combine different types of sensors for their specific solutions. Sensors on WisSensor are designed for low power consumption to extend battery life.

WisIO module adds more flexibility to customers’ solutions. It expands various application interfaces, such as industrial sensor interface, display interface, industrial communication protocol extension, buttons, and LED indicators, which can be quickly implemented with a WisIO module.

If the above is not enough to cover all the customers’ IoT requirements, WisBlock supports open-source hardware architecture. Therefore, users can also use the standard connectors of WisBlock to develop their specific function modules. Basing on the standard of WisBlock, customers can quickly develop their own products to meet the specific needs in different industries.

WisBlock series boards are not only a good choice for functional prototyping during the development and verification stages, but also allows the customers to create a reliable and stable industrial level of products for mass production.

WisBlock uses a compact and stackable hardware design, which integrates various computing, connectivity, and sensor circuits within a size of 60*30mm. The compact size makes it easy for users to build in various customized housings to achieve complete products. RAK also has a series of housings for WisBlock modules, which can meet the requirements of various protection levels.

### Applications

- Wireless Sensor Network
- Environmental monitoring 
- Wireless data transmission 
- Data acquisition in Industrial environment 
- Location and tracking of personnel or moving objects
- Wired interface converted to wireless network

### Main Features

- Stackable building block design, which enables modular function realization and expansion
- With high-speed interconnection connectors in the WisBase board to ensure the signal integrity
- Supports multiple types of low power MCUs
- Supports multiple type of sensors. A single board can support a combination of up to four different type of sensors
- Supports interface for additional extensions
- Supports low power battery power supply
- Supports lithium battery charging
- Supports solar charging
- Fulfills Industrial level design
- Compact size, the minimum size is: 60 x 30 mm

### Typical Application

WisBlock module can be used for quickly building prototypes. It allows users to select and combine different functional modules, sensors to implement a customized products in a very short period of time.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/1.wisblock-diagram.png"
  width="100%"
  caption="WisBlock Ecosystem"
/>


WisBlock series modules are not only for the rapid implementation of engineering prototypes, but it is also designed for massive production-ready applications. The modules can be used together with RAK industrial protective housing to create products ready for industrial environments. Under the unified management of WisDM, a complete end-to-end IoT solution is formed by aggregating data of wireless nodes through the RAK industrial gateways.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/2.wisblock-applications.png"
  width="100%"
  caption="WisBlock Applications"
/>


### WisBlock Architecture

WisBlock is designed for modularity, in the Figure 3, the whole ecosystem is depicted. The objective of the architecture is to allow the customers to combine different modules to create their own specific solution. A roadmap about the availability of the modules is also shown.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/3.wisblock-architecture.png"
  width="100%"
  caption="WisBlock Architecture"s
/>


## Specifications

### Overview


The RAK5005-O baseboard,as shown in Figures 4 and 5, has one slot reserved for WisDuo module, four slots for WisSensor modules and one slot for WisIO module. Also, there are also **2.54 mm pitch connectors** for extension interface, such as **I2C**, **UART**, and **GPIO pins**.


<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/4.top-view-interfaces.png"
  width="100%"
  caption="Top view of the board with interfaces"
/>

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/5.bottom-view-interfaces.png"
  width="100%"
  caption="Bottom view of the board with interfaces"
/>


For convenience, there is a USB connector for debugging, it is connected directly to MCU’s USB port (if supported). The customer can access the internal MCU by connecting to a computer’s USB port directly. This USB connector is also used as a battery charging port.

Each module has method designed to connect and fasten the module easily. These connectors are **high-speed board to board connector**, they provide signal integrity for each data bus. A set of screws are used for attaching the module under the environment with vibrations.

To avoid electromagnetic interference and heating interference, the sensor connectors on the WisBase are designed to be installed on both sides of the PCB. As shown in figures 4 and 5, a sensor module can be attached either on the top layer or the bottom layer of the WisBase board.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/6.bottom-view.png"
  width="75%"
  caption="Bottom view of the board with interfaces"
/>

For example, it is recommended to attach a temperature sensor outside of the base board, as shown in the Figure 7. It allows to get more accurate measurements, since temperature sensor located in the top layer of the base board could be interfered by the heating introduced by other modules.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/7.temperature-sensor-out.png"
  width="75%"
  caption="Out of the board Temperature Sensor"
/>

#### Block Diagram

The block diagram is shown in Figure 8 that shows the internal architecture and external interfaces of the RAK5005-O board.


<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/8.block-diagram.png"
  width="100%"
  caption="RAK5005-O WisBase Block Diagram"
/>



##### Data Bus of RAK5005-O

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/9.bus-data.png"
  width="100%"
  caption="RAK5005-O WisBase Data Bus"
/>

The MCU module exposes the I2C, UART, and SPI data bus to the sensor modules. Through these buses, the CPU can retrieve data from the sensor and also control the sensors. In addition, USB, GPIO, and ADC ports are also connected to the IO module, which allows the customer to access all of the MCU interfaces on the IO board.

Some type of MCU has fewer IO pins. In such cases, not all the pins of the data bus are connected. For example, only I2C and UART are connected. Some MCU’ IO has an alternate function. You can modify its function by software or rework the hardware to redefine the function of IO. Refer to the datasheet of WisDuo to get the detail.


##### Power Supply Diagram of RAK5005-O

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/10.power-supply.png"
  width="100%"
  caption="Power Supply Block Diagram"
/>

The RAK5005-O is designed to be powered by a battery and provides the charger circuitry for a **lithium battery**. The charger circuitry can be connected to a wall outlet charger through the micro USB connector, or through the specific connector for the solar panel.

A low quiescent current LDO is used for generating **3.3V**, the 3.3V power supply drives MCU module (WisDuo) and IO module (WisIO) directly. The max current supported by the 3.3V LDO on RAK5005-O is **750mA**, it can drive MCU, LoRa, and MEMS sensor.

The VDD is generated by the MCU module to drive sensor and IO modules. The MCUs are usually powered by the 3.3V, and can provide different levels of voltage: **3.3V**, **2.5V**, and **1.8V** to their IO pins through regulators in the WisDue board. 

The 3V3_S is another 3.3V power supply. It can be controlled by the MCU in order to disconnect the power sensors during an idle period to save power. 3V3_S is controlled by the IO2 pin on the WisDueo board. 

- Set **IO2=1**, 3V3_S is on.
- Set **IO2=0**, 3V3_S is off.

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and its corresponding fuctions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK5005-O WisBase Board.

#### Interfaces

RAK5005-O provides the following **interfaces**, **headers**, **jumpers**, **buttons** and **connectors**:

- 1 connector for WisDuo
- 1 connector for WisIO
- 4 connectors for WisSensor
- Micro USB connector
- 3 sets of 4-pin 2.54mm headers (UART, GPIOS, I2C, power etc.)
- 2-pin battery interface
- 2-pin solar panel interface
- LEDs
- Reset button

##### Micro-B USB port

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/11.micro-usb.png"
  width="25%"
  caption="Micro-B USB connector's pinout"
/>

The Micro-B USB connector is compliant with the USB2.0 specification. This USB interface is connected to the **BG96 AT command port**, **GNSS port**, and **Debug port**. It is also used as a charging input port for the battery. The Micro-B USB pin definition is shown below:

| **Pin** | **Description** | 
| ---- | ---- | 
| 1 | USB_VBUS (+5V) | 
| 2 | USB_DM | 
| 3 | USB_DP | 
| 4 | NC | 
| 5 | GND | 


##### J10, J11, J12 headers

On the WisBlock, there are three pieces of **2.54 mm pitch header** for IO extension. Some data bus and signal from the MCU module are also connected to these headers, such as I2C, UART, ADC, etc.

##### J10 pin definition

| **Pin** | **Description** | 
| ---- | ---- | 
| 1 | - BOOT0 from ST MCU. <br>- The ST MCU will enter boot mode when connector BOOT0 to VDD during reset. | 
| 2 | GND | 
| 3 | UART1 TX | 
| 4 | UART1 RX | 


##### J11 pin definition

| **Pin** | **Description** | 
| ---- | ---- | 
| 1 | AIN, ADC input signal | 
| 2 | - IO1<br>- General purpose IO | 
| 3 | - IO2<br>- Used for 3V3_S enable | 
| 4 | VBAT | 


##### J12 pin definition

| **Pin** | **Description** | 
| ---- | ---- | 
| 1 | VDD | 
| 2 | GND | 
| 3 | I2C clock | 
| 4 | I2C data | 


##### Battery Connector

The pin definition of a Li-ion battery connector is shown in the table below.

| **Pin** | **Pin Name** | **Description** | 
| ---- | ---- | ---- | 
| 1 | GND | GND | 
| 2 | VBAT | Positive of the battery | 


:::tip 📝 NOTE
The voltage of the battery **must not exceed 4.3V**.
:::

##### Solar Panel Connector

The pin definition of the solar panel connector is shown in the table below.

| **Pin** | **Pin Name** | **Description** | 
| ---- | ---- | ---- | 
| 1 | C0NN_5V | Positive of solar panel | 
| 2 | GND | GND | 

:::tip 📝 NOTE
The output of the solar panel **must not exceed 5.5V**, otherwise, it may cause permanent damage to the board.
:::

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- **Red LED** - connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- **Green LED** - connected to the MCU module, controlled by MCU defined by the user.
- **Blue LED** - connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button is connected to the MCU module. When pushed, it resets the MCU.


#### Pin Definition

##### Connector for WisDuo

The **MCU module connector** is a 40-pin board to board connector, it is a high-speed and high-density connector, with an easy attaching mechanism.


<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/12.mcu-module connector.png"
  width="75%"
  caption="MCU module connector"
/>

The table below shows the pinout of the MCU module connector:

| **Function Name of WisBase** | **Pin Number** | **Pin Number** | **Function Name of WisBase** | 
| ---- | ---- | ---- | ---- | 
| VBAT | 1 | 2 | VBAT | 
| GND | 3 | 4 | GND | 
| 3V3 | 5 | 6 | 3V3 | 
| USB+ | 7 | 8 | USB– | 
| VBUS | 9 | 10 | SW1 | 
| TXD0 | 11 | 12 | RXD0 | 
| RESET | 13 | 14 | LED1 | 
| LED2 | 15 | 16 | LED3 | 
| VDD | 17 | 18 | VDD | 
| I2C1_SDA | 19 | 20 | I2C1_SCL | 
| AIN0 | 21 | 22 | AIN1 | 
| BOOT0 | 23 | 24 | NV | 
| SPI_CS | 25 | 26 | SPI_CLK | 
| SPI_MIS0 | 27 | 28 | SPI_MOSI | 
| IO1 | 29 | 30 | IO2 | 
| IO3 | 31 | 32 | IO4 | 
| TXD1 | 33 | 34 | RXD1 | 
| I2C2_SDA | 35 | 36 | I2C2_SCL | 
| IO5 | 37 | 38 | IO6 | 
| GND | 39 | 40 | GND | 

<br>

As for the following table, it shows the definition of each pin of WisDuo module connector:

| **Pin Number** | **Pin Name** | **Type** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | VBAT | S | Power supply from battery | 
| 2 | VBAT | S | Power supply from battery | 
| 3 | GND | S | Ground | 
| 4 | GND | S | Ground | 
| 5 | 3V3 | S | 3.3V power supply | 
| 6 | 3V3 | S | 3.3V power supply | 
| 7 | USB+ | I/O | USB D+ | 
| 8 | USB– | I/O | USB D– | 
| 9 | VBUS | S | VBUS for USB | 
| 10 | SW1 | I/O | Switch signal for customer's control | 
| 11 | TXD0 | I/O | MCU UART0 TX signal | 
| 12 | RXD0 | I/O | MCU UART0 RX signal | 
| 13 | RESET | I | Connected to the reset switch, for MCU reset | 
| 14 | LED1 | I/O | LED for battery charging indication | 
| 15 | LED2 | I/O | LED for custom usage | 
| 16 | LED3 | I/O | LED for custom usage | 
| 17 | VDD | S | Generated by MCU module for power sensor board if the MCU IO level is not 3.3V | 
| 18 | VDD | S | Generated by MCU module for power sensor board if the MCU IO level is not 3.3V | 
| 19 | I2C1_SDA | I/O | The first set of I2C data signal | 
| 20 | I2C1_SCL | I/O | The first set of I2C clock signal | 
| 21 | AIN0 | A | Analog input for ADC | 
| 22 | AIN1 | A | Analog input for ADC | 
| 23 | BOOT0 | I | For ST MCU, set high when reset.<br>The MCU will allow to enter boot mode. | 
| 24 | NC | NC | Not connected | 
| 25 | SPI_CS | I/O | SPI chip select signal | 
| 26 | SPI_CLK | I/O | SPI clock | 
| 27 | SPI_MISO | I/O | SPI MISO signal | 
| 28 | SPI_MOSI | I/O | SPI MOSI signal | 
| 29 | IO1 | I/O | General purpose IO | 
| 30 | IO2 | I/O | Used for 3V3_S enanle | 
| 31 | IO3 | I/O | General purpose IO | 
| 32 | IO4 | I/O | General purpose IO | 
| 33 | TXD1 | I/O | MCU UART1 RX signal | 
| 34 | RXD1 | I/O | MCU UART1 RX signal | 
| 35 | I2C2_SDA | I/O | The second set of I2C data signal | 
| 36 | I2C2_SCL | I/O | The second set of I2C data signal | 
| 37 | IO5 | I/O | General purpose IO | 
| 38 | IO6 | I/O | General purpose IO | 
| 39 | GND | S | Ground | 
| 40 | GND | S | Ground | 


##### Connectors for WisSensor

The sensor module connector is a a **24-pin board to board connector**.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/13.wissensor-module-connector.png"
  width="75%"
  caption="WisSensor module connector"
/>


:::tip 📝 NOTE
There are four connectors reserved for the sensor modules on the RAK5005-O: **connector A, B, C** and **D**. The pin definition of **connector A** is different than the definition of the **connector B-D**.
:::

The pinout definition of the WisSensor module connector on WisBase varies according to its connector, **from A to D**.

| **Connector D** | **Connector C** | **Connector B** | **Connector A** | **Pin Number** | **Pin Number** | **Connector A** | **Connector B** | **Connector C** | **Connector D** | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| NC | NC | NC | TXD1 | 1 | 2 | GND | GND | GND | GND | 
| SPI_CS | SPI_CS | SPI_CS | SPI_CS | 3 | 4 | SPI_CLK | SPI_CLK | SPI_CLK | SPI_CLK | 
| SPI_MISO | SPI_MISO | SPI_MISO | SPI_MISO | 5 | 6 | SPI_MOSI | SPI_MOSI | SPI_MOSI | SPI_MOSI | 
| I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | 7 | 8 | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | 
| VDD | VDD | VDD | VDD | 9 | 10 | IO2 | IO1 | IO4 | IO6 | 
| 3V3_S | 3V3_S | 3V3_S | 3V3_S | 11 | 12 | I01 | IO2 | IO3 | IO5 | 
| NC | NC | NC | NC | 13 | 14 | 3V3_S | 3V3_S | 3V3_S | 3V3_S | 
| NC | NC | NC | NC | 15 | 16 | VDD | VDD | VDD | VDD | 
| NC | NC | NC | NC | 17 | 18 | NC | NC | NC | NC | 
| NC | NC | NC | NC | 19 | 20 | NC | NC | NC | NC | 
| NC | NC | NC | NC | 21 | 22 | NC | NC | NC | NC | 
| GND | GND | GND | GND | 23 | 24 | RXD1 | NC | NC | NC | 

<br>

As for the following table, it shows the pin name and description of each pin in the WisSensor module connector.

| **Pin Number** | **Connector A** | **Connector B** | **Connector C** | **Connector D** | **Type** | **Description** | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| 1 | TXD1 | NC | NC | NC | NC | - Not connected<br>- UART TX signal on connector A | 
| 2 | GND | GND | GND | GND | S | Ground | 
| 3 | SPI_CS | SPI_CS | SPI_CS | SPI_CS | I/O | SPI chip select signal | 
| 4 | SPI_CLK | SPI_CLK | SPI_CLK | SPI_CLK | I/O | SPI clock | 
| 5 | SPI_MISO | SPI_MISO | SPI_MISO | SPI_MISO | I/O | SPI MISO signal | 
| 6 | SPI_MOSI | SPI_MOSI | SPI_MOSI | SPI_MOSI | I/O | SPI MOSI signal | 
| 7 | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | I/O | I2C clock signal | 
| 8 | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | I/O | I2C data signal | 
| 9 | VDD | VDD | VDD | VDD | S | - Generated by CPU module. <br>- Used for power sensor board if MCU IO level is not 3.3V | 
| 10 | IO2 | IO1 | IO4 | IO6 | I/O | - General purpose IO.<br>- IO2 control the power switch of 3V3_S. When 3V3_s function is used, Io2 can not be euses as interrupt of the sensor. | 
| 11 | 3V3_S | 3V3_S | 3V3_S | 3V3_S | S | - 3.3V power supply<br>- Can be shutdown by the CPU module. | 
| 12 | IO1 | IO2 | IO3 | IO5 | I/O | - General purpose IO<br>- IO controls the power switch of 3V3_S. When 3V3_S function is used, IO2 cannot be used as interrupt of the sensor. | 
| 13 | NC | NC | NC | NC | NC | Not connect | 
| 14 | 3V3_S | 3V3_S | 3V3_S | 3V3_S | S | - 3.3V power supply<br>- Can be shutdown by CPU module | 
| 15 | NC | NC | NC | NC | NC | Not connect | 
| 16 | VDD | VDD | VDD | VDD | S | - Generates by CPU module<br>- Use for power sensore board if the MCU IO level is not 3.3V. | 
| 17 | NC | NC | NC | NC | NC | Not connect | 
| 18 | NC | NC | NC | NC | NC | Not connect | 
| 19 | NC | NC | NC | NC | NC | Not connect | 
| 20 | NC | NC | NC | NC | NC | Not connect | 
| 21 | NC | NC | NC | NC | NC | Not connect | 
| 22 | NC | NC | NC | NC | NC | Not connect | 
| 23 | GND | GND | GND | GND | S | Ground | 
| 24 | RXD1 | NC | NC | NC | NC | - Not connected.<br>- UART RX signal on connector A | 


##### Connector for WisIO

The WisIO module connector, as shown in figure 14, is a **40-pin board to board connector**.


<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/14.wisio-module-connector.png"
  width="75%"
  caption="WisIO module connector"
/>


The pinout definition of the WisIO module connector is shown in the table below. 

| **Function Name of WisBase** | **Pin Number** | **Pin Number** | **Function Name of WisBase** | 
| ---- | ---- | ---- | ---- | 
| VBAT | 1 | 2 | VBAT | 
| GND | 3 | 4 | GND | 
| 3V3 | 5 | 6 | 3V3_S | 
| USB+ | 7 | 8 | USB– | 
| VBUS | 9 | 10 | SW1 | 
| TXD0 | 11 | 12 | RXD0 | 
| RESET | 13 | 14 | LED1 | 
| LED2 | 15 | 16 | LED3 | 
| VDD | 17 | 18 | VDD | 
| I2C1_SDA | 19 | 20 | I2C1_SCL | 
| AIN0 | 21 | 22 | AIN1 | 
| NC | 23 | 24 | NC | 
| SPI_CS | 25 | 26 | SPI_CLK | 
| SPI_MISO | 27 | 28 | SPI_MOSI | 
| IO1 | 29 | 30 | IO2 | 
| IO3 | 31 | 32 | IO4 | 
| TXD1 | 33 | 34 | RXD1 | 
| I2C2_SDA | 35 | 36 | I2C2_SCL | 
| IO5 | 37 | 38 | IO6 | 
| GND | 39 | 40 | GND | 

<br>

As for the following table, it shows the pin name and description of the WisIO module connector.

| **Pin Number** | **Pin Name** | **Type** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | VBAT | S | Power supply from battery | 
| 2 | VBAT | S | Power supply from battery | 
| 3 | GND | S | Ground | 
| 4 | GND | S | Ground | 
| 5 | 3V3 | S | 3.3V power supply | 
| 6 | 3V3_S | S | 3.3V power supply. Can be shutdown by a CPU module. | 
| 7 | USB+ | I/O | USB D+ | 
| 8 | USB– | I/O | USB D– | 
| 9 | VBUS | S | 5V input for USB | 
| 10 | SW1 | I/O | Switch signal for custom used | 
| 11 | TXD0 | I/O | MCU UART0 TX signal | 
| 12 | RXD0 | I/O | MCU UART0 RX signal | 
| 13 | RESET | I | Connected to the reset switch, for MCU reset | 
| 14 | LED1 | I/O | LED for battery charge indicatior | 
| 15 | LED2 | I/O | LED for custom used | 
| 16 | LED3 | I/O | LED for custom used | 
| 17 | VDD | S | - Generated by CPU module<br>- Used for power sensor board if the MCU IO level is not 3.3V | 
| 18 | VDD | S | - Generated by CPU module<br>- Used for power sensor board if the MCU IO level is not 3.3V. | 
| 19 | I2C1_SDA | I/O | The first set of I2C data signal | 
| 20 | I2C1_SCL | I/O | The first set of I2C clock signal | 
| 21 | AIN0 | A | Analog input for ADC | 
| 22 | AIN1 | A | Analog input for ADC | 
| 23 | NC | NC | Not connect | 
| 24 | NC | NC | Not connect | 
| 25 | SPI_CS | I/O | SPI chip select signal | 
| 26 | SP_CLK | I/O | SPI clock | 
| 27 | SPI_MISO | I/O | SPI MISO signal | 
| 28 | SPI_MOSI | I/O | SPI MOSI signal | 
| 29 | IO1 | I/O | General purpose IO | 
| 30 | IO2 | I/O | Used for 3V3_S enable | 
| 31 | IO3 | I/O | General purpose IO | 
| 32 | IO4 | I/O | General purpose IO | 
| 33 | TXD1 | I/O | MCU UART1 TX signal | 
| 34 | RXD1 | I/O | MCU UART1 RX signal | 
| 35 | I2C2_SDA | I/O | The second set of I2C data signal | 
| 36 | I2C2_SCL | I/O | The second set of I2C clock signal | 
| 37 | IO5 | I/O | General purpose IO | 
| 38 | IO6 | I/O | General purpose IO | 
| 39 | GND | S | Ground | 
| 40 | GND | S | Ground | 

#### Electrical Characteristics

##### Absolute Maximum Ratings

Shown in the table below are the **Absolute Maximum Ratings** of the device. The stress ratings are the functional operation of the device. 

:::warning ⚠️WARNING
1.If the stress rating goes above what is listed may cause permanent damage to the device.
2.Under the listed conditions is not advised.
3.Exposure to maximum rating conditions may affect the device reliability.
:::

| **Ratings** | Maximum Value | Unit | 
| ---- | ---- | ---- | 
| Power Supply on the USB port (**Vbus**) | –0.3 to 5.5 | V | 
| Battery Voltage (**Vbat**) | –0.3 to 4.3 | V | 
| Solar Panel Voltage (**Vconn**) | –0.3 to 5.5 | V | 
| IOs of WisConnector | –0.3 to VDD+0.3 | V | 
| ESD | 2000 | V | 

:::tip 📝 NOTE
The RAK5005-O, as any electronic equipment, is sensitive to **electrostatic discharge (ESD)**. Improper handling can cause permanent damage to module.
:::

##### Current Consumption

The RAK5005-O designs for **low power IoT products** and the power supply use low grounding current regulator, when there is no module on RAK5005-O, the **leakage current is lower than 2µA**. With MCU and sensor on it, the sleep current is **lower than 10µA**. When the LoRa module is transmitting, the current may reach to **130mA**.

| **Conditions** | **Current** | **Unit** | 
| ---- | ---- | ---- | 
| Leakage current, without any module on RAK5005-O | 2 | µA | 
| Idle current, with MCU and sensor are in sleep mode | 10 | µA | 
| Working current, with LoRa module is transmitting | 130 | µA | 


##### Battery and Solar Panel Specification

The RAK5005-O WisBase board can be powered by a battery, connected to the **P1 connector**. The nominal operating voltage of the battery should be within the range showed in the following table.

| **Minimum** | **Typical** | **Maximum** | **Unit** | 
| ---- | ---- | ---- | ---- | 
| 3.3 | 3.7 | 4.3 | V | 

<br>

If a rechargeable battery is used, the USB connector is used as a charging port. The voltage and current fed to the battery through the port should not exceed to its charging limits, as shown in the table below.

| **Parameter** | **Value** | 
| ---- | ---- | 
| Charging Voltage | 4.5 – 5.5V | 
| Charging Current | 500 mA | 

<br>

A suitable Li-Ion battery should have the following parameters as shown in the table below:

| **Parameter** | **Value** | 
| ---- | ---- | 
| Standard Voltage | 3.7V | 
| Chargine VOltage | 4.2V | 
| Capacity | As required | 
| Discharge current | At least 500mA | 


:::tip 📝 NOTE
If a non-rechargeable battery is connected to the RAK5005-O, rework the hardware by removing the R17 on the bottom of RAK5005-O to disconnect the charger circuit. Otherwise, the USB port with try to charge the battery, and will damage the non-rechargeable battery, might damage the board, and is considered a fire or explode hazard.
:::


##### Solar Panel Connector

A 5V Solar panel can be connected to the board via the P2 connector to also serves the purpose of charging the battery.

#### Mechanical Characteristics

Figure 15 shows the detailed mechanical dimensions of RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/15.mechanical-dimensions.png"
  width="100%"
  caption="Mechanical Dimensions"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK5005-O:

| **Parameter** | **Minimum** | **Typical** | **Maximum** | 
| ---- | ---- | ---- | ---- | 
| Operational Temperature Range | –35º C | +25º C | +75º C | 
| Extended Temperature Range | –40º C | +25º C | +80º C | 
| Storage Temperature Range | –40º C | +25º C | +80º C | 

#### Schematic Diagram

The component schematics diagram of the RAK5005-Oare shown in figures 16 and 17 below:


<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/16.schematic1.png"
  width="100%"
  caption="RAK5005-O Schematic Diagram"
/>


<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/17.schematic2.png"
  width="100%"
  caption="RAK5005-O Schematic Diagram"
/>


## Module Supported

This section discusses the brief introduction about WisBlock module. It helps you to understand and choose the module you want. About the detail of each module, refer the reference manual of the respective module.

### WisBlock Module in Production

RAK5005-O supports different kind of modules, according to the function and its the position on the RAK5005-O. These modules are classified into three categories:

1. **WisDuo**: containis MCU and wireless link transceiver. 
2. **WisSensor**: integrates mems sensor 
3. **WisIO**: extends IO, power supply, and sensors.

The table below shows the WisDuo modules:

| **P/N** | **RAK module on it** | **Function** | **Chipset** | 
| ---- | ---- | ---- | ---- | 
| RAK4261 | RAK4260 | MCU+LoRa | MicroChip ATSAMR34J18B | 
| RAK4631 | RAK4630 | BLE+LoRa | Nordic nRF52840+SX1262 | 
| RAK4281 | RAK4280 | MCU+LoRa | ST STM32L476+SX1262 | 
| RAK3401 | RAK3400 | BLE | Nordic nRF52840 | 

<br>

The table below shows the WisSensor modules:

| **P/N** | **Function** | **Chipset** | 
| ---- | ---- | ---- | 
| RAK1901 | Temperature & Humidity Sensor | Sensirion SHTC3 | 
| RAK1902 | Pressure Sensor | ST LPS22HB | 
| RAK1903 | Ambient Light Sensor | TI OPT3001DNPR | 
| RAK1904 | 3-axis Sensor | ST LIS3DH | 
| RAK1905 | 9-axis Sensor | TDK ICM20948 | 
| RAK1906 | Environmental Sensor | BOSCH BME680 | 
| RAK1910 | GPS Sensor | U-BLOX MAX-7Q | 

<br>

The table shows the WisIO modules:

| P/N | Function | Chipset | 
| ---- | ---- | ---- | 
| RAK5801 | 4–20mA sensor interface |  | 
| RAK5802 | RS485 interface |  | 
| RAK5803 | 0–5V sensor interface |  | 
| RAK5804 | IO extension board |  | 
| RAK2305 | WiFi extension board | ESP32 | 
| RAK2705 | NFC reader board | ST CR95HF | 
| RAK5860 | NB-IoT | BG77 | 
| RAK5804 | IO extension board |  | 


### WisBlock: Function and Data Bus Supported

#### WisDuo Function and Data Bus

| RAK4202 Pin Definition | RAK4601 Pin Definition | RAK4261 Pin Definition | RAK4231 Pin Definition | RAK4201 Pin Definition | Function Name of WisBase | Pin Number | Pin Number | Function Name of WisBase | RAK4201 Pin Definition | RAK4231 Pin Definition | RAK4261 Pin Definition | RAK46011 Pin Definition | RAK4202 Pin Definition | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| NC | NC | NC | NC | NC | VBAT | 1 | 2 | VBAT | NC | NC | NC | NC | NC | 
| GND | GND | GND | GND | GND | GND | 3 | 4 | GND | GND | GND | GND | GND | GND | 
| 3V3 | 3V3 | 3V3 | 3V3 | 3V3 | 3V3 | 5 | 6 | 3V3 | 3V3 | 3V3 | 3V3 | 3V3 | 3V3 | 
| NC | NC | PA25_USB_P | NC | NC | USB+ | 7 | 8 | USB– | NC | NC | PA24_USB_N | NC | NC | 
| NC | NC | NC | NC | NC | VBUS | 9 | 10 | SW1 | NC | NC | NC | NC | NC | 
| UART1_TX1 | UART1_TX1 | UART1_TX1 | UART1_TX1 | UART1_TX1 | TXD0 | 11 | 12 | RXD0 | UART1_RX1 | UART1_RX1 | UART1_RX1 | UART1_RX1 | UART1_RX1 | 
| MCU_RST | MCU_RST | MCU_RST | MCU_RST | MCU_RST | RESET | 13 | 14 | LED1 | NC | NC | LED3/PA07 | NC | LED1/PA12 | 
| LED2/PB04 | NC | LED2/PA27 | NC | NC | LED2 | 15 | 16 | LED3 | NC | NC | AIN1/PA09 | NC | LED3/PA15 | 
| 3V3 | 3V3 | 3V3 | 3V3 | 3V3 | VDD | 17 | 18 | VDD | 3V3 | 3V3 | 3V3 | 3V3 | 3V3 | 
| I2C1_SDA/PB9 | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | 19 | 20 | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL/PB8 | 
| AIN0/PAO | NC | AIN0/UART1_DE | AIN0/UART1_DE | AIN0/UART1_DE | AIN0 | 21 | 22 | AIN1 | NC | NC | AIN1/PA09 | NC | AIN1/PA2 | 
| BOOT0 | NC | NC | NC | NC | BOOT0 | 23 | 24 | NC | NC | NC | NC | NC | NC | 
| NC | NC | PA | NC | NC | SPI_CS | 25 | 26 | SPI_CLK | SPI_CLK_1 | SPI_CLK_1 | PB23_SCK | NC | NC | 
| NC | NC | SPI_MISO_1 | SPI_MISO_1 | SPI_MISO_1 | SPI_MISO_1 | 27 | 28 | SPI_MOSI | SPI_MOSI_1 | SPI_MOSI_1 | PA23_MOSI | NC | NC | 
| 1PPS | IO1/RESERVED | IO1/PB22 | NC | IO1/UART0_DE | IO1 | 29 | 30 | IO2 | NC | NC | PA15 | IO2/RESERVED | STANDBY/PB2 | 
| IO3/PB3 | IO3/NFC1 | IO3/PA14 | NC | NC | IO3 | 31 | 32 | IO4 | NC | NC | NC | IO4/NFC2 | IO4/PB5 | 
| UART2_TX1/PB10 | USART2_TX1 | UART3_TX1 | UART0_TX1 | UART0_TX1 | TXD1 | 33 | 34 | RXD1 | UART0_RX _1 | UART0_RX_1 | UART_RX | UART2_RX | UART2_RX/PB11 | 
| NC | NC | NC | NC | NC | I2C2_SDA | 35 | 36 | I2C2_SCL | NC | NC | NC | NC | NC | 
| IO5/PB15 | NC | NC | NC | NC | IO5 | 37 | 38 | IO6 | NC | NC | NC | NC | IO6/PA8 | 
| GND | GND | GND | GND | GND | GND | 39 | 40 | GND | GND | GND | GND | GND | GND | 

<br>

#### WisSensor Funtion and Data Bus

| Type 4 | Type 3 | Type 2 | Type 1 | D | C | B | A | Pin Number | Pin Number | A | B | C | D | Type 1 | Type 2 | Type 3 | Type 4 | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| RXD | NC | NC | NC | NC | NC | NC | TXS1 | 1 | 2 | GND | GND | GND | GND | GND | GND | GND | GND | 
| NC | NC | NC | NC | SPI_CS | SPI_CS | SPI_CS | SPI_CS | 3 | 4 | SPI_CLK | SPI_CLK | SPI_CLK | SPI_CLK | NC | NC | NC | NC | 
| NC | NC | NC | NC | SPI_MISO | SPI_MISO | SPI_MISO | SPI_MISO | 5 | 6 | SPI_MOSI | SPI_MOSI | SPI_MOSI | SPI_MOSI | NC | NC | NC | NC | 
| NC | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | 7 | 8 | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA | NC | 
| NC | VDD | VDD | VDD | VDD | VDD | VDD | VDD | 9 | 10 | IO2 | IO1 | IO4 | IO6 | NC | NC | INT2 | RESET | 
| 3V3_S | NC | NCN | NC | 3V3_S | 3V3_S | 3V3_S | 3V3_S | 11 | 12 | IO1 | IO2 | IO3 | IO5 | NC | INT | INT1 | 1PPS | 
| 1PPS | INT1 | INT | NC | NC | NC | NC | NC | 13 | 14 | 3V3_S | 3V3_S | 3V3_S | 3V3_S | NC | NC | NC | 3V3_S | 
| RESET | INT2 | NC | NC | NC | NC | NC | NC | 15 | 16 | VDD | VDD | VDD | VDD | VDD | VDD | VDD | NC | 
| NC | I2C1_SDA | I2C1_SDA | I2C1_SDA | NC | NC | NC | NC | 17 | 18 | NC | NC | NC | NC | I2C1_SCL | I2C1_SCL | I2C1_SCL | NC | 
| NC | NC | NC | NC | NC | NC | NC | NC | 19 | 20 | NC | NC | NC | NC | NC | NC | NC | NC | 
| NC | NC | NC | NC | NC | NC | NC | NC | 21 | 22 | NC | NC | NC | NC | NC | NC | NC | NC | 
| GND | GND | GND | GND | GND | GND | GND | GND | 23 | 24 | RXD1 | NC | NC | NC | NC | NC | NC | TXD | 

:::tip 📝 NOTE
Sensor Module Pinout Definition
- Type 1
- Type 2
- Type 3
- Type 4
::: 

<br>

The WisSensor data bus is divided into four type. The relationship is shown in the table below:

| **Sensor Type** | **WisSensor** | **Description** | 
| ---- | ---- | ---- | 
| Type 1 | RAK1901 | Temperature & Humidity Sensor | 
|  | RAL1906 | Environmental Sensor | 
| Type 2 | RAK1902 | Pressure Sensor | 
|  | RAK1903 | Ambient Light Sensor | 
|  | RAK1905 | 9-axis Sensor | 
| Type 3 | RAK1904 | 3-axis Sensor | 
| Type 4 | RAK1910 | GPS Sensor | 

<br>

#### WisIO Function and Data Bus

| RAK2305 | RAK2705 | RAK5802 | RAK5801 | Function Name of WisBase | Pin Number | Pin Number | Function Name of WisBase | RAK5801 | RAK5802 | RAK2705 | RAK2305 | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| ESP32 | NFC | RS485 | 4-20mA |  |  |  |  | 4-20mA | RS485 | NFC | ESP32 | 
| VBAT | VBAT | VBAT | VBAT | VBAT | 1 | 2 | VBAT | VBAT | VBAT | VBAT | VBAT | 
| GND | GND | GND | GND | GND | 3 | 4 | GND | GND | GND | GND | GND | 
| NC | NC | NC | NC | 3V3 | 5 | 6 | 3V3_S | 3V3 | 3V3 | NC | NC | 
| NC | NC | NC | NC | USB+ | 7 | 8 | USB– | NC | NC | NC | NC | 
| NC | NC | NC | NC | VBUS | 9 | 10 | SW1 | NC | NC | NC | NC | 
| TXD0 | NC | NC | NC | TXD0 | 11 | 12 | RXD0 | NC | NC | NC | RXD0 | 
| NC | NC | NC | NC | RESET | 13 | 14 | LED1 | NC | NC | NC | LED1 | 
| LED2 | NC | NC | NC | LED2 | 15 | 16 | LED3 | NC | NC | NC | NC | 
| NC | NC | NC | NC | VDD | 17 | 18 | VDD | NC | NC | NC | NC | 
| I2C1_SDA | NC | I2C1_SDA | I2C1_SDA | I2C1_SDA | 19 | 20 | I2C1_SCL | I2C1_SCL | I2C1_SCL | NC | I2C1_SCL | 
| NC | NC | AIN0 | AIN0 | AIN0 | 21 | 22 | AIN1 | AIN1 | NC | NC | NC | 
| NC | NC | NC | NC | NC | 23 | 24 | NC | NC | NC | NC | NC | 
| SPI_CS | SPI_CS* | NC | NC | SPI_CS | 25 | 26 | SPI_CLK | NC | NC | SPI_CLK* | SPI_CLK | 
| SPI_MISO | SPI_MISO* | NC | NC | SPI_MISO | 27 | 28 | SPI_MOSI | NC | NC | SPI_MOSI* | SPI_MOSI | 
| NC | NC | NC | NC | IO1 | 29 | 30 | IO2 | NC | NC | NC | IO2 | 
| NC | SPI_CS | NC | NC | IO3 | 31 | 32 | IO4 | NC | NC | SPI_CLK | NC | 
| RXD1 | RXD1 | RXD1 | NC | TXD1 | 33 | 34 | RXD1 | NC | TXD1 | TXD1 | TXD1 | 
| NC | NC | NC | NC | I2C2_SDA | 35 | 36 | I2C2_SCL | NC | NC | NC | NC | 
| NC | SPI_MISO | NC | NC | IO5 | 37 | 38 | IO6 | NC | NC | SPI_MOSI | NC | 
| GND | GND | GND | GND | GND | 39 | 40 | GND | GND | GND | GND | GND | 

:::tip 📝 NOTE
*Can be supported by rework hardware.
::: 
