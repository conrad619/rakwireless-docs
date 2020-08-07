---
prev: openvpn-management-client-setup
next: false
---

# OpenVPN client Set-up on LoRa gateway

---

The procedure for generating the keys for the gateway is the same as the one for the Management PC, with the exception of a different Client name.

:::tip 📝 NOTE
You can go through Section 1 and 2 of OpenVPN Management Client Set-up again, and do the same procedure. Don't forget to replace the “**management**” name used for the Client with the one for the Gateway.
- Used: **rak7258-001**.
:::

Once the certificates are assembled into a single file, you need to import the contents into the OpenVPN client section of your Gateway.

1. Log into the Gateway via the Web UI (**locally**).

* To access the WEB UI, make sure you still have local network access to your Gateway and connect to it.

* In the sidebar menu section, go to the **Services** > **OpenVPN Tunnels** > **Enter a name** > choose “**Custom Openvpn Configuration**” from the drop-down and the press **Add**. Use Figure 1 as reference.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/creating-an-openvpn-tunnel.jpg"
  width="100%"
  figure-number="1"
  caption="Creating an OpenVPN tunnel"
/>

* In the next window, simply **copy/paste** the content of the file you created in the beginning and click **Save & Apply**. See Figure 2 below.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/importing-the-openvpn-certificate-data.png"
  width="100%"
  figure-number="2"
  caption="Importing the OpenVPN certificate data"
/>

* Shown in Figure 3, go back to the **OpenVPN Tunnel**s section > tap **Enable** to on state > click **Save & Apply**. This will finalize things and the Gateway should now be connected to the OpenVPN Server. The process might take a few minutes to complete.


<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/enabling-openvpn.png"
  width="100%"
  figure-number="3"
  caption="Enabling OpenVPN"
/>

* Check again in the client list file on the OpenVPN Server for the IP address of the Gateway:

```
sudo nano /etc/openvpn/server/ip_pool.txt 
```

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/openvpn-connected-clients2.png"
  width="100%"
  figure-number="4"
  caption="OpenVPN connected-clients 2"
/>

The IP address of the Gateway should be in the second entry.

2. Log into the Gateway (**remotely**)

You can now log into the Gateway by using the IP address, shown in figure 4, assigned to it by the OpenVPN Server. This can be utilized for an SSH2 connection or the Web UI (via a browser).





