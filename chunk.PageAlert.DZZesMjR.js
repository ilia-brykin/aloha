import{A as d,a as D}from"./chunk.AlohaExample.8rElMyDl.js";import{A as x}from"./chunk.AlohaTableProps.D9YkAByO.js";import{a5 as A,_,c as P,g as J,A as w}from"./bundle.index.DouUSTKr.js";import{V as c,aT as u,e as o,W as m,_ as t,r as v,Z as h,a$ as q,d as E}from"./chunk.vendor.BNArDUz4.js";import"./chunk.vendor-lodash.qxhehls9.js";import"./chunk.APageTabTitle.uLd0LT3L.js";import"./chunk.AlohaHighlightjs.C24k7nGh.js";import"./chunk.ATable.6E3yBmHN.js";import"./chunk.translations-ar.e4PS1tyx.js";import"./chunk.translations-de.OrBYDcrv.js";import"./chunk.translations-en.DQcOH5RE.js";import"./chunk.translations-es.Q19nyFDG.js";import"./chunk.translations-fr.Bcg-ogV6.js";import"./chunk.translations-hr.DSa-1cCn.js";import"./chunk.translations-it.B3WUSlx4.js";import"./chunk.translations-ru.a1BEYSAD.js";function B(){return{codeHtml:`<a-alert>
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
};`}}const j={name:"PageAlertBasic",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=B(),{codeJs:l}=U();return{codeHtml:e,codeJs:l,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function M(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:"is-visible"},{default:u(()=>[t(s,{html:"AAlert","is-visible":!0})]),_:1},8,["code-html","code-js"])}const G=_(j,[["render",M]]);function k(){return{codeHtml:`<a-alert 
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
};`}}const F={name:"PageAlertBtnClose",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=k(),{codeJs:l}=V();return{codeHtml:e,codeJs:l}}};function X(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_BTN_CLOSE_HEADER_",description:"_A_ALERT_GROUP_BTN_CLOSE_DESCRIPTION_",props:["btn-close-attributes","closable"]},{default:u(()=>[t(s,{text:"Aloha","is-visible":!0,type:"success","btn-close-attributes":{class:"a_btn_close a_fs_3"},closable:!0})]),_:1},8,["code-html","code-js"])}const W=_(F,[["render",X]]);function Q(){return{codeHtml:`<div>
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
};`}}const Z={name:"PageAlertClosable",components:{AAlert:A,AButton:P,AlohaExample:d},setup(){const{codeHtml:e}=Q(),{codeJs:l}=Y(),a=v(!0);return{codeHtml:e,codeJs:l,hideAlert:()=>{a.value=!1},isAlertVisible:a,showAlert:()=>{a.value=!0}}}};function z(e,l,a,n,i,p){const s=o("a-button"),r=o("a-alert"),b=o("aloha-example");return m(),c(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CLOSABLE_HEADER_",description:"_A_ALERT_GROUP_CLOSABLE_DESCRIPTION_",props:"closable",emits:"close"},{default:u(()=>[h("div",null,[e.isAlertVisible?q("",!0):(m(),c(s,{key:0,class:"a_btn a_btn_primary",text:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_",onClick:e.showAlert},null,8,["onClick"]))]),t(r,{html:"Alert success","is-visible":e.isAlertVisible,type:"success",closable:!0,onClose:e.hideAlert},null,8,["is-visible","onClose"])]),_:1},8,["code-html","code-js"])}const K=_(Z,[["render",z]]);function ee(){return{codeHtml:`<a-alert 
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
};`}}const se={name:"PageAlertCss",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=ee(),{codeJs:l}=te();return{codeHtml:e,codeJs:l}}};function le(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CSS_HEADER_",description:"_A_ALERT_GROUP_CSS_DESCRIPTION_",props:["icon-class","alert-class","alert-content-class"]},{default:u(()=>[t(s,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0,"icon-class":"a_width_6 a_height_6","alert-class":"a_p_5","alert-content-class":"a_text_center"})]),_:1},8,["code-html","code-js"])}const oe=_(se,[["render",le]]);function ae(){return{codeHtml:`<div
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
};`}}const ne={name:"PageAlertExposes",components:{AAlert:A,AButton:P,AlohaExample:d},setup(){const{codeHtml:e}=ae(),{codeJs:l}=re(),a=v(void 0);return{alertRef:a,closeAlert:()=>{a.value.close()},codeHtml:e,codeJs:l,showAlert:()=>{a.value.isHidden=!1}}}},ie={class:"a_btn_group"};function ce(e,l,a,n,i,p){const s=o("a-button"),r=o("a-alert"),b=o("aloha-example");return m(),c(b,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_EXPOSES_HEADER_",exposes:["close","isHidden"]},{default:u(()=>[h("div",ie,[t(s,{class:"a_btn a_btn_outline_primary",text:"_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_",onClick:e.closeAlert},null,8,["onClick"]),t(s,{class:"a_btn a_btn_outline_primary",text:"_A_ALERT_GROUP_EXPOSES_BTN_SHOW_",onClick:e.showAlert},null,8,["onClick"])]),t(r,{ref:"alertRef","alert-class":"a_mt_3",html:"Alert success","is-visible":!0,type:"success",closable:!0,"remove-alert-on-close":!0},null,512)]),_:1},8,["code-html","code-js"])}const ue=_(ne,[["render",ce]]);function me(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function _e(){return{codeJs:`import { 
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
};`}}const pe={name:"PageAlertHtml",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=me(),{codeJs:l}=_e();return{codeHtml:e,codeJs:l,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function de(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_HTML_HEADER_",description:"_A_ALERT_GROUP_HTML_DESCRIPTION_",props:"html"},{default:u(()=>[t(s,{html:e.html,"is-visible":!0,type:"primary"},null,8,["html"])]),_:1},8,["code-html","code-js"])}const Ae=_(pe,[["render",de]]);function he(){return{codeHtml:`<a-alert 
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
};`}}const fe={name:"PageAlertIconsCustom",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=he(),{codeJs:l}=be();return{codeHtml:e,codeJs:l}}};function Ee(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_ICONS_CUSTOM_HEADER_",description:"_A_ALERT_GROUP_ICONS_CUSTOM_DESCRIPTION_",props:["icon","show-icon"]},{default:u(()=>[t(s,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0,icon:"Boxes"}),t(s,{html:"Alert info","is-visible":!0,type:"info","show-icon":!0,icon:"EyeFill"}),t(s,{html:"Alert warning","is-visible":!0,type:"warning","show-icon":!0,icon:"EyeSlash"}),t(s,{html:"Alert danger","is-visible":!0,type:"danger","show-icon":!0,icon:"House"}),t(s,{html:"Alert primary","is-visible":!0,type:"primary","show-icon":!0,icon:"Bell"})]),_:1},8,["code-html","code-js"])}const Pe=_(fe,[["render",Ee]]);function ve(){return{codeHtml:`<a-alert 
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
</a-alert>`}}function ge(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsDefault",
  components: {
    AAlert,
  },
};`}}const Re={name:"PageAlertIconsDefault",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=ve(),{codeJs:l}=ge();return{codeHtml:e,codeJs:l}}};function Te(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_ICONS_DEFAULT_HEADER_",description:"_A_ALERT_GROUP_ICONS_DEFAULT_DESCRIPTION_",props:"show-icon"},{default:u(()=>[t(s,{html:"Alert success","is-visible":!0,type:"success","show-icon":!0}),t(s,{html:"Alert info","is-visible":!0,type:"info","show-icon":!0}),t(s,{html:"Alert warning","is-visible":!0,type:"warning","show-icon":!0}),t(s,{html:"Alert danger","is-visible":!0,type:"danger","show-icon":!0})]),_:1},8,["code-html","code-js"])}const Se=_(Re,[["render",Te]]);function Oe(){return{codeHtml:`<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert success"
  type="success"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert info"
  type="info"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert warning"
  type="warning"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert danger"
  type="danger"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert primary"
  type="primary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert secondary"
  type="secondary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert tertiary"
  type="tertiary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert dark"
  type="dark"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert light"
  type="light"
></a-alert>`}}function ye(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertRemoveOnClose",
  components: {
    AAlert,
  },
};`}}const Ie={name:"PageAlertRemoveOnClose",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Oe(),{codeJs:l}=ye();return{codeHtml:e,codeJs:l}}};function Le(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_HEADER_",description:"_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_DESCRIPTION_",props:["closable","remove-alert-on-close"]},{default:u(()=>[t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert success",type:"success"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert info",type:"info"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert warning",type:"warning"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert danger",type:"danger"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert primary",type:"primary"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert secondary",type:"secondary"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert tertiary",type:"tertiary"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert dark",type:"dark"}),t(s,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:"Alert light",type:"light"})]),_:1},8,["code-html","code-js"])}const Ce=_(Ie,[["render",Le]]);function $e(){return{codeHtml:`<a-alert 
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
};`}}const Ne={name:"PageAlertSafeHtml",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=$e(),{codeJs:l}=He();return{codeHtml:e,codeJs:l,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function De(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_SAFE_HTML_HEADER_",description:"_A_ALERT_GROUP_SAFE_HTML_DESCRIPTION_",props:"safe-html"},{default:u(()=>[t(s,{"safe-html":e.html,"is-visible":!0,type:"primary"},null,8,["safe-html"])]),_:1},8,["code-html","code-js"])}const xe=_(Ne,[["render",De]]);function Je(){return{codeHtml:`<a-alert 
  :is-visible="true"
  type="success"
>
  <ul>
    <li>Aloha 1</li>
    <li>Aloha 2</li>
    <li>Aloha 3</li>
    <li>Aloha 4</li>
  </ul>
</a-alert>`}}function we(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSlot",
  components: {
    AAlert,
  },
};`}}const qe={name:"PageAlertSlot",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Je(),{codeJs:l}=we();return{codeHtml:e,codeJs:l}}};function Be(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_SLOT_HEADER_",description:"_A_ALERT_GROUP_SLOT_DESCRIPTION_",slots:"default"},{default:u(()=>[t(s,{"is-visible":!0,type:"success"},{default:u(()=>l[0]||(l[0]=[h("ul",null,[h("li",null,"Aloha 1"),h("li",null,"Aloha 2"),h("li",null,"Aloha 3"),h("li",null,"Aloha 4")],-1)])),_:1})]),_:1},8,["code-html","code-js"])}const Ue=_(qe,[["render",Be]]);function je(){return{codeHtml:`<a-alert 
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
};`}}const Ge={name:"PageAlertText",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=je(),{codeJs:l}=Me();return{codeHtml:e,codeJs:l,text:"Lorem ipsum dolor sit amet"}}};function ke(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_TEXT_HEADER_",description:"_A_ALERT_GROUP_TEXT_DESCRIPTION_",props:"text"},{default:u(()=>[t(s,{text:e.text,"is-visible":!0,type:"primary"},null,8,["text"])]),_:1},8,["code-html","code-js"])}const Ve=_(Ge,[["render",ke]]);function Fe(){return{codeHtml:`<a-alert 
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
};`}}const We={name:"PageAlertTypes",components:{AAlert:A,AlohaExample:d},setup(){const{codeHtml:e}=Fe(),{codeJs:l}=Xe();return{codeHtml:e,codeJs:l}}};function Qe(e,l,a,n,i,p){const s=o("a-alert"),r=o("aloha-example");return m(),c(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_ALERT_GROUP_TYPES_HEADER_",description:"_A_ALERT_GROUP_TYPES_DESCRIPTION_",props:"type"},{default:u(()=>[t(s,{html:"Alert success","is-visible":!0,type:"success"}),t(s,{html:"Alert info","is-visible":!0,type:"info"}),t(s,{html:"Alert warning","is-visible":!0,type:"warning"}),t(s,{html:"Alert danger","is-visible":!0,type:"danger"}),t(s,{html:"Alert primary","is-visible":!0,type:"primary"}),t(s,{html:"Alert secondary","is-visible":!0,type:"secondary"}),t(s,{html:"Alert tertiary","is-visible":!0,type:"tertiary"}),t(s,{html:"Alert dark","is-visible":!0,type:"dark"}),t(s,{html:"Alert light","is-visible":!0,type:"light"})]),_:1},8,["code-html","code-js"])}const Ye=_(We,[["render",Qe]]);function Ze(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function ze(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Ke(){const e=E(()=>J({placeholder:"_A_ALERT_COMPONENT_NAME_"}));return{pageTitle:E(()=>`Alert${e.value?` (${e.value})`:""}`)}}function et(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"aria-atomic",description:"_A_ALERT_PROPS_ARIA_ATOMIC_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"btn-close-icon",description:"_A_ALERT_PROPS_BTN_CLOSE_ICON_DESCRIPTION_",type:"String",default:"XLg",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"role",description:"_A_ALERT_PROPS_ROLE_DESCRIPTION_",type:"String",default:"alert",required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function tt(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const st={name:"PageAlert",components:{AlohaPage:D,AlohaTableProps:x,ATranslation:w,PageAlertBasic:G,PageAlertBtnClose:W,PageAlertClosable:K,PageAlertCss:oe,PageAlertExposes:ue,PageAlertHtml:Ae,PageAlertIconsCustom:Pe,PageAlertIconsDefault:Se,PageAlertRemoveOnClose:Ce,PageAlertSafeHtml:xe,PageAlertSlot:Ue,PageAlertText:Ve,PageAlertTypes:Ye},setup(){const{pageTitle:e}=Ke(),{dataProps:l}=et(),{dataSlots:a}=tt(),{dataEvents:n}=Ze(),{dataExposes:i}=ze();return{dataEvents:n,dataExposes:i,dataProps:l,dataSlots:a,pageTitle:e}}};function lt(e,l,a,n,i,p){const s=o("a-translation"),r=o("page-alert-basic"),b=o("page-alert-types"),g=o("page-alert-icons-default"),R=o("page-alert-icons-custom"),T=o("page-alert-css"),S=o("page-alert-closable"),O=o("page-alert-remove-on-close"),y=o("page-alert-text"),I=o("page-alert-html"),L=o("page-alert-safe-html"),C=o("page-alert-btn-close"),$=o("page-alert-slot"),H=o("page-alert-exposes"),f=o("aloha-table-props"),N=o("aloha-page");return m(),c(N,{"page-title":e.pageTitle},{body:u(()=>[t(s,{tag:"p",html:"_A_ALERT_COMPONENT_DESCRIPTION_"}),t(r),t(b),t(g),t(R),t(T),t(S),t(O),t(y),t(I),t(L),t(C),t($),t(H),t(f,{data:e.dataProps},null,8,["data"]),t(f,{"table-label":"Slots",data:e.dataSlots,columns:["name","description"]},null,8,["data"]),t(f,{"table-label":"Events",data:e.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(f,{"table-label":"Exposes",data:e.dataExposes,columns:["name","type","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Pt=_(st,[["render",lt]]);export{Pt as default};
