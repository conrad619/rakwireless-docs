(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{489:function(t,e,v){"use strict";v.r(e);var a=v(28),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"rak4260-breakout-module-datasheet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rak4260-breakout-module-datasheet"}},[t._v("#")]),t._v(" RAK4260 Breakout Module Datasheet")]),t._v(" "),v("rk-img",{attrs:{src:"/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260-breakout.jpg",width:"50%",caption:"RAK4260 WisDuo LPWAN Breakout Module"}}),t._v(" "),v("h2",{attrs:{id:"overview"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),v("h3",{attrs:{id:"description"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),v("p",[t._v("The "),v("strong",[t._v("RAK4260 Breakout Module")]),t._v(" is specifically designed to allow easy excess to the pins on the module in order to simplify development and testing. The breakout board utilized is of an "),v("strong",[t._v("Xbee form factor")]),t._v(" and its main purpose is to allow the RAK4260 stamp module form factor pinout to be transferred to 2.54 mm headers. This makes it more convenient for developer to debug their solution.")]),t._v(" "),v("p",[t._v("The module itself has the RAK4260 at its core, which is a module that utilizes the "),v("strong",[t._v("ATSAMR34J18B SIP")]),t._v(". This high level of integration allows for outstanding performance: 860 nA in sleep mode and LoRa® TX Power of up to 20 dBm.")]),t._v(" "),v("p",[t._v("A notable addition to this Breakout module is the "),v("strong",[t._v("ATECC608A Cryptographic co-processor")]),t._v(" with secure hardware-based key storage. This is what makes this module different (compared to the RAK4200 and RAK4600), adding another level of security in order to future proof your platform.")]),t._v(" "),v("p",[t._v("The module complies with LoRaWAN® 1.0.2 protocols. It also supports Lora® Point to Point communication.")]),t._v(" "),v("p",[t._v("The low power, long range LoRa® communication capabilities of the module make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).")]),t._v(" "),v("h3",{attrs:{id:"features"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),v("ul",[v("li",[t._v("LoRa® module for Smart City, Smart Agriculture, Smart Industry")]),t._v(" "),v("li",[t._v("I/O ports: "),v("strong",[t._v("UART/I2C/SPI/ADC")])]),t._v(" "),v("li",[t._v("Frequency range: 863–923 MHz (entire LoRa® high band spectrum)")]),t._v(" "),v("li",[t._v("Low-Power Wireless Systems with 7.8 kHz to 500 KHz Bandwidth")]),t._v(" "),v("li",[t._v("LoRa® Tx power up to 20dBm")]),t._v(" "),v("li",[t._v("Ultra-Low Power Consumption 860 nA in sleep mode")]),t._v(" "),v("li",[t._v("Core: ARM 32-bit Cortex – M0+ with MPU")]),t._v(" "),v("li",[t._v("Up to 256KB flash memory with ECC")]),t._v(" "),v("li",[t._v("32 KB RAM")]),t._v(" "),v("li",[t._v("6 KB of data EEPROM with ECC")]),t._v(" "),v("li",[t._v("ATECC608A cryptographic core")]),t._v(" "),v("li",[t._v("Supply voltage: 2.0V ~ 3.6V")]),t._v(" "),v("li",[t._v("Temperature range: -40°C to +85°C")])]),t._v(" "),v("h2",{attrs:{id:"specifications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),v("h3",{attrs:{id:"overview-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),v("p",[t._v("The RAK4260 Breakout Module is shown in Figures 2 and 3 that display the top and back view of the module, respectively.")]),t._v(" "),v("rk-img",{attrs:{src:"/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260b-top-view.jpg",width:"25%",caption:"RAK4260 Breakout Module Top View"}}),t._v(" "),v("rk-img",{attrs:{src:"/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260b-bottom-view.jpg",width:"25%",caption:"RAK4260 Breakout Module Bottom View"}}),t._v(" "),v("h3",{attrs:{id:"hardware"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),v("p",[t._v("The hardware specification is categorized into five part. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the RF and electrical parameters of the module that include the tabular data of the functionalities and standard values of the RAK4260 Breakout Module.")]),t._v(" "),v("h4",{attrs:{id:"interfaces"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),v("h5",{attrs:{id:"swd-programming-interface"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#swd-programming-interface"}},[t._v("#")]),t._v(" SWD Programming Interface")]),t._v(" "),v("p",[t._v("When programming via a JLINK tool, it is required to have all of the following 5 pins connected to your JLINK tool:")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("3V3")])]),t._v(" "),v("li",[v("strong",[t._v("SWDIO")])]),t._v(" "),v("li",[v("strong",[t._v("SWCLK")])]),t._v(" "),v("li",[v("strong",[t._v("GND")])]),t._v(" "),v("li",[v("strong",[t._v("RST")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("Note:")]),t._v(" "),v("p",[t._v("📝 For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs.")])]),t._v(" "),v("h5",{attrs:{id:"uart-port"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uart-port"}},[t._v("#")]),t._v(" UART Port")]),t._v(" "),v("p",[t._v("There are two UART interfaces on RAK4200 module:")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("UART1")]),t._v(" – default interface")]),t._v(" "),v("li",[v("strong",[t._v("UART3")]),t._v(" – reserved, can also act as GPIOs.")])]),t._v(" "),v("h5",{attrs:{id:"i2c-interface"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#i2c-interface"}},[t._v("#")]),t._v(" I2C Interface")]),t._v(" "),v("p",[v("strong",[t._v("I2C_SCL")]),t._v(" and "),v("strong",[t._v("I2C_SDA")]),t._v(" are connected to the ATECC608A crypto chip for the purpose of developing cryptographic applications: network end-point key management and exchange small message and PII data encryption, secure boot and protected download, ecosystem control and anti-cloning.")]),t._v(" "),v("h5",{attrs:{id:"rf-interface"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rf-interface"}},[t._v("#")]),t._v(" RF Interface")]),t._v(" "),v("p",[v("strong",[t._v("J4")]),t._v(" is soldered to the antenna connector. Depending on your choice it can come with either SMA or IPEX style connector. Make sure to select the one you need when ordering.")]),t._v(" "),v("h4",{attrs:{id:"pin-definition"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pin-definition"}},[t._v("#")]),t._v(" Pin Definition")]),t._v(" "),v("rk-img",{attrs:{src:"/assets/images/wisduo/rak4260-breakout-board/datasheet/pinout.jpg",width:"75%",caption:"RAK4260 Breakout Module Pinout"}}),t._v(" "),v("p",[t._v("The tables below show the pin definition of the RAK4260 Breakout Module:")]),t._v(" "),v("h5",{attrs:{id:"j5-pin-definitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#j5-pin-definitions"}},[t._v("#")]),t._v(" J5 Pin Definitions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("I/O")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Alternate Functions")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("UART3_RX")]),t._v(" "),v("td",[t._v("I")]),t._v(" "),v("td",[t._v("UART3_RX (ATSAMR34J18B PA18)")]),t._v(" "),v("td",[t._v("EIC/PTC/TC/AC/CCL/SERCOM1/SERCOM3")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("UART3_TX")]),t._v(" "),v("td",[t._v("O")]),t._v(" "),v("td",[t._v("UART3_TX (ATSAMR34J18B PA19)")]),t._v(" "),v("td",[t._v("EIC/PTC/TC/AC/CCL/SERCOM1/SERCOM3")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("GPIO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("GPIO (ATSAMR34J18B PA06)")]),t._v(" "),v("td",[t._v("EIC/RSTC/ADC/PTC/OPAMP/TC/CCL/SERCOM0")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("GPIO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("GPIO (ATSAMR34J18B PA07)")]),t._v(" "),v("td",[t._v("EIC/RSTC/ADC/OPAMP/TC/CCL/SERCOM0")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("GPIO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("GPIO (ATSAMR34J18B PA08)")]),t._v(" "),v("td",[t._v("ADC/PTC/TC/CCL/SERCOM0/SERCOM2")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GPIO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("GPIO (ATSAMR34J18B PA09)")]),t._v(" "),v("td",[t._v("EIC/ADC/PTC/TC/CCL/SERCOM0/SERCOM2")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("SWDIO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("Programming (ATSAMR34J18B PA30)")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("SWCLK")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("Programming (ATSAMR34J18B PA31)")]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h5",{attrs:{id:"j6-pin-definitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#j6-pin-definitions"}},[t._v("#")]),t._v(" J6 Pin Definitions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("I/O")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Alternate Functions")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("UART1_TX")]),t._v(" "),v("td",[t._v("O")]),t._v(" "),v("td",[t._v("UART1_RX (ATSAMR34J18B PA04)")]),t._v(" "),v("td",[t._v("EIC/RSTC/VREFB/ADC/AC/OPAMP/TC/CCL/SERCOM0")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("UART1_RX")]),t._v(" "),v("td",[t._v("I")]),t._v(" "),v("td",[t._v("UART1_RX (ATSAMR34J18B PA05)")]),t._v(" "),v("td",[t._v("EIC/RSTC/ADC/AC/OPAMP/TC/CCL/SERCOM0")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("GPIO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("GPIO (ATSAMR34J18B PA14)")]),t._v(" "),v("td",[t._v("EIC/TC/GCLK/SERCOM2/SERCOM4")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("RST")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("MCU RESET")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("SPI_MISO")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("SPI Interface (ATSAMR34J18B PB02)")]),t._v(" "),v("td",[t._v("EIC/ADC/SERCOM5/TC/SUPC/CCL")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("SPI_CLK")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("SPI Interface (ATSAMR34J18B PB23)")]),t._v(" "),v("td",[t._v("EIC/SERCOM5/TC/GCLK/CCL")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("SPI_CS")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("SPI Interface (ATSAMR34J18B PA22)")]),t._v(" "),v("td",[t._v("EIC/PTC/TC/AC/CCL/SERCOM3/SERCOM5")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("SPI_MOSI")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("SPI Interface (ATSAMR34J18B PA23)")]),t._v(" "),v("td",[t._v("EIC/PTC/TC/AC/CCL/GCLK/SERCOM3/SERCOM5")])])])]),t._v(" "),v("h5",{attrs:{id:"j11-pin-definitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#j11-pin-definitions"}},[t._v("#")]),t._v(" J11 Pin Definitions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("I/O")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Alternate Functions")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("USB_N")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("USB Interface (ATSAMR34J18B PA24)")]),t._v(" "),v("td",[t._v("EIC/SERCOM3/SERCOM5/TC/USB_DM/CCL")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("USB_P")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("USB Interface (ATSAMR34J18B PA24)")]),t._v(" "),v("td",[t._v("EIC/SERCOM3/SERCOM5/TC/USB_DP/CCL")])])])]),t._v(" "),v("h5",{attrs:{id:"j12-pin-definitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#j12-pin-definitions"}},[t._v("#")]),t._v(" J12 Pin Definitions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("I/O")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Alternate Functions")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("I2C_SDA")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("I2C Interface (ATSAMR34J18B PA16)")]),t._v(" "),v("td",[t._v("EIC/PTC/TC/GCLK/CCL/SERCOM1/SERCOM3")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("I2C_SCL")]),t._v(" "),v("td",[t._v("I/O")]),t._v(" "),v("td",[t._v("I2C Interface (ATSAMR34J18B PA17)")]),t._v(" "),v("td",[t._v("EIC/PTC/TC/GCLK/CCL/SERCOM1/SERCOM3")])])])]),t._v(" "),v("h5",{attrs:{id:"j13-pin-definitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#j13-pin-definitions"}},[t._v("#")]),t._v(" J13 Pin Definitions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("I/O")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Alternate Functions")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Ground")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VDD")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("DC3V3")]),t._v(" "),v("td",[t._v("Supply voltage 2.0 V ~ 3.3 V")])])])]),t._v(" "),v("h5",{attrs:{id:"j14-pin-definitions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#j14-pin-definitions"}},[t._v("#")]),t._v(" J14 Pin Definitions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("I/O")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Alternate Functions")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Ground")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("VDD")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("DC3V3")]),t._v(" "),v("td",[t._v("Supply voltage 2.0 V ~ 3.3 V")])])])]),t._v(" "),v("h4",{attrs:{id:"rf-characteristics"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rf-characteristics"}},[t._v("#")]),t._v(" RF Characteristics")]),t._v(" "),v("h5",{attrs:{id:"operating-frequencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#operating-frequencies"}},[t._v("#")]),t._v(" Operating Frequencies")]),t._v(" "),v("p",[t._v("The RAK4260 Breakout Module supports the following LoRa® bands:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Module")]),t._v(" "),v("th",[t._v("Region")]),t._v(" "),v("th",[t._v("Frequency (MHz)")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("RAK4260(H)")])]),t._v(" "),v("td",[t._v("Russia "),v("br"),t._v(" India "),v("br"),t._v(" Europe "),v("br"),t._v(" North America "),v("br"),t._v(" Australia "),v("br"),t._v(" Korea "),v("br"),t._v(" Asia")]),t._v(" "),v("td",[t._v("RU864 "),v("br"),t._v(" IN865 "),v("br"),t._v(" EU868 "),v("br"),t._v(" US915 "),v("br"),t._v(" AU915 "),v("br"),t._v(" KR920 "),v("br"),t._v(" AS923")])])])]),t._v(" "),v("h4",{attrs:{id:"electrical-characteristics"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#electrical-characteristics"}},[t._v("#")]),t._v(" Electrical Characteristics")]),t._v(" "),v("h5",{attrs:{id:"power-consumption"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#power-consumption"}},[t._v("#")]),t._v(" Power Consumption")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Item")]),t._v(" "),v("th",[t._v("Power Consumption")]),t._v(" "),v("th",[t._v("Condition")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Tx mode LoRa® @20dBm")]),t._v(" "),v("td",[t._v("126.3 mA")]),t._v(" "),v("td",[t._v("PA_BOOST V=3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("Tx mode LoRa® @17dBm")]),t._v(" "),v("td",[t._v("95.6 mA")]),t._v(" "),v("td",[t._v("PA_BOOST V=3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("Tx mode LoRa® @14dBm")]),t._v(" "),v("td",[t._v("33.1 mA (typical)")]),t._v(" "),v("td",[t._v("RFO_HF V=3.3V")])]),t._v(" "),v("tr",[v("td",[t._v("Rx mode LoRa® @37.5Kbps")]),t._v(" "),v("td",[t._v("13.6 mA")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("Sleep mode")]),t._v(" "),v("td",[t._v("860 nA")]),t._v(" "),v("td",[t._v("Backup Mode V = 3.3V")])])])]),t._v(" "),v("h4",{attrs:{id:"schematic-diagram"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#schematic-diagram"}},[t._v("#")]),t._v(" Schematic Diagram")]),t._v(" "),v("rk-img",{attrs:{src:"/assets/images/wisduo/rak4260-breakout-board/datasheet/schematic-diagram.png",width:"100%",caption:"RAK4260 Breakout Module Schematic Diagram"}}),t._v(" "),v("h3",{attrs:{id:"software"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[t._v("#")]),t._v(" Software")]),t._v(" "),v("p",[t._v("Download the latest firmware of the RAK4260 Breakout Module in the table provided.")]),t._v(" "),v("h4",{attrs:{id:"firmware"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#firmware"}},[t._v("#")]),t._v(" Firmware")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Model")]),t._v(" "),v("th",[t._v("Source")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("RAK4260")])]),t._v(" "),v("td",[v("a",{attrs:{href:"https://downloads.rakwireless.com/LoRa/RAK4260/Firmware/RAK4260.rar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),v("OutboundLink")],1)])])])])],1)}),[],!1,null,null,null);e.default=_.exports}}]);