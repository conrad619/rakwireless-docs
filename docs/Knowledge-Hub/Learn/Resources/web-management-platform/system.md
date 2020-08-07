---
prev: services
next: false
---

# System

## 1. System

This is the section where you configure general device parameters.

<rk-img
  src="/assets/images/user-manual/web-management-platform/42.system-tab.jpg"
  width="100%"
  figure-number="1"
  caption="System Tab"
/>


- **General Settings**: The system time is displayed here. Additionally, you can edit the Host Name and select the Time zone. Another way to get the correct time is to use Timing Synchronization. You can Enable NTP client mode, enable NTP server and provide server candidate URLs.

:::tip 📝 NOTE
Time Synchronization tab is displayed in all System sub-menus.
:::

<rk-img
  src="/assets/images/user-manual/web-management-platform/43.general-settings.jpg"
  width="100%"
  figure-number="2"
  caption="System – General Settings"
/>

- **Logging**: In case you want to keep a log of system events you can configure how this is done here. You can set the Buffer size, provide the IP Address and port of an External log server, and set the Log Level.

<rk-img
  src="/assets/images/user-manual/web-management-platform/44.logging.jpg"
  width="100%"
  figure-number="3"
  caption="System – Logging"
/>

- **Language**: By default, this is in Auto (English), however you can choose from several options including German, Spanish, Russian, etc.

<rk-img
  src="/assets/images/user-manual/web-management-platform/45.language.jpg"
  width="100%"
  figure-number="4"
  caption="System – Language"
/>

### 2. Administration

This is where you change the administration password of the device.

<rk-img
  src="/assets/images/user-manual/web-management-platform/46.admin-tab.jpg"
  width="100%"
  figure-number="5"
  caption="Administration Tab"
/>

### 3. License

This is the status of your license. You can see the Type, Expiration date, Number of Supported Nodes, and the Number of External Gateways Supported. There is a field to ender the License data in case you are upgrading. All Gateways include a free with the parameters as in Figure 24 in the [LoRa Network](lora-network) section.

<rk-img
  src="/assets/images/user-manual/web-management-platform/47.license-tab.jpg"
  width="100%"
  figure-number="6"
  caption="License Tab"
/>

### 4. Backup / Flash Firmware

There are a number of actions that this portion of the Firmware allows the user to perform. It is recommended you make regular backups and refresh the firmware when there is a new release in order to assure optimal performance.

<rk-img
  src="/assets/images/user-manual/web-management-platform/48.system-update.jpg"
  width="100%"
  figure-number="7"
  caption="Backup, reset and firmware update"
/>

- **Generate archive**: Downloads an archive of the current configuration
- **Perform reset**: Resets the Gateway to the default settings
- **Restore**: You can upload a previously generated archive to restore the configuration settings at the time of its making
- **Flash new firmware**: Update the firmware by flashing a bin file. Use the button to select the location of the new firmware file and the blue button to initiate the flashing process. There is a tick box to toggle the option of keeping the current settings of the gateway


:::tip 📝 NOTE
"The **Keep Settings** check box is selected by default, as unchecking it will results in having a Gateway with stock settings after the firmware update."
:::


### 5. Reboot

Reboots the gateway. All unsaved changes will be discarded. This is not a reset in any way and only power cycles the device. All configuration settings will be left intact.

<rk-img
  src="/assets/images/user-manual/web-management-platform/49.reboot.jpg"
  width="100%"
  figure-number="8"
  caption="System reboot"
/>

### 6. File Browser

This gives you access to the files in the **root** partition.


<rk-img
  src="/assets/images/user-manual/web-management-platform/50.file-browser.jpg"
  width="100%"
  figure-number="9"
  caption="File Browser"
/>



