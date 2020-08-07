---
prev: /Knowledge-Hub/Learn/Resources/deployment-guide/gateway-remote-management-openvpn/
next: openvpn-management-client-setup
---

# OpenVPN Server Deployment
---

Before proceeding to this tutorial, make sure you already have an AWS EC2 Instance with Ubuntu Server 18.04 LTS running on it. Else, go back to [Amazon Web Service Configurations](/Knowledge-Hub/Learn/Resources/deployment-guide/amazon-web-service/#configuring-the-instance) section.

Assuming that it is already done, follow thoroughly the steps provided below:

1. Install OpenVPN.

```
sudo apt install openvpn -y
```

2. Download a certificate management tool suite: Easy RSA.

```
wget https://github.com/OpenVPN/easy-rsa/archive/v3.0.6.tar.gz -O easyrsa.tar.gz
```

3. Initialize Easy RSA to generate a CA certificate and a server certificate.

* Extract and copy easyrsa to /etc/openvpn/easyrsa/

```
sudo mkdir -p /etc/openvpn/easyrsa 
tar zxvf easyrsa.tar.gz 
sudo cp -rf easy-rsa-3.0.6/easyrsa3/* /etc/openvpn/easyrsa/
```

* Initialize the pki.

```
cd /etc/openvpn/easyrsa
sudo ./easyrsa init-pki
```

* Generate the CA certificate.

```
sudo ./easyrsa build-ca
```

:::tip 📝 NOTE
Enter the required information according to the prompt. When asked for a password, make sure to write it down as it will be required later on.
:::

* Generate the Server certificate.

```
sudo ./easyrsa build-server-full server nopass
```

* Generate the DH parameters file.

```
sudo ./easyrsa gen-dh
```

* Generate the crl.pem file.

```
sudo ./easyrsa gen-crl
```

4. Generate the OpenVPN Server configuration and running files.

* Create the OpenVPN server configuration file and fill it in. The file must reside in:

```
sudo mkdir -p /etc/openvpn/server
```

- Open the created file for editing:

```
sudo nano /etc/openvpn/server/config.ovpn
```

:::tip 📝 NOTE
Change the local `123.56.96.211` IP address with your private AWS IP.
:::

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/aws-instance-private-ip.png"
  width="100%"
  figure-number="1"
  caption="AWS Instance Private IP"
/>

:::tip 📝 NOTE
Add an inbound rule in the AWS Security Group for **UDP port 1194**.
:::

<rk-img
  src="/assets/images/deployment-guide/gateway-remote-management-openvpn/security-group-inbound-rules.png"
  width="100%"
  figure-number="2"
  caption="Security Group Inbound Rules"
/>

```
# openvpn server 
cd /etc/openvpn/server
daemon
dev tap
proto udp

#local ipaddr to bind. Change it with Server IP.
local 123.56.96.211 
port 1194

server-bridge 10.0.8.1 255.255.255.0 10.0.8.11 10.0.8.100
ifconfig-pool-persist ip_pool.txt

up interface-up.sh

client-to-client
keepalive 10 120
comp-lzo
user root
group root
persist-key
persist-tun

ca /etc/openvpn/easyrsa/pki/ca.crt
cert /etc/openvpn/easyrsa/pki/issued/server.crt
key /etc/openvpn/easyrsa/pki/private/server.key
dh /etc/openvpn/easyrsa/pki/dh.pem
crl-verify /etc/openvpn/easyrsa/pki/crl.pem


status /var/log/openvpn-status-server.log
log /var/log/openvpn-server.log
verb 3
script-security 2
```

* Create a virtual tap interface and fill in the interface-up.sh. 

```
sudo nano /etc/openvpn/server/interface-up.sh
```

- Fill in the content of the file with the lines below:

```
#!/bin/sh
/sbin/ifconfig $1 10.0.8.1 netmask 255.255.255.0 broadcast 10.0.8.0
```

- Make the script executable:

```
sudo chmod +x /etc/openvpn/server/interface-up.sh
```

5. Start OpenVPN.


*  To run the instance startup in the OpenVPN, run the following command:

```
sudo systemctl enable openvpn
```

* Execute the following in order to get your tap interface up:

```
sudo openvpn --config /etc/openvpn/server/config.ovpn
```

:::tip 📝 NOTE
If you want OpenVPN to execute the configuration file automatically, you should rename the **config.ovpn to config.conf** and move it to the **/etc/openvpn folder**.

This way, if the Operating System is rebooted, OpenVPN will automatically load the tap interface.
:::

```
cd /etc/openvpn/server
sudo mv config.ovpn /etc/openvpn/config.conf
```

You should see a similar output if the tap0 interface is up and running.

```
tap0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.8.1  netmask 255.255.255.0  broadcast 10.0.8.0
        ether 3a:37:f6:5a:bb:32  txqueuelen 100  (Ethernet)
        RX packets 45125  bytes 8292906 (7.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 16611  bytes 2205218 (2.1 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```





