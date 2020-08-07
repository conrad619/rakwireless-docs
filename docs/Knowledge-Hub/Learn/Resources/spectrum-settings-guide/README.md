---
next: eu868-spectrum-settings-guide
---

# Frequency Band Spectrum Settings Guide

This is the LoRa® RF Radio unit. It integrated two **Semtech SX1257** front-end modules with the most popular LoRaWAN® Baseband chip, the **SX1301**. Because of the design of the concentrator module, there are two separate RX chains, which need to have the proper number of channels assigned in order for the module to function optimally. The chains are referred to as Radio 0 and Radio 1 in the Web Management Platform.

* **Radio 0**: can work in both TX and RX mode. It can have up to 5 channels assigned
* **Radio 1**: works solely in RX mode. It can also have up to 5 channels assigned.

The concentrator module supports up to 8 Multi-Spreading Factor Channels (Multi-SF), 1 Lora Standard Channel and 1 FSK Channel, that can be spread over the 2 Radios as long as the 5 channels/Radio rule is obeyed.