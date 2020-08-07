---
prev: openvpn-server-deployment
next: openvpn-client-setup-on-lora-gateway
---

# OpenVPN Management Client Set-up

1. Generate the OpenVPN Server client certificate.

:::tip 📝 NOTE
Management is used as the name for the client PC.
:::

```
cd /etc/openvpn/easyrsa
# ./easyrsa build-client-full <client_name> nopass
sudo ./easyrsa build-client-full managment nopass

# Update certificate control file
sudo ./easyrsa gen-crl
```

2. Create the OpenVPN Client profile file.

:::tip 📝 NOTE
Listed below are the configuration file and its corresponding names:
* {ca} = CA certificate
* {cert} = Client certificate
* {key} = Client secret key
:::

**Certificate Locations**

- The CA certificate is located in:

```
/etc/openvpn/easyrsa/pki/ca.crt
```

- The Client certificate together with the Client secret key generated in the Client certificate section:

```
/etc/openvpn/easyrsa/issued/{client_name}.crt
```

- Client secret key:

```
/etc/openvpn/easyrsa/private/{client_name}.key
```

3. Open a text editor in your PC and copy the following template:

```
dev tap
client
remote 123.56.96.211 1194
proto udp
nobind
resolv-retry infinite

persist-key
persist-tun

remote-cert-tls server

comp-lzo
verb 3

# copy from openvpn-server /etc/openvpn/easyrsa/pki/ca.crt
<ca>
-----BEGIN CERTIFICATE-----
MIIDNTCCAh2gAwIBAgIJANYEjCM+cqsxMA0GCSqGSIb3DQEBCwUAMBYxFDASBgNV
BAMMC1JBS1dpcmVsZXNzMB4XDTE5MTEyNTAxMzIyOVoXDTI5MTEyMjAxMzIyOVow
FjEUMBIGA1UEAwwLUkFLV2lyZWxlc3MwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQDZS/8PCehr3TSTvidQLFVYT5EydKDVidEUm6/yOE0BZs99kZKGn6eF
mFQnBfve4mAHzPnC3amiuCh+01kf97P7MDpS/cYTdR9RB9Xng/jyBQqMVVHLbwoG
IS7mQmBpV0NdU8RYKsLCARPn50eRGiL2AS6cPDSjrrj2xsBEydTsjE/95gJ7AvWQ
RPRoVTI9S31mY6tLrs16zydtEXWicDVaRFkvultijCmCiUhfaDE8lt1dQxd5jkvw
cHtm1EBdHjyce7oXa+Og0p2c5EmTb1K2pjHZHG0jINv9lErC049g/ey7CcddDd+Q
Bm7fqArIaov7kk+U7zKhBrTVH3dmPWEHAgMBAAGjgYUwgYIwHQYDVR0OBBYEFLd+
eVD4IqyA84ABBeFupjEV0+bOMEYGA1UdIwQ/MD2AFLd+eVD4IqyA84ABBeFupjEV
0+bOoRqkGDAWMRQwEgYDVQQDDAtSQUtXaXJlbGVzc4IJANYEjCM+cqsxMAwGA1Ud
EwQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqGSIb3DQEBCwUAA4IBAQABFT6ZgK7Y
tM5tZEfEKSCMUxfESJ+4pPN2lryZVskXtD6BfjvKkQpj3A+R6MRNloOPvZ4spAvH
5fFvfI97Ts40rQjWpgPLQDEBcgBi6dzzmMSap/iw9wLtgqWFVm+LXPMHQnqBKfs2
HksTlKOhiKZlvtGYfxay6kbMU35LX8WdRxx8JNvRNIDL68lLdreXB7vTKQYAvcKP
o1GuZFqKV2KFxpjxzLg1BeM3U4X5k4xDQDaOHENKJO4pdWBfMLP3AAyC9wq481PO
hgA1R8ZAt+psYxOAB6O3A1SzDJ/df5ciPdsp1Kia0HCB2cGIZ7ZwfzPDNivH8/bT
n7UOb+khvmsD
-----END CERTIFICATE-----
</ca>

# Client certificate PEM
# Copy from server /etc/openvpn/easyrsa/pki/issued/managment.crt
# 

<cert>

-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIQVm22YDcNRRzycbFHSEkkFjANBgkqhkiG9w0BAQsFADAW
MRQwEgYDVQQDDAtSQUtXaXJlbGVzczAeFw0yMDAyMDUwMjI5MzZaFw0yMzAxMjAw
MjI5MzZaMBcxFTATBgNVBAMMDFJBSzcyNThfNjY2NjCCASIwDQYJKoZIhvcNAQEB
BQADggEPADCCAQoCggEBAK53T6vlbm4xVgM5z8fC6ul5WsdT3gfEGEOKu0MWcxq4
YP0jrhXAwJV20EdUXYiFIOdf9woYvv8ANTFYHIBAT+jZrGhbhph7QSzmb1xzc3g/
nGJVJAW7L10EmQ0mSsi64NTv/8Ou7wZQpqd8+FuIjDbMFJMP24GbqswG6nnhJCST
1b1hfAgijK/dagRFJTcYhJcutwJrpUjhdAwVBG/GuXQwyI82WXzpqvVyfPgCb4Ek
9ehHuA1Zsmgp68ChGFM+WrEZ1sETDlxlNAfsON7hihf3xYZ2iZ/6rq5RpUczJm3P
9dxO74I8/dxe9TnNcIvqasxGg3jZW4UvQyATqnb+z5kCAwEAAaOBlzCBlDAJBgNV
HRMEAjAAMB0GA1UdDgQWBBRQkqjMkMV4u8R0EKDDG08qjxJb4TBGBgNVHSMEPzA9
gBS3fnlQ+CKsgPOAAQXhbqYxFdPmzqEapBgwFjEUMBIGA1UEAwwLUkFLV2lyZWxl
c3OCCQDWBIwjPnK67dATBgNVHSUEDDAKBggrBgEFBQcDAjALBgNVHQ8EBAMCB4Aw
DQYJKoZIhvcNAQELBQADggEBAGDGH6+b1EGkVj//EDyJUBISWWcXC8EwmrT25Tga
WDid21QQatQahriVOFHu0B7DGSJb6kw4Om8Mz+kef1v529VIip56wP4I7aVQdcTg
SoVBCc0ToXxGO+EXPWc0jBwPReofMzYeaZ+hZcSHeFOYAso5aFSMfk5Z7qwYQfaj
ZQ7AdTj2NcxH92bIv7JUzW6Xh8OcTuTzQd4J2dtJr4ObnRkYrqg27dzlV1dz73hJ
JIs7AXUH4wivehV3VGd95am6ejs4Hedhaw23h+pV91LmG4gdb6EPHm0JPCHbaQAb
JzF75JEh0CLOlDFBK419Dgg10n0gqLkSTcp+CzNlCx7k+24=
-----END CERTIFICATE-----
</cert>

# Client key PEM
# Copy from server /etc/openvpn/easyrsa/pki/private/managment.key
#
<key>
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCud0+r5W5uMVYD
Oc/HwurpeVrHU94HxBhDirtDFnMauGD9I64VwMCVdtBHVF2IhSDnX/cKGL7/ADUx
WByAQE/o2axoW4aYe0Es5m9cc3N4P5xiVSQFuy9dBJkNJkrIuuDU7//Dru8GUKan
fPhbiIw2zBSTD9uBm6rMBup54SQkk9W9YXwIIoyv3WoERSU3GISXLrcCa6VI4XQM
FQRvxrl0MMiPNll86ar1cnz4Am+BJPXoR7gNWbJoKevAoRhTPlqxGdbBEw5cZTQH
7Dje4YoX98WGdomf+q6uUaVH11Ztz/XcTu+CPP3cXvU5zXCL6iIMRoN42VuFL0Mg
E6p2/s+ZAgMBAAECggEAGGwPNQra2IYDelQfZ+E7LQ+Vy41L6V5j3yCOcie0WSsy
OH1EIztmOgX1xeZjaXbpUjo2xK0OH3gR+iRRaQqXpQrDfaBCSRoH15cyQ4jNwyl0
ZLdyYXMAgE7iddrEYTD3xBcMgIH+Z63mhk+SHI4SwqDyyFtR6OS3lfPp4sHHY28r
FJPXW7a10M+pxjEX+A8m3UM4VJiLy2YeklB7laJkQjHcA/Gh+sh/0NjZwCYyWWAi
irATLDSa3z6N7yr3xAO/J4vEZVaGxyyJRvR4qmr0xE15xyCfQQcWdw1DpGT9uBk/
4z/1Tq2sJUekzYebeENliJY3ADVsVS0JszRRHCYwGQKBgQDhRlwvrjvRP8ZCd9th
ssKXgkJBUSqxp8VvFtylMKy2koNq6S2S3yiGmiNWd7JxdGk+77MGmA8kTdpORMcN
L9xSLMWiuMLHGEYf79TkON0ZBqN/wwuPttJG8ICWhqAjL+dDcLoqz8j4dO6FwKPo
z+fVjVupXgYKfqLpm9SAD1apewKBgQDGQuyhzv0Ru7o29MDg5YZ0dwj9bV1KzlFf
3DAdcX+k4Z48R50e5VhewIedA3eafy+UER63CAWLQru96sbRoGkk8aKBk9AGJPFb
i4NVWWaiUA2A2WVUKkdIQsNrr2xHBTwiFPftTxWRWUT1DKgF+uHvSzBKfn13PReS
KCjxzPis+wKBgQDVeW9yX5GfwOeHpTznYBa2rGFMtDXZFDssAmYkw/NnL4AJl93w
CDjHFNnX3qXijYYOdecYoI/4vy3YbaSTAn+t/29pu9wX/xC0wvjjLF+Yj4nwUExs
a7roLpAsFHc74PEuH2zLlQvFJknBxcONozb2T3ZFESx4VXjcFydQEzj0cQKBgANq
Wbs73p40lrOlqcD2E0fkWRJMlQPZ5Ar7txR6xREpFdnB/hHvL4OKW4u36JKPyFkL
pnTOvZG1l5hg+AXadpU9WGhVDItejY3fLGcHAD6hlGn41McLZ2j2RXmQbxQWIgAQ
TmkXKK71U7vI+QgJV2UQ7YcLAMxSEBrjeDkaJ9qLAoGAEiSjuv5X0PbZpiyH6/GX
YuMhFYWZnk/IwoxQW4alBIRuI7EQ+fLvrFUxikMOIsLKtKrcVLjJBgFSz4hIE9YE
YnaQ5Vx+RMzTwakRJtPook55pS1HpdK7Y/0oiUOsJGCEzVj8P/e/WrhFqWPGalIJ
ENCGBuhos/YdITFeKQ381zk=
-----END PRIVATE KEY-----
</key>
```

4. Change the remote IP address with your Amazon Instance Public IP. Add each certificate in its corresponding section by copying the content from the locations mentioned above and replace the corresponding section in the template.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/aws-instance-public-ip.png"
  width="100%"
  figure-number="1"
  caption="AWS Instance Public IP"
/>


5. Save the file with a name: **management_client.ovpn**.

6. OpenVPN PC client.

* Download the [OpenVPN Client](https://openvpn.net/community-downloads/) and install.

* Start the OpenVPN GUI Client. You will see an icon in the taskbar.

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/open-vpn-taskbar-icon.png"
  width="75%"
  figure-number="2"
  caption="Open VPN Taskbar Icon"
/>

* Right click Import file and open management_client.ovpn file. 

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/importing-openvpn-client-file.png"
  width="100%"
  figure-number="3"
  caption="Importing OpenVPN Client File"
/>

* Make sure to go into the OpenVPN menu again and press Connect (it will not initiate automatically).

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/open-vpn-connection-initiation.png"
  width="50%"
  figure-number="4"
  caption="Open VPN Connection initiation"
/>

If everything is set up properly, a connection log window will disappear after the procedure runs through. Refer to Figure 5.


<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/open-vpn-connection-log2.png"
  width="50%"
  figure-number="5"
  caption="Open VPN Connection log"
/>

The OpenVPN should now be in green, see Figure 6, meaning the connection is successful. You can check which clients are currently connected to the OpenVPN Server and their corresponding IP addresses by executing the following command in your Ubuntu console:

```
sudo nano /etc/openvpn/server/ip_pool.txt 
```

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/open-vpn-connected-clients1.png"
  width="100%"
  figure-number="6"
  caption="Open VPN connected clients 1"
/>

There should be only one client available and its IP address is visible now. This one client is the PC connected to the OpenVPN Server. Later, the Gateway also should be visible.