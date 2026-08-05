import{A as f,a as M}from"./chunk.AlohaExample.X7bJSYT1.js";import{A as K}from"./chunk.AlohaTableProps.CfopCuze.js";import{E as b,_ as A,g as G,A as j,b as w}from"./bundle.index.C9x2O_xd.js";import{r as h,Y as m,W as E,aU as p,f as s,_ as a,$ as d,aV as _,d as v,Z as R}from"./chunk.vendor.BEEJbev-.js";import"./chunk.vendor-lodash.CwOx-Q_g.js";import"./chunk.APageTabTitle.BE9J__Ca.js";import"./chunk.AlohaHighlightjs.De6fh8wy.js";import"./chunk.ATable.CrjOejbc.js";import"./chunk.translations-ar.C8fTj2r_.js";import"./chunk.translations-de.Br6VchLw.js";import"./chunk.translations-en.nC7vGy4-.js";import"./chunk.translations-es.D9gmKdOe.js";import"./chunk.translations-fr.CqO4ugU-.js";import"./chunk.translations-hr.BFWQeCYn.js";import"./chunk.translations-it.H2-CdKR-.js";import"./chunk.translations-ru.CVFiHLkc.js";function x(){return{codeHtml:`<a-select
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
};`}}const F={name:"PageSelectBasic",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=x(),{codeJs:l}=X(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},q={class:"a_columns a_columns_count_12"},Y={class:"a_column a_column_6 a_columns_count_12_touch"};function W(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:p(()=>[a("div",q,[a("div",Y,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const z=A(F,[["render",W]]);function Z(){return{codeHtml:`<a-select
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
  key-group="group"
  label="Grouped data extra (Array of Objects)"
  :search="true"
></a-select>
<div>model2: {{ model2 }}</div>`}}function Q(){return{codeJs:`import {
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
        group: "Recommended",
      },
      {
        label: "Extra 2",
        id: "extra_id_2",
        group: "Other",
      },
      {
        label: "Extra 3",
        id: "extra_id_3",
        group: "Other",
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
};`}}const ee={name:"PageSelectDataExtra",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Z(),{codeJs:l}=Q(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],c=[{label:"Extra 1",id:"extra_id_1",group:"Recommended"},{label:"Extra 2",id:"extra_id_2",group:"Other"},{label:"Extra 3",id:"extra_id_3",group:"Other"}],u=h(void 0),o=h(void 0);return{codeHtml:e,codeJs:l,data:n,dataExtraArrayOfArrays:r,dataExtraArrayOfObjects:c,model1:u,model2:o}}},le={class:"a_columns a_columns_count_12"},ae={class:"a_column a_column_6 a_columns_count_12_touch"};function oe(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_DATA_EXTRA_HEADER_",description:"_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_",props:["data-extra","key-group"]},{default:p(()=>[a("div",le,[a("div",ae,[d(o,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model1=t),data:e.data,"data-extra":e.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),a("div",null,"model1: "+_(e.model1),1),d(o,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model2=t),data:e.data,"data-extra":e.dataExtraArrayOfObjects,"key-id":"id","key-label":"label","key-group":"group",label:"Grouped data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),a("div",null,"model2: "+_(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const te=A(ee,[["render",oe]]);function de(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>`}}function se(){return{codeJs:`import {
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
};`}}const ne={name:"PageSelectErrorIcon",components:{AlohaExample:f,ASelect:b},setup(){const e=h(void 0),l='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"}],{codeHtml:r}=de(),{codeJs:c}=se();return{codeHtml:r,codeJs:c,data:n,errorIcon:l,model:e}}};function re(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERROR_ICON_HEADER_",description:"_A_UI_GROUP_ERROR_ICON_DESCRIPTION_",props:["errors","error-icon"]},{default:p(()=>[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"error-icon":e.errorIcon,errors:"Aloha","key-id":"id","key-label":"label",label:"Select",type:"select"},null,8,["modelValue","data","error-icon"])]),_:1},8,["code-html","code-js"])}const ce=A(ne,[["render",re]]);function ie(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function _e(){return{codeJs:`import {
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
};`}}const ue={name:"PageSelectExclusiveOption",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=ie(),{codeJs:l}=_e(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r="_A_SELECT_EXCLUSIVE_",c="aloha_exclusive",u=h(void 0);return{codeHtml:e,codeJs:l,data:n,exclusiveOptionLabel:r,exclusiveOptionValue:c,model:u}}},he={class:"a_columns a_columns_count_12"},me={class:"a_column a_column_6 a_columns_count_12_touch"};function pe(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_EXCLUSIVE_OPTION_HEADER_",description:"_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_",props:["exclusive-option-label","exclusive-option-value","is-exclusive-option-enabled"]},{default:p(()=>[a("div",he,[a("div",me,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),a("div",null,"model: "+_(e.model),1),d(o,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model=t),data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const be=A(ue,[["render",pe]]);function Ae(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Ee(){return{codeJs:`import {
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
};`}}const fe={name:"PageSelectGroup",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Ae(),{codeJs:l}=Ee(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},ye={class:"a_columns a_columns_count_12"},ge={class:"a_column a_column_6 a_columns_count_12_touch"};function Se(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:p(()=>[a("div",ye,[a("div",ge,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Re=A(fe,[["render",Se]]);function Te(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ve(){return{codeJs:`import {
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
};`}}const ke={name:"PageSelectKeyDisabled",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Te(),{codeJs:l}=ve(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},Pe={class:"a_columns a_columns_count_12"},Oe={class:"a_column a_column_6 a_columns_count_12_touch"};function Be(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[a("div",Pe,[a("div",Oe,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1),d(o,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model=t),data:e.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Ie=A(ke,[["render",Be]]);function Le(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-label-float="false"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Ce(){return{codeJs:`import {
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
};`}}const $e={name:"PageSelectLabelDescription",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Le(),{codeJs:l}=Ce(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},De={class:"a_columns a_columns_count_12"},Ve={class:"a_column a_column_6 a_columns_count_12_touch"};function Ne(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[a("div",De,[a("div",Ve,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"is-label-float":!1,"key-id":"id","key-label":"label",label:"Select","label-description":"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const He=A($e,[["render",Ne]]);function Ue(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function Je(){return{codeJs:`import {
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
};`}}const Me={name:"PageSelectLabelNotFound",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Ue(),{codeJs:l}=Je(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=h("aloha_9"),c=h(["aloha_8","aloha_9"]);return{codeHtml:e,codeJs:l,data:n,model1:r,model2:c}}},Ke={class:"a_columns a_columns_count_12"},Ge={class:"a_column a_column_6 a_columns_count_12_touch"};function je(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_",description:"_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_",props:"labelNotFound"},{default:p(()=>[a("div",Ke,[a("div",Ge,[d(o,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model1=t),data:e.data,"key-id":"id","key-label":"label",label:"Select","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"select"},null,8,["modelValue","data"]),a("div",null,"model1: "+_(e.model1),1),d(o,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model2=t),data:e.data,"show-not-found":!0,"key-id":"id","key-label":"label",label:"Multiselect","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model2: "+_(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const we=A(Me,[["render",je]]);function xe(){return{codeHtml:`<a-select
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
};`}}const Fe={name:"PageSelectModeOnePerGroup",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=xe(),{codeJs:l}=Xe(),n=[{label:"_TXT_POSITIVE_",id:"koeln_true",group:"Köln"},{label:"_TXT_NEGATIVE_",id:"koeln_false",group:"Köln"},{label:"_TXT_NEUTRAL_",id:"koeln_null",group:"Köln"},{label:"_TXT_POSITIVE_",id:"bonn_true",group:"Bonn"},{label:"_TXT_NEGATIVE_",id:"bonn_false",group:"Bonn"},{label:"_TXT_NEUTRAL_",id:"bonn_null",group:"Bonn"},{label:"_TXT_POSITIVE_",id:"duesseldorf_true",group:"Düsseldorf"},{label:"_TXT_NEGATIVE_",id:"duesseldorf_false",group:"Düsseldorf"},{label:"_TXT_NEUTRAL_",id:"duesseldorf_null",group:"Düsseldorf"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},qe={class:"a_columns a_columns_count_12"},Ye={class:"a_column a_column_6 a_columns_count_12_touch"};function We(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_",description:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_",props:"mode='one_per_group'"},{default:p(()=>[a("div",qe,[a("div",Ye,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"translate-data":!0,"key-group":"group","key-id":"id","key-label":"label",label:"Aloha",mode:"one_per_group",type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ze=A(Fe,[["render",We]]);function Ze(){return{codeHtml:`<a-select
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
></a-select>`}}function Qe(){return{codeJs:`import {
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
};`}}const el={name:"PageSelectReadonly",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Ze(),{codeJs:l}=Qe(),n=[{label:"Aloha -1",id:"aloha_-1"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=h("aloha_7"),c=h(["aloha_6","aloha_7"]),u=h(void 0);return{codeHtml:e,codeJs:l,data:n,model1:r,model2:c,model3:u}}};function ll(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[d(o,{"model-value":e.model1,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 1",type:"select"},null,8,["model-value","data"]),d(o,{class:"a_mt_3","model-value":e.model2,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 2",type:"multiselect"},null,8,["model-value","data"]),d(o,{class:"a_mt_3","model-value":e.model3,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 3",type:"select"},null,8,["model-value","data"]),d(o,{class:"a_mt_3","model-value":e.model3,data:e.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 4",type:"multiselect"},null,8,["model-value","data"]),d(o,{class:"a_mt_3","model-value":e.model3,data:e.data,readonly:!0,"help-text":"Aloha","key-id":"id","key-label":"label",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const al=A(el,[["render",ll]]);function ol(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function tl(){return{codeJs:`import {
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
*/`}}const dl={name:"PageSelectRetrieve",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=ol(),{codeJs:l}=tl(),n=h("aloha_10"),r=h(["aloha_2","aloha_10","aloha_11","aloha_998","aloha_999"]);return{codeHtml:e,codeJs:l,model1:n,model2:r,url:"/aloha/assets/mock/select-base.json",urlRetrieve:"/aloha/assets/mock/select-retrieve.json"}}},sl={class:"a_columns a_columns_count_12"},nl={class:"a_column a_column_6 a_columns_count_12_touch"},rl={class:"a_column a_column_6 a_columns_count_12_touch"};function cl(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,description:"_A_SELECT_GROUP_RETRIEVE_DESCRIPTION_",header:"_A_SELECT_GROUP_RETRIEVE_HEADER_"},{default:p(()=>[a("div",sl,[a("div",nl,[d(o,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model1=t),"show-not-found":!0,"key-id":"id","key-label":"label",label:"Select with retrieve","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"select",url:e.url,"url-retrieve":e.urlRetrieve},null,8,["modelValue","url","url-retrieve"]),a("div",null,"model1: "+_(e.model1),1)]),a("div",rl,[d(o,{modelValue:e.model2,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model2=t),"show-not-found":!0,"key-id":"id","key-label":"label",label:"Multiselect with retrieve","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"multiselect",url:e.url,"url-retrieve":e.urlRetrieve},null,8,["modelValue","url","url-retrieve"]),a("div",null,"model2: "+_(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const il=A(dl,[["render",cl]]);function _l(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ul(){return{codeJs:`import {
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
};`}}const hl={name:"PageSelectSearch",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=_l(),{codeJs:l}=ul(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},ml={class:"a_columns a_columns_count_12"},pl={class:"a_column a_column_6 a_columns_count_12_touch"};function bl(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[a("div",ml,[a("div",pl,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1),d(o,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model=t),data:e.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Al=A(hl,[["render",bl]]);function El(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function fl(){return{codeJs:`import {
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
};`}}const yl={name:"PageSelectSearchTextInHtml",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=El(),{codeJs:l}=fl(),n=[{label:"<span>Aloha</span> <strong>1</strong>",title:"Aloha 1",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",title:"Aloha 2",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",title:"Aloha 3",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",title:"Aloha 4",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",title:"Aloha 5",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",title:"Aloha 6",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",title:"Aloha 7",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",title:"Aloha 8",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",title:"Aloha 9",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],r=h(["aloha_7"]),c=h("aloha_7");return{codeHtml:e,codeJs:l,data:n,keyTitleCallback:({item:o})=>`--${o.title}--`,model1:r,model2:c}}},gl={class:"a_columns a_columns_count_12"},Sl={class:"a_column a_column_6 a_columns_count_12_touch"};function Rl(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html","key-title","key-title-callback"]},{default:p(()=>[a("div",gl,[a("div",Sl,[d(o,{modelValue:e.model1,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model1=t),data:e.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 1",type:"multiselect"},null,8,["modelValue","data"]),d(o,{class:"a_mt_3",modelValue:e.model1,"onUpdate:modelValue":l[1]||(l[1]=t=>e.model1=t),data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","key-title-callback"]),a("div",null,"model1: "+_(e.model1),1),d(o,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[2]||(l[2]=t=>e.model2=t),data:e.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 2",type:"select"},null,8,["modelValue","data"]),d(o,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":l[3]||(l[3]=t=>e.model2=t),data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"select"},null,8,["modelValue","data","key-title-callback"]),a("div",null,"model2: "+_(e.model2),1)])])]),_:1},8,["code-html","code-js"])}const Tl=A(yl,[["render",Rl]]);function vl(){return{codeHtml:`<a-select
  v-model="modelSelect"
  :data="data"
  key-id="id"
  key-label="label"
  label="Select"
  :search="true"
  :show-selected-first="true"
  type="select"
></a-select>

<a-select
  v-model="modelMultiselect"
  :data="data"
  key-id="id"
  key-label="label"
  label="Multiselect"
  :is-deselect-all="true"
  :is-select-all="true"
  :search="true"
  :show-selected-first="true"
  type="multiselect"
></a-select>

<a-select
  v-model="modelSelectGrouped"
  :data="data"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Select grouped"
  :search="true"
  :show-selected-first="true"
  type="select"
></a-select>

<a-select
  v-model="modelMultiselectGrouped"
  :data="data"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Multiselect grouped"
  :is-deselect-all="true"
  :is-select-all="true"
  :search="true"
  :show-selected-first="true"
  type="multiselect"
></a-select>`}}function kl(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ASelect,
  },
  setup() {
    const data = [
      { id: 1, label: "Apple", group: "Fruit" },
      { id: 2, label: "Banana", group: "Fruit" },
      { id: 3, label: "Cherry", group: "Fruit" },
      { id: 4, label: "Orange", group: "Fruit" },
      { id: 5, label: "Carrot", group: "Vegetables" },
      { id: 6, label: "Tomato", group: "Vegetables" },
      { id: 7, label: "Broccoli", group: "Vegetables" },
      { id: 8, label: "Cucumber", group: "Vegetables" },
      { id: 9, label: "Milk", group: "Dairy" },
      { id: 10, label: "Cheese", group: "Dairy" },
      { id: 11, label: "Yogurt", group: "Dairy" },
      { id: 12, label: "Butter", group: "Dairy" },
      { id: 13, label: "Bread", group: "Bakery" },
      { id: 14, label: "Croissant", group: "Bakery" },
      { id: 15, label: "Baguette", group: "Bakery" },
      { id: 16, label: "Pretzel", group: "Bakery" },
    ];
    const modelSelect = ref(2);
    const modelMultiselect = ref([2, 6, 10, 14]);
    const modelSelectGrouped = ref(7);
    const modelMultiselectGrouped = ref([1, 5, 9, 13]);

    return {
      data,
      modelMultiselect,
      modelMultiselectGrouped,
      modelSelect,
      modelSelectGrouped,
    };
  },
};`}}const Pl={name:"PageSelectShowSelectedFirst",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=vl(),{codeJs:l}=kl(),n=[{id:1,label:"Apple",group:"Fruit"},{id:2,label:"Banana",group:"Fruit"},{id:3,label:"Cherry",group:"Fruit"},{id:4,label:"Orange",group:"Fruit"},{id:5,label:"Carrot",group:"Vegetables"},{id:6,label:"Tomato",group:"Vegetables"},{id:7,label:"Broccoli",group:"Vegetables"},{id:8,label:"Cucumber",group:"Vegetables"},{id:9,label:"Milk",group:"Dairy"},{id:10,label:"Cheese",group:"Dairy"},{id:11,label:"Yogurt",group:"Dairy"},{id:12,label:"Butter",group:"Dairy"},{id:13,label:"Bread",group:"Bakery"},{id:14,label:"Croissant",group:"Bakery"},{id:15,label:"Baguette",group:"Bakery"},{id:16,label:"Pretzel",group:"Bakery"}],r=h(2),c=h([2,6,10,14]),u=h(7),o=h([1,5,9,13]);return{codeHtml:e,codeJs:l,data:n,modelMultiselect:c,modelMultiselectGrouped:o,modelSelect:r,modelSelectGrouped:u}}},Ol={class:"a_columns a_columns_count_12"},Bl={class:"a_column a_column_6 a_columns_count_12_touch"},Il={class:"a_column a_column_6 a_columns_count_12_touch"},Ll={class:"a_column a_column_6 a_columns_count_12_touch"},Cl={class:"a_column a_column_6 a_columns_count_12_touch"};function $l(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_SHOW_SELECTED_FIRST_HEADER_",description:"_A_SELECT_GROUP_SHOW_SELECTED_FIRST_DESCRIPTION_",props:"show-selected-first"},{default:p(()=>[a("div",Ol,[a("div",Bl,[d(o,{modelValue:e.modelSelect,"onUpdate:modelValue":l[0]||(l[0]=t=>e.modelSelect=t),data:e.data,"key-id":"id","key-label":"label",label:"Select",search:!0,"show-selected-first":!0,type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.modelSelect),1)]),a("div",Il,[d(o,{modelValue:e.modelMultiselect,"onUpdate:modelValue":l[1]||(l[1]=t=>e.modelMultiselect=t),data:e.data,"key-id":"id","key-label":"label",label:"Multiselect","is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.modelMultiselect),1)]),a("div",Ll,[d(o,{modelValue:e.modelSelectGrouped,"onUpdate:modelValue":l[2]||(l[2]=t=>e.modelSelectGrouped=t),data:e.data,"key-group":"group","key-id":"id","key-label":"label",label:"Select grouped",search:!0,"show-selected-first":!0,type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.modelSelectGrouped),1)]),a("div",Cl,[d(o,{modelValue:e.modelMultiselectGrouped,"onUpdate:modelValue":l[3]||(l[3]=t=>e.modelMultiselectGrouped=t),data:e.data,"key-group":"group","key-id":"id","key-label":"label",label:"Multiselect grouped","is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.modelMultiselectGrouped),1)])])]),_:1},8,["code-html","code-js"])}const Dl=A(Pl,[["render",$l]]);function Vl(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Nl(){return{codeJs:`import {
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
};`}}const Hl={name:"PageSelectTranslateData",components:{AlohaExample:f,ASelect:b},setup(){const{codeHtml:e}=Vl(),{codeJs:l}=Nl(),n=[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],r=h(void 0);return{codeHtml:e,codeJs:l,data:n,model:r}}},Ul={class:"a_columns a_columns_count_12"},Jl={class:"a_column a_column_6 a_columns_count_12_touch"};function Ml(e,l,n,r,c,u){const o=s("a-select"),i=s("aloha-example");return m(),E(i,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[a("div",Ul,[a("div",Jl,[d(o,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=t=>e.model=t),data:e.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])])]),_:1},8,["code-html","code-js"])}const Kl=A(Hl,[["render",Ml]]);function Gl(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function jl(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function wl(){const e=v(()=>G({placeholder:"_A_SELECT_COMPONENT_NAME_"}));return{pageTitle:v(()=>`ASelect${e.value?` (${e.value})`:""}`)}}function xl(){return{dataProps:[{name:"show-selected-first",description:"_A_SELECT_PROPS_SHOW_SELECTED_FIRST_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"error-icon",description:"_A_UI_PROPS_ERROR_ICON_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1},{name:"url-retrieve",description:"_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-retrieve-params",description:"_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Xl(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const Fl={name:"PageSelect",components:{AIcon:w,AlohaPage:M,AlohaTableProps:K,ASelect:b,ATranslation:j,PageSelectBasic:z,PageSelectDataExtra:te,PageSelectErrorIcon:ce,PageSelectExclusiveOption:be,PageSelectGroup:Re,PageSelectKeyDisabled:Ie,PageSelectLabelDescription:He,PageSelectLabelNotFound:we,PageSelectModeOnePerGroup:ze,PageSelectReadonly:al,PageSelectRetrieve:il,PageSelectSearch:Al,PageSelectSearchTextInHtml:Tl,PageSelectShowSelectedFirst:Dl,PageSelectTranslateData:Kl},setup(){const{pageTitle:e}=wl(),{dataProps:l}=xl(),{dataSlots:n}=Xl(),{dataEvents:r}=Gl(),{dataExposes:c}=jl();return{dataEvents:r,dataExposes:c,dataProps:l,dataSlots:n,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}},ql={class:"a_columns a_columns_count_12"},Yl={class:"a_column a_column_6"},Wl=["innerHTML"],zl=["innerHTML"],Zl=["innerHTML"],Ql=["innerHTML"];function ea(e,l,n,r,c,u){const o=s("a-translation"),i=s("page-select-basic"),t=s("page-select-label-description"),k=s("page-select-error-icon"),P=s("page-select-group"),O=s("page-select-search"),B=s("page-select-search-text-in-html"),I=s("page-select-show-selected-first"),L=s("page-select-key-disabled"),C=s("page-select-translate-data"),$=s("page-select-data-extra"),D=s("page-select-exclusive-option"),V=s("page-select-readonly"),N=s("page-select-mode-one-per-group"),H=s("page-select-label-not-found"),U=s("page-select-retrieve"),S=s("a-select"),T=s("a-icon"),J=s("aloha-page");return m(),E(J,{"page-title":e.pageTitle},{body:p(()=>[d(o,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),d(i),d(t),d(k),d(P),d(O),d(B),d(I),d(L),d(C),d($),d(D),d(V),d(N),d(H),d(U),a("div",null,[a("div",ql,[a("div",Yl,[d(S,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=y=>e.model=y),data:e.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),a("div",null,"model: "+_(e.model),1)])]),d(S,{modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=y=>e.model=y),data:e.data,"key-id":"id","key-label-callback":e.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),l[4]||(l[4]=a("br",null,null,-1)),d(S,{modelValue:e.modelArr,"onUpdate:modelValue":l[2]||(l[2]=y=>e.modelArr=y),data:e.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect","is-label-float":!1,placeholder:"placeholder",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:p(({label:y,labelFiltered:g})=>[d(T,{class:"a_mr_1",icon:"Cog"}),g?(m(),R("span",{key:0,innerHTML:g},null,8,Wl)):(m(),R("span",{key:1,innerHTML:y},null,8,zl))]),_:1},8,["modelValue","data"]),a("div",null,"modelArr: "+_(e.modelArr),1),l[5]||(l[5]=a("br",null,null,-1)),d(S,{modelValue:e.modelArr2,"onUpdate:modelValue":l[3]||(l[3]=y=>e.modelArr2=y),data:e.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:p(({label:y,labelFiltered:g})=>[d(T,{class:"a_mr_1",icon:"Cog"}),g?(m(),R("span",{key:0,innerHTML:g},null,8,Zl)):(m(),R("span",{key:1,innerHTML:y},null,8,Ql))]),_:1},8,["modelValue","data"]),a("div",null,"modelArr2: "+_(e.modelArr2),1)])]),_:1},8,["page-title"])}const Aa=A(Fl,[["render",ea]]);export{Aa as default};
