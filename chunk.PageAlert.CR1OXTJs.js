import{A as d,a as D}from"./chunk.AlohaExample.CjDVl1NM.js";import{A as x}from"./chunk.AlohaTableProps.q_BJaHRa.js";import{u as A,_ as m,c as P,g as J,A as q}from"./bundle.index.DSQvlgRY.js";import{V as c,aT as u,e as a,W as _,_ as t,r as g,Z as h,a_ as w,d as E}from"./chunk.vendor.D2EiI1BL.js";import"./chunk.vendor-lodash.FjHQi8Go.js";import"./chunk.APageTabTitle.BJhFT2dB.js";import"./chunk.AlohaHighlightjs.B_1iuPG1.js";import"./chunk.ATable.CTNmy9OH.js";import"./chunk.translations-ar.DEWt73y8.js";import"./chunk.translations-de.CN5eAU-4.js";import"./chunk.translations-en.CPCEcTAP.js";import"./chunk.translations-es.BKTK5PUv.js";import"./chunk.translations-fr.CslimZmU.js";import"./chunk.translations-hr.CiJ7_Y2m.js";import"./chunk.translations-it.H45F8miC.js";import"./chunk.translations-ru.o-dOzdYz.js";function B(){return{codeHtml:`<a-alert>
  html="AAlert"
  :is-visible="true"
</a-alert>`}}function U(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertTypes",
  components: {
    AAlert,
  },
};`}}const j={name:"PageAlertBasic",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=B(),{codeJs:s}=U();return{codeHtml:e,codeJs:s,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function M(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:"is-visible"},{default:u(()=>[t(o,{html:"AAlert","is-visible":!0})]),_:1},8,["code-html","code-js"])}const G=m(j,[["render",M]]);function k(){return{codeHtml:`<a-alert 
  text="Aloha"
  :is-visible="true"
  type="success"
  :btn-close-attributes="{ class: 'a_btn_close a_fs_3' }"
  :closable="true"
></a-alert>`}}function V(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBtnClose",
  components: {
    AAlert,
  },
};`}}const F={name:"PageAlertBtnClose",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=k(),{codeJs:s}=V();return{codeHtml:e,codeJs:s}}};function X(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_BTN_CLOSE_HEADER_",description:"_A_ALERT_GROUP_BTN_CLOSE_DESCRIPTION_",props:["btn-close-attributes","closable"]},{default:u(()=>[t(o,{text:"Aloha","is-visible":!0,type:"success","btn-close-attributes":{class:"a_btn_close a_fs_3"},closable:!0})]),_:1},8,["code-html","code-js"])}const W=m(F,[["render",X]]);function Q(){return{codeHtml:`<div>
  <a-button
    v-if="!isAlertVisible"
    text="_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_"
    @click="showAlert"
  >
  </a-button>
</div>
<a-alert 
  html="Alert success"
  :is-visible="isAlertVisible"
  type="success"
  :closable="true"
  @close="hideAlert"
>
</a-alert>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageAlertClosable",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const isAlertVisible = ref(true);

    const showAlert = () => {
      isAlertVisible.value = true;
    };

    const hideAlert = () => {
      isAlertVisible.value = false;
    };
    
    return {
      hideAlert,
      isAlertVisible,
      showAlert,
    };
  },
};`}}const Z={name:"PageAlertClosable",components:{AAlert:A,AButton:P,AlohaExample:d},setup(){const{codeHtml:e}=Q(),{codeJs:s}=Y(),l=g(!0);return{codeHtml:e,codeJs:s,hideAlert:()=>{l.value=!1},isAlertVisible:l,showAlert:()=>{l.value=!0}}}};function z(e,s,l,n,i,p){const o=a("a-button"),r=a("a-alert"),b=a("aloha-example");return _(),c(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CLOSABLE_HEADER_",description:"_A_ALERT_GROUP_CLOSABLE_DESCRIPTION_",props:"closable",emits:"close"},{default:u(()=>[h("div",null,[e.isAlertVisible?w("",!0):(_(),c(o,{key:0,class:"a_btn a_btn_primary",text:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_",onClick:e.showAlert},null,8,["onClick"]))]),t(r,{html:"Alert success","is-visible":e.isAlertVisible,type:"success",closable:!0,onClose:e.hideAlert},null,8,["is-visible","onClose"])]),_:1},8,["code-html","code-js"])}const K=m(Z,[["render",z]]);function ee(){return{codeHtml:`<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :show-icon="true"
  icon-class="a_width_6 a_height_6"
  alert-class="a_p_5"
  alert-content-class="a_text_center"
>
</a-alert>`}}function te(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertCss",
  components: {
    AAlert,
  },
};`}}const se={name:"PageAlertCss",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=ee(),{codeJs:s}=te();return{codeHtml:e,codeJs:s}}};function oe(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CSS_HEADER_",description:"_A_ALERT_GROUP_CSS_DESCRIPTION_",props:["icon-class","alert-class","alert-content-class"]},{default:u(()=>[t(o,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0,"icon-class":"a_width_6 a_height_6","alert-class":"a_p_5","alert-content-class":"a_text_center"})]),_:1},8,["code-html","code-js"])}const ae=m(se,[["render",oe]]);function le(){return{codeHtml:`<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_"
    @click="closeAlert"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_ALERT_GROUP_EXPOSES_BTN_SHOW_"
    @click="showAlert"
  ></a-button>
</div>
<a-alert 
  ref="alertRef"
  alert-class="a_mt_3"
  html="Alert success"
  :is-visible="true"
  type="success"
  :closable="true"
  :remove-alert-on-close="true"
>
</a-alert>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageAlertExposes",
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const alertRef = ref(undefined);

    const closeAlert = () => {
      alertRef.value.close();
    };

    const showAlert = () => {
      alertRef.value.isHidden = false;
    };
    
    return {
      closeAlert,
      showAlert,
    };
  },
};`}}const ne={name:"PageAlertExposes",components:{AAlert:A,AButton:P,AlohaExample:d},setup(){const{codeHtml:e}=le(),{codeJs:s}=re(),l=g(void 0);return{alertRef:l,closeAlert:()=>{l.value.close()},codeHtml:e,codeJs:s,showAlert:()=>{l.value.isHidden=!1}}}},ie={class:"a_btn_group"};function ce(e,s,l,n,i,p){const o=a("a-button"),r=a("a-alert"),b=a("aloha-example");return _(),c(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_EXPOSES_HEADER_",exposes:["close","isHidden"]},{default:u(()=>[h("div",ie,[t(o,{class:"a_btn a_btn_outline_primary",text:"_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_",onClick:e.closeAlert},null,8,["onClick"]),t(o,{class:"a_btn a_btn_outline_primary",text:"_A_ALERT_GROUP_EXPOSES_BTN_SHOW_",onClick:e.showAlert},null,8,["onClick"])]),t(r,{ref:"alertRef","alert-class":"a_mt_3",html:"Alert success","is-visible":!0,type:"success",closable:!0,"remove-alert-on-close":!0},null,512)]),_:1},8,["code-html","code-js"])}const ue=m(ne,[["render",ce]]);function _e(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function me(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertHtml",
  components: {
    AAlert,
  },
  setup() {
    const html = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;
      
    return {
      html,
    };  
  },
};`}}const pe={name:"PageAlertHtml",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=_e(),{codeJs:s}=me();return{codeHtml:e,codeJs:s,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function de(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_HTML_HEADER_",description:"_A_ALERT_GROUP_HTML_DESCRIPTION_",props:"html"},{default:u(()=>[t(o,{html:e.html,"is-visible":!0,type:"primary"},null,8,["html"])]),_:1},8,["code-html","code-js"])}const Ae=m(pe,[["render",de]]);function he(){return{codeHtml:`<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :show-icon="true"
  icon="Boxes"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :show-icon="true"
  icon="EyeFill"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :show-icon="true"
  icon="EyeSlash"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :show-icon="true"
  icon="House"
>
</a-alert>
<a-alert 
  html="Alert primary" 
  :is-visible="true" 
  type="primary"
  :show-icon="true"
  icon="Bell"
>
</a-alert>`}}function be(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsCustom",
  components: {
    AAlert,
  },
};`}}const fe={name:"PageAlertIconsCustom",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=he(),{codeJs:s}=be();return{codeHtml:e,codeJs:s}}};function Ee(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_ICONS_CUSTOM_HEADER_",description:"_A_ALERT_GROUP_ICONS_CUSTOM_DESCRIPTION_",props:["icon","show-icon"]},{default:u(()=>[t(o,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0,icon:"Boxes"}),t(o,{html:"Alert info","is-visible":!0,type:"info","show-icon":!0,icon:"EyeFill"}),t(o,{html:"Alert warning","is-visible":!0,type:"warning","show-icon":!0,icon:"EyeSlash"}),t(o,{html:"Alert danger","is-visible":!0,type:"danger","show-icon":!0,icon:"House"}),t(o,{html:"Alert primary","is-visible":!0,type:"primary","show-icon":!0,icon:"Bell"})]),_:1},8,["code-html","code-js"])}const Pe=m(fe,[["render",Ee]]);function ge(){return{codeHtml:`<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :show-icon="true"
>
</a-alert>`}}function Re(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsDefault",
  components: {
    AAlert,
  },
};`}}const ve={name:"PageAlertIconsDefault",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=ge(),{codeJs:s}=Re();return{codeHtml:e,codeJs:s}}};function Te(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_ICONS_DEFAULT_HEADER_",description:"_A_ALERT_GROUP_ICONS_DEFAULT_DESCRIPTION_",props:"show-icon"},{default:u(()=>[t(o,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0}),t(o,{html:"Alert info","is-visible":!0,type:"info","show-icon":!0}),t(o,{html:"Alert warning","is-visible":!0,type:"warning","show-icon":!0}),t(o,{html:"Alert danger","is-visible":!0,type:"danger","show-icon":!0})]),_:1},8,["code-html","code-js"])}const Se=m(ve,[["render",Te]]);function Oe(){return{codeHtml:`<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :closable="true"
>
</a-alert>
<a-alert 
  html="Alert danger"
  :is-visible="true"
  type="danger"
  :closable="true"
  :remove-alert-on-close="true"
>
</a-alert>`}}function Ie(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertRemoveOnClose",
  components: {
    AAlert,
  },
};`}}const ye={name:"PageAlertRemoveOnClose",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Oe(),{codeJs:s}=Ie();return{codeHtml:e,codeJs:s}}};function Le(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_HEADER_",description:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_DESCRIPTION_",props:["closable","remove-alert-on-close"]},{default:u(()=>[t(o,{html:"Alert success","is-visible":!0,type:"success",closable:!0}),t(o,{html:"Alert danger","is-visible":!0,type:"danger",closable:!0,"remove-alert-on-close":!0})]),_:1},8,["code-html","code-js"])}const $e=m(ye,[["render",Le]]);function Ce(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function He(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSafeHtml",
  components: {
    AAlert,
  },
  setup() {
    const html = \`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>\`;
      
    return {
      html,
    };  
  },
};`}}const Ne={name:"PageAlertSafeHtml",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Ce(),{codeJs:s}=He();return{codeHtml:e,codeJs:s,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function De(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_SAFE_HTML_HEADER_",description:"_A_ALERT_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:u(()=>[t(o,{"safe-html":e.html,"is-visible":!0,type:"primary"},null,8,["safe-html"])]),_:1},8,["code-html","code-js"])}const xe=m(Ne,[["render",De]]);function Je(){return{codeHtml:`<a-alert 
  :is-visible="true"
  type="success"
>
  <ul>
    <li>Aloha 1</li>
    <li>Aloha 2</li>
    <li>Aloha 3</li>
    <li>Aloha 4</li>
  </ul>
</a-alert>`}}function qe(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSlot",
  components: {
    AAlert,
  },
};`}}const we={name:"PageAlertSlot",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Je(),{codeJs:s}=qe();return{codeHtml:e,codeJs:s}}};function Be(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_SLOT_HEADER_",description:"_A_ALERT_GROUP_SLOT_DESCRIPTION_",slots:"default"},{default:u(()=>[t(o,{"is-visible":!0,type:"success"},{default:u(()=>s[0]||(s[0]=[h("ul",null,[h("li",null,"Aloha 1"),h("li",null,"Aloha 2"),h("li",null,"Aloha 3"),h("li",null,"Aloha 4")],-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Ue=m(we,[["render",Be]]);function je(){return{codeHtml:`<a-alert 
  :text="text"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function Me(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertText",
  components: {
    AAlert,
  },
  setup() {
    const text = "Lorem ipsum dolor sit amet";
      
    return {
      text,
    };  
  },
};`}}const Ge={name:"PageAlertText",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=je(),{codeJs:s}=Me();return{codeHtml:e,codeJs:s,text:"Lorem ipsum dolor sit amet"}}};function ke(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_TEXT_HEADER_",description:"_A_ALERT_GROUP_TEXT_DESCRIPTION_",props:"text"},{default:u(()=>[t(o,{text:e.text,"is-visible":!0,type:"primary"},null,8,["text"])]),_:1},8,["code-html","code-js"])}const Ve=m(Ge,[["render",ke]]);function Fe(){return{codeHtml:`<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
>
</a-alert>
<a-alert 
  html="Alert primary" 
  :is-visible="true" 
  type="primary"
>
</a-alert>
<a-alert 
  html="Alert secondary" 
  :is-visible="true" 
  type="secondary"
>
</a-alert>
<a-alert 
  html="Alert tertiary"
  :is-visible="true"
  type="tertiary"
>
</a-alert>
<a-alert 
  html="Alert dark" 
  :is-visible="true" 
  type="dark"
></a-alert>
<a-alert 
  html="Alert light" 
  :is-visible="true" 
  type="light"
></a-alert>`}}function Xe(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBasic",
  components: {
    AAlert,
  },
};`}}const We={name:"PageAlertTypes",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Fe(),{codeJs:s}=Xe();return{codeHtml:e,codeJs:s}}};function Qe(e,s,l,n,i,p){const o=a("a-alert"),r=a("aloha-example");return _(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_TYPES_HEADER_",description:"_A_ALERT_GROUP_TYPES_DESCRIPTION_",props:"type"},{default:u(()=>[t(o,{html:"Alert success","is-visible":!0,type:"success"}),t(o,{html:"Alert info","is-visible":!0,type:"info"}),t(o,{html:"Alert warning","is-visible":!0,type:"warning"}),t(o,{html:"Alert danger","is-visible":!0,type:"danger"}),t(o,{html:"Alert primary","is-visible":!0,type:"primary"}),t(o,{html:"Alert secondary","is-visible":!0,type:"secondary"}),t(o,{html:"Alert tertiary","is-visible":!0,type:"tertiary"}),t(o,{html:"Alert dark","is-visible":!0,type:"dark"}),t(o,{html:"Alert light","is-visible":!0,type:"light"})]),_:1},8,["code-html","code-js"])}const Ye=m(We,[["render",Qe]]);function Ze(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function ze(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Ke(){const e=E(()=>J({placeholder:"_A_ALERT_COMPONENT_NAME_"}));return{pageTitle:E(()=>`Alert${e.value?` (${e.value})`:""}`)}}function et(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"aria-atomic",description:"_A_ALERT_PROPS_ARIA_ATOMIC_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"role",description:"_A_ALERT_PROPS_ROLE_DESCRIPTION_",type:"String",default:"alert",required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function tt(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const st={name:"PageAlert",components:{AlohaPage:D,AlohaTableProps:x,ATranslation:q,PageAlertBasic:G,PageAlertBtnClose:W,PageAlertClosable:K,PageAlertCss:ae,PageAlertExposes:ue,PageAlertHtml:Ae,PageAlertIconsCustom:Pe,PageAlertIconsDefault:Se,PageAlertRemoveOnClose:$e,PageAlertSafeHtml:xe,PageAlertSlot:Ue,PageAlertText:Ve,PageAlertTypes:Ye},setup(){const{pageTitle:e}=Ke(),{dataProps:s}=et(),{dataSlots:l}=tt(),{dataEvents:n}=Ze(),{dataExposes:i}=ze();return{dataEvents:n,dataExposes:i,dataProps:s,dataSlots:l,pageTitle:e}}};function ot(e,s,l,n,i,p){const o=a("a-translation"),r=a("page-alert-basic"),b=a("page-alert-types"),R=a("page-alert-icons-default"),v=a("page-alert-icons-custom"),T=a("page-alert-css"),S=a("page-alert-closable"),O=a("page-alert-remove-on-close"),I=a("page-alert-text"),y=a("page-alert-html"),L=a("page-alert-safe-html"),$=a("page-alert-btn-close"),C=a("page-alert-slot"),H=a("page-alert-exposes"),f=a("aloha-table-props"),N=a("aloha-page");return _(),c(N,{"page-title":e.pageTitle},{body:u(()=>[t(o,{tag:"p",html:"_A_ALERT_COMPONENT_DESCRIPTION_"}),t(r),t(b),t(R),t(v),t(T),t(S),t(O),t(I),t(y),t(L),t($),t(C),t(H),t(f,{data:e.dataProps},null,8,["data"]),t(f,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),t(f,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(f,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Pt=m(st,[["render",ot]]);export{Pt as default};
