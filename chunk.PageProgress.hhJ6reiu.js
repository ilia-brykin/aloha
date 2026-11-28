import{t as e}from"./chunk.AlohaPage.wEJC2jSx.js";import{t}from"./chunk.AlohaTableProps.Dex71Mc0.js";import{t as n}from"./chunk.AlohaExample.D5DtvcYq.js";import{$ as r,hn as ee,mn as te,t as i,tt as a}from"./bundle.index.DbRNiyxs.js";import{Ht as o,Jt as s,Ut as c,Vt as l,_n as u,mn as d,on as f,un as p,wn as m}from"./chunk.vendor.DL09mhUf.js";function h(){return{codeHtml:`<a-progress
  :value="50"
></a-progress>`}}function g(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressBasic",
  components: {
    AProgress,
  },
};`}}var _={name:`PageProgressBasic`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=h(),{codeJs:t}=g();return{codeHtml:e,codeJs:t}}};function v(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:`value`},{default:d(()=>[s(i,{value:50})]),_:1},8,[`code-html`,`code-js`])}var y=i(_,[[`render`,v]]);function b(){return{codeHtml:`<a-progress
  class="a_bg_primary"
  :value="30"
  class-progress-bar="a_bg_gray_500"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_danger"
  :value="35"
  class-progress-bar="a_bg_secondary"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_gray_700"
  :value="40"
  class-progress-bar="a_bg_tertiary"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_secondary"
  :value="45"
  class-progress-bar="a_bg_success"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_tertiary"
  :value="50"
  class-progress-bar="a_bg_warning"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_success"
  :value="55"
  class-progress-bar="a_bg_info"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_black"
  :value="60"
  class-progress-bar="a_bg_danger"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_danger"
  :value="65"
  class-progress-bar="a_bg_gray_300"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_info"
  :value="70"
  class-progress-bar="a_bg_gray_400"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_success"
  :value="75"
  class-progress-bar="a_bg_gray_500"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_primary"
  :value="80"
  class-progress-bar="a_bg_gray_600"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_info"
  :value="85"
  class-progress-bar="a_bg_gray_700"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_secondary"
  :value="90"
  class-progress-bar="a_bg_gray_800"
></a-progress>
<a-progress
  class="a_mt_4 a_bg_info"
  :value="95"
  class-progress-bar="a_bg_black"
></a-progress>`}}function x(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressClassCombination",
  components: {
    AProgress,
  },
};`}}var S={name:`PageProgressClassCombination`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=b(),{codeJs:t}=x();return{codeHtml:e,codeJs:t}}};function C(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_CLASS_COMBINATION_HEADER_`,description:`_A_PROGRESS_GROUP_CLASS_COMBINATION_DESCRIPTION_`,props:[`class`,`class-progress-bar`]},{default:d(()=>[s(i,{class:`a_bg_primary`,value:30,"class-progress-bar":`a_bg_gray_500`}),s(i,{class:`a_mt_4 a_bg_danger`,value:35,"class-progress-bar":`a_bg_secondary`}),s(i,{class:`a_mt_4 a_bg_gray_700`,value:40,"class-progress-bar":`a_bg_tertiary`}),s(i,{class:`a_mt_4 a_bg_secondary`,value:45,"class-progress-bar":`a_bg_success`}),s(i,{class:`a_mt_4 a_bg_tertiary`,value:50,"class-progress-bar":`a_bg_warning`}),s(i,{class:`a_mt_4 a_bg_success`,value:55,"class-progress-bar":`a_bg_info`}),s(i,{class:`a_mt_4 a_bg_black`,value:60,"class-progress-bar":`a_bg_danger`}),s(i,{class:`a_mt_4 a_bg_danger`,value:65,"class-progress-bar":`a_bg_gray_300`}),s(i,{class:`a_mt_4 a_bg_info`,value:70,"class-progress-bar":`a_bg_gray_400`}),s(i,{class:`a_mt_4 a_bg_success`,value:75,"class-progress-bar":`a_bg_gray_500`}),s(i,{class:`a_mt_4 a_bg_primary`,value:80,"class-progress-bar":`a_bg_gray_600`}),s(i,{class:`a_mt_4 a_bg_info`,value:85,"class-progress-bar":`a_bg_gray_700`}),s(i,{class:`a_mt_4 a_bg_secondary`,value:90,"class-progress-bar":`a_bg_gray_800`}),s(i,{class:`a_mt_4 a_bg_info`,value:95,"class-progress-bar":`a_bg_black`})]),_:1},8,[`code-html`,`code-js`])}var w=i(S,[[`render`,C]]);function T(){return{codeHtml:`<a-progress
  :value="50"
  class-progress-bar="a_bg_primary"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_secondary"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_tertiary"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_warning"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_info"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_danger"
></a-progress>
<a-progress
   class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_300"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_400"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_500"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_600"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_700"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_800"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_gray_900"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_black"
></a-progress>`}}function E(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressClassProgressBar",
  components: {
    AProgress,
  },
};`}}var D={name:`PageProgressClassProgressBar`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=T(),{codeJs:t}=E();return{codeHtml:e,codeJs:t}}};function O(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_HEADER_`,description:`_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_DESCRIPTION_`,props:`class-progress-bar`},{default:d(()=>[s(i,{value:50,"class-progress-bar":`a_bg_primary`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_secondary`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_tertiary`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_success`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_warning`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_info`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_danger`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_300`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_400`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_500`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_600`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_700`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_800`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_gray_900`}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_black`})]),_:1},8,[`code-html`,`code-js`])}var k=i(D,[[`render`,O]]);function A(){return{codeHtml:`<a-input-number
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integerNonNegative"
></a-input-number>
<a-progress
  :value="model"
  :class-progress-bar="getClassProgressBar"
></a-progress>`}}function j(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AInputNumber,
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressClassProgressBarFunction",
  components: {
    AInputNumber,
    AProgress,
  },
  setup() {    
    const getClassProgressBar = percent => {
      if (percent >= 80) {
        return "a_bg_danger";
      }
      if (percent > 50) {
        return "a_bg_warning";
      }
      return "a_bg_success";
    };
    const model = ref(50);

    return {
      getClassProgressBar,
      model,
    };
  },
};`}}var M={name:`PageProgressClassProgressBarFunction`,components:{AInputNumber:r,AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=A(),{codeJs:t}=j();return{codeHtml:e,codeJs:t,getClassProgressBar:e=>e>=80?`a_bg_danger`:e>50?`a_bg_warning`:`a_bg_success`,model:u(50)}}};function N(e,t,n,r,ee,te){let i=p(`a-input-number`),a=p(`a-progress`),o=p(`aloha-example`);return f(),c(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_FUNCTION_HEADER_`,description:`_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_FUNCTION_DESCRIPTION_`,props:`class-progress-bar (as Function)`},{default:d(()=>[s(i,{class:`a_mb_4`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,min:0,max:100,step:5,type:`integerNonNegative`},null,8,[`modelValue`]),s(a,{value:e.model,"class-progress-bar":e.getClassProgressBar},null,8,[`value`,`class-progress-bar`])]),_:1},8,[`code-html`,`code-js`])}var P=i(M,[[`render`,N]]);function F(){return{codeHtml:`<a-progress
  :value="30"
  class-progress-bar="a_bg_primary"
  :striped="true"
  :striped-flow="true"
  :duration="2"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_secondary"
  :striped="true"
  :striped-flow="true"
  :duration="0.5"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_tertiary"
  :indeterminate="true"
  :duration="5"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_success"
  :indeterminate="true"
  :duration="8"
  :show-value="false"
></a-progress>`}}function I(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressDuration",
  components: {
    AProgress,
  },
};`}}var L={name:`PageProgressDuration`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t}}};function R(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_DURATION_HEADER_`,description:`_A_PROGRESS_GROUP_DURATION_DESCRIPTION_`,props:`duration`},{default:d(()=>[s(i,{value:30,"class-progress-bar":`a_bg_primary`,striped:!0,"striped-flow":!0,duration:2,"show-value":!1}),s(i,{class:`a_mt_4`,value:40,"class-progress-bar":`a_bg_secondary`,striped:!0,"striped-flow":!0,duration:.5,"show-value":!1}),s(i,{class:`a_mt_4`,value:30,"class-progress-bar":`a_bg_tertiary`,indeterminate:!0,duration:5,"show-value":!1}),s(i,{class:`a_mt_4`,value:40,"class-progress-bar":`a_bg_success`,indeterminate:!0,duration:8,"show-value":!1})]),_:1},8,[`code-html`,`code-js`])}var z=i(L,[[`render`,R]]);function B(){return{codeHtml:`<a-progress
  :value="20"
  class-progress-bar="a_bg_primary"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_secondary"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_tertiary"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="60"
  class-progress-bar="a_bg_warning"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="70"
  class-progress-bar="a_bg_info"
  :indeterminate="true"
  :show-value="false"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="80"
  class-progress-bar="a_bg_danger"
  :indeterminate="true"
  :show-value="false"
></a-progress>`}}function V(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressIndeterminate",
  components: {
    AProgress,
  },
};`}}var H={name:`PageProgressIndeterminate`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=B(),{codeJs:t}=V();return{codeHtml:e,codeJs:t}}};function U(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_INDETERMINATE_HEADER_`,description:`_A_PROGRESS_GROUP_INDETERMINATE_DESCRIPTION_`,props:`indeterminate`},{default:d(()=>[s(i,{value:20,"class-progress-bar":`a_bg_primary`,indeterminate:!0,"show-value":!1}),s(i,{class:`a_mt_4`,value:30,"class-progress-bar":`a_bg_secondary`,indeterminate:!0,"show-value":!1}),s(i,{class:`a_mt_4`,value:40,"class-progress-bar":`a_bg_tertiary`,indeterminate:!0,"show-value":!1}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_success`,indeterminate:!0,"show-value":!1}),s(i,{class:`a_mt_4`,value:60,"class-progress-bar":`a_bg_warning`,indeterminate:!0,"show-value":!1}),s(i,{class:`a_mt_4`,value:70,"class-progress-bar":`a_bg_info`,indeterminate:!0,"show-value":!1}),s(i,{class:`a_mt_4`,value:80,"class-progress-bar":`a_bg_danger`,indeterminate:!0,"show-value":!1})]),_:1},8,[`code-html`,`code-js`])}var W=i(H,[[`render`,U]]);function G(){return{codeHtml:`<a-progress
  :value="-20"
  :min="-100"
  :max="0"
></a-progress>
<a-progress
  class="a_mt_4"
  :min="50"
  :max="100"
  :value="75"
></a-progress>
<a-progress
  class="a_mt_4"
  :min="0"
  :max="1000"
  :value="600"
></a-progress>
<a-progress
  class="a_mt_4"
  :min="-200"
  :max="-100"
  :value="-130"
></a-progress>`}}function K(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressMinMax",
  components: {
    AProgress,
  },
};`}}var q={name:`PageProgressMinMax`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t}}};function J(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_MIN_MAX_HEADER_`,description:`_A_PROGRESS_GROUP_MIN_MAX_DESCRIPTION_`,props:[`min`,`max`]},{default:d(()=>[s(i,{value:-20,min:-100,max:0}),s(i,{class:`a_mt_4`,min:50,max:100,value:75}),s(i,{class:`a_mt_4`,min:0,max:1e3,value:600}),s(i,{class:`a_mt_4`,min:-200,max:-100,value:-130})]),_:1},8,[`code-html`,`code-js`])}var Y=i(q,[[`render`,J]]);function X(){return{codeHtml:`<a-progress
  :value="20"
  :reverse="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :reverse="true"
></a-progress>`}}function Z(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressReverse",
  components: {
    AProgress,
  },
};`}}var Q={name:`PageProgressReverse`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t}}};function ne(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_REVERSE_HEADER_`,description:`_A_PROGRESS_GROUP_REVERSE_DESCRIPTION_`,props:`reverse`},{default:d(()=>[s(i,{value:20,reverse:!0}),s(i,{class:`a_mt_4`,value:40,reverse:!0})]),_:1},8,[`code-html`,`code-js`])}var re=i(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-progress
  class="a_progress_small"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_medium"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_large"
  :value="20"
></a-progress>`}}function ae(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressShowValue",
  components: {
    AProgress,
  },
};`}}var oe={name:`PageProgressShowValue`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t}}};function se(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_SHOW_VALUE_HEADER_`,description:`_A_PROGRESS_GROUP_SHOW_VALUE_DESCRIPTION_`,props:`show-value`},{default:d(()=>[s(i,{value:20,"show-value":!1}),s(i,{class:`a_mt_4`,value:40,"show-value":!0})]),_:1},8,[`code-html`,`code-js`])}var ce=i(oe,[[`render`,se]]);function le(){return{codeHtml:`<a-progress
  class="a_progress_small"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_medium"
  :value="20"
></a-progress>
<a-progress
  class="a_mt_4 a_progress_large"
  :value="20"
></a-progress>`}}function ue(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressSizes",
  components: {
    AProgress,
  },
};`}}var de={name:`PageProgressSizes`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=le(),{codeJs:t}=ue();return{codeHtml:e,codeJs:t}}};function fe(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_SIZES_HEADER_`,description:`_A_PROGRESS_GROUP_SIZES_DESCRIPTION_`,props:`class`},{default:d(()=>[s(i,{class:`a_progress_small`,value:20}),s(i,{class:`a_mt_4 a_progress_medium`,value:20}),s(i,{class:`a_mt_4 a_progress_large`,value:20})]),_:1},8,[`code-html`,`code-js`])}var pe=i(de,[[`render`,fe]]);function me(){return{codeHtml:`<a-progress
  :value="20"
>
  <template
    v-slot:progressText="{ valuePercent }"
  >
    <span>Aloha {{ valuePercent }}</span>
  </template>
</a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
>
  <template
    v-slot:progressText="{ valuePercent }"
  >
    <span>$$$ {{ valuePercent }}</span>
  </template>
</a-progress>`}}function he(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressSlotText",
  components: {
    AProgress,
  },
};`}}var ge={name:`PageProgressSlotText`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=me(),{codeJs:t}=he();return{codeHtml:e,codeJs:t}}};function _e(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_SLOT_PROGRESS_TEXT_HEADER_`,description:`_A_PROGRESS_GROUP_SLOT_PROGRESS_TEXT_DESCRIPTION_`,slots:`progressText`},{default:d(()=>[s(i,{value:20},{progressText:d(({valuePercent:e})=>[o(`span`,null,`Aloha `+m(e),1)]),_:1}),s(i,{class:`a_mt_4`,value:40},{progressText:d(({valuePercent:e})=>[o(`span`,null,`$$$ `+m(e),1)]),_:1})]),_:1},8,[`code-html`,`code-js`])}var ve=i(ge,[[`render`,_e]]);function ye(){return{codeHtml:`<a-progress
  :value="50"
  class-progress-bar="a_bg_primary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_secondary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_tertiary"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_warning"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_info"
  :striped="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_danger"
  :striped="true"
></a-progress>`}}function be(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressStriped",
  components: {
    AProgress,
  },
};`}}var xe={name:`PageProgressStriped`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t}}};function Se(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_STRIPED_HEADER_`,description:`_A_PROGRESS_GROUP_STRIPED_DESCRIPTION_`,props:`striped`},{default:d(()=>[s(i,{value:50,"class-progress-bar":`a_bg_primary`,striped:!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_secondary`,striped:!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_tertiary`,striped:!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_success`,striped:!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_warning`,striped:!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_info`,striped:!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_danger`,striped:!0})]),_:1},8,[`code-html`,`code-js`])}var Ce=i(xe,[[`render`,Se]]);function we(){return{codeHtml:`<a-progress
  :value="20"
  class-progress-bar="a_bg_primary"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="30"
  class-progress-bar="a_bg_secondary"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  class-progress-bar="a_bg_tertiary"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="50"
  class-progress-bar="a_bg_success"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="60"
  class-progress-bar="a_bg_warning"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="70"
  class-progress-bar="a_bg_info"
  :striped="true"
  :striped-flow="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="80"
  class-progress-bar="a_bg_danger"
  :striped="true"
  :striped-flow="true"
></a-progress>`}}function Te(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressStripedFlow",
  components: {
    AProgress,
  },
};`}}var Ee={name:`PageProgressStriped`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t}}};function De(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_STRIPED_FLOW_HEADER_`,description:`_A_PROGRESS_GROUP_STRIPED_FLOW_DESCRIPTION_`,props:[`striped`,`striped-flow`]},{default:d(()=>[s(i,{value:20,"class-progress-bar":`a_bg_primary`,striped:!0,"striped-flow":!0}),s(i,{class:`a_mt_4`,value:30,"class-progress-bar":`a_bg_secondary`,striped:!0,"striped-flow":!0}),s(i,{class:`a_mt_4`,value:40,"class-progress-bar":`a_bg_tertiary`,striped:!0,"striped-flow":!0}),s(i,{class:`a_mt_4`,value:50,"class-progress-bar":`a_bg_success`,striped:!0,"striped-flow":!0}),s(i,{class:`a_mt_4`,value:60,"class-progress-bar":`a_bg_warning`,striped:!0,"striped-flow":!0}),s(i,{class:`a_mt_4`,value:70,"class-progress-bar":`a_bg_info`,striped:!0,"striped-flow":!0}),s(i,{class:`a_mt_4`,value:80,"class-progress-bar":`a_bg_danger`,striped:!0,"striped-flow":!0})]),_:1},8,[`code-html`,`code-js`])}var Oe=i(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<a-input-number
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integerNonNegative"
></a-input-number>
<a-progress
  :value="model"
></a-progress>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AInputNumber,
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressValue",
  components: {
    AInputNumber,
    AProgress,
  },
  setup() {
    const model = ref(20);

    return {
      model,
    };
  },
};`}}var je={name:`PageProgressValue`,components:{AInputNumber:r,AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=ke(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t,model:u(20)}}};function Me(e,t,n,r,ee,te){let i=p(`a-input-number`),a=p(`a-progress`),o=p(`aloha-example`);return f(),c(o,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_VALUE_HEADER_`,description:`_A_PROGRESS_GROUP_VALUE_DESCRIPTION_`,props:`value`},{default:d(()=>[s(i,{class:`a_mb_4`,modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,min:0,max:100,step:5,type:`integerNonNegative`},null,8,[`modelValue`]),s(a,{value:e.model},null,8,[`value`])]),_:1},8,[`code-html`,`code-js`])}var Ne=i(je,[[`render`,Me]]);function Pe(){return{codeHtml:`<a-progress
  :value="20"
  :value-text-integer="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :value-text-integer="true"
></a-progress>`}}function $(){return{codeJs:`import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressValueTextInteger",
  components: {
    AProgress,
  },
};`}}var Fe={name:`PageProgressValueTextInteger`,components:{AlohaExample:n,AProgress:a},setup(){let{codeHtml:e}=Pe(),{codeJs:t}=$();return{codeHtml:e,codeJs:t}}};function Ie(e,t,n,r,ee,te){let i=p(`a-progress`),a=p(`aloha-example`);return f(),c(a,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_PROGRESS_GROUP_VALUE_TEXT_INTEGER_HEADER_`,description:`_A_PROGRESS_GROUP_VALUE_TEXT_INTEGER_DESCRIPTION_`,props:`value-text-integer`},{default:d(()=>[s(i,{value:20,"value-text-integer":!0}),s(i,{class:`a_mt_4`,value:40,"value-text-integer":!0})]),_:1},8,[`code-html`,`code-js`])}var Le=i(Fe,[[`render`,Ie]]);function Re(){let e=l(()=>ee({placeholder:`_A_PROGRESS_COMPONENT_NAME_`}));return{pageTitle:l(()=>`AProgress${e.value?` (${e.value})`:``}`)}}function ze(){return{dataProps:[{name:`aria-label`,description:`_A_PROGRESS_PROPS_ARIA_LABEL_`,type:`String`,default:`"_A_PROGRESS_ARIA_LABEL_"`,required:`false`},{name:`class-progress-bar`,description:`_A_PROGRESS_PROPS_CLASS_PROGRESS_BAR_`,type:`String / Object / Function`,default:`undefined`,required:`false`},{name:`duration`,description:`_A_PROGRESS_PROPS_DURATION_`,type:`Number`,default:`undefined`,required:`false`},{name:`indeterminate`,description:`_A_PROGRESS_PROPS_INDETERMINATE_`,type:`Boolean`,default:`false`,required:`false`},{name:`max`,description:`_A_PROGRESS_PROPS_MAX_`,type:`Number`,default:100,required:`false`},{name:`min`,description:`_A_PROGRESS_PROPS_MIN_`,type:`Number`,default:0,required:`false`},{name:`reverse`,description:`_A_PROGRESS_PROPS_REVERSE_`,type:`Boolean`,default:`false`,required:`false`},{name:`showValue`,description:`_A_PROGRESS_PROPS_SHOW_VALUE_`,type:`Boolean`,default:`true`,required:`false`},{name:`striped`,description:`_A_PROGRESS_PROPS_STRIPED_`,type:`Boolean`,default:`false`,required:`false`},{name:`striped-flow`,description:`_A_PROGRESS_PROPS_STRIPED_FLOW_`,type:`Boolean`,default:`false`,required:`false`},{name:`value`,description:`_A_PROGRESS_PROPS_VALUE_`,type:`Number`,default:0,required:`false`},{name:`value-text-integer`,description:`_A_PROGRESS_PROPS_VALUE_TEXT_INTEGER_`,type:`Boolean`,default:`false`,required:`false`}]}}function Be(){return{dataSlots:[{name:`progressText`,description:`_A_PROGRESS_SLOT_PROGRESS_TEXT_`}]}}var Ve={name:`PageProgress`,components:{AlohaPage:e,AlohaTableProps:t,ATranslation:te,PageProgressBasic:y,PageProgressClassCombination:w,PageProgressClassProgressBar:k,PageProgressClassProgressBarFunction:P,PageProgressDuration:z,PageProgressIndeterminate:W,PageProgressMinMax:Y,PageProgressReverse:re,PageProgressShowValue:ce,PageProgressSizes:pe,PageProgressSlotText:ve,PageProgressStriped:Ce,PageProgressStripedFlow:Oe,PageProgressValue:Ne,PageProgressValueTextInteger:Le},setup(){let{pageTitle:e}=Re(),{dataProps:t}=ze(),{dataSlots:n}=Be();return{dataProps:t,dataSlots:n,pageTitle:e}}};function He(e,t,n,r,ee,te){let i=p(`a-translation`),a=p(`page-progress-basic`),o=p(`page-progress-class-progress-bar`),l=p(`page-progress-class-progress-bar-function`),u=p(`page-progress-sizes`),m=p(`page-progress-class-combination`),h=p(`page-progress-value`),g=p(`page-progress-min-max`),_=p(`page-progress-show-value`),v=p(`page-progress-reverse`),y=p(`page-progress-value-text-integer`),b=p(`page-progress-striped`),x=p(`page-progress-striped-flow`),S=p(`page-progress-indeterminate`),C=p(`page-progress-duration`),w=p(`page-progress-slot-text`),T=p(`aloha-table-props`),E=p(`aloha-table-css-vars`),D=p(`aloha-page`);return f(),c(D,{"page-title":e.pageTitle},{body:d(()=>[s(i,{tag:`p`,html:`_A_PROGRESS_COMPONENT_DESCRIPTION_`}),s(a),s(o),s(l),s(u),s(m),s(h),s(g),s(_),s(v),s(y),s(b),s(x),s(S),s(C),s(w),s(T,{data:e.dataProps},null,8,[`data`]),s(T,{"table-label":`Slots`,data:e.dataSlots,columns:[`name`,`description`]},null,8,[`data`]),s(E,{files:`utils/progress`})]),_:1},8,[`page-title`])}var Ue=i(Ve,[[`render`,He]]);export{Ue as default};