import{t as e}from"./chunk.AlohaPage.C2Vrb1gB.js";import{t}from"./chunk.AlohaTableProps.DChMsTjd.js";import{Ft as n,It as r,Mt as i,Pt as a,Qt as o,Rt as s,Vt as c,cn as l,en as u,mn as d,nn as f,on as p}from"./chunk.vendor.CTxSDDRk.js";import{t as m}from"./chunk.AlohaExample.v2GP0Oep.js";import{$t as h,V as g,Xt as _,it as v,nt as y}from"./bundle.index.CwzuX9ei.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-select
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
};`}}var C={name:`PageSelectBasic`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=x(),{codeJs:t}=S();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:l(void 0)}}},w={class:`a_columns a_columns_count_12`},T={class:`a_column a_column_6 a_columns_count_12_touch`};function E(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`data`,`key-id`,`key-label`,`label`,`type`]},{default:p(()=>[n(`div`,w,[n(`div`,T,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var D=b(C,[[`render`,E]]);function O(){return{codeHtml:`<a-select
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
};`}}var A={name:`PageSelectDataExtra`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=O(),{codeJs:t}=k();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],dataExtraArrayOfArrays:[[`extra_id_1`,`Extra 1`],[`extra_id_2`,`Extra 2`]],dataExtraArrayOfObjects:[{label:`Extra 1`,id:`extra_id_1`,group:`Recommended`},{label:`Extra 2`,id:`extra_id_2`,group:`Other`},{label:`Extra 3`,id:`extra_id_3`,group:`Other`}],model1:l(void 0),model2:l(void 0)}}},j={class:`a_columns a_columns_count_12`},M={class:`a_column a_column_6 a_columns_count_12_touch`};function N(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_DATA_EXTRA_HEADER_`,description:`_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:p(()=>[n(`div`,j,[n(`div`,M,[c(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"data-extra":e.dataExtraArrayOfArrays,"key-id":`id`,"key-label":`label`,label:`Data extra (Array of Arrays)`,search:!0},null,8,[`modelValue`,`data`,`data-extra`]),n(`div`,null,`model1: `+d(e.model1),1),c(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"data-extra":e.dataExtraArrayOfObjects,"key-id":`id`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra (Array of Objects)`,search:!0},null,8,[`modelValue`,`data`,`data-extra`]),n(`div`,null,`model2: `+d(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var P=b(A,[[`render`,N]]);function F(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>`}}function ee(){return{codeJs:`import {
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
};`}}var te={name:`PageSelectErrorIcon`,components:{AlohaExample:m,ASelect:g},setup(){let e=l(void 0),t=[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`}],{codeHtml:n}=F(),{codeJs:r}=ee();return{codeHtml:n,codeJs:r,data:t,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function I(e,t,n,i,a,s){let l=f(`a-select`),u=f(`aloha-example`);return o(),r(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:p(()=>[c(l,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"error-icon":e.errorIcon,errors:`Aloha`,"key-id":`id`,"key-label":`label`,label:`Select`,type:`select`},null,8,[`modelValue`,`data`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var L=b(te,[[`render`,I]]);function R(){return{codeHtml:`<a-select
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
};`}}var B={name:`PageSelectExclusiveOption`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],exclusiveOptionLabel:`_A_SELECT_EXCLUSIVE_`,exclusiveOptionValue:`aloha_exclusive`,model:l(void 0)}}},V={class:`a_columns a_columns_count_12`},H={class:`a_column a_column_6 a_columns_count_12_touch`};function U(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_EXCLUSIVE_OPTION_HEADER_`,description:`_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_`,props:[`exclusive-option-label`,`exclusive-option-value`,`is-exclusive-option-enabled`]},{default:p(()=>[n(`div`,V,[n(`div`,H,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":`id`,"key-label":`label`,label:`Aloha 1`,type:`multiselect`},null,8,[`modelValue`,`data`,`exclusive-option-label`,`exclusive-option-value`]),n(`div`,null,`model: `+d(e.model),1),c(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"exclusive-option-label":e.exclusiveOptionLabel,"exclusive-option-value":e.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 2`,type:`multiselect`},null,8,[`modelValue`,`data`,`exclusive-option-label`,`exclusive-option-value`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var W=b(B,[[`render`,U]]);function G(){return{codeHtml:`<a-select
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
};`}}var q={name:`PageSelectGroup`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=G(),{codeJs:t}=K();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:l(void 0)}}},J={class:`a_columns a_columns_count_12`},Y={class:`a_column a_column_6 a_columns_count_12_touch`};function X(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_GROUPS_HEADER_`,description:`_A_SELECT_GROUP_GROUPS_DESCRIPTION_`,props:`key-group`},{default:p(()=>[n(`div`,J,[n(`div`,Y,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-group":[`alohaBR`,`aloha`],label:`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Z=b(q,[[`render`,X]]);function Q(){return{codeHtml:`<a-select
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
};`}}var re={name:`PageSelectKeyDisabled`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=Q(),{codeJs:t}=ne();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``,disabled:!0},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`,disabled:!0},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:l(void 0)}}},ie={class:`a_columns a_columns_count_12`},ae={class:`a_column a_column_6 a_columns_count_12_touch`};function oe(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_KEY_DISABLED_HEADER_`,description:`_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_`,props:`key-disabled`},{default:p(()=>[n(`div`,ie,[n(`div`,ae,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-group":[`alohaBR`,`aloha`],"key-disabled":`disabled`,label:`Aloha group`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1),c(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-disabled":`disabled`,label:`Aloha`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var se=b(re,[[`render`,oe]]);function ce(){return{codeHtml:`<a-select
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
};`}}var ue={name:`PageSelectLabelDescription`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:l(void 0)}}},de={class:`a_columns a_columns_count_12`},fe={class:`a_column a_column_6 a_columns_count_12_touch`};function pe(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:p(()=>[n(`div`,de,[n(`div`,fe,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"label-position":`top`,"key-id":`id`,"key-label":`label`,label:`Select`,"label-description":`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var me=b(ue,[[`render`,pe]]);function he(){return{codeHtml:`<a-select
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
};`}}var _e={name:`PageSelectLabelNotFound`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=he(),{codeJs:t}=ge();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model1:l(`aloha_9`),model2:l([`aloha_8`,`aloha_9`])}}},ve={class:`a_columns a_columns_count_12`},ye={class:`a_column a_column_6 a_columns_count_12_touch`};function be(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_`,description:`_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_`,props:`labelNotFound`},{default:p(()=>[n(`div`,ve,[n(`div`,ye,[c(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Select`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model1: `+d(e.model1),1),c(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Multiselect`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`multiselect`},null,8,[`modelValue`,`data`]),n(`div`,null,`model2: `+d(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var xe=b(_e,[[`render`,be]]);function Se(){return{codeHtml:`<a-select
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
};`}}var we={name:`PageSelectLabelPosition`,components:{AlohaExample:m,ASelect:g},setup(){let e=l(`1`),t=[`float`,`inset`,`top`],n=[{id:`1`,label:`Aloha`},{id:`2`,label:`Hola`}],{codeHtml:r}=Se(),{codeJs:i}=Ce();return{codeHtml:r,codeJs:i,data:n,labelPositions:t,model:e}}},Te={class:`a_columns a_columns_count_12`};function Ee(e,t,a,l,m,h){let g=f(`a-select`),_=f(`aloha-example`);return o(),r(_,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_LABEL_POSITION_HEADER_`,description:`_A_UI_LABEL_POSITION_DESCRIPTION_`,props:[`label-position`]},{default:p(()=>[n(`div`,Te,[(o(!0),s(i,null,u(e.labelPositions,n=>(o(),s(`div`,{class:`a_column a_column_4 a_columns_count_12_touch`,key:n},[c(g,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,label:`label-position: ${n}`,"label-position":n,data:e.data,"key-id":`id`,"key-label":`label`},null,8,[`modelValue`,`label`,`label-position`,`data`])]))),128))]),n(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var De=b(we,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-select
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
};`}}var Ae={name:`PageSelectModeOnePerGroup`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t,data:[{label:`_TXT_POSITIVE_`,id:`koeln_true`,group:`Köln`},{label:`_TXT_NEGATIVE_`,id:`koeln_false`,group:`Köln`},{label:`_TXT_NEUTRAL_`,id:`koeln_null`,group:`Köln`},{label:`_TXT_POSITIVE_`,id:`bonn_true`,group:`Bonn`},{label:`_TXT_NEGATIVE_`,id:`bonn_false`,group:`Bonn`},{label:`_TXT_NEUTRAL_`,id:`bonn_null`,group:`Bonn`},{label:`_TXT_POSITIVE_`,id:`duesseldorf_true`,group:`Düsseldorf`},{label:`_TXT_NEGATIVE_`,id:`duesseldorf_false`,group:`Düsseldorf`},{label:`_TXT_NEUTRAL_`,id:`duesseldorf_null`,group:`Düsseldorf`}],model:l(void 0)}}},je={class:`a_columns a_columns_count_12`},Me={class:`a_column a_column_6 a_columns_count_12_touch`};function Ne(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_`,description:`_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_`,props:`mode='one_per_group'`},{default:p(()=>[n(`div`,je,[n(`div`,Me,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"translate-data":!0,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Aloha`,mode:`one_per_group`,type:`multiselect`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Pe=b(Ae,[[`render`,Ne]]);function Fe(){return{codeHtml:`<a-select
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
></a-select>`}}function Ie(){return{codeJs:`import {
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
};`}}var Le={name:`PageSelectReadonly`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=Fe(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`},{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model1:l(`aloha_7`),model2:l([`aloha_6`,`aloha_7`]),model3:l(void 0)}}};function Re(e,t,n,i,a,s){let l=f(`a-select`),u=f(`aloha-example`);return o(),r(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:p(()=>[c(l,{"model-value":e.model1,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 1`,type:`select`},null,8,[`model-value`,`data`]),c(l,{class:`a_mt_3`,"model-value":e.model2,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 2`,type:`multiselect`},null,8,[`model-value`,`data`]),c(l,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 3`,type:`select`},null,8,[`model-value`,`data`]),c(l,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 4`,type:`multiselect`},null,8,[`model-value`,`data`]),c(l,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"help-text":`Aloha`,"key-id":`id`,"key-label":`label`,label:`Select 5`,"readonly-default":`-`,type:`select`},null,8,[`model-value`,`data`])]),_:1},8,[`code-html`,`code-js`])}var ze=b(Le,[[`render`,Re]]);function Be(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function Ve(){return{codeJs:`import {
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
*/`}}var He={name:`PageSelectRetrieve`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=Be(),{codeJs:t}=Ve();return{codeHtml:e,codeJs:t,model1:l(`aloha_10`),model2:l([`aloha_2`,`aloha_10`,`aloha_11`,`aloha_998`,`aloha_999`]),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}},Ue={class:`a_columns a_columns_count_12`},We={class:`a_column a_column_6 a_columns_count_12_touch`},Ge={class:`a_column a_column_6 a_columns_count_12_touch`};function Ke(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,description:`_A_SELECT_GROUP_RETRIEVE_DESCRIPTION_`,header:`_A_SELECT_GROUP_RETRIEVE_HEADER_`},{default:p(()=>[n(`div`,Ue,[n(`div`,We,[c(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Select with retrieve`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`select`,url:e.url,"url-retrieve":e.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),n(`div`,null,`model1: `+d(e.model1),1)]),n(`div`,Ge,[c(u,{modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Multiselect with retrieve`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`multiselect`,url:e.url,"url-retrieve":e.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),n(`div`,null,`model2: `+d(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var qe=b(He,[[`render`,Ke]]);function Je(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function Ye(){return{codeJs:`import {
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
};`}}var Xe={name:`PageSelectSearch`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=Je(),{codeJs:t}=Ye();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:l(void 0)}}},Ze={class:`a_columns a_columns_count_12`},Qe={class:`a_column a_column_6 a_columns_count_12_touch`};function $e(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_SEARCH_HEADER_`,description:`_A_SELECT_GROUP_SEARCH_DESCRIPTION_`,props:`search`},{default:p(()=>[n(`div`,Ze,[n(`div`,Qe,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],search:!0,"search-in-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1),c(u,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var et=b(Xe,[[`render`,$e]]);function tt(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function nt(){return{codeJs:`import {
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
};`}}var rt={name:`PageSelectSearchTextInHtml`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=tt(),{codeJs:t}=nt();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,title:`Aloha 1`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,title:`Aloha 2`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,title:`Aloha 3`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,title:`Aloha 4`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,title:`Aloha 5`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,title:`Aloha 6`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,title:`Aloha 7`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,title:`Aloha 8`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,title:`Aloha 9`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],keyTitleCallback:({item:e})=>`--${e.title}--`,model1:l([`aloha_7`]),model2:l(`aloha_7`)}}},it={class:`a_columns a_columns_count_12`},at={class:`a_column a_column_6 a_columns_count_12_touch`};function ot(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`,`key-title`,`key-title-callback`]},{default:p(()=>[n(`div`,it,[n(`div`,at,[c(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,"key-title":`title`,label:`Aloha group 1`,type:`multiselect`},null,8,[`modelValue`,`data`]),c(u,{class:`a_mt_3`,modelValue:e.model1,"onUpdate:modelValue":t[1]||=t=>e.model1=t,data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 1`,type:`multiselect`},null,8,[`modelValue`,`data`,`key-title-callback`]),n(`div`,null,`model1: `+d(e.model1),1),c(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[2]||=t=>e.model2=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,"key-title":`title`,label:`Aloha group 2`,type:`select`},null,8,[`modelValue`,`data`]),c(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[3]||=t=>e.model2=t,data:e.data,"key-title-callback":e.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 2`,type:`select`},null,8,[`modelValue`,`data`,`key-title-callback`]),n(`div`,null,`model2: `+d(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var st=b(rt,[[`render`,ot]]);function ct(){return{codeHtml:`<a-select
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
></a-select>`}}function lt(){return{codeJs:`import {
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
};`}}var ut={name:`PageSelectShowSelectedFirst`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=ct(),{codeJs:t}=lt(),n=[{id:1,label:`Apple`,group:`Fruit`},{id:2,label:`Banana`,group:`Fruit`},{id:3,label:`Cherry`,group:`Fruit`},{id:4,label:`Orange`,group:`Fruit`},{id:5,label:`Carrot`,group:`Vegetables`},{id:6,label:`Tomato`,group:`Vegetables`},{id:7,label:`Broccoli`,group:`Vegetables`},{id:8,label:`Cucumber`,group:`Vegetables`},{id:9,label:`Milk`,group:`Dairy`},{id:10,label:`Cheese`,group:`Dairy`},{id:11,label:`Yogurt`,group:`Dairy`},{id:12,label:`Butter`,group:`Dairy`},{id:13,label:`Bread`,group:`Bakery`},{id:14,label:`Croissant`,group:`Bakery`},{id:15,label:`Baguette`,group:`Bakery`},{id:16,label:`Pretzel`,group:`Bakery`}],r=l(2),i=l([2,6,10,14]),a=l(7);return{codeHtml:e,codeJs:t,data:n,modelMultiselect:i,modelMultiselectGrouped:l([1,5,9,13]),modelSelect:r,modelSelectGrouped:a}}},dt={class:`a_columns a_columns_count_12`},ft={class:`a_column a_column_6 a_columns_count_12_touch`},pt={class:`a_column a_column_6 a_columns_count_12_touch`},mt={class:`a_column a_column_6 a_columns_count_12_touch`},ht={class:`a_column a_column_6 a_columns_count_12_touch`};function gt(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_SHOW_SELECTED_FIRST_HEADER_`,description:`_A_SELECT_GROUP_SHOW_SELECTED_FIRST_DESCRIPTION_`,props:`show-selected-first`},{default:p(()=>[n(`div`,dt,[n(`div`,ft,[c(u,{modelValue:e.modelSelect,"onUpdate:modelValue":t[0]||=t=>e.modelSelect=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Select`,search:!0,"show-selected-first":!0,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.modelSelect),1)]),n(`div`,pt,[c(u,{modelValue:e.modelMultiselect,"onUpdate:modelValue":t[1]||=t=>e.modelMultiselect=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Multiselect`,"is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:`multiselect`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.modelMultiselect),1)]),n(`div`,mt,[c(u,{modelValue:e.modelSelectGrouped,"onUpdate:modelValue":t[2]||=t=>e.modelSelectGrouped=t,data:e.data,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Select grouped`,search:!0,"show-selected-first":!0,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.modelSelectGrouped),1)]),n(`div`,ht,[c(u,{modelValue:e.modelMultiselectGrouped,"onUpdate:modelValue":t[3]||=t=>e.modelMultiselectGrouped=t,data:e.data,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Multiselect grouped`,"is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:`multiselect`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.modelMultiselectGrouped),1)])])]),_:1},8,[`code-html`,`code-js`])}var _t=b(ut,[[`render`,gt]]);function vt(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function yt(){return{codeJs:`import {
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
};`}}var bt={name:`PageSelectTranslateData`,components:{AlohaExample:m,ASelect:g},setup(){let{codeHtml:e}=vt(),{codeJs:t}=yt();return{codeHtml:e,codeJs:t,data:[{label:`_A_SELECT_ELEMENT_0_`,id:`aloha_0`},{label:`_A_SELECT_ELEMENT_1_`,id:`aloha_1`},{label:`_A_SELECT_ELEMENT_2_`,id:`aloha_2`},{label:`_A_SELECT_ELEMENT_3_`,id:`aloha_3`},{label:`_A_SELECT_ELEMENT_4_`,id:`aloha_4`},{label:`_A_SELECT_ELEMENT_5_`,id:`aloha_5`},{label:`_A_SELECT_ELEMENT_6_`,id:`aloha_6`},{label:`_A_SELECT_ELEMENT_7_`,id:`aloha_7`},{label:`_A_SELECT_ELEMENT_8_`,id:`aloha_8`}],model:l(void 0)}}},xt={class:`a_columns a_columns_count_12`},St={class:`a_column a_column_6 a_columns_count_12_touch`};function Ct(e,t,i,a,s,l){let u=f(`a-select`),m=f(`aloha-example`);return o(),r(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_`,description:`_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_`,props:`translate-data`},{default:p(()=>[n(`div`,xt,[n(`div`,St,[c(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,search:!0,"translate-data":!0,type:`select`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var wt=b(bt,[[`render`,Ct]]);function Tt(){return{codeHtmlBasic:`<a-select
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
<div>model: {{ modelReactive }}</div>`}}function Et(){return{codeJsBasic:`import {
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
};`}}var $={name:`PageSelectUrlTemplate`,components:{AInput:y,ASelect:g,AlohaExample:m},setup(){let{codeHtmlBasic:e,codeHtmlReactive:t}=Tt(),{codeJsBasic:n,codeJsReactive:r}=Et(),i=[{id:`base`,label:`_A_UI_URL_TEMPLATE_SOURCE_FIRST_`},{id:`retrieve`,label:`_A_UI_URL_TEMPLATE_SOURCE_SECOND_`}],a=l(void 0),o=l({file:`base`});return{codeHtmlBasic:e,codeHtmlReactive:t,codeJsBasic:n,codeJsReactive:r,modelBasic:a,modelReactive:l(void 0),sources:i,templateDataBasic:o,templateDataReactive:l({source:{file:`base`},note:``}),urlBasic:`/aloha/assets/mock/select-{{ file }}.json`,urlReactive:`/aloha/assets/mock/select-{{ source.file }}.json`}}};function Dt(e,t,r,a,l,u){let m=f(`a-select`),h=f(`aloha-example`),g=f(`a-input`);return o(),s(i,null,[c(h,{"code-html":e.codeHtmlBasic,"code-js":e.codeJsBasic,header:`_A_UI_URL_TEMPLATE_BASIC_HEADER_`,description:`_A_UI_URL_TEMPLATE_BASIC_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:p(()=>[c(m,{modelValue:e.templateDataBasic.file,"onUpdate:modelValue":t[0]||=t=>e.templateDataBasic.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),c(m,{modelValue:e.modelBasic,"onUpdate:modelValue":t[1]||=t=>e.modelBasic=t,url:e.urlBasic,"url-template-data":e.templateDataBasic,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`,type:`select`},null,8,[`modelValue`,`url`,`url-template-data`]),n(`div`,null,`model: `+d(e.modelBasic),1)]),_:1},8,[`code-html`,`code-js`]),c(h,{"code-html":e.codeHtmlReactive,"code-js":e.codeJsReactive,header:`_A_UI_URL_TEMPLATE_REACTIVE_HEADER_`,description:`_A_UI_URL_TEMPLATE_REACTIVE_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:p(()=>[c(m,{modelValue:e.templateDataReactive.source.file,"onUpdate:modelValue":t[2]||=t=>e.templateDataReactive.source.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),c(g,{modelValue:e.templateDataReactive.note,"onUpdate:modelValue":t[3]||=t=>e.templateDataReactive.note=t,label:`_A_UI_URL_TEMPLATE_NOTE_`},null,8,[`modelValue`]),c(m,{modelValue:e.modelReactive,"onUpdate:modelValue":t[4]||=t=>e.modelReactive=t,url:e.urlReactive,"url-template-data":e.templateDataReactive,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`,type:`select`},null,8,[`modelValue`,`url`,`url-template-data`]),n(`div`,null,`model: `+d(e.modelReactive),1)]),_:1},8,[`code-html`,`code-js`])],64)}var Ot=b($,[[`render`,Dt]]);function kt(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function At(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function jt(){let e=a(()=>_({placeholder:`_A_SELECT_COMPONENT_NAME_`}));return{pageTitle:a(()=>`ASelect${e.value?` (${e.value})`:``}`)}}function Mt(){return{dataProps:[{name:`label-position`,description:`_A_UI_PROPS_LABEL_POSITION_DESCRIPTION_`,type:`"float" / "inset" / "top"`,default:`"float"`,required:!1},{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-selected-first`,description:`_A_SELECT_PROPS_SHOW_SELECTED_FIRST_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url`,description:`_A_UI_PROPS_URL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-params`,description:`_A_UI_PROPS_URL_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-template-data`,description:`_A_UI_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function Nt(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var Pt={name:`PageSelect`,components:{AIcon:h,AlohaPage:e,AlohaTableProps:t,ASelect:g,ATranslation:v,PageSelectBasic:D,PageSelectLabelPosition:De,PageSelectDataExtra:P,PageSelectErrorIcon:L,PageSelectExclusiveOption:W,PageSelectGroup:Z,PageSelectKeyDisabled:se,PageSelectLabelDescription:me,PageSelectLabelNotFound:xe,PageSelectModeOnePerGroup:Pe,PageSelectReadonly:ze,PageSelectRetrieve:qe,PageSelectUrlTemplate:Ot,PageSelectSearch:et,PageSelectSearchTextInHtml:st,PageSelectShowSelectedFirst:_t,PageSelectTranslateData:wt},setup(){let{pageTitle:e}=jt(),{dataProps:t}=Mt(),{dataSlots:n}=Nt(),{dataEvents:r}=kt(),{dataExposes:i}=At();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:`Aloha 1`,id:`aloha_1`,group:`group 1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`,group:`group 1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6`,id:`aloha_6`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7`,id:`aloha_7`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8`,id:`aloha_8`}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}},Ft={class:`a_columns a_columns_count_12`},It={class:`a_column a_column_6`},Lt=[`innerHTML`],Rt=[`innerHTML`],zt=[`innerHTML`],Bt=[`innerHTML`];function Vt(e,t,i,a,l,u){let m=f(`a-translation`),h=f(`page-select-basic`),g=f(`page-select-label-position`),_=f(`page-select-label-description`),v=f(`page-select-error-icon`),y=f(`page-select-group`),b=f(`page-select-search`),x=f(`page-select-search-text-in-html`),S=f(`page-select-show-selected-first`),C=f(`page-select-key-disabled`),w=f(`page-select-translate-data`),T=f(`page-select-data-extra`),E=f(`page-select-exclusive-option`),D=f(`page-select-readonly`),O=f(`page-select-mode-one-per-group`),k=f(`page-select-label-not-found`),A=f(`page-select-retrieve`),j=f(`page-select-url-template`),M=f(`a-select`),N=f(`a-icon`),P=f(`aloha-table-css-vars`),F=f(`aloha-page`);return o(),r(F,{"page-title":e.pageTitle},{body:p(()=>[c(m,{tag:`p`,html:`_A_SELECT_COMPONENT_DESCRIPTION_`}),c(h),c(g),c(_),c(v),c(y),c(b),c(x),c(S),c(C),c(w),c(T),c(E),c(D),c(O),c(k),c(A),c(j),n(`div`,null,[n(`div`,Ft,[n(`div`,It,[c(M,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Test label`,type:`select`,search:!0,"key-group":`group`,"sort-order-group":`desc`,"is-menu-width-as-button":!1,"menu-width-type":`by_content`},null,8,[`modelValue`,`data`]),n(`div`,null,`model: `+d(e.model),1)])]),c(M,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label-callback":e.getLabel,label:`Test label callback`,type:`select`,search:!0,"sort-order":`desc`},null,8,[`modelValue`,`data`,`key-label-callback`]),t[4]||=n(`br`,null,null,-1),c(M,{modelValue:e.modelArr,"onUpdate:modelValue":t[2]||=t=>e.modelArr=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Test label multiselect`,type:`multiselect`,"label-position":`top`,placeholder:`placeholder`,search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":`test`,"max-count-multiselect":2},{test:p(({label:e,labelFiltered:t})=>[c(N,{class:`a_mr_1`,icon:`Cog`}),t?(o(),s(`span`,{key:0,innerHTML:t},null,8,Lt)):(o(),s(`span`,{key:1,innerHTML:e},null,8,Rt))]),_:1},8,[`modelValue`,`data`]),n(`div`,null,`modelArr: `+d(e.modelArr),1),t[5]||=n(`br`,null,null,-1),c(M,{modelValue:e.modelArr2,"onUpdate:modelValue":t[3]||=t=>e.modelArr2=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Test label multiselect2`,type:`multiselect`,search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":`aloha`},{aloha:p(({label:e,labelFiltered:t})=>[c(N,{class:`a_mr_1`,icon:`Cog`}),t?(o(),s(`span`,{key:0,innerHTML:t},null,8,zt)):(o(),s(`span`,{key:1,innerHTML:e},null,8,Bt))]),_:1},8,[`modelValue`,`data`]),n(`div`,null,`modelArr2: `+d(e.modelArr2),1)]),c(P,{files:`components/ui/ASelect`})]),_:1},8,[`page-title`])}var Ht=b(Pt,[[`render`,Vt]]);export{Ht as default};