(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{433:function(e,t,o){"use strict";o.r(t);var a=o(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"the-mighty-mqtt-what-you-should-know-about-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-mighty-mqtt-what-you-should-know-about-it"}},[e._v("#")]),e._v(" The Mighty MQTT! What You Should Know About It")]),e._v(" "),o("p",[e._v("As a player in the IoT world, we know you want fast messaging with your devices. You want to be always updated. You want real-time information at the tip of your fingers. However, we also know how difficult it is to find the right technology to make your aspirations real. Fortunately, "),o("a",{attrs:{href:"http://mqtt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQTT"),o("OutboundLink")],1),e._v(" is here and it can be your next big project!")]),e._v(" "),o("p",[o("strong",[e._v("MQTT stands for Message Queuing Telemetry Transport")]),e._v(" and is a machine-to-machine (M2M) connectivity protocol for the Internet of Things. MQTT is used as a lightweight publish-and-subscribe protocol, through which you can send and receive messages in for machine-to-machine telemetry in low bandwidth environments. For example, if you need to communicate to a broker via satellite link or in the context of home automation and small device scenarios, MQTT is quite suited for your needs. MQTT is also ideal for mobile applications because of its small size, low-power usage, minimized data packets, and efficient distribution of information to one or many of its receivers.")]),e._v(" "),o("p",[e._v("MQTT was initially designed by Andy Stanford-Clark (IBM) and Arlen Nipper (Arcom) in 1999 to connect Oil Pipeline telemetry systems over satellites. Although it was created quite some time ago and was intended for limited use in a particular scenario, MQTT is fast becoming one of the main protocols for IoT (Internet of Things), which encompasses great range of applications. Even if it started as a proprietary protocol, the demand for it has grown bigger throughout the years that it was released royalty-free in 2010 and became an OASIS standard in 2014.")]),e._v(" "),o("p",[e._v("Ever since its standardization, the protocol has been easy to adapt for a wide variety of IoT devices, platforms, and operating systems. Enterprise cloud platforms such as Microsoft Azure expose their IoT PaaS through MQTT. Certainly, any IoT application developer who has not used MQTT is not getting any closer to their next breakthrough.")]),e._v(" "),o("rk-img",{attrs:{src:"/assets/images/knowledge-hub/tutorials/the-mighty-mqtt-what-you-should-know-about-it/mqtt-founders.jpg","figure-number":"1",caption:"Arlen Nipper and Andy Stanford-Clark, the fathers of MQTT, during MQTT's 10th year anniversary. Photo credits to Tony Whitmore"}}),e._v(" "),o("p",[o("em",[o("strong",[e._v("At present, MQTT has different variants and versions that you can explore and use for your new IoT project")])]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("b",[e._v("MQTT v3.1.0")]),e._v(" - This is the original MQTT that was designed in 1999 and has been in use for many years. It is created for TCP/IP networks.")]),e._v(" "),o("li",[o("b",[e._v("MQTT v3.1.1")]),e._v(" - This is the most commonly used by developers at the moment. There is very little difference between v3.1.0 and 3.1.1.")]),e._v(" "),o("li",[o("b",[e._v("MQTT v5")]),e._v(" - This is the latest version of the protocol (Jan 2018) and has seen limited use. As of release 1.6, the mosquito broker supports MQTT v6 in addition to MQTT v3.1.1, so you can continue to use the older version client with the latest broker.")]),e._v(" "),o("li",[o("b",[e._v("MQTT-SN")]),e._v(" – This was specified around 2013, and designed to work over UDP, ZigBee, and other transport protocols. MQTT-SN doesn’t currently appear to be very popular and the specification hasn’t changed for several years. This may change as IoT deployments start to greatly increase.")])]),e._v(" "),o("p",[o("em",[o("b",[e._v("Below are the definitions of some basic concepts in order to better understand how MQTT functions")])]),e._v(":")]),e._v(" "),o("p",[e._v("The first concept is the "),o("u",[o("b",[e._v("publish-and-subscribe")])]),e._v(" mechanic. In a publish-and-subscribe system, a device can publish a message on a topic, or it can be subscribed to a particular topic to receive messages. Messages are automatically pushed to subscribers to the corresponding topic when there is an update.")]),e._v(" "),o("rk-img",{attrs:{src:"/assets/images/knowledge-hub/tutorials/the-mighty-mqtt-what-you-should-know-about-it/mqtt-flow.png","figure-number":"2",caption:"MQTT Flow"}}),e._v(" "),o("p",[o("u",[o("b",[e._v("Messages")])]),e._v(" are the information that you want to exchange between your devices - whether it’s a command or a set of data.")]),e._v(" "),o("p",[e._v("Another important concept is the "),o("u",[o("b",[e._v("topics")])]),e._v(". Topics are the way you register interest for incoming messages or how you specify where you want to publish the message.")]),e._v(" "),o("p",[e._v("Topics are represented with strings separated by a forward slash. Each forward slash indicates a topic level.")]),e._v(" "),o("p",[o("u",[o("b",[e._v("MQTT clients")])]),e._v(" are what we call the devices that are subscribed to one or more topics (if you don’t choose a specific topic, you will see them all). When something is published in these topics by other clients, they are going to receive the packet as a message. For MQTT version 3.1.1, there is client software available in almost all programming languages and for the main operating systems Linux, Windows, Mac from the Eclipse Paho project.")]),e._v(" "),o("p",[e._v("The MQTT client has its counterpart - the "),o("u",[o("b",[e._v("MQTT broker")])]),e._v(". The broker is at the heart of any publish-and-subscribe protocol. Depending on the implementation, a broker can handle up to thousands of concurrently connected MQTT clients. The broker is responsible for receiving all messages, filtering the messages, determining who is subscribed to each message, and sending the message to these subscribed clients. The broker also holds the sessions of all persisted clients, including subscriptions and missed messages.")]),e._v(" "),o("p",[o("u",[o("b",[e._v("MQTT Security")])]),e._v(" is its ability to support various authentications and data security mechanisms. It is important to note that these security mechanisms are configured on the MQTT broker, and it is up to the client to comply with the mechanisms in place.")]),e._v(" "),o("p",[e._v("MQTT uses the publish-and-subscribe pattern to connect interested parties with each other. It practices that by decoupling that pattern with the receive-and-subscribe pattern. The publisher sends a message to a central topic that has multiple subscribers waiting to receive the message. The publishers and subscribers are autonomous, which means that they do not need to know the presence of each other.")]),e._v(" "),o("p",[o("em",[o("b",[e._v("However, much like other technologies, MQTT protocol has some disadvantages as well")])]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("MQTT is not RESTful so, it does not take advantage of existing protocols.")]),e._v(" "),o("li",[e._v("MQTT works on flexible topic subscriptions, so it doesn't have a stable resource discovery mechanism.")]),e._v(" "),o("li",[e._v("MQTT is not encrypted unless you use TLS/SSL for security.")])]),e._v(" "),o("p",[e._v("Despite of its shortcomings MQTT is still one of the most preferred protocols in IoT projects as the benefits of using it far outweigh the negatives. For example, "),o("a",{attrs:{href:"https://medium.com/@rakwireless/rakwireless-enhance-their-gatway-capability-with-mqtt-bridge-70aaf43ad7be",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAKwireless has enhanced the capability of their LoRaWAN Gateways with the use of a built-in MQTT bridge"),o("OutboundLink")],1),e._v(" The Commercial Gateways such as "),o("a",{attrs:{href:"https://www.rakwireless.com/en-us/products/lpwan-gateways-and-concentrators/rak7249",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAK7249"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://www.rakwireless.com/en-us/products/lpwan-gateways-and-concentrators/rak7258",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAK7258"),o("OutboundLink")],1),e._v(" have an embedded LoRa Network and Application Server with a MQTT Bridge. This abstracts the Semtech Packet-forwarder UDP protocol into JSON over MQTT, transmitting your data to your application directly and securely. This is becoming a practice with other manufacturers and is not limited to LoRaWAN, but other IoT technologies as well.")]),e._v(" "),o("p",[o("em",[o("b",[e._v("In summary MQTT has some unique features that can’t be easily found in other protocols, such as")])]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("It’s a lightweight protocol. It is ultimately efficient at fast-data transmission. Furthermore, using MQTT puts less computational burden or your system.")]),e._v(" "),o("li",[e._v("The small size of the data packets minimizes overhead and reduces traffic.")]),e._v(" "),o("li",[e._v("It is a very power-efficient mechanic. This makes it very suitable for projects that use LoRaWAN because it can save battery life, which is the primary power source for a lot of LoRa-end nodes.")]),e._v(" "),o("li",[e._v("It’s real-time, so it is perfect for IoT applications.")]),e._v(" "),o("li",[e._v("It’s open-source and free to use in addition to being easy to implement and configure. Again, setting up your MQTT bridge in the RAKwireless Commercial Gateway line is quick and easy. You can refer to this documentation to get an understanding on how to do so in case you want an example of a good implementation in a LoRaWAN™ Gateway.")])]),e._v(" "),o("p",[e._v("In the end, MQTT has a ton of advantages, thus it is here to stay. We believe that it will become even more mainstream and will naturally see a lot more adoption and improvements in the years to come.")]),e._v(" "),o("rk-author")],1)}),[],!1,null,null,null);t.default=s.exports}}]);