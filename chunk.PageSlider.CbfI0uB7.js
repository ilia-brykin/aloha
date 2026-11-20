import{t as e}from"./chunk.AlohaPage.BX4p4AoC.js";import{Bt as t,Ft as n,It as r,Pt as i,Zt as a,an as o,pn as s,sn as c,tn as l}from"./chunk.vendor.C763F6L5.js";import{t as u}from"./chunk.AlohaExample.Dv0nVKNW.js";import{R as d,Yt as f,it as p}from"./bundle.index.TygFUoMz.js";import{t as m}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function h(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model: {{ model }}</div>
<a-slider
  v-model="model"
  :disabled="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>
`}}function g(){return{codeJs:`import {
  ref,
} from "vue";
import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderBasic",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(50);
    
    return {
      model,
    };
  },
};`}}var _={name:`PageSliderBasic`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(50),{codeHtml:t}=h(),{codeJs:n}=g();return{codeHtml:t,codeJs:n,model:e}}},v={class:`a_mt_2`};function y(e,i,c,u,d,f){let p=l(`a-slider`),m=l(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`disabled`]},{default:o(()=>[t(p,{modelValue:e.model,"onUpdate:modelValue":i[0]||=t=>e.model=t,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),n(`div`,v,`model: `+s(e.model),1),t(p,{modelValue:e.model,"onUpdate:modelValue":i[1]||=t=>e.model=t,disabled:!0,label:`_A_SLIDER_DISABLED_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var b=m(_,[[`render`,y]]);function x(){return{codeHtml:`<a-slider
  :change="changeModel"
  :model-value="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-input>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderChange",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(30);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`}}var C={name:`PageSliderChange`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(30),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=x(),{codeJs:r}=S();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function ee(e,i,c,u,d,f){let p=l(`a-slider`),m=l(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[t(p,{change:e.changeModel,"model-value":e.model,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`change`,`model-value`]),n(`div`,null,`model: `+s(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var w=m(C,[[`render`,ee]]);function T(){return{codeHtml:`<a-slider
  v-model="model1"
  :data="data"
  key-id="id"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :data="data"
  :extra="{ max: 30, min: 10 }"
  :max="30"
  :min="10"
  key-id="id"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :data="data"
  :extra="{ max: 30, min: 10 }"
  :max="30"
  :min="10"
  :range="true"
  key-id="id"
  label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model3: {{ model3 }}</div>`}}function E(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderData",
  components: {
    ASlider,
  },
  setup() {
    const data = [
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 7 },
      { id: 4 },
      { id: 6 },
      { id: 10 },
      { id: 11 },
      { id: 15 },
      { id: 19 },
      { id: 23 },
      { id: 30 },
      { id: 40 },
      { id: 35 },
      { id: 11 },
    ];
    const model1 = ref(undefined);
    const model2 = ref(11);
    const model3 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};`}}var D={name:`PageSliderData`,components:{ASlider:d,AlohaExample:u},setup(){let e=[{id:1},{id:1},{id:1},{id:0},{id:1},{id:2},{id:3},{id:5},{id:7},{id:4},{id:6},{id:10},{id:11},{id:15},{id:19},{id:23},{id:30},{id:40},{id:35},{id:11}],t=c(void 0),n=c(11),r=c(void 0),{codeHtml:i}=T(),{codeJs:a}=E();return{codeHtml:i,codeJs:a,data:e,model1:t,model2:n,model3:r}}},O={class:`a_mt_2`},k={class:`a_mt_2`},A={class:`a_mt_2`};function j(e,i,c,u,d,f){let p=l(`a-slider`),m=l(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SLIDER_GROUP_DATA_HEADER_`,description:`_A_SLIDER_GROUP_DATA_DESCRIPTION_`,props:[`data`,`key-id`]},{default:o(()=>[t(p,{modelValue:e.model1,"onUpdate:modelValue":i[0]||=t=>e.model1=t,data:e.data,"key-id":`id`,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`,`data`]),n(`div`,O,`model1: `+s(e.model1),1),t(p,{modelValue:e.model2,"onUpdate:modelValue":i[1]||=t=>e.model2=t,data:e.data,extra:{max:30,min:10},max:30,min:10,"key-id":`id`,label:`_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_`},null,8,[`modelValue`,`data`]),n(`div`,k,`model2: `+s(e.model2),1),t(p,{modelValue:e.model3,"onUpdate:modelValue":i[2]||=t=>e.model3=t,data:e.data,extra:{max:30,min:10},max:30,min:10,range:!0,"key-id":`id`,label:`_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_`},null,8,[`modelValue`,`data`]),n(`div`,A,`model3: `+s(e.model3),1)]),_:1},8,[`code-html`,`code-js`])}var M=m(D,[[`render`,j]]);function N(){return{codeHtml:`<a-slider
  v-model="model"
  errors="Aloha"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageInputErrors",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(20);
    
    return {
      model,
    };
  },
};`}}var F={name:`PageSliderErrors`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(10),{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,model:e}}};function I(e,n,i,s,c,u){let d=l(`a-slider`),f=l(`aloha-example`);return a(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":n[0]||=t=>e.model=t,errors:`Aloha`,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var L=m(F,[[`render`,I]]);function R(){return{codeHtml:`<a-slider
  v-model="model"
  help-text="Aloha"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderHelpText",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(20);
    
    return {
      model,
    };
  },
};`}}var B={name:`PageSliderHelpText`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(20),{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,model:e}}};function V(e,n,i,s,c,u){let d=l(`a-slider`),f=l(`aloha-example`);return a(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":n[0]||=t=>e.model=t,"help-text":`Aloha`,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var H=m(B,[[`render`,V]]);function U(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
  label-description="Aloha"
></a-slider>`}}function W(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderLabelDescription",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(60);
    
    return {
      model,
    };
  },
};`}}var G={name:`PageSliderLabelDescription`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(60),{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,model:e}}};function K(e,n,i,s,c,u){let d=l(`a-slider`),f=l(`aloha-example`);return a(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":n[0]||=t=>e.model=t,label:`_A_SLIDER_BASIC_LABEL_`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var q=m(G,[[`render`,K]]);function J(){return{codeHtml:`<a-slider
  v-model="model1"
  :extra="{ max: 40, min: 10, step: 2 }"
  :max="40"
  :min="10"
  :step="2"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :extra="{ max: 50, min: -10, step: 10 }"
  :max="50"
  :min="-10"
  :step="10"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :extra="{ max: 40, min: 20, step: 4 }"
  :max="40"
  :min="20"
  :range="true"
  :step="4"
  label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model3: {{ model3 }}</div>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderMinMax",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(30);
    const model2 = ref(-1);
    const model3 = ref([20, 40]);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var X={name:`PageSliderMinMax`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(30),t=c(-1),n=c([20,40]),{codeHtml:r}=J(),{codeJs:i}=Y();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},Z={class:`a_mt_2`},te={class:`a_mt_2`},Q={class:`a_mt_2`};function ne(e,i,c,u,d,f){let p=l(`a-slider`),m=l(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SLIDER_GROUP_MIN_MAX_STEP_HEADER_`,description:`_A_SLIDER_GROUP_MIN_MAX_STEP_DESCRIPTION_`,props:[`min`,`max`,`step`]},{default:o(()=>[t(p,{modelValue:e.model1,"onUpdate:modelValue":i[0]||=t=>e.model1=t,extra:{max:100,min:0,step:.1},max:100,min:0,step:.1,label:`_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_`},null,8,[`modelValue`]),n(`div`,Z,`model1: `+s(e.model1),1),t(p,{modelValue:e.model2,"onUpdate:modelValue":i[1]||=t=>e.model2=t,extra:{max:50,min:-10,step:10},max:50,min:-10,step:10,label:`_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_`},null,8,[`modelValue`]),n(`div`,te,`model2: `+s(e.model2),1),t(p,{modelValue:e.model3,"onUpdate:modelValue":i[2]||=t=>e.model3=t,extra:{max:40,min:20,step:4},max:40,min:20,range:!0,step:4,label:`_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_`},null,8,[`modelValue`]),n(`div`,Q,`model3: `+s(e.model3),1)]),_:1},8,[`code-html`,`code-js`])}var re=m(X,[[`render`,ne]]);function ie(){return{codeHtml:`<a-slider
  v-model="model1"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model3: {{ model3 }}</div>
<a-slider
  v-model="model4"
  :disabled="true"
  :range="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>`}}function ae(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderRange",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref([]);
    const model2 = ref([0]);
    const model3 = ref([0, 20]);
    const model4 = ref([4, 50]);
    
    return {
      model1,
      model2,
      model3,
      model4,
    };
  },
};`}}var oe={name:`PageSliderRange`,components:{ASlider:d,AlohaExample:u},setup(){let e=c([]),t=c([0]),n=c([0,20]),r=c([4,50]),{codeHtml:i}=ie(),{codeJs:a}=ae();return{codeHtml:i,codeJs:a,model1:e,model2:t,model3:n,model4:r}}},se={class:`a_mt_2`},ce={class:`a_mt_2`},le={class:`a_mt_2`};function ue(e,i,c,u,d,f){let p=l(`a-slider`),m=l(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SLIDER_GROUP_RANGE_HEADER_`,description:`_A_SLIDER_GROUP_RANGE_DESCRIPTION_`,props:[`range`]},{default:o(()=>[t(p,{modelValue:e.model1,"onUpdate:modelValue":i[0]||=t=>e.model1=t,range:!0,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),n(`div`,se,`model1: `+s(e.model1),1),t(p,{modelValue:e.model2,"onUpdate:modelValue":i[1]||=t=>e.model2=t,range:!0,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),n(`div`,ce,`model2: `+s(e.model2),1),t(p,{modelValue:e.model3,"onUpdate:modelValue":i[2]||=t=>e.model3=t,range:!0,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),n(`div`,le,`model3: `+s(e.model3),1),t(p,{modelValue:e.model4,"onUpdate:modelValue":i[3]||=t=>e.model4=t,disabled:!0,range:!0,label:`_A_SLIDER_DISABLED_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var de=m(oe,[[`render`,ue]]);function fe(){return{codeHtml:`<a-slider
  v-model="model1"
  :max="20"
  :min="10"
  :show-stops="false"
  label="_A_SLIDER_LABEL_NOT_SHOW_STOPS_"
></a-slider>
<a-slider
  v-model="model2"
  :max="20"
  :min="10"
  :show-stops="true"
  label="_A_SLIDER_LABEL_SHOW_STOPS_"
></a-slider>`}}function pe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderStops",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(11);
    const model2 = ref(11);
    
    return {
      model1,
      model2
    };
  },
};`}}var me={name:`PageSliderStops`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(11),t=c(11),{codeHtml:n}=fe(),{codeJs:r}=pe();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function he(e,n,i,s,c,u){let d=l(`a-slider`),f=l(`aloha-example`);return a(),r(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SHOW_STOPS_HEADER_`,description:`_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_`,props:[`show-stops`]},{default:o(()=>[t(d,{modelValue:e.model1,"onUpdate:modelValue":n[0]||=t=>e.model1=t,max:20,min:10,"show-stops":!1,label:`_A_SLIDER_LABEL_NOT_SHOW_STOPS_`},null,8,[`modelValue`]),t(d,{modelValue:e.model2,"onUpdate:modelValue":n[1]||=t=>e.model2=t,max:20,min:10,"show-stops":!0,label:`_A_SLIDER_LABEL_SHOW_STOPS_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ge=m(me,[[`render`,he]]);function _e(){return{codeHtml:`<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_3 a_column_6_tablet a_column_12_mobile">
    <a-slider
      v-model="model1"
      :max="20"
      :vertical="true"
      height="200px"
      label="_A_SLIDER_LABEL_NOT_SHOW_STOPS_"
    ></a-slider>
    <div>model1 {{ model1 }}</div>
  </div>
  <div class="a_column a_column_3 a_column_6_tablet a_column_12_mobile">
    <a-slider
      v-model="model2"
      :max="10"
      :show-stops="true"
      :vertical="true"
      height="200px"
      label="_A_SLIDER_LABEL_SHOW_STOPS_"
    ></a-slider>
    <div>model2 {{ model2 }}</div>
  </div>
  <div class="a_column a_column_3 a_column_6_tablet a_column_12_mobile">
    <a-slider
      v-model="model3"
      :extra="{ min: 10, max: 40 }"
      :max="40"
      :min="10"
      :range="true"
      :vertical="true"
      height="200px"
      label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"
    ></a-slider>
    <div>model3 {{ model3 }}</div>
  </div>
</div>`}}function ve(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderVertical",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(0);
    const model2 = ref(0);
    const model3 = ref(0);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`}}var ye={name:`PageSliderVertical`,components:{ASlider:d,AlohaExample:u},setup(){let e=c(0),t=c(0),n=c(0),{codeHtml:r}=_e(),{codeJs:i}=ve();return{codeHtml:r,codeJs:i,model1:e,model2:t,model3:n}}},be={class:`a_columns a_columns_count_12`},$={class:`a_column a_column_3 a_column_6_tablet a_column_12_mobile`},xe={class:`a_column a_column_3 a_column_6_tablet a_column_12_mobile`},Se={class:`a_column a_column_3 a_column_6_tablet a_column_12_mobile`};function Ce(e,i,c,u,d,f){let p=l(`a-slider`),m=l(`aloha-example`);return a(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SHOW_STOPS_HEADER_`,description:`_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_`,props:[`vertical`,`height`]},{default:o(()=>[n(`div`,be,[n(`div`,$,[t(p,{modelValue:e.model1,"onUpdate:modelValue":i[0]||=t=>e.model1=t,max:20,vertical:!0,height:`200px`,label:`_A_SLIDER_LABEL_NOT_SHOW_STOPS_`},null,8,[`modelValue`]),n(`div`,null,`model1 `+s(e.model1),1)]),n(`div`,xe,[t(p,{modelValue:e.model2,"onUpdate:modelValue":i[1]||=t=>e.model2=t,max:10,"show-stops":!0,vertical:!0,height:`200px`,label:`_A_SLIDER_LABEL_SHOW_STOPS_`},null,8,[`modelValue`]),n(`div`,null,`model2 `+s(e.model2),1)]),n(`div`,Se,[t(p,{modelValue:e.model3,"onUpdate:modelValue":i[2]||=t=>e.model3=t,extra:{min:10,max:40},max:40,min:10,range:!0,vertical:!0,height:`200px`,label:`_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_`},null,8,[`modelValue`]),n(`div`,null,`model3 `+s(e.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var we=m(ye,[[`render`,Ce]]);function Te(){let e=i(()=>f({placeholder:`_A_SLIDER_COMPONENT_NAME_`}));return{pageTitle:i(()=>`ASlider${e.value?` (${e.value})`:``}`)}}var Ee={name:`PageSlider`,components:{AlohaPage:e,ATranslation:p,PageSliderBasic:b,PageSliderChange:w,PageSliderData:M,PageSliderErrors:L,PageSliderHelpText:H,PageSliderLabelDescription:q,PageSliderMinMax:re,PageSliderRange:de,PageSliderStops:ge,PageSliderVertical:we},setup(){let{pageTitle:e}=Te();return{pageTitle:e}}};function De(e,n,i,s,c,u){let d=l(`a-translation`),f=l(`page-slider-basic`),p=l(`page-slider-change`),m=l(`page-slider-help-text`),h=l(`page-slider-errors`),g=l(`page-slider-label-description`),_=l(`page-slider-range`),v=l(`page-slider-min-max`),y=l(`page-slider-data`),b=l(`page-slider-stops`),x=l(`page-slider-vertical`),S=l(`aloha-table-css-vars`),C=l(`aloha-page`);return a(),r(C,{"page-title":e.pageTitle},{body:o(()=>[t(d,{tag:`p`,html:`_A_SLIDER_COMPONENT_DESCRIPTION_`}),t(f),t(p),t(m),t(h),t(g),t(_),t(v),t(y),t(b),t(x),t(S,{files:`components/ui/ASlider`})]),_:1},8,[`page-title`])}var Oe=m(Ee,[[`render`,De]]);export{Oe as default};