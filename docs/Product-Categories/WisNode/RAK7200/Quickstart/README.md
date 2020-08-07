---
prev: /Product-Categories/WisNode/RAK7200/Overview/
next: false
---

# Quick Start Guide

## Prerequisites

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/quick-start-guide/ldehq53t7ujcp5awqlgj.jpg"
  width="50%"
  caption="RAK7200 WisNode Track Lite"
/>

### What do you need?

Before going through each and every step in the installation guide of the RAK7200 WisNode Track Lite, make sure to prepare the necessary items listed below:

1. **RAK7200 WisNode Track Lite**
2. Micro USB Cable
3. Gateway in Range, for Testing
4. Windows PC

::: tip 📝 NOTE
The bootloader of the RAK7200 WisNode Track Lite is already pre-installed upon manufacturing so flashing the bootloader is not necessary for you to perform. If you find that the bootloader of your RAK7200 WisNode Track Lite damaged, kindly contact our support though our [RAKwireless forum](https://forum.rakwireless.com/). However, if you want to upgrade the firmware of the device, please refer to the section below:

1. [Firmware Upgrading](/Product-Categories/WisNode/RAK7200/Quickstart/#upgrading-the-firmware)
:::

### What's Included in the Package

1. RAK7200 WisNode Track Lite
2. Rubberized enclosure
3. Micro USB cable

## Product Configuration

### Interfacing with RAK7200 WisNode Track Lite

In order for you to be able to interface with the RAK7200 WisNode Track Lite with your Windows Machine, you need to download the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

- Using a standard **Micro - USB Cable**, connect your RAK7200 WisNode Track Lite to your computer.

::: tip 📝 NOTE
If this is your first time to connect your RAK7200 WisNode Track Lite to your computer, it should automatically download the CH340 driver in order for them to communicate properly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step.
:::

- Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for **Other Devices.**

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/interfacing-with-rak7200/ojnphsuvfgrvwzd4dvu8.png"
  width="100%"
  caption="Missing Driver for the RAK811 LPWAN Evaluation Board"
/>

- Under "**Other devices**" drop down list, an unknown **USB2.0-Serial** driver must appear. Right click into it and choose "**Search automaticaly for updated driver software**". Again, before doing so, make sure to have an internet access or it will fail.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/interfacing-with-rak7200/ejfeqklgjwmjjky5ewag.png"
  width="100%"
  caption="Automatic Driver Installation via Internet"
/>

- Wait for it to automatically download and install the missing driver. Once installation is done, "**USB-SERIAL CH340**" must appear in the **Ports (COM & LPT)** drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB-SERIAL CH340 driver is **COM4**.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/interfacing-with-rak7200/tfl6jmjcsapgpmagthvj.png"
  width="100%"
  caption="USB-SERIAL CH340 Driver Successfully Installed"
/>

::: tip 📝 NOTE
In case the driver is still not installed upon doing the previous steps, kindly download the driver manually through this [link](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/).
:::

- Let us now test if your RAK7200 WisNode Track Lite can now communicate with the RAK Serial Port Tool. Connect with the RAK Serial Port Tool using the parameters listed below and click "**Open**".

1. **COM**: Choose the COM Port associated with the USB-SERIAL CH340 from the previous step. For this tutorial, the COM Port is COM4.
2. **Baud Rate**: **115200** bps

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/interfacing-with-rak7200/q5ubbty2twyeocvnmttc.png"
  width="100%"
  caption="Connecting to the RAK Serial Port Tool"
/>

- To verify connectivity, let's try sending AT+Commands. In the RAK Serial Port Tool, there are built-in AT+Commands within it at the right side. Try sending the code below to check the firmware version of your RAK7200 WisNode Track Lite. If connection is successful, in the monitor panel at the left, the firmware version should appear same with the image shown below:

```sh
at+version
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/interfacing-with-rak7200/px93o4onb4kxmiwvsumf.png"
  width="100%"
  caption="AT+Command Sample Serial Communication Test"
/>

Congratulations! :tada: You have just successfully interfaced your RAK7200 WisNode Track Lite with your computer! Go on to the next sections to fully configure your RAK7200 WisNode Track Lite.

### Connecting to The Things Network

In this section, we will be connecting the RAK7200 WisNode Track Lite to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/y9wl61hptkxuohn7qfd5.jpg"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/oy4hvfhzyjwp7pn57hyi.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/k1o7uxmkq2n4ymqlkgfi.jpg"
  width="100%"
  caption="Application Page"
/>

#### Adding An Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/gdntv6q1zgljk1oeoea1.png"
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
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/ihs7ykl9byiugn0pettn.png"
  width="100%"
  caption="Application Overview"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/ngm2lhuq6ni0qld0cxr5.jpg"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device**"

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/gmd2swsxj8so6bwsoe9d.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK7200 WisNode Track Lite in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-ttn/yzjrzfna6eykkikg7p8s.png"
  width="100%"
  caption="Device Overview"
/>

#### OTAA Mode

When setting up a new device in TTN it defaults to OTAA mode. For configuring it, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-otaa-mode/nt8drr212njdt10py0db.png"
  width="100%"
  caption="Device OTAA Parameters"
/>

Now, let's join in OTAA Mode and set your device to AU915 Frequency for example.

::: tip 📝 NOTE
The default LoRa® work mode is LoRaWAN® 1.0.2, the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.For the full list of AT Commands, head on to [AT Commands for RAK7200 WisNode Track Lite](/Product-Categories/WisNode/RAK7200/Quickstart/#at-commands-for-rak7200-wisnode-track-lite).
:::

1. Set mode to **OTAA** and LoRa® device class to **Class A**, with the following set of commands:

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config=lora:class:0
```

```sh
at+set_config=lora:region:AU915
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-otaa-mode/bnax7ppemxgzwzwzibmw.jpg"
  width="60%"
  caption="Setting up the RAK7200 WisNode Track Lite Operation Mode"
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
  src="/assets/images/wisnode/rak7200/quickstart/ttn-otaa-mode/u6bvilfgirchkipjzcvm.jpg"
  width="60%"
  caption="Setting up the RAK7200 WisNode Track Lite OTAA Parameters"
/>

- You should end up with a window as the one in **Figure 3** above (**a series of OK messages**).

3. Finally execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-otaa-mode/fbrritkvpvvzvl69xosg.jpg"
  width="60%"
  caption="Join Command"
/>

4. Go to the **Device Overview** in the TTN and you can see that the status is now **Green (Online)**. Now your RAK7200 is transmitting sensor data to TTN. You can see it in its raw form in TTN, by going to the Data tab:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-otaa-mode/qw27owcgw812gsf2bcc1.png"
  width="100%"
  caption="Device Application Data"
/>

#### ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.

2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/ccjbidnd8e8hqvnjvc9g.png"
  width="100%"
  caption="Switching to ABP mode"
/>

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in Figure 2.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/dann1wr9tchabmot7dqe.png"
  width="100%"
  caption="ABP Parameters Screen"
/>

4. Now we need to update the RAK7200 WisNode Track Lite configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):

```sh
at+set_config=lora:region:EU868
```

As you can see in **Figure 3**, as we were in the same region (EU868), there was no change.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/zarmjkdjh4o6fisc0rfq.jpg"
  width="100%"
  caption="Region Setup"
/>

5. Change the mode to **ABP** with the command:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/t5mjuy5rxxolrtiin8tt.jpg"
  width="100%"
  caption="Join Mode Setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"X"** with the corresponding parameter value for your particular case (Figure 2 for reference of the parameters):

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
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/tacqtzuayki77cruuwqc.jpg"
  width="100%"
  caption="Setting up the RAK7200 WisNode Track Lite ABP Parameters"
/>

7. Finally execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/gc45ctfnhpmyurhjw7uj.jpg"
  width="100%"
  caption="Join Command"
/>

8. You can test the connection by sending an uplink frame. Use the following for example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/yzu8x3arcigsctbjjvws.jpg"
  width="100%"
  caption="Sending an Uplink Frame"
/>

If you get a response in your TTN live data feed as in **Figure 8**, than you are all set!

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/ttn-abp-mode/sxccujhjtfgxjkthyvy6.png"
  width="100%"
  caption="Sending Data to TTN from RAK7200 WisNode Track Lite"
/>

### Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK7200 WisNode Track Lite to connect with ChirpStack by following this steps:

::: tip 📝 NOTE
In this section, it is an assumed that you have already connected your Gateway with TTN correctly. If not, please have a look at the document of RAK Gateway.
:::

OK! Let’s get started!

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more item in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/mhxpxv152iy2zc2h7jyv.png"
  width="100%"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**"

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/aehocrv1kdgmfw5i9ncm.png"
  width="100%"
  caption="Creating the Application"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/shwsznjugdm6epmh5r2o.png"
  width="100%"
  caption="Applications page in ChirpStack"
/>

4. Click the new Item name "RAKwireless_Test_Application"

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/eh9bkvu5uwlrn10jojvr.png"
  width="100%"
  caption="RAK7200 WisNode Track Lite Application"
/>

5. **Add** a Node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/znvzmk7sz4vrhgqmfx4x.png"
  width="100%"
  caption="Adding a Node Device"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/mphgt1imzsn2pf67bhnq.png"
  width="100%"
  caption="Filling the Device Parameters"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/connecting-to-chirpstack/doqbh3y9oiyjxu6ixjwn.png"
  width="100%"
  caption="Generating Device EUI Automatically"
/>

::: tip 📝 NOTE
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::

#### OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/kawrl7csak1rbgnaiz1z.png"
  width="100%"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/phw8fn5ram1ubek2lvy8.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK7200 WisNode Track Lite as "dev_eui" is the same in the image highlighted below

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/alsltdv3wmn3p36miqza.png"
  width="100%"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/co3zrd6p0w04agsyl5jw.png"
  width="100%"
  caption="Application Key LoRaWAN®"
/>

::: tip 📝 NOTE
The Application EUI which will be set into RAK7200 WisNode Track Lite as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK7200 WisNode Track Lite by using **AT commands**. To do this, connect your RAK7200 WisNode Track Lite to a PC, power it on and open **RAK Serial Port Tool** on your computer.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/ah9sepdjjxtslo8od3ia.jpg"
  width="60%"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK811 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa® join mode to **OTAA** and LoRa® class to **Class A** by typing the AT commands shown in the picture below.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/ivwhtrkjbeohwhwjykhl.jpg"
  width="100%"
  caption="Setting of LoRaWAN® mode and class"
/>

6. Type the following AT command to set your respective:**Frequency/Region , Device EUI, Application EUI and Application Key**:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/p01bw0hgxxgk4rpm5g1z.jpg"
  width="100%"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/pphvpa2fnsvazlrsryiz.jpg"
  width="100%"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/wmzhsi9rjkdkpykwdfyx.jpg"
  width="60%"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-otaa-mode/ee75imnp4eeilgyx15ju.png"
  width="100%"
  caption="Join Request of the Device in the ChirpStack"
/>

#### ABP Mode

1. If you select “**Device Profile ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/aonljar59ifcml3havu9.png"
  width="100%"
  caption="Switching to ABP Mode"
/>

2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/pknfpadcpuhqunctcga8.png"
  width="100%"
  caption="ABP Parameters"
/>

3. Next, let’s use these parameters to set RAK7200 WisNode Track Lite by using **AT command**.

4. If the join mode is not in ABP, just set the LoRa® join mode to **ABP** and LoRa® class to **Class A** by typing the following commands in RAK Serial Port Tool

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/b4vtsesbjmk5bxdjljaa.jpg"
  width="100%"
  caption="Setting of LoRaWAN® Mode and Class"
/>

5. Type the following AT command to set your respective: **Frequency/Region**, **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/hhvjx9shtfon4bnrh4x1.jpg"
  width="100%"
  caption="Setting of Frequency and Device Address"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/bcslebohju0ibvhcdyms.jpg"
  width="100%"
  caption="Setting of Device EUI and Network Key"
/>

- Then Join in ABP Mode

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/vzv9ljxqw7ayfbsyok6y.jpg"
  width="60%"
  caption="Joining of ABP"
/>

You can see the data which is just sent from RAK7200 WisNode Track Lite on ChirpStack page:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/chirpstack-abp-mode/catrg6l4uscykpdy32rz.png"
  width="100%"
  caption=" Message Status in ChirpStack"
/>

### Decoding Sensor Data on ChirpStack and TTN

#### Analyzing the Data from RAK7200 WisNode Track Lite

In the previous section, we have successfully sent some raw data from our RAK7200 WisNode Track Lite to The Things Network, but the problem is that you can't really see the actual sensor data from the payload. In this section , we will solve that and understand what each payload means.

Let's take this for example:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/jrd6gnoqaf6eeif4ngky.jpg"
  width="100%"
  caption="Sample Payload"
/>

For this example, the payload is : **01 88 05 37 82 10 9D 6A 00 B3 42 08 02 01 66 03 71 00 06 FE 66 03 B1 05 86 FF DD 00 CC 00 04 09 02 CD BA 0A 02 F3 67 0B 02 17 CA**

Now lets analyze each data , which is in Hexadecimal Format. We will be using the data mentioned above as an example. We will convert the Hexadecimal Data into Decimal Data using this [converter ](https://www.rapidtables.com/convert/number/hex-to-decimal.html?x=FF)in order to be able to understand it.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/hp2ugrvyfdqytyrvmi28.jpg"
  width="50%"
  caption="Hex to Decimal Converter"
/>

##### 1. GPS Data

Example Data: **01 88 05 37 82 10 9D 6A [00 B3 42](00 B3 42)**

| **Parameter** | **Hex Data**           | **Decimal Equivalent** | **Multiplier**      | **True Value** |
| ------------- | ---------------------- | ---------------------- | ------------------- | -------------- |
| **Data Flag** | 01 88                  |                        |                     |                |
| **Latitude**  | 05 37 82               | 341890                 | 0.0001 ° Signed MSB | 34.189°        |
| **Longitude** | 10 9D 6A               | 1088874                | 0.0001 ° Signed MSB | 108.8874°      |
| **Altitude**  | \[00 B3 42\](00 B3 42) | 45890                  | 0.01 m Signed MSB   | 458.9m         |

##### 2. Battery Voltage

Example Data: : **08 02 01 66**

| **Parameter**       | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------------- | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag**       | 08 02        |                        |                |                |
| **Battery Voltage** | 01 66        | 358                    | 0.01 Signed    | 3.58 V         |

##### 3. Acceleration Data

Example Data: **03 71 00 06 FE 66 03 B1**

| **Parameter**      | **Hex Data** | **Decimal Equivalent** | **Multiplier**     | **True Value** |
| ------------------ | ------------ | ---------------------- | ------------------ | -------------- |
| **Data Flag**      | 03 71        |                        |                    |                |
| **Acceleration X** | 00 06        | 6                      | 0.001 g Signed MSB | 0.006g         |
| **Acceleration Y** | FE 66        | -410                   | 0.001 g Signed MSB | -0.41g         |
| **Acceleration Z** | 03 B1        | 945                    | 0.001 g Signed MSB | 0.945g         |

##### 4. Gyroscope Data

Example Data: **05 86 FF DD 00 CC 00 04**

| **Parameter**   | **Hex Data** | **Decimal Equivalent** | **Multiplier**      | **True Value** |
| --------------- | ------------ | ---------------------- | ------------------- | -------------- |
| **Data Flag**   | 05 86        |                        |                     |                |
| **Gyroscope X** | FF DD        | -35                    | 0.01 °/s Signed MSB | \- 0.35 °/s    |
| **Gyroscope Y** | 00 CC        | 204                    | 0.01 °/s Signed MSB | 2.04 °/s       |
| **Gyroscope Z** | 00 04        | 4                      | 0.01 °/s Signed MSB | 0.04 °/s       |

##### 5. Magnetometer Data

Example Data: **09 02 CD BA 0A 02 F3 67 0B 02 17 CA**

| **Parameter**               | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| --------------------------- | ------------ | ---------------------- | -------------- | -------------- |
| **Magnetometer X LPP flag** | 09 02        |                        |                |                |
| **Magnetometer X**          | CD BA        | -12870                 | 0.01 Signed    | -128.7 μT      |
| **Magnetometer Y LPP flag** | 0A 02        |                        |                |                |
| **Magnetometer Y**          | F3 67        | -3225                  | 0.01 Signed    | -32.25 μT      |
| **Magnetometer Z LPP flag** | 0B 02        |                        |                |                |
| **Magnetometer Z**          | 17 CA        | 6090                   | 0.01 Signed    | 60.9 μT        |

#### Decoding Sensor Data in TTN

##### Input Decoding Function in TTN

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_TTN.js)**.

2. From your TTN console, go to application page and click the "**Payload Formats**" tab as shown in the image below.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/sldtdovigclybyfohpcb.jpg"
  width="100%"
  caption="Payload Format at TTN Application Page"
/>

3. Next, select "**Payload Format**" as "**Custom**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/f4iojgdt1y7tyjhs00ir.jpg"
  width="90%"
  caption="Inputting the Decoder Function"
/>

##### Testing in Real System in TTN

After gateway and node go online, click the uplink data record from the application data tab to check the decode status. From the image below, we can see the data decoded successfully in TTN.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/wng5840n8huymngaeg2a.jpg"
  width="90%"
  caption="Uplink Decoded Data"
/>

#### Decoding Sensor Data in ChirpStack

##### Input Decoding Function in ChirpStack

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_ChirpStack.js)**.

2. From to your ChirpStack, go to application page and click the "**APPLICATION CONFIGURATION**" tab as shown in the image below.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/zjrvbx39f2hb1tzsan9a.jpg"
  width="100%"
  caption="Application Configuration Tab"
/>

3. Next, select "**Payload codec**" as "**Custom JavaScript codec functions**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/dxyccziqcihhez5ipyvp.jpg"
  width="85%"
  caption="Decoded Function in Chirpstack"
/>

4. Then, click ‘**UPDATE APPLICATION**’ button to save decoding function.

##### Testing in Real System in ChirpStack

After gateway and node go online, click the uplink data record from the application data at "**LIVE DEVICE DATA**" tab to check the decode status. From the image below, we can see the data decoded successfully in ChirpStack.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/decoding-sensor-data/f46qt62fzsphhwqnbjft.jpg"
  width="85%"
  caption="Decode Status in ChirpStack"
/>

## Miscellaneous

### AT Commands for RAK7200 WisNode Track Lite

You can configure your LPWAN Tracker by sending AT Commands via a Serial port tool running on your PC. The following list shows the AT Commands that you can use:

| **AT Command**                               | **Description**                                                                                                                                                                                                                                                                             |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+help`                                      | Get all available AT Commands                                                                                                                                                                                                                                                               |
| `at+version`                                   | Get the current firmware version number                                                                                                                                                                                                                                                     |
| `at+get_config=device:status`                  | Get all information about the device’s hardware components and their current status.                                                                                                                                                                                                        |
| `at+set_config=device:restart`                 | Restart the Device                                                                                                                                                                                                                                                                          |
| `at+set_config=device:boot`                    | Set the device in Boot mode                                                                                                                                                                                                                                                                 |
| `at+run`                                       | Stop Boot Mode and run as normal. Valid only when the device works in boot mode.                                                                                                                                                                                                            |
| `at+set_config=device:sleep:X`             | After Setting, the device will go to sleep mode or wake up immediately <br>• **0 -** Wake Up <br>• **1 -** Sleep                                                                                                                                                                            |
| `at+join`                                      | Start the join procedure for the LoRaWAN® network                                                                                                                                                                                                                                           |
| `at+send=lora:X:Y`                     | Send an uplink with a custom payload: <br>• **X** - LoRa® Frame Port <br>• **Y** - The data which you want to send. (Length limit is 50 bytes and the data must be in Hex Format)                                                                                                           |
| `at+set_config=lora:work_mode:X`          | Set the Working Mode: <br>• **X** - **0**: LoRaWAN®, **1**: LoRaP2P, **2**: Test Mode.                                                                                                                                                                                                      |
| `at+set_config=lora:join_mode:X`          | Set the Join Mode: <br>• **X** - **0**: OTAA, **1**: ABP                                                                                                                                                                                                                                    |
| `at+set_config=lora:class:X`              | Set the Class for LoRa®. <br>• **X** - **0**: Class A, **1**: Class B, **2**: Class C                                                                                                                                                                                                       |
| `at+set_config=lora:region:XXX`           | Set the Region for LoRa® **XXX -** one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.                                                                                                                                                                |
| `at+set_config=lora:confirm:X`             | Set the type of messages which will be sent out through LoRa®: <br>• **X** - **0**: unconfirm, **1**: confirm                                                                                                                                                                               |
| `at+set_config=lora:dev_eui:XXXX`        | Set the device EUI for OTAA. <br>• **XXXX** - the device EUI.                                                                                                                                                                                                                               |
| `at+set_config=lora:app_eui:XXXX`        | Set the application EUI for OTAA. <br>• **XXXX -** the application EUI.                                                                                                                                                                                                                     |
| `at+set_config=lora:app_key:XXXX`         | Set the application key for OTAA. <br>• **XXXX -** the application key.                                                                                                                                                                                                                     |
| `at+set_config=lora:dev_addr:XXXX`        | Set the device address for ABP. <br>• **XXXX -** the device address.                                                                                                                                                                                                                        |
| `at+set_config=lora:nwks_key:XXXX`         | Set the network session key for ABP. <br>• **XXXX** - the network session key.                                                                                                                                                                                                              |
| `at+set_config=lora:apps_key:XXXX`        | Set the application session key for ABP. <br>• **XXXX -** the application session key.                                                                                                                                                                                                      |
| `at+set_config=lora:ch_mask:X:Y`       | Turn a certain channel on/off <br>• **X** - The Channel Number you want to toggle. You can check the channel number using the command : `at+get_config=lora:channel` <br>• **Y** - **0**: off, **1**: on                                                                                      |
| `at+set_config=lora:dr:X`                  | Set the DR of LoRa® Node <br>• **X** - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN® 1.0.2 specification.                                                                                                                                 |
| `at+set_config=lora:tx_power:X`            | Set the TX Power Level <br>• **X** - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at [LoRaWAN® 1.0.2 region specification](https://github.com/RAKWireless/Update-File/blob/master/LoRaWANRegionalParametersv1.0.2.pdf) |
| `at+set_config=lora:send_interval:X:Y` | Set the time interval for sending data <br>• **X** - Enable/disable sending data in intervals. **0**: the device will not send data automatically, **1**: the device will send data every Y seconds. <br>• **Y** - Interval time in seconds. This parameter is only valid if X is set to 1. |
| `at+get_config=lora:status`                    | It will return all of the current information of LoRa®, except the LoRa® Channel                                                                                                                                                                                                            |
| `at+get_config=lora:channel `                  | It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly                                                                                                                                                             |
| `at+set_config=device:gps:X`               | Turn on or turn off GPS <br>• **X** - **0**: close, **1**: open, **2**: sleep, **3**: standby                                                                                                                                                                                               |
| `at+set_config=device:gps_timeout:X`       | Set the timeout of searching GPS satellite <br>• **X** - Time in seconds                                                                                                                                                                                                                    |

### Burning the Bootloader

You can burn the bootloader on your RAK7200 WisNode Track Lite by following the steps below:

1. Download and Install the [**STM32CubeProgrammer**](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html#overview) Software from STMicroelectronics on your Windows PC.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/wm3z5nau3zpemcfviq0h.png"
  width="100%"
  caption="STM32CubeProg Download Page"
/>

2. Plug in the provided Micro-USB cable into the RAK7200 WisNode Track Lite and insert it in your PC. We need to set the RAK7200 WisNode Track Lite first to work in **Boot Mode.** Refer to Figure 2 below and do the following: Hold down the BOOT0 Button, then press the Reset Button for a couple of seconds. Release the Reset and the BOOT0 Button.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/b1horbt3p40hmvnuxqed.jpg"
  width="80%"
  caption="RAK7200 WisNode Track Lite Buttons and USB Interface"
/>

3. Open the STM32CubeProgrammer Software and Select UART type.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/aekfryuujx4mig7hfwua.jpg"
  width="100%"
  caption="STM32CubeProgrammer Interface"
/>

- Choose the appropriate port number in the **COM Port** field. Open the [Interfacing with RAK7200 WisNode Track Lite](/Product-Categories/WisNode/RAK7200/Quickstart/#interfacing-with-rak7200-wisnode-track-lite) section to check the appropritate COM Port to be used for the demonstration.
- Set the Baud Rate to 115200, and the Parity to Even as seen in **Figure 3** then Press **Connect.**

If you didn't properly set your RAK7200 WisNode Track Lite to work in BOOT Mode, you will see the following information in the Log Section of the Software:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/pthfpwcme7kv7fk8vdic.jpg"
  width="100%"
  caption="Error - Device not in Boot Mode"
/>

- If this happens, go back to the section above and set your RAK7200 WisNode Track Lite to work in **Boot Mode** again.
- If all works well, you will then see the following log:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/xwcazjqx9mfmqvrr3apr.jpg"
  width="100%"
  caption="Success - Working in Boot Mode"
/>

4. Now that you have successfully connected your RAK7200 WisNode Track Lite to the STM32CubeProgrammer Tool, let's burn the Bootloader into the RAK7200 WisNode Track Lite.

- Download the Bootloader for the RAK7200 WisNode Track Lite [**here**](https://downloads.rakwireless.com/en/LoRa/RAK7200-Tracker/Firmware/).
- In the STM32CubeProgrammer, Click the "**Erase Chip**" button to erase all the data on RAK7200 WisNode Track Lite:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/o8jcjqkwzlv5ukqbrpg9.jpg"
  width="100%"
  caption="Erase Chip"
/>

- Click "**Open File**" and select the correct Bootloader file that you have just downloaded.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/f8r7owhtv3psucvhtejc.jpg"
  width="100%"
  caption="Open the Firmware File"
/>

- Click the "**Download**" Button to start the burning process:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/qzhcdcluajgue2hsl7hb.jpg"
  width="100%"
  caption="Uploading the Bootloader"
/>

- After a couple of seconds, you will see the following window telling that you have successfully burned the Bootloader to your RAK7200 WisNode Track Lite!

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/burning-the-bootloader/yxjlq9zs9ztlugceqnfd.jpg"
  width="100%"
  caption="Success Upgrade of the Firmware"
/>

- “**Disconnect**” and close the STM32CubeProgrammer tool.

### Upgrading the Firmware

If the firmware version of your **RAK7200 WisNode Track Lite** is newer than V3.0.0.0 or you have just burned the bootloader into the board according to the **Burning the Bootloader** section, proceed to Step 2.

1. In case you have not just burned the bootloader, as instructed in the previous section you need to manually go into **boot mode**. Open and download the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/WisTrio-LoRa-RAK5205/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip). Connect your board via the USB interface and enter the following **AT command**

```sh
at+set_config=device:boot
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/upgrading-the-firmware/ztbivhcsnzfbso1czs4r.jpg"
  width="100%"
  caption="Entering Boot Mode"
/>

2. Download the **RAK Upgrade Tool** from the RAKwireless website [here](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip) then, open the tool. Again, don't forget to choose the correct port! Open the [Interfacing with RAK7200 WisNode Track Lite](/Product-Categories/WisNode/RAK7200/Quickstart/#interfacing-with-rak7200-wisnode-track-lite) to know the appropriate COM Port used.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/upgrading-the-firmware/wgif92xy3kpypvwj78p2.jpg"
  width="90%"
  caption="RAK Upgrade Tool"
/>

3. Download the latest RAK7200 WisNode Track Lite Firmware **[here](https://downloads.rakwireless.com/en/LoRa/RAK7200-Tracker/Firmware/)**. Click “**Choose File**” and choose the firmware you have just downloaded. Make sure you choose the one for your particular band:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/upgrading-the-firmware/s1dr3hct65lnxow3cequ.jpg"
  width="90%"
  caption="Choosing the Correct Firmware file"
/>

4. Click “**Start**” to upload the Firmware, this may take a minute:

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/upgrading-the-firmware/vx4irgqjudaszyizfebc.jpg"
  width="90%"
  caption="Firmware Upgrading in Process"
/>

5. You should see something like the image in **Figure 5**, if everything went well.

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/upgrading-the-firmware/ocithbe0at1h3augu9yo.jpg"
  width="90%"
  caption=" Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **and proceed to the next section.**

#### Testing the Installed Firmware

7. In order for you to check if you have successfully installed the firmware on your RAK7200 WisNode Track Lite, open the Serial Port tool again. Press the "Reset button" or type the command below. If everything works perfectly, you should see the following message below:

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wisnode/rak7200/quickstart/upgrading-the-firmware/rbw7qdu20f4yybdks7di.jpg"
  width="100%"
  caption=" Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

You can also configure your RAK7200 WisNode Track Lite using the available AT Commands listed in the [AT Commands for RAK7200 WisNode Track Lite](/Product-Categories/WisNode/RAK7200/Quickstart/#at-commands-for-rak7200-wisnode-track-lite) section.