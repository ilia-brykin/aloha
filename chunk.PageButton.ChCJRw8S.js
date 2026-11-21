import{t as e}from"./chunk.AlohaHighlightjs.CA2juRnR.js";import{t}from"./chunk.AlohaPage.CgCjNvWk.js";import{t as n}from"./chunk.AlohaTableProps.Dku3heak.js";import{t as r}from"./chunk.AlohaExample.CzQA68iv.js";import{$t as i,Jt as a,qt as o}from"./bundle.index.BM9f9QEe.js";import{$t as s,Ft as c,It as l,Pt as u,Vt as d,ln as f,rn as p,sn as m}from"./chunk.vendor.BvryzG0o.js";import{t as h}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function g(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_tertiary"
    text="tertiary"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_warning"
    text="warning"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_danger"
    text="danger"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_dark"
    text="dark"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_light"
    text="light"
    @click="onAlert('light')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    :is-switch="true"
    class="a_ml_2"
    text="switch"
  ></a-button>
  <a-button
    :aria-disabled="true"
    :is-switch="true"
    :model-switch="true"
    class="a_ml_2"
    text="switch active"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_success"
    text="outline-success"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_info"
    text="outline-info"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_light"
    text="outline-light"
    @click="onAlert('outline-light')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>`}}function _(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonAriaDisabled",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var v={name:`PageButtonAriaDisabled`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=g(),{codeJs:t}=_();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},y={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function b(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_ARIA_DISABLED_HEADER_`,description:`_A_BUTTON_GROUP_ARIA_DISABLED_DESCRIPTION_`,props:`aria-disabled`},{default:m(()=>[c(`div`,y,[d(o,{class:`a_btn a_btn_primary`,"aria-disabled":!0,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),d(o,{class:`a_btn a_btn_secondary`,"aria-disabled":!0,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),d(o,{class:`a_btn a_btn_tertiary`,"aria-disabled":!0,text:`tertiary`,onClick:t[2]||=t=>e.onAlert(`tertiary`)}),d(o,{class:`a_btn a_btn_success`,"aria-disabled":!0,text:`success`,onClick:t[3]||=t=>e.onAlert(`success`)}),d(o,{class:`a_btn a_btn_info`,"aria-disabled":!0,text:`info`,onClick:t[4]||=t=>e.onAlert(`info`)}),d(o,{class:`a_btn a_btn_warning`,"aria-disabled":!0,text:`warning`,onClick:t[5]||=t=>e.onAlert(`warning`)}),d(o,{class:`a_btn a_btn_danger`,"aria-disabled":!0,text:`danger`,onClick:t[6]||=t=>e.onAlert(`danger`)}),d(o,{class:`a_btn a_btn_dark`,"aria-disabled":!0,text:`dark`,onClick:t[7]||=t=>e.onAlert(`dark`)}),d(o,{class:`a_btn a_btn_light`,"aria-disabled":!0,text:`light`,onClick:t[8]||=t=>e.onAlert(`light`)}),d(o,{class:`a_ml_2`,"aria-disabled":!0,"is-switch":!0,text:`switch`}),d(o,{class:`a_ml_2`,"aria-disabled":!0,"is-switch":!0,"model-switch":!0,text:`switch active`}),d(o,{class:`a_btn a_btn_outline_primary`,"aria-disabled":!0,text:`outline-primary`,onClick:t[9]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,"aria-disabled":!0,text:`outline-secondary`,onClick:t[10]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_tertiary`,"aria-disabled":!0,text:`outline-tertiary`,onClick:t[11]||=t=>e.onAlert(`outline-tertiary`)}),d(o,{class:`a_btn a_btn_outline_success`,"aria-disabled":!0,text:`outline-success`,onClick:t[12]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,"aria-disabled":!0,text:`outline-info`,onClick:t[13]||=t=>e.onAlert(`outline-info`)}),d(o,{class:`a_btn a_btn_outline_warning`,"aria-disabled":!0,text:`outline-warning`,onClick:t[14]||=t=>e.onAlert(`outline-warning`)}),d(o,{class:`a_btn a_btn_outline_danger`,"aria-disabled":!0,text:`outline-danger`,onClick:t[15]||=t=>e.onAlert(`outline-danger`)}),d(o,{class:`a_btn a_btn_outline_dark`,"aria-disabled":!0,text:`outline-dark`,onClick:t[16]||=t=>e.onAlert(`outline-dark`)}),d(o,{class:`a_btn a_btn_outline_light`,"aria-disabled":!0,text:`outline-light`,onClick:t[17]||=t=>e.onAlert(`outline-light`)}),d(o,{class:`a_btn a_btn_transparent_primary`,"aria-disabled":!0,text:`transparent-primary`,onClick:t[18]||=t=>e.onAlert(`transparent-primary`)}),d(o,{class:`a_btn a_btn_transparent_secondary`,"aria-disabled":!0,text:`transparent-secondary`,onClick:t[19]||=t=>e.onAlert(`transparent-secondary`)}),d(o,{class:`a_btn a_btn_transparent_tertiary`,"aria-disabled":!0,text:`transparent-tertiary`,onClick:t[20]||=t=>e.onAlert(`transparent-tertiary`)}),d(o,{class:`a_btn a_btn_transparent_success`,"aria-disabled":!0,text:`transparent-success`,onClick:t[21]||=t=>e.onAlert(`transparent-success`)}),d(o,{class:`a_btn a_btn_transparent_info`,"aria-disabled":!0,text:`transparent-info`,onClick:t[22]||=t=>e.onAlert(`transparent-info`)}),d(o,{class:`a_btn a_btn_transparent_warning`,"aria-disabled":!0,text:`transparent-warning`,onClick:t[23]||=t=>e.onAlert(`transparent-warning`)}),d(o,{class:`a_btn a_btn_transparent_danger`,"aria-disabled":!0,text:`transparent-danger`,onClick:t[24]||=t=>e.onAlert(`transparent-danger`)}),d(o,{class:`a_btn a_btn_transparent_dark`,"aria-disabled":!0,text:`transparent-dark`,onClick:t[25]||=t=>e.onAlert(`transparent-dark`)}),d(o,{class:`a_btn a_btn_transparent_light`,"aria-disabled":!0,text:`transparent-light`,onClick:t[26]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var x=h(v,[[`render`,b]]);function S(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_link"
    text="link"
    @click="onAlert('link')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_tertiary"
    text="tertiary"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_warning"
    text="warning"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_danger"
    text="danger"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_dark"
    text="dark"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_light"
    text="light"
    @click="onAlert('light')"
  ></a-button>
</div>`}}function C(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonBasic",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var w={name:`PageButtonBasic`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=S(),{codeJs:t}=C();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},T={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function E(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_BUTTON_GROUP_BASIC_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,T,[d(o,{class:`a_btn a_btn_link`,text:`link`,onClick:t[0]||=t=>e.onAlert(`link`)}),d(o,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[1]||=t=>e.onAlert(`primary`)}),d(o,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[2]||=t=>e.onAlert(`secondary`)}),d(o,{class:`a_btn a_btn_tertiary`,text:`tertiary`,onClick:t[3]||=t=>e.onAlert(`tertiary`)}),d(o,{class:`a_btn a_btn_success`,text:`success`,onClick:t[4]||=t=>e.onAlert(`success`)}),d(o,{class:`a_btn a_btn_info`,text:`info`,onClick:t[5]||=t=>e.onAlert(`info`)}),d(o,{class:`a_btn a_btn_warning`,text:`warning`,onClick:t[6]||=t=>e.onAlert(`warning`)}),d(o,{class:`a_btn a_btn_danger`,text:`danger`,onClick:t[7]||=t=>e.onAlert(`danger`)}),d(o,{class:`a_btn a_btn_dark`,text:`dark`,onClick:t[8]||=t=>e.onAlert(`dark`)}),d(o,{class:`a_btn a_btn_light`,text:`light`,onClick:t[9]||=t=>e.onAlert(`light`)})])]),_:1},8,[`code-html`,`code-js`])}var D=h(w,[[`render`,E]]);function O(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  :icon-left="{ desktop: 'EyeFill', mobile: 'EyeSlash' }"
  :icon-right="{ mobile: 'EyeSlash' }"
  :loading="loading"
  :text-aria-hidden="true"
  :text-before="{ desktop: '$ ' }"
  :text-screen-reader="{ desktop: 'Aloha', mobile: 'Aloha-mobile' }"
  :text="{ desktop: 'Aloha' }"
  :title="{ desktop: 'Aloha' }"
  class="a_btn a_btn_primary"
  loading-align="left"
  @click="toggleLoading"
></a-button>`}}function k(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonComplex",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};`}}var A={name:`PageButtonComplex`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=O(),{codeJs:t}=k(),n=f(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}};function j(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_COMPLEX_HEADER_`,description:`_A_BUTTON_GROUP_COMPLEX_DESCRIPTION_`,props:[`class`,`loading`,`loading-align`,`text`,`text-before`,`icon-left`,`icon-right`,`title`,`text-aria-hidden`,`text-screen-reader`]},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,"icon-left":{desktop:`EyeFill`,mobile:`EyeSlash`},"icon-right":{mobile:`EyeSlash`},loading:e.loading,"text-aria-hidden":!0,"text-before":{desktop:`$ `},"text-screen-reader":{desktop:`Aloha`,mobile:`Aloha-mobile`},text:{desktop:`Aloha`},title:{desktop:`Aloha`},"loading-align":`left`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`])]),_:1},8,[`code-html`,`code-js`])}var M=h(A,[[`render`,j]]);function N(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    :disabled="true"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    :disabled="true"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_tertiary"
    text="tertiary"
    :disabled="true"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    :disabled="true"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    :disabled="true"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_warning"
    text="warning"
    :disabled="true"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_danger"
    text="danger"
    :disabled="true"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_dark"
    text="dark"
    :disabled="true"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_light"
    text="light"
    :disabled="true"
    @click="onAlert('light')"
  ></a-button>
  <a-button
    class="a_ml_2"
    text="switch"
    :is-switch="true"
    :disabled="true"
  ></a-button>
  <a-button
    class="a_ml_2"
    text="switch active"
    :is-switch="true"
    :model-switch="true"
    :disabled="true"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    :disabled="true"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    :disabled="true"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    :disabled="true"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_success"
    text="outline-success"
    :disabled="true"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_info"
    text="outline-info"
    :disabled="true"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    :disabled="true"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    :disabled="true"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    :disabled="true"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_light"
    text="outline-light"
    :disabled="true"
    @click="onAlert('outline-light')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    :disabled="true"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    :disabled="true"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    :disabled="true"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    :disabled="true"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    :disabled="true"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    :disabled="true"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    :disabled="true"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    :disabled="true"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    :disabled="true"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>`}}function P(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonDisabled",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var F={name:`PageButtonDisabled`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=N(),{codeJs:t}=P();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},I={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function L(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_DISABLED_HEADER_`,description:`_A_BUTTON_GROUP_DISABLED_DESCRIPTION_`,props:`disabled`},{default:m(()=>[c(`div`,I,[d(o,{class:`a_btn a_btn_primary`,text:`primary`,disabled:!0,onClick:t[0]||=t=>e.onAlert(`primary`)}),d(o,{class:`a_btn a_btn_secondary`,text:`secondary`,disabled:!0,onClick:t[1]||=t=>e.onAlert(`secondary`)}),d(o,{class:`a_btn a_btn_tertiary`,text:`tertiary`,disabled:!0,onClick:t[2]||=t=>e.onAlert(`tertiary`)}),d(o,{class:`a_btn a_btn_success`,text:`success`,disabled:!0,onClick:t[3]||=t=>e.onAlert(`success`)}),d(o,{class:`a_btn a_btn_info`,text:`info`,disabled:!0,onClick:t[4]||=t=>e.onAlert(`info`)}),d(o,{class:`a_btn a_btn_warning`,text:`warning`,disabled:!0,onClick:t[5]||=t=>e.onAlert(`warning`)}),d(o,{class:`a_btn a_btn_danger`,text:`danger`,disabled:!0,onClick:t[6]||=t=>e.onAlert(`danger`)}),d(o,{class:`a_btn a_btn_dark`,text:`dark`,disabled:!0,onClick:t[7]||=t=>e.onAlert(`dark`)}),d(o,{class:`a_btn a_btn_light`,text:`light`,disabled:!0,onClick:t[8]||=t=>e.onAlert(`light`)}),d(o,{class:`a_ml_2`,text:`switch`,"is-switch":!0,disabled:!0}),d(o,{class:`a_ml_2`,text:`switch active`,"is-switch":!0,"model-switch":!0,disabled:!0}),d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,disabled:!0,onClick:t[9]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,disabled:!0,onClick:t[10]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_tertiary`,text:`outline-tertiary`,disabled:!0,onClick:t[11]||=t=>e.onAlert(`outline-tertiary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,disabled:!0,onClick:t[12]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,disabled:!0,onClick:t[13]||=t=>e.onAlert(`outline-info`)}),d(o,{class:`a_btn a_btn_outline_warning`,text:`outline-warning`,disabled:!0,onClick:t[14]||=t=>e.onAlert(`outline-warning`)}),d(o,{class:`a_btn a_btn_outline_danger`,text:`outline-danger`,disabled:!0,onClick:t[15]||=t=>e.onAlert(`outline-danger`)}),d(o,{class:`a_btn a_btn_outline_dark`,text:`outline-dark`,disabled:!0,onClick:t[16]||=t=>e.onAlert(`outline-dark`)}),d(o,{class:`a_btn a_btn_outline_light`,text:`outline-light`,disabled:!0,onClick:t[17]||=t=>e.onAlert(`outline-light`)}),d(o,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,disabled:!0,onClick:t[18]||=t=>e.onAlert(`transparent-primary`)}),d(o,{class:`a_btn a_btn_transparent_secondary`,text:`transparent-secondary`,disabled:!0,onClick:t[19]||=t=>e.onAlert(`transparent-secondary`)}),d(o,{class:`a_btn a_btn_transparent_tertiary`,text:`transparent-tertiary`,disabled:!0,onClick:t[20]||=t=>e.onAlert(`transparent-tertiary`)}),d(o,{class:`a_btn a_btn_transparent_success`,text:`transparent-success`,disabled:!0,onClick:t[21]||=t=>e.onAlert(`transparent-success`)}),d(o,{class:`a_btn a_btn_transparent_info`,text:`transparent-info`,disabled:!0,onClick:t[22]||=t=>e.onAlert(`transparent-info`)}),d(o,{class:`a_btn a_btn_transparent_warning`,text:`transparent-warning`,disabled:!0,onClick:t[23]||=t=>e.onAlert(`transparent-warning`)}),d(o,{class:`a_btn a_btn_transparent_danger`,text:`transparent-danger`,disabled:!0,onClick:t[24]||=t=>e.onAlert(`transparent-danger`)}),d(o,{class:`a_btn a_btn_transparent_dark`,text:`transparent-dark`,disabled:!0,onClick:t[25]||=t=>e.onAlert(`transparent-dark`)}),d(o,{class:`a_btn a_btn_transparent_light`,text:`transparent-light`,disabled:!0,onClick:t[26]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var R=h(F,[[`render`,L]]);function z(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>`}}function B(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroup",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var V={name:`PageButtonGroup`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=z(),{codeJs:t}=B();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},H={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},ee={class:`a_btn_group`,role:`group`},te={class:`a_btn_group`,role:`group`};function U(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,H,[c(`div`,ee,[d(o,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),d(o,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),d(o,{class:`a_btn a_btn_success`,text:`success`,onClick:t[2]||=t=>e.onAlert(`success`)}),d(o,{class:`a_btn a_btn_info`,text:`info`,onClick:t[3]||=t=>e.onAlert(`info`)})]),c(`div`,te,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var W=h(V,[[`render`,U]]);function G(){return{codeHtml:`<div
  class="a_btn_group_vertical"
  role="group"
>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>`}}function K(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroupHorizontalVertical",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var q={name:`PageButtonGroupHorizontalVertical`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},J={class:`a_btn_group_vertical`,role:`group`},Y={class:`a_btn_group`,role:`group`},X={class:`a_btn_group`,role:`group`},Z={class:`a_btn_group`,role:`group`};function Q(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,J,[c(`div`,Y,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[0]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[1]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[2]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[3]||=t=>e.onAlert(`outline-info`)})]),c(`div`,X,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})]),c(`div`,Z,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[8]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[9]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[10]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[11]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ne=h(q,[[`render`,Q]]);function re(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group a_btn_group_large"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group a_btn_group_small"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>`}}function ie(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroupSizes",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var ae={name:`PageButtonGroupSizes`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},oe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},se={class:`a_btn_group a_btn_group_large`,role:`group`},ce={class:`a_btn_group a_btn_group_small`,role:`group`};function le(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_SIZES_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,oe,[c(`div`,se,[d(o,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),d(o,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),d(o,{class:`a_btn a_btn_success`,text:`success`,onClick:t[2]||=t=>e.onAlert(`success`)}),d(o,{class:`a_btn a_btn_info`,text:`info`,onClick:t[3]||=t=>e.onAlert(`info`)})]),c(`div`,ce,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ue=h(ae,[[`render`,le]]);function de(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group_vertical"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group_vertical"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>`}}function fe(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonGroupVertical",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var pe={name:`PageButtonGroupVertical`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},me={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},he={class:`a_btn_group_vertical`,role:`group`},ge={class:`a_btn_group_vertical`,role:`group`};function _e(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_VERTICAL_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_VERTICAL_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,me,[c(`div`,he,[d(o,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),d(o,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),d(o,{class:`a_btn a_btn_success`,text:`success`,onClick:t[2]||=t=>e.onAlert(`success`)}),d(o,{class:`a_btn a_btn_info`,text:`info`,onClick:t[3]||=t=>e.onAlert(`info`)})]),c(`div`,ge,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ve=h(pe,[[`render`,_e]]);function ye(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    html="_A_BUTTON_EXAMPLE_HTML_"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    html="<span onclick='alert("Aloha")'>Aloha</span>"
  ></a-button>
</div>`}}function be(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonHtml",
  components: {
    AButton,
  },
};`}}var xe={name:`PageButtonHtml`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t}}},Se={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Ce(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_HTML_HEADER_`,description:`_A_BUTTON_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:m(()=>[c(`div`,Se,[d(o,{class:`a_btn a_btn_primary`,html:`_A_BUTTON_EXAMPLE_HTML_`}),d(o,{class:`a_btn a_btn_primary`,html:`<span onclick='alert("Aloha")'>Aloha</span>`})])]),_:1},8,[`code-html`,`code-js`])}var we=h(xe,[[`render`,Ce]]);function Te(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    title="Upload"
    @click="onAlert('icon-left')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    text="Aloha"
    @click="onAlert('icon-left & text')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-right="Upload"
    text="Aloha"
    @click="onAlert('icon-right & text')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    text="Aloha"
    @click="onAlert('icon-left & text & icon-right')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
    icon-right="Upload"
    title="Upload"
    @click="onAlert('icon-left & icon-right')"
  ></a-button>
</div>`}}function Ee(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonIcons",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var De={name:`PageButtonIcons`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Oe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function ke(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_ICONS_HEADER_`,description:`_A_BUTTON_GROUP_ICONS_DESCRIPTION_`,props:[`icon-left`,`icon-right`]},{default:m(()=>[c(`div`,Oe,[d(o,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,title:`Upload`,onClick:t[0]||=t=>e.onAlert(`icon-left`)}),d(o,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,text:`Aloha`,onClick:t[1]||=t=>e.onAlert(`icon-left & text`)}),d(o,{class:`a_btn a_btn_primary`,"icon-right":`Upload`,text:`Aloha`,onClick:t[2]||=t=>e.onAlert(`icon-right & text`)}),d(o,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,"icon-right":`Upload`,text:`Aloha`,onClick:t[3]||=t=>e.onAlert(`icon-left & text & icon-right`)}),d(o,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,"icon-right":`Upload`,title:`Upload`,onClick:t[4]||=t=>e.onAlert(`icon-left & icon-right`)})])]),_:1},8,[`code-html`,`code-js`])}var Ae=h(De,[[`render`,ke]]);function je(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="left"
    text="loading-align="left""
    @click="toggleLoading"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="right"
    text="loading-align="right""
    @click="toggleLoading"
  ></a-button>
</div>`}}function Me(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonLoading",
  components: {
    AButton,
  },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    
    return {
      loading,
      toggleLoading,
    };
  },
};`}}var Ne={name:`PageButtonLoading`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=je(),{codeJs:t}=Me(),n=f(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}},Pe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Fe(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_LOADING_HEADER_`,description:`_A_BUTTON_GROUP_LOADING_DESCRIPTION_`,props:[`loading`,`loading-align`]},{default:m(()=>[c(`div`,Pe,[d(o,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`left`,text:`loading-align="left"`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`]),d(o,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`right`,text:`loading-align="right"`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var Ie=h(Ne,[[`render`,Fe]]);function Le(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_success"
    text="outline-success"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_info"
    text="outline-info"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_light"
    text="outline-light"
    @click="onAlert('outline-light')"
  ></a-button>
</div>`}}function Re(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonOutline",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var ze={name:`PageButtonOutline`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Le(),{codeJs:t}=Re();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Be={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Ve(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_OUTLINE_HEADER_`,description:`_A_BUTTON_GROUP_OUTLINE_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,Be,[d(o,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[0]||=t=>e.onAlert(`outline-primary`)}),d(o,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[1]||=t=>e.onAlert(`outline-secondary`)}),d(o,{class:`a_btn a_btn_outline_tertiary`,text:`outline-tertiary`,onClick:t[2]||=t=>e.onAlert(`outline-tertiary`)}),d(o,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[3]||=t=>e.onAlert(`outline-success`)}),d(o,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[4]||=t=>e.onAlert(`outline-info`)}),d(o,{class:`a_btn a_btn_outline_warning`,text:`outline-warning`,onClick:t[5]||=t=>e.onAlert(`outline-warning`)}),d(o,{class:`a_btn a_btn_outline_danger`,text:`outline-danger`,onClick:t[6]||=t=>e.onAlert(`outline-danger`)}),d(o,{class:`a_btn a_btn_outline_dark`,text:`outline-dark`,onClick:t[7]||=t=>e.onAlert(`outline-dark`)}),d(o,{class:`a_btn a_btn_outline_light`,text:`outline-light`,onClick:t[8]||=t=>e.onAlert(`outline-light`)})])]),_:1},8,[`code-html`,`code-js`])}var He=h(ze,[[`render`,Ve]]);function Ue(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    safe-html="_A_BUTTON_EXAMPLE_HTML_"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    safe-html="<span onclick='alert("Aloha")'>Aloha</button>"
  ></a-button>
</div>`}}function We(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSafeHtml",
  components: {
    AButton,
  },
};`}}var Ge={name:`PageButtonSafeHtml`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We();return{codeHtml:e,codeJs:t}}},Ke={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function qe(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SAFE_HTML_HEADER_`,description:`_A_BUTTON_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:m(()=>[c(`div`,Ke,[d(o,{class:`a_btn a_btn_primary`,"safe-html":`_A_BUTTON_EXAMPLE_HTML_`}),d(o,{class:`a_btn a_btn_primary`,"safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})])]),_:1},8,[`code-html`,`code-js`])}var Je=h(Ge,[[`render`,qe]]);function Ye(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary a_btn_large"
    text="large"
    @click="onAlert('large')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary a_btn_small"
    text="small"
    @click="onAlert('small')"
  ></a-button>
</div>`}}function Xe(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSizes",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var Ze={name:`PageButtonSizes`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Ye(),{codeJs:t}=Xe();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Qe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function $e(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SIZES_HEADER_`,description:`_A_BUTTON_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,Qe,[d(o,{class:`a_btn a_btn_primary a_btn_large`,text:`large`,onClick:t[0]||=t=>e.onAlert(`large`)}),d(o,{class:`a_btn a_btn_primary a_btn_small`,text:`small`,onClick:t[1]||=t=>e.onAlert(`small`)})])]),_:1},8,[`code-html`,`code-js`])}var et=h(Ze,[[`render`,$e]]);function tt(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonAppend
  >
    <span>(***)</span>
  </template>
</a-button>`}}function nt(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotAppend",
  components: {
    AButton,
  },
};`}}var rt={name:`PageButtonSlotPrepend`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=tt(),{codeJs:t}=nt();return{codeHtml:e,codeJs:t}}};function it(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_APPEND_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_APPEND_DESCRIPTION_`,slots:`buttonAppend`},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,text:`Aloha`},{buttonAppend:m(()=>[...t[0]||=[c(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var at=h(rt,[[`render`,it]]);function ot(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
>
  <span>(Aloha)</span>
</a-button>`}}function st(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotDefault",
  components: {
    AButton,
  },
};`}}var ct={name:`PageButtonSlotDefault`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=ot(),{codeJs:t}=st();return{codeHtml:e,codeJs:t}}};function lt(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_DEFAULT_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_DEFAULT_DESCRIPTION_`,slots:`default`},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`},{default:m(()=>[...t[0]||=[c(`span`,null,`(Aloha)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ut=h(ct,[[`render`,lt]]);function dt(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonPrepend
  >
    <span>(***)</span>
  </template>
</a-button>`}}function ft(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotPrepend",
  components: {
    AButton,
  },
};`}}var pt={name:`PageButtonSlotPrepend`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=dt(),{codeJs:t}=ft();return{codeHtml:e,codeJs:t}}};function mt(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_PREPEND_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_PREPEND_DESCRIPTION_`,slots:`buttonPrepend`},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,text:`Aloha`},{buttonPrepend:m(()=>[...t[0]||=[c(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ht=h(pt,[[`render`,mt]]);function gt(){return{codeHtml:`<a-button
  :is-title-html="true"
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-button>`}}function _t(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotTitle",
  components: {
    AButton,
  },
};`}}var vt={name:`PageButtonSlotTitle`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t();return{codeHtml:e,codeJs:t}}};function yt(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_TITLE_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_TITLE_DESCRIPTION_`,slots:`buttonTitle`,props:`is-title-html`},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,"is-title-html":!0,text:`Aloha`},{buttonTitle:m(()=>[...t[0]||=[c(`strong`,null,`(***Aloha***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var bt=h(vt,[[`render`,yt]]);function xt(){return{codeHtml:`<div
  @click="showAlert"
>
  <a-button
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\\"true\\""
    :stop="true"
  ></a-button>
</div>
<div
  class="a_mt_4"
  @click="showAlert"
>
  <a-button
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\\"false\\""
    :stop="false"
  ></a-button>
</div>`}}function St(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonStop",
  components: {
    AButton,
  },
  setup() {
    const showAlert = () => {
      alert("Aloha");
    };

    return {
      showAlert,
    };
  },
};`}}var Ct={name:`PageButtonStop`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=xt(),{codeJs:t}=St();return{codeHtml:e,codeJs:t,showAlert:()=>{alert(`Aloha`)}}}};function wt(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_STOP_HEADER_`,description:`_A_BUTTON_GROUP_STOP_DESCRIPTION_`,props:`stop`},{default:m(()=>[c(`div`,{onClick:t[0]||=(...t)=>e.showAlert&&e.showAlert(...t)},[d(o,{class:`a_btn a_btn_primary`,text:`stopPropagation: :stop="true"`,stop:!0})]),c(`div`,{class:`a_mt_4`,onClick:t[1]||=(...t)=>e.showAlert&&e.showAlert(...t)},[d(o,{class:`a_btn a_btn_primary`,text:`stopPropagation: :stop="false"`,stop:!1})])]),_:1},8,[`code-html`,`code-js`])}var Tt=h(Ct,[[`render`,wt]]);function Et(){return{codeHtml:`<a-button
  :is-switch="true"
  :model-switch="modelSwitch"
  text="(***)"
  @click="toggleModelSwitch"
></a-button>`}}function Dt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSwitch",
  components: {
    AButton,
  },
  setup() {
    const modelSwitch = ref(false);

    const toggleModelSwitch = () => {
      modelSwitch.value = !modelSwitch.value;
    };

    return {
      modelSwitch,
      toggleModelSwitch,
    };
  },
};`}}var Ot={name:`PageButtonSwitch`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Et(),{codeJs:t}=Dt(),n=f(!1);return{codeHtml:e,codeJs:t,modelSwitch:n,toggleModelSwitch:()=>{n.value=!n.value}}}};function kt(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SWITCH_HEADER_`,description:`_A_BUTTON_GROUP_SWITCH_DESCRIPTION_`,props:[`is-switch`,`model-switch`]},{default:m(()=>[d(o,{"is-switch":!0,"model-switch":e.modelSwitch,text:`(***)`,onClick:e.toggleModelSwitch},null,8,[`model-switch`,`onClick`])]),_:1},8,[`code-html`,`code-js`])}var At=h(Ot,[[`render`,kt]]);function jt(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_A_SHOW_MORE_MORE_"
  text-after=" €"
  text-before="$ "
></a-button>`}}function Mt(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTextAfterBefore",
  components: {
    AButton,
  },
};`}}var Nt={name:`PageButtonTextAfterBefore`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=jt(),{codeJs:t}=Mt();return{codeHtml:e,codeJs:t}}};function Pt(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_AFTER_BEFORE_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_`,props:[`text-after`,`text-before`]},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,text:`_A_SHOW_MORE_MORE_`,"text-after":` €`,"text-before":`$ `})]),_:1},8,[`code-html`,`code-js`])}var Ft=h(Nt,[[`render`,Pt]]);function It(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
></a-button>`}}function Lt(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTextObject",
  components: {
    AButton,
  },
};`}}var Rt={name:`PageButtonTextObject`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=It(),{codeJs:t}=Lt();return{codeHtml:e,codeJs:t}}};function zt(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_OBJECT_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_OBJECT_DESCRIPTION_`,props:`text (as object)`},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,text:{mobile:`Aloha`,desktop:`Aloha-desktop`}})]),_:1},8,[`code-html`,`code-js`])}var Bt=h(Rt,[[`render`,zt]]);function Vt(){return{codeHtml:`<a-button
  class="a_btn a_btn_secondary"
  text="Aloha"
  text-tag="strong"
></a-button>`}}function Ht(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTextTag",
  components: {
    AButton,
  },
};`}}var Ut={name:`PageButtonTextTag`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Vt(),{codeJs:t}=Ht();return{codeHtml:e,codeJs:t}}};function Wt(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_TAG_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_TAG_DESCRIPTION_`,props:`text-tag`},{default:m(()=>[d(o,{class:`a_btn a_btn_secondary`,text:`Aloha`,"text-tag":`strong`})]),_:1},8,[`code-html`,`code-js`])}var Gt=h(Ut,[[`render`,Wt]]);function Kt(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
></a-button>`}}function qt(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTitleArray",
  components: {
    AButton,
  },
};`}}var Jt={name:`PageButtonTitleArray`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Kt(),{codeJs:t}=qt();return{codeHtml:e,codeJs:t}}};function Yt(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_ARRAY_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_ARRAY_DESCRIPTION_`,props:`title (as array)`},{default:m(()=>[d(o,{class:`a_btn a_btn_primary`,title:[`Aloha`,`$(Aloha)`],text:`Aloha`})]),_:1},8,[`code-html`,`code-js`])}var Xt=h(Jt,[[`render`,Yt]]);function Zt(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top"
    title-placement="top"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto"
    title-placement="auto"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto-start"
    title-placement="auto-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: auto-end"
    title-placement="auto-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top-start"
    title-placement="top-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: top-end"
    title-placement="top-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right"
    title-placement="right"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right-start"
    title-placement="right-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: right-end"
    title-placement="right-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom"
    title-placement="bottom"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom-start"
    title-placement="bottom-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: bottom-end"
    title-placement="bottom-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left"
    title-placement="left"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left-start"
    title-placement="left-start"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    class="a_btn a_btn_success"
    text="placement: left-end"
    title-placement="left-end"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
  <a-button
    :is-title-html="true"
    :title-attributes="{ maxWidth: 150 }"
    class="a_btn a_btn_success"
    text="placement: auto, html-title max-width 150"
    title-placement="auto"
    title="_A_BUTTON_EXAMPLE_BIG_TITLE_"
  ></a-button>
</div>`}}function Qt(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTitleHtml",
  components: {
    AButton,
  },
};`}}var $t={name:`PageButtonTitleHtml`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=Zt(),{codeJs:t}=Qt();return{codeHtml:e,codeJs:t}}},en={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function $(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_HTML_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`is-title-html`,`title`,`title-placement`,`title-attributes`]},{default:m(()=>[c(`div`,en,[d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top`,"title-placement":`top`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto`,"title-placement":`auto`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto-start`,"title-placement":`auto-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto-end`,"title-placement":`auto-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top-start`,"title-placement":`top-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top-end`,"title-placement":`top-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right`,"title-placement":`right`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right-start`,"title-placement":`right-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right-end`,"title-placement":`right-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom`,"title-placement":`bottom`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom-start`,"title-placement":`bottom-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom-end`,"title-placement":`bottom-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left`,"title-placement":`left`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left-start`,"title-placement":`left-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left-end`,"title-placement":`left-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),d(o,{class:`a_btn a_btn_success`,"is-title-html":!0,"title-attributes":{maxWidth:150},text:`placement: auto, html-title max-width 150`,"title-placement":`auto`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`})])]),_:1},8,[`code-html`,`code-js`])}var tn=h($t,[[`render`,$]]);function nn(){return{codeHtml:`<a-button
  :extra="{ number: 2 }"
  :is-title-html="true"
  class="a_btn a_btn_success"
  text="extra"
  title="_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_"
></a-button>`}}function rn(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTitleHtml",
  components: {
    AButton,
  },
};`}}var an={name:`PageButtonTitleHtmlExtra`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=nn(),{codeJs:t}=rn();return{codeHtml:e,codeJs:t}}};function on(e,t,n,r,i,a){let o=p(`a-button`),c=p(`aloha-example`);return s(),l(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_HTML_EXTRA_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_HTML_EXTRA_DESCRIPTION_`,props:[`is-title-html`,`title`,`extra`]},{default:m(()=>[d(o,{class:`a_btn a_btn_success`,extra:{number:2},"is-title-html":!0,text:`extra`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_`})]),_:1},8,[`code-html`,`code-js`])}var sn=h(an,[[`render`,on]]);function cn(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>`}}function ln(){return{codeJs:`import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTransparent",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`}}var un={name:`PageButtonTransparent`,components:{AButton:a,AlohaExample:r},setup(){let{codeHtml:e}=cn(),{codeJs:t}=ln();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},dn={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function fn(e,t,n,r,i,a){let o=p(`a-button`),u=p(`aloha-example`);return s(),l(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TRANSPARENT_HEADER_`,description:`_A_BUTTON_GROUP_TRANSPARENT_DESCRIPTION_`,props:`class`},{default:m(()=>[c(`div`,dn,[d(o,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,onClick:t[0]||=t=>e.onAlert(`transparent-primary`)}),d(o,{class:`a_btn a_btn_transparent_secondary`,text:`transparent-secondary`,onClick:t[1]||=t=>e.onAlert(`transparent-secondary`)}),d(o,{class:`a_btn a_btn_transparent_tertiary`,text:`transparent-tertiary`,onClick:t[2]||=t=>e.onAlert(`transparent-tertiary`)}),d(o,{class:`a_btn a_btn_transparent_success`,text:`transparent-success`,onClick:t[3]||=t=>e.onAlert(`transparent-success`)}),d(o,{class:`a_btn a_btn_transparent_info`,text:`transparent-info`,onClick:t[4]||=t=>e.onAlert(`transparent-info`)}),d(o,{class:`a_btn a_btn_transparent_warning`,text:`transparent-warning`,onClick:t[5]||=t=>e.onAlert(`transparent-warning`)}),d(o,{class:`a_btn a_btn_transparent_danger`,text:`transparent-danger`,onClick:t[6]||=t=>e.onAlert(`transparent-danger`)}),d(o,{class:`a_btn a_btn_transparent_dark`,text:`transparent-dark`,onClick:t[7]||=t=>e.onAlert(`transparent-dark`)}),d(o,{class:`a_btn a_btn_transparent_light`,text:`transparent-light`,onClick:t[8]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var pn=h(un,[[`render`,fn]]);function mn(){return{dataEvents:[{name:`click`,description:`_A_BUTTON_EVENTS_CLICK_DESCRIPTION_`,type:`Function`}]}}function hn(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function gn(){let e=u(()=>i({placeholder:`_A_BUTTON_COMPONENT_NAME_`}));return{pageTitle:u(()=>`AButton${e.value?` (${e.value})`:``}`)}}function _n(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-disabled`,description:`_A_BUTTON_PROPS_ARIA_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-label`,description:`_A_BUTTON_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`attributes`,description:`_A_BUTTON_PROPS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`class`,description:`_A_BUTTON_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-default`,description:`_A_BUTTON_PROPS_CLASS_DEFAULT_DESCRIPTION_`,type:`String`,default:`a_element`,required:!1},{name:`class-default-hidden`,description:`_A_BUTTON_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_`,type:`String`,default:`a_element__hidden`,required:!1},{name:`class-disabled`,description:`_A_BUTTON_PROPS_CLASS_DISABLED_DESCRIPTION_`,type:`String`,default:`disabled`,required:!1},{name:`disabled`,description:`_A_BUTTON_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_BUTTON_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`extraData`,description:`_A_BUTTON_PROPS_EXTRA_DATA_DESCRIPTION_`,type:`Any`,default:void 0,required:!1},{name:`html`,description:`_A_BUTTON_PROPS_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`html-screen-reader`,description:`_A_BUTTON_PROPS_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`icon-attributes`,description:`_A_BUTTON_PROPS_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`icon-class`,description:`_A_BUTTON_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-left`,description:`_A_BUTTON_PROPS_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-right`,description:`_A_BUTTON_PROPS_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-tag`,description:`_A_BUTTON_PROPS_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_BUTTON_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_btn_")`,required:!1},{name:`is-switch`,description:`_A_BUTTON_PROPS_IS_SWITCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-title-html`,description:`_A_BUTTON_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`loading`,description:`_A_BUTTON_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading-align`,description:`_A_BUTTON_PROPS_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`loading-class`,description:`_A_BUTTON_PROPS_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`model-switch`,description:`_A_BUTTON_PROPS_MODEL_SWITCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`prevent-keyboard-repeat`,description:`_A_ELEMENT_PROPS_PREVENT_KEYBOARD_REPEAT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`prevent`,description:`_A_BUTTON_PROPS_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`safe-html`,description:`_A_BUTTON_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`safe-html-screen-reader`,description:`_A_BUTTON_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`stop`,description:`_A_BUTTON_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`tabindex`,description:`_A_BUTTON_PROPS_TABINDEX_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`tag`,description:`_A_BUTTON_PROPS_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_BUTTON_PROPS_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-after`,description:`_A_BUTTON_PROPS_TEXT_AFTER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-aria-hidden`,description:`_A_BUTTON_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`text-before`,description:`_A_BUTTON_PROPS_TEXT_BEFORE_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-class`,description:`_A_BUTTON_PROPS_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-screen-reader`,description:`_A_BUTTON_PROPS_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-tag`,description:`_A_BUTTON_PROPS_TEXT_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`title`,description:`_A_BUTTON_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-attributes`,description:`_A_BUTTON_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`title-placement`,description:`_A_BUTTON_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`title-z-index`,description:`_A_BUTTON_PROPS_TITLE_Z_INDEX_DESCRIPTION_`,type:`String / Number`,default:`auto`,required:!1},{name:`type`,description:`_A_BUTTON_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`button`,required:!1}]}}function vn(){return{dataSlots:[{name:`buttonAppend`,description:`_A_BUTTON_SLOT_BUTTON_APPEND_DESCRIPTION_`},{name:`buttonPrepend`,description:`_A_BUTTON_SLOT_BUTTON_PREPEND_DESCRIPTION_`},{name:`buttonTitle`,description:`_A_BUTTON_SLOT_BUTTON_TITLE_DESCRIPTION_`},{name:`default`,description:`_A_BUTTON_SLOT_DEFAULT_DESCRIPTION_`}]}}var yn={name:`PageButton`,components:{AlohaHighlightjs:e,AlohaPage:t,AlohaTableProps:n,ATranslation:o,PageButtonAriaDisabled:x,PageButtonBasic:D,PageButtonComplex:M,PageButtonDisabled:R,PageButtonGroup:W,PageButtonGroupHorizontalVertical:ne,PageButtonGroupSizes:ue,PageButtonGroupVertical:ve,PageButtonHtml:we,PageButtonIcons:Ae,PageButtonLoading:Ie,PageButtonOutline:He,PageButtonSafeHtml:Je,PageButtonSizes:et,PageButtonSlotAppend:at,PageButtonSlotDefault:ut,PageButtonSlotPrepend:ht,PageButtonSlotTitle:bt,PageButtonStop:Tt,PageButtonSwitch:At,PageButtonTextAfterBefore:Ft,PageButtonTextObject:Bt,PageButtonTextTag:Gt,PageButtonTitleArray:Xt,PageButtonTitleHtml:tn,PageButtonTitleHtmlExtra:sn,PageButtonTransparent:pn},setup(){let{pageTitle:e}=gn(),{dataProps:t}=_n(),{dataSlots:n}=vn(),{dataEvents:r}=mn(),{dataExposes:i}=hn();return{dataExposes:i,dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function bn(e,t,n,r,i,a){let o=p(`a-translation`),c=p(`page-button-basic`),u=p(`page-button-outline`),f=p(`page-button-transparent`),h=p(`page-button-sizes`),g=p(`page-button-group`),_=p(`page-button-group-vertical`),v=p(`page-button-group-horizontal-vertical`),y=p(`page-button-group-sizes`),b=p(`page-button-icons`),x=p(`page-button-disabled`),S=p(`page-button-aria-disabled`),C=p(`page-button-loading`),w=p(`page-button-text-after-before`),T=p(`page-button-text-tag`),E=p(`page-button-safe-html`),D=p(`page-button-html`),O=p(`page-button-text-object`),k=p(`page-button-title-array`),A=p(`page-button-title-html`),j=p(`page-button-title-html-extra`),M=p(`page-button-stop`),N=p(`page-button-slot-default`),P=p(`page-button-slot-prepend`),F=p(`page-button-slot-append`),I=p(`page-button-slot-title`),L=p(`page-button-switch`),R=p(`page-button-complex`),z=p(`aloha-highlightjs`),B=p(`aloha-table-props`),V=p(`aloha-table-css-vars`),H=p(`aloha-page`);return s(),l(H,{"page-title":e.pageTitle},{body:m(()=>[d(o,{tag:`p`,html:`_A_BUTTON_COMPONENT_DESCRIPTION_`}),d(c),d(u),d(f),d(h),d(g),d(_),d(v),d(y),d(b),d(x),d(S),d(C),d(w),d(T),d(E),d(D),d(O),d(k),d(A),d(j),d(M),d(N),d(P),d(F),d(I),d(L),d(R),d(B,{data:e.dataProps},{"class-default":m(({row:e})=>[d(z,{code:e.scss},null,8,[`code`])]),_:1},8,[`data`]),d(B,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),d(B,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),d(V,{files:[`utils/button`,`utils/button_close`]})]),_:1},8,[`page-title`])}var xn=h(yn,[[`render`,bn]]);export{xn as default};