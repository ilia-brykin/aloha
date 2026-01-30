import{A as L,a as b}from"./chunk.AlohaExample.CY0fG0Xz.js";import{_ as u,g as V,A as O}from"./bundle.index.cJHvYkjp.js";import{r,W as A,V as S,aT as E,e as a,_ as t,Z as i,aU as p,d as f}from"./chunk.vendor.CVk5hDWp.js";import"./chunk.vendor-lodash.D5YICsTb.js";import{A as I}from"./chunk.ASlider.DYuda4z7.js";import"./chunk.APageTabTitle.BYElfkq8.js";import"./chunk.AlohaHighlightjs.Bm62qoBx.js";import"./chunk.translations-ar.BLXFsPIg.js";import"./chunk.translations-de.CBeuxROU.js";import"./chunk.translations-en.uNM3IiGq.js";import"./chunk.translations-es.DiU5NRty.js";import"./chunk.translations-fr.Bw2Jyhh3.js";import"./chunk.translations-hr.B5Pb1u_B.js";import"./chunk.translations-it.ldbSWEhu.js";import"./chunk.translations-ru.BX74UQg2.js";function U(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model: {{ model }}</div>
<a-slider
  v-model="model"
  :disabled="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>
`}}function T(){return{codeJs:`import {
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
};`}}const J={name:"PageSliderBasic",components:{ASlider:I,AlohaExample:L},setup(){const e=r(50),{codeHtml:o}=U(),{codeJs:m}=T();return{codeHtml:o,codeJs:m,model:e}}},C={class:"a_mt_2"};function x(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","disabled"]},{default:E(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),i("div",C,"model: "+p(e.model),1),t(d,{modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model=l),disabled:!0,label:"_A_SLIDER_DISABLED_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const N=u(J,[["render",x]]);function G(){return{codeHtml:`<a-slider
  :change="changeModel"
  :model-value="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-input>
<div>model: {{ model }}</div>`}}function j(){return{codeJs:`import {
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
};`}}const M={name:"PageSliderChange",components:{ASlider:I,AlohaExample:L},setup(){const e=r(30),o=({model:_,id:c,props:d})=>{e.value=_,console.log(c,d)},{codeHtml:m}=G(),{codeJs:n}=j();return{changeModel:o,codeHtml:m,codeJs:n,model:e}}};function W(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:E(()=>[t(d,{change:e.changeModel,"model-value":e.model,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["change","model-value"]),i("div",null,"model: "+p(e.model),1)]),_:1},8,["code-html","code-js"])}const k=u(M,[["render",W]]);function y(){return{codeHtml:`<a-slider
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
<div>model3: {{ model3 }}</div>`}}function w(){return{codeJs:`import {
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
};`}}const X={name:"PageSliderData",components:{ASlider:I,AlohaExample:L},setup(){const e=[{id:1},{id:1},{id:1},{id:0},{id:1},{id:2},{id:3},{id:5},{id:7},{id:4},{id:6},{id:10},{id:11},{id:15},{id:19},{id:23},{id:30},{id:40},{id:35},{id:11}],o=r(void 0),m=r(11),n=r(void 0),{codeHtml:_}=y(),{codeJs:c}=w();return{codeHtml:_,codeJs:c,data:e,model1:o,model2:m,model3:n}}},Z={class:"a_mt_2"},q={class:"a_mt_2"},z={class:"a_mt_2"};function F(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SLIDER_GROUP_DATA_HEADER_",description:"_A_SLIDER_GROUP_DATA_DESCRIPTION_",props:["data","key-id"]},{default:E(()=>[t(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),data:e.data,"key-id":"id",label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue","data"]),i("div",Z,"model1: "+p(e.model1),1),t(d,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),data:e.data,extra:{max:30,min:10},max:30,min:10,"key-id":"id",label:"_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_"},null,8,["modelValue","data"]),i("div",q,"model2: "+p(e.model2),1),t(d,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=l=>e.model3=l),data:e.data,extra:{max:30,min:10},max:30,min:10,range:!0,"key-id":"id",label:"_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"},null,8,["modelValue","data"]),i("div",z,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const K=u(X,[["render",F]]);function Q(){return{codeHtml:`<a-slider
  v-model="model"
  errors="Aloha"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>`}}function Y(){return{codeJs:`import {
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
};`}}const ee={name:"PageSliderErrors",components:{ASlider:I,AlohaExample:L},setup(){const e=r(10),{codeHtml:o}=Q(),{codeJs:m}=Y();return{codeHtml:o,codeJs:m,model:e}}};function oe(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:E(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),errors:"Aloha",label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const le=u(ee,[["render",oe]]);function de(){return{codeHtml:`<a-slider
  v-model="model"
  help-text="Aloha"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>`}}function ae(){return{codeJs:`import {
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
};`}}const te={name:"PageSliderHelpText",components:{ASlider:I,AlohaExample:L},setup(){const e=r(20),{codeHtml:o}=de(),{codeJs:m}=ae();return{codeHtml:o,codeJs:m,model:e}}};function me(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:E(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),"help-text":"Aloha",label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ne=u(te,[["render",me]]);function se(){return{codeHtml:`<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL_"
  label-description="Aloha"
></a-slider>`}}function _e(){return{codeJs:`import {
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
};`}}const re={name:"PageSliderLabelDescription",components:{ASlider:I,AlohaExample:L},setup(){const e=r(60),{codeHtml:o}=se(),{codeJs:m}=_e();return{codeHtml:o,codeJs:m,model:e}}};function ie(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:E(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model=l),label:"_A_SLIDER_BASIC_LABEL_","label-description":"Aloha"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const ce=u(re,[["render",ie]]);function pe(){return{codeHtml:`<a-slider
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
<div>model3: {{ model3 }}</div>`}}function ue(){return{codeJs:`import {
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
};`}}const Ae={name:"PageSliderMinMax",components:{ASlider:I,AlohaExample:L},setup(){const e=r(30),o=r(-1),m=r([20,40]),{codeHtml:n}=pe(),{codeJs:_}=ue();return{codeHtml:n,codeJs:_,model1:e,model2:o,model3:m}}},Se={class:"a_mt_2"},Ee={class:"a_mt_2"},Le={class:"a_mt_2"};function Ie(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SLIDER_GROUP_MIN_MAX_STEP_HEADER_",description:"_A_SLIDER_GROUP_MIN_MAX_STEP_DESCRIPTION_",props:["min","max","step"]},{default:E(()=>[t(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),extra:{max:100,min:0,step:.1},max:100,min:0,step:.1,label:"_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"},null,8,["modelValue"]),i("div",Se,"model1: "+p(e.model1),1),t(d,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),extra:{max:50,min:-10,step:10},max:50,min:-10,step:10,label:"_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"},null,8,["modelValue"]),i("div",Ee,"model2: "+p(e.model2),1),t(d,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=l=>e.model3=l),extra:{max:40,min:20,step:4},max:40,min:20,range:!0,step:4,label:"_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_"},null,8,["modelValue"]),i("div",Le,"model3: "+p(e.model3),1)]),_:1},8,["code-html","code-js"])}const fe=u(Ae,[["render",Ie]]);function ve(){return{codeHtml:`<a-slider
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
></a-slider>`}}function ge(){return{codeJs:`import {
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
};`}}const Re={name:"PageSliderRange",components:{ASlider:I,AlohaExample:L},setup(){const e=r([]),o=r([0]),m=r([0,20]),n=r([4,50]),{codeHtml:_}=ve(),{codeJs:c}=ge();return{codeHtml:_,codeJs:c,model1:e,model2:o,model3:m,model4:n}}},Pe={class:"a_mt_2"},he={class:"a_mt_2"},$e={class:"a_mt_2"};function De(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SLIDER_GROUP_RANGE_HEADER_",description:"_A_SLIDER_GROUP_RANGE_DESCRIPTION_",props:["range"]},{default:E(()=>[t(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),range:!0,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),i("div",Pe,"model1: "+p(e.model1),1),t(d,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),range:!0,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),i("div",he,"model2: "+p(e.model2),1),t(d,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=l=>e.model3=l),range:!0,label:"_A_SLIDER_BASIC_LABEL_"},null,8,["modelValue"]),i("div",$e,"model3: "+p(e.model3),1),t(d,{modelValue:e.model4,"onUpdate:modelValue":o[3]||(o[3]=l=>e.model4=l),disabled:!0,range:!0,label:"_A_SLIDER_DISABLED_LABEL_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Be=u(Re,[["render",De]]);function He(){return{codeHtml:`<a-slider
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
></a-slider>`}}function be(){return{codeJs:`import {
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
};`}}const Ve={name:"PageSliderStops",components:{ASlider:I,AlohaExample:L},setup(){const e=r(11),o=r(11),{codeHtml:m}=He(),{codeJs:n}=be();return{codeHtml:m,codeJs:n,model1:e,model2:o}}};function Oe(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SHOW_STOPS_HEADER_",description:"_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_",props:["show-stops"]},{default:E(()=>[t(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),max:20,min:10,"show-stops":!1,label:"_A_SLIDER_LABEL_NOT_SHOW_STOPS_"},null,8,["modelValue"]),t(d,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),max:20,min:10,"show-stops":!0,label:"_A_SLIDER_LABEL_SHOW_STOPS_"},null,8,["modelValue"])]),_:1},8,["code-html","code-js"])}const Ue=u(Ve,[["render",Oe]]);function Te(){return{codeHtml:`<div class="a_columns a_columns_count_12">
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
</div>`}}function Je(){return{codeJs:`import {
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
};`}}const Ce={name:"PageSliderVertical",components:{ASlider:I,AlohaExample:L},setup(){const e=r(0),o=r(0),m=r(0),{codeHtml:n}=Te(),{codeJs:_}=Je();return{codeHtml:n,codeJs:_,model1:e,model2:o,model3:m}}},xe={class:"a_columns a_columns_count_12"},Ne={class:"a_column a_column_3 a_column_6_tablet a_column_12_mobile"},Ge={class:"a_column a_column_3 a_column_6_tablet a_column_12_mobile"},je={class:"a_column a_column_3 a_column_6_tablet a_column_12_mobile"};function Me(e,o,m,n,_,c){const d=a("a-slider"),s=a("aloha-example");return A(),S(s,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SHOW_STOPS_HEADER_",description:"_A_UI_GROUP_SHOW_STOPS_DESCRIPTION_",props:["vertical","height"]},{default:E(()=>[i("div",xe,[i("div",Ne,[t(d,{modelValue:e.model1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.model1=l),max:20,vertical:!0,height:"200px",label:"_A_SLIDER_LABEL_NOT_SHOW_STOPS_"},null,8,["modelValue"]),i("div",null,"model1 "+p(e.model1),1)]),i("div",Ge,[t(d,{modelValue:e.model2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.model2=l),max:10,"show-stops":!0,vertical:!0,height:"200px",label:"_A_SLIDER_LABEL_SHOW_STOPS_"},null,8,["modelValue"]),i("div",null,"model2 "+p(e.model2),1)]),i("div",je,[t(d,{modelValue:e.model3,"onUpdate:modelValue":o[2]||(o[2]=l=>e.model3=l),extra:{min:10,max:40},max:40,min:10,range:!0,vertical:!0,height:"200px",label:"_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_"},null,8,["modelValue"]),i("div",null,"model3 "+p(e.model3),1)])])]),_:1},8,["code-html","code-js"])}const We=u(Ce,[["render",Me]]);function ke(){const e=f(()=>V({placeholder:"_A_SLIDER_COMPONENT_NAME_"}));return{pageTitle:f(()=>`ASlider${e.value?` (${e.value})`:""}`)}}const ye={name:"PageSlider",components:{AlohaPage:b,ATranslation:O,PageSliderBasic:N,PageSliderChange:k,PageSliderData:K,PageSliderErrors:le,PageSliderHelpText:ne,PageSliderLabelDescription:ce,PageSliderMinMax:fe,PageSliderRange:Be,PageSliderStops:Ue,PageSliderVertical:We},setup(){const{pageTitle:e}=ke();return{pageTitle:e}}};function we(e,o,m,n,_,c){const d=a("a-translation"),s=a("page-slider-basic"),l=a("page-slider-change"),v=a("page-slider-help-text"),g=a("page-slider-errors"),R=a("page-slider-label-description"),P=a("page-slider-range"),h=a("page-slider-min-max"),$=a("page-slider-data"),D=a("page-slider-stops"),B=a("page-slider-vertical"),H=a("aloha-page");return A(),S(H,{"page-title":e.pageTitle},{body:E(()=>[t(d,{tag:"p",html:"_A_SLIDER_COMPONENT_DESCRIPTION_"}),t(s),t(l),t(v),t(g),t(R),t(P),t(h),t($),t(D),t(B)]),_:1},8,["page-title"])}const so=u(ye,[["render",we]]);export{so as default};
