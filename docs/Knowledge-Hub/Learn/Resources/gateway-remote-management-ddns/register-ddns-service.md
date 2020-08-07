---
prev: /Knowledge-Hub/Learn/Resources/deployment-guide/gateway-remote-management-ddns/
next: setup-ddns-in-gateway
---
# Register a DDNS Service

In using Dynamic Domain Name System (DDNS), you can assign a Domain name that you link to your Gateway’s Real IP Address. This allows you to access your Gateway with a Domain name that is static and will not change even if a new IP address is assigned to the Gateway, making sure you don’t have to keep a lengthy list of address that needs to be constantly updated. The DDNS service takes care of this for you.

## Choosing your DDNS Provider

A list of providers supported by the RAK Industrial Gateway series can be found below.

::: tip 📝 NOTE
For this sample demonstration, the dyndnss.net DDNS service provider shall be used.
:::
|                                   |                            |                           |                               |
|-----------------------------------|----------------------------|---------------------------|-------------------------------|
|3322.org                           |afraid.org (6)              |changeip.com               |cloudflare.com (2) (5) (6)     |
|core-networks.de (6)               |ddnss.de (6)                |dhis.org (6)               |dnsdynamic.org                 |
|dnsexit.com                        |dnshome.de (6)              |dnsmax.com                 |dnsomatic.com                  |
|dnspark.com                        |do.de (6)                   |dtdns.com                  |duckdns.org (6)                |
|duiadns.net (6)                    |dy.fi                       |dyndns.org (6) (dyn.com)   |dyndnss.net                    |
|dyns.net                           |dynsip.org                  |dynu.com                   |dynv6.com (6)                  | 
|easydns.com                        |editdns.net                 |goip.de (6)                |google.com (5) (6)             |
|he.net (6)                         |joker.com                   |loopia.se (6) (loopia.com) |mydns.jp (6)                   |
|myonlineportal.net (6)             |mythic-beasts.com (6)       |namecheap.com              |nettica.com                    |
|no-ip.com (1) (noip.com)           |no-ip.pl (6)                |nsupdate.info (6)          |nubem.com                      |
|ovh.com                            |regfish.de (6)              |schokokeks.org             |selfhost.de                    |
|sitelutions.com                    |spdyn.de (6) (spdns.de)     |strato.com                 |system-ns.com                  |
|thatip.com                         |twodns.de                   |variomedia.de (6)          |zerigo.com (6)                 |
|zoneedit.com (5)                   |zzzz.io (5) (6)             |                           |BIND nsupdate (3) (4) (6)      |

::: tip 📝 NOTE
(1) - requires additional package ddns-scripts_no-ip_com to be installed.<br>
(2) - needs additional package ddns-scripts_cloudflare to be installed.<br>
(3) - directly updates a PowerDNS (or maybe bind server) via nsupdate.<br>
(4) - needs additional package ddns-scripts_nsupdate and bind-client to be installed.<br>
(5) - SSL support required.<br>
(6) - support IPv6
:::

::: tip 📝 NOTE
You may also visit the OpenWrt [DDNS Client Guide](https://openwrt.org/docs/guide-user/services/ddns/client) for more information.
:::

## Register your DYNDNS Account

1. Go to the [DYNDNS Service](https://dyndnss.net) website and click "**Register**" as shown in Figure 1.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/register-ddns-service/register.png"
  width="100%"
  figure-number="1"
  caption="Register to DYNDNS Account"
/> 

2. Fill in the following details: **Name, E-mail Address, User Name** and **Password**. Agree with the terms and click "**Create a Free Account**".

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/register-ddns-service/sign-up.png"
  width="100%"
  figure-number="2"
  caption="Create a Free Account"
/> 

::: tip 📝 NOTE
A confirmation link shall be sent into your e-mail address which will bring you to the log-in page.
:::

## Create a DynDNS URL

1. Once logged, click on the "**Creating a new DynDNS Url**" link shown in Figure 3.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/register-ddns-service/create-url.png"
  width="100%"
  figure-number="3"
  caption="Create DynDNS URL"
/> 

2. Input a Sub-Name for the domain. This will be used for accessing the Gateway later after configuring the service. Leave the Port field empty. 
::: tip 📝 NOTE
For demonstration, "rakwireless.dyndnss.net" shall be used.
:::

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/register-ddns-service/rakwireless-url.png"
  width="100%"
  figure-number="4"
  caption="Create Subdomain Name"
/> 

3. The DDNS URL is created. The Sumbdomain should now have a password which we will needed to setup the Gateway DDNS Service, full DDNS URL and “ENTER” button that will force the DynDNSS service to get the Gateway current IP.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-ddns/register-ddns-service/subdomain-details.png"
  width="100%"
  figure-number="5"
  caption="DynDNS Url Information"
/> 