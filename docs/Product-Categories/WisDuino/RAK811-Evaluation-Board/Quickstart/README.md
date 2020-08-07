---
prev: /Product-Categories/WisDuino/RAK811-Evaluation-Board/Overview/
next: false
---

# Quick Start Guide

## Prerequisites

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/quick-start-guide/bv4v5828qbdlkrann1xt.jpg"
  width="50%"
  caption="RAK811 LPWAN Evaluation Board"
/>

### What do you need?

Before going through each and every step in the installation guide of the RAK811 LPWAN Evaluation Board, make sure to prepare the necessary items listed below:

1. **RAK811 LPWAN Evaluation Board**
2. Micro- USB cable
3. Gateway in Range for Testing
4. A Windows/Mac OS/Linux Computer

::: tip 📝 NOTE
The bootloader of the RAK811 LPWAN Evaluation Board is already pre-installed upon manufacturing so flashing the bootloader is not necessary for you to perform. If you find that the bootloader of your RAK811 LPWAN Evaluation Board damaged, kindly contact our support though our [RAKwireless forum](https://forum.rakwireless.com/). However, if you want to upgrade the firmware of the device, please refer to the section below:

1. [Firmware Upgrading](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#upgrading-the-firmware)
   :::

### What's included in the package?

- 1pc - RAK811 LPWAN Evaluation Board
- 1pc - Micro - USB Cable
- 1pc - LoRa® Antenna (SMA)
- 5pcs - Jumper Caps
- 5pcs - Male to Female Jumper Wires

## Product Configuration

### Interfacing with RAK811 LPWAN Evaluation Board

In order for you to be able to interface with the RAK811 LPWAN Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK811 LPWAN Evaluation Board , you should install the LoRa® antenna first . Not doing so might damage the board
:::

- Using a standard **Micro - USB Cable**, connect your RAK811 LPWAN Evaluation Board to your computer.

::: tip 📝 NOTE
If this is your first time to connect your RAK811 LPWAN Evaluation Board to your computer, it should automatically download the CH340 driver in order for them to communicate properly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step.
:::

- Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for **Other Devices.**

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-rak811/ojnphsuvfgrvwzd4dvu8.png"
  width="100%"
  caption="Missing Driver for the RAK811 LPWAN Evaluation Board"
/>

- Under "**Other devices**" drop down list, an unknown **USB2.0-Serial** driver must appear. Right click into it and choose "**Search automaticaly for updated driver software**". Again, before doing so, make sure to have an internet access or it will fail.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-rak811/ejfeqklgjwmjjky5ewag.png"
  width="100%"
  caption="Automatic Driver Installation via Internet"
/>

- Wait for it to automatically download and install the missing driver. Once installation is done, "**USB-SERIAL CH340**" must appear in the **Ports (COM & LPT)** drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB-SERIAL CH340 driver is **COM4**.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-rak811/tfl6jmjcsapgpmagthvj.png"
  width="100%"
  caption="USB-SERIAL CH340 Driver Successfully Installed"
/>

::: tip 📝 NOTE
In case the driver is still not installed upon doing the previous steps, kindly download the driver manually through this [link](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/).
:::

- Let us now test if your RAK811 LPWAN Evaluation Board can now communicate with the RAK Serial Port Tool. Connect with the RAK Serial Port Tool using the parameters listed below and click "**Open**".

1. **COM**: Choose the COM Port associated with the USB-SERIAL CH340 from the previous step. For this tutorial, the COM Port is COM4.
2. **Baud Rate**: **115200** bps

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-rak811/q5ubbty2twyeocvnmttc.png"
  width="100%"
  caption="Connecting to the RAK Serial Port Tool"
/>

- To verify connectivity, let's try sending AT+Commands. In the RAK Serial Port Tool, there are built-in AT+Commands within it at the right side. Try sending the code below to check the firmware version of your RAK811 LPWAN Evaluation Board. If connection is successful, in the monitor panel at the left, the firmware version should appear same with the image shown below:

```sh
at+version
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-rak811/px93o4onb4kxmiwvsumf.png"
  width="100%"
  caption="AT+Command Sample Serial Communication Test"
/>

Congratulations! :tada: You have just successfully interfaced your RAK811 LPWAN Evaluation Board with your computer! Go on to the next sections to fully configure your RAK811 LPWAN Evaluation Board and Connect it to The Things Network (TTN).

### Connecting to The Things Network (TTN)

In this section, we will be connecting the RAK811 LPWAN Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/ajvucmil4rrtco9pvi7n.jpg"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/ntbgu9r9olrkptcvhygr.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

#### Adding An Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/kunol5ai4pgdapyoyx5m.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - handler you want to register this application to.

- After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/b8569qy8g7xlvekg84xt.png"
  width="100%"
  caption="Adding an Application"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/ow74swwqofv1gxxj0qbk.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device "**

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/tfty3bcrkzwnoagfy967.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK811 LPWAN Evaluation Board in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-ttn/ziidry7nc3uz7zumcecr.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the **OTAA mode** or **ABP mode** section.

#### OTAA Mode

When setting up a new device in TTN it defaults to OTAA mode. For configuring it, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/eqx6w4refhlqbklpj4cc.png"
  width="100%"
  caption="Device OTAA Parameters"
/>

Now, let us configure the RAK811 to work in OTAA mode in the EU868 band, as an example.

::: tip 📝 NOTE
The default LoRa® working mode for the RAK811 is LoRaWAN® 1.0.2, while the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.
:::

1. Set mode to **OTAA** and LoRa® device class to **Class A**, with the following set of commands:

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config=lora:class:0
```

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/okwyucipaed3fnrarkso.png"
  width="100%"
  caption="Setting up the RAK811 Operation Mode"
/>

2. Now that the modes are set, enter the parameters: : **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

```sh
at+set_config=lora:dev_eui:XXXX
```

```sh
at+set_config=lora:app_eui:XXXX
```

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/jttmbmkhm0ac0duvap94.png"
  width="100%"
  caption="Setting up the RAK811 OTAA Parameters"
/>

- You should end up with a window as the one in **Figure** above (**a series of OK messages**).

3. Finally execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/eevf8jgjt1p48i17vugw.png"
  width="100%"
  caption="Join Command"
/>

4. You can test the connection by sending an uplink frame. Use the following for example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/tsyls5mfkzctes7lh1jg.png"
  width="100%"
  caption="Sending an uplink frame"
/>

- If you get a response in your TTN live data feed as in **Figure** below, than you are all set!

::: tip 📝 NOTE
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-otaa-mode/gpkpni2w18kuvv0lqhi8.png"
  width="100%"
  caption="Sending Data to TTN from RAK811"
/>

#### ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.

2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.
   <rk-img
     src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/ghtjt9jvmsfgkbqyrbkz.png"
     width="100%"
     caption="Switching to ABP Mode"
   />

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in **Figure** below.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/pexuiehqh0dkh1hjpymk.png"
  width="100%"
  caption="ABP Parameters Window"
/>

4. Now, we need to update the RAK811 configuration (mode and parameters). Open the RAK Serial Port Tool and type the command below to change the region (in case you have not done so already):

```sh
at+set_config=lora:region:EU868
```

As you can see in **Figure** below, as we were in the same region (EU868), there was no change.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/gkaye44gsjjuxhtptjmv.png"
  width="100%"
  caption="Region Setup"
/>

5. Change the mode to **ABP** with the command:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/xxgmfyq9dkgzu7hcfq4g.png"
  width="100%"
  caption="Join Mode Setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"X"** with the corresponding parameter value for your particular case (**Figure 22** for reference of the parameters):

```sh
at+set_config=lora:dev_addr:X
```

```sh
at+set_config=lora:nwks_key:X
```

```sh
at+set_config=lora:apps_key:X
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/yjupd0dh7ytr1rzqe118.png"
  width="100%"
  caption="Setting up the RAK811 ABP Parameters"
/>

You should end up with a window as the one in **Figure** above (**a series of OK messages**).

7. Finally, execute the join command:

```sh
at+join
```

<rk-img
src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/y81mijqfbzfvhxlvt8qm.png"
width="100%"
caption="Join Command""
/>

8. You can test the connection by sending an uplink frame. Use the following for example:

```sh
at+send=lora:1:12345678
```

<rk-img
src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/tfs0ngbmzluoex9gl3kn.png"
width="100%"
caption="Sending an uplink frame""
/>

- If you get a response in your TTN live data feed as in **Figure** below, than you are all set!

::: tip 📝 NOTE
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
src="/assets/images/wisduino/rak811-evaluation-board/quickstart/ttn-abp-mode/zf2brgmub8kkthb87j8y.png"
width="100%"
caption="Sending Data to TTN from RAK811""
/>

### Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK811 LPWAN Evaluation Board to connect with ChirpStack according to the following steps:

::: tip 📝 NOTE
In this section, it is an assumption that you have already connected your Gateway with TTN correctly. If not, please have a look at the documentation of RAK Gateway.
:::

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button, then filling them in.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-chirpstack/rmyjmnipu8avuwmpje4m.png"
  width="100%"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-chirpstack/lfckimcgh5dlghvhggro.png"
  width="100%"
  caption="Creating the Application"
/>

4. Click the new item name “RAKwireless_Test_Application”:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-chirpstack/fapk1hsahx06blqi7smh.png"
  width="100%"
  caption="Applications page in ChirpStack"
/>

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-chirpstack/pjl7qdbeh1nnkw7su8s3.png"
  width="100%"
  caption="RAK811 Application"
/>

5. **Add** a node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-chirpstack/pjl7qdbeh1nnkw7su8s3.png"
  width="100%"
  caption="Adding a Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/connecting-to-chirpstack/pjl7qdbeh1nnkw7su8s3.png"
  width="100%"
  caption="Filling the Device Parameters"
/>

::: tip 📝 NOTE
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::

#### OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/o5jklje02ar3acrwxtor.png"
  width="100%"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/mzzpzy776uiagdgddwcx.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The **Device EUI** which was set in the previous section to your RAK811 LPWAN Evaluation Board as "**dev_eui**" is the same in the image highlighted below.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/b8phlp7v8vvvfqffshmc.png"
  width="100%"
  caption="Device EUI Code"
/>

- Same with the **Application Key**, which was set in the previous section as "**app_key**" is the same with the image highlighted.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/dpgjv0ob4y7ujj0trkvh.png"
  width="100%"
  caption="Application Key LoRaWAN®"
/>

::: tip 📝 NOTE
The **Application EUI** which was set into RAK811 LPWAN Evaluation Board as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK811 LPWAN Evaluation Board by using **AT commands**. To do this, connect your RAK811 LPWAN Evaluation Board to a PC, power it on and open **RAK Serial Port Tool** on your computer.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/fqw3e70otnu8ymgnmu79.png"
  width="60%"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK811 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa® join mode to **OTAA** and LoRa® class to **Class A** by typing the AT commands shown in the picture below.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/mdjpe1uhxdmahhthbt8w.jpg"
  width="100%"
  caption="Setting of LoRaWAN® Mode and Class"
/>

6. Type the following AT command to set the:**Frequency/Region to EU868, Device EUI, Application EUI and Application Key**:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/vugtbybavkertynte382.jpg"
  width="100%"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/rkeautvpyyd4oquhxvgq.jpg"
  width="100%"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/xlebk2u3xe2ryxo5ss11.png"
  width="60%"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/tnim0kbi0g0cebalhddc.png"
  width="100%"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Let’s try sending data from our RAK811 LPWAN Evaluation Board to the ChirpStack by typing the command below in the serial port.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/j7c4lszbgth963mh6kea.png"
  width="60%"
  caption="Sending Data to ChirpStack"
/>

You can see the message on ChirpStack page:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-otaa-mode/yjrvtdwmvydajevbvnov.png"
  width="100%"
  caption="Message Received in ChirpStack"
/>

#### ABP Mode

1. If you select “**Device Profile ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/d2yg1k2jisypbejszfzg.png"
  width="100%"
  caption="Switching to ABP Mode"
/>
 
2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/buahb0dbl6vhdjcmub5g.png"
  width="100%"
  caption="ABP Parameters"
/>

3. Next, let’s use these parameters to set RAK811 LPWAN Evaluation Board by using **AT command**. Let's join in **ABP** mode and set **EU868** frequency as an example.

4. If the join mode is not in ABP, just set the LoRa® join mode to **ABP** and LoRa® a class to **Class A** by typing the following commands in RAK Serial Port Tool

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/dkulqzpldm5nlpsjhbyz.jpg"
  width="100%"
  caption="Setting of LoRaWAN® Mode and Class"
/>

5. Type the following AT command to set your respective: **Frequency/Region**, **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/lvccenrrczmt4nrtbjya.jpg"
  width="100%"
  caption="Setting of Frequency and Device Address"
/>

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/v1mclxe7vemha0yewfyu.jpg"
  width="100%"
  caption="Setting of Device EUI and Network Session Key"
/>

6. Then, **join** in ABP mode.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/pqwlq93vihikp0rgilvi.jpg"
  width="60%"
  caption="Joining of ABP"
/>

- Now, try sending data from our RAK811 LPWAN Evaluation Board to the Chirpstack

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/enenhki5eduvosgktdz8.png"
  width="60%"
  caption="Sending Data to ChirpStack"
/>

- You can see the data which is just sent from RAK811 LPWAN Evaluation Boardon ChirpStack page:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/chirpstack-abp-mode/tk1ypmzg0va9nwaprkqe.png"
  width="100%"
  caption="Message Status in ChirpStack"
/>

### LoRa® P2P Mode

This section shows how to communicate **two (2) RAK811 LPWAN Evaluation Boards** via LoRa® P2P Mode. We will be using EU868 as our frequency, although it is applicable to other standard bands.

1. First, find two RAK811 LPWAN Evaluation Board which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.

2. Next, connect these two RAK811 LPWAN Evaluation Board with PC through UART, and open two serial port tool on PC.

3. Now, configure them to both work in LoRa® P2P mode as follow:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/lora-p2p-mode/wiyvchxtiv4tgr3izuff.png"
  width="100%"
  caption="P2P Initialization"
/>

4. Then configure LoRa® P2P parameters for both of them as follow for example:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/lora-p2p-mode/vctdlxrvu3lx48qfgxi9.jpg"
  width="100%"
  caption="Configuring P2P in both RAK811 Nodes"
/>

5. OK! Try to send a message from WisNode 1 to WisNode 2:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/lora-p2p-mode/og3igkq8zhfftiaunbt6.jpg"
  width="100%"
  caption="Message sent and received status in the two Nodes"
/>

6. Successfully! Now, send more messages.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/lora-p2p-mode/jsqpvwg7m8cwl7zr4zf5.jpg"
  width="100%"
  caption="Succeeding Messages sent to the other Node"
/>

Yehey! You have successfully finished your RAK811 LPWAN Evaluation Board Set Up. You are now ready to develop the coolest project that could potentially change the world.

## Miscellaneous

### AT Commands for RAK811 LPWAN Evaluation Board

The purpose of this section is to demonstrate on how to configure the RAK811 LPWAN Evaluation Board thru the use of AT Commands via a **Serial Port Tool** running in your Windows PC. The list below shows the AT Commands available for use:

| **AT Command**                                               | **Description**                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+help `                                                     | This AT command can show all available AT commands of this module/product for you                                                                                                                                                                                                                                                                                                                                         |
| `at+version `                                                  | Get the current firmware version number.                                                                                                                                                                                                                                                                                                                                                                                  |
| `at+get_config=device:status  `                                | Get all information about the device’s hardware components and their current status.                                                                                                                                                                                                                                                                                                                                      |
| `at+set_config=device:restart`                                 | After set, the device will restart.                                                                                                                                                                                                                                                                                                                                                                                       |
| `at+set_config=device:boot `                                   | Lets the device work in boot mode                                                                                                                                                                                                                                                                                                                                                                                         |
| `at+run`                                                       | Stop boot mode and run as normal. Only valid when the device works in boot mode.                                                                                                                                                                                                                                                                                                                                          |
| `at+set_config=device:sleep:X`                            | After setting, the device will go to sleep mode or wake up immediately.<br><br>• **0** - wake up<br><br>• **1** - sleep                                                                                                                                                                                                                                                                                                   |
| `at+set_config=device:gpio:X:Y`                        | Set a certain GPIO pin to high/low level. <br>• **X** - the pin number of a certain GPIO on RAK811 module. <br>• **Y** - **0**: low level, **1**: high level.                                                                                                                                                                                                                                                             |
| `at+get_config=device:gpio:X`                              | Get a certain GPIO’s level. <br>• **X** -the pin number of the GPIO on RAK811 module.                                                                                                                                                                                                                                                                                                                                     |
| `at+get_config=device:adc:X`                              | Get the ADC value. <br>• **X** - the pin number of the ADC on RAK811 module.                                                                                                                                                                                                                                                                                                                                              |
| `at+set_config=device:iic:X:YY:ZZ:AAA`        | Read data from I2C or write a data to I2C. <br>• **X** - **0**: read, **1**: write. <br>• **YY** - device address, in HEX format. <br>• **ZZ** - sensor’s register address, in HEX format. <br>• **AAA** - if read, this parameter means the length you want to read. If write, this parameter means the data you want to write. It must be in HEX format too.                                                            |
| `at+set_config=device:uart_mode:X:Y`                  | Set the UART work mode. Parameters <br>• **X** - UART number on RAK811 module. <br>• **Y** - **1**: Passthrough mode. <br> **Note:** If you want to go back to configuration mode, enter `+++`in the serial port.                                                                                                                                                                                                              |
| `at+set_config=device:uart:X:Y`                       | Set a certain UART’s Baud rate. <br>• **X -** the UART number <br>• **Y -** the Baud rate value.                                                                                                                                                                                                                                                                                                                          |
| `at+send=uart:X:YYY`                                  | Send data through UART. <br>• **X** - the UART number of RAK811 module <br>• **YYY** - the data you want to send through UART                                                                                                                                                                                                                                                                                             |
| `at+join `                                                     | Start LoRa® Network join procedure.                                                                                                                                                                                                                                                                                                                                                                                       |
| `at+send=lora:X:YYY `                                  | Send a customized data. <br>• **X** - LoRa® port <br>• **YYY** - the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format.                                                                                                                                                                                                                                                     |
| `at+set_config=lora:work_mode:X`                         | Set the work mode for LoRa®. <br>• **X** - **0**: LoRaWAN®, **1**: LoRaP2P, **2**: Test Mode.                                                                                                                                                                                                                                                                                                                             |
| `at+set_config=lora:join_mode:X`                           | Set the join mode for LoRaWAN®. <br>• **X** - **0**: OTAA, **1**: ABP                                                                                                                                                                                                                                                                                                                                                     |
| `at+set_config=lora:class:X`                               | Set the class for LoRa®. <br>• **X** - **0**: Class A, **1**: Class B, **2**: Class C                                                                                                                                                                                                                                                                                                                                     |
| `at+set_config=lora:region:XXX`                            | Set the region for LoRa®. <br>• **XXX** - one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.                                                                                                                                                                                                                                                                                       |
| `at+set_config=lora:confirm:X`                             | Set the type of messages which will be sent out through LoRa®. <br>• **X** - **0**: unconfirm, **1**: confirm                                                                                                                                                                                                                                                                                                             |
| `at+set_config=lora:dev_eui:XXXX`                         | Set the device EUI for OTAA. <br>• **XXXX** - the device EUI.                                                                                                                                                                                                                                                                                                                                                             |
| `at+set_config=lora:app_eui:XXXX`                          | Set the application EUI for OTAA. <br>• **XXXX** - the application EUI.                                                                                                                                                                                                                                                                                                                                                   |
| `at+set_config=lora:app_key:XXXX`                         | Set the application key for OTAA. <br>• **XXXX** - the application key.                                                                                                                                                                                                                                                                                                                                                   |
| `at+set_config=lora:dev_addr:XXXX`                        | Set the device address for ABP. <br>• **XXXX** - the device address.                                                                                                                                                                                                                                                                                                                                                      |
| `at+set_config=lora:apps_key:XXXX`                         | Set the application session key for ABP. <br>• **XXXX -** the application session key.                                                                                                                                                                                                                                                                                                                                    |
| `at+set_config=lora:nwks_key:XXXX`                        | Set the network session key for ABP. <br>• **XXXX** - the network session key.                                                                                                                                                                                                                                                                                                                                            |
| `at+set_config=lora:ch_mask:X:Y`                           | Set a certain channel on or off. <br>• **X -** the channel number, and you can check which channel can be set before you set it. <br>• **Y** - **0**: off, **1**: on                                                                                                                                                                                                                                                      |
| `at+set_config=lora:adr:X`                                | Open or close the ADR function of LoRa® Node. <br>• **X - 0**: Close ADR; **1**: Open ADR.                                                                                                                                                                                                                                                                                                                                |
| `at+set_config=lora:dr:X`                                  | Set the DR of LoRa® Node. <br>• **X** - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN® 1.0.2 specification.                                                                                                                                                                                                                                                              |
| `at+set_config=lora:tx_power:X`                       | Set the TX power level. <br>• **X** - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN® 1.0.2 region specification on this [link](https://github.com/RAKWireless/Update-File/blob/master/LoRaWANRegionalParametersv1.0.2.pdf).                                                                                                                   |
| `at+get_config=lora:status `                                   | It will return all of the current information of LoRa®, except LoRa® channel.                                                                                                                                                                                                                                                                                                                                             |
|` at+get_config=lora:channel`                                   | It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly.                                                                                                                                                                                                                                                                                          |
| `at+set_config=lorap2p:XXX:Y:Z:A:B:C` | Set the parameters for LoRa® P2P mode. This AT command is valid when the work mode is ·LoRa® P2P. <br>• **XXX** - Frequency in Hz. <br>• **Y** - Spreading factor, [6, 7, 8, 9, 10, 11, 12]. <br>• **Z** - Bandwidth, **0**: 125 kHz, **1**: 250 kHz, **2**: 500kHz. <br>• **A** - Coding Rate, **1**: 4/5, **2**: 4/6, **3**: 4/7, **4**: 4/8. <br>• **B** - Preamble Length, 5-65535. <br>• **C** - Power in dbm, 5-20. |
| `at+send=lorap2p:XXX`                                      | Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. <br>• **XXX** - Data in HEX                                                                                                                                                                                                                                                                                                            |

### Upgrading the Firmware

If the firmware version of your RAK811 LPWAN Evaluation Board is newer than V3.0.0.0 or you have just burned the bootloader into RAK811 LPWAN Evaluation Board according to the [Burning Bootloader into the Device](https://doc.rakwireless.com/rak811-lora---evaluation-board/burning-the-bootloader-into-the-device) document, proceed to **Step 2**.

1. In case you have not just burned the bootloader as instructed in the previous section, you need to manually go into **boot mode**. Connect you board via the USB interface and enter the following **AT command** after you have connected via the proper COM port:

::: tip 📝 NOTE
Make sure to choose the correct port in the COM Port field. You can check this in the [Interfacing with RAK 811 Development Board](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#interfacing-with-rak811-lpwan-evaluation-board) section.
:::

```sh
at+set_config=device:boot
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/upgrading-the-firmware/vbshextj0q190mzk6hhf.jpg"
  width="60%"
  caption="Entering Boot Mode"
/>

2. Download the **RAK Upgrade Tool** from the RAKwireless website **[here](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip)**. Then, open the tool. Again don't forget to choose the correct port!

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/upgrading-the-firmware/e9ratal5kgle1mwh4ufu.png"
  width="100%"
  caption="RAK Upgrade Tool"
/>

3. Click “**Choose File**” and choose the firmware you have downloaded for your desired frequency band.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/upgrading-the-firmware/nguqg8huem2urdte26ub.png"
  width="100%"
  caption="Choosing the Correct Upgrade file"
/>

4. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/upgrading-the-firmware/wjdxnmvu2bwkjfj2rgmd.png"
  width="100%"
  caption="Firmware Upgrading in Process"
/>

5. You should see something like the image in the **Figure** below, if everything went well.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/upgrading-the-firmware/e7dcwivj7lv7zupcekok.jpg"
  width="100%"
  caption="Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **OPEN** the serial port too, again.

7. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart. Another option is to press the **RST** button on the RAK811 LPWAN Evaluation Board.

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/upgrading-the-firmware/x0fsjpi4xc4hmatdcmyk.jpg"
  width="60%"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

If you want to configure your RAK811 LPWAN Evaluation Board using the available **AT commands**, check the [AT Commands for RAK811 LPWAN Evaluation Board](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#at-commands-for-rak811-lpwan-evaluation-board) section.

### RUI Online Compiler

This section is a detailed walk through on how to use the RUI Online Compiler recently release by RAKwireless. 

#### Account Creation and Log-in Interface

::: tip 📝 NOTE
To avoid errors in the firmware compiling using the RUI Online Compiler, it is best advised to use Google Chrome as your Web Browser as this was the browser our technical team used upon testing. If you have not installed the Google Chrome browser, kindly download and install it from **[here](https://www.google.com/chrome/)**.
:::

1. Using your recently installed Google Chrome Web Browser, open the link, [RUI Online Compiler](http://47.112.137.11:12090/#/user/login) and you should see the log-in interface same as in the image below.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/b1osq3zcjjisbeqhbw5v.png"
  width="80%"
  caption="RUI Online Compiler Log-in Window"
/>

2. If this is your first time doing this, kindly create an account by clicking through "**Create an account**" button.

3. A new window pops-up same as in the image below. You are asked to input your **e-mail address**,your chosen **password** and your **verification code** by clicking the "**Get Verification Code**" button.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/braswhitebuh33oaz3ns.png"
  width="80%"
  caption="RUI Online Compiler Sign-up Window"
/>

::: tip 📝 NOTE
Go to your e-mail and check the verification sent when you clicked the "**Get Verification Code**" button. Note that you are only given **120 seconds** to have the verification attached in the **Create Account** window.
:::

4. Once the three information, **e-mail address**, **password** and **verification code** are supplied, click the "**Create an account**" button in the bottom. Once creating an account is successful, you are then asked to log-on your credentials in the link attached in **Step 1**.

#### Selecting and uploading

After your successful sign-up and log-in done in the previous section, you should see the following page below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/sc05a2h4fxqgiuit8ltj.png"
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
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/berjqqxwurxifkoikdrb.png"
  width="100%"
  caption="Choosing your Customized .zip file in the RUI Online Compiler"
/>

Please note that, this .zip file can be made as the following pictures show as an example:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/bulgldidt55ohueksrcg.png"
  width="100%"
  caption="Sample files in the Customized Application .zip File"
/>

3. After choosing the correct .zip file on your chosen directory, press "**Open**" and proceed to the next section.

##### File Uploading

4. After choosing the corresponding .zip file from the previous section, press the "**Upload**" button as shown in the image below to begin the uploading process.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/dmxy8pph3jd6lzwh3l1z.png"
  width="100%"
  caption="RUI Online Compiler Uploading"
/>

5. A corresponding "**Upload Success**" notification then pops-up in your window once the uploading of the .zip file is successful same as with the image below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/tjkmvecfptby0ilwwqkc.png"
  width="100%"
  caption="RUI Online Compiler Uploading Success"
/>

##### Compiling

6. Once uploading is done, you can now start compiling your customized application by clicking the "**Compile**" button same as with the image below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/hyrhkcj18gz4tgccqwko.png"
  width="100%"
  caption="RUI Online Compiler Compiling"
/>

Corresponding logs also can be seen in the "**Compile log output**" monitor same with the image shown below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/hxjpzr1sv5nw0a5ipuhi.png"
  width="100%"
  caption="RUI Online Compiler Compiling Logs"
/>

7. After compiling successfully, a new **.zip file** which includes two files, one is "**compile log file**", the other is the "**final customized firmware**" same with the image shown below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/eckuj9mipbwefieupcpz.png"
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
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/rui-online-compiler/aca52o0ukf3kzcoriatp.png"
  width="60%"
  caption="Final Customized Firmware sample File"
/>

9. The **newly compiled .bin file** will then be burned into your device by following the steps in the [Upgrading the Firmware](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#upgrading-the-firmware) section.

### Interfacing with Arduino Boards

In this section, a set of instruction is written in detail on how to interface your RAK811 LPWAN Evaluation Board with [Arduino](https://www.arduino.cc/), which is an open-source electronics platform based on easy-to-use hardware and software.

#### Requirements:

- **RAK811 LPWAN** **Evaluation Board** (v1.1 or v1.2)
- Gateway in range for testing
- Arduino Mega 2560
- External USB-UART TTL Converter
- Jumper wires

#### Arduino Library Preparation

Make sure to follow all the steps in this section thoroughly or you will not be able to move on to the next sections. Discussed in here is the installation of the Arduino-RAK811 Library as well as the discussion of the included sample Arduino codes within it.

##### GitHub Repository Downloading

Uploaded in the RAKwireless official Github repository is the Arduino Library needed by this document. Kindly download the library through this [link](https://github.com/RAKWireless/WisNode-Arduino-Library).

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/vexsae4pqn4x4q4xjb3j.png"
  width="100%"
  caption="RAK811 LPWAN Evaluation Board Arduino Library Repository"
/>

##### Adding the Arduino RAK811 Library to Arduino IDE

1. Once the Arduino RAK811 Library zip is done downloading, unzip it and you should see these files in the extracted folder:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/cd0qcew7qxps6intp4mw.png"
  width="100%"
  caption="Items in the Extracted Arduino RAK811 Library Folder"
/>

2. Locate the Arduino Libraries folder in which the downloaded Arduino-RAK811 Library folder shall be pasted by navigating through `Documents>Arduino>libraries` same as in the image shown below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/qbursndkl9i49xm851b9.png"
  width="100%"
  caption="Arduino Libraries Folder Path"
/>

3. **Copy and Paste** the Arduino-RAK811 Library folder into the Arduino Libraries folder navigated in the previous step.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/u9ru5d9zwky5pa46sk5n.png"
  width="100%"
  caption="Arduino-RAK811-Library merged to the Arduino Local Libraries folder"
/>

4. To verify if the Arduino-RAK811 Library has been merged successfuly with the local Arduino libraries folder, open the Arduino IDE and navigating through `File>Examples>Arduino-RAK811-Library.`Shown in the examples that a **JoinNetworkOTAA** sample code is provided proving that the library was successfully merged.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/egvenp8w2m3eykmu5xdm.png"
  width="100%"
  caption="Examples of codes in the Arduino-RAK811-Library"
/>

##### Hex File Updating

On the Arduino-RAK811-Library contains the available functions, the user can refer to the **RAK811.h** file, which has a detailed note on the use of each function.

1. Using your preferred text editor, open the **RAK811.h hex file** included in the library. Within the codes are the different functionalities and settings used for Arduino boards. For this example, we will be using Sublime Text Editor.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/rnsjyqg91hbkx4hcuzmc.png"
  width="100%"
  caption="Contents of RAK811.h Hex File"
/>

2. Before compiling any Arduino code for RAK811 LPWAN Evaluation Board, user should also consider the **Serial RX and TX buffer size** by manually navigating through `C:\Program Files (x86)\Arduino\hardware\arduino\avr\cores\arduino` and open the **HardwareSerial.h** hex file.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/j3ccynesxgzp7oekcpsv.png"
  width="100%"
  caption="Editing the HardwareSerial.h Hex file for RX and TX Buffer Size"
/>

::: tip 📝 NOTE
Depending on the RAM size of the Arduino Board you are using, the RX and TX buffer size are recommended to be bigger.
:::

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/interfacing-with-arduino/buvmu1yh5joquqpp3otc.png"
  width="100%"
  caption="Recommended RX and TX Buffer Size"
/>

#### Hardware Interfacing

In this section, we will be using an Arduino MEGA 2560 and RAK811 LPWAN Evaluation Board. Follow the steps thoroughly; any negligence might end up damaging your hardwares.

::: tip 📝 NOTE
As of now, our RAK811 LPWAN Evaluation Board only works with Arduino Mega 2560. Watch out for our future revisions for you to interface it with other Arduino boards.
:::

1. To start with, we are going to differentiate the existing RAK811 LPWAN Evaluation Boards or as named in the boards as WisNode-LoRa®.

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/hardware-interfacing/zsznmbkn2pnfmpuido2s.png"
  width="100%"
  caption="Jumper Connection for both RAK811 LPWAN Evaluation Board v1.1 and v1.2"
/>

2. Follow the connections below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/hardware-interfacing/oeathvi6iddqykyzihqu.png"
  width="100%"
  caption="RAK811 LPWAN Evaluation Board to Arduino Mega 2560 connection."
/>

::: tip 📝 NOTE
The five wires are connected in the same way with WisNode v1.1 and WisNode v1.2.
:::

#### Firmware Flashing and Testing

##### RAK811 LPWAN Evaluation Board Bootloader and Firmware

Kindly look into the different sections on how to burn and update the bootloader and firmware of RAK811 LPWAN Evaluation board. Both the bootloader and firmware files can be downloaded [here](https://downloads.rakwireless.com/en/LoRa/WisNode/Firmware/).

- **Firmware**: [Upgrading the Firmware](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#upgrading-the-firmware)

##### Arduino Demo firmware

1. Open the "**JoinNetworkOTAA.ino**" by navigating through `File>Examples>Arduino-RAK811-Library` in the Arduino IDE.

2. Edit the **Device EUI**, **Application Key and Application EUI** in the "**JoinNetworkOTAA.ino**" which can be obtained in the [Connecting to The Things Network (TTN)](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#connecting-to-the-things-network-ttn) section.

3.Afterwhich, proceed to uploading the sketch by following the steps in the image below:

::: tip 📝 NOTE
Make sure to disconnect the connection between the Rx and Tx connection between the RAK811 LPWAN Evaluation Board and the Arduino Mega 2560. Not doing so will make the sketch uploading fail.
:::

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/firmware-flashing/jzx86mrtckrokxrumb8w.jpg"
  width="100%"
  caption="Arduino Mega 2560 Board and Port settings prior to Sketch Uploading."
/>

4. You can check the uploading logs shown in the red box in the image above to check whether it is successfully uploaded or not. If the sketch uploading fails, kindly look into each of the logs to address each issue.

##### Test LoRa® Node with LoRaWAN®

Using the "JoinNetworkOTAA.ino" sketch in the previous section, it should automatically connect to **TheThingsNetwork(TTN)** through the Gateway in range.

1. Setup and open the two Serial Ports, Arduino USB Port and the SoftwareSerial Port using the USB-UART TTL converter. Kindly reset the RAK811 LPWAN Evaluation Board and Serial logs must be shown same with the image below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/firmware-flashing/sxu06fbgafxyxhz3wcum.png"
  width="100%"
  caption="Serial Port View using USB-UART TTL SoftwareSerial Port (left) and Arduino USB Port (right)"
/>

In this section, you might be wondering why we are using two serial ports. As a default, the Arduino Mega 2560 has its own Serial Port which can be viewed through the Serial Monitor. In this port, AT Commands setup are written into the RAK811 LPWAN Evaluation Board for us to be able to connect to TheThingsNetwork(TTN). However, debug logs cannot be printed in the same port for it may interfere with the setup. Thus, a secondary Serial Port must be used as debug logs display using the SoftwareSerial Port shown in the USB-UART TTL converter COM Port.

2. With the successful Serial Logs shown in the image above, we shall then check the logs in the Application Data tab in TheThingsNetwork (TTN). If the connection is successful, received logs must be shown same with the image below:

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/firmware-flashing/a9dpjl7pfck2ho628eux.png"
  width="100%"
  caption="TTN logs in the Connection Attempt using Arduino Mega 2560"
/>

#### Arduino Connection Guides

This section serves as a reference only. Kindly follow the connection guides to avoid damage in your hardware interfaces.

##### RAK811 LPWAN Evaluation Board to Arduino Mega 2560

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/arduino-connection-guide/lrhmkmg4unzgzvasoyq5.jpg"
  width="100%"
  caption="RAK811 LPWAN Evalution Board Shield Mounted to Arduino Mega 2560"
/>

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/arduino-connection-guide/sild36h6ezwavieev8bu.png"
  width="100%"
  caption="RAK811 LPWAN Evaluation Board v1.1 and v1.2 Comparison"
/>

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/arduino-connection-guide/abm4izne8qh2fgcazisf.jpg"
  width="100%"
  caption="RAK811 LPWAN Evaluation Board to Arduino Mega 2560 Connection Notes"
/>

##### RAK811 LPWAN Evaluation Board to Arduino UNO

<rk-img
  src="/assets/images/wisduino/rak811-evaluation-board/quickstart/arduino-connection-guide/kq4lrlg96tdtahuxlg9u.jpg"
  width="100%"
  caption="RAK811 LPWAN Evaluation Board Mounted to Arduino UNO"
/>
