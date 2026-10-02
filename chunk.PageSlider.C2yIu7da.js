import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Z as ee,kt as l,s as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";function m(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model: {{ model }}</div>
<a-slider
  v-model="model"
  :disabled="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>
`}}function h(){return{codeJs:`import {
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
};`}}var g={name:`PageSliderBasic`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(50),{codeHtml:t}=m(),{codeJs:n}=h();return{codeHtml:t,codeJs:n,model:e}}},_={class:`a_mt_2`};function v(t,i,ee,l,u,d){let f=r(`a-slider`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`disabled`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),s(`div`,_,`model: `+e(t.model),1),a(f,{modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,disabled:!0,label:`_A_SLIDER_DISABLED_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var y=d(g,[[`render`,v]]);function b(){return{codeHtml:`<a-slider
  :change="changeModel"
  :model-value="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-input>
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}var S={name:`PageSliderChange`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(30),t=({model:t,id:n,props:r})=>{e.value=t,console.log(n,r)},{codeHtml:n}=b(),{codeJs:r}=x();return{changeModel:t,codeHtml:n,codeJs:r,model:e}}};function C(t,i,ee,l,u,d){let f=r(`a-slider`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(f,{change:t.changeModel,"model-value":t.model,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`change`,`model-value`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var w=d(S,[[`render`,C]]);function T(){return{codeHtml:`<a-slider
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
};`}}var D={name:`PageSliderData`,components:{ASlider:u,AlohaExample:p},setup(){let e=[{id:1},{id:1},{id:1},{id:0},{id:1},{id:2},{id:3},{id:5},{id:7},{id:4},{id:6},{id:10},{id:11},{id:15},{id:19},{id:23},{id:30},{id:40},{id:35},{id:11}],t=i(void 0),n=i(11),r=i(void 0),{codeHtml:a}=T(),{codeJs:o}=E();return{codeHtml:a,codeJs:o,data:e,model1:t,model2:n,model3:r}}},O={class:`a_mt_2`},k={class:`a_mt_2`},A={class:`a_mt_2`};function j(t,i,ee,l,u,d){let f=r(`a-slider`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SLIDER_GROUP_DATA_HEADER_`,description:`_A_SLIDER_GROUP_DATA_DESCRIPTION_`,props:[`data`,`key-id`]},{default:o(()=>[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,data:t.data,"key-id":`id`,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`,`data`]),s(`div`,O,`model1: `+e(t.model1),1),a(f,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,data:t.data,extra:{max:30,min:10},max:30,min:10,"key-id":`id`,label:`_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_`},null,8,[`modelValue`,`data`]),s(`div`,k,`model2: `+e(t.model2),1),a(f,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,data:t.data,extra:{max:30,min:10},max:30,min:10,range:!0,"key-id":`id`,label:`_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_`},null,8,[`modelValue`,`data`]),s(`div`,A,`model3: `+e(t.model3),1)]),_:1},8,[`code-html`,`code-js`])}var M=d(D,[[`render`,j]]);function N(){return{codeHtml:`<a-slider
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
};`}}var F={name:`PageSliderErrors`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(10),{codeHtml:t}=N(),{codeJs:n}=P();return{codeHtml:t,codeJs:n,model:e}}};function I(e,t,i,s,ee,l){let u=r(`a-slider`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,errors:`Aloha`,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var L=d(F,[[`render`,I]]);function R(){return{codeHtml:`<a-slider
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
};`}}var B={name:`PageSliderHelpText`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(20),{codeHtml:t}=R(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,model:e}}};function V(e,t,i,s,ee,l){let u=r(`a-slider`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,"help-text":`Aloha`,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var H=d(B,[[`render`,V]]);function U(){return{codeHtml:`<a-slider
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
};`}}var G={name:`PageSliderLabelDescription`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(60),{codeHtml:t}=U(),{codeJs:n}=W();return{codeHtml:t,codeJs:n,model:e}}};function K(e,t,i,s,ee,l){let u=r(`a-slider`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`_A_SLIDER_BASIC_LABEL_`,"label-description":`Aloha`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var q=d(G,[[`render`,K]]);function J(){return{codeHtml:`<a-slider
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
<div>model3: {{ model3 }}</div>`}}function te(){return{codeJs:`import {
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
};`}}var Y={name:`PageSliderMinMax`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(30),t=i(-1),n=i([20,40]),{codeHtml:r}=J(),{codeJs:a}=te();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}},X={class:`a_mt_2`},Z={class:`a_mt_2`},Q={class:`a_mt_2`};function ne(t,i,ee,l,u,d){let f=r(`a-slider`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SLIDER_GROUP_MIN_MAX_STEP_HEADER_`,description:`_A_SLIDER_GROUP_MIN_MAX_STEP_DESCRIPTION_`,props:[`min`,`max`,`step`]},{default:o(()=>[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,extra:{max:100,min:0,step:.1},max:100,min:0,step:.1,label:`_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_`},null,8,[`modelValue`]),s(`div`,X,`model1: `+e(t.model1),1),a(f,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,extra:{max:50,min:-10,step:10},max:50,min:-10,step:10,label:`_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_`},null,8,[`modelValue`]),s(`div`,Z,`model2: `+e(t.model2),1),a(f,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,extra:{max:40,min:20,step:4},max:40,min:20,range:!0,step:4,label:`_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_`},null,8,[`modelValue`]),s(`div`,Q,`model3: `+e(t.model3),1)]),_:1},8,[`code-html`,`code-js`])}var re=d(Y,[[`render`,ne]]);function ie(){return{codeHtml:`<a-slider
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
};`}}var oe={name:`PageSliderRange`,components:{ASlider:u,AlohaExample:p},setup(){let e=i([]),t=i([0]),n=i([0,20]),r=i([4,50]),{codeHtml:a}=ie(),{codeJs:o}=ae();return{codeHtml:a,codeJs:o,model1:e,model2:t,model3:n,model4:r}}},se={class:`a_mt_2`},ce={class:`a_mt_2`},le={class:`a_mt_2`};function ue(t,i,ee,l,u,d){let f=r(`a-slider`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SLIDER_GROUP_RANGE_HEADER_`,description:`_A_SLIDER_GROUP_RANGE_DESCRIPTION_`,props:[`range`]},{default:o(()=>[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,range:!0,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),s(`div`,se,`model1: `+e(t.model1),1),a(f,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,range:!0,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),s(`div`,ce,`model2: `+e(t.model2),1),a(f,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,range:!0,label:`_A_SLIDER_BASIC_LABEL_`},null,8,[`modelValue`]),s(`div`,le,`model3: `+e(t.model3),1),a(f,{modelValue:t.model4,"onUpdate:modelValue":i[3]||=e=>t.model4=e,disabled:!0,range:!0,label:`_A_SLIDER_DISABLED_LABEL_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var de=d(oe,[[`render`,ue]]);function fe(){return{codeHtml:`<a-slider
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
};`}}var me={name:`PageSliderStops`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(11),t=i(11),{codeHtml:n}=fe(),{codeJs:r}=pe();return{codeHtml:n,codeJs:r,model1:e,model2:t}}};function he(e,t,i,s,ee,l){let u=r(`a-slider`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SHOW_STOPS_HEADER_`,description:`_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_`,props:[`show-stops`]},{default:o(()=>[a(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,max:20,min:10,"show-stops":!1,label:`_A_SLIDER_LABEL_NOT_SHOW_STOPS_`},null,8,[`modelValue`]),a(u,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,max:20,min:10,"show-stops":!0,label:`_A_SLIDER_LABEL_SHOW_STOPS_`},null,8,[`modelValue`])]),_:1},8,[`code-html`,`code-js`])}var ge=d(me,[[`render`,he]]);function _e(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
};`}}var ye={name:`PageSliderVertical`,components:{ASlider:u,AlohaExample:p},setup(){let e=i(0),t=i(0),n=i(0),{codeHtml:r}=_e(),{codeJs:a}=ve();return{codeHtml:r,codeJs:a,model1:e,model2:t,model3:n}}},be={class:`a_columns a_columns_count_12`},$={class:`a_column a_column_3 a_column_6_tablet a_column_12_mobile`},xe={class:`a_column a_column_3 a_column_6_tablet a_column_12_mobile`},Se={class:`a_column a_column_3 a_column_6_tablet a_column_12_mobile`};function Ce(t,i,ee,l,u,d){let f=r(`a-slider`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SHOW_STOPS_HEADER_`,description:`_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_`,props:[`vertical`,`height`]},{default:o(()=>[s(`div`,be,[s(`div`,$,[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,max:20,vertical:!0,height:`200px`,label:`_A_SLIDER_LABEL_NOT_SHOW_STOPS_`},null,8,[`modelValue`]),s(`div`,null,`model1 `+e(t.model1),1)]),s(`div`,xe,[a(f,{modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,max:10,"show-stops":!0,vertical:!0,height:`200px`,label:`_A_SLIDER_LABEL_SHOW_STOPS_`},null,8,[`modelValue`]),s(`div`,null,`model2 `+e(t.model2),1)]),s(`div`,Se,[a(f,{modelValue:t.model3,"onUpdate:modelValue":i[2]||=e=>t.model3=e,extra:{min:10,max:40},max:40,min:10,range:!0,vertical:!0,height:`200px`,label:`_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_`},null,8,[`modelValue`]),s(`div`,null,`model3 `+e(t.model3),1)])])]),_:1},8,[`code-html`,`code-js`])}var we=d(ye,[[`render`,Ce]]);function Te(){let e=t(()=>l({placeholder:`_A_SLIDER_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ASlider${e.value?` (${e.value})`:``}`)}}var Ee={name:`PageSlider`,components:{AlohaPage:f,ATranslation:ee,PageSliderBasic:y,PageSliderChange:w,PageSliderData:M,PageSliderErrors:L,PageSliderHelpText:H,PageSliderLabelDescription:q,PageSliderMinMax:re,PageSliderRange:de,PageSliderStops:ge,PageSliderVertical:we},setup(){let{pageTitle:e}=Te();return{pageTitle:e}}};function De(e,t,i,s,ee,l){let u=r(`a-translation`),d=r(`page-slider-basic`),f=r(`page-slider-change`),p=r(`page-slider-help-text`),m=r(`page-slider-errors`),h=r(`page-slider-label-description`),g=r(`page-slider-range`),_=r(`page-slider-min-max`),v=r(`page-slider-data`),y=r(`page-slider-stops`),b=r(`page-slider-vertical`),x=r(`aloha-page`);return c(),n(x,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_SLIDER_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b)]),_:1},8,[`page-title`])}var Oe=d(Ee,[[`render`,De]]);export{Oe as default};