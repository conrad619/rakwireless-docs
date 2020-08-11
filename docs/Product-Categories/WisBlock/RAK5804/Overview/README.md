---
static_root: /assets/images/wisblock/rak5804/datasheet/
rak_img: /assets/images/wisblock/rak5804/datasheet/j-connectors.png
rak_grp: [wisblock, wisio]
prev: false
next: false
params:
  qlinks:
    learnMore:
      - name: Projects 
        href: https://www.hackster.io/search?i=projects&q=rak811
      - name: Community
        href: https://forum.rakwireless.com/
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /Product-Categories/WisBlock/RAK5804/Datasheet/
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---

# RAK5804 WisBlock WisIO Module

## Product Description


The RAK5804 module is part of the WisBlock series that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisCore and a WisBase module. 

The RAK5804 module is designed as an IO extension module that allows you to connect their own digital or analog devices or sensors to create a customized IoT solution. These sensors are connected through the two expansion connectors: **J2** and **J3**. To provide power to peripheral devices, the **3.3V** can be obtained from these expansion connectors. Internal protections allow shutting down the power supply when a short circuit is detected in the peripheral devices. Overcurrent cases are protected through **internal PTC thermistors** in the power supply circuit.  

Also, the RAK5804 module supports a USB interface, which can be used with RAK5005 to access the USB port of MCU of the WisCore module of the solution. 

All external expansion interfaces of the RAK5804 module are equipped with a TVS protection circuit to avoid damaging the mainboard and WisCore circuit with ESD when users plug in or unplug the interface.


<rk-btn
  src="../Datasheet/"
  label="Get Started with RAK5804 WisBlock WisIO Module"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks"/>


## Product Features

- WisIO connector
- Supports **two (2) pieces of 10-pin IO** extension connectors.
- Supports **one (1) USB connector** to access WisCore Module.
- TVS protected circuity
- PTC thermistor to prevent output power overload
- Dimension: **25 mm x 15 mm**.


<rk-btn
  src="https://store.rakwireless.com/"
  label="Buy a RAK5804 WisBlock WisIO Module"
  _blank
/>