---
prev: /Knowledge-Hub/Learn/Resources/user-manual/node-firmware-upgrading/
next: false
---
# Firmware Upgrading

:::tip 📝 NOTE
For this sample demonstration, we will be using the RAK4200 LPWAN Node.
:::

1. Connect your LPWAN intoindows machine as instructed in the [Quick Start Guide](/Product-Categories/) of your chosen LPWAN Node.

2. Open the RAK Serial Port Tool you have just installed and let your RAK LPWAN Node work in boot mode by setting an AT command through serial port as follows: 

```
at+set_config=device:boot
```
<rk-img
  src="/assets/images/user-manual/node-firmware-upgrading/boot-mode.jpg"
  width="75%"
  figure-number="1"
  caption="Entering Boot Mode"
/>

3. Close RAK serial port tool and open RAK firmware upgrade tool on your PC. Make sure to choose the correct COM Port.

<rk-img
  src="/assets/images/user-manual/node-firmware-upgrading/rak-firmware-upgrade-tool.jpg"
  width="75%"
  figure-number="2"
  caption="RAK Firmware Upgrade Tool"
/>

4. Click “**Choose File**” button to choose a correct upgrade file:

<rk-img
  src="/assets/images/user-manual/node-firmware-upgrading/file-choosing.jpg"
  width="75%"
  figure-number="3"
  caption="Choosing the Correct Upgrade file"
/>

5. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/user-manual/node-firmware-upgrading/burning-progress.jpg"
  width="75%"
  figure-number="4"
  caption="Firmware Upgrading in Process"
/>

6. You should see something like the image below if everything went well.

<rk-img
  src="/assets/images/user-manual/node-firmware-upgrading/upgrade-successful.jpg"
  width="75%"
  figure-number="5"
  caption="Successfully Upgraded Firmware"
/>

7. CLOSE the Firmware Upgrade Tool and OPEN the RAK Serial Port Tool again.

8. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart.

```
at+set_config=device:restart
```

<rk-img
  src="/assets/images/user-manual/node-firmware-upgrading/restart.jpg"
  width="75%"
  figure-number="6"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

