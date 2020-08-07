---
static_root: /assets/images/wisblock/rak5005-o/datasheet/
rak_img: /assets/images/wisblock/rak5005-o/datasheet/4.top-view-interfaces.png
rak_grp: [wisblock, wisbase]
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
        href: /Product-Categories/WisBlock/RAK5005-O/Datasheet/
      - name: User Manual
        href: /user-manual/
      - name: Deployment Guide
        href: /deployment-guide/
---


# RAK5005-O WisBlock WisBase Board



## Product Description

The RAK5005-O baseboard has a one slot reserved for WisDuo module，four slots for WisSensor modules and one slot for WisIO module. Also, there are also **2.54 mm pitch connectors** for extension interface, such as **I2C**, **UART**, and **GPIO pins**.

For convenience, there is a USB connector for debugging, it is connected directly to MCU’s USB port (if supported). The customer can access the internal MCU by connecting to a computer’s USB port directly. This USB connector is also used as a battery charging port.

For each module, a method is designed to connect and fasten the module easily. These connectors are **high-speed board to board connector**, they provide signal integrity for each data bus. A set of screws are used for attaching the module under the environment with vibrations.

To avoid electromagnetic interference and heating interference, the sensor connectors on the WisBase are designed to be installed on both sides of the PCB. Moreso, a sensor module can be attached either on the top layer or the bottom layer of the WisBase board.



<rk-btn
  src="../Datasheet/"
  label="Get Started with RAK5005-O WisBlock WisBase Board"
/>

<rk-quick-links :params="$frontmatter.params.qlinks" />

