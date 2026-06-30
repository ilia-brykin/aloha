import{A as f,a as J}from"./chunk.AlohaExample.CV23krCV.js";import{A as K}from"./chunk.AlohaTableProps.TuD-qG7J.js";import{D as A,_ as b,g as M,A as j,b as x}from"./bundle.index.yYjszMW-.js";import{r as u,Y as m,W as E,aU as p,f as d,_ as a,$ as o,aV as h,d as v,Z as T}from"./chunk.vendor.BAXy2grE.js";import"./chunk.vendor-lodash.CCzoES9g.js";import"./chunk.APageTabTitle.B4HdDTif.js";import"./chunk.AlohaHighlightjs.BK8yZFUI.js";import"./chunk.ATable.CwAda-NJ.js";import"./chunk.translations-ar.CE_3yjUF.js";import"./chunk.translations-de.R0YWY91X.js";import"./chunk.translations-en.DQ0Z316F.js";import"./chunk.translations-es.XN0jVhL-.js";import"./chunk.translations-fr.D5Z6d0-l.js";import"./chunk.translations-hr.BRYjTgZh.js";import"./chunk.translations-it.D6SsMt4V.js";import"./chunk.translations-ru.BfK09XlZ.js";function G(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectBasic",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const w={name:"PageSelectBasic",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=G(),{codeJs:l}=X(),s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},q={class:"a_columns a_columns_count_12"},F={class:"a_column a_column_6 a_columns_count_12_touch"};function Y(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:p(()=>[a("div",q,[a("div",F,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const W=b(w,[["render",Y]]);function Z(){return{codeHtml:`<a-select
  v-model="model1"
  :data="data"
  :data-extra="dataExtraArrayOfArrays"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
  :search="true"
></a-select>
<div>model1: {{ model1 }}</div>
<a-select
  v-model="model2"
  class="a_mt_3"
  :data="data"
  :data-extra="dataExtraArrayOfObjects"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Objects)"
  :search="true"
></a-select>
<div>model2: {{ model2 }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectDataExtra",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const dataExtraArrayOfArrays = [
      ["extra_id_1", "Extra 1"],
      ["extra_id_2", "Extra 2"],
    ];
    const dataExtraArrayOfObjects = [
      {
        label: "Extra 1",
        id: "extra_id_1",
      },
      {
        label: "Extra 2",
        id: "extra_id_2",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      data,
      dataExtraArrayOfArrays,
      dataExtraArrayOfObjects,
      model1,
      model2,
    };
  },
};`}}const Q={name:"PageSelectDataExtra",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=Z(),{codeJs:l}=z(),s=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],_=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],i=u(void 0),t=u(void 0);return{codeHtml:e,codeJs:l,data:s,dataExtraArrayOfArrays:r,dataExtraArrayOfObjects:_,model1:i,model2:t}}},ee={class:"a_columns a_columns_count_12"},le={class:"a_column a_column_6 a_columns_count_12_touch"};function ae(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_DATA_EXTRA_HEADER_",description:"_A_SELECT_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:p(()=>[a("div",ee,[a("div",le,[o(t,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model1=n),data:e.data,"data-extra":e.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),a("div",null,"model1: "+h(e.model1),1),o(t,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model2=n),data:e.data,"data-extra":e.dataExtraArrayOfObjects,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),a("div",null,"model2: "+h(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const oe=b(Q,[["render",ae]]);function te(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectErrorIcon",
  components: {
    ASelect,
  },
  setup() {
    const model = ref(undefined);
    const errorIcon = "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\" fill=\\"currentColor\\" viewBox=\\"0 0 16 16\\"><path d=\\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\\"/></svg>";
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
    ];

    return {
      data,
      errorIcon,
      model,
    };
  },
};`}}const ne={name:"PageSelectErrorIcon",components:{AlohaExample:f,ASelect:A},setup(){const e=u(void 0),l='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"}],{codeHtml:r}=te(),{codeJs:_}=de();return{codeHtml:r,codeJs:_,data:s,errorIcon:l,model:e}}};function se(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:p(()=>[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"error-icon":e.errorIcon,errors:"Aloha","key-id":"id","key-label":"label",label:"Select",type:"select"},null,8,["modelValue","data","error-icon"])]),_:1},8,["code-html","code-js"])}const re=b(ne,[["render",se]]);function _e(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  :is-exclusive-option-enabled="true"
  key-id="id"
  key-label="label"
  label="Aloha 1"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  :is-deselect-all="true"
  :is-exclusive-option-enabled="true"
  :is-select-all="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 2"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>`}}function ce(){return{codeJs:`import {
  ref,
} from "vue";
import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectExclusiveOption",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const exclusiveOptionLabel = '_A_SELECT_EXCLUSIVE_';    
    const exclusiveOptionValue = 'aloha_exclusive';
    const model = ref(undefined);

    return {
      codeHtml,
      codeJs,
      data,
      exclusiveOptionLabel,
      exclusiveOptionValue,
      model,
    };
  },
};`}}const ie={name:"PageSelectExclusiveOption",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=_e(),{codeJs:l}=ce(),s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r="_A_SELECT_EXCLUSIVE_",_="aloha_exclusive",i=u(void 0);return{codeHtml:e,codeJs:l,data:s,exclusiveOptionLabel:r,exclusiveOptionValue:_,model:i}}},he={class:"a_columns a_columns_count_12"},ue={class:"a_column a_column_6 a_columns_count_12_touch"};function me(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_EXCLUSIVE_OPTION_HEADER_",description:"_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_",props:["exclusive-option-label","exclusive-option-value","is-exclusive-option-enabled"]},{default:p(()=>[a("div",he,[a("div",ue,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),a("div",null,"model: "+h(e.model),1),o(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model=n),data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const pe=b(ie,[["render",me]]);function Ae(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function be(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectGroup",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const Ee={name:"PageSelectGroup",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=Ae(),{codeJs:l}=be(),s=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},fe={class:"a_columns a_columns_count_12"},Se={class:"a_column a_column_6 a_columns_count_12_touch"};function Re(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:p(()=>[a("div",fe,[a("div",Se,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ye=b(Ee,[["render",Re]]);function Te(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  key-disabled="disabled"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  class="a_mt_3"
  :data="data"
  key-id="id"
  key-label="label"
  key-disabled="disabled"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>`}}function ge(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectKeyDisabled",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
        disabled: true,
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
        disabled: true,
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const ve={name:"PageSelectKeyDisabled",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=Te(),{codeJs:l}=ge(),s=[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},Pe={class:"a_columns a_columns_count_12"},ke={class:"a_column a_column_6 a_columns_count_12_touch"};function Oe(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[a("div",Pe,[a("div",ke,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1),o(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model=n),data:e.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Ie=b(ve,[["render",Oe]]);function Be(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-label-float="false"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Le(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectLabelDescription",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const $e={name:"PageSelectLabelDescription",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=Be(),{codeJs:l}=Le(),s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},Ce={class:"a_columns a_columns_count_12"},De={class:"a_column a_column_6 a_columns_count_12_touch"};function Ne(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[a("div",Ce,[a("div",De,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"is-label-float":!1,"key-id":"id","key-label":"label",label:"Select","label-description":"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Ve=b($e,[["render",Ne]]);function He(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>`}}function Ue(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectLabelNotFound",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const Je={name:"PageSelectLabelNotFound",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=He(),{codeJs:l}=Ue(),s=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=u("aloha_9"),_=u(["aloha_8","aloha_9"]);return{codeHtml:e,codeJs:l,data:s,model1:r,model2:_}}},Ke={class:"a_columns a_columns_count_12"},Me={class:"a_column a_column_6 a_columns_count_12_touch"};function je(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_",description:"_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_",props:"labelNotFound"},{default:p(()=>[a("div",Ke,[a("div",Me,[o(t,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model1=n),data:e.data,"key-id":"id","key-label":"label",label:"Select","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"select"},null,8,["modelValue","data"]),a("div",null,"model1: "+h(e.model1),1),o(t,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model2=n),data:e.data,"show-not-found":!0,"key-id":"id","key-label":"label",label:"Multiselect","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model2: "+h(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const xe=b(Je,[["render",je]]);function Ge(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :translate-data="true"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Aloha"
  mode="one_per_group"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>`}}function Xe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectModeOnePerGroup",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "_TXT_POSITIVE_",
        id: "koeln_true",
        group: "Köln",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "koeln_false",
        group: "Köln",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "koeln_null",
        group: "Köln",
      },
      {
        label: "_TXT_POSITIVE_",
        id: "bonn_true",
        group: "Bonn",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "bonn_false",
        group: "Bonn",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "bonn_null",
        group: "Bonn",
      },
      {
        label: "_TXT_POSITIVE_",
        id: "duesseldorf_true",
        group: "Düsseldorf",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "duesseldorf_false",
        group: "Düsseldorf",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "duesseldorf_null",
        group: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const we={name:"PageSelectModeOnePerGroup",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=Ge(),{codeJs:l}=Xe(),s=[{label:"_TXT_POSITIVE_",id:"koeln_true",group:"Köln"},{label:"_TXT_NEGATIVE_",id:"koeln_false",group:"Köln"},{label:"_TXT_NEUTRAL_",id:"koeln_null",group:"Köln"},{label:"_TXT_POSITIVE_",id:"bonn_true",group:"Bonn"},{label:"_TXT_NEGATIVE_",id:"bonn_false",group:"Bonn"},{label:"_TXT_NEUTRAL_",id:"bonn_null",group:"Bonn"},{label:"_TXT_POSITIVE_",id:"duesseldorf_true",group:"Düsseldorf"},{label:"_TXT_NEGATIVE_",id:"duesseldorf_false",group:"Düsseldorf"},{label:"_TXT_NEUTRAL_",id:"duesseldorf_null",group:"Düsseldorf"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},qe={class:"a_columns a_columns_count_12"},Fe={class:"a_column a_column_6 a_columns_count_12_touch"};function Ye(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_",description:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_",props:"mode='one_per_group'"},{default:p(()=>[a("div",qe,[a("div",Fe,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"translate-data":!0,"key-group":"group","key-id":"id","key-label":"label",label:"Aloha",mode:"one_per_group",type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const We=b(we,[["render",Ye]]);function Ze(){return{codeHtml:`<a-select
  :model-value="model1"
  :data="data"
  :readonly="true"
  key-id="id"
  key-label="label"
  label="Select 1"
  type="select"
></a-select>
<a-select
  :model-value="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 2"
  type="multiselect"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 3"
  type="select"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 4"
  type="multiselect"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  key-id="id"
  key-label="label"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select>`}}function ze(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectReadonly",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
    ];
    const model1 = ref("aloha_7");
    const model2 = ref(["aloha_6", "aloha_7"]);
    const model3 = ref(undefined);

    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};`}}const Qe={name:"PageSelectReadonly",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=Ze(),{codeJs:l}=ze(),s=[{label:"Aloha -1",id:"aloha_-1"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=u("aloha_7"),_=u(["aloha_6","aloha_7"]),i=u(void 0);return{codeHtml:e,codeJs:l,data:s,model1:r,model2:_,model3:i}}};function el(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[o(t,{"model-value":e.model1,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 1",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":e.model2,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 2",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":e.model3,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 3",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":e.model3,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 4",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":e.model3,data:e.data,readonly:!0,"help-text":"Aloha","key-id":"id","key-label":"label",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const ll=b(Qe,[["render",el]]);function al(){return{codeHtml:`<a-select
  v-model="model1"
  :show-not-found="true"
  key-id="id"
  key-label="label"
  label="Select with retrieve"
  label-not-found="_A_SELECT_LABEL_NOT_FOUND_"
  type="select"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>

<a-select
  v-model="model2"
  :show-not-found="true"
  key-id="id"
  key-label="label"
  label="Multiselect with retrieve"
  label-not-found="_A_SELECT_LABEL_NOT_FOUND_"
  type="multiselect"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model2: {{ model2 }}</div>`}}function ol(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectRetrieve",
  components: {
    ASelect,
  },
  setup() {
    const model1 = ref("aloha_10");
    const model2 = ref(["aloha_2", "aloha_10", "aloha_11", "aloha_998", "aloha_999"]);
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;
    const urlRetrieve = \`\${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json\`;

    return {
      model1,
      model2,
      url,
      urlRetrieve,
    };
  },
};

/*
app.use(ADataRetrievePlugin, {
  callbacks: {
    retrieve: async ({ modelArray = [], url = "" }) => {
      const response = await fetch(url);
      const data = await response.json();

      return data.filter(item => modelArray.includes(item.id));
    },
  },
});
*/`}}const tl={name:"PageSelectRetrieve",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=al(),{codeJs:l}=ol(),s=u("aloha_10"),r=u(["aloha_2","aloha_10","aloha_11","aloha_998","aloha_999"]);return{codeHtml:e,codeJs:l,model1:s,model2:r,url:"/aloha/assets/mock/select-base.json",urlRetrieve:"/aloha/assets/mock/select-retrieve.json"}}},dl={class:"a_columns a_columns_count_12"},nl={class:"a_column a_column_6 a_columns_count_12_touch"},sl={class:"a_column a_column_6 a_columns_count_12_touch"};function rl(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,description:"_A_SELECT_GROUP_RETRIEVE_DESCRIPTION_",header:"_A_SELECT_GROUP_RETRIEVE_HEADER_"},{default:p(()=>[a("div",dl,[a("div",nl,[o(t,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model1=n),"show-not-found":!0,"key-id":"id","key-label":"label",label:"Select with retrieve","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"select",url:e.url,"url-retrieve":e.urlRetrieve},null,8,["modelValue","url","url-retrieve"]),a("div",null,"model1: "+h(e.model1),1)]),a("div",sl,[o(t,{modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model2=n),"show-not-found":!0,"key-id":"id","key-label":"label",label:"Multiselect with retrieve","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"multiselect",url:e.url,"url-retrieve":e.urlRetrieve},null,8,["modelValue","url","url-retrieve"]),a("div",null,"model2: "+h(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const _l=b(tl,[["render",rl]]);function cl(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>`}}function il(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectSearch",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
        aloha: "",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "Köln",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 6",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
      {
        label: "Aloha 8",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const hl={name:"PageSelectSearch",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=cl(),{codeJs:l}=il(),s=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},ul={class:"a_columns a_columns_count_12"},ml={class:"a_column a_column_6 a_columns_count_12_touch"};function pl(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[a("div",ul,[a("div",ml,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1),o(t,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model=n),data:e.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Al=b(hl,[["render",pl]]);function bl(){return{codeHtml:`<a-select
  v-model="model1"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  key-title="title"
  label="Aloha group 1"
  type="multiselect"
></a-select>
<a-select
  v-model="model1"
  :data="data"
  :key-title-callback="keyTitleCallback"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 1"
  type="multiselect"
></a-select>
<div>model1: {{ model1 }}</div>
<a-select
  v-model="model2"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  key-title="title"
  label="Aloha group 2"
  type="select"
></a-select>
<a-select
  v-model="model2"
  :data="data"
  :key-title-callback="keyTitleCallback"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 2"
  type="select"
></a-select>
<div>model2: {{ model2 }}</div>`}}function El(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectSearchTextInHtml",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "<span>Aloha</span> <strong>1</strong>",
        title: "Aloha 1",
        id: "aloha_0",
        aloha: "",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>2</strong>",
        title: "Aloha 2",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>3</strong>",
        title: "Aloha 3",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>4</strong>",
        title: "Aloha 4",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>5</strong>",
        title: "Aloha 5",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>6</strong>",
        title: "Aloha 6",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>7</strong>",
        title: "Aloha 7",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>8</strong>",
        title: "Aloha 8",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>9</strong>",
        title: "Aloha 9",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
    ];
    const model1 = ref(["aloha_7"]);
    const model2 = ref("aloha_7");

    const keyTitleCallback = ({ item }) => {
      return \`--\${ item.title }--\`;
    };

    return {
      data,
      keyTitleCallback,
      model1,
      model2,
    };
  },
};`}}const fl={name:"PageSelectSearchTextInHtml",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=bl(),{codeJs:l}=El(),s=[{label:"<span>Aloha</span> <strong>1</strong>",title:"Aloha 1",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",title:"Aloha 2",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",title:"Aloha 3",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",title:"Aloha 4",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",title:"Aloha 5",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",title:"Aloha 6",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",title:"Aloha 7",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",title:"Aloha 8",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",title:"Aloha 9",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],r=u(["aloha_7"]),_=u("aloha_7");return{codeHtml:e,codeJs:l,data:s,keyTitleCallback:({item:t})=>`--${t.title}--`,model1:r,model2:_}}},Sl={class:"a_columns a_columns_count_12"},Rl={class:"a_column a_column_6 a_columns_count_12_touch"};function yl(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html","key-title","key-title-callback"]},{default:p(()=>[a("div",Sl,[a("div",Rl,[o(t,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model1=n),data:e.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 1",type:"multiselect"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:e.model1,"onUpdate:modelValue":l[1]||(l[1]=n=>e.model1=n),data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","key-title-callback"]),a("div",null,"model1: "+h(e.model1),1),o(t,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[2]||(l[2]=n=>e.model2=n),data:e.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 2",type:"select"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[3]||(l[3]=n=>e.model2=n),data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"select"},null,8,["modelValue","data","key-title-callback"]),a("div",null,"model2: "+h(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const Tl=b(fl,[["render",yl]]);function gl(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function vl(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectTranslateData",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "_A_SELECT_ELEMENT_0_",
        id: "aloha_0",
      },
      {
        label: "_A_SELECT_ELEMENT_1_",
        id: "aloha_1",
      },
      {
        label: "_A_SELECT_ELEMENT_2_",
        id: "aloha_2",
      },
      {
        label: "_A_SELECT_ELEMENT_3_",
        id: "aloha_3",
      },
      {
        label: "_A_SELECT_ELEMENT_4_",
        id: "aloha_4",
      },
      {
        label: "_A_SELECT_ELEMENT_5_",
        id: "aloha_5",
      },
      {
        label: "_A_SELECT_ELEMENT_6_",
        id: "aloha_6",
      },
      {
        label: "_A_SELECT_ELEMENT_7_",
        id: "aloha_7",
      },
      {
        label: "_A_SELECT_ELEMENT_8_",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const Pl={name:"PageSelectTranslateData",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:e}=gl(),{codeJs:l}=vl(),s=[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],r=u(void 0);return{codeHtml:e,codeJs:l,data:s,model:r}}},kl={class:"a_columns a_columns_count_12"},Ol={class:"a_column a_column_6 a_columns_count_12_touch"};function Il(e,l,s,r,_,i){const t=d("a-select"),c=d("aloha-example");return m(),E(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[a("div",kl,[a("div",Ol,[o(t,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=n=>e.model=n),data:e.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Bl=b(Pl,[["render",Il]]);function Ll(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function $l(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Cl(){const e=v(()=>M({placeholder:"_A_SELECT_COMPONENT_NAME_"}));return{pageTitle:v(()=>`ASelect${e.value?` (${e.value})`:""}`)}}function Dl(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"error-icon",description:"_A_UI_PROPS_ERROR_ICON_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1},{name:"url-retrieve",description:"_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-retrieve-params",description:"_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Nl(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const Vl={name:"PageSelect",components:{AIcon:x,AlohaPage:J,AlohaTableProps:K,ASelect:A,ATranslation:j,PageSelectBasic:W,PageSelectDataExtra:oe,PageSelectErrorIcon:re,PageSelectExclusiveOption:pe,PageSelectGroup:ye,PageSelectKeyDisabled:Ie,PageSelectLabelDescription:Ve,PageSelectLabelNotFound:xe,PageSelectModeOnePerGroup:We,PageSelectReadonly:ll,PageSelectRetrieve:_l,PageSelectSearch:Al,PageSelectSearchTextInHtml:Tl,PageSelectTranslateData:Bl},setup(){const{pageTitle:e}=Cl(),{dataProps:l}=Dl(),{dataSlots:s}=Nl(),{dataEvents:r}=Ll(),{dataExposes:_}=$l();return{dataEvents:r,dataExposes:_,dataProps:l,dataSlots:s,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}},Hl={class:"a_columns a_columns_count_12"},Ul={class:"a_column a_column_6"},Jl=["innerHTML"],Kl=["innerHTML"],Ml=["innerHTML"],jl=["innerHTML"];function xl(e,l,s,r,_,i){const t=d("a-translation"),c=d("page-select-basic"),n=d("page-select-label-description"),P=d("page-select-error-icon"),k=d("page-select-group"),O=d("page-select-search"),I=d("page-select-search-text-in-html"),B=d("page-select-key-disabled"),L=d("page-select-translate-data"),$=d("page-select-data-extra"),C=d("page-select-exclusive-option"),D=d("page-select-readonly"),N=d("page-select-mode-one-per-group"),V=d("page-select-label-not-found"),H=d("page-select-retrieve"),y=d("a-select"),g=d("a-icon"),U=d("aloha-page");return m(),E(U,{"page-title":e.pageTitle},{body:p(()=>[o(t,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),o(c),o(n),o(P),o(k),o(O),o(I),o(B),o(L),o($),o(C),o(D),o(N),o(V),o(H),a("div",null,[a("div",Hl,[a("div",Ul,[o(y,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=S=>e.model=S),data:e.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),a("div",null,"model: "+h(e.model),1)])]),o(y,{modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=S=>e.model=S),data:e.data,"key-id":"id","key-label-callback":e.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),l[4]||(l[4]=a("br",null,null,-1)),o(y,{modelValue:e.modelArr,"onUpdate:modelValue":l[2]||(l[2]=S=>e.modelArr=S),data:e.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect","is-label-float":!1,placeholder:"placeholder",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:p(({label:S,labelFiltered:R})=>[o(g,{class:"a_mr_1",icon:"Cog"}),R?(m(),T("span",{key:0,innerHTML:R},null,8,Jl)):(m(),T("span",{key:1,innerHTML:S},null,8,Kl))]),_:1},8,["modelValue","data"]),a("div",null,"modelArr: "+h(e.modelArr),1),l[5]||(l[5]=a("br",null,null,-1)),o(y,{modelValue:e.modelArr2,"onUpdate:modelValue":l[3]||(l[3]=S=>e.modelArr2=S),data:e.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:p(({label:S,labelFiltered:R})=>[o(g,{class:"a_mr_1",icon:"Cog"}),R?(m(),T("span",{key:0,innerHTML:R},null,8,Ml)):(m(),T("span",{key:1,innerHTML:S},null,8,jl))]),_:1},8,["modelValue","data"]),a("div",null,"modelArr2: "+h(e.modelArr2),1)])]),_:1},8,["page-title"])}const na=b(Vl,[["render",xl]]);export{na as default};
