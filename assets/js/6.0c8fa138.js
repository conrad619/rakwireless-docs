(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{323:function(t,e,i){"use strict";i(107),i(108);e.a={data:function(){return{ltMdDiv:null}},methods:{updateLtMdDiv:function(){var t=document.querySelector("#lt-md-div");if(t){var e=getComputedStyle(t);this.ltMdDiv="block"===e.display}},nav:function(t){t&&(t.includes("://")?window.open(t,"_blank"):this.$router.push("/"===t[t.length-1]?t:"".concat(t,"/")))}},mounted:function(){this.updateLtMdDiv()},updated:function(){this.updateLtMdDiv()}}},326:function(t,e,i){"use strict";var n=i(1),r=i(191).trim;n({target:"String",proto:!0,forced:i(327)("trim")},{trim:function(){return r(this)}})},327:function(t,e,i){var n=i(2),r=i(114);t.exports=function(t){return n((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},402:function(t,e,i){"use strict";i.r(e);i(107),i(49),i(51),i(35),i(76),i(188),i(326),i(113);var n=i(71),r={name:"RkHead",mixins:[i(323).a],props:{img:{type:String},imgWidth:{type:String,default:""},imgHeight:{type:String,default:"50px"},center:{type:Boolean,default:!1}},data:function(){return{id:""}},computed:{v2:function(){return this.center||this.ltMdDiv}},mounted:function(){var t=this;setTimeout((function(){for(var e=document.getElementById(t.id),i=e.parentElement,n=i.children,r=0;r<n.length;++r)if(n[r].id===t.id){n[r-1]&&function(){e.id=n[r-1].id,e.style.cssText="";var t=window.getComputedStyle(n[r-1]).cssText,c=["padding-top","margin-top","margin-bottom"];t.split(";").map((function(t){c.includes(t.split(":")[0].trim())&&(e.style.cssText+="".concat(t,";"))})),i.replaceChild(e,n[r-1])}();break}}),100)},created:function(){this.id="rk-head-".concat(Object(n.b)().replace("-","").slice(0,6))}},c=i(28),s=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.id}},[i("div",{staticClass:"row fit"},[i("div",{staticClass:"row items-center",class:{"col-12 justify-center":t.v2,"q-mr-xl":!t.v2}},[i("img",{attrs:{src:t.img,width:t.imgWidth,height:t.imgHeight}})]),t._v(" "),i("q-space"),t._v(" "),i("div",{staticClass:"column col justify-center text-justify",class:{"col-12 flex flex-center":t.v2}},[t._t("default")],2)],1),t._v(" "),t.v2?t._e():i("q-separator",{staticClass:"q-my-md"})],1)}),[],!1,null,null,null);e.default=s.exports}}]);