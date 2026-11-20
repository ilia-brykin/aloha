import{t as e}from"./chunk.AlohaHighlightjs.CeVpXDdh.js";import{t}from"./chunk.AlohaPage.BP2MUQSS.js";import{t as n}from"./chunk.AlohaTableProps.CeC2vU3F.js";import{t as r}from"./chunk.AlohaExample.BVhM0naJ.js";import{Gt as i,Xt as ee,it as a}from"./bundle.index.DbAjsKDm.js";import{Ft as o,It as s,Pt as c,Qt as l,Vt as u,cn as d,nn as f,on as p}from"./chunk.vendor.CTxSDDRk.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<div 
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
</div>`}}function g(){return{codeJs:`import { 
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
};`}}var _={name:`PageButtonAriaDisabled`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},v={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function y(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_ARIA_DISABLED_HEADER_`,description:`_A_BUTTON_GROUP_ARIA_DISABLED_DESCRIPTION_`,props:`aria-disabled`},{default:p(()=>[o(`div`,v,[u(a,{class:`a_btn a_btn_primary`,"aria-disabled":!0,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),u(a,{class:`a_btn a_btn_secondary`,"aria-disabled":!0,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),u(a,{class:`a_btn a_btn_tertiary`,"aria-disabled":!0,text:`tertiary`,onClick:t[2]||=t=>e.onAlert(`tertiary`)}),u(a,{class:`a_btn a_btn_success`,"aria-disabled":!0,text:`success`,onClick:t[3]||=t=>e.onAlert(`success`)}),u(a,{class:`a_btn a_btn_info`,"aria-disabled":!0,text:`info`,onClick:t[4]||=t=>e.onAlert(`info`)}),u(a,{class:`a_btn a_btn_warning`,"aria-disabled":!0,text:`warning`,onClick:t[5]||=t=>e.onAlert(`warning`)}),u(a,{class:`a_btn a_btn_danger`,"aria-disabled":!0,text:`danger`,onClick:t[6]||=t=>e.onAlert(`danger`)}),u(a,{class:`a_btn a_btn_dark`,"aria-disabled":!0,text:`dark`,onClick:t[7]||=t=>e.onAlert(`dark`)}),u(a,{class:`a_btn a_btn_light`,"aria-disabled":!0,text:`light`,onClick:t[8]||=t=>e.onAlert(`light`)}),u(a,{class:`a_ml_2`,"aria-disabled":!0,"is-switch":!0,text:`switch`}),u(a,{class:`a_ml_2`,"aria-disabled":!0,"is-switch":!0,"model-switch":!0,text:`switch active`}),u(a,{class:`a_btn a_btn_outline_primary`,"aria-disabled":!0,text:`outline-primary`,onClick:t[9]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,"aria-disabled":!0,text:`outline-secondary`,onClick:t[10]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_tertiary`,"aria-disabled":!0,text:`outline-tertiary`,onClick:t[11]||=t=>e.onAlert(`outline-tertiary`)}),u(a,{class:`a_btn a_btn_outline_success`,"aria-disabled":!0,text:`outline-success`,onClick:t[12]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,"aria-disabled":!0,text:`outline-info`,onClick:t[13]||=t=>e.onAlert(`outline-info`)}),u(a,{class:`a_btn a_btn_outline_warning`,"aria-disabled":!0,text:`outline-warning`,onClick:t[14]||=t=>e.onAlert(`outline-warning`)}),u(a,{class:`a_btn a_btn_outline_danger`,"aria-disabled":!0,text:`outline-danger`,onClick:t[15]||=t=>e.onAlert(`outline-danger`)}),u(a,{class:`a_btn a_btn_outline_dark`,"aria-disabled":!0,text:`outline-dark`,onClick:t[16]||=t=>e.onAlert(`outline-dark`)}),u(a,{class:`a_btn a_btn_outline_light`,"aria-disabled":!0,text:`outline-light`,onClick:t[17]||=t=>e.onAlert(`outline-light`)}),u(a,{class:`a_btn a_btn_transparent_primary`,"aria-disabled":!0,text:`transparent-primary`,onClick:t[18]||=t=>e.onAlert(`transparent-primary`)}),u(a,{class:`a_btn a_btn_transparent_secondary`,"aria-disabled":!0,text:`transparent-secondary`,onClick:t[19]||=t=>e.onAlert(`transparent-secondary`)}),u(a,{class:`a_btn a_btn_transparent_tertiary`,"aria-disabled":!0,text:`transparent-tertiary`,onClick:t[20]||=t=>e.onAlert(`transparent-tertiary`)}),u(a,{class:`a_btn a_btn_transparent_success`,"aria-disabled":!0,text:`transparent-success`,onClick:t[21]||=t=>e.onAlert(`transparent-success`)}),u(a,{class:`a_btn a_btn_transparent_info`,"aria-disabled":!0,text:`transparent-info`,onClick:t[22]||=t=>e.onAlert(`transparent-info`)}),u(a,{class:`a_btn a_btn_transparent_warning`,"aria-disabled":!0,text:`transparent-warning`,onClick:t[23]||=t=>e.onAlert(`transparent-warning`)}),u(a,{class:`a_btn a_btn_transparent_danger`,"aria-disabled":!0,text:`transparent-danger`,onClick:t[24]||=t=>e.onAlert(`transparent-danger`)}),u(a,{class:`a_btn a_btn_transparent_dark`,"aria-disabled":!0,text:`transparent-dark`,onClick:t[25]||=t=>e.onAlert(`transparent-dark`)}),u(a,{class:`a_btn a_btn_transparent_light`,"aria-disabled":!0,text:`transparent-light`,onClick:t[26]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var b=m(_,[[`render`,y]]);function x(){return{codeHtml:`<div 
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
</div>`}}function S(){return{codeJs:`import { 
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
};`}}var C={name:`PageButtonBasic`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},w={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function T(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_BUTTON_GROUP_BASIC_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,w,[u(a,{class:`a_btn a_btn_link`,text:`link`,onClick:t[0]||=t=>e.onAlert(`link`)}),u(a,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[1]||=t=>e.onAlert(`primary`)}),u(a,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[2]||=t=>e.onAlert(`secondary`)}),u(a,{class:`a_btn a_btn_tertiary`,text:`tertiary`,onClick:t[3]||=t=>e.onAlert(`tertiary`)}),u(a,{class:`a_btn a_btn_success`,text:`success`,onClick:t[4]||=t=>e.onAlert(`success`)}),u(a,{class:`a_btn a_btn_info`,text:`info`,onClick:t[5]||=t=>e.onAlert(`info`)}),u(a,{class:`a_btn a_btn_warning`,text:`warning`,onClick:t[6]||=t=>e.onAlert(`warning`)}),u(a,{class:`a_btn a_btn_danger`,text:`danger`,onClick:t[7]||=t=>e.onAlert(`danger`)}),u(a,{class:`a_btn a_btn_dark`,text:`dark`,onClick:t[8]||=t=>e.onAlert(`dark`)}),u(a,{class:`a_btn a_btn_light`,text:`light`,onClick:t[9]||=t=>e.onAlert(`light`)})])]),_:1},8,[`code-html`,`code-js`])}var E=m(C,[[`render`,T]]);function D(){return{codeHtml:`<a-button
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
></a-button>`}}function O(){return{codeJs:`import {
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
};`}}var k={name:`PageButtonComplex`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=D(),{codeJs:t}=O(),n=d(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}};function A(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_COMPLEX_HEADER_`,description:`_A_BUTTON_GROUP_COMPLEX_DESCRIPTION_`,props:[`class`,`loading`,`loading-align`,`text`,`text-before`,`icon-left`,`icon-right`,`title`,`text-aria-hidden`,`text-screen-reader`]},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,"icon-left":{desktop:`EyeFill`,mobile:`EyeSlash`},"icon-right":{mobile:`EyeSlash`},loading:e.loading,"text-aria-hidden":!0,"text-before":{desktop:`$ `},"text-screen-reader":{desktop:`Aloha`,mobile:`Aloha-mobile`},text:{desktop:`Aloha`},title:{desktop:`Aloha`},"loading-align":`left`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`])]),_:1},8,[`code-html`,`code-js`])}var j=m(k,[[`render`,A]]);function M(){return{codeHtml:`<div 
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
</div>`}}function N(){return{codeJs:`import { 
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
};`}}var P={name:`PageButtonDisabled`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=M(),{codeJs:t}=N();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},F={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function I(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_DISABLED_HEADER_`,description:`_A_BUTTON_GROUP_DISABLED_DESCRIPTION_`,props:`disabled`},{default:p(()=>[o(`div`,F,[u(a,{class:`a_btn a_btn_primary`,text:`primary`,disabled:!0,onClick:t[0]||=t=>e.onAlert(`primary`)}),u(a,{class:`a_btn a_btn_secondary`,text:`secondary`,disabled:!0,onClick:t[1]||=t=>e.onAlert(`secondary`)}),u(a,{class:`a_btn a_btn_tertiary`,text:`tertiary`,disabled:!0,onClick:t[2]||=t=>e.onAlert(`tertiary`)}),u(a,{class:`a_btn a_btn_success`,text:`success`,disabled:!0,onClick:t[3]||=t=>e.onAlert(`success`)}),u(a,{class:`a_btn a_btn_info`,text:`info`,disabled:!0,onClick:t[4]||=t=>e.onAlert(`info`)}),u(a,{class:`a_btn a_btn_warning`,text:`warning`,disabled:!0,onClick:t[5]||=t=>e.onAlert(`warning`)}),u(a,{class:`a_btn a_btn_danger`,text:`danger`,disabled:!0,onClick:t[6]||=t=>e.onAlert(`danger`)}),u(a,{class:`a_btn a_btn_dark`,text:`dark`,disabled:!0,onClick:t[7]||=t=>e.onAlert(`dark`)}),u(a,{class:`a_btn a_btn_light`,text:`light`,disabled:!0,onClick:t[8]||=t=>e.onAlert(`light`)}),u(a,{class:`a_ml_2`,text:`switch`,"is-switch":!0,disabled:!0}),u(a,{class:`a_ml_2`,text:`switch active`,"is-switch":!0,"model-switch":!0,disabled:!0}),u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,disabled:!0,onClick:t[9]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,disabled:!0,onClick:t[10]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_tertiary`,text:`outline-tertiary`,disabled:!0,onClick:t[11]||=t=>e.onAlert(`outline-tertiary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,disabled:!0,onClick:t[12]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,disabled:!0,onClick:t[13]||=t=>e.onAlert(`outline-info`)}),u(a,{class:`a_btn a_btn_outline_warning`,text:`outline-warning`,disabled:!0,onClick:t[14]||=t=>e.onAlert(`outline-warning`)}),u(a,{class:`a_btn a_btn_outline_danger`,text:`outline-danger`,disabled:!0,onClick:t[15]||=t=>e.onAlert(`outline-danger`)}),u(a,{class:`a_btn a_btn_outline_dark`,text:`outline-dark`,disabled:!0,onClick:t[16]||=t=>e.onAlert(`outline-dark`)}),u(a,{class:`a_btn a_btn_outline_light`,text:`outline-light`,disabled:!0,onClick:t[17]||=t=>e.onAlert(`outline-light`)}),u(a,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,disabled:!0,onClick:t[18]||=t=>e.onAlert(`transparent-primary`)}),u(a,{class:`a_btn a_btn_transparent_secondary`,text:`transparent-secondary`,disabled:!0,onClick:t[19]||=t=>e.onAlert(`transparent-secondary`)}),u(a,{class:`a_btn a_btn_transparent_tertiary`,text:`transparent-tertiary`,disabled:!0,onClick:t[20]||=t=>e.onAlert(`transparent-tertiary`)}),u(a,{class:`a_btn a_btn_transparent_success`,text:`transparent-success`,disabled:!0,onClick:t[21]||=t=>e.onAlert(`transparent-success`)}),u(a,{class:`a_btn a_btn_transparent_info`,text:`transparent-info`,disabled:!0,onClick:t[22]||=t=>e.onAlert(`transparent-info`)}),u(a,{class:`a_btn a_btn_transparent_warning`,text:`transparent-warning`,disabled:!0,onClick:t[23]||=t=>e.onAlert(`transparent-warning`)}),u(a,{class:`a_btn a_btn_transparent_danger`,text:`transparent-danger`,disabled:!0,onClick:t[24]||=t=>e.onAlert(`transparent-danger`)}),u(a,{class:`a_btn a_btn_transparent_dark`,text:`transparent-dark`,disabled:!0,onClick:t[25]||=t=>e.onAlert(`transparent-dark`)}),u(a,{class:`a_btn a_btn_transparent_light`,text:`transparent-light`,disabled:!0,onClick:t[26]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var L=m(P,[[`render`,I]]);function R(){return{codeHtml:`<div 
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
</div>`}}function z(){return{codeJs:`import { 
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
};`}}var B={name:`PageButtonGroup`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},V={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},te={class:`a_btn_group`,role:`group`},H={class:`a_btn_group`,role:`group`};function U(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,V,[o(`div`,te,[u(a,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),u(a,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),u(a,{class:`a_btn a_btn_success`,text:`success`,onClick:t[2]||=t=>e.onAlert(`success`)}),u(a,{class:`a_btn a_btn_info`,text:`info`,onClick:t[3]||=t=>e.onAlert(`info`)})]),o(`div`,H,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var W=m(B,[[`render`,U]]);function G(){return{codeHtml:`<div
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
};`}}var q={name:`PageButtonGroupHorizontalVertical`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},J={class:`a_btn_group_vertical`,role:`group`},Y={class:`a_btn_group`,role:`group`},X={class:`a_btn_group`,role:`group`},Z={class:`a_btn_group`,role:`group`};function Q(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,J,[o(`div`,Y,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[0]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[1]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[2]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[3]||=t=>e.onAlert(`outline-info`)})]),o(`div`,X,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})]),o(`div`,Z,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[8]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[9]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[10]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[11]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ne=m(q,[[`render`,Q]]);function re(){return{codeHtml:`<div 
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
};`}}var ae={name:`PageButtonGroupSizes`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},oe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},se={class:`a_btn_group a_btn_group_large`,role:`group`},ce={class:`a_btn_group a_btn_group_small`,role:`group`};function le(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_SIZES_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,oe,[o(`div`,se,[u(a,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),u(a,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),u(a,{class:`a_btn a_btn_success`,text:`success`,onClick:t[2]||=t=>e.onAlert(`success`)}),u(a,{class:`a_btn a_btn_info`,text:`info`,onClick:t[3]||=t=>e.onAlert(`info`)})]),o(`div`,ce,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ue=m(ae,[[`render`,le]]);function de(){return{codeHtml:`<div 
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
};`}}var pe={name:`PageButtonGroupVertical`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},me={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},he={class:`a_btn_group_vertical`,role:`group`},ge={class:`a_btn_group_vertical`,role:`group`};function _e(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_VERTICAL_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_VERTICAL_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,me,[o(`div`,he,[u(a,{class:`a_btn a_btn_primary`,text:`primary`,onClick:t[0]||=t=>e.onAlert(`primary`)}),u(a,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:t[1]||=t=>e.onAlert(`secondary`)}),u(a,{class:`a_btn a_btn_success`,text:`success`,onClick:t[2]||=t=>e.onAlert(`success`)}),u(a,{class:`a_btn a_btn_info`,text:`info`,onClick:t[3]||=t=>e.onAlert(`info`)})]),o(`div`,ge,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[4]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[5]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[6]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ve=m(pe,[[`render`,_e]]);function ye(){return{codeHtml:`<div 
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
};`}}var xe={name:`PageButtonHtml`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t}}},Se={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Ce(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_HTML_HEADER_`,description:`_A_BUTTON_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:p(()=>[o(`div`,Se,[u(a,{class:`a_btn a_btn_primary`,html:`_A_BUTTON_EXAMPLE_HTML_`}),u(a,{class:`a_btn a_btn_primary`,html:`<span onclick='alert("Aloha")'>Aloha</span>`})])]),_:1},8,[`code-html`,`code-js`])}var we=m(xe,[[`render`,Ce]]);function Te(){return{codeHtml:`<div 
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
};`}}var De={name:`PageButtonIcons`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Oe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function ke(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_ICONS_HEADER_`,description:`_A_BUTTON_GROUP_ICONS_DESCRIPTION_`,props:[`icon-left`,`icon-right`]},{default:p(()=>[o(`div`,Oe,[u(a,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,title:`Upload`,onClick:t[0]||=t=>e.onAlert(`icon-left`)}),u(a,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,text:`Aloha`,onClick:t[1]||=t=>e.onAlert(`icon-left & text`)}),u(a,{class:`a_btn a_btn_primary`,"icon-right":`Upload`,text:`Aloha`,onClick:t[2]||=t=>e.onAlert(`icon-right & text`)}),u(a,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,"icon-right":`Upload`,text:`Aloha`,onClick:t[3]||=t=>e.onAlert(`icon-left & text & icon-right`)}),u(a,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,"icon-right":`Upload`,title:`Upload`,onClick:t[4]||=t=>e.onAlert(`icon-left & icon-right`)})])]),_:1},8,[`code-html`,`code-js`])}var Ae=m(De,[[`render`,ke]]);function je(){return{codeHtml:`<div 
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
};`}}var Ne={name:`PageButtonLoading`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=je(),{codeJs:t}=Me(),n=d(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}},Pe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Fe(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_LOADING_HEADER_`,description:`_A_BUTTON_GROUP_LOADING_DESCRIPTION_`,props:[`loading`,`loading-align`]},{default:p(()=>[o(`div`,Pe,[u(a,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`left`,text:`loading-align="left"`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`]),u(a,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`right`,text:`loading-align="right"`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var Ie=m(Ne,[[`render`,Fe]]);function Le(){return{codeHtml:`<div 
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
};`}}var ze={name:`PageButtonOutline`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Le(),{codeJs:t}=Re();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Be={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Ve(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_OUTLINE_HEADER_`,description:`_A_BUTTON_GROUP_OUTLINE_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,Be,[u(a,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:t[0]||=t=>e.onAlert(`outline-primary`)}),u(a,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:t[1]||=t=>e.onAlert(`outline-secondary`)}),u(a,{class:`a_btn a_btn_outline_tertiary`,text:`outline-tertiary`,onClick:t[2]||=t=>e.onAlert(`outline-tertiary`)}),u(a,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:t[3]||=t=>e.onAlert(`outline-success`)}),u(a,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:t[4]||=t=>e.onAlert(`outline-info`)}),u(a,{class:`a_btn a_btn_outline_warning`,text:`outline-warning`,onClick:t[5]||=t=>e.onAlert(`outline-warning`)}),u(a,{class:`a_btn a_btn_outline_danger`,text:`outline-danger`,onClick:t[6]||=t=>e.onAlert(`outline-danger`)}),u(a,{class:`a_btn a_btn_outline_dark`,text:`outline-dark`,onClick:t[7]||=t=>e.onAlert(`outline-dark`)}),u(a,{class:`a_btn a_btn_outline_light`,text:`outline-light`,onClick:t[8]||=t=>e.onAlert(`outline-light`)})])]),_:1},8,[`code-html`,`code-js`])}var He=m(ze,[[`render`,Ve]]);function Ue(){return{codeHtml:`<div 
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
};`}}var Ge={name:`PageButtonSafeHtml`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We();return{codeHtml:e,codeJs:t}}},Ke={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function qe(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SAFE_HTML_HEADER_`,description:`_A_BUTTON_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:p(()=>[o(`div`,Ke,[u(a,{class:`a_btn a_btn_primary`,"safe-html":`_A_BUTTON_EXAMPLE_HTML_`}),u(a,{class:`a_btn a_btn_primary`,"safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})])]),_:1},8,[`code-html`,`code-js`])}var Je=m(Ge,[[`render`,qe]]);function Ye(){return{codeHtml:`<div 
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
};`}}var Ze={name:`PageButtonSizes`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Ye(),{codeJs:t}=Xe();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Qe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function $e(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SIZES_HEADER_`,description:`_A_BUTTON_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,Qe,[u(a,{class:`a_btn a_btn_primary a_btn_large`,text:`large`,onClick:t[0]||=t=>e.onAlert(`large`)}),u(a,{class:`a_btn a_btn_primary a_btn_small`,text:`small`,onClick:t[1]||=t=>e.onAlert(`small`)})])]),_:1},8,[`code-html`,`code-js`])}var et=m(Ze,[[`render`,$e]]);function tt(){return{codeHtml:`<a-button
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
};`}}var rt={name:`PageButtonSlotPrepend`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=tt(),{codeJs:t}=nt();return{codeHtml:e,codeJs:t}}};function it(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_APPEND_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_APPEND_DESCRIPTION_`,slots:`buttonAppend`},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,text:`Aloha`},{buttonAppend:p(()=>[...t[0]||=[o(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var at=m(rt,[[`render`,it]]);function ot(){return{codeHtml:`<a-button
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
};`}}var ct={name:`PageButtonSlotDefault`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=ot(),{codeJs:t}=st();return{codeHtml:e,codeJs:t}}};function lt(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_DEFAULT_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_DEFAULT_DESCRIPTION_`,slots:`default`},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`},{default:p(()=>[...t[0]||=[o(`span`,null,`(Aloha)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ut=m(ct,[[`render`,lt]]);function dt(){return{codeHtml:`<a-button
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
};`}}var pt={name:`PageButtonSlotPrepend`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=dt(),{codeJs:t}=ft();return{codeHtml:e,codeJs:t}}};function mt(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_PREPEND_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_PREPEND_DESCRIPTION_`,slots:`buttonPrepend`},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,text:`Aloha`},{buttonPrepend:p(()=>[...t[0]||=[o(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ht=m(pt,[[`render`,mt]]);function gt(){return{codeHtml:`<a-button
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
};`}}var vt={name:`PageButtonSlotTitle`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t();return{codeHtml:e,codeJs:t}}};function yt(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_TITLE_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_TITLE_DESCRIPTION_`,slots:`buttonTitle`,props:`is-title-html`},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,"is-title-html":!0,text:`Aloha`},{buttonTitle:p(()=>[...t[0]||=[o(`strong`,null,`(***Aloha***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var bt=m(vt,[[`render`,yt]]);function xt(){return{codeHtml:`<div
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
};`}}var Ct={name:`PageButtonStop`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=xt(),{codeJs:t}=St();return{codeHtml:e,codeJs:t,showAlert:()=>{alert(`Aloha`)}}}};function wt(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_STOP_HEADER_`,description:`_A_BUTTON_GROUP_STOP_DESCRIPTION_`,props:`stop`},{default:p(()=>[o(`div`,{onClick:t[0]||=(...t)=>e.showAlert&&e.showAlert(...t)},[u(a,{class:`a_btn a_btn_primary`,text:`stopPropagation: :stop="true"`,stop:!0})]),o(`div`,{class:`a_mt_4`,onClick:t[1]||=(...t)=>e.showAlert&&e.showAlert(...t)},[u(a,{class:`a_btn a_btn_primary`,text:`stopPropagation: :stop="false"`,stop:!1})])]),_:1},8,[`code-html`,`code-js`])}var Tt=m(Ct,[[`render`,wt]]);function Et(){return{codeHtml:`<a-button
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
};`}}var Ot={name:`PageButtonSwitch`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Et(),{codeJs:t}=Dt(),n=d(!1);return{codeHtml:e,codeJs:t,modelSwitch:n,toggleModelSwitch:()=>{n.value=!n.value}}}};function kt(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SWITCH_HEADER_`,description:`_A_BUTTON_GROUP_SWITCH_DESCRIPTION_`,props:[`is-switch`,`model-switch`]},{default:p(()=>[u(a,{"is-switch":!0,"model-switch":e.modelSwitch,text:`(***)`,onClick:e.toggleModelSwitch},null,8,[`model-switch`,`onClick`])]),_:1},8,[`code-html`,`code-js`])}var At=m(Ot,[[`render`,kt]]);function jt(){return{codeHtml:`<a-button
  class="a_btn a_btn_primary"
  text="_SHOW_MORE_"
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
};`}}var Nt={name:`PageButtonTextAfterBefore`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=jt(),{codeJs:t}=Mt();return{codeHtml:e,codeJs:t}}};function Pt(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_AFTER_BEFORE_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_`,props:[`text-after`,`text-before`]},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,text:`_SHOW_MORE_`,"text-after":` €`,"text-before":`$ `})]),_:1},8,[`code-html`,`code-js`])}var Ft=m(Nt,[[`render`,Pt]]);function It(){return{codeHtml:`<a-button
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
};`}}var Rt={name:`PageButtonTextObject`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=It(),{codeJs:t}=Lt();return{codeHtml:e,codeJs:t}}};function zt(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_OBJECT_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_OBJECT_DESCRIPTION_`,props:`text (as object)`},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,text:{mobile:`Aloha`,desktop:`Aloha-desktop`}})]),_:1},8,[`code-html`,`code-js`])}var Bt=m(Rt,[[`render`,zt]]);function Vt(){return{codeHtml:`<a-button
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
};`}}var Ut={name:`PageButtonTextTag`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Vt(),{codeJs:t}=Ht();return{codeHtml:e,codeJs:t}}};function Wt(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_TAG_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_TAG_DESCRIPTION_`,props:`text-tag`},{default:p(()=>[u(a,{class:`a_btn a_btn_secondary`,text:`Aloha`,"text-tag":`strong`})]),_:1},8,[`code-html`,`code-js`])}var Gt=m(Ut,[[`render`,Wt]]);function Kt(){return{codeHtml:`<a-button
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
};`}}var Jt={name:`PageButtonTitleArray`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Kt(),{codeJs:t}=qt();return{codeHtml:e,codeJs:t}}};function Yt(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_ARRAY_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_ARRAY_DESCRIPTION_`,props:`title (as array)`},{default:p(()=>[u(a,{class:`a_btn a_btn_primary`,title:[`Aloha`,`$(Aloha)`],text:`Aloha`})]),_:1},8,[`code-html`,`code-js`])}var Xt=m(Jt,[[`render`,Yt]]);function Zt(){return{codeHtml:`<div 
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
};`}}var $t={name:`PageButtonTitleHtml`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=Zt(),{codeJs:t}=Qt();return{codeHtml:e,codeJs:t}}},en={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function $(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_HTML_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`is-title-html`,`title`,`title-placement`,`title-attributes`]},{default:p(()=>[o(`div`,en,[u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top`,"title-placement":`top`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto`,"title-placement":`auto`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto-start`,"title-placement":`auto-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto-end`,"title-placement":`auto-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top-start`,"title-placement":`top-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top-end`,"title-placement":`top-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right`,"title-placement":`right`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right-start`,"title-placement":`right-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right-end`,"title-placement":`right-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom`,"title-placement":`bottom`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom-start`,"title-placement":`bottom-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom-end`,"title-placement":`bottom-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left`,"title-placement":`left`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left-start`,"title-placement":`left-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left-end`,"title-placement":`left-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),u(a,{class:`a_btn a_btn_success`,"is-title-html":!0,"title-attributes":{maxWidth:150},text:`placement: auto, html-title max-width 150`,"title-placement":`auto`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`})])]),_:1},8,[`code-html`,`code-js`])}var tn=m($t,[[`render`,$]]);function nn(){return{codeHtml:`<a-button
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
};`}}var an={name:`PageButtonTitleHtmlExtra`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=nn(),{codeJs:t}=rn();return{codeHtml:e,codeJs:t}}};function on(e,t,n,r,i,ee){let a=f(`a-button`),o=f(`aloha-example`);return l(),s(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_HTML_EXTRA_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_HTML_EXTRA_DESCRIPTION_`,props:[`is-title-html`,`title`,`extra`]},{default:p(()=>[u(a,{class:`a_btn a_btn_success`,extra:{number:2},"is-title-html":!0,text:`extra`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_`})]),_:1},8,[`code-html`,`code-js`])}var sn=m(an,[[`render`,on]]);function cn(){return{codeHtml:`<div 
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
};`}}var un={name:`PageButtonTransparent`,components:{AButton:i,AlohaExample:r},setup(){let{codeHtml:e}=cn(),{codeJs:t}=ln();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},dn={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function fn(e,t,n,r,i,ee){let a=f(`a-button`),c=f(`aloha-example`);return l(),s(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TRANSPARENT_HEADER_`,description:`_A_BUTTON_GROUP_TRANSPARENT_DESCRIPTION_`,props:`class`},{default:p(()=>[o(`div`,dn,[u(a,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,onClick:t[0]||=t=>e.onAlert(`transparent-primary`)}),u(a,{class:`a_btn a_btn_transparent_secondary`,text:`transparent-secondary`,onClick:t[1]||=t=>e.onAlert(`transparent-secondary`)}),u(a,{class:`a_btn a_btn_transparent_tertiary`,text:`transparent-tertiary`,onClick:t[2]||=t=>e.onAlert(`transparent-tertiary`)}),u(a,{class:`a_btn a_btn_transparent_success`,text:`transparent-success`,onClick:t[3]||=t=>e.onAlert(`transparent-success`)}),u(a,{class:`a_btn a_btn_transparent_info`,text:`transparent-info`,onClick:t[4]||=t=>e.onAlert(`transparent-info`)}),u(a,{class:`a_btn a_btn_transparent_warning`,text:`transparent-warning`,onClick:t[5]||=t=>e.onAlert(`transparent-warning`)}),u(a,{class:`a_btn a_btn_transparent_danger`,text:`transparent-danger`,onClick:t[6]||=t=>e.onAlert(`transparent-danger`)}),u(a,{class:`a_btn a_btn_transparent_dark`,text:`transparent-dark`,onClick:t[7]||=t=>e.onAlert(`transparent-dark`)}),u(a,{class:`a_btn a_btn_transparent_light`,text:`transparent-light`,onClick:t[8]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var pn=m(un,[[`render`,fn]]);function mn(){return{dataEvents:[{name:`click`,description:`_A_BUTTON_EVENTS_CLICK_DESCRIPTION_`,type:`Function`}]}}function hn(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function gn(){let e=c(()=>ee({placeholder:`_A_BUTTON_COMPONENT_NAME_`}));return{pageTitle:c(()=>`AButton${e.value?` (${e.value})`:``}`)}}function _n(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-disabled`,description:`_A_BUTTON_PROPS_ARIA_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-label`,description:`_A_BUTTON_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`attributes`,description:`_A_BUTTON_PROPS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`class`,description:`_A_BUTTON_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-default`,description:`_A_BUTTON_PROPS_CLASS_DEFAULT_DESCRIPTION_`,type:`String`,default:`a_element`,required:!1},{name:`class-default-hidden`,description:`_A_BUTTON_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_`,type:`String`,default:`a_element__hidden`,required:!1},{name:`class-disabled`,description:`_A_BUTTON_PROPS_CLASS_DISABLED_DESCRIPTION_`,type:`String`,default:`disabled`,required:!1},{name:`disabled`,description:`_A_BUTTON_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_BUTTON_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`extraData`,description:`_A_BUTTON_PROPS_EXTRA_DATA_DESCRIPTION_`,type:`Any`,default:void 0,required:!1},{name:`html`,description:`_A_BUTTON_PROPS_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`html-screen-reader`,description:`_A_BUTTON_PROPS_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`icon-attributes`,description:`_A_BUTTON_PROPS_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`icon-class`,description:`_A_BUTTON_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-left`,description:`_A_BUTTON_PROPS_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-right`,description:`_A_BUTTON_PROPS_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-tag`,description:`_A_BUTTON_PROPS_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_BUTTON_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_btn_")`,required:!1},{name:`is-switch`,description:`_A_BUTTON_PROPS_IS_SWITCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-title-html`,description:`_A_BUTTON_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`loading`,description:`_A_BUTTON_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading-align`,description:`_A_BUTTON_PROPS_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`loading-class`,description:`_A_BUTTON_PROPS_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`model-switch`,description:`_A_BUTTON_PROPS_MODEL_SWITCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`prevent-keyboard-repeat`,description:`_A_ELEMENT_PROPS_PREVENT_KEYBOARD_REPEAT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`prevent`,description:`_A_BUTTON_PROPS_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`safe-html`,description:`_A_BUTTON_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`safe-html-screen-reader`,description:`_A_BUTTON_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`stop`,description:`_A_BUTTON_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`tabindex`,description:`_A_BUTTON_PROPS_TABINDEX_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`tag`,description:`_A_BUTTON_PROPS_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_BUTTON_PROPS_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-after`,description:`_A_BUTTON_PROPS_TEXT_AFTER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-aria-hidden`,description:`_A_BUTTON_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`text-before`,description:`_A_BUTTON_PROPS_TEXT_BEFORE_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-class`,description:`_A_BUTTON_PROPS_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-screen-reader`,description:`_A_BUTTON_PROPS_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-tag`,description:`_A_BUTTON_PROPS_TEXT_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`title`,description:`_A_BUTTON_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-attributes`,description:`_A_BUTTON_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`title-placement`,description:`_A_BUTTON_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`title-z-index`,description:`_A_BUTTON_PROPS_TITLE_Z_INDEX_DESCRIPTION_`,type:`String / Number`,default:`auto`,required:!1},{name:`type`,description:`_A_BUTTON_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`button`,required:!1}]}}function vn(){return{dataSlots:[{name:`buttonAppend`,description:`_A_BUTTON_SLOT_BUTTON_APPEND_DESCRIPTION_`},{name:`buttonPrepend`,description:`_A_BUTTON_SLOT_BUTTON_PREPEND_DESCRIPTION_`},{name:`buttonTitle`,description:`_A_BUTTON_SLOT_BUTTON_TITLE_DESCRIPTION_`},{name:`default`,description:`_A_BUTTON_SLOT_DEFAULT_DESCRIPTION_`}]}}var yn={name:`PageButton`,components:{AlohaHighlightjs:e,AlohaPage:t,AlohaTableProps:n,ATranslation:a,PageButtonAriaDisabled:b,PageButtonBasic:E,PageButtonComplex:j,PageButtonDisabled:L,PageButtonGroup:W,PageButtonGroupHorizontalVertical:ne,PageButtonGroupSizes:ue,PageButtonGroupVertical:ve,PageButtonHtml:we,PageButtonIcons:Ae,PageButtonLoading:Ie,PageButtonOutline:He,PageButtonSafeHtml:Je,PageButtonSizes:et,PageButtonSlotAppend:at,PageButtonSlotDefault:ut,PageButtonSlotPrepend:ht,PageButtonSlotTitle:bt,PageButtonStop:Tt,PageButtonSwitch:At,PageButtonTextAfterBefore:Ft,PageButtonTextObject:Bt,PageButtonTextTag:Gt,PageButtonTitleArray:Xt,PageButtonTitleHtml:tn,PageButtonTitleHtmlExtra:sn,PageButtonTransparent:pn},setup(){let{pageTitle:e}=gn(),{dataProps:t}=_n(),{dataSlots:n}=vn(),{dataEvents:r}=mn(),{dataExposes:i}=hn();return{dataExposes:i,dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function bn(e,t,n,r,i,ee){let a=f(`a-translation`),o=f(`page-button-basic`),c=f(`page-button-outline`),d=f(`page-button-transparent`),m=f(`page-button-sizes`),h=f(`page-button-group`),g=f(`page-button-group-vertical`),_=f(`page-button-group-horizontal-vertical`),v=f(`page-button-group-sizes`),y=f(`page-button-icons`),b=f(`page-button-disabled`),x=f(`page-button-aria-disabled`),S=f(`page-button-loading`),C=f(`page-button-text-after-before`),w=f(`page-button-text-tag`),T=f(`page-button-safe-html`),E=f(`page-button-html`),D=f(`page-button-text-object`),O=f(`page-button-title-array`),k=f(`page-button-title-html`),A=f(`page-button-title-html-extra`),j=f(`page-button-stop`),M=f(`page-button-slot-default`),N=f(`page-button-slot-prepend`),P=f(`page-button-slot-append`),F=f(`page-button-slot-title`),I=f(`page-button-switch`),L=f(`page-button-complex`),R=f(`aloha-highlightjs`),z=f(`aloha-table-props`),B=f(`aloha-table-css-vars`),V=f(`aloha-page`);return l(),s(V,{"page-title":e.pageTitle},{body:p(()=>[u(a,{tag:`p`,html:`_A_BUTTON_COMPONENT_DESCRIPTION_`}),u(o),u(c),u(d),u(m),u(h),u(g),u(_),u(v),u(y),u(b),u(x),u(S),u(C),u(w),u(T),u(E),u(D),u(O),u(k),u(A),u(j),u(M),u(N),u(P),u(F),u(I),u(L),u(z,{data:e.dataProps},{"class-default":p(({row:e})=>[u(R,{code:e.scss},null,8,[`code`])]),_:1},8,[`data`]),u(z,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),u(z,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),u(B,{files:[`utils/button`,`utils/button_close`]})]),_:1},8,[`page-title`])}var xn=m(yn,[[`render`,bn]]);export{xn as default};