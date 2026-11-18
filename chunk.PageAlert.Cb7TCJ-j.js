import{t as e}from"./chunk.AlohaPage.BkECBE7U.js";import{t}from"./chunk.AlohaTableProps.VIRP20vB.js";import{t as n}from"./chunk.AlohaExample.Di24IXNd.js";import{Rt as r,Vt as i,nt as ee,zt as a}from"./bundle.index.7SGEja_c.js";import{Bt as o,Ft as s,It as c,Lt as l,Pt as u,Zt as d,an as f,sn as p,tn as m}from"./chunk.vendor.H0cZuFAV.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<a-alert>
  html="AAlert"
  :is-visible="true"
</a-alert>`}}function _(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertTypes",
  components: {
    AAlert,
  },
};`}}var v={name:`PageAlertBasic`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,html:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function y(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`is-visible`},{default:f(()=>[o(a,{html:`AAlert`,"is-visible":!0})]),_:1},8,[`code-html`,`code-js`])}var b=h(v,[[`render`,y]]);function x(){return{codeHtml:`<a-alert 
  text="Aloha"
  :is-visible="true"
  type="success"
  :btn-close-attributes="{ class: 'a_btn_close a_fs_3' }"
  :closable="true"
></a-alert>`}}function S(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBtnClose",
  components: {
    AAlert,
  },
};`}}var C={name:`PageAlertBtnClose`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t}}};function w(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_BTN_CLOSE_HEADER_`,description:`_A_ALERT_GROUP_BTN_CLOSE_DESCRIPTION_`,props:[`btn-close-attributes`,`closable`]},{default:f(()=>[o(a,{text:`Aloha`,"is-visible":!0,type:`success`,"btn-close-attributes":{class:`a_btn_close a_fs_3`},closable:!0})]),_:1},8,[`code-html`,`code-js`])}var T=h(C,[[`render`,w]]);function E(){return{codeHtml:`<div>
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
</a-alert>`}}function te(){return{codeJs:`import {
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
};`}}var D={name:`PageAlertClosable`,components:{AAlert:i,AButton:a,AlohaExample:n},setup(){let{codeHtml:e}=E(),{codeJs:t}=te(),n=p(!0);return{codeHtml:e,codeJs:t,hideAlert:()=>{n.value=!1},isAlertVisible:n,showAlert:()=>{n.value=!0}}}};function O(e,t,n,r,i,ee){let a=m(`a-button`),u=m(`a-alert`),p=m(`aloha-example`);return d(),c(p,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_CLOSABLE_HEADER_`,description:`_A_ALERT_GROUP_CLOSABLE_DESCRIPTION_`,props:`closable`,emits:`close`},{default:f(()=>[s(`div`,null,[e.isAlertVisible?l(``,!0):(d(),c(a,{key:0,class:`a_btn a_btn_primary`,text:`_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_SHOW_ALERT_`,onClick:e.showAlert},null,8,[`onClick`]))]),o(u,{html:`Alert success`,"is-visible":e.isAlertVisible,type:`success`,closable:!0,onClose:e.hideAlert},null,8,[`is-visible`,`onClose`])]),_:1},8,[`code-html`,`code-js`])}var k=h(D,[[`render`,O]]);function A(){return{codeHtml:`<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :show-icon="true"
  icon-class="a_width_6 a_height_6"
  alert-class="a_p_5"
  alert-content-class="a_text_center"
>
</a-alert>`}}function j(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertCss",
  components: {
    AAlert,
  },
};`}}var M={name:`PageAlertCss`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t}}};function N(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_CSS_HEADER_`,description:`_A_ALERT_GROUP_CSS_DESCRIPTION_`,props:[`icon-class`,`alert-class`,`alert-content-class`]},{default:f(()=>[o(a,{html:`Alert success`,"is-visible":!0,type:`success`,"show-icon":!0,"icon-class":`a_width_6 a_height_6`,"alert-class":`a_p_5`,"alert-content-class":`a_text_center`})]),_:1},8,[`code-html`,`code-js`])}var P=h(M,[[`render`,N]]);function F(){return{codeHtml:`<div
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
</a-alert>`}}function I(){return{codeJs:`import {
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
};`}}var L={name:`PageAlertExposes`,components:{AAlert:i,AButton:a,AlohaExample:n},setup(){let{codeHtml:e}=F(),{codeJs:t}=I(),n=p(void 0);return{alertRef:n,closeAlert:()=>{n.value.close()},codeHtml:e,codeJs:t,showAlert:()=>{n.value.isHidden=!1}}}},R={class:`a_btn_group`};function z(e,t,n,r,i,ee){let a=m(`a-button`),l=m(`a-alert`),u=m(`aloha-example`);return d(),c(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_EXPOSES_HEADER_`,exposes:[`close`,`isHidden`]},{default:f(()=>[s(`div`,R,[o(a,{class:`a_btn a_btn_outline_primary`,text:`_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_`,onClick:e.closeAlert},null,8,[`onClick`]),o(a,{class:`a_btn a_btn_outline_primary`,text:`_A_ALERT_GROUP_EXPOSES_BTN_SHOW_`,onClick:e.showAlert},null,8,[`onClick`])]),o(l,{ref:`alertRef`,"alert-class":`a_mt_3`,html:`Alert success`,"is-visible":!0,type:`success`,closable:!0,"remove-alert-on-close":!0},null,512)]),_:1},8,[`code-html`,`code-js`])}var B=h(L,[[`render`,z]]);function V(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function H(){return{codeJs:`import { 
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
};`}}var U={name:`PageAlertHtml`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=V(),{codeJs:t}=H();return{codeHtml:e,codeJs:t,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function W(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_HTML_HEADER_`,description:`_A_ALERT_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:f(()=>[o(a,{html:e.html,"is-visible":!0,type:`primary`},null,8,[`html`])]),_:1},8,[`code-html`,`code-js`])}var G=h(U,[[`render`,W]]);function K(){return{codeHtml:`<a-alert 
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
</a-alert>`}}function q(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsCustom",
  components: {
    AAlert,
  },
};`}}var J={name:`PageAlertIconsCustom`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=K(),{codeJs:t}=q();return{codeHtml:e,codeJs:t}}};function Y(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_ICONS_CUSTOM_HEADER_`,description:`_A_ALERT_GROUP_ICONS_CUSTOM_DESCRIPTION_`,props:[`icon`,`show-icon`]},{default:f(()=>[o(a,{html:`Alert success`,"is-visible":!0,type:`success`,"show-icon":!0,icon:`Boxes`}),o(a,{html:`Alert info`,"is-visible":!0,type:`info`,"show-icon":!0,icon:`EyeFill`}),o(a,{html:`Alert warning`,"is-visible":!0,type:`warning`,"show-icon":!0,icon:`EyeSlash`}),o(a,{html:`Alert danger`,"is-visible":!0,type:`danger`,"show-icon":!0,icon:`House`}),o(a,{html:`Alert primary`,"is-visible":!0,type:`primary`,"show-icon":!0,icon:`Bell`})]),_:1},8,[`code-html`,`code-js`])}var X=h(J,[[`render`,Y]]);function Z(){return{codeHtml:`<a-alert 
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
</a-alert>`}}function Q(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsDefault",
  components: {
    AAlert,
  },
};`}}var ne={name:`PageAlertIconsDefault`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=Z(),{codeJs:t}=Q();return{codeHtml:e,codeJs:t}}};function re(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_ICONS_DEFAULT_HEADER_`,description:`_A_ALERT_GROUP_ICONS_DEFAULT_DESCRIPTION_`,props:`show-icon`},{default:f(()=>[o(a,{html:`Alert success`,"is-visible":!0,type:`success`,"show-icon":!0}),o(a,{html:`Alert info`,"is-visible":!0,type:`info`,"show-icon":!0}),o(a,{html:`Alert warning`,"is-visible":!0,type:`warning`,"show-icon":!0}),o(a,{html:`Alert danger`,"is-visible":!0,type:`danger`,"show-icon":!0})]),_:1},8,[`code-html`,`code-js`])}var ie=h(ne,[[`render`,re]]);function ae(){return{codeHtml:`<a-alert 
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
></a-alert>`}}function oe(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertRemoveOnClose",
  components: {
    AAlert,
  },
};`}}var se={name:`PageAlertRemoveOnClose`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t}}};function ce(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_HEADER_`,description:`_A_ALERT_GROUP_CLOSABLE_FROM_OUTSIDE_DESCRIPTION_`,props:[`closable`,`remove-alert-on-close`]},{default:f(()=>[o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert success`,type:`success`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert info`,type:`info`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert warning`,type:`warning`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert danger`,type:`danger`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert primary`,type:`primary`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert secondary`,type:`secondary`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert tertiary`,type:`tertiary`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert dark`,type:`dark`}),o(a,{closable:!0,"is-visible":!0,"remove-alert-on-close":!0,html:`Alert light`,type:`light`})]),_:1},8,[`code-html`,`code-js`])}var le=h(se,[[`render`,ce]]);function ue(){return{codeHtml:`<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function de(){return{codeJs:`import { 
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
};`}}var fe={name:`PageAlertSafeHtml`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=ue(),{codeJs:t}=de();return{codeHtml:e,codeJs:t,html:`<p onclick="alert('Aloha')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
      Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
      in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
      vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
      Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
      faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
      Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
      Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
      non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`}}};function pe(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_SAFE_HTML_HEADER_`,description:`_A_ALERT_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:f(()=>[o(a,{"safe-html":e.html,"is-visible":!0,type:`primary`},null,8,[`safe-html`])]),_:1},8,[`code-html`,`code-js`])}var me=h(fe,[[`render`,pe]]);function he(){return{codeHtml:`<a-alert 
  :is-visible="true"
  type="success"
>
  <ul>
    <li>Aloha 1</li>
    <li>Aloha 2</li>
    <li>Aloha 3</li>
    <li>Aloha 4</li>
  </ul>
</a-alert>`}}function ge(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSlot",
  components: {
    AAlert,
  },
};`}}var _e={name:`PageAlertSlot`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t}}};function ve(e,t,n,r,i,ee){let a=m(`a-alert`),l=m(`aloha-example`);return d(),c(l,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_SLOT_HEADER_`,description:`_A_ALERT_GROUP_SLOT_DESCRIPTION_`,slots:`default`},{default:f(()=>[o(a,{"is-visible":!0,type:`success`},{default:f(()=>[...t[0]||=[s(`ul`,null,[s(`li`,null,`Aloha 1`),s(`li`,null,`Aloha 2`),s(`li`,null,`Aloha 3`),s(`li`,null,`Aloha 4`)],-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ye=h(_e,[[`render`,ve]]);function be(){return{codeHtml:`<a-alert 
  :text="text"
  :is-visible="true"
  type="primary"
>
</a-alert>`}}function xe(){return{codeJs:`import { 
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
};`}}var Se={name:`PageAlertText`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=be(),{codeJs:t}=xe();return{codeHtml:e,codeJs:t,text:`Lorem ipsum dolor sit amet`}}};function Ce(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_TEXT_HEADER_`,description:`_A_ALERT_GROUP_TEXT_DESCRIPTION_`,props:`text`},{default:f(()=>[o(a,{text:e.text,"is-visible":!0,type:`primary`},null,8,[`text`])]),_:1},8,[`code-html`,`code-js`])}var we=h(Se,[[`render`,Ce]]);function Te(){return{codeHtml:`<a-alert 
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
></a-alert>`}}function Ee(){return{codeJs:`import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBasic",
  components: {
    AAlert,
  },
};`}}var De={name:`PageAlertTypes`,components:{AAlert:i,AlohaExample:n},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t}}};function $(e,t,n,r,i,ee){let a=m(`a-alert`),s=m(`aloha-example`);return d(),c(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_ALERT_GROUP_TYPES_HEADER_`,description:`_A_ALERT_GROUP_TYPES_DESCRIPTION_`,props:`type`},{default:f(()=>[o(a,{html:`Alert success`,"is-visible":!0,type:`success`}),o(a,{html:`Alert info`,"is-visible":!0,type:`info`}),o(a,{html:`Alert warning`,"is-visible":!0,type:`warning`}),o(a,{html:`Alert danger`,"is-visible":!0,type:`danger`}),o(a,{html:`Alert primary`,"is-visible":!0,type:`primary`}),o(a,{html:`Alert secondary`,"is-visible":!0,type:`secondary`}),o(a,{html:`Alert tertiary`,"is-visible":!0,type:`tertiary`}),o(a,{html:`Alert dark`,"is-visible":!0,type:`dark`}),o(a,{html:`Alert light`,"is-visible":!0,type:`light`})]),_:1},8,[`code-html`,`code-js`])}var Oe=h(De,[[`render`,$]]);function ke(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function Ae(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function je(){let e=u(()=>r({placeholder:`_A_ALERT_COMPONENT_NAME_`}));return{pageTitle:u(()=>`Alert${e.value?` (${e.value})`:``}`)}}function Me(){return{dataProps:[{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-atomic`,description:`_A_ALERT_PROPS_ARIA_ATOMIC_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`btn-close-icon`,description:`_A_ALERT_PROPS_BTN_CLOSE_ICON_DESCRIPTION_`,type:`String`,default:`XLg`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`role`,description:`_A_ALERT_PROPS_ROLE_DESCRIPTION_`,type:`String`,default:`alert`,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1}]}}function Ne(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var Pe={name:`PageAlert`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:ee,PageAlertBasic:b,PageAlertBtnClose:T,PageAlertClosable:k,PageAlertCss:P,PageAlertExposes:B,PageAlertHtml:G,PageAlertIconsCustom:X,PageAlertIconsDefault:ie,PageAlertRemoveOnClose:le,PageAlertSafeHtml:me,PageAlertSlot:ye,PageAlertText:we,PageAlertTypes:Oe},setup(){let{pageTitle:e}=je(),{dataProps:t}=Me(),{dataSlots:n}=Ne(),{dataEvents:r}=ke(),{dataExposes:i}=Ae();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}}};function Fe(e,t,n,r,i,ee){let a=m(`a-translation`),s=m(`page-alert-basic`),l=m(`page-alert-types`),u=m(`page-alert-icons-default`),p=m(`page-alert-icons-custom`),h=m(`page-alert-css`),g=m(`page-alert-closable`),_=m(`page-alert-remove-on-close`),v=m(`page-alert-text`),y=m(`page-alert-html`),b=m(`page-alert-safe-html`),x=m(`page-alert-btn-close`),S=m(`page-alert-slot`),C=m(`page-alert-exposes`),w=m(`aloha-table-props`),T=m(`aloha-table-css-vars`),E=m(`aloha-page`);return d(),c(E,{"page-title":e.pageTitle},{body:f(()=>[o(a,{tag:`p`,html:`_A_ALERT_COMPONENT_DESCRIPTION_`}),o(s),o(l),o(u),o(p),o(h),o(g),o(_),o(v),o(y),o(b),o(x),o(S),o(C),o(w,{data:e.dataProps},null,8,[`data`]),o(w,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),o(w,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),o(w,{"table-label":`Exposes`,data:e.dataExposes,columns:[`name`,`type`,`description`]},null,8,[`data`]),o(T,{files:`utils/alert`})]),_:1},8,[`page-title`])}var Ie=h(Pe,[[`render`,Fe]]);export{Ie as default};