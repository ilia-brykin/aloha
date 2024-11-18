import{A as d,a as U}from"./chunk.AlohaExample.CMUUEVcN.js";import{A as V}from"./chunk.AlohaTableProps.DwOUDlIA.js";import{_ as p,g as j,A as L}from"./bundle.index.DOWaPX07.js";import{j as q,c as M}from"./chunk.vendor-lodash.Cqnw6GrA.js";import{t as h,a as f,h as v,B as g,C as u,L as c,G as e,m as o,r as E,F as R,M as S}from"./chunk.vendor.9_E-x6sT.js";import{W as F,V as X}from"./chunk.WidthAPI.BqOv0Aml.js";import{A as $}from"./chunk.AInputNumber.CmREK6bZ.js";import"./chunk.ATable.BiLWW37G.js";import"./chunk.utilsMath.D900FRx8.js";import"./chunk.AForm.BMBXIC54.js";import"./chunk.ADatepicker.DXR-Bzfp.js";import"./chunk.UiMixinProps.3z5E7Tu9.js";import"./chunk.ATinymce.BcMFUTFk.js";import"./chunk.vendor-tinymce.5PTU7oiI.js";function k(s,{widthPercent:a=f(()=>0)}){const _=h(s,"classProgressBar");return{classProgressBarLocal:f(()=>q(_.value)?_.value(a.value):_.value)}}function W(s){const a=h(s,"duration");return{durationLocal:f(()=>{if(!M(a.value))return`${a.value}s`})}}const i={name:"AProgress",props:{classProgressBar:{type:[String,Object,Function],required:!1,default:void 0},duration:{type:Number,required:!1,default:void 0},indeterminate:{type:Boolean,required:!1,default:!1},max:{type:Number,required:!1,default:100},min:{type:Number,required:!1,default:0},reverse:{type:Boolean,required:!1,default:!1},showValue:{type:Boolean,required:!1,default:!0},striped:{type:Boolean,required:!1,default:!1},stripedFlow:{type:Boolean,required:!1,default:!1},value:{type:Number,required:!1,default:0},valueTextInteger:{type:Boolean,required:!1,default:!1}},setup(s){const{widthPercent:a}=F(s),{valuePercent:_}=X(s,{widthPercent:a}),{classProgressBarLocal:n}=k(s,{widthPercent:a}),{durationLocal:l}=W(s);return{classProgressBarLocal:n,durationLocal:l,valuePercent:_,widthPercent:a}},render(){let s;return this.$slots.progressText?s=v("span",{class:"a_progress__text"},[this.$slots.progressText&&this.$slots.progressText({valuePercent:this.valuePercent})]):this.showValue&&(s=v("span",{class:"a_progress__text"},this.valuePercent)),v("div",{class:["a_progress",{a_progress_reverse:this.reverse}]},[v("div",{class:["a_progress__bar",{a_progress__bar_striped:this.striped,a_progress__bar_striped_flow:this.stripedFlow,a_progress__bar_indeterminate:this.indeterminate},this.classProgressBarLocal],role:"progressbar","aria-valuenow":this.value,"aria-valuemin":this.min,"aria-valuemax":this.max,style:{width:`${this.widthPercent}%`,"animation-duration":this.durationLocal}},[s])])}};function z(){return{codeHtml:`<a-progress
  :value="50"
></a-progress>`}}function Z(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressBasic",
  components: {
    AProgress,
  },
};`}}const K={name:"PageProgressBasic",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=z(),{codeJs:a}=Z();return{codeHtml:s,codeJs:a}}};function Q(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_BASIC_USAGE_",props:"value"},{default:c(()=>[e(r,{value:50})]),_:1},8,["code-html","code-js"])}const Y=p(K,[["render",Q]]);function ss(){return{codeHtml:`<a-progress
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
></a-progress>`}}function es(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressClassCombination",
  components: {
    AProgress,
  },
};`}}const rs={name:"PageProgressClassCombination",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=ss(),{codeJs:a}=es();return{codeHtml:s,codeJs:a}}};function as(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_CLASS_COMBINATION_HEADER_",description:"_A_PROGRESS_GROUP_CLASS_COMBINATION_DESCRIPTION_",props:["class","class-progress-bar"]},{default:c(()=>[e(r,{class:"a_bg_primary",value:30,"class-progress-bar":"a_bg_gray_500"}),e(r,{class:"a_mt_4 a_bg_danger",value:35,"class-progress-bar":"a_bg_secondary"}),e(r,{class:"a_mt_4 a_bg_gray_700",value:40,"class-progress-bar":"a_bg_tertiary"}),e(r,{class:"a_mt_4 a_bg_secondary",value:45,"class-progress-bar":"a_bg_success"}),e(r,{class:"a_mt_4 a_bg_tertiary",value:50,"class-progress-bar":"a_bg_warning"}),e(r,{class:"a_mt_4 a_bg_success",value:55,"class-progress-bar":"a_bg_info"}),e(r,{class:"a_mt_4 a_bg_black",value:60,"class-progress-bar":"a_bg_danger"}),e(r,{class:"a_mt_4 a_bg_danger",value:65,"class-progress-bar":"a_bg_gray_300"}),e(r,{class:"a_mt_4 a_bg_info",value:70,"class-progress-bar":"a_bg_gray_400"}),e(r,{class:"a_mt_4 a_bg_success",value:75,"class-progress-bar":"a_bg_gray_500"}),e(r,{class:"a_mt_4 a_bg_primary",value:80,"class-progress-bar":"a_bg_gray_600"}),e(r,{class:"a_mt_4 a_bg_info",value:85,"class-progress-bar":"a_bg_gray_700"}),e(r,{class:"a_mt_4 a_bg_secondary",value:90,"class-progress-bar":"a_bg_gray_800"}),e(r,{class:"a_mt_4 a_bg_info",value:95,"class-progress-bar":"a_bg_black"})]),_:1},8,["code-html","code-js"])}const os=p(rs,[["render",as]]);function ts(){return{codeHtml:`<a-progress
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
></a-progress>`}}function _s(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressClassProgressBar",
  components: {
    AProgress,
  },
};`}}const ns={name:"PageProgressClassProgressBar",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=ts(),{codeJs:a}=_s();return{codeHtml:s,codeJs:a}}};function ls(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_HEADER_",description:"_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_DESCRIPTION_",props:"class-progress-bar"},{default:c(()=>[e(r,{value:50,"class-progress-bar":"a_bg_primary"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_secondary"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_tertiary"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_success"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_warning"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_info"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_danger"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_300"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_400"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_500"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_600"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_700"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_800"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_gray_900"}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_black"})]),_:1},8,["code-html","code-js"])}const cs=p(ns,[["render",ls]]);function ps(){return{codeHtml:`<a-input-number
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
></a-progress>`}}function gs(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumber from "aloha-vue/src/ui/AInputNumber/AInputNumber";
import AProgress from "aloha-vue/src/AProgress/AProgress";
    
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
};`}}const us={name:"PageProgressClassProgressBarFunction",components:{AInputNumber:$,AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=ps(),{codeJs:a}=gs(),_=l=>l>=80?"a_bg_danger":l>50?"a_bg_warning":"a_bg_success",n=E(50);return{codeHtml:s,codeJs:a,getClassProgressBar:_,model:n}}};function ms(s,a,_,n,l,m){const r=o("a-input-number"),t=o("a-progress"),P=o("aloha-example");return g(),u(P,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_FUNCTION_HEADER_",description:"_A_PROGRESS_GROUP_CLASS_PROGRESS_BAR_FUNCTION_DESCRIPTION_",props:"class-progress-bar (as Function)"},{default:c(()=>[e(r,{class:"a_mb_4",modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=b=>s.model=b),min:0,max:100,step:5,type:"integerNonNegative"},null,8,["modelValue"]),e(t,{value:s.model,"class-progress-bar":s.getClassProgressBar},null,8,["value","class-progress-bar"])]),_:1},8,["code-html","code-js"])}const ds=p(us,[["render",ms]]);function is(){return{codeHtml:`<a-progress
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
></a-progress>`}}function Ps(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressDuration",
  components: {
    AProgress,
  },
};`}}const bs={name:"PageProgressDuration",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=is(),{codeJs:a}=Ps();return{codeHtml:s,codeJs:a}}};function fs(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_DURATION_HEADER_",description:"_A_PROGRESS_GROUP_DURATION_DESCRIPTION_",props:"duration"},{default:c(()=>[e(r,{value:30,"class-progress-bar":"a_bg_primary",striped:!0,"striped-flow":!0,duration:2,"show-value":!1}),e(r,{class:"a_mt_4",value:40,"class-progress-bar":"a_bg_secondary",striped:!0,"striped-flow":!0,duration:.5,"show-value":!1}),e(r,{class:"a_mt_4",value:30,"class-progress-bar":"a_bg_tertiary",indeterminate:!0,duration:5,"show-value":!1}),e(r,{class:"a_mt_4",value:40,"class-progress-bar":"a_bg_success",indeterminate:!0,duration:8,"show-value":!1})]),_:1},8,["code-html","code-js"])}const vs=p(bs,[["render",fs]]);function As(){return{codeHtml:`<a-progress
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
></a-progress>`}}function Rs(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressIndeterminate",
  components: {
    AProgress,
  },
};`}}const Ss={name:"PageProgressIndeterminate",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=As(),{codeJs:a}=Rs();return{codeHtml:s,codeJs:a}}};function hs(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_INDETERMINATE_HEADER_",description:"_A_PROGRESS_GROUP_INDETERMINATE_DESCRIPTION_",props:"indeterminate"},{default:c(()=>[e(r,{value:20,"class-progress-bar":"a_bg_primary",indeterminate:!0,"show-value":!1}),e(r,{class:"a_mt_4",value:30,"class-progress-bar":"a_bg_secondary",indeterminate:!0,"show-value":!1}),e(r,{class:"a_mt_4",value:40,"class-progress-bar":"a_bg_tertiary",indeterminate:!0,"show-value":!1}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_success",indeterminate:!0,"show-value":!1}),e(r,{class:"a_mt_4",value:60,"class-progress-bar":"a_bg_warning",indeterminate:!0,"show-value":!1}),e(r,{class:"a_mt_4",value:70,"class-progress-bar":"a_bg_info",indeterminate:!0,"show-value":!1}),e(r,{class:"a_mt_4",value:80,"class-progress-bar":"a_bg_danger",indeterminate:!0,"show-value":!1})]),_:1},8,["code-html","code-js"])}const Es=p(Ss,[["render",hs]]);function $s(){return{codeHtml:`<a-progress
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
></a-progress>`}}function Os(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressMinMax",
  components: {
    AProgress,
  },
};`}}const Is={name:"PageProgressMinMax",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=$s(),{codeJs:a}=Os();return{codeHtml:s,codeJs:a}}};function ys(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_MIN_MAX_HEADER_",description:"_A_PROGRESS_GROUP_MIN_MAX_DESCRIPTION_",props:["min","max"]},{default:c(()=>[e(r,{value:-20,min:-100,max:0}),e(r,{class:"a_mt_4",min:50,max:100,value:75}),e(r,{class:"a_mt_4",min:0,max:1e3,value:600}),e(r,{class:"a_mt_4",min:-200,max:-100,value:-130})]),_:1},8,["code-html","code-js"])}const Hs=p(Is,[["render",ys]]);function Gs(){return{codeHtml:`<a-progress
  :value="20"
  :reverse="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :reverse="true"
></a-progress>`}}function Ts(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressReverse",
  components: {
    AProgress,
  },
};`}}const ws={name:"PageProgressReverse",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=Gs(),{codeJs:a}=Ts();return{codeHtml:s,codeJs:a}}};function xs(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_REVERSE_HEADER_",description:"_A_PROGRESS_GROUP_REVERSE_DESCRIPTION_",props:"reverse"},{default:c(()=>[e(r,{value:20,reverse:!0}),e(r,{class:"a_mt_4",value:40,reverse:!0})]),_:1},8,["code-html","code-js"])}const Js=p(ws,[["render",xs]]);function Ns(){return{codeHtml:`<a-progress
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
></a-progress>`}}function Cs(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressShowValue",
  components: {
    AProgress,
  },
};`}}const Bs={name:"PageProgressShowValue",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=Ns(),{codeJs:a}=Cs();return{codeHtml:s,codeJs:a}}};function Ds(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_SHOW_VALUE_HEADER_",description:"_A_PROGRESS_GROUP_SHOW_VALUE_DESCRIPTION_",props:"show-value"},{default:c(()=>[e(r,{value:20,"show-value":!1}),e(r,{class:"a_mt_4",value:40,"show-value":!0})]),_:1},8,["code-html","code-js"])}const Us=p(Bs,[["render",Ds]]);function Vs(){return{codeHtml:`<a-progress
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
></a-progress>`}}function js(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressSizes",
  components: {
    AProgress,
  },
};`}}const Ls={name:"PageProgressSizes",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=Vs(),{codeJs:a}=js();return{codeHtml:s,codeJs:a}}};function qs(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_SIZES_HEADER_",description:"_A_PROGRESS_GROUP_SIZES_DESCRIPTION_",props:"class"},{default:c(()=>[e(r,{class:"a_progress_small",value:20}),e(r,{class:"a_mt_4 a_progress_medium",value:20}),e(r,{class:"a_mt_4 a_progress_large",value:20})]),_:1},8,["code-html","code-js"])}const Ms=p(Ls,[["render",qs]]);function Fs(){return{codeHtml:`<a-progress
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
</a-progress>`}}function Xs(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressSlotText",
  components: {
    AProgress,
  },
};`}}const ks={name:"PageProgressSlotText",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=Fs(),{codeJs:a}=Xs();return{codeHtml:s,codeJs:a}}};function Ws(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_SLOT_PROGRESS_TEXT_HEADER_",description:"_A_PROGRESS_GROUP_SLOT_PROGRESS_TEXT_DESCRIPTION_",slots:"progressText"},{default:c(()=>[e(r,{value:20},{progressText:c(({valuePercent:P})=>[R("span",null,"Aloha "+S(P),1)]),_:1}),e(r,{class:"a_mt_4",value:40},{progressText:c(({valuePercent:P})=>[R("span",null,"$$$ "+S(P),1)]),_:1})]),_:1},8,["code-html","code-js"])}const zs=p(ks,[["render",Ws]]);function Zs(){return{codeHtml:`<a-progress
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
></a-progress>`}}function Ks(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressStriped",
  components: {
    AProgress,
  },
};`}}const Qs={name:"PageProgressStriped",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=Zs(),{codeJs:a}=Ks();return{codeHtml:s,codeJs:a}}};function Ys(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_STRIPED_HEADER_",description:"_A_PROGRESS_GROUP_STRIPED_DESCRIPTION_",props:"striped"},{default:c(()=>[e(r,{value:50,"class-progress-bar":"a_bg_primary",striped:!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_secondary",striped:!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_tertiary",striped:!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_success",striped:!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_warning",striped:!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_info",striped:!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_danger",striped:!0})]),_:1},8,["code-html","code-js"])}const se=p(Qs,[["render",Ys]]);function ee(){return{codeHtml:`<a-progress
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
></a-progress>`}}function re(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressStripedFlow",
  components: {
    AProgress,
  },
};`}}const ae={name:"PageProgressStriped",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=ee(),{codeJs:a}=re();return{codeHtml:s,codeJs:a}}};function oe(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_STRIPED_FLOW_HEADER_",description:"_A_PROGRESS_GROUP_STRIPED_FLOW_DESCRIPTION_",props:["striped","striped-flow"]},{default:c(()=>[e(r,{value:20,"class-progress-bar":"a_bg_primary",striped:!0,"striped-flow":!0}),e(r,{class:"a_mt_4",value:30,"class-progress-bar":"a_bg_secondary",striped:!0,"striped-flow":!0}),e(r,{class:"a_mt_4",value:40,"class-progress-bar":"a_bg_tertiary",striped:!0,"striped-flow":!0}),e(r,{class:"a_mt_4",value:50,"class-progress-bar":"a_bg_success",striped:!0,"striped-flow":!0}),e(r,{class:"a_mt_4",value:60,"class-progress-bar":"a_bg_warning",striped:!0,"striped-flow":!0}),e(r,{class:"a_mt_4",value:70,"class-progress-bar":"a_bg_info",striped:!0,"striped-flow":!0}),e(r,{class:"a_mt_4",value:80,"class-progress-bar":"a_bg_danger",striped:!0,"striped-flow":!0})]),_:1},8,["code-html","code-js"])}const te=p(ae,[["render",oe]]);function _e(){return{codeHtml:`<a-input-number
  v-model="model"
  class="a_mb_4"
  :min="0"
  :max="100"
  :step="5"
  type="integerNonNegative"
></a-input-number>
<a-progress
  :value="model"
></a-progress>`}}function ne(){return{codeJs:`import {
  ref,
} from "vue";

import AInputNumber from "aloha-vue/src/ui/AInputNumber/AInputNumber";
import AProgress from "aloha-vue/src/AProgress/AProgress";
    
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
};`}}const le={name:"PageProgressValue",components:{AInputNumber:$,AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=_e(),{codeJs:a}=ne(),_=E(20);return{codeHtml:s,codeJs:a,model:_}}};function ce(s,a,_,n,l,m){const r=o("a-input-number"),t=o("a-progress"),P=o("aloha-example");return g(),u(P,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_VALUE_HEADER_",description:"_A_PROGRESS_GROUP_VALUE_DESCRIPTION_",props:"value"},{default:c(()=>[e(r,{class:"a_mb_4",modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=b=>s.model=b),min:0,max:100,step:5,type:"integerNonNegative"},null,8,["modelValue"]),e(t,{value:s.model},null,8,["value"])]),_:1},8,["code-html","code-js"])}const pe=p(le,[["render",ce]]);function ge(){return{codeHtml:`<a-progress
  :value="20"
  :value-text-integer="true"
></a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
  :value-text-integer="true"
></a-progress>`}}function ue(){return{codeJs:`import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressValueTextInteger",
  components: {
    AProgress,
  },
};`}}const me={name:"PageProgressValueTextInteger",components:{AlohaExample:d,AProgress:i},setup(){const{codeHtml:s}=ge(),{codeJs:a}=ue();return{codeHtml:s,codeJs:a}}};function de(s,a,_,n,l,m){const r=o("a-progress"),t=o("aloha-example");return g(),u(t,{"code-html":s.codeHtml,"code-js":s.codeJs,header:"_A_PROGRESS_GROUP_VALUE_TEXT_INTEGER_HEADER_",description:"_A_PROGRESS_GROUP_VALUE_TEXT_INTEGER_DESCRIPTION_",props:"value-text-integer"},{default:c(()=>[e(r,{value:20,"value-text-integer":!0}),e(r,{class:"a_mt_4",value:40,"value-text-integer":!0})]),_:1},8,["code-html","code-js"])}const ie=p(me,[["render",de]]);function Pe(){const s=f(()=>j({placeholder:"_A_PROGRESS_COMPONENT_NAME_"}));return{pageTitle:f(()=>`AProgress${s.value?` (${s.value})`:""}`)}}function be(){return{dataProps:[{name:"class-progress-bar",description:"_A_PROGRESS_PROPS_CLASS_PROGRESS_BAR_",type:"String / Object / Function",default:"undefined",required:"false"},{name:"duration",description:"_A_PROGRESS_PROPS_DURATION_",type:"Number",default:"undefined",required:"false"},{name:"indeterminate",description:"_A_PROGRESS_PROPS_INDETERMINATE_",type:"Boolean",default:"false",required:"false"},{name:"max",description:"_A_PROGRESS_PROPS_MAX_",type:"Number",default:100,required:"false"},{name:"min",description:"_A_PROGRESS_PROPS_MIN_",type:"Number",default:0,required:"false"},{name:"reverse",description:"_A_PROGRESS_PROPS_REVERSE_",type:"Boolean",default:"false",required:"false"},{name:"showValue",description:"_A_PROGRESS_PROPS_SHOW_VALUE_",type:"Boolean",default:"true",required:"false"},{name:"striped",description:"_A_PROGRESS_PROPS_STRIPED_",type:"Boolean",default:"false",required:"false"},{name:"striped-flow",description:"_A_PROGRESS_PROPS_STRIPED_FLOW_",type:"Boolean",default:"false",required:"false"},{name:"value",description:"_A_PROGRESS_PROPS_VALUE_",type:"Number",default:0,required:"false"},{name:"value-text-integer",description:"_A_PROGRESS_PROPS_VALUE_TEXT_INTEGER_",type:"Boolean",default:"false",required:"false"}]}}function fe(){return{dataSlots:[{name:"progressText",description:"_A_PROGRESS_SLOT_PROGRESS_TEXT_"}]}}const ve={name:"PageProgress",components:{AlohaPage:U,AlohaTableProps:V,ATranslation:L,PageProgressBasic:Y,PageProgressClassCombination:os,PageProgressClassProgressBar:cs,PageProgressClassProgressBarFunction:ds,PageProgressDuration:vs,PageProgressIndeterminate:Es,PageProgressMinMax:Hs,PageProgressReverse:Js,PageProgressShowValue:Us,PageProgressSizes:Ms,PageProgressSlotText:zs,PageProgressStriped:se,PageProgressStripedFlow:te,PageProgressValue:pe,PageProgressValueTextInteger:ie},setup(){const{pageTitle:s}=Pe(),{dataProps:a}=be(),{dataSlots:_}=fe();return{dataProps:a,dataSlots:_,pageTitle:s}}};function Ae(s,a,_,n,l,m){const r=o("a-translation"),t=o("page-progress-basic"),P=o("page-progress-class-progress-bar"),b=o("page-progress-class-progress-bar-function"),O=o("page-progress-sizes"),I=o("page-progress-class-combination"),y=o("page-progress-value"),H=o("page-progress-min-max"),G=o("page-progress-show-value"),T=o("page-progress-reverse"),w=o("page-progress-value-text-integer"),x=o("page-progress-striped"),J=o("page-progress-striped-flow"),N=o("page-progress-indeterminate"),C=o("page-progress-duration"),B=o("page-progress-slot-text"),A=o("aloha-table-props"),D=o("aloha-page");return g(),u(D,{"page-title":s.pageTitle},{body:c(()=>[e(r,{tag:"p",html:"_A_PROGRESS_COMPONENT_DESCRIPTION_"}),e(t),e(P),e(b),e(O),e(I),e(y),e(H),e(G),e(T),e(w),e(x),e(J),e(N),e(C),e(B),e(A,{data:s.dataProps},null,8,["data"]),e(A,{"table-label":"Slots",data:s.dataSlots,columns:["name","description"]},null,8,["data"])]),_:1},8,["page-title"])}const Ne=p(ve,[["render",Ae]]);export{Ne as default};
