---
next: false
---

# Burn the Firmware

::: tip 📝 NOTE:
 All LPWAN Developer Gateways mentioned in the previous section are pre-installed with its latest firmware upon purchase. Follow these steps if you intend to re-install the firmware of your device.
:::
1. Download the latest firmware in the [Firmwares](/Knowledge-Hub/Learn/Resources/user-manual/gateway-firmware-burning/firmwares.html) section which is based on the Raspbian OS.

2. An image writing tool is needed to install the downloaded firmware into the SD Card. For this instruction, the open source utility software [Etcher](https://www.balena.io/etcher/) will be used for burning the image file.

3. Insert the SD Card into the SD Card reader and plug it into the Computer.

4. Open the Etcher Software and select the necessary settings as shown in Figure 1:
    * **Select Image Button**: Select the image to be burned in the SD Card
    * **Select Drive Button**: The SD Card where the firmware will be burned
 
 <!---
Feel free to change the description for Select Image and Select Drive buttons
-->

::: tip 📝 NOTE:
 The SD Card should be automatically detected by the Etcher in the Select Drive Button in Figure 1. If not, kindly ensure proper connection.
:::

<rk-img
  src="/assets/images/user-manual/developer-gateways/firmware-burning/firmwareburn.png"
  figure-number="1"
  caption="Balena Etcher Software"
/>

5. Click **"Flash!"** and wait until the process completes automatically.