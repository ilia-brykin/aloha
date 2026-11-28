import{t as e}from"./chunk.AlohaPage.BvUvrvQ4.js";import{t}from"./chunk.AlohaTableProps.BIN1mKDB.js";import{Bt as n,Ht as r,Ut as i,Vt as a,an as o,gn as s,ln as c,pn as l,qt as u}from"./chunk.vendor.SEynj6EJ.js";import{t as d}from"./chunk.AlohaExample.Bx3NX4bX.js";import{fn as f,hn as p,mn as m,sn as h,t as g}from"./bundle.index.LlT2KVEy.js";function _(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  :text="isAlertVisible ? '_A_ALERT_GROUP_ANNOUNCE_BTN_HIDE_' : '_A_ALERT_GROUP_ANNOUNCE_BTN_SHOW_'"
  @click="toggleAlerts"
/>

<!-- default announce="alert": role="alert" aria-atomic="true" -->
<a-alert
  :is-visible="isAlertVisible"
  type="danger"
  text="_A_ALERT_GROUP_ANNOUNCE_TEXT_ALERT_"
/>

<!-- role="status" aria-atomic="true" -->
<a-alert
  :is-visible="isAlertVisible"
  announce="status"
  type="success"
  text="_A_ALERT_GROUP_ANNOUNCE_TEXT_STATUS_"
/>

<!-- no role and no aria-atomic -->
<a-alert
  :is-visible="isAlertVisible"
  announce="none"
  type="info"
  text="_A_ALERT_GROUP_ANNOUNCE_TEXT_NONE_"
/>

<!-- role and aria-atomic win over announce: role="status" aria-atomic="false" -->
<a-alert
  :is-visible="isAlertVisible"
  announce="alert"
  role="status"
  :aria-atomic="false"
  text="..."
/>`}}function v(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";

export default {
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const isAlertVisible = ref(false);

    const toggleAlerts = () => {
      isAlertVisible.value = !isAlertVisible.value;
    };

    return {
      isAlertVisible,
      toggleAlerts,
    };
  },
};`}}var y={name:`PageAlertAnnounce`,components:{AAlert:f,AButton:h,AlohaExample:d},setup(){let{codeHtml:e}=_(),{codeJs:t}=v(),n=s(!1);return{codeHtml:e,codeJs:t,isAlertVisible:n,toggleAlerts:()=>{n.value=!n.value}}}};function b(e,t,n,i,s,d){let f=c(`a-button`),p=c(`a-alert`),m=c(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_ANNOUNCE_HEADER_`,description:`_A_ALERT_GROUP_ANNOUNCE_DESCRIPTION_`,props:[`announce`,`role`,`aria-atomic`]},{default:l(()=>[a(`div`,null,[u(f,{class:`a_btn a_btn_primary`,text:e.isAlertVisible?`_A_ALERT_GROUP_ANNOUNCE_BTN_HIDE_`:`_A_ALERT_GROUP_ANNOUNCE_BTN_SHOW_`,onClick:e.toggleAlerts},null,8,[`text`,`onClick`])]),u(p,{"is-visible":e.isAlertVisible,type:`danger`,text:`_A_ALERT_GROUP_ANNOUNCE_TEXT_ALERT_`},null,8,[`is-visible`]),u(p,{"is-visible":e.isAlertVisible,announce:`status`,type:`success`,text:`_A_ALERT_GROUP_ANNOUNCE_TEXT_STATUS_`},null,8,[`is-visible`]),u(p,{"is-visible":e.isAlertVisible,announce:`none`,type:`info`,text:`_A_ALERT_GROUP_ANNOUNCE_TEXT_NONE_`},null,8,[`is-visible`])]),_:1},8,[`code-html`,`code-js`])}var x=g(y,[[`render`,b]]);function S(){return{codeHtml:`<a-alert
  html="AAlert"
  :is-visible="true"
></a-alert>`}}function C(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertTypes",
  components: {
    AAlert,
  },
};`}}var w={name:`PageAlertBasic`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=S(),{codeJs:t}=C();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function T(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`is-visible`},{default:l(()=>[u(d,{html:`AAlert`,"is-visible":!0})]),_:1},8,[`code-html`,`code-js`])}var E=g(w,[[`render`,T]]);function D(){return{codeHtml:`<a-alert 
  text="Aloha"
  :is-visible="true"
  type="success"
  :btn-close-attributes="{ class: 'a_btn_close a_fs_3' }"
  :closable="true"
></a-alert>`}}function O(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBtnClose",
  components: {
    AAlert,
  },
};`}}var ee={name:`PageAlertBtnClose`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=D(),{codeJs:t}=O();return{codeHtml:e,codeJs:t}}};function te(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_BTN_CLOSE_HEADER_`,description:`_A_ALERT_GROUP_BTN_CLOSE_DESCRIPTION_`,props:[`btn-close-attributes`,`closable`]},{default:l(()=>[u(d,{text:`Aloha`,"is-visible":!0,type:`success`,"btn-close-attributes":{class:`a_btn_close a_fs_3`},closable:!0})]),_:1},8,[`code-html`,`code-js`])}var k=g(ee,[[`render`,te]]);function A(){return{codeHtml:`<div>
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
</a-alert>`}}function j(){return{codeJs:`import {
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
};`}}var M={name:`PageAlertClosable`,components:{AAlert:f,AButton:h,AlohaExample:d},setup(){let{codeHtml:e}=A(),{codeJs:t}=j(),n=s(!0);return{codeHtml:e,codeJs:t,hideAlert:()=>{n.value=!1},isAlertVisible:n,showAlert:()=>{n.value=!0}}}};function N(e,t,n,s,d,f){let p=c(`a-button`),m=c(`a-alert`),h=c(`aloha-example`);return o(),r(h,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_CLOSABLE_HEADER_`,description:`_A_ALERT_GROUP_CLOSABLE_DESCRIPTION_`,props:`closable`,emits:`close`},{default:l(()=>[a(`div`,null,[e.isAlertVisible?i(``,!0):(o(),r(p,{key:0,class:`a_btn a_btn_primary`,text:`_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_`,onClick:e.showAlert},null,8,[`onClick`]))]),u(m,{html:`Alert success`,"is-visible":e.isAlertVisible,type:`success`,closable:!0,onClose:e.hideAlert},null,8,[`is-visible`,`onClose`])]),_:1},8,[`code-html`,`code-js`])}var P=g(M,[[`render`,N]]);function F(){return{codeHtml:`<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :show-icon="true"
  icon-class="a_width_6 a_height_6"
  alert-class="a_p_5"
  alert-content-class="a_text_center"
>
</a-alert>`}}function I(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertCss",
  components: {
    AAlert,
  },
};`}}var L={name:`PageAlertCss`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t}}};function R(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_CSS_HEADER_`,description:`_A_ALERT_GROUP_CSS_DESCRIPTION_`,props:[`icon-class`,`alert-class`,`alert-content-class`]},{default:l(()=>[u(d,{html:`Alert success`,"is-visible":!0,type:`success`,"show-icon":!0,"icon-class":`a_width_6 a_height_6`,"alert-class":`a_p_5`,"alert-content-class":`a_text_center`})]),_:1},8,[`code-html`,`code-js`])}var z=g(L,[[`render`,R]]);function B(){return{codeHtml:`<div
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
</a-alert>`}}function V(){return{codeJs:`import {
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
};`}}var H={name:`PageAlertExposes`,components:{AAlert:f,AButton:h,AlohaExample:d},setup(){let{codeHtml:e}=B(),{codeJs:t}=V(),n=s(void 0);return{alertRef:n,closeAlert:()=>{n.value.close()},codeHtml:e,codeJs:t,showAlert:()=>{n.value.isHidden=!1}}}},U={class:`a_btn_group`};function W(e,t,n,i,s,d){let f=c(`a-button`),p=c(`a-alert`),m=c(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_EXPOSES_HEADER_`,exposes:[`close`,`isHidden`]},{default:l(()=>[a(`div`,U,[u(f,{class:`a_btn a_btn_outline_primary`,text:`_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_`,onClick:e.closeAlert},null,8,[`onClick`]),u(f,{class:`a_btn a_btn_outline_primary`,text:`_A_ALERT_GROUP_EXPOSES_BTN_SHOW_`,onClick:e.showAlert},null,8,[`onClick`])]),u(p,{ref:`alertRef`,"alert-class":`a_mt_3`,html:`Alert success`,"is-visible":!0,type:`success`,closable:!0,"remove-alert-on-close":!0},null,512)]),_:1},8,[`code-html`,`code-js`])}var G=g(H,[[`render`,W]]);function K(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function q(){return{codeJs:`import { 
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
};`}}var J={name:`PageAlertHtml`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function Y(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_HTML_HEADER_`,description:`_A_ALERT_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:l(()=>[u(d,{html:e.html,"is-visible":!0,type:`primary`},null,8,[`html`])]),_:1},8,[`code-html`,`code-js`])}var X=g(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-alert 
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
</a-alert>`}}function Q(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsCustom",
  components: {
    AAlert,
  },
};`}}var ne={name:`PageAlertIconsCustom`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t}}};function re(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_ICONS_CUSTOM_HEADER_`,description:`_A_ALERT_GROUP_ICONS_CUSTOM_DESCRIPTION_`,props:[`icon`,`show-icon`]},{default:l(()=>[u(d,{html:`Alert success`,"is-visible":!0,type:`success`,"show-icon":!0,icon:`Boxes`}),u(d,{html:`Alert info`,"is-visible":!0,type:`info`,"show-icon":!0,icon:`EyeFill`}),u(d,{html:`Alert warning`,"is-visible":!0,type:`warning`,"show-icon":!0,icon:`EyeSlash`}),u(d,{html:`Alert danger`,"is-visible":!0,type:`danger`,"show-icon":!0,icon:`House`}),u(d,{html:`Alert primary`,"is-visible":!0,type:`primary`,"show-icon":!0,icon:`Bell`})]),_:1},8,[`code-html`,`code-js`])}var ie=g(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-alert 
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
</a-alert>`}}function oe(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsDefault",
  components: {
    AAlert,
  },
};`}}var se={name:`PageAlertIconsDefault`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t}}};function ce(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_ICONS_DEFAULT_HEADER_`,description:`_A_ALERT_GROUP_ICONS_DEFAULT_DESCRIPTION_`,props:`show-icon`},{default:l(()=>[u(d,{html:`Alert success`,"is-visible":!0,type:`success`,"show-icon":!0}),u(d,{html:`Alert info`,"is-visible":!0,type:`info`,"show-icon":!0}),u(d,{html:`Alert warning`,"is-visible":!0,type:`warning`,"show-icon":!0}),u(d,{html:`Alert danger`,"is-visible":!0,type:`danger`,"show-icon":!0})]),_:1},8,[`code-html`,`code-js`])}var le=g(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-alert 
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
></a-alert>`}}function de(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertRemoveOnClose",
  components: {
    AAlert,
  },
};`}}var fe={name:`PageAlertRemoveOnClose`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t}}};function pe(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_HEADER_`,description:`_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_DESCRIPTION_`,props:[`closable`,`remove-alert-on-close`]},{default:l(()=>[u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert success`,type:`success`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert info`,type:`info`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert warning`,type:`warning`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert danger`,type:`danger`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert primary`,type:`primary`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert secondary`,type:`secondary`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert tertiary`,type:`tertiary`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert dark`,type:`dark`}),u(d,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert light`,type:`light`})]),_:1},8,[`code-html`,`code-js`])}var me=g(fe,[[`render`,pe]]);function he(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function ge(){return{codeJs:`import { 
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
};`}}var _e={name:`PageAlertSafeHtml`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function ve(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_SAFE_HTML_HEADER_`,description:`_A_ALERT_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:l(()=>[u(d,{"safe-html":e.html,"is-visible":!0,type:`primary`},null,8,[`safe-html`])]),_:1},8,[`code-html`,`code-js`])}var ye=g(_e,[[`render`,ve]]);function be(){return{codeHtml:`<a-alert 
  :is-visible="true"
  type="success"
>
  <ul>
    <li>Aloha 1</li>
    <li>Aloha 2</li>
    <li>Aloha 3</li>
    <li>Aloha 4</li>
  </ul>
</a-alert>`}}function xe(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSlot",
  components: {
    AAlert,
  },
};`}}var Se={name:`PageAlertSlot`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=be(),{codeJs:t}=xe();return{codeHtml:e,codeJs:t}}};function Ce(e,t,n,i,s,d){let f=c(`a-alert`),p=c(`aloha-example`);return o(),r(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_SLOT_HEADER_`,description:`_A_ALERT_GROUP_SLOT_DESCRIPTION_`,slots:`default`},{default:l(()=>[u(f,{"is-visible":!0,type:`success`},{default:l(()=>[...t[0]||=[a(`ul`,null,[a(`li`,null,`Aloha 1`),a(`li`,null,`Aloha 2`),a(`li`,null,`Aloha 3`),a(`li`,null,`Aloha 4`)],-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var we=g(Se,[[`render`,Ce]]);function Te(){return{codeHtml:`<a-alert 
  :text="text"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function Ee(){return{codeJs:`import { 
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
};`}}var De={name:`PageAlertText`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet`}}};function Oe(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_TEXT_HEADER_`,description:`_A_ALERT_GROUP_TEXT_DESCRIPTION_`,props:`text`},{default:l(()=>[u(d,{text:e.text,"is-visible":!0,type:`primary`},null,8,[`text`])]),_:1},8,[`code-html`,`code-js`])}var ke=g(De,[[`render`,Oe]]);function Ae(){return{codeHtml:`<a-alert 
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
></a-alert>`}}function je(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBasic",
  components: {
    AAlert,
  },
};`}}var Me={name:`PageAlertTypes`,components:{AAlert:f,AlohaExample:d},setup(){let{codeHtml:e}=Ae(),{codeJs:t}=je();return{codeHtml:e,codeJs:t}}};function Ne(e,t,n,i,a,s){let d=c(`a-alert`),f=c(`aloha-example`);return o(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_TYPES_HEADER_`,description:`_A_ALERT_GROUP_TYPES_DESCRIPTION_`,props:`type`},{default:l(()=>[u(d,{html:`Alert success`,"is-visible":!0,type:`success`}),u(d,{html:`Alert info`,"is-visible":!0,type:`info`}),u(d,{html:`Alert warning`,"is-visible":!0,type:`warning`}),u(d,{html:`Alert danger`,"is-visible":!0,type:`danger`}),u(d,{html:`Alert primary`,"is-visible":!0,type:`primary`}),u(d,{html:`Alert secondary`,"is-visible":!0,type:`secondary`}),u(d,{html:`Alert tertiary`,"is-visible":!0,type:`tertiary`}),u(d,{html:`Alert dark`,"is-visible":!0,type:`dark`}),u(d,{html:`Alert light`,"is-visible":!0,type:`light`})]),_:1},8,[`code-html`,`code-js`])}var Pe=g(Me,[[`render`,Ne]]);function $(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function Fe(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function Ie(){let e=n(()=>p({placeholder:`_A_ALERT_COMPONENT_NAME_`}));return{pageTitle:n(()=>`Alert${e.value?` (${e.value})`:``}`)}}function Le(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`announce`,description:`_A_ALERT_PROPS_ANNOUNCE_DESCRIPTION_`,type:`String`,default:`alert`,required:!1},{name:`aria-atomic`,description:`_A_ALERT_PROPS_ARIA_ATOMIC_DESCRIPTION_`,type:`Boolean / String`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`btn-close-icon`,description:`_A_ALERT_PROPS_BTN_CLOSE_ICON_DESCRIPTION_`,type:`String`,default:`XLg`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`role`,description:`_A_ALERT_PROPS_ROLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_A_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function Re(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var ze={name:`PageAlert`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:m,PageAlertAnnounce:x,PageAlertBasic:E,PageAlertBtnClose:k,PageAlertClosable:P,PageAlertCss:z,PageAlertExposes:G,PageAlertHtml:X,PageAlertIconsCustom:ie,PageAlertIconsDefault:le,PageAlertRemoveOnClose:me,PageAlertSafeHtml:ye,PageAlertSlot:we,PageAlertText:ke,PageAlertTypes:Pe},setup(){let{pageTitle:e}=Ie(),{dataProps:t}=Le(),{dataSlots:n}=Re(),{dataEvents:r}=$(),{dataExposes:i}=Fe();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}}};function Be(e,t,n,i,a,s){let d=c(`a-translation`),f=c(`page-alert-basic`),p=c(`page-alert-types`),m=c(`page-alert-icons-default`),h=c(`page-alert-icons-custom`),g=c(`page-alert-css`),_=c(`page-alert-closable`),v=c(`page-alert-announce`),y=c(`page-alert-remove-on-close`),b=c(`page-alert-text`),x=c(`page-alert-html`),S=c(`page-alert-safe-html`),C=c(`page-alert-btn-close`),w=c(`page-alert-slot`),T=c(`page-alert-exposes`),E=c(`aloha-table-props`),D=c(`aloha-table-css-vars`),O=c(`aloha-page`);return o(),r(O,{"page-title":e.pageTitle},{body:l(()=>[u(d,{tag:`p`,html:`_A_ALERT_COMPONENT_DESCRIPTION_`}),u(f),u(p),u(m),u(h),u(g),u(_),u(v),u(y),u(b),u(x),u(S),u(C),u(w),u(T),u(E,{data:e.dataProps},null,8,[`data`]),u(E,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),u(E,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),u(E,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),u(D,{files:`utils/alert`})]),_:1},8,[`page-title`])}var Ve=g(ze,[[`render`,Be]]);export{Ve as default};