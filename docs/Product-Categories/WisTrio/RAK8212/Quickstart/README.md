---
prev: ../Overview/
next: ../Datasheet/
---

# Quick Start Guide

## Prerequisite

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/quick-start-guide/fwpbygibxrjxoyn6cvje.jpg"
  width="70%"
  caption="RAK8212 iTracker Pro"
/>

### What do you need?

Before going through each and every step in the installation guide of the RAK8212 iTracker Pro Module, make sure to prepare the necessary items listed below:

1. **RAK8212 iTracker Pro**
2. Emulator Kit
3. Connector Wires
4. 3.3V Battery Power Supply
5. Windows PC
6. Android/IOS Mobile Device

::: tip 📝 NOTE
This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware burned or upgraded, refer to the sections below:

1. [Device Firmware Setup](/Product-Categories/WisTrio/RAK8212/Quickstart/#device-firmware-setup)
   :::

### What's Included in the Package?

- 1 pc - RAK8212 Developer Board
- 1 pc - GPS Antenna
- 1 pc - PCB Antenna
- 1 pc - Battery Line
- 5 pcs - Dupont Line

## Product Configuration

### Checking Device Logs

You can check the logs for debugging purposes on your RAK8212 iTracker Pro through **J-link RTT Viewer**

#### Through J-link RTT Viewer

1. If you want to check the logs of RAK8212 iTracker Pro using this method, make sure you have connected the RAK8212 with your PC through JTAG like the following diagram below:

::: warning ⚠️ WARNING
You still have to connect the battery to the RAK8212 to power the board.
:::

2. Go to the Official Website of **Segger** where you can Download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program “**J-Link RTT Viewer V6.60f**” and choose "**USB**" for the type of connection to J-Link. After which, press "**OK**".

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/checking-device-logs/yqqi3jf24gullejjki9f.png"
  width="100%"
  caption="J-Link RTT Viewer"
/>

3. Choose the device parameters as the following picture shows and press "**OK**".

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/checking-device-logs/d7dgg4r2dc86tjawkqzw.png"
  width="100%"
  caption="J-Link RTT Viewer Connection Parameters"
/>

4. **Connect** to your RAK8212 iTracker Pro by navigating through `File>Connect` in the Main Menu. Alternatively, you could just press "**F2**" to do the same process.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/checking-device-logs/iqb42ghnf0wancwytkfu.png"
  width="100%"
  caption="Connecting to J-Link"
/>

5. Once connection is obtained, you should see the same log as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/checking-device-logs/na9nw4tqriblnxmutxcc.png"
  width="100%"
  caption="Log Checking through J-Link RTT Viewer"
/>

### AT Commands for RAK8212 iTracker Pro

The purpose of this section is to demonstrate on how to configure the RAK8212 iTracker Pro thru the use of AT Commands via Bluetooth. The list below shows the AT Commands available for use:

| **AT Command**                                                      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+version`                                                          | Get the current firmware version number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `at+set_config=device:restart`                                        | After set, the device will restart.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `at+get_config=device:status`                                         | Get all information about the device’s hardware components and their current status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `at+set_config=device:sleep:X`                                   | After set, the device will go to sleep or wake up immediately. <br>• **0** - sleep <br>• **1** - wake up                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `at+set_config=device:sleep_interval:X:Y`                    | Set the sleep interval. <br>• **X** - **0**: off, **1**: on. <br>• **Y** - the interval time. (ms) If the **X** is set to 1, it means that the device will sleep for **Y** ms after sending a message automatically in a loop, until you set **X** to 0.                                                                                                                                                                                                                                                                                                                     |
| `at+set_config=device:gps:X`                                    | • **X** - **0**: close, **1**: open, **2**: sleep, **3**: standby                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `at+scan=cellular`                                                    | Scan the Cellular networks available in your place                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `at+set_config=cellular:XXX:Y:ZZZ: AAA:BBB:C` | Sets the IP address and port on which you want to send data to through Cellular. <br>• **XXX** - the IP address you want to send data to. <br>• **Y** - the port you want to send data to. <br>• **ZZZ** -The cellular operator’s long name you want to connect, for example:CHINA MOBILE. <br>• **AAA** - The short name of the Cellular operator, for example: CMCC. <br>• **BBB** - The operator’s APN name, for example CMNET. <br>• **C** - The number of the Cellular network type. For example, 0 indicates GSM, 8 indicates LTE cat.M1, and 9 indicates LTE cat.NB1. |
| `at+set_config=cellular:XXX`                                     | Set the Cellular module using the Cellular module’s common AT commands which come from its manufacturer. <br>• **XXX -** The Cellular module’s common AT commands. For the full list of supported Quectel BG96 AT Commands, go [here](https://www.quectel.com/product/bg96.htm).                                                                                                                                                                                                                                                                                           |
| `at+send=cellular:XXX`                                           | Send data through cellular. <br>• **XXX -** The data you want to send.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Configuring your RAK8212 iTracker Pro

You can configure your RAK8212 iTracker Pro by sending AT Commands through Bluetooth.

::: tip 📝 NOTE
For the complete list of AT Commands available for configuring your RAK8212 iTracker Pro, kindly check the [AT Commands for iTracker Pro](/Product-Categories/WisTrio/RAK8212/Quickstart/#at-commands-for-rak8212-itracker-pro) section.
:::

#### Through BLE

1. In order to configure the RAK8212 iTracker Pro through BLE, download and install **nRF Connect** which is developed by Nordic Semiconductor and is also available in both App Store and Google Play Store.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/configuring-your-rak8212/cp0at8rhrvymleq7yuqv.jpg"
  width="100%"
  caption="nRF Connect App in Android and IOS"
/>

2. Make sure the Bluetooth on your mobile is turned on. Open the application and you will see all BLE devices in range in the scan list:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/configuring-your-rak8212/nub2thufpqgy6jyuxou1.jpg"
  width="50%"
  caption="nRF Master Control Panel (BLE) device connecting"
/>

3. Upon connecting, a pop-up window displays and in the third item "**Nordic UART Service**", click the arrow marked in the red box which enables you to write commands through **BLE**.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/configuring-your-rak8212/piminlwoxlxa2lcyzjpx.jpg"
  width="100%"
  caption="AT+command sending throught BLE"
/>

4. Click the arrow which is marked by the red box in the picture below, you will see the following page:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/configuring-your-rak8212/xfvjlkpzlwvftkgsoaku.jpg"
  width="50%"
  caption="Nordic UART Service RX Characteristics"
/>

5. You can now then send AT commands to the RAK8212 iTracker Pro. Meanwhile, you can also see log information in RTT Viewer as discussed in [Checking Device Logs](/Product-Categories/WisTrio/RAK8212/Quickstart/#checking-device-logs) section.

- For example, if you want to check the current firmware’s version send the following command:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/configuring-your-rak8212/pygfdyws2p5zb5zsrtva.jpg"
  width="100%"
  caption="AT+command for RAK8212 Firmware Version"
/>

6. Then, you can see the version number in RTT Viewer tool:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/configuring-your-rak8212/ckpxkecc1jucumdjglfm.png"
  width="100%"
  caption="RAK8212 Firmware Version in RTT Viewer Tool"
/>

### Connecting to Cellular Network

This section is a sample guide on how to connect you RAK8212 iTracker Pro to a Cellular Network.

1. Insert a SIM Card into your RAK8212 iTracker Pro .

2. Make sure that your RAK8212 iTracker Pro is connected to your mobile device over BLE according to the [Configuring your RAK8212 iTracker Pro](/Product-Categories/WisTrio/RAK8212/Quickstart/#configuring-your-rak8212-itracker-pro) section.

3. Now, send `at+scan=cellular` from mobile device over BLE to RAK8212 iTracker Pro as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/connecting-to-cellular-network/kzxbfaxur2zen98rb4c2.jpg"
  width="45%"
  caption="AT+command for scanning Cellular Network"
/>

4. Wait for about 20 seconds, and you should see some information similar to the image shown below in the RTT Viewer:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/connecting-to-cellular-network/izdlr0fc2sywzr9zvlja.jpg"
  width="100%"
  caption="Cellular Network Scan in RTT Viewer"
/>

::: tip 📝 NOTE
There may be several Cellular operator’s network signal detected upon scanning. In this section, the cellular networks available are CHINA MOBILE and CHN-UNICOM Cellular network.
:::

## Miscellaneous

### Device Firmware Setup

An easy and quick way to have a fully functional **RAK8212 iTracker Pro** is by using a Pre-compiled Firmware Image provided. In this section are the step by step instructions on how to install the Image into your device.

#### Burn the latest Firmware

1. If you want to get a pre-compiled firmware instead of compiling the source code by
yourself, you can find the latest firmware on RAK website **[here](https://downloads.rakwireless.com/en/Cellular/RAK8212/Firmware/)**.

2. Download and install **J-Link tool** on your Windows PC. You can download it **[here](https://downloads.rakwireless.com/en/Cellular/RAK8212/Tool/)**.

3. Connect the RAK8212 iTracker Pro with your PC through through your JTAG Emulator Kit as follows:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/e85ljqeubbgacmtfqm6e.jpg"
  width="100%"
  caption="RAK8212 to Windows PC connection thru JTag Emulator Kit"
/>

4. Now, **Open** the program “**J-Flash V6.41a**” which you just installed and click “**Start J-Flash**”

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/pfxc6gdoyv8djlndcfgt.jpg"
  width="100%"
  caption="J-Flash Start Connection"
/>

5. Click the **button** marked with the **red box** in the image below labeled **Figure 16**, then you can see the
following page as shown in **Figure 17** and in the table provided.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/ewkidffcazavmmscfdta.jpg"
  width="100%"
  caption="J-Flash Target Device Choosing"
/>

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/ydqhs7betd9x9vty0bwf.jpg"
  width="100%"
  caption="J-Flash Target Device Parameter"
/>

| **Parameter** | **Value**            |
| ------------- | -------------------- |
| Manufacturer  | Nordic Semiconductor |
| Device        | nRF52832_xxAA        |
| Core          | Cortex-M4            |
| Flash Size    | 512 KB + 4 KB        |
| RAM Size      | 64 KB                |

6. Click **OK** and a window pops-up as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/rrdddufy1ykhtnoz85fm.jpg"
  width="100%"
  caption="J-Flash Target Device Parameter Selection Window"
/>

7. Now, connect to the RAK8212 iTracker Pro by navigating through **Target>Connect** in the **Main Menu.**

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/dh4mpqr9z45vcqlpb9xh.jpg"
  width="100%"
  caption="Connecting to the RAK8212 iTracker Pro"
/>

::: tip 📝 NOTE
If connection is unsuccessful, please recheck the connections between the RAK8212 iTracker Pro, JTAG, and the connecting wires.
:::

1. Open the download firmware of the RAK8212 iTracker Pro by dragging it into the window as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/jrtcho26jvqd43gceelw.jpg"
  width="100%"
  caption="RAK8212 Firmware Opening"
/>

9. Before going into the firmware process, make sure to have the old firmware erased in the chip by navigating through **Target>Manual Programming>Erase Chip** in the **Main Menu** or by doing the process shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/nqtp5abjixx7ejfvlu21.jpg"
  width="100%"
  caption="RAK8212 Old Firmware Data Erasing"
/>

10. After the successful erasing of the old Firmware, you can start to burn the new firmware into RAK8212 iTracker Pro by navigating through **Target>Production Programming** in the **Main Menu** or by Pressing "**F7**".

11. Wait for a couple of seconds and a notification pop-ups showing a successful burning of the updated firmware as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/eqagc4qeasa4xvpbypx9.jpg"
  width="100%"
  caption="RAK8212 Firmware Burning Successful"
/>

#### Firmware Logs Checking

1. **Open** the program “**J-Link
RTT Viewer V6.41a**” which you just installed and click **OK**.

2. Choose the parameters as shown in the image and in the table provided below and click **OK**.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/dquesjm84olj0q61vidc.jpg"
  width="100%"
  caption="Firmware Log Checking Parameters"
/>

| **Parameter** | **Value**            |
| ------------- | -------------------- |
| Manufacturer  | Nordic Semiconductor |
| Device        | nRF52832_xxAA        |
| Core          | Cortex-M4            |
| Flash Size    | 516 KB               |
| RAM Size      | 64 KB                |

3. Connect by navigating through **File>Connect** in the **Main Menu** or by pressing "**F2**".

4. A sample log is shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/device-firmware-setup/n72yss9n4olrt2sqb1tv.jpg"
  width="100%"
  caption="Firmware Log Sample"
/>

::: tip 📝 NOTE
If no logs are shown upon connecting, try resetting the RAK8212 iTracker Pro and redo the Firmware Logs Checking Section
:::

### RUI Online Compiler

This section is a detailed walk through on how to use the RUI Online Compiler recently release by RAKwireless. 

#### Account Creation and Log-in Interface

::: tip 📝 NOTE
To avoid errors in the firmware compiling using the RUI Online Compiler, it is best advised to use Google Chrome as your Web Browser as this was the browser our technical team used upon testing. If you have not installed the Google Chrome browser, kindly download and install it from **[here](https://www.google.com/chrome/)**.
:::

1. Using your recently installed Google Chrome Web Browser, open the link, [RUI Online Compiler](http://47.112.137.11:12090/#/user/login) and you should see the log-in interface same as in the image below.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/hhy1hczcaykwlyzsabiy.jpg"
  width="100%"
  caption="RUI Online Compiler Log-in Window"
/>

2. If this is your first time doing this, kindly create an account by clicking through "**Create an account**" button.

3. A new window pops-up same as in the image below. You are asked to input your **e-mail address**,your chosen **password** and your **verification code** by clicking the "**Get Verification Code**" button.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/ehevglrskaocqfmlsxmy.jpg"
  width="100%"
  caption="RUI Online Compiler Sign-up Window"
/>

::: tip 📝 NOTE
Go to your e-mail and check the verification sent when you clicked the "**Get Verification Code**" button. Note that you are only given **120 seconds** to have the verification attached in the **Create Account** window.
:::

4. Once the three information, **e-mail address**, **password** and **verification code** are supplied, click the "**Create an account**" button in the bottom. Once creating an account is successful, you are then asked to log-on your credentials in the link attached in **Step 1**.

#### Selecting and uploading

After your successful sign-up and log-in done in the previous section, you should see the following page below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/rdzhlote2bgm5tdzht50.jpg"
  width="100%"
  caption="RUI Online Compiler Dashboard"
/>

##### Product Model Selection

1. Select the **Core Module** which you want to do customization based on.

::: tip 📝 NOTE
As of now, we only supply **RAK8212**, **RAK5010**, **RAK4600**, **RAK4400**, **RAK811-L**, **RAK811-H**, and **RAK4200** modules. Our team is still in the processing of having most of our devices be programmable so watch for further updates.
:::

##### Choosing the Upload File

2. Click "**Select file to upload**” button to choose the **.zip file** which includes all source code of your own customized Application.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/bevchri7rtnihsnzepdb.jpg"
  width="100%"
  caption="Choosing your Customized .zip file in the RUI Online Compiler"
/>

Please note that, this .zip file can be made as the following pictures show as an example:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/hm8q507betrhj09on70w.jpg"
  width="100%"
  caption="Sample files in the Customized Application .zip File"
/>

3. After choosing the correct .zip file on your chosen directory, press "**Open**" and proceed to the next section.

##### File Uploading

4. After choosing the corresponding .zip file from the previous section, press the "**Upload**" button as shown in the image below to begin the uploading process.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/r9nfbuvkhn8tcczasc9i.jpg"
  width="100%"
  caption="RUI Online Compiler Uploading"
/>

5. A corresponding "**Upload Success**" notification then pops-up in your window once the uploading of the .zip file is successful same as with the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/miy0wjapm2mv8fbxnl0y.jpg"
  width="100%"
  caption="RUI Online Compiler Uploading Success"
/>

##### Compiling

6. Once uploading is done, you can now start compiling your customized application by clicking the "**Compile**" button same as with the image below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/deudnzy83agtekkagisz.jpg"
  width="100%"
  caption="RUI Online Compiler Compiling"
/>

Corresponding logs also can be seen in the "**Compile log output**" monitor same with the image shown below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/w1mza2h9uw33ff46bgni.jpg"
  width="100%"
  caption="RUI Online Compiler Compiling Logs"
/>

7. After compiling successfully, a new **.zip file** which includes two files, one is "**compile log file**", the other is the "**final customized firmware**" same with the image shown below:

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/m5rh6g5khfkafhxumhtt.jpg"
  width="100%"
  caption=" Final Customized Firmware Auto-downloaded"
/>

::: tip 📝 NOTE
For failed compiling instances, the .zip file automatically downloaded shall only contain "**compile log file**" which would contain the errors occurred upon compiling.
:::

::: tip 📝 NOTE
For failed auto-downloading of your Final Customized Firmware instances, kindly **turn-off all third party download managers** (i.e. Internet Download Manager) and redo the Compiling process.
:::

8. For the successful compiling, a sample image is shown below with the .zip file containing both "**compile log file**", and the "**final customized firmware**" .bin file.

<rk-img
  src="/assets/images/wistrio/rak8212/quickstart/rui-online-compiler/dyzka8pdkvlgjbzhakml.jpg"
  width="60%"
  caption="Final Customized Firmware sample File"
/>

9. The **newly compiled .bin file** will then be burned into your device by following the steps in the [Device Firmware Setup](/Product-Categories/WisTrio/RAK8212/Quickstart/#device-firmware-setup) section.



