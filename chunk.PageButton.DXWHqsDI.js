import{Ct as e,Tt as t,Ut as n,Yt as r,kt as i,qt as a,wt as o,zt as s}from"./chunk.vendor.CZPox1kV.js";import{At as c,Z as ee,kt as te,t as l}from"./bundle.index.BmSiyQNH.js";import{n as u,t as d}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as f}from"./chunk.AlohaHighlightjs.JeygR1Fm.js";import{t as p}from"./chunk.AlohaTableProps.Dksi7fmb.js";function m(){return{codeHtml:`<div 
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
</div>`}}function h(){return{codeJs:`import { 
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
};`}}var g={name:`PageButtonAriaDisabled`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=m(),{codeJs:t}=h();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},_={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function v(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_ARIA_DISABLED_HEADER_`,description:`_A_BUTTON_GROUP_ARIA_DISABLED_DESCRIPTION_`,props:`aria-disabled`},{default:a(()=>[o(`div`,_,[i(u,{class:`a_btn a_btn_primary`,"aria-disabled":!0,text:`primary`,onClick:r[0]||=t=>e.onAlert(`primary`)}),i(u,{class:`a_btn a_btn_secondary`,"aria-disabled":!0,text:`secondary`,onClick:r[1]||=t=>e.onAlert(`secondary`)}),i(u,{class:`a_btn a_btn_tertiary`,"aria-disabled":!0,text:`tertiary`,onClick:r[2]||=t=>e.onAlert(`tertiary`)}),i(u,{class:`a_btn a_btn_success`,"aria-disabled":!0,text:`success`,onClick:r[3]||=t=>e.onAlert(`success`)}),i(u,{class:`a_btn a_btn_info`,"aria-disabled":!0,text:`info`,onClick:r[4]||=t=>e.onAlert(`info`)}),i(u,{class:`a_btn a_btn_warning`,"aria-disabled":!0,text:`warning`,onClick:r[5]||=t=>e.onAlert(`warning`)}),i(u,{class:`a_btn a_btn_danger`,"aria-disabled":!0,text:`danger`,onClick:r[6]||=t=>e.onAlert(`danger`)}),i(u,{class:`a_btn a_btn_dark`,"aria-disabled":!0,text:`dark`,onClick:r[7]||=t=>e.onAlert(`dark`)}),i(u,{class:`a_btn a_btn_light`,"aria-disabled":!0,text:`light`,onClick:r[8]||=t=>e.onAlert(`light`)}),i(u,{class:`a_ml_2`,"aria-disabled":!0,"is-switch":!0,text:`switch`}),i(u,{class:`a_ml_2`,"aria-disabled":!0,"is-switch":!0,"model-switch":!0,text:`switch active`}),i(u,{class:`a_btn a_btn_outline_primary`,"aria-disabled":!0,text:`outline-primary`,onClick:r[9]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,"aria-disabled":!0,text:`outline-secondary`,onClick:r[10]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_tertiary`,"aria-disabled":!0,text:`outline-tertiary`,onClick:r[11]||=t=>e.onAlert(`outline-tertiary`)}),i(u,{class:`a_btn a_btn_outline_success`,"aria-disabled":!0,text:`outline-success`,onClick:r[12]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,"aria-disabled":!0,text:`outline-info`,onClick:r[13]||=t=>e.onAlert(`outline-info`)}),i(u,{class:`a_btn a_btn_outline_warning`,"aria-disabled":!0,text:`outline-warning`,onClick:r[14]||=t=>e.onAlert(`outline-warning`)}),i(u,{class:`a_btn a_btn_outline_danger`,"aria-disabled":!0,text:`outline-danger`,onClick:r[15]||=t=>e.onAlert(`outline-danger`)}),i(u,{class:`a_btn a_btn_outline_dark`,"aria-disabled":!0,text:`outline-dark`,onClick:r[16]||=t=>e.onAlert(`outline-dark`)}),i(u,{class:`a_btn a_btn_outline_light`,"aria-disabled":!0,text:`outline-light`,onClick:r[17]||=t=>e.onAlert(`outline-light`)}),i(u,{class:`a_btn a_btn_transparent_primary`,"aria-disabled":!0,text:`transparent-primary`,onClick:r[18]||=t=>e.onAlert(`transparent-primary`)}),i(u,{class:`a_btn a_btn_transparent_secondary`,"aria-disabled":!0,text:`transparent-secondary`,onClick:r[19]||=t=>e.onAlert(`transparent-secondary`)}),i(u,{class:`a_btn a_btn_transparent_tertiary`,"aria-disabled":!0,text:`transparent-tertiary`,onClick:r[20]||=t=>e.onAlert(`transparent-tertiary`)}),i(u,{class:`a_btn a_btn_transparent_success`,"aria-disabled":!0,text:`transparent-success`,onClick:r[21]||=t=>e.onAlert(`transparent-success`)}),i(u,{class:`a_btn a_btn_transparent_info`,"aria-disabled":!0,text:`transparent-info`,onClick:r[22]||=t=>e.onAlert(`transparent-info`)}),i(u,{class:`a_btn a_btn_transparent_warning`,"aria-disabled":!0,text:`transparent-warning`,onClick:r[23]||=t=>e.onAlert(`transparent-warning`)}),i(u,{class:`a_btn a_btn_transparent_danger`,"aria-disabled":!0,text:`transparent-danger`,onClick:r[24]||=t=>e.onAlert(`transparent-danger`)}),i(u,{class:`a_btn a_btn_transparent_dark`,"aria-disabled":!0,text:`transparent-dark`,onClick:r[25]||=t=>e.onAlert(`transparent-dark`)}),i(u,{class:`a_btn a_btn_transparent_light`,"aria-disabled":!0,text:`transparent-light`,onClick:r[26]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var y=l(g,[[`render`,v]]);function b(){return{codeHtml:`<div 
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
</div>`}}function x(){return{codeJs:`import { 
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
};`}}var S={name:`PageButtonBasic`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=b(),{codeJs:t}=x();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},C={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function w(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,description:`_A_BUTTON_GROUP_BASIC_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,C,[i(u,{class:`a_btn a_btn_link`,text:`link`,onClick:r[0]||=t=>e.onAlert(`link`)}),i(u,{class:`a_btn a_btn_primary`,text:`primary`,onClick:r[1]||=t=>e.onAlert(`primary`)}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:r[2]||=t=>e.onAlert(`secondary`)}),i(u,{class:`a_btn a_btn_tertiary`,text:`tertiary`,onClick:r[3]||=t=>e.onAlert(`tertiary`)}),i(u,{class:`a_btn a_btn_success`,text:`success`,onClick:r[4]||=t=>e.onAlert(`success`)}),i(u,{class:`a_btn a_btn_info`,text:`info`,onClick:r[5]||=t=>e.onAlert(`info`)}),i(u,{class:`a_btn a_btn_warning`,text:`warning`,onClick:r[6]||=t=>e.onAlert(`warning`)}),i(u,{class:`a_btn a_btn_danger`,text:`danger`,onClick:r[7]||=t=>e.onAlert(`danger`)}),i(u,{class:`a_btn a_btn_dark`,text:`dark`,onClick:r[8]||=t=>e.onAlert(`dark`)}),i(u,{class:`a_btn a_btn_light`,text:`light`,onClick:r[9]||=t=>e.onAlert(`light`)})])]),_:1},8,[`code-html`,`code-js`])}var T=l(S,[[`render`,w]]);function E(){return{codeHtml:`<a-button
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
></a-button>`}}function D(){return{codeJs:`import {
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
};`}}var O={name:`PageButtonComplex`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=E(),{codeJs:t}=D(),n=r(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}};function k(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_COMPLEX_HEADER_`,description:`_A_BUTTON_GROUP_COMPLEX_DESCRIPTION_`,props:[`class`,`loading`,`loading-align`,`text`,`text-before`,`icon-left`,`icon-right`,`title`,`text-aria-hidden`,`text-screen-reader`]},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,"icon-left":{desktop:`EyeFill`,mobile:`EyeSlash`},"icon-right":{mobile:`EyeSlash`},loading:e.loading,"text-aria-hidden":!0,"text-before":{desktop:`$ `},"text-screen-reader":{desktop:`Aloha`,mobile:`Aloha-mobile`},text:{desktop:`Aloha`},title:{desktop:`Aloha`},"loading-align":`left`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`])]),_:1},8,[`code-html`,`code-js`])}var A=l(O,[[`render`,k]]);function j(){return{codeHtml:`<div 
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
</div>`}}function M(){return{codeJs:`import { 
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
};`}}var N={name:`PageButtonDisabled`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},P={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function F(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_DISABLED_HEADER_`,description:`_A_BUTTON_GROUP_DISABLED_DESCRIPTION_`,props:`disabled`},{default:a(()=>[o(`div`,P,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,disabled:!0,onClick:r[0]||=t=>e.onAlert(`primary`)}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,disabled:!0,onClick:r[1]||=t=>e.onAlert(`secondary`)}),i(u,{class:`a_btn a_btn_tertiary`,text:`tertiary`,disabled:!0,onClick:r[2]||=t=>e.onAlert(`tertiary`)}),i(u,{class:`a_btn a_btn_success`,text:`success`,disabled:!0,onClick:r[3]||=t=>e.onAlert(`success`)}),i(u,{class:`a_btn a_btn_info`,text:`info`,disabled:!0,onClick:r[4]||=t=>e.onAlert(`info`)}),i(u,{class:`a_btn a_btn_warning`,text:`warning`,disabled:!0,onClick:r[5]||=t=>e.onAlert(`warning`)}),i(u,{class:`a_btn a_btn_danger`,text:`danger`,disabled:!0,onClick:r[6]||=t=>e.onAlert(`danger`)}),i(u,{class:`a_btn a_btn_dark`,text:`dark`,disabled:!0,onClick:r[7]||=t=>e.onAlert(`dark`)}),i(u,{class:`a_btn a_btn_light`,text:`light`,disabled:!0,onClick:r[8]||=t=>e.onAlert(`light`)}),i(u,{class:`a_ml_2`,text:`switch`,"is-switch":!0,disabled:!0}),i(u,{class:`a_ml_2`,text:`switch active`,"is-switch":!0,"model-switch":!0,disabled:!0}),i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,disabled:!0,onClick:r[9]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,disabled:!0,onClick:r[10]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_tertiary`,text:`outline-tertiary`,disabled:!0,onClick:r[11]||=t=>e.onAlert(`outline-tertiary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,disabled:!0,onClick:r[12]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,disabled:!0,onClick:r[13]||=t=>e.onAlert(`outline-info`)}),i(u,{class:`a_btn a_btn_outline_warning`,text:`outline-warning`,disabled:!0,onClick:r[14]||=t=>e.onAlert(`outline-warning`)}),i(u,{class:`a_btn a_btn_outline_danger`,text:`outline-danger`,disabled:!0,onClick:r[15]||=t=>e.onAlert(`outline-danger`)}),i(u,{class:`a_btn a_btn_outline_dark`,text:`outline-dark`,disabled:!0,onClick:r[16]||=t=>e.onAlert(`outline-dark`)}),i(u,{class:`a_btn a_btn_outline_light`,text:`outline-light`,disabled:!0,onClick:r[17]||=t=>e.onAlert(`outline-light`)}),i(u,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,disabled:!0,onClick:r[18]||=t=>e.onAlert(`transparent-primary`)}),i(u,{class:`a_btn a_btn_transparent_secondary`,text:`transparent-secondary`,disabled:!0,onClick:r[19]||=t=>e.onAlert(`transparent-secondary`)}),i(u,{class:`a_btn a_btn_transparent_tertiary`,text:`transparent-tertiary`,disabled:!0,onClick:r[20]||=t=>e.onAlert(`transparent-tertiary`)}),i(u,{class:`a_btn a_btn_transparent_success`,text:`transparent-success`,disabled:!0,onClick:r[21]||=t=>e.onAlert(`transparent-success`)}),i(u,{class:`a_btn a_btn_transparent_info`,text:`transparent-info`,disabled:!0,onClick:r[22]||=t=>e.onAlert(`transparent-info`)}),i(u,{class:`a_btn a_btn_transparent_warning`,text:`transparent-warning`,disabled:!0,onClick:r[23]||=t=>e.onAlert(`transparent-warning`)}),i(u,{class:`a_btn a_btn_transparent_danger`,text:`transparent-danger`,disabled:!0,onClick:r[24]||=t=>e.onAlert(`transparent-danger`)}),i(u,{class:`a_btn a_btn_transparent_dark`,text:`transparent-dark`,disabled:!0,onClick:r[25]||=t=>e.onAlert(`transparent-dark`)}),i(u,{class:`a_btn a_btn_transparent_light`,text:`transparent-light`,disabled:!0,onClick:r[26]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var I=l(N,[[`render`,F]]);function L(){return{codeHtml:`<div 
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
</div>`}}function R(){return{codeJs:`import { 
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
};`}}var z={name:`PageButtonGroup`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=L(),{codeJs:t}=R();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},B={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},V={class:`a_btn_group`,role:`group`},H={class:`a_btn_group`,role:`group`};function U(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,B,[o(`div`,V,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,onClick:r[0]||=t=>e.onAlert(`primary`)}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:r[1]||=t=>e.onAlert(`secondary`)}),i(u,{class:`a_btn a_btn_success`,text:`success`,onClick:r[2]||=t=>e.onAlert(`success`)}),i(u,{class:`a_btn a_btn_info`,text:`info`,onClick:r[3]||=t=>e.onAlert(`info`)})]),o(`div`,H,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[4]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[5]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[6]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var W=l(z,[[`render`,U]]);function G(){return{codeHtml:`<div
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
};`}}var q={name:`PageButtonGroupHorizontalVertical`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},J={class:`a_btn_group_vertical`,role:`group`},Y={class:`a_btn_group`,role:`group`},X={class:`a_btn_group`,role:`group`},Z={class:`a_btn_group`,role:`group`};function Q(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_HORIZONTAL_VERTICAL_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_HORIZONTAL_VERTICAL_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,J,[o(`div`,Y,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[0]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[1]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[2]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[3]||=t=>e.onAlert(`outline-info`)})]),o(`div`,X,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[4]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[5]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[6]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[7]||=t=>e.onAlert(`outline-info`)})]),o(`div`,Z,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[8]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[9]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[10]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[11]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ne=l(q,[[`render`,Q]]);function re(){return{codeHtml:`<div 
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
};`}}var ae={name:`PageButtonGroupSizes`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},oe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},se={class:`a_btn_group a_btn_group_large`,role:`group`},ce={class:`a_btn_group a_btn_group_small`,role:`group`};function le(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_SIZES_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,oe,[o(`div`,se,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,onClick:r[0]||=t=>e.onAlert(`primary`)}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:r[1]||=t=>e.onAlert(`secondary`)}),i(u,{class:`a_btn a_btn_success`,text:`success`,onClick:r[2]||=t=>e.onAlert(`success`)}),i(u,{class:`a_btn a_btn_info`,text:`info`,onClick:r[3]||=t=>e.onAlert(`info`)})]),o(`div`,ce,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[4]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[5]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[6]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ue=l(ae,[[`render`,le]]);function de(){return{codeHtml:`<div 
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
};`}}var pe={name:`PageButtonGroupVertical`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=de(),{codeJs:t}=fe();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},me={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`},he={class:`a_btn_group_vertical`,role:`group`},ge={class:`a_btn_group_vertical`,role:`group`};function _e(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_GROUP_VERTICAL_HEADER_`,description:`_A_BUTTON_GROUP_GROUP_VERTICAL_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,me,[o(`div`,he,[i(u,{class:`a_btn a_btn_primary`,text:`primary`,onClick:r[0]||=t=>e.onAlert(`primary`)}),i(u,{class:`a_btn a_btn_secondary`,text:`secondary`,onClick:r[1]||=t=>e.onAlert(`secondary`)}),i(u,{class:`a_btn a_btn_success`,text:`success`,onClick:r[2]||=t=>e.onAlert(`success`)}),i(u,{class:`a_btn a_btn_info`,text:`info`,onClick:r[3]||=t=>e.onAlert(`info`)})]),o(`div`,ge,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[4]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[5]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[6]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[7]||=t=>e.onAlert(`outline-info`)})])])]),_:1},8,[`code-html`,`code-js`])}var ve=l(pe,[[`render`,_e]]);function ye(){return{codeHtml:`<div 
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
};`}}var xe={name:`PageButtonHtml`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t}}},Se={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Ce(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_HTML_HEADER_`,description:`_A_BUTTON_GROUP_HTML_DESCRIPTION_`,props:`html`},{default:a(()=>[o(`div`,Se,[i(u,{class:`a_btn a_btn_primary`,html:`_A_BUTTON_EXAMPLE_HTML_`}),i(u,{class:`a_btn a_btn_primary`,html:`<span onclick='alert("Aloha")'>Aloha</span>`})])]),_:1},8,[`code-html`,`code-js`])}var we=l(xe,[[`render`,Ce]]);function Te(){return{codeHtml:`<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="Upload"
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
};`}}var De={name:`PageButtonIcons`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Te(),{codeJs:t}=Ee();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Oe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function ke(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_ICONS_HEADER_`,description:`_A_BUTTON_GROUP_ICONS_DESCRIPTION_`,props:[`icon-left`,`icon-right`]},{default:a(()=>[o(`div`,Oe,[i(u,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,onClick:r[0]||=t=>e.onAlert(`icon-left`)}),i(u,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,text:`Aloha`,onClick:r[1]||=t=>e.onAlert(`icon-left & text`)}),i(u,{class:`a_btn a_btn_primary`,"icon-right":`Upload`,text:`Aloha`,onClick:r[2]||=t=>e.onAlert(`icon-right & text`)}),i(u,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,"icon-right":`Upload`,text:`Aloha`,onClick:r[3]||=t=>e.onAlert(`icon-left & text & icon-right`)}),i(u,{class:`a_btn a_btn_primary`,"icon-left":`Upload`,"icon-right":`Upload`,onClick:r[4]||=t=>e.onAlert(`icon-left & icon-right`)})])]),_:1},8,[`code-html`,`code-js`])}var Ae=l(De,[[`render`,ke]]);function je(){return{codeHtml:`<div 
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
};`}}var Ne={name:`PageButtonLoading`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=je(),{codeJs:t}=Me(),n=r(!0);return{codeHtml:e,codeJs:t,loading:n,toggleLoading:()=>{n.value=!n.value}}}},Pe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Fe(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_LOADING_HEADER_`,description:`_A_BUTTON_GROUP_LOADING_DESCRIPTION_`,props:[`loading`,`loading-align`]},{default:a(()=>[o(`div`,Pe,[i(u,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`left`,text:`loading-align="left"`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`]),i(u,{class:`a_btn a_btn_primary`,loading:e.loading,"loading-align":`right`,text:`loading-align="right"`,onClick:e.toggleLoading},null,8,[`loading`,`onClick`])])]),_:1},8,[`code-html`,`code-js`])}var Ie=l(Ne,[[`render`,Fe]]);function Le(){return{codeHtml:`<div 
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
};`}}var ze={name:`PageButtonOutline`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Le(),{codeJs:t}=Re();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Be={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function Ve(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_OUTLINE_HEADER_`,description:`_A_BUTTON_GROUP_OUTLINE_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,Be,[i(u,{class:`a_btn a_btn_outline_primary`,text:`outline-primary`,onClick:r[0]||=t=>e.onAlert(`outline-primary`)}),i(u,{class:`a_btn a_btn_outline_secondary`,text:`outline-secondary`,onClick:r[1]||=t=>e.onAlert(`outline-secondary`)}),i(u,{class:`a_btn a_btn_outline_tertiary`,text:`outline-tertiary`,onClick:r[2]||=t=>e.onAlert(`outline-tertiary`)}),i(u,{class:`a_btn a_btn_outline_success`,text:`outline-success`,onClick:r[3]||=t=>e.onAlert(`outline-success`)}),i(u,{class:`a_btn a_btn_outline_info`,text:`outline-info`,onClick:r[4]||=t=>e.onAlert(`outline-info`)}),i(u,{class:`a_btn a_btn_outline_warning`,text:`outline-warning`,onClick:r[5]||=t=>e.onAlert(`outline-warning`)}),i(u,{class:`a_btn a_btn_outline_danger`,text:`outline-danger`,onClick:r[6]||=t=>e.onAlert(`outline-danger`)}),i(u,{class:`a_btn a_btn_outline_dark`,text:`outline-dark`,onClick:r[7]||=t=>e.onAlert(`outline-dark`)}),i(u,{class:`a_btn a_btn_outline_light`,text:`outline-light`,onClick:r[8]||=t=>e.onAlert(`outline-light`)})])]),_:1},8,[`code-html`,`code-js`])}var He=l(ze,[[`render`,Ve]]);function Ue(){return{codeHtml:`<div 
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
};`}}var Ge={name:`PageButtonSafeHtml`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We();return{codeHtml:e,codeJs:t}}},Ke={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function qe(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SAFE_HTML_HEADER_`,description:`_A_BUTTON_GROUP_SAFE_HTML_DESCRIPTION_`,props:`safe-html`},{default:a(()=>[o(`div`,Ke,[i(u,{class:`a_btn a_btn_primary`,"safe-html":`_A_BUTTON_EXAMPLE_HTML_`}),i(u,{class:`a_btn a_btn_primary`,"safe-html":`<span onclick='alert("Aloha")'>Aloha</button>`})])]),_:1},8,[`code-html`,`code-js`])}var Je=l(Ge,[[`render`,qe]]);function Ye(){return{codeHtml:`<div 
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
};`}}var Ze={name:`PageButtonSizes`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Ye(),{codeJs:t}=Xe();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},Qe={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function $e(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SIZES_HEADER_`,description:`_A_BUTTON_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,Qe,[i(u,{class:`a_btn a_btn_primary a_btn_large`,text:`large`,onClick:r[0]||=t=>e.onAlert(`large`)}),i(u,{class:`a_btn a_btn_primary a_btn_small`,text:`small`,onClick:r[1]||=t=>e.onAlert(`small`)})])]),_:1},8,[`code-html`,`code-js`])}var et=l(Ze,[[`render`,$e]]);function tt(){return{codeHtml:`<a-button
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
};`}}var rt={name:`PageButtonSlotPrepend`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=tt(),{codeJs:t}=nt();return{codeHtml:e,codeJs:t}}};function it(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_APPEND_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_APPEND_DESCRIPTION_`,slots:`buttonAppend`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,text:`Aloha`},{buttonAppend:a(()=>[...r[0]||=[o(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var at=l(rt,[[`render`,it]]);function ot(){return{codeHtml:`<a-button
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
};`}}var ct={name:`PageButtonSlotDefault`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=ot(),{codeJs:t}=st();return{codeHtml:e,codeJs:t}}};function lt(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_DEFAULT_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_DEFAULT_DESCRIPTION_`,slots:`default`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`},{default:a(()=>[...r[0]||=[o(`span`,null,`(Aloha)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ut=l(ct,[[`render`,lt]]);function dt(){return{codeHtml:`<a-button
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
};`}}var pt={name:`PageButtonSlotPrepend`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=dt(),{codeJs:t}=ft();return{codeHtml:e,codeJs:t}}};function mt(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_PREPEND_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_PREPEND_DESCRIPTION_`,slots:`buttonPrepend`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,text:`Aloha`},{buttonPrepend:a(()=>[...r[0]||=[o(`span`,null,`(***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ht=l(pt,[[`render`,mt]]);function gt(){return{codeHtml:`<a-button
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
};`}}var vt={name:`PageButtonSlotTitle`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=gt(),{codeJs:t}=_t();return{codeHtml:e,codeJs:t}}};function yt(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SLOT_TITLE_HEADER_`,description:`_A_BUTTON_GROUP_SLOT_TITLE_DESCRIPTION_`,slots:`buttonTitle`,props:`is-title-html`},{default:a(()=>[i(u,{class:`a_btn a_btn_primary`,"is-title-html":!0,text:`Aloha`},{buttonTitle:a(()=>[...r[0]||=[o(`strong`,null,`(***Aloha***)`,-1)]]),_:1})]),_:1},8,[`code-html`,`code-js`])}var bt=l(vt,[[`render`,yt]]);function xt(){return{codeHtml:`<div
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
};`}}var Ct={name:`PageButtonStop`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=xt(),{codeJs:t}=St();return{codeHtml:e,codeJs:t,showAlert:()=>{alert(`Aloha`)}}}};function wt(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_STOP_HEADER_`,description:`_A_BUTTON_GROUP_STOP_DESCRIPTION_`,props:`stop`},{default:a(()=>[o(`div`,{onClick:r[0]||=(...t)=>e.showAlert&&e.showAlert(...t)},[i(u,{class:`a_btn a_btn_primary`,text:`stopPropagation: :stop="true"`,stop:!0})]),o(`div`,{class:`a_mt_4`,onClick:r[1]||=(...t)=>e.showAlert&&e.showAlert(...t)},[i(u,{class:`a_btn a_btn_primary`,text:`stopPropagation: :stop="false"`,stop:!1})])]),_:1},8,[`code-html`,`code-js`])}var Tt=l(Ct,[[`render`,wt]]);function Et(){return{codeHtml:`<a-button
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
};`}}var Ot={name:`PageButtonSwitch`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Et(),{codeJs:t}=Dt(),n=r(!1);return{codeHtml:e,codeJs:t,modelSwitch:n,toggleModelSwitch:()=>{n.value=!n.value}}}};function kt(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_SWITCH_HEADER_`,description:`_A_BUTTON_GROUP_SWITCH_DESCRIPTION_`,props:[`is-switch`,`model-switch`]},{default:a(()=>[i(l,{"is-switch":!0,"model-switch":e.modelSwitch,text:`(***)`,onClick:e.toggleModelSwitch},null,8,[`model-switch`,`onClick`])]),_:1},8,[`code-html`,`code-js`])}var At=l(Ot,[[`render`,kt]]);function jt(){return{codeHtml:`<a-button
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
};`}}var Nt={name:`PageButtonTextAfterBefore`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=jt(),{codeJs:t}=Mt();return{codeHtml:e,codeJs:t}}};function Pt(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_AFTER_BEFORE_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_AFTER_BEFORE_DESCRIPTION_`,props:[`text-after`,`text-before`]},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,text:`_SHOW_MORE_`,"text-after":` €`,"text-before":`$ `})]),_:1},8,[`code-html`,`code-js`])}var Ft=l(Nt,[[`render`,Pt]]);function It(){return{codeHtml:`<a-button
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
};`}}var Rt={name:`PageButtonTextObject`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=It(),{codeJs:t}=Lt();return{codeHtml:e,codeJs:t}}};function zt(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_OBJECT_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_OBJECT_DESCRIPTION_`,props:`text (as object)`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,text:{mobile:`Aloha`,desktop:`Aloha-desktop`}})]),_:1},8,[`code-html`,`code-js`])}var Bt=l(Rt,[[`render`,zt]]);function Vt(){return{codeHtml:`<a-button
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
};`}}var Ut={name:`PageButtonTextTag`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Vt(),{codeJs:t}=Ht();return{codeHtml:e,codeJs:t}}};function Wt(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TEXT_TAG_HEADER_`,description:`_A_BUTTON_GROUP_TEXT_TAG_DESCRIPTION_`,props:`text-tag`},{default:a(()=>[i(l,{class:`a_btn a_btn_secondary`,text:`Aloha`,"text-tag":`strong`})]),_:1},8,[`code-html`,`code-js`])}var Gt=l(Ut,[[`render`,Wt]]);function Kt(){return{codeHtml:`<a-button
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
};`}}var Jt={name:`PageButtonTitleArray`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Kt(),{codeJs:t}=qt();return{codeHtml:e,codeJs:t}}};function Yt(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_ARRAY_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_ARRAY_DESCRIPTION_`,props:`title (as array)`},{default:a(()=>[i(l,{class:`a_btn a_btn_primary`,title:[`Aloha`,`$(Aloha)`],text:`Aloha`})]),_:1},8,[`code-html`,`code-js`])}var Xt=l(Jt,[[`render`,Yt]]);function Zt(){return{codeHtml:`<div 
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
};`}}var $t={name:`PageButtonTitleHtml`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=Zt(),{codeJs:t}=Qt();return{codeHtml:e,codeJs:t}}},en={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function $(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_HTML_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_HTML_DESCRIPTION_`,props:[`is-title-html`,`title`,`title-placement`,`title-attributes`]},{default:a(()=>[o(`div`,en,[i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top`,"title-placement":`top`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto`,"title-placement":`auto`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto-start`,"title-placement":`auto-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: auto-end`,"title-placement":`auto-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top-start`,"title-placement":`top-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: top-end`,"title-placement":`top-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right`,"title-placement":`right`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right-start`,"title-placement":`right-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: right-end`,"title-placement":`right-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom`,"title-placement":`bottom`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom-start`,"title-placement":`bottom-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: bottom-end`,"title-placement":`bottom-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left`,"title-placement":`left`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left-start`,"title-placement":`left-start`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,text:`placement: left-end`,"title-placement":`left-end`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`}),i(u,{class:`a_btn a_btn_success`,"is-title-html":!0,"title-attributes":{maxWidth:150},text:`placement: auto, html-title max-width 150`,"title-placement":`auto`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_`})])]),_:1},8,[`code-html`,`code-js`])}var tn=l($t,[[`render`,$]]);function nn(){return{codeHtml:`<a-button
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
};`}}var an={name:`PageButtonTitleHtmlExtra`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=nn(),{codeJs:t}=rn();return{codeHtml:e,codeJs:t}}};function on(e,r,o,c,ee,te){let l=n(`a-button`),u=n(`aloha-example`);return s(),t(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TITLE_HTML_EXTRA_HEADER_`,description:`_A_BUTTON_GROUP_TITLE_HTML_EXTRA_DESCRIPTION_`,props:[`is-title-html`,`title`,`extra`]},{default:a(()=>[i(l,{class:`a_btn a_btn_success`,extra:{number:2},"is-title-html":!0,text:`extra`,title:`_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_`})]),_:1},8,[`code-html`,`code-js`])}var sn=l(an,[[`render`,on]]);function cn(){return{codeHtml:`<div 
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
};`}}var un={name:`PageButtonTransparent`,components:{AButton:c,AlohaExample:d},setup(){let{codeHtml:e}=cn(),{codeJs:t}=ln();return{codeHtml:e,codeJs:t,onAlert:e=>{alert(e)}}}},dn={class:`a_d_flex a_flex_wrap a_align_items_start gap_1`};function fn(e,r,c,ee,te,l){let u=n(`a-button`),d=n(`aloha-example`);return s(),t(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BUTTON_GROUP_TRANSPARENT_HEADER_`,description:`_A_BUTTON_GROUP_TRANSPARENT_DESCRIPTION_`,props:`class`},{default:a(()=>[o(`div`,dn,[i(u,{class:`a_btn a_btn_transparent_primary`,text:`transparent-primary`,onClick:r[0]||=t=>e.onAlert(`transparent-primary`)}),i(u,{class:`a_btn a_btn_transparent_secondary`,text:`transparent-secondary`,onClick:r[1]||=t=>e.onAlert(`transparent-secondary`)}),i(u,{class:`a_btn a_btn_transparent_tertiary`,text:`transparent-tertiary`,onClick:r[2]||=t=>e.onAlert(`transparent-tertiary`)}),i(u,{class:`a_btn a_btn_transparent_success`,text:`transparent-success`,onClick:r[3]||=t=>e.onAlert(`transparent-success`)}),i(u,{class:`a_btn a_btn_transparent_info`,text:`transparent-info`,onClick:r[4]||=t=>e.onAlert(`transparent-info`)}),i(u,{class:`a_btn a_btn_transparent_warning`,text:`transparent-warning`,onClick:r[5]||=t=>e.onAlert(`transparent-warning`)}),i(u,{class:`a_btn a_btn_transparent_danger`,text:`transparent-danger`,onClick:r[6]||=t=>e.onAlert(`transparent-danger`)}),i(u,{class:`a_btn a_btn_transparent_dark`,text:`transparent-dark`,onClick:r[7]||=t=>e.onAlert(`transparent-dark`)}),i(u,{class:`a_btn a_btn_transparent_light`,text:`transparent-light`,onClick:r[8]||=t=>e.onAlert(`transparent-light`)})])]),_:1},8,[`code-html`,`code-js`])}var pn=l(un,[[`render`,fn]]);function mn(){return{dataEvents:[{name:`click`,description:`_A_BUTTON_EVENTS_CLICK_DESCRIPTION_`,type:`Function`}]}}function hn(){return{dataExposes:[{name:`buttonRef`,description:`_A_SHOW_MORE_EXPOSES_BUTTON_REF_DESCRIPTION_`,type:`Object`},{name:`containerRef`,description:`_A_SHOW_MORE_EXPOSES_CONTAINER_REF_DESCRIPTION_`,type:`Object`},{name:`isButtonVisible`,description:`_A_SHOW_MORE_EXPOSES_IS_BUTTON_VISIBLE_DESCRIPTION_`,type:`Boolean`},{name:`isOpen`,description:`_A_SHOW_MORE_EXPOSES_IS_OPEN_DESCRIPTION_`,type:`Boolean`},{name:`toggleButton`,description:`_A_SHOW_MORE_EXPOSES_TOGGLE_BUTTON_DESCRIPTION_`,type:`Function`}]}}function gn(){let t=e(()=>te({placeholder:`_A_BUTTON_COMPONENT_NAME_`}));return{pageTitle:e(()=>`AButton${t.value?` (${t.value})`:``}`)}}function _n(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-disabled`,description:`_A_BUTTON_PROPS_ARIA_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`aria-label`,description:`_A_BUTTON_PROPS_ARIA_LABEL_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`attributes`,description:`_A_BUTTON_PROPS_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`class`,description:`_A_BUTTON_PROPS_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-default`,description:`_A_BUTTON_PROPS_CLASS_DEFAULT_DESCRIPTION_`,type:`String`,default:`aloha_element`,required:!1},{name:`class-default-hidden`,description:`_A_BUTTON_PROPS_CLASS_DEFAULT_HIDDEN_DESCRIPTION_`,type:`String`,default:`aloha_element__hidden`,required:!1},{name:`class-disabled`,description:`_A_BUTTON_PROPS_CLASS_DISABLED_DESCRIPTION_`,type:`String`,default:`disabled`,required:!1},{name:`disabled`,description:`_A_BUTTON_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`extra`,description:`_A_BUTTON_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`extraData`,description:`_A_BUTTON_PROPS_EXTRA_DATA_DESCRIPTION_`,type:`Any`,default:void 0,required:!1},{name:`html`,description:`_A_BUTTON_PROPS_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`html-screen-reader`,description:`_A_BUTTON_PROPS_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`icon-attributes`,description:`_A_BUTTON_PROPS_ICON_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`icon-class`,description:`_A_BUTTON_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-left`,description:`_A_BUTTON_PROPS_ICON_LEFT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-right`,description:`_A_BUTTON_PROPS_ICON_RIGHT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`icon-tag`,description:`_A_BUTTON_PROPS_ICON_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_BUTTON_PROPS_ID_DESCRIPTION_`,type:`String`,default:`() => uniqueId("a_btn_")`,required:!1},{name:`is-switch`,description:`_A_BUTTON_PROPS_IS_SWITCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-title-html`,description:`_A_BUTTON_PROPS_IS_TITLE_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`loading`,description:`_A_BUTTON_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`loading-align`,description:`_A_BUTTON_PROPS_LOADING_ALIGN_DESCRIPTION_`,type:`String`,default:`right`,required:!1},{name:`loading-class`,description:`_A_BUTTON_PROPS_LOADING_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_spinner_small`,required:!1},{name:`model-switch`,description:`_A_BUTTON_PROPS_MODEL_SWITCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`prevent-keyboard-repeat`,description:`_A_ELEMENT_PROPS_PREVENT_KEYBOARD_REPEAT_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`prevent`,description:`_A_BUTTON_PROPS_PREVENT_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`safe-html`,description:`_A_BUTTON_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`safe-html-screen-reader`,description:`_A_BUTTON_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`stop`,description:`_A_BUTTON_PROPS_STOP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`tabindex`,description:`_A_BUTTON_PROPS_TABINDEX_DESCRIPTION_`,type:`Number / String`,default:void 0,required:!1},{name:`tag`,description:`_A_BUTTON_PROPS_TAG_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_BUTTON_PROPS_TEXT_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-after`,description:`_A_BUTTON_PROPS_TEXT_AFTER_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-aria-hidden`,description:`_A_BUTTON_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`text-before`,description:`_A_BUTTON_PROPS_TEXT_BEFORE_DESCRIPTION_`,type:`String / Number / Object`,default:void 0,required:!1},{name:`text-class`,description:`_A_BUTTON_PROPS_TEXT_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-screen-reader`,description:`_A_BUTTON_PROPS_TEXT_SCREEN_READER_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`text-tag`,description:`_A_BUTTON_PROPS_TEXT_TAG_DESCRIPTION_`,type:`String`,default:`span`,required:!1},{name:`title`,description:`_A_BUTTON_PROPS_TITLE_DESCRIPTION_`,type:`String / Number / Object / Array`,default:void 0,required:!1},{name:`title-attributes`,description:`_A_BUTTON_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`title-placement`,description:`_A_BUTTON_PROPS_TITLE_PLACEMENT_DESCRIPTION_`,type:`String`,default:`top`,required:!1},{name:`title-z-index`,description:`_A_BUTTON_PROPS_TITLE_Z_INDEX_DESCRIPTION_`,type:`String / Number`,default:`auto`,required:!1},{name:`type`,description:`_A_BUTTON_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`button`,required:!1}]}}function vn(){return{dataSlots:[{name:`buttonAppend`,description:`_A_BUTTON_SLOT_BUTTON_APPEND_DESCRIPTION_`},{name:`buttonPrepend`,description:`_A_BUTTON_SLOT_BUTTON_PREPEND_DESCRIPTION_`},{name:`buttonTitle`,description:`_A_BUTTON_SLOT_BUTTON_TITLE_DESCRIPTION_`},{name:`default`,description:`_A_BUTTON_SLOT_DEFAULT_DESCRIPTION_`}]}}var yn={name:`PageButton`,components:{AlohaHighlightjs:f,AlohaPage:u,AlohaTableProps:p,ATranslation:ee,PageButtonAriaDisabled:y,PageButtonBasic:T,PageButtonComplex:A,PageButtonDisabled:I,PageButtonGroup:W,PageButtonGroupHorizontalVertical:ne,PageButtonGroupSizes:ue,PageButtonGroupVertical:ve,PageButtonHtml:we,PageButtonIcons:Ae,PageButtonLoading:Ie,PageButtonOutline:He,PageButtonSafeHtml:Je,PageButtonSizes:et,PageButtonSlotAppend:at,PageButtonSlotDefault:ut,PageButtonSlotPrepend:ht,PageButtonSlotTitle:bt,PageButtonStop:Tt,PageButtonSwitch:At,PageButtonTextAfterBefore:Ft,PageButtonTextObject:Bt,PageButtonTextTag:Gt,PageButtonTitleArray:Xt,PageButtonTitleHtml:tn,PageButtonTitleHtmlExtra:sn,PageButtonTransparent:pn},setup(){let{pageTitle:e}=gn(),{dataProps:t}=_n(),{dataSlots:n}=vn(),{dataEvents:r}=mn(),{dataExposes:i}=hn();return{dataExposes:i,dataEvents:r,dataProps:t,dataSlots:n,pageTitle:e}}};function bn(e,r,o,c,ee,te){let l=n(`a-translation`),u=n(`page-button-basic`),d=n(`page-button-outline`),f=n(`page-button-transparent`),p=n(`page-button-sizes`),m=n(`page-button-group`),h=n(`page-button-group-vertical`),g=n(`page-button-group-horizontal-vertical`),_=n(`page-button-group-sizes`),v=n(`page-button-icons`),y=n(`page-button-disabled`),b=n(`page-button-aria-disabled`),x=n(`page-button-loading`),S=n(`page-button-text-after-before`),C=n(`page-button-text-tag`),w=n(`page-button-safe-html`),T=n(`page-button-html`),E=n(`page-button-text-object`),D=n(`page-button-title-array`),O=n(`page-button-title-html`),k=n(`page-button-title-html-extra`),A=n(`page-button-stop`),j=n(`page-button-slot-default`),M=n(`page-button-slot-prepend`),N=n(`page-button-slot-append`),P=n(`page-button-slot-title`),F=n(`page-button-switch`),I=n(`page-button-complex`),L=n(`aloha-highlightjs`),R=n(`aloha-table-props`),z=n(`aloha-page`);return s(),t(z,{"page-title":e.pageTitle},{body:a(()=>[i(l,{tag:`p`,html:`_A_BUTTON_COMPONENT_DESCRIPTION_`}),i(u),i(d),i(f),i(p),i(m),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T),i(E),i(D),i(O),i(k),i(A),i(j),i(M),i(N),i(P),i(F),i(I),i(R,{data:e.dataProps},{"class-default":a(({row:e})=>[i(L,{code:e.scss},null,8,[`code`])]),_:1},8,[`data`]),i(R,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),i(R,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`])]),_:1},8,[`page-title`])}var xn=l(yn,[[`render`,bn]]);export{xn as default};