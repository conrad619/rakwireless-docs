---
static_root: /assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa
prev: /wisnode/rak7204/quickstart/connecting-to-ttn/
next: /wisnode/rak7204/quickstart/connecting-to-ttn/ttn-abp.html
---

# OTAA Mode

When setting up a new device in TTN it defaults to OTAA mode. For configuring it you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  :src="`${$frontmatter.static_root}/pyqpw2ihstlgeqv68pbs.png`"
  width="100%"
  figure-number="1"
  caption="Device OTAA Parameters"
/>

Now, let us configure the RAK7204 to work in OTAA mode in the EU868 band, as an example.

:::tip 📝 NOTE:
The default LoRa® working mode for the RAK7204 is LoRaWAN® 1.0.2, while the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.
:::

1. Set mode to **OTAA**, device class to **Class A** and your LoRaWAN® region to your correct frequency band, with the following set of commands below. Remember to replace **XXX** with the your LoRaWAN® region, check [here](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for your frequency plan.

```
at+set_config=lora:join_mode:0
```

```
at+set_config=lora:class:0
```

```
at+set_config=lora:region:XXX
```

<rk-img
  :src="`${$frontmatter.static_root}/okwyucipaed3fnrarkso.png`"
  width="100%"
  figure-number="2"
  caption="Setting up the RAK7204 operation mode"
/>

2. Now that the modes are set, enter the parameters: : **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

```
at+set_config=lora:dev_eui:XXXX
```

```
at+set_config=lora:app_eui:XXXX
```

```
at+set_config=lora:app_key:XXXX
```

<rk-img
  :src="`${$frontmatter.static_root}/jttmbmkhm0ac0duvap94.png`"
  width="100%"
  figure-number="3"
  caption="Setting up the RAK7204 OTAA parameters"
/>

- You should end up with a window as the one in **Figure 3** above with **a series of OK messages**.

3. Finally, execute the join command:

```
at+join
```

<rk-img
  :src="`${$frontmatter.static_root}/eevf8jgjt1p48i17vugw.png`"
  width="100%"
  figure-number="4"
  caption="Join Command"
/>

4. You can test the connection by sending an uplink frame. Use the following for example:

```
at+send=lora:1:12345678
```

<rk-img
  :src="`${$frontmatter.static_root}/tsyls5mfkzctes7lh1jg.png`"
  width="100%"
  figure-number="5"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in Figure 6, than you are all set!

:::tip 📝 NOTE:
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
  :src="`${$frontmatter.static_root}/tj6whmvvp8hwldemo31b.png`"
  width="100%"
  figure-number="6"
  caption="Sending Data to TTN from RAK7204"
/>
