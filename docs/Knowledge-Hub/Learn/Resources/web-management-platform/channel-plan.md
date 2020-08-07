---
prev: network
next: lora-network
---

# Channel Plan

This is a very important section of the Web UI. Here you set the frequency of operation of the Gateway. It is these frequency channels that it will be monitoring and both receiving from and transmitting to LoRa® nodes.

- For your convenience, there is a drop-down list at the top of the page where you can choose one of several pre-set Regions. This will populate the Multi-SF LoRa® Channels with the mandatory channels (under the LoRa Alliance Regional Parameters).
- In case you want to use a custom set, you can enter a channel’s frequency (in MHz) in the text box and add it via the blue button. This applies to the Standard LoRa® Channel and FSK Channel as well (normally you would have one per Concentrator.
- You can also “**Switch to Advanced Mode**”, where you have more granular control per concentrator and per radio. (up to 2 concentrators and 2 radios per concentrator for up to 4 total radios).

:::tip 📝 NOTE
If you have 2 Concentrator modules as the Outdoor Gateways allow the maximum number of channels will be double (16). These are all grouped together if you configure in Standard Mode and split in 8 per concentrator in Advanced Mode.
:::

<rk-img
  src="/assets/images/user-manual/web-management-platform/13.channel-plan-standard.jpg"
  width="100%"
  figure-number="1"
  caption="Channel Plan – Standard Mode"
/>


<rk-img
  src="/assets/images/user-manual/web-management-platform/14.channel-plan-advanced.jpg"
  width="100%"
  figure-number="2"
  caption="Channel Plan – Advanced Mode"
/>
