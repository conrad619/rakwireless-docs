---
next: openvpn-server-deployment
---

# Gateway Remote Management - OpenVPN

This section introduces a remote management of RAK Industrial LPWAN Gateways based on OpenVPN. A virtual private network (VPN) is created where a server is deployed that both the gateway and any number of customer devices such as PC and phone, can connect via a public IP address. This is possible to implement using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE).

Thus, by connecting to the server via a remote client, the user can remotely manage the RAK Gateway from any point, at any time.

## Network Topology

Figure 1 below shows the interconnection of gateways and the end-user using OpenVPN server.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/network-topology.png"
  width="100%"
  figure-number="1"
  caption="Network Topology"
/>

