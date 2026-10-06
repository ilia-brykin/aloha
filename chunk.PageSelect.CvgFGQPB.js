import{$t as e,Ct as t,Dt as n,Tt as r,Ut as i,Yt as a,kt as o,qt as s,wt as c,zt as l}from"./chunk.vendor.CZPox1kV.js";import{Pt as ee,Z as u,kt as d,t as f,z as p}from"./bundle.index.BmSiyQNH.js";import{n as m,t as h}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as g}from"./chunk.AlohaTableProps.Dksi7fmb.js";function _(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function v(){return{codeJs:`import {
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
};`}}var y={name:`PageSelectBasic`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=_(),{codeJs:t}=v();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:a(void 0)}}},b={class:`a_columns a_columns_count_12`},x={class:`a_column a_column_6 a_columns_count_12_touch`};function S(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`model-value`,`data`,`key-id`,`key-label`,`label`,`type`]},{default:s(()=>[c(`div`,b,[c(`div`,x,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var C=f(y,[[`render`,S]]);function w(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function T(){return{codeJs:`import {
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
};`}}var E={name:`PageSelectDataExtra`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=w(),{codeJs:t}=T();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],dataExtraArrayOfArrays:[[`extra_id_1`,`Extra 1`],[`extra_id_2`,`Extra 2`]],dataExtraArrayOfObjects:[{label:`Extra 1`,id:`extra_id_1`,group:`Recommended`},{label:`Extra 2`,id:`extra_id_2`,group:`Other`},{label:`Extra 3`,id:`extra_id_3`,group:`Other`}],model1:a(void 0),model2:a(void 0)}}},D={class:`a_columns a_columns_count_12`},O={class:`a_column a_column_6 a_columns_count_12_touch`};function k(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_DATA_EXTRA_HEADER_`,description:`_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:s(()=>[c(`div`,D,[c(`div`,O,[o(f,{modelValue:t.model1,"onUpdate:modelValue":n[0]||=e=>t.model1=e,data:t.data,"data-extra":t.dataExtraArrayOfArrays,"key-id":`id`,"key-label":`label`,label:`Data extra (Array of Arrays)`,search:!0},null,8,[`modelValue`,`data`,`data-extra`]),c(`div`,null,`model1: `+e(t.model1),1),o(f,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":n[1]||=e=>t.model2=e,data:t.data,"data-extra":t.dataExtraArrayOfObjects,"key-id":`id`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra (Array of Objects)`,search:!0},null,8,[`modelValue`,`data`,`data-extra`]),c(`div`,null,`model2: `+e(t.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var A=f(E,[[`render`,k]]);function j(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>`}}function te(){return{codeJs:`import {
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
};`}}var M={name:`PageSelectErrorIcon`,components:{AlohaExample:h,ASelect:p},setup(){let e=a(void 0),t=[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`}],{codeHtml:n}=j(),{codeJs:r}=te();return{codeHtml:n,codeJs:r,data:t,errorIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.93 6.588 8.758 10.042a.5.5 0 0 1-.998 0L7.588 6.588a.5.5 0 1 1 .998 0M8 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`,model:e}}};function N(e,t,n,a,c,ee){let u=i(`a-select`),d=i(`aloha-example`);return l(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERROR_ICON_HEADER_`,description:`_A_UI_GROUP_ERROR_ICON_DESCRIPTION_`,props:[`errors`,`error-icon`]},{default:s(()=>[o(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"error-icon":e.errorIcon,errors:`Aloha`,"key-id":`id`,"key-label":`label`,label:`Select`,type:`select`},null,8,[`modelValue`,`data`,`error-icon`])]),_:1},8,[`code-html`,`code-js`])}var P=f(M,[[`render`,N]]);function F(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function I(){return{codeJs:`import {
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
};`}}var L={name:`PageSelectExclusiveOption`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=F(),{codeJs:t}=I();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],exclusiveOptionLabel:`_A_SELECT_EXCLUSIVE_`,exclusiveOptionValue:`aloha_exclusive`,model:a(void 0)}}},R={class:`a_columns a_columns_count_12`},z={class:`a_column a_column_6 a_columns_count_12_touch`};function B(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_EXCLUSIVE_OPTION_HEADER_`,description:`_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_`,props:[`exclusive-option-label`,`exclusive-option-value`,`is-exclusive-option-enabled`]},{default:s(()=>[c(`div`,R,[c(`div`,z,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"exclusive-option-label":t.exclusiveOptionLabel,"exclusive-option-value":t.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":`id`,"key-label":`label`,label:`Aloha 1`,type:`multiselect`},null,8,[`modelValue`,`data`,`exclusive-option-label`,`exclusive-option-value`]),c(`div`,null,`model: `+e(t.model),1),o(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":n[1]||=e=>t.model=e,data:t.data,"exclusive-option-label":t.exclusiveOptionLabel,"exclusive-option-value":t.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 2`,type:`multiselect`},null,8,[`modelValue`,`data`,`exclusive-option-label`,`exclusive-option-value`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var V=f(L,[[`render`,B]]);function H(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function U(){return{codeJs:`import {
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
};`}}var W={name:`PageSelectGroup`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=H(),{codeJs:t}=U();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:a(void 0)}}},G={class:`a_columns a_columns_count_12`},K={class:`a_column a_column_6 a_columns_count_12_touch`};function q(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_GROUPS_HEADER_`,description:`_A_SELECT_GROUP_GROUPS_DESCRIPTION_`,props:`key-group`},{default:s(()=>[c(`div`,G,[c(`div`,K,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,"key-group":[`alohaBR`,`aloha`],label:`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var J=f(W,[[`render`,q]]);function Y(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function X(){return{codeJs:`import {
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
};`}}var Z={name:`PageSelectKeyDisabled`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=Y(),{codeJs:t}=X();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``,disabled:!0},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`,disabled:!0},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:a(void 0)}}},Q={class:`a_columns a_columns_count_12`},ne={class:`a_column a_column_6 a_columns_count_12_touch`};function re(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_KEY_DISABLED_HEADER_`,description:`_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_`,props:`key-disabled`},{default:s(()=>[c(`div`,Q,[c(`div`,ne,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,"key-group":[`alohaBR`,`aloha`],"key-disabled":`disabled`,label:`Aloha group`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1),o(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":n[1]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,"key-disabled":`disabled`,label:`Aloha`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ie=f(Z,[[`render`,re]]);function ae(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-label-float="false"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function oe(){return{codeJs:`import {
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
};`}}var se={name:`PageSelectLabelDescription`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:a(void 0)}}},ce={class:`a_columns a_columns_count_12`},le={class:`a_column a_column_6 a_columns_count_12_touch`};function ue(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:s(()=>[c(`div`,ce,[c(`div`,le,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"is-label-float":!1,"key-id":`id`,"key-label":`label`,label:`Select`,"label-description":`Aloha`,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var de=f(se,[[`render`,ue]]);function fe(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function pe(){return{codeJs:`import {
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
};`}}var me={name:`PageSelectLabelNotFound`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=fe(),{codeJs:t}=pe();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model1:a(`aloha_9`),model2:a([`aloha_8`,`aloha_9`])}}},he={class:`a_columns a_columns_count_12`},ge={class:`a_column a_column_6 a_columns_count_12_touch`};function _e(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_`,description:`_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_`,props:`labelNotFound`},{default:s(()=>[c(`div`,he,[c(`div`,ge,[o(f,{modelValue:t.model1,"onUpdate:modelValue":n[0]||=e=>t.model1=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Select`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model1: `+e(t.model1),1),o(f,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":n[1]||=e=>t.model2=e,data:t.data,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Multiselect`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`multiselect`},null,8,[`modelValue`,`data`]),c(`div`,null,`model2: `+e(t.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var ve=f(me,[[`render`,_e]]);function ye(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function be(){return{codeJs:`import {
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
};`}}var xe={name:`PageSelectModeOnePerGroup`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=ye(),{codeJs:t}=be();return{codeHtml:e,codeJs:t,data:[{label:`_TXT_POSITIVE_`,id:`koeln_true`,group:`Köln`},{label:`_TXT_NEGATIVE_`,id:`koeln_false`,group:`Köln`},{label:`_TXT_NEUTRAL_`,id:`koeln_null`,group:`Köln`},{label:`_TXT_POSITIVE_`,id:`bonn_true`,group:`Bonn`},{label:`_TXT_NEGATIVE_`,id:`bonn_false`,group:`Bonn`},{label:`_TXT_NEUTRAL_`,id:`bonn_null`,group:`Bonn`},{label:`_TXT_POSITIVE_`,id:`duesseldorf_true`,group:`Düsseldorf`},{label:`_TXT_NEGATIVE_`,id:`duesseldorf_false`,group:`Düsseldorf`},{label:`_TXT_NEUTRAL_`,id:`duesseldorf_null`,group:`Düsseldorf`}],model:a(void 0)}}},Se={class:`a_columns a_columns_count_12`},Ce={class:`a_column a_column_6 a_columns_count_12_touch`};function we(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_`,description:`_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_`,props:`mode='one_per_group'`},{default:s(()=>[c(`div`,Se,[c(`div`,Ce,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"translate-data":!0,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Aloha`,mode:`one_per_group`,type:`multiselect`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Te=f(xe,[[`render`,we]]);function Ee(){return{codeHtml:`<a-select
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
></a-select>`}}function De(){return{codeJs:`import {
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
};`}}var Oe={name:`PageSelectReadonly`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=Ee(),{codeJs:t}=De();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`},{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model1:a(`aloha_7`),model2:a([`aloha_6`,`aloha_7`]),model3:a(void 0)}}};function ke(e,t,n,a,c,ee){let u=i(`a-select`),d=i(`aloha-example`);return l(),r(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:s(()=>[o(u,{"model-value":e.model1,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 1`,type:`select`},null,8,[`model-value`,`data`]),o(u,{class:`a_mt_3`,"model-value":e.model2,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 2`,type:`multiselect`},null,8,[`model-value`,`data`]),o(u,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 3`,type:`select`},null,8,[`model-value`,`data`]),o(u,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"key-id":`id`,"key-label":`label`,label:`Select 4`,type:`multiselect`},null,8,[`model-value`,`data`]),o(u,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,"help-text":`Aloha`,"key-id":`id`,"key-label":`label`,label:`Select 5`,"readonly-default":`-`,type:`select`},null,8,[`model-value`,`data`])]),_:1},8,[`code-html`,`code-js`])}var Ae=f(Oe,[[`render`,ke]]);function je(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function Me(){return{codeJs:`import {
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
*/`}}var Ne={name:`PageSelectRetrieve`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=je(),{codeJs:t}=Me();return{codeHtml:e,codeJs:t,model1:a(`aloha_10`),model2:a([`aloha_2`,`aloha_10`,`aloha_11`,`aloha_998`,`aloha_999`]),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}},Pe={class:`a_columns a_columns_count_12`},Fe={class:`a_column a_column_6 a_columns_count_12_touch`},Ie={class:`a_column a_column_6 a_columns_count_12_touch`};function Le(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,description:`_A_SELECT_GROUP_RETRIEVE_DESCRIPTION_`,header:`_A_SELECT_GROUP_RETRIEVE_HEADER_`},{default:s(()=>[c(`div`,Pe,[c(`div`,Fe,[o(f,{modelValue:t.model1,"onUpdate:modelValue":n[0]||=e=>t.model1=e,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Select with retrieve`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`select`,url:t.url,"url-retrieve":t.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),c(`div`,null,`model1: `+e(t.model1),1)]),c(`div`,Ie,[o(f,{modelValue:t.model2,"onUpdate:modelValue":n[1]||=e=>t.model2=e,"show-not-found":!0,"key-id":`id`,"key-label":`label`,label:`Multiselect with retrieve`,"label-not-found":`_A_SELECT_LABEL_NOT_FOUND_`,type:`multiselect`,url:t.url,"url-retrieve":t.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),c(`div`,null,`model2: `+e(t.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var Re=f(Ne,[[`render`,Le]]);function ze(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function Be(){return{codeJs:`import {
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
};`}}var Ve={name:`PageSelectSearch`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=ze(),{codeJs:t}=Be();return{codeHtml:e,codeJs:t,data:[{label:`Aloha -1`,id:`aloha_-1`,aloha:``},{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:a(void 0)}}},He={class:`a_columns a_columns_count_12`},Ue={class:`a_column a_column_6 a_columns_count_12_touch`};function We(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_SEARCH_HEADER_`,description:`_A_SELECT_GROUP_SEARCH_DESCRIPTION_`,props:`search`},{default:s(()=>[c(`div`,He,[c(`div`,Ue,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],search:!0,"search-in-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1),o(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":n[1]||=e=>t.model=e,data:t.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ge=f(Ve,[[`render`,We]]);function Ke(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function qe(){return{codeJs:`import {
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
};`}}var Je={name:`PageSelectSearchTextInHtml`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=Ke(),{codeJs:t}=qe();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,title:`Aloha 1`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,title:`Aloha 2`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,title:`Aloha 3`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,title:`Aloha 4`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,title:`Aloha 5`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,title:`Aloha 6`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,title:`Aloha 7`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,title:`Aloha 8`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,title:`Aloha 9`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],keyTitleCallback:({item:e})=>`--${e.title}--`,model1:a([`aloha_7`]),model2:a(`aloha_7`)}}},Ye={class:`a_columns a_columns_count_12`},Xe={class:`a_column a_column_6 a_columns_count_12_touch`};function Ze(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`,`key-title`,`key-title-callback`]},{default:s(()=>[c(`div`,Ye,[c(`div`,Xe,[o(f,{modelValue:t.model1,"onUpdate:modelValue":n[0]||=e=>t.model1=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,"key-title":`title`,label:`Aloha group 1`,type:`multiselect`},null,8,[`modelValue`,`data`]),o(f,{class:`a_mt_3`,modelValue:t.model1,"onUpdate:modelValue":n[1]||=e=>t.model1=e,data:t.data,"key-title-callback":t.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 1`,type:`multiselect`},null,8,[`modelValue`,`data`,`key-title-callback`]),c(`div`,null,`model1: `+e(t.model1),1),o(f,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":n[2]||=e=>t.model2=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,"key-title":`title`,label:`Aloha group 2`,type:`select`},null,8,[`modelValue`,`data`]),o(f,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":n[3]||=e=>t.model2=e,data:t.data,"key-title-callback":t.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha 2`,type:`select`},null,8,[`modelValue`,`data`,`key-title-callback`]),c(`div`,null,`model2: `+e(t.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var Qe=f(Je,[[`render`,Ze]]);function $e(){return{codeHtml:`<a-select
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
></a-select>`}}function et(){return{codeJs:`import {
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
};`}}var tt={name:`PageSelectShowSelectedFirst`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=$e(),{codeJs:t}=et(),n=[{id:1,label:`Apple`,group:`Fruit`},{id:2,label:`Banana`,group:`Fruit`},{id:3,label:`Cherry`,group:`Fruit`},{id:4,label:`Orange`,group:`Fruit`},{id:5,label:`Carrot`,group:`Vegetables`},{id:6,label:`Tomato`,group:`Vegetables`},{id:7,label:`Broccoli`,group:`Vegetables`},{id:8,label:`Cucumber`,group:`Vegetables`},{id:9,label:`Milk`,group:`Dairy`},{id:10,label:`Cheese`,group:`Dairy`},{id:11,label:`Yogurt`,group:`Dairy`},{id:12,label:`Butter`,group:`Dairy`},{id:13,label:`Bread`,group:`Bakery`},{id:14,label:`Croissant`,group:`Bakery`},{id:15,label:`Baguette`,group:`Bakery`},{id:16,label:`Pretzel`,group:`Bakery`}],r=a(2),i=a([2,6,10,14]),o=a(7);return{codeHtml:e,codeJs:t,data:n,modelMultiselect:i,modelMultiselectGrouped:a([1,5,9,13]),modelSelect:r,modelSelectGrouped:o}}},nt={class:`a_columns a_columns_count_12`},rt={class:`a_column a_column_6 a_columns_count_12_touch`},it={class:`a_column a_column_6 a_columns_count_12_touch`},at={class:`a_column a_column_6 a_columns_count_12_touch`},ot={class:`a_column a_column_6 a_columns_count_12_touch`};function st(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_SHOW_SELECTED_FIRST_HEADER_`,description:`_A_SELECT_GROUP_SHOW_SELECTED_FIRST_DESCRIPTION_`,props:`show-selected-first`},{default:s(()=>[c(`div`,nt,[c(`div`,rt,[o(f,{modelValue:t.modelSelect,"onUpdate:modelValue":n[0]||=e=>t.modelSelect=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Select`,search:!0,"show-selected-first":!0,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.modelSelect),1)]),c(`div`,it,[o(f,{modelValue:t.modelMultiselect,"onUpdate:modelValue":n[1]||=e=>t.modelMultiselect=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Multiselect`,"is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:`multiselect`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.modelMultiselect),1)]),c(`div`,at,[o(f,{modelValue:t.modelSelectGrouped,"onUpdate:modelValue":n[2]||=e=>t.modelSelectGrouped=e,data:t.data,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Select grouped`,search:!0,"show-selected-first":!0,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.modelSelectGrouped),1)]),c(`div`,ot,[o(f,{modelValue:t.modelMultiselectGrouped,"onUpdate:modelValue":n[3]||=e=>t.modelMultiselectGrouped=e,data:t.data,"key-group":`group`,"key-id":`id`,"key-label":`label`,label:`Multiselect grouped`,"is-deselect-all":!0,"is-select-all":!0,search:!0,"show-selected-first":!0,type:`multiselect`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.modelMultiselectGrouped),1)])])]),_:1},8,[`code-html`,`code-js`])}var ct=f(tt,[[`render`,st]]);function lt(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function ut(){return{codeJs:`import {
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
};`}}var dt={name:`PageSelectTranslateData`,components:{AlohaExample:h,ASelect:p},setup(){let{codeHtml:e}=lt(),{codeJs:t}=ut();return{codeHtml:e,codeJs:t,data:[{label:`_A_SELECT_ELEMENT_0_`,id:`aloha_0`},{label:`_A_SELECT_ELEMENT_1_`,id:`aloha_1`},{label:`_A_SELECT_ELEMENT_2_`,id:`aloha_2`},{label:`_A_SELECT_ELEMENT_3_`,id:`aloha_3`},{label:`_A_SELECT_ELEMENT_4_`,id:`aloha_4`},{label:`_A_SELECT_ELEMENT_5_`,id:`aloha_5`},{label:`_A_SELECT_ELEMENT_6_`,id:`aloha_6`},{label:`_A_SELECT_ELEMENT_7_`,id:`aloha_7`},{label:`_A_SELECT_ELEMENT_8_`,id:`aloha_8`}],model:a(void 0)}}},ft={class:`a_columns a_columns_count_12`},pt={class:`a_column a_column_6 a_columns_count_12_touch`};function mt(t,n,a,ee,u,d){let f=i(`a-select`),p=i(`aloha-example`);return l(),r(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_`,description:`_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_`,props:`translate-data`},{default:s(()=>[c(`div`,ft,[c(`div`,pt,[o(f,{modelValue:t.model,"onUpdate:modelValue":n[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,search:!0,"translate-data":!0,type:`select`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ht=f(dt,[[`render`,mt]]);function gt(){return{dataEvents:[{name:`close`,description:`_A_ALERT_EVENTS_CLOSE_DESCRIPTION_`,type:`Function`}]}}function _t(){return{dataExposes:[{name:`close`,description:`_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_`,type:`Function`},{name:`isHidden`,description:`_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_`,type:`Boolean`}]}}function vt(){let e=t(()=>d({placeholder:`_A_SELECT_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ASelect${e.value?` (${e.value})`:``}`)}}function yt(){return{dataProps:[{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`show-selected-first`,description:`_A_SELECT_PROPS_SHOW_SELECTED_FIRST_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`alert-class`,description:`_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`alert-content-class`,description:`_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`btn-close-attributes`,description:`_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_`,type:`Object`,default:`{}`,required:!1},{name:`closable`,description:`_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`error-icon`,description:`_A_UI_PROPS_ERROR_ICON_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`show-icon`,description:`_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`html`,description:`_A_ALERT_PROPS_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon`,description:`_A_ALERT_PROPS_ICON_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`icon-class`,description:`_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-visible`,description:`_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`removeAlertOnClose`,description:`_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`safe-html`,description:`_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text`,description:`_A_ALERT_PROPS_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-close`,description:`_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_`,type:`String`,default:`_ALERT_CLOSE_`,required:!1},{name:`type`,description:`_A_ALERT_PROPS_TYPE_DESCRIPTION_`,type:`String`,default:`danger`,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function $(){return{dataSlots:[{name:`default`,description:`_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_`}]}}var bt={name:`PageSelect`,components:{AIcon:ee,AlohaPage:m,AlohaTableProps:g,ASelect:p,ATranslation:u,PageSelectBasic:C,PageSelectDataExtra:A,PageSelectErrorIcon:P,PageSelectExclusiveOption:V,PageSelectGroup:J,PageSelectKeyDisabled:ie,PageSelectLabelDescription:de,PageSelectLabelNotFound:ve,PageSelectModeOnePerGroup:Te,PageSelectReadonly:Ae,PageSelectRetrieve:Re,PageSelectSearch:Ge,PageSelectSearchTextInHtml:Qe,PageSelectShowSelectedFirst:ct,PageSelectTranslateData:ht},setup(){let{pageTitle:e}=vt(),{dataProps:t}=yt(),{dataSlots:n}=$(),{dataEvents:r}=gt(),{dataExposes:i}=_t();return{dataEvents:r,dataExposes:i,dataProps:t,dataSlots:n,pageTitle:e}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:`Aloha 1`,id:`aloha_1`,group:`group 1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`,group:`group 1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6`,id:`aloha_6`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7`,id:`aloha_7`,group:`group 2`},{label:`AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8`,id:`aloha_8`}]}},methods:{getLabel({item:e}){return`callback: ${e.label}`}}},xt={class:`a_columns a_columns_count_12`},St={class:`a_column a_column_6`},Ct=[`innerHTML`],wt=[`innerHTML`],Tt=[`innerHTML`],Et=[`innerHTML`];function Dt(t,a,ee,u,d,f){let p=i(`a-translation`),m=i(`page-select-basic`),h=i(`page-select-label-description`),g=i(`page-select-error-icon`),_=i(`page-select-group`),v=i(`page-select-search`),y=i(`page-select-search-text-in-html`),b=i(`page-select-show-selected-first`),x=i(`page-select-key-disabled`),S=i(`page-select-translate-data`),C=i(`page-select-data-extra`),w=i(`page-select-exclusive-option`),T=i(`page-select-readonly`),E=i(`page-select-mode-one-per-group`),D=i(`page-select-label-not-found`),O=i(`page-select-retrieve`),k=i(`a-select`),A=i(`a-icon`),j=i(`aloha-page`);return l(),r(j,{"page-title":t.pageTitle},{body:s(()=>[o(p,{tag:`p`,html:`_A_SELECT_COMPONENT_DESCRIPTION_`}),o(m),o(h),o(g),o(_),o(v),o(y),o(b),o(x),o(S),o(C),o(w),o(T),o(E),o(D),o(O),c(`div`,null,[c(`div`,xt,[c(`div`,St,[o(k,{modelValue:t.model,"onUpdate:modelValue":a[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Test label`,type:`select`,search:!0,"key-group":`group`,"sort-order-group":`desc`,"is-menu-width-as-button":!1,"menu-width-type":`by_content`},null,8,[`modelValue`,`data`]),c(`div`,null,`model: `+e(t.model),1)])]),o(k,{modelValue:t.model,"onUpdate:modelValue":a[1]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label-callback":t.getLabel,label:`Test label callback`,type:`select`,search:!0,"sort-order":`desc`},null,8,[`modelValue`,`data`,`key-label-callback`]),a[4]||=c(`br`,null,null,-1),o(k,{modelValue:t.modelArr,"onUpdate:modelValue":a[2]||=e=>t.modelArr=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Test label multiselect`,type:`multiselect`,"is-label-float":!1,placeholder:`placeholder`,search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":`test`,"max-count-multiselect":2},{test:s(({label:e,labelFiltered:t})=>[o(A,{class:`a_mr_1`,icon:`Cog`}),t?(l(),n(`span`,{key:0,innerHTML:t},null,8,Ct)):(l(),n(`span`,{key:1,innerHTML:e},null,8,wt))]),_:1},8,[`modelValue`,`data`]),c(`div`,null,`modelArr: `+e(t.modelArr),1),a[5]||=c(`br`,null,null,-1),o(k,{modelValue:t.modelArr2,"onUpdate:modelValue":a[3]||=e=>t.modelArr2=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Test label multiselect2`,type:`multiselect`,search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":`aloha`},{aloha:s(({label:e,labelFiltered:t})=>[o(A,{class:`a_mr_1`,icon:`Cog`}),t?(l(),n(`span`,{key:0,innerHTML:t},null,8,Tt)):(l(),n(`span`,{key:1,innerHTML:e},null,8,Et))]),_:1},8,[`modelValue`,`data`]),c(`div`,null,`modelArr2: `+e(t.modelArr2),1)])]),_:1},8,[`page-title`])}var Ot=f(bt,[[`render`,Dt]]);export{Ot as default};