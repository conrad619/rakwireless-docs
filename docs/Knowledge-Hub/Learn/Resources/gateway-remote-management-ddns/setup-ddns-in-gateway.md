---
prev: register-ddns-service
next: false
---

# Gateway DDNS Service Set-up

1. Log into the Web UI by following the steps in the [Accessin the Web Management Platform](/Knowledge-Hub/Learn/Resources/user-manual/web-management-platform/#accessing-the-web-management-platform) section.

2. In the Web UI, navigate to `Services>Dynamic DNS (Beta)` as shown in Figure 1. For further details, read the [Services](/Knowledge-Hub/Learn/Resources/user-manual/web-management-platform/services.html#_1-dynamic-dns-beta) section of the Web Management Platform User Manual. 

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/dynamic-dns-beta.jpg"
  width="100%"
  figure-number="1"
  caption="RAK Gateway Web UI"
/> 

3. In the Dynamic DNS (Beta) tab, input a name for the service in the text box and click the “**Add**” button as shown in Figure 2.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/create-ddns-service.jpg"
  width="100%"
  figure-number="2"
  caption="Create a DDNS Service"
/> 

4. In the Dynamic DNS (Beta) configuration page, **Enable** the service. Next, fill in the necessary credentials:

* **Lookup Hostname**: dyndnss.net
* **DDNS Service provider**: dyndnss.net
* **Hostname/Domain**: The domain created in the [Create a DynDNS URL](/Knowledge-Hub/Learn/Resources/deployment-guide/gateway-remote-management-ddns/register-ddns-service.html#create-a-dyndns-url) (see Figure 4)
* **Username**: DynDNSS Username used.
* **Password**: DynDNSS Password [Create a DynDNS URL](/Knowledge-Hub/Learn/Resources/deployment-guide/gateway-remote-management-ddns/register-ddns-service.html#create-a-dyndns-url) (see Figure 5).

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/ddns-basic-config.jpg"
  width="100%"
  figure-number="3"
  caption="DDNS Basic Settings Configuration"
/> 

5. Open the Advanced Settings tab. Next, fill in the necessary credentials and click "**Save & Apply**".

* **IP Address source**: Network (default)
* **Network**: WAN (default) 

::: tip 📝 NOTE
This mean that the DDNS Service of the Gateway will check and report to dyndnss.net the WAN IP of the Gateway. If you want to access your Gateway trough different backhaul you can choose it here. 
:::

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/ddns-advanced-config.jpg"
  width="100%"
  figure-number="4"
  caption="DDNS Advanced Settings Configuration"
/> 

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/network-interface.jpg"
  width="75%"
  figure-number="5"
  caption="Network Interface Options"
/>

* After the configuration is saved, you will be redirected to the main Dynamic DNS page.

6. To start the Dynamic DNS Service, click the “**Start**” button. 

::: tip 📝 NOTE
This is the page where you can see the dyndnss.net IP, which is the IP address that the Gateway reports any change in the IP address you chose in Figure 4.
:::

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/starting-the-ddns.jpg"
  width="100%"
  figure-number="6"
  caption="Starting the DDNS Service in the Gateway"
/>

7. Go back to the dyndnss.net web page and click on the “**ENTER**” button.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/updating-ip-address.jpg"
  width="100%"
  figure-number="7"
  caption="Updating the Real IP Address"
/>

* If the setup is correct, a confirmation message is seen with the real IP Address same as shown in Figure 8.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/successful-update.jpg"
  width="100%"
  figure-number="8"
  caption="DynDNS Confirmation Screen"
/>

8. Click the “**To Account**” button to turn back to the DynDNS Url Information page. The assigned IP Address is now shown and the last time it was updated.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/dydns-updated-ip.jpg"
  width="100%"
  figure-number="9"
  caption="DynDNS Updated IP"
/>

9. Open the URL in the Web Browser and the RAK Gateway Web UI Log-in should appear. You can access your Gateway from anywhere using this URL.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/ddns-service-setup/web-ui-access.jpg"
  width="100%"
  figure-number="10"
  caption="RAK Gateway Remote Access From URL"
/>