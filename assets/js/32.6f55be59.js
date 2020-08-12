(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{419:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"build-in-lora®-network-server-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-in-lora®-network-server-configuration"}},[e._v("#")]),e._v(" Build-in LoRa® Network Server Configuration")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#gateway-built-in-lora%C2%AE-ns"}},[e._v("Gateway Built-in LoRa® NS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#rak-lpwan-node"}},[e._v("RAK LPWAN Node")])])]),e._v(" "),a("p",[e._v("This section is a sample demonstration on how to interconnect your "),a("strong",[e._v("RAK7249 Macro Outdoor Gateway")]),e._v(" with its "),a("strong",[e._v("Built-in LoRa Network Server")]),e._v(" and make an application for the "),a("strong",[e._v("RAK LPWAN Node")]),e._v(". For this sample demonstration, we will be using the RAK811 LPWAN Node.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ol",[a("li",[e._v("RAK811 LPWAN Node")]),e._v(" "),a("li",[e._v("RAK7249 Macro Outdoor Gateway (LoRa® Server in use)")])]),e._v(" "),a("h1",{attrs:{id:"gateway-built-in-lora®-ns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-built-in-lora®-ns"}},[e._v("#")]),e._v(" Gateway Built-in LoRa® NS")]),e._v(" "),a("p",[e._v("This document is the detailed discussion on how to set-up the built-in LoRa® Server for your RAK7249 Marco Outdoor Gateway using the Web Management Platform.")]),e._v(" "),a("p",[e._v("We will first set-up the built-in LoRa®  network server. Before going through the steps, access the Web Management Platform as discussed in the prior section.")]),e._v(" "),a("h2",{attrs:{id:"packet-forwarder-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packet-forwarder-set-up"}},[e._v("#")]),e._v(" Packet Forwarder Set-up")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("For other settings and detailed documentation for this section, browse the "),a("RouterLink",{attrs:{to:"/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network"}},[e._v("Packet Forwarder")]),e._v(" section.")],1)]),e._v(" "),a("ol",[a("li",[a("p",[e._v("By navigating through LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup, set the Protocol in the drop-down list to "),a("strong",[e._v("Build-in LoRa ® Server")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v('You can leave the rest of the settings with their default values. Remember to "'),a("strong",[e._v("Save & Apply")]),e._v('".')])])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/build-in-lora-server.png",width:"100%",caption:"Build-in LoRa Server Protocol in Gateway"}}),e._v(" "),a("h2",{attrs:{id:"configure-the-lora®-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-lora®-server"}},[e._v("#")]),e._v(" Configure the LoRa® Server")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("For other settings and detailed documentation for this section, browse the "),a("RouterLink",{attrs:{to:"/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network"}},[e._v("LoRa Network")]),e._v(" section.")],1)]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Navigate through LoRa® Network Server tab -> General and turn-on this feature using the Enable slider.")])]),e._v(" "),a("li",[a("p",[e._v("Select your Region (Frequency Band). For this demonstration, we are going to use "),a("strong",[e._v("EU863-870 frequency band")]),e._v(".")])])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/lora-network-server-general.png",width:"100%",caption:"LoRa Network Server General"}}),e._v(" "),a("h2",{attrs:{id:"register-rak7249-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-rak7249-gateway"}},[e._v("#")]),e._v(" Register RAK7249 Gateway")]),e._v(" "),a("ol",[a("li",[e._v("Navigate through LoRa® Network Server-> Gateway and enter the "),a("strong",[e._v("Gateway EUI")]),e._v(" in the field.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/adding-gateway-eui.png",width:"100%",caption:"Adding Gateway EUI"}}),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v('By pressing the "'),a("strong",[e._v("Add")]),e._v('" button, you will be redirected into a new tab where you will need to fill the mandatory parameters: '),a("strong",[e._v("Name")]),e._v(" and "),a("strong",[e._v("Description")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Latitude")]),e._v(", "),a("strong",[e._v("Longitude")]),e._v(" and "),a("strong",[e._v("Altitude")]),e._v(" parameters are not mandatory. You can leave them for later, or leave them empty if the gateway is not stationary.")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("If everything is set-up correctly, you should see the same set-up with the image shown below:")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),a("p",[e._v("In order to see the Last Seen status update you need to refresh the page. There should be a value of a couple of seconds, if so than everything went well. In case there is a message "),a("strong",[e._v("Never Seen")]),e._v(", there is an issue and you best redo the configuration.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/gateway-successful-add.jpg",width:"100%",caption:"Gateway Successful Adding"}}),e._v(" "),a("h1",{attrs:{id:"rak-lpwan-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rak-lpwan-node"}},[e._v("#")]),e._v(" RAK LPWAN Node")]),e._v(" "),a("p",[e._v("This document discusses the steps on how to add your RAK811 LPWAN Node Application into the Built-in LoRa® Network Server demonstration. For this demonstration, it is best advised to use our very own "),a("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/Tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAK Serial Port Tool"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"register-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-the-application"}},[e._v("#")]),e._v(" Register the Application")]),e._v(" "),a("ol",[a("li",[e._v("Connect your RAK811 to your computer by following the "),a("RouterLink",{attrs:{to:"/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#product-configuration"}},[e._v("Interfacing your RAK811 LPWAN Node")]),e._v(" section or the RAK811 LPWAN Node. Once connecting is successful, open the RAK Serial Port Tool and press the "),a("strong",[e._v("RESET Button (RST)")]),e._v(" to reboot your device to check the LoRa® parameters same with the image shown below:")],1)]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/rak811-parameters.png",width:"100%",caption:"RAK811 LPWAN Node Parameters"}}),e._v(" "),a("ul",[a("li",[e._v("In case your device is already configured to work in OTAA same with the image above, it will attempt connecting to the gateway but does not get authenticated as it is not registered yet and needs to be configured first.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE:")]),e._v(" "),a("p",[e._v("Open the "),a("RouterLink",{attrs:{to:"/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#miscellaneous"}},[e._v("AT Commands for RAK811 LPWAN Node")]),e._v(" section of the RAK811 LPWAN Node to check the complete list of AT Commands compatible.")],1)]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set the Region/Band by plugging in the AT Command below in the RAK Serial Port Tool. For this demonstration, EU868 frequency band shall be used.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lora:region:EU868\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Set the authentication mode to OTAA:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lora:join_mode:0\n")])])]),a("ul",[a("li",[e._v("Now that your RAK811 LPWAN Node is working in the correct region and mode, you need to fill in the application parameters in your Gateway. This will register the specific device and allow you to exchange data.")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Navigate through "),a("code",[e._v("LoRa® Network Server -> Application -> Devices")]),e._v('. Enter a name for your application and press the "'),a("strong",[e._v("Add")]),e._v('" button.')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/add-application.png",width:"100%",caption:"Adding Application"}}),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Refer back to the RAK Serial Port Tool shown in "),a("strong",[e._v("Figure 5: RAK811 LPWAN Node Parameters")]),e._v(" and take note the "),a("strong",[e._v("Application EUI")]),e._v(" and "),a("strong",[e._v("Application Key")]),e._v(". Input those into the corresponding fields in the "),a("strong",[e._v("Application Configuration")]),e._v(" screen in the Gateway:")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/set-otaa-parameters.png",width:"100%",caption:"Adding Application EUI and Key"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE:")]),e._v(" "),a("p",[e._v('In case your RAK811 LPWAN Node is still not configured, you can manually input an Application EUI and Application Key here or have it randomly generated by clicking the green button at the right side of the input box. You will have these data configured to the RAK811 LPWAN Node using the RAK Serial Port Tool with the commands below. Make sure to change "XXXX" with your equivalent Application EUI and Key.')])]),e._v(" "),a("ul",[a("li",[e._v("Setting the "),a("strong",[e._v("Application EUI")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lora:app_eui:XXXX\n")])])]),a("ul",[a("li",[e._v("Setting the "),a("strong",[e._v("Application Key")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v('lora:app_key:XXXX"\n')])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("strong",[e._v("Save & Apply")]),e._v(" (Make sure the Auto Add Device Slider is in the off position).")])]),e._v(" "),a("h2",{attrs:{id:"adding-the-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-device"}},[e._v("#")]),e._v(" Adding the Device")]),e._v(" "),a("ol",[a("li",[e._v('Locate the application created in the previous section and press the "'),a("strong",[e._v("Edit")]),e._v('" button.')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/edit-applications.png",width:"100%",caption:"Editing the Application"}}),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Enter the "),a("strong",[e._v("Device EUI")]),e._v(' into the corresponding field and press "'),a("strong",[e._v("Add")]),e._v('" button.')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/add-device-in-application.png",width:"100%",caption:"Adding Device in the Application"}}),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Enter a "),a("strong",[e._v("Device name")]),e._v(", make sure you are in "),a("strong",[e._v("Class A")]),e._v(", "),a("strong",[e._v("OTAA")]),e._v(" mode. Leave the rest of the parameters with their default settings then "),a("strong",[e._v("Save & Apply")]),e._v(".")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/edit-device-parameters.png",width:"100%",caption:"Editing Device Parameters"}}),e._v(" "),a("h2",{attrs:{id:"data-transfer-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-transfer-monitoring"}},[e._v("#")]),e._v(" Data Transfer Monitoring")]),e._v(" "),a("p",[e._v("By following the steps in the previous sections, you should now have your Device registered and if you click on the "),a("strong",[e._v("Device EUI")]),e._v(", you will open the corresponding Device window. Go to the "),a("strong",[e._v("Live Device Data")]),e._v(" tab. Here you can monitor data that the application is exchanging in real time.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE:")]),e._v(" "),a("p",[e._v("Keep the Live Device Data tab opened as we want to monitor traffic.")])]),e._v(" "),a("ol",[a("li",[e._v("Using the RAK Serial Port Tool, execute the AT command provided below to reboot the RAK811. Alternatively, you could press the "),a("strong",[e._v("RESET Button (RST)")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("at+set_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("device:restart\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Upon reboot, your RAK811 should be able to join via OTAA if all the credentials are authenticated. You should see a "),a("strong",[e._v("Join")]),e._v(" request in the Live Data tab and the "),a("strong",[e._v("Join Succeeded!")]),e._v(" message in the Serial Tool.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/build-in-lora-server/data-monitoring.png",width:"100%",caption:"Live Device Data Monitoring"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);