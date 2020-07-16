## Pin Definition

<rk-img
  src="/assets/images/datasheet/rak2287-pi-hat/2.pin-definition.png"
  width="100%"
  caption="RAK2287 Pi Hat Pinout Diagram"
/>

| **Type** | **Description** | 
| ---- | ---- | 
| IO | Bidirectional | 
| DI | Digital input | 
| DO | Digital output | 
| OC | Open collector | 
| OD | Open drain | 
| PI | Power input | 
| PO | Power output | 
| NC | No Connection | 


| **Pin Number** | **Raspberry Pi 40-Pin Connector** | **RAK2287 Pi Hat Pin** | **Type** | **Remarks** | 
| ---- | ---- | ---- | ---- | ---- | 
| 1 | 3V3 | NC | - | No Connection | 
| 2 | 5V | 5V | PI | 5V Input | 
| 3 | GPIO2(SDA1) | NC | - | No Connection | 
| 4 | 5V | 5V | PI | 5V Input | 
| 5 | GPIO3(SCL1) | NC | - | No Connection | 
| 6 | GND | GND | - | Ground | 
| 7 | GPIO4(GPIO_GCLK) | NC | - | No Connection | 
| 8 | GPIO14(TXD0) | UART_RXD_ZOE-M8Q | DI | Connect RAK2287 built in GPS Module (ZOE-M8Q)’s UART_RXD | 
| 9 | GND | GND | - | Ground | 
| 10 | GPIO15(RXD0) | UART_TXD_ZOE-M8Q | DO | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s UART_TXD | 
| 11 | GPIO17(GPIO_GEN0) | RESET_RAK2287 | DI | Connect to SX1302’s RESET PIN, SX1302 reset input, Active high, ≥100ns for SX1302 reset | 
| 12 | GPIO18(GPIO_GEN1) | NC | - | No Connection | 
| 13 | GPIO27(GPIO_GEN2) | NC | - | No Connection | 
| 14 | GND | GND | - | Ground | 
| 15 | GPIO22(GPIO_GEN3) | NC | - | No Connection | 
| 16 | GPIO23(GPIO_GEN4) | NC | - | No Connection | 
| 17 | 3V3 | NC | - | No Connection | 
| 18 | GPIO24(GPIO_GEN5) | NC | - | No Connection | 
| 19 | GPIO10(SPI_MOSI) | SPI_MOSI | DI | Host SPI MOSI | 
| 20 | GND | GND | - | Ground | 
| 21 | GPIO9(SPI_MISO) | SPI_MISO | DO | Host SPI MISO | 
| 22 | GPIO25(GPIO_GEN6) | RESET_GPS_ZOE-M8Q | DI | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s <br> RESET, GPS module ZOE-M8Q reset inputs, Active low | 
| 23 | GPIO11(SPI_CLK) | SPI_CLK | DI | Host SPI CLK | 
| 24 | GPIO8(SPI_CE0_N) | SPI_CE | DI | Host SPI CS | 
| 25 | GND | GND | - | Ground | 
| 26 | GPIO7(SPI_CE1_N) | GPIO(6)_SX1302 | IO | Connect to SX1302’s GPIO[6] | 
| 27 | ID_SD | NC | - | No Connection | 
| 28 | ID_SC | NC | - | No Connection | 
| 29 | GPIO5 | NC | - | No Connection | 
| 30 | GND | GND | - | Ground | 
| 31 | GPIO6 | NC | - | No Connection | 
| 32 | GPIO12 | STANDBY_GPS_ZOE-M8Q | DI | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s <br> STANDBY, GPS module ZOE-M8Q external interrupt input, Active  low | 
| 33 | GPIO13 | NC | - | No Connection | 
| 34 | GND | GND | - | Ground | 
| 35 | GPIO19 | NC | - | No Connection | 
| 36 | GPIO16 | NC | - | No Connection | 
| 37 | GPIO26 | NC | - | No Connection | 
| 38 | GPIO20 | NC | - | No Connection | 
| 39 | GND | GND | - | Ground | 
| 40 | GPIO21 | NC | - | No Connection | 

