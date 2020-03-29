---
Title: Device Firmware Setup
---

# Device Firmware Setup
An easy and quick way to have a fully functional gateway is by using a Precompiled Firmware Image provided. In this section, is the step by step instructions on how to install the Image into your SD Card used for the gateway.

## Burn the Latest Firmware

::: tip Note:
:pencil: If your RAK7244 - LoRaWAN® Developer Gateway has the latest firmware image in the SD card, you can
skip this section.
:::

1. Download the latest firmware [here](https://downloads.rakwireless.com/en/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/Firmware/), which is based on the Raspbian OS.
2. You need to use an image writing tool to install the firmware on the SD Card. For this, You will be using [Etcher](https://doc.rakwireless.com/rak7246---rpi-lora-gateway/downloads#balena-etcher), which is an open source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your Computer.
4. Open the Etcher Software, and select the downloaded image file thru the (**Label - 1**) button in the image below.

::: tip Note:
:pencil: Your SD Card should be automatically detected by the Etcher software in the Label - 2 of the
image below. If not, kindly ensure proper connection.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak7244/3.device firmware setup/firmwareburn.png"
  width="100%"
  figure-number="1"
  caption="Balena Etcher Software"
/>

Click **"Flash!"** and wait until the process completes automatically.
