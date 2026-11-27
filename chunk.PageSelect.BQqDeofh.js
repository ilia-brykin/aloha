import{t as e}from"./chunk.AlohaPage.D8jsTY5m.js";import{t}from"./chunk.AlohaTableProps.CEJuqblo.js";import{Gt as n,Ht as r,Jt as i,Ut as a,Vt as o,_n as s,cn as c,mn as l,on as u,un as d,wn as f,zt as p}from"./chunk.vendor.Bjd2408Z.js";import{t as m}from"./chunk.AlohaExample.B-5omd3W.js";import{V as h,at as g,gn as _,hn as v,mn as y,t as b}from"./bundle.index.Cwpafk10.js";function x(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageSelectBasic`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:s(void 0)}}},w={class:`a_columns a_columns_count_12`},T={class:`a_column a_column_6 a_columns_count_12_touch`};function E(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`data`,`key-id`,`key-label`,`label`,`type`]},{default:l(()=>[r(`div`,w,[r(`div`,T,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var D=b(C,[[`render`,E]]);function O(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function k(){return{codeJs:`import {
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
};`}}var A={name:`PageSelectDataExtra`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],dataExtraArrayOfArrays:[[`extra_id_1`,`Extra 1`],[`extra_id_2`,`Extra 2`]],dataExtraArrayOfObjects:[{label:`Extra 1`,id:`extra_id_1`,group:`Recommended`},{label:`Extra 2`,id:`extra_id_2`,group:`Other`},{label:`Extra 3`,id:`extra_id_3`,group:`Other`}],model1:s(void 0),model2:s(void 0)}}},j={class:`a_columns a_columns_count_12`},M={class:`a_column a_column_6 a_columns_count_12_touch`};function N(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_DATA_EXTRA_HEADER_`,description:`_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:l(()=>[r(`div`,j,[r(`div`,M,[i(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"data-extra":e.dataExtraArrayOfArrays,"key-id":`id`,"key-label":`label`,label:`Data extra (Array of Arrays)`,search:!0},null,8,[`modelValue`,`data`,`data-extra`]),r(`div`,null,`model1: `+f(e.model1),1),i(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"data-extra":e.dataExtraArrayOfObjects,"key-id":`id`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra (Array of Objects)`,search:!0},null,8,[`modelValue`,`data`,`data-extra`]),r(`div`,null,`model2: `+f(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var P=b(A,[[`render`,N]]);function F(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>`}}function I(){return{codeJs:`import {
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
};`}}var ee={name:`PageSelectErrorIcon`,components:{AlohaExample:m,ASelect:h},setup(){let e=s(void 0),t=[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`}],{codeHtml:n}=F(),{codeJs:r}=I();return{codeHtml:n,codeJs:r,data:t,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function te(e,t,n,r,o,s){let c=d(`a-select`),f=d(`aloha-example`);return u(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:l(()=>[i(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"error-icon":e.errorIcon,errors:`Aloha`,"key-id":`id`,"key-label":`label`,label:`Select`,type:`select`},null,8,[`modelValue`,`data`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var L=b(ee,[[`render`,te]]);function R(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
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
};`}}var B={name:`PageSelectExclusiveOption`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],exclusiveOptionLabel:`_A_SELECT_EXCLUSIVE_`,exclusiveOptionValue:`aloha_exclusive`,model:s(void 0)}}},V={class:`a_columns a_columns_count_12`},H={class:`a_column a_column_6 a_columns_count_12_touch`};function U(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_EXCLUSIVE_OPTION_HEADER_`,description:`_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_`,props:[`exclusive-option-label`,`exclusive-option-value`,`is-exclusive-option-enabled`]},{default:l(()=>[r(`div`,V,[r(`div`,H,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":`id`,"key-label":`label`,label:`Aloha 1`,type:`multiselect`},null,8,[`modelValue`,`data`,`exclusive-option-label`,`exclusive-option-value`]),r(`div`,null,`model: `+f(e.model),1),i(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 2`,type:`multiselect`},null,8,[`modelValue`,`data`,`exclusive-option-label`,`exclusive-option-value`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var W=b(B,[[`render`,U]]);function G(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function K(){return{codeJs:`import {
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
};`}}var q={name:`PageSelectGroup`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:s(void 0)}}},J={class:`a_columns a_columns_count_12`},Y={class:`a_column a_column_6 a_columns_count_12_touch`};function X(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_GROUPS_HEADER_`,description:`_A_SELECT_GROUP_GROUPS_DESCRIPTION_`,props:`key-group`},{default:l(()=>[r(`div`,J,[r(`div`,Y,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-group":[`alohaBR`,`aloha`],label:`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Z=b(q,[[`render`,X]]);function Q(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ne(){return{codeJs:`import {
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
};`}}var re={name:`PageSelectKeyDisabled`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=Q(),{codeJs:t}=ne();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``,disabled:!0},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`,disabled:!0},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:s(void 0)}}},ie={class:`a_columns a_columns_count_12`},ae={class:`a_column a_column_6 a_columns_count_12_touch`};function oe(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_KEY_DISABLED_HEADER_`,description:`_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_`,props:`key-disabled`},{default:l(()=>[r(`div`,ie,[r(`div`,ae,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-group":[`alohaBR`,`aloha`],"key-disabled":`disabled`,label:`Aloha group`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1),i(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-disabled":`disabled`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var se=b(re,[[`render`,oe]]);function ce(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  label-position="top"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function le(){return{codeJs:`import {
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
};`}}var ue={name:`PageSelectLabelDescription`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:s(void 0)}}},de={class:`a_columns a_columns_count_12`},fe={class:`a_column a_column_6 a_columns_count_12_touch`};function pe(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:l(()=>[r(`div`,de,[r(`div`,fe,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"label-position":`top`,"key-id":`id`,"key-label":`label`,label:`Select`,"label-description":`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var me=b(ue,[[`render`,pe]]);function he(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ge(){return{codeJs:`import {
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
};`}}var _e={name:`PageSelectLabelNotFound`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model1:s(`aloha_9`),model2:s([`aloha_8`,`aloha_9`])}}},ve={class:`a_columns a_columns_count_12`},ye={class:`a_column a_column_6 a_columns_count_12_touch`};function be(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_`,description:`_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_`,props:`labelNotFound`},{default:l(()=>[r(`div`,ve,[r(`div`,ye,[i(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Select`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model1: `+f(e.model1),1),i(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Multiselect`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`multiselect`},null,8,[`modelValue`,`data`]),r(`div`,null,`model2: `+f(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var xe=b(_e,[[`render`,be]]);function Se(){return{codeHtml:`<a-select
  v-model="model"
  label="label-position: float"
  label-position="float"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<a-select
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<a-select
  v-model="model"
  label="label-position: top"
  label-position="top"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<div>model: {{ model }}</div>`}}function Ce(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectLabelPosition",
  components: {
    ASelect,
  },
  setup() {
    const model = ref("1");
    const data = [
      {
        id: "1",
        label: "Aloha",
      },
      {
        id: "2",
        label: "Hola",
      },
    ];

    return {
      data,
      model,
    };
  },
};`}}var we={name:`PageSelectLabelPosition`,components:{AlohaExample:m,ASelect:h},setup(){let e=s(`1`),t=[`float`,`inset`,`top`],n=[{id:`1`,label:`Aloha`},{id:`2`,label:`Hola`}],{codeHtml:r}=Se(),{codeJs:i}=Ce();return{codeHtml:r,codeJs:i,data:n,labelPositions:t,model:e}}},Te={class:`a_columns a_columns_count_12`};function Ee(e,t,o,s,m,h){let g=d(`a-select`),_=d(`aloha-example`);return u(),a(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:l(()=>[r(`div`,Te,[(u(!0),n(p,null,c(e.labelPositions,r=>(u(),n(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:r},[i(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${r}`,"label-position":r,data:e.data,"key-id":`id`,"key-label":`label`},null,8,[`modelValue`,`label`,`label-position`,`data`])]))),128))]),r(`div`,null,`model: `+f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var De=b(we,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ke(){return{codeJs:`import {
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
};`}}var Ae={name:`PageSelectModeOnePerGroup`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t,data:[{label:`_TXT_POSITIVE_`,id:`koeln_true`,group:`Köln`},{label:`_TXT_NEGATIVE_`,id:`koeln_false`,group:`Köln`},{label:`_TXT_NEUTRAL_`,id:`koeln_null`,group:`Köln`},{label:`_TXT_POSITIVE_`,id:`bonn_true`,group:`Bonn`},{label:`_TXT_NEGATIVE_`,id:`bonn_false`,group:`Bonn`},{label:`_TXT_NEUTRAL_`,id:`bonn_null`,group:`Bonn`},{label:`_TXT_POSITIVE_`,id:`duesseldorf_true`,group:`Düsseldorf`},{label:`_TXT_NEGATIVE_`,id:`duesseldorf_false`,group:`Düsseldorf`},{label:`_TXT_NEUTRAL_`,id:`duesseldorf_null`,group:`Düsseldorf`}],model:s(void 0)}}},je={class:`a_columns a_columns_count_12`},Me={class:`a_column a_column_6 a_columns_count_12_touch`};function Ne(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_`,description:`_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_`,props:`mode='one_per_group'`},{default:l(()=>[r(`div`,je,[r(`div`,Me,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"translate-data":!0,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Aloha`,mode:`one_per_group`,type:`multiselect`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Pe=b(Ae,[[`render`,Ne]]);function Fe(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-select-all="true"
  :is-deselect-all="true"
  :search="true"
  label="_A_SELECT_EXAMPLE_CITIES_"
  type="multiselect"
/>
<div class="a_mt_2">model: {{ model }}</div>`}}function Ie(){return{codeJs:`import {
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
      { value: "berlin", label: "Berlin" },
      { value: "hamburg", label: "Hamburg" },
      { value: "munich", label: "München" },
      { value: "cologne", label: "Köln" },
      { value: "frankfurt", label: "Frankfurt" },
    ];
    const model = ref(["berlin", "cologne"]);

    return {
      data,
      model,
    };
  },
};`}}var Le={name:`PageSelectMultiselectCloseable`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=Fe(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,data:[{value:`berlin`,label:`Berlin`},{value:`hamburg`,label:`Hamburg`},{value:`munich`,label:`München`},{value:`cologne`,label:`Köln`},{value:`frankfurt`,label:`Frankfurt`}],model:s([`berlin`,`cologne`])}}},Re={class:`a_mt_2`};function ze(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_MULTISELECT_CLOSEABLE_HEADER_`,description:`_A_SELECT_GROUP_MULTISELECT_CLOSEABLE_DESCRIPTION_`,props:[`type`,`is-selection-closeable`,`is-select-all`,`is-deselect-all`,`search`]},{default:l(()=>[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"is-select-all":!0,"is-deselect-all":!0,search:!0,label:`_A_SELECT_EXAMPLE_CITIES_`,type:`multiselect`},null,8,[`modelValue`,`data`]),r(`div`,Re,`model: `+f(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var Be=b(Le,[[`render`,ze]]);function Ve(){return{codeHtml:`<a-select
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
></a-select>`}}function He(){return{codeJs:`import {
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
};`}}var Ue={name:`PageSelectReadonly`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=Ve(),{codeJs:t}=He();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`},{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model1:s(`aloha_7`),model2:s([`aloha_6`,`aloha_7`]),model3:s(void 0)}}};function We(e,t,n,r,o,s){let c=d(`a-select`),f=d(`aloha-example`);return u(),a(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:l(()=>[i(c,{"model-value":e.model1,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 1`,type:`select`},null,8,[`model-value`,`data`]),i(c,{class:`a_mt_3`,"model-value":e.model2,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 2`,type:`multiselect`},null,8,[`model-value`,`data`]),i(c,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 3`,type:`select`},null,8,[`model-value`,`data`]),i(c,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 4`,type:`multiselect`},null,8,[`model-value`,`data`]),i(c,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"help-text":`Aloha`,"key-id":`id`,"key-label":`label`,label:`Select 5`,"readonly-default":`-`,type:`select`},null,8,[`model-value`,`data`])]),_:1},8,[`code-html`,`code-js`])}var Ge=b(Ue,[[`render`,We]]);function Ke(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function qe(){return{codeJs:`import {
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
*/`}}var Je={name:`PageSelectRetrieve`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=Ke(),{codeJs:t}=qe();return{codeHtml:e,codeJs:t,model1:s(`aloha_10`),model2:s([`aloha_2`,`aloha_10`,`aloha_11`,`aloha_998`,`aloha_999`]),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}},Ye={class:`a_columns a_columns_count_12`},Xe={class:`a_column a_column_6 a_columns_count_12_touch`},Ze={class:`a_column a_column_6 a_columns_count_12_touch`};function Qe(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,description:`_A_SELECT_GROUP_RETRIEVE_DESCRIPTION_`,header:`_A_SELECT_GROUP_RETRIEVE_HEADER_`},{default:l(()=>[r(`div`,Ye,[r(`div`,Xe,[i(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Select with retrieve`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`select`,url:e.url,"url-retrieve":e.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),r(`div`,null,`model1: `+f(e.model1),1)]),r(`div`,Ze,[i(p,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Multiselect with retrieve`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`multiselect`,url:e.url,"url-retrieve":e.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),r(`div`,null,`model2: `+f(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var $e=b(Je,[[`render`,Qe]]);function et(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function tt(){return{codeJs:`import {
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
};`}}var nt={name:`PageSelectSearch`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=et(),{codeJs:t}=tt();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:s(void 0)}}},rt={class:`a_columns a_columns_count_12`},it={class:`a_column a_column_6 a_columns_count_12_touch`};function at(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_SEARCH_HEADER_`,description:`_A_SELECT_GROUP_SEARCH_DESCRIPTION_`,props:`search`},{default:l(()=>[r(`div`,rt,[r(`div`,it,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],search:!0,"search-in-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1),i(p,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ot=b(nt,[[`render`,at]]);function st(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function ct(){return{codeJs:`import {
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
};`}}var lt={name:`PageSelectSearchTextInHtml`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=st(),{codeJs:t}=ct();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,title:`Aloha 1`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,title:`Aloha 2`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,title:`Aloha 3`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,title:`Aloha 4`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,title:`Aloha 5`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,title:`Aloha 6`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,title:`Aloha 7`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,title:`Aloha 8`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,title:`Aloha 9`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],keyTitleCallback:({item:e})=>`--${e.title}--`,model1:s([`aloha_7`]),model2:s(`aloha_7`)}}},ut={class:`a_columns a_columns_count_12`},dt={class:`a_column a_column_6 a_columns_count_12_touch`};function ft(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`,`key-title`,`key-title-callback`]},{default:l(()=>[r(`div`,ut,[r(`div`,dt,[i(p,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,"key-title":`title`,label:`Aloha group 1`,type:`multiselect`},null,8,[`modelValue`,`data`]),i(p,{class:`a_mt_3`,modelValue:e.model1,"onUpdate:modelValue":t[1]||=t=>e.model1=t,data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 1`,type:`multiselect`},null,8,[`modelValue`,`data`,`key-title-callback`]),r(`div`,null,`model1: `+f(e.model1),1),i(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[2]||=t=>e.model2=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,"key-title":`title`,label:`Aloha group 2`,type:`select`},null,8,[`modelValue`,`data`]),i(p,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[3]||=t=>e.model2=t,data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 2`,type:`select`},null,8,[`modelValue`,`data`,`key-title-callback`]),r(`div`,null,`model2: `+f(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var pt=b(lt,[[`render`,ft]]);function mt(){return{codeHtml:`<a-select
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
></a-select>`}}function ht(){return{codeJs:`import {
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
};`}}var gt={name:`PageSelectShowSelectedFirst`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=mt(),{codeJs:t}=ht(),n=[{id:1,label:`Apple`,group:`Fruit`},{id:2,label:`Banana`,group:`Fruit`},{id:3,label:`Cherry`,group:`Fruit`},{id:4,label:`Orange`,group:`Fruit`},{id:5,label:`Carrot`,group:`Vegetables`},{id:6,label:`Tomato`,group:`Vegetables`},{id:7,label:`Broccoli`,group:`Vegetables`},{id:8,label:`Cucumber`,group:`Vegetables`},{id:9,label:`Milk`,group:`Dairy`},{id:10,label:`Cheese`,group:`Dairy`},{id:11,label:`Yogurt`,group:`Dairy`},{id:12,label:`Butter`,group:`Dairy`},{id:13,label:`Bread`,group:`Bakery`},{id:14,label:`Croissant`,group:`Bakery`},{id:15,label:`Baguette`,group:`Bakery`},{id:16,label:`Pretzel`,group:`Bakery`}],r=s(2),i=s([2,6,10,14]),a=s(7);return{codeHtml:e,codeJs:t,data:n,modelMultiselect:i,modelMultiselectGrouped:s([1,5,9,13]),modelSelect:r,modelSelectGrouped:a}}},_t={class:`a_columns a_columns_count_12`},vt={class:`a_column a_column_6 a_columns_count_12_touch`},yt={class:`a_column a_column_6 a_columns_count_12_touch`},bt={class:`a_column a_column_6 a_columns_count_12_touch`},xt={class:`a_column a_column_6 a_columns_count_12_touch`};function St(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_SHOW_SELECTED_FIRST_HEADER_`,description:`_A_SELECT_GROUP_SHOW_SELECTED_FIRST_DESCRIPTION_`,props:`show-selected-first`},{default:l(()=>[r(`div`,_t,[r(`div`,vt,[i(p,{modelValue:e.modelSelect,"onUpdate:modelValue":t[0]||=t=>e.modelSelect=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Select`,search:!0,"show-selected-first":!0,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.modelSelect),1)]),r(`div`,yt,[i(p,{modelValue:e.modelMultiselect,"onUpdate:modelValue":t[1]||=t=>e.modelMultiselect=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Multiselect`,"is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:`multiselect`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.modelMultiselect),1)]),r(`div`,bt,[i(p,{modelValue:e.modelSelectGrouped,"onUpdate:modelValue":t[2]||=t=>e.modelSelectGrouped=t,data:e.data,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Select grouped`,search:!0,"show-selected-first":!0,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.modelSelectGrouped),1)]),r(`div`,xt,[i(p,{modelValue:e.modelMultiselectGrouped,"onUpdate:modelValue":t[3]||=t=>e.modelMultiselectGrouped=t,data:e.data,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Multiselect grouped`,"is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:`multiselect`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.modelMultiselectGrouped),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ct=b(gt,[[`render`,St]]);function wt(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Tt(){return{codeJs:`import {
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
};`}}var Et={name:`PageSelectTranslateData`,components:{AlohaExample:m,ASelect:h},setup(){let{codeHtml:e}=wt(),{codeJs:t}=Tt();return{codeHtml:e,codeJs:t,data:[{label:`_A_SELECT_ELEMENT_0_`,id:`aloha_0`},{label:`_A_SELECT_ELEMENT_1_`,id:`aloha_1`},{label:`_A_SELECT_ELEMENT_2_`,id:`aloha_2`},{label:`_A_SELECT_ELEMENT_3_`,id:`aloha_3`},{label:`_A_SELECT_ELEMENT_4_`,id:`aloha_4`},{label:`_A_SELECT_ELEMENT_5_`,id:`aloha_5`},{label:`_A_SELECT_ELEMENT_6_`,id:`aloha_6`},{label:`_A_SELECT_ELEMENT_7_`,id:`aloha_7`},{label:`_A_SELECT_ELEMENT_8_`,id:`aloha_8`}],model:s(void 0)}}},Dt={class:`a_columns a_columns_count_12`},Ot={class:`a_column a_column_6 a_columns_count_12_touch`};function kt(e,t,n,o,s,c){let p=d(`a-select`),m=d(`aloha-example`);return u(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_`,description:`_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_`,props:`translate-data`},{default:l(()=>[r(`div`,Dt,[r(`div`,Ot,[i(p,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,search:!0,"translate-data":!0,type:`select`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var At=b(Et,[[`render`,kt]]);function jt(){return{codeHtmlBasic:`<a-select
  v-model="templateDataBasic.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-select
  v-model="modelBasic"
  :url="urlBasic"
  :url-template-data="templateDataBasic"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  type="select"
/>
<div>model: {{ modelBasic }}</div>`,codeHtmlReactive:`<a-select
  v-model="templateDataReactive.source.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-input
  v-model="templateDataReactive.note"
  label="_A_UI_URL_TEMPLATE_NOTE_"
/>
<a-select
  v-model="modelReactive"
  :url="urlReactive"
  :url-template-data="templateDataReactive"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  type="select"
/>
<div>model: {{ modelReactive }}</div>`}}function Mt(){return{codeJsBasic:`import {
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
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelBasic = ref(undefined);
    const templateDataBasic = ref({ file: "base" });
    const urlBasic = \`\${ import.meta.env.BASE_URL }assets/mock/select-{{ file }}.json\`;

    return {
      modelBasic,
      sources,
      templateDataBasic,
      urlBasic,
    };
  },
};`,codeJsReactive:`import {
  ref,
} from "vue";

import {
  AInput,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelReactive = ref(undefined);
    const templateDataReactive = ref({ source: { file: "base" }, note: "" });
    const urlReactive = \`\${ import.meta.env.BASE_URL }assets/mock/select-{{ source.file }}.json\`;

    return {
      modelReactive,
      sources,
      templateDataReactive,
      urlReactive,
    };
  },
};`}}var Nt={name:`PageSelectUrlTemplate`,components:{AInput:g,ASelect:h,AlohaExample:m},setup(){let{codeHtmlBasic:e,codeHtmlReactive:t}=jt(),{codeJsBasic:n,codeJsReactive:r}=Mt(),i=[{id:`base`,label:`_A_UI_URL_TEMPLATE_SOURCE_FIRST_`},{id:`retrieve`,label:`_A_UI_URL_TEMPLATE_SOURCE_SECOND_`}],a=s(void 0),o=s({file:`base`});return{codeHtmlBasic:e,codeHtmlReactive:t,codeJsBasic:n,codeJsReactive:r,modelBasic:a,modelReactive:s(void 0),sources:i,templateDataBasic:o,templateDataReactive:s({source:{file:`base`},note:``}),urlBasic:`/aloha/assets/mock/select-{{ file }}.json`,urlReactive:`/aloha/assets/mock/select-{{ source.file }}.json`}}};function $(e,t,a,o,s,c){let m=d(`a-select`),h=d(`aloha-example`),g=d(`a-input`);return u(),n(p,null,[i(h,{"code-html":e.codeHtmlBasic,"code-js":e.codeJsBasic,header:`_A_UI_URL_TEMPLATE_BASIC_HEADER_`,description:`_A_UI_URL_TEMPLATE_BASIC_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:l(()=>[i(m,{modelValue:e.templateDataBasic.file,"onUpdate:modelValue":t[0]||=t=>e.templateDataBasic.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),i(m,{modelValue:e.modelBasic,"onUpdate:modelValue":t[1]||=t=>e.modelBasic=t,url:e.urlBasic,"url-template-data":e.templateDataBasic,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`,type:`select`},null,8,[`modelValue`,`url`,`url-template-data`]),r(`div`,null,`model: `+f(e.modelBasic),1)]),_:1},8,[`code-html`,`code-js`]),i(h,{"code-html":e.codeHtmlReactive,"code-js":e.codeJsReactive,header:`_A_UI_URL_TEMPLATE_REACTIVE_HEADER_`,description:`_A_UI_URL_TEMPLATE_REACTIVE_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:l(()=>[i(m,{modelValue:e.templateDataReactive.source.file,"onUpdate:modelValue":t[2]||=t=>e.templateDataReactive.source.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),i(g,{modelValue:e.templateDataReactive.note,"onUpdate:modelValue":t[3]||=t=>e.templateDataReactive.note=t,label:`_A_UI_URL_TEMPLATE_NOTE_`},null,8,[`modelValue`]),i(m,{modelValue:e.modelReactive,"onUpdate:modelValue":t[4]||=t=>e.modelReactive=t,url:e.urlReactive,"url-template-data":e.templateDataReactive,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`,type:`select`},null,8,[`modelValue`,`url`,`url-template-data`]),r(`div`,null,`model: `+f(e.modelReactive),1)]),_:1},8,[`code-html`,`code-js`])],64)}var Pt=b(Nt,[[`render`,$]]);function Ft(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function It(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function Lt(){let e=o(()=>v({placeholder:`_A_SELECT_COMPONENT_NAME_`}));return{pageTitle:o(()=>`ASelect${e.value?` (${e.value})`:``}`)}}function Rt(){return{dataProps:[{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-selected-first`,description:`_A_SELECT_PROPS_SHOW_SELECTED_FIRST_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_SHOW_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_A_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url`,description:`_A_UI_PROPS_URL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-params`,description:`_A_UI_PROPS_URL_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-template-data`,description:`_A_UI_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function zt(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var Bt={name:`PageSelect`,components:{PageSelectMultiselectCloseable:Be,AIcon:_,AlohaPage:e,AlohaTableProps:t,ASelect:h,ATranslation:y,PageSelectBasic:D,PageSelectLabelPosition:De,PageSelectDataExtra:P,PageSelectErrorIcon:L,PageSelectExclusiveOption:W,PageSelectGroup:Z,PageSelectKeyDisabled:se,PageSelectLabelDescription:me,PageSelectLabelNotFound:xe,PageSelectModeOnePerGroup:Pe,PageSelectReadonly:Ge,PageSelectRetrieve:$e,PageSelectUrlTemplate:Pt,PageSelectSearch:ot,PageSelectSearchTextInHtml:pt,PageSelectShowSelectedFirst:Ct,PageSelectTranslateData:At},setup(){let{pageTitle:e}=Lt(),{dataProps:t}=Rt(),{dataSlots:n}=zt(),{dataEvents:r}=Ft(),{dataExposes:i}=It();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:`Aloha 1`,id:`aloha_1`,group:`group 1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`,group:`group 1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6`,id:`aloha_6`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7`,id:`aloha_7`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8`,id:`aloha_8`}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}},Vt={class:`a_columns a_columns_count_12`},Ht={class:`a_column a_column_6`},Ut=[`innerHTML`],Wt=[`innerHTML`],Gt=[`innerHTML`],Kt=[`innerHTML`];function qt(e,t,o,s,c,p){let m=d(`a-translation`),h=d(`page-select-basic`),g=d(`page-select-label-position`),_=d(`page-select-label-description`),v=d(`page-select-error-icon`),y=d(`page-select-group`),b=d(`page-select-search`),x=d(`page-select-multiselect-closeable`),S=d(`page-select-search-text-in-html`),C=d(`page-select-show-selected-first`),w=d(`page-select-key-disabled`),T=d(`page-select-translate-data`),E=d(`page-select-data-extra`),D=d(`page-select-exclusive-option`),O=d(`page-select-readonly`),k=d(`page-select-mode-one-per-group`),A=d(`page-select-label-not-found`),j=d(`page-select-retrieve`),M=d(`page-select-url-template`),N=d(`a-select`),P=d(`a-icon`),F=d(`aloha-table-css-vars`),I=d(`aloha-page`);return u(),a(I,{"page-title":e.pageTitle},{body:l(()=>[i(m,{tag:`p`,html:`_A_SELECT_COMPONENT_DESCRIPTION_`}),i(m,{tag:`p`,html:`_A_SELECT_A11Y_DESCRIPTION_`}),i(h),i(g),i(_),i(v),i(y),i(b),i(x),i(S),i(C),i(w),i(T),i(E),i(D),i(O),i(k),i(A),i(j),i(M),r(`div`,null,[r(`div`,Vt,[r(`div`,Ht,[i(N,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Test label`,type:`select`,search:!0,"key-group":`group`,"sort-order-group":`desc`,"is-menu-width-as-button":!1,"menu-width-type":`by_content`},null,8,[`modelValue`,`data`]),r(`div`,null,`model: `+f(e.model),1)])]),i(N,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label-callback":e.getLabel,label:`Test label callback`,type:`select`,search:!0,"sort-order":`desc`},null,8,[`modelValue`,`data`,`key-label-callback`]),t[4]||=r(`br`,null,null,-1),i(N,{modelValue:e.modelArr,"onUpdate:modelValue":t[2]||=t=>e.modelArr=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Test label multiselect`,type:`multiselect`,"label-position":`top`,placeholder:`placeholder`,search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":`test`,"max-count-multiselect":2},{test:l(({label:e,labelFiltered:t})=>[i(P,{class:`a_mr_1`,icon:`Cog`}),t?(u(),n(`span`,{key:0,innerHTML:t},null,8,Ut)):(u(),n(`span`,{key:1,innerHTML:e},null,8,Wt))]),_:1},8,[`modelValue`,`data`]),r(`div`,null,`modelArr: `+f(e.modelArr),1),t[5]||=r(`br`,null,null,-1),i(N,{modelValue:e.modelArr2,"onUpdate:modelValue":t[3]||=t=>e.modelArr2=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Test label multiselect2`,type:`multiselect`,search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":`aloha`},{aloha:l(({label:e,labelFiltered:t})=>[i(P,{class:`a_mr_1`,icon:`Cog`}),t?(u(),n(`span`,{key:0,innerHTML:t},null,8,Gt)):(u(),n(`span`,{key:1,innerHTML:e},null,8,Kt))]),_:1},8,[`modelValue`,`data`]),r(`div`,null,`modelArr2: `+f(e.modelArr2),1)]),i(F,{files:`components/ui/ASelect`})]),_:1},8,[`page-title`])}var Jt=b(Bt,[[`render`,qt]]);export{Jt as default};