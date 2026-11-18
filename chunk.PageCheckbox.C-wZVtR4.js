import{t as e}from"./chunk.AlohaPage.DqkPByuO.js";import{t}from"./chunk.AlohaTableProps.BCBHdgTD.js";import{t as n}from"./chunk.AlohaTableTranslate.BWxFIn1s.js";import{Bt as r,Ft as i,It as a,Mt as o,Pt as s,Rt as c,Zt as l,an as u,pn as d,sn as f,tn as p}from"./chunk.vendor.H0cZuFAV.js";import{t as m}from"./chunk.AlohaExample.CxBeInGL.js";import{B as h,Ut as g,dt as _,rt as v,tt as y}from"./bundle.index.DW19MCJk.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxBasic",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref([]);
    
    return {
      data,
      model,
    };
  },
};`}}var C={name:`PageCheckboxBasic`,components:{ACheckbox:_,AlohaExample:m},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=f([]),{codeHtml:n}=x(),{codeJs:r}=S();return{codeHtml:n,codeJs:r,data:e,model:t}}};function w(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`,`model-value`,`label`]},{default:u(()=>[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=b(C,[[`render`,w]]);function E(){return{codeHtml:`<a-checkbox
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxChange",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref([]);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      data,
      model,
    };
  },
};`}}var O={name:`PageCheckboxChange`,components:{ACheckbox:_,AlohaExample:m},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=f([]),n=({model:e,id:n,props:r})=>{t.value=e,console.log(n,r)},{codeHtml:r}=E(),{codeJs:i}=D();return{changeModel:n,codeHtml:r,codeJs:i,data:e,model:t}}};function k(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:u(()=>[r(f,{change:e.changeModel,data:e.data,"model-value":e.model,label:`Aloha`},null,8,[`change`,`data`,`model-value`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var A=b(O,[[`render`,k]]);function j(){return{codeHtml:`<a-checkbox
  v-model="model"
  :collapsible="true"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-checkbox>
<a-checkbox
  v-model="model"
  :collapsible="true"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-checkbox>
<a-checkbox
  v-model="model"
  :collapsible="true"
  :data="data"
  :is-collapsed="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-checkbox>
<div>model: {{ model }}</div>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxCollapse",
  components: {
    ACheckbox,
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
    
    const toggleCollapse = ({ isCollapsed, id, props }) => {
      console.log(isCollapsed, id, props);
    };

    return {
      data,
      model,
      toggleCollapse,
    };
  },
};`}}var N={name:`PageCheckboxCollapse`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=j(),{codeJs:t}=M();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0),toggleCollapse:({isCollapsed:e,id:t,props:n})=>{console.log(e,t,n)}}}},P={class:`a_columns a_columns_count_12`},F={class:`a_column a_column_6 a_columns_count_12_touch`};function I(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_COLLAPSE_HEADER_`,description:`_A_UI_GROUP_COLLAPSE_DESCRIPTION_`,props:[`collapsible`,`is-collapsed`],emits:[`toggle-collapse`]},{default:u(()=>[i(`div`,P,[i(`div`,F,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,collapsible:!0,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,onToggleCollapse:e.toggleCollapse},null,8,[`modelValue`,`data`,`onToggleCollapse`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,collapsible:!0,data:e.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`,onToggleCollapse:e.toggleCollapse},null,8,[`modelValue`,`data`,`onToggleCollapse`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,collapsible:!0,data:e.data,"is-collapsed":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`,onToggleCollapse:e.toggleCollapse},null,8,[`modelValue`,`data`,`onToggleCollapse`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var L=b(N,[[`render`,I]]);function R(){return{codeHtml:`<a-checkbox
  v-model="model1"
  :data-extra="dataExtraArrayOfArrays"
  :data="data"
  :search="true"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
></a-checkbox>
<div>model1: {{ model1 }}</div>
<a-checkbox
  v-model="model2"
  :data-extra="dataExtraArrayOfObjects"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  key-group="group"
  label="Grouped data extra (Array of Objects)"
></a-checkbox>
<div>model2: {{ model2 }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxDataExtra",
  components: {
    ACheckbox,
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
};`}}var B={name:`PageCheckboxDataExtra`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=R(),{codeJs:t}=z();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],dataExtraArrayOfArrays:[[`extra_id_1`,`Extra 1`],[`extra_id_2`,`Extra 2`]],dataExtraArrayOfObjects:[{label:`Extra 1`,id:`extra_id_1`,group:`Recommended`},{label:`Extra 2`,id:`extra_id_2`,group:`Other`},{label:`Extra 3`,id:`extra_id_3`,group:`Other`}],model1:f(void 0),model2:f(void 0)}}},V={class:`a_columns a_columns_count_12`},H={class:`a_column a_column_6 a_columns_count_12_touch`};function U(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_DATA_EXTRA_HEADER_`,description:`_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:u(()=>[i(`div`,V,[i(`div`,H,[r(f,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"data-extra":e.dataExtraArrayOfArrays,data:e.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Data extra (Array of Arrays)`},null,8,[`modelValue`,`data-extra`,`data`]),i(`div`,null,`model1: `+d(e.model1),1),r(f,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,"data-extra":e.dataExtraArrayOfObjects,data:e.data,search:!0,"key-id":`id`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra (Array of Objects)`},null,8,[`modelValue`,`data-extra`,`data`]),i(`div`,null,`model2: `+d(e.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var W=b(B,[[`render`,U]]);function ee(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Checkbox"
></a-checkbox>
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxError",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref([]);
    
    return {
      data,
      model,
    };
  },
};`}}var G={name:`PageCheckboxError`,components:{ACheckbox:_,AlohaExample:m},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=f([]),{codeHtml:n}=ee(),{codeJs:r}=te();return{codeHtml:n,codeJs:r,data:e,model:t}}};function K(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:u(()=>[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,errors:`Aloha`,label:`Checkbox`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var q=b(G,[[`render`,K]]);function J(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  key-id="id"
  key-label="label"
  label="Radio1"
  @focusin="focusin1"
  @focusout="focusout1"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :is-button-group="true"
  :search="true"
  class="a_mt_5"
  key-id="id"
  key-label="label"
  label="Radio2"
  class-button-group-default="a_btn a_btn_outline_secondary a_text_nowrap"
  @focusin="focusin2"
  @focusout="focusout2"
></a-checkbox>`}}function Y(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxFocusBlur",
  components: {
    ACheckbox,
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
    
    const focusin1 = ({ event, props }) => {
      console.log("focusin1", event, props);
    };

    const focusin2 = ({ event, props }) => {
      console.log("focusin2", event, props);
    };
    const focusout1 = ({ event, props }) => {
      console.log("focusout1", event, props);
    };

    const focusout2 = ({ event, props }) => {
      console.log("focusout2", event, props);
    };
    
    return {
      data,
      focusin1,
      focusin2,
      focusout1,
      focusout2,
      model,
    };
  },
};`}}var X={name:`PageCheckboxFocusBlur`,components:{AlohaExample:m,ACheckbox:_},setup(){let e=[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],t=f(void 0),n=({event:e,props:t})=>{console.log(`focusin1`,e,t)},r=({event:e,props:t})=>{console.log(`focusin2`,e,t)},i=({event:e,props:t})=>{console.log(`focusout1`,e,t)},a=({event:e,props:t})=>{console.log(`focusout2`,e,t)},{codeHtml:o}=J(),{codeJs:s}=Y();return{codeHtml:o,codeJs:s,data:e,focusin1:n,focusin2:r,focusout1:i,focusout2:a,model:t}}};function Z(e,t,n,i,o,s){let c=p(`a-checkbox`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_FOCUS_BLUR_HEADER_`,description:`_A_UI_GROUP_FOCUS_BLUR_DESCRIPTION_`,emits:[`focusin`,`focusout`]},{default:u(()=>[r(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],search:!0,"key-id":`id`,"key-label":`label`,label:`Radio1`,onFocusin:e.focusin1,onFocusout:e.focusout1},null,8,[`modelValue`,`data`,`onFocusin`,`onFocusout`]),r(c,{class:`a_mt_5`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"is-button-group":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Radio2`,"class-button-group-default":`a_btn a_btn_outline_secondary a_text_nowrap`,onFocusin:e.focusin2,onFocusout:e.focusout2},null,8,[`modelValue`,`data`,`onFocusin`,`onFocusout`])]),_:1},8,[`code-html`,`code-js`])}var Q=b(X,[[`render`,Z]]);function ne(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="key-group"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :key-group-label-callback="onGroupLabelCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="key-group + key-group-callback"
></a-checkbox>
<div>model: {{ model }}</div>`}}function re(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxGroup",
  components: {
    ACheckbox,
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
    
    const onGroupLabelCallback = ({ group, item }) => {
      if (group === "_not_grouped") {
        return "---";
      }

      if (group === "Alex") {
        return \`-\${ group }-\`;
      }

      return group;
    };

    return {
      data,
      model,
      onGroupLabelCallback,
    };
  },
};`}}var ie={name:`PageCheckboxGroup`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=ne(),{codeJs:t}=re();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0),onGroupLabelCallback:({group:e,item:t})=>e===`_not_grouped`?`---`:e===`Alex`?`-${e}-`:e}}},ae={class:`a_columns a_columns_count_12`},oe={class:`a_column a_column_6 a_columns_count_12_touch`};function se(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_GROUP_HEADER_`,description:`_A_UI_GROUP_GROUP_DESCRIPTION_`,props:[`key-group`,`key-group-label-callback`]},{default:u(()=>[i(`div`,ae,[i(`div`,oe,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`key-group`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"key-group-label-callback":e.onGroupLabelCallback,"key-id":`id`,"key-label":`label`,label:`key-group + key-group-callback`},null,8,[`modelValue`,`data`,`key-group-label-callback`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ce=b(ie,[[`render`,se]]);function le(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :has-border="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :has-border="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ue(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxHasBorder",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var de={name:`PageCheckboxHasBorder`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=le(),{codeJs:t}=ue();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:f(void 0)}}},fe={class:`a_columns a_columns_count_12`},pe={class:`a_column a_column_6 a_columns_count_12_touch`};function me(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HAS_BORDER_HEADER_`,description:`_A_UI_GROUP_HAS_BORDER_DESCRIPTION_`,props:`has-border`},{default:u(()=>[i(`div`,fe,[i(`div`,pe,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"has-border":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"has-border":!1,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var he=b(de,[[`render`,me]]);function ge(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :has-control-checkbox="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :has-control-checkbox="true"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="model1"
  :data="data"
  :has-control-checkbox="true"
  :inline="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha inline"
></a-checkbox>
<div>model1: {{ model1 }}</div>`}}function _e(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxHasControlCheckbox",
  components: {
    ACheckbox,
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
    const model1 = ref(undefined);

    return {
      data,
      model,
      model1,
    };
  },
};`}}var ve={name:`PageCheckboxHasControlCheckbox`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=ge(),{codeJs:t}=_e();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0),model1:f(void 0)}}},ye={class:`a_columns a_columns_count_12`},be={class:`a_column a_column_6 a_columns_count_12_touch`};function xe(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CHECKBOX_GROUP_HAS_CONTROL_CHECKBOX_HEADER_`,description:`_A_CHECKBOX_GROUP_HAS_CONTROL_CHECKBOX_DESCRIPTION_`,props:`has-control-checkbox`},{default:u(()=>[i(`div`,ye,[i(`div`,be,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"has-control-checkbox":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"has-control-checkbox":!0,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model1,"onUpdate:modelValue":t[2]||=t=>e.model1=t,data:e.data,"has-control-checkbox":!0,inline:!0,"key-id":`id`,"key-label":`label`,label:`Aloha inline`},null,8,[`modelValue`,`data`]),i(`div`,null,`model1: `+d(e.model1),1)])])]),_:1},8,[`code-html`,`code-js`])}var Se=b(ve,[[`render`,xe]]);function Ce(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Checkbox"
></a-checkbox>
<div>model: {{ model }}</div>`}}function we(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxHelpText",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref([]);
    
    return {
      data,
      model,
    };
  },
};`}}var Te={name:`PageCheckboxHelpText`,components:{ACheckbox:_,AlohaExample:m},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=f([]),{codeHtml:n}=Ce(),{codeJs:r}=we();return{codeHtml:n,codeJs:r,data:e,model:t}}};function Ee(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:u(()=>[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"help-text":`Aloha`,label:`Checkbox`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var De=b(Te,[[`render`,Ee]]);function Oe(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :inline="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :inline="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ke(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxInline",
  components: {
    ACheckbox,
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
};`}}var Ae={name:`PageCheckboxInline`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Oe(),{codeJs:t}=ke();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0)}}},je={class:`a_columns a_columns_count_12`},Me={class:`a_column a_column_6 a_columns_count_12_touch`};function Ne(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_INLINE_HEADER_`,description:`_A_UI_GROUP_INLINE_DESCRIPTION_`,props:`inline`},{default:u(()=>[i(`div`,je,[i(`div`,Me,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,inline:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,inline:!0,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Pe=b(Ae,[[`render`,Ne]]);function Fe(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :is-button-group="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :is-button-group="true"
  class="a_mt_3"
  class-button-group-default="a_btn a_btn_outline_secondary a_text_nowrap"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :is-button-group="true"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Ie(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxIsButtonGroup",
  components: {
    ACheckbox,
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
};`}}var Le={name:`PageCheckboxIsButtonGroup`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Fe(),{codeJs:t}=Ie();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0)}}};function Re(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_`,description:`_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_`,props:[`is-button-group`,`class-button-group-default`]},{default:u(()=>[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"is-button-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"is-button-group":!0,"class-button-group-default":`a_btn a_btn_outline_secondary a_text_nowrap`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,data:e.data,"is-button-group":!0,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var ze=b(Le,[[`render`,Re]]);function Be(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Ve(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxIsDataSimpleArray",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      "Aloha 1",
      "Aloha 2",
      "Aloha 3",
      "Aloha 4",
      "Aloha 5",
      "Aloha 6",
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var He={name:`PageCheckboxIsDataSimpleArray`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Be(),{codeJs:t}=Ve();return{codeHtml:e,codeJs:t,data:[`Aloha 1`,`Aloha 2`,`Aloha 3`,`Aloha 4`,`Aloha 5`,`Aloha 6`],model:f(void 0)}}},Ue={class:`a_columns a_columns_count_12`},We={class:`a_column a_column_6 a_columns_count_12_touch`};function Ge(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_`,description:`_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,props:`is-data-simple-array`},{default:u(()=>[i(`div`,Ue,[i(`div`,We,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"is-data-simple-array":!0,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ke=b(He,[[`render`,Ge]]);function qe(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :is-width-auto="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :is-width-auto="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Je(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxIsWidthAuto",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var Ye={name:`PageCheckboxIsWidthAuto`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=qe(),{codeJs:t}=Je();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:f(void 0)}}},Xe={class:`a_columns a_columns_count_12`},Ze={class:`a_column a_column_6 a_columns_count_12_touch`};function Qe(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_`,description:`_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_`,props:`is-width-auto`},{default:u(()=>[i(`div`,Xe,[i(`div`,Ze,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"is-width-auto":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"is-width-auto":!1,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var $e=b(Ye,[[`render`,Qe]]);function et(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  key-disabled="disabled"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-disabled="disabled"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function tt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxKeyDisabled",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
};`}}var nt={name:`PageCheckboxKeyDisabled`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=et(),{codeJs:t}=tt();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`,disabled:!0},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0)}}},rt={class:`a_columns a_columns_count_12`},it={class:`a_column a_column_6 a_columns_count_12_touch`};function at(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_KEY_DISABLED_HEADER_`,description:`_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_`,props:`key-disabled`},{default:u(()=>[i(`div`,rt,[i(`div`,it,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"key-disabled":`disabled`,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-disabled":`disabled`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ot=b(nt,[[`render`,at]]);function st(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ct(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxKeyLabelCallback",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
    const model = ref(undefined);
    
    const onKeyLabelCallback = ({ item }) => {
      return \`--\${ item.label }--\`;
    };

    return {
      data,
      model,
      onKeyLabelCallback,
    };
  },
};`}}var lt={name:`PageCheckboxKeyLabelCallback`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=st(),{codeJs:t}=ct();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:f(void 0),onKeyLabelCallback:({item:e})=>`--${e.label}--`}}},ut={class:`a_columns a_columns_count_12`},dt={class:`a_column a_column_6 a_columns_count_12_touch`};function ft(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_`,description:`_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_`,props:`key-label-callback`},{default:u(()=>[i(`div`,ut,[i(`div`,dt,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-label-callback":e.onKeyLabelCallback,"key-id":`id`,label:`Aloha`},null,8,[`modelValue`,`data`,`key-label-callback`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var pt=b(lt,[[`render`,ft]]);function mt(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  key-title="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :key-title-callback="onKeyTitleCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ht(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxKeyTitle",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
    const model = ref(undefined);
    
    const onKeyLabelCallback = ({ item }) => {
      return \`--\${ item.label }--\`;
    };

    return {
      data,
      model,
      onKeyLabelCallback,
    };
  },
};`}}var gt={name:`PageCheckboxKeyTitle`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=mt(),{codeJs:t}=ht();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:f(void 0),onKeyTitleCallback:({item:e})=>`--${e.label}--`}}},_t={class:`a_columns a_columns_count_12`},vt={class:`a_column a_column_6 a_columns_count_12_touch`};function yt(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_KEY_TITLE_HEADER_`,description:`_A_UI_GROUP_KEY_TITLE_DESCRIPTION_`,props:[`key-title`,`key-title-callback`]},{default:u(()=>[i(`div`,_t,[i(`div`,vt,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"key-title":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-title-callback":e.onKeyTitleCallback,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`,`key-title-callback`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var bt=b(gt,[[`render`,yt]]);function xt(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  label="Checkbox"
  label-description="Aloha"
></a-checkbox>`}}function St(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxLabelDescription",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref([]);
    
    return {
      data,
      model,
    };
  },
};`}}var Ct={name:`PageCheckboxLabelDescription`,components:{ACheckbox:_,AlohaExample:m},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=f([]),{codeHtml:n}=xt(),{codeJs:r}=St();return{codeHtml:n,codeJs:r,data:e,model:t}}};function wt(e,t,n,i,o,s){let c=p(`a-checkbox`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:u(()=>[r(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,label:`Checkbox`,"label-description":`Aloha`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var Tt=b(Ct,[[`render`,wt]]);function Et(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label-screen-reader="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Dt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxLabelScreenReader",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var Ot={name:`PageCheckboxLabelScreenReader`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Et(),{codeJs:t}=Dt();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:f(void 0)}}},kt={class:`a_columns a_columns_count_12`},At={class:`a_column a_column_6 a_columns_count_12_touch`};function jt(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:`label-screen-reader`},{default:u(()=>[i(`div`,kt,[i(`div`,At,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,"label-screen-reader":`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Mt=b(Ot,[[`render`,jt]]);function Nt(){return{codeHtml:`<a-checkbox
  :model-value="model1"
  :data="data"
  :readonly="true"
  label="Checkbox 1"
></a-checkbox>
<a-checkbox
  :model-value="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Checkbox 2"
></a-checkbox>
<a-checkbox
  :model-value="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Checkbox 3"
  readonly-default="-"
></a-checkbox>`}}function Pt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxReadonly",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref(["aloha_1", "aloha_4"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};`}}var Ft={name:`PageCheckboxReadonly`,components:{ACheckbox:_,AlohaExample:m},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=f([`aloha_1`,`aloha_4`]),n=f(void 0),{codeHtml:r}=Nt(),{codeJs:i}=Pt();return{codeHtml:r,codeJs:i,data:e,model1:t,model2:n}}};function It(e,t,n,i,o,s){let c=p(`a-checkbox`),d=p(`aloha-example`);return l(),a(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:u(()=>[r(c,{"model-value":e.model1,data:e.data,readonly:!0,label:`Checkbox 1`},null,8,[`model-value`,`data`]),r(c,{class:`a_mt_3`,"model-value":e.model2,data:e.data,readonly:!0,label:`Checkbox 2`},null,8,[`model-value`,`data`]),r(c,{class:`a_mt_3`,"model-value":e.model2,data:e.data,readonly:!0,"help-text":`Aloha`,label:`Checkbox 3`,"readonly-default":`-`},null,8,[`model-value`,`data`])]),_:1},8,[`code-html`,`code-js`])}var Lt=b(Ft,[[`render`,It]]);function Rt(){return{codeHtml:`<a-checkbox
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Checkbox with retrieve"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`}}function zt(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACheckbox,
} from "aloha-vue";

export default {
  name: "PageCheckboxRetrieve",
  components: {
    ACheckbox,
  },
  setup() {
    const model1 = ref(["aloha_2", "aloha_10", "aloha_11"]);
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;
    const urlRetrieve = \`\${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json\`;

    return {
      model1,
      url,
      urlRetrieve,
    };
  },
};`}}var Bt={name:`PageCheckboxRetrieve`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Rt(),{codeJs:t}=zt();return{codeHtml:e,codeJs:t,model1:f([`aloha_2`,`aloha_10`,`aloha_11`]),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}};function Vt(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`Retrieve invalid entries`,description:`Loads checkbox options from local JSON files and renders missing selected values inside a separate invalid entries group.`,props:[`url`,`url-retrieve`]},{default:u(()=>[r(f,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"key-id":`id`,"key-label":`label`,label:`Checkbox with retrieve`,url:e.url,"url-retrieve":e.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),i(`div`,null,`model1: `+d(e.model1),1)]),_:1},8,[`code-html`,`code-js`])}var Ht=b(Bt,[[`render`,Vt]]);function Ut(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Wt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxSearch",
  components: {
    ACheckbox,
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
};`}}var Gt={name:`PageCheckboxSearch`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Ut(),{codeJs:t}=Wt();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0)}}},Kt={class:`a_columns a_columns_count_12`},qt={class:`a_column a_column_6 a_columns_count_12_touch`};function Jt(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SEARCH_HEADER_`,description:`_A_UI_GROUP_SEARCH_DESCRIPTION_`,props:`search`},{default:u(()=>[i(`div`,Kt,[i(`div`,qt,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],search:!0,"search-in-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Yt=b(Gt,[[`render`,Jt]]);function Xt(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Zt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxSearchTextInHtml",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        label: "<span>Aloha</span> <strong>1</strong>",
        id: "aloha_0",
        aloha: "",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>2</strong>",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>3</strong>",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>4</strong>",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>5</strong>",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>6</strong>",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>7</strong>",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>8</strong>",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>9</strong>",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
    ];
    const model = ref("aloha_7");

    return {
      data,
      model,
    };
  },
};`}}var Qt={name:`PageCheckboxSearchTextInHtml`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Xt(),{codeJs:t}=Zt();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],model:f([`aloha_7`])}}},$t={class:`a_columns a_columns_count_12`},en={class:`a_column a_column_6 a_columns_count_12_touch`};function tn(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`]},{default:u(()=>[i(`div`,$t,[i(`div`,en,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var nn=b(Qt,[[`render`,tn]]);function rn(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  key-disabled="isDisabled"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="modelSearch"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  :search="true"
  class="a_mt_3"
  key-disabled="isDisabled"
  key-id="id"
  key-label="label"
  label="Aloha (search)"
></a-checkbox>
<div>modelSearch: {{ modelSearch }}</div>`}}function an(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ACheckbox,
} from "aloha-vue";

export default {
  name: "PageCheckboxSelectAll",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2 (disabled)",
        id: "aloha_2",
        isDisabled: true,
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
    const model = ref(["aloha_2"]);
    const modelSearch = ref(["aloha_2"]);

    return {
      data,
      model,
      modelSearch,
    };
  },
};`}}var on={name:`PageCheckboxSelectAll`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=rn(),{codeJs:t}=an();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2 (disabled)`,id:`aloha_2`,isDisabled:!0},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`}],model:f([`aloha_2`]),modelSearch:f([`aloha_2`])}}},sn={class:`a_columns a_columns_count_12`},cn={class:`a_column a_column_6 a_columns_count_12_touch`};function ln(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_CHECKBOX_GROUP_SELECT_ALL_HEADER_`,description:`_A_CHECKBOX_GROUP_SELECT_ALL_DESCRIPTION_`,props:`is-select-all`},{default:u(()=>[i(`div`,sn,[i(`div`,cn,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"is-deselect-all":!0,"is-select-all":!0,"key-disabled":`isDisabled`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1),r(f,{class:`a_mt_3`,modelValue:e.modelSearch,"onUpdate:modelValue":t[1]||=t=>e.modelSearch=t,data:e.data,"is-deselect-all":!0,"is-select-all":!0,search:!0,"key-disabled":`isDisabled`,"key-id":`id`,"key-label":`label`,label:`Aloha (search)`},null,8,[`modelValue`,`data`]),i(`div`,null,`modelSearch: `+d(e.modelSearch),1)])])]),_:1},8,[`code-html`,`code-js`])}var un=b(on,[[`render`,ln]]);function dn(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :sort-order="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order="asc"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order="desc"
></a-checkbox>
<div>model: {{ model }}</div>`}}function fn(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxSortOrder",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        label: "Aloha 8",
        id: "aloha_8",
      },
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 2",
        id: "aloha_2",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
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
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 7",
        id: "aloha_7",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var pn={name:`PageCheckboxSortOrder`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=dn(),{codeJs:t}=fn();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 8`,id:`aloha_8`},{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 7`,id:`aloha_7`}],model:f(void 0)}}},mn={class:`a_columns a_columns_count_12`},hn={class:`a_column a_column_6 a_columns_count_12_touch`};function gn(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SORT_ORDER_HEADER_`,description:`_A_UI_GROUP_SORT_ORDER_DESCRIPTION_`,props:`sort-order`},{default:u(()=>[i(`div`,mn,[i(`div`,hn,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"sort-order":void 0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order":`asc`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,data:e.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order":`desc`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var _n=b(pn,[[`render`,gn]]);function vn(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :sort-order-group="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="asc"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="desc"
></a-checkbox>
<div>model: {{ model }}</div>`}}function yn(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxSortOrderGroup",
  components: {
    ACheckbox,
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
};`}}var bn={name:`PageCheckboxSortOrderGroup`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=vn(),{codeJs:t}=yn();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:f(void 0)}}},xn={class:`a_columns a_columns_count_12`},Sn={class:`a_column a_column_6 a_columns_count_12_touch`};function Cn(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_`,description:`_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_`,props:[`sort-order-group`]},{default:u(()=>[i(`div`,xn,[i(`div`,Sn,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"sort-order-group":void 0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order-group":`asc`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[2]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order-group":`desc`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var wn=b(bn,[[`render`,Cn]]);function Tn(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function En(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxTranslateData",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        label: "_A_UI_ELEMENT_0_",
        id: "aloha_0",
      },
      {
        label: "_A_UI_ELEMENT_1_",
        id: "aloha_1",
      },
      {
        label: "_A_UI_ELEMENT_2_",
        id: "aloha_2",
      },
      {
        label: "_A_UI_ELEMENT_3_",
        id: "aloha_3",
      },
      {
        label: "_A_UI_ELEMENT_4_",
        id: "aloha_4",
      },
      {
        label: "_A_UI_ELEMENT_5_",
        id: "aloha_5",
      },
      {
        label: "_A_UI_ELEMENT_6_",
        id: "aloha_6",
      },
      {
        label: "_A_UI_ELEMENT_7_",
        id: "aloha_7",
      },
      {
        label: "_A_UI_ELEMENT_8_",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var Dn={name:`PageCheckboxTranslateData`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Tn(),{codeJs:t}=En();return{codeHtml:e,codeJs:t,data:[{label:`_A_UI_ELEMENT_0_`,id:`aloha_0`},{label:`_A_UI_ELEMENT_1_`,id:`aloha_1`},{label:`_A_UI_ELEMENT_2_`,id:`aloha_2`},{label:`_A_UI_ELEMENT_3_`,id:`aloha_3`},{label:`_A_UI_ELEMENT_4_`,id:`aloha_4`},{label:`_A_UI_ELEMENT_5_`,id:`aloha_5`},{label:`_A_UI_ELEMENT_6_`,id:`aloha_6`},{label:`_A_UI_ELEMENT_7_`,id:`aloha_7`},{label:`_A_UI_ELEMENT_8_`,id:`aloha_8`}],model:f(void 0)}}},On={class:`a_columns a_columns_count_12`},kn={class:`a_column a_column_6 a_columns_count_12_touch`};function An(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_TRANSLATE_DATA_HEADER_`,description:`_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_`,props:`translate-data`},{default:u(()=>[i(`div`,On,[i(`div`,kn,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var jn=b(Dn,[[`render`,An]]);function Mn(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  class-data-parent="a_list_columns a_list_columns_2"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  class-data-parent="a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Nn(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ACheckbox,
} from "aloha-vue";
    
export default {
  name: "PageCheckboxTwoColumns",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
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
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}var $={name:`PageCheckboxTwoColumns`,components:{ACheckbox:_,AlohaExample:m},setup(){let{codeHtml:e}=Mn(),{codeJs:t}=Nn();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:f(void 0)}}},Pn={class:`a_columns a_columns_count_12`},Fn={class:`a_column a_column_6 a_columns_count_12_touch`};function In(e,t,n,o,s,c){let f=p(`a-checkbox`),m=p(`aloha-example`);return l(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_TWO_COLUMNS_HEADER_`,description:`_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_`,props:`class-data-parent`},{default:u(()=>[i(`div`,Pn,[i(`div`,Fn,[r(f,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"class-data-parent":`a_list_columns a_list_columns_2`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),r(f,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"class-data-parent":`a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+d(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ln=b($,[[`render`,In]]);function Rn(){return{codeHtmlBasic:`<a-select
  v-model="templateDataBasic.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-checkbox
  v-model="modelBasic"
  :url="urlBasic"
  :url-template-data="templateDataBasic"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
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
<a-checkbox
  v-model="modelReactive"
  :url="urlReactive"
  :url-template-data="templateDataReactive"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
/>
<div>model: {{ modelReactive }}</div>`}}function zn(){return{codeJsBasic:`import {
  ref,
} from "vue";

import {
  ACheckbox,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ACheckbox,
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
  ACheckbox,
  AInput,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ACheckbox,
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
};`}}var Bn={name:`PageCheckboxUrlTemplate`,components:{ACheckbox:_,AInput:y,ASelect:h,AlohaExample:m},setup(){let{codeHtmlBasic:e,codeHtmlReactive:t}=Rn(),{codeJsBasic:n,codeJsReactive:r}=zn(),i=[{id:`base`,label:`_A_UI_URL_TEMPLATE_SOURCE_FIRST_`},{id:`retrieve`,label:`_A_UI_URL_TEMPLATE_SOURCE_SECOND_`}],a=f(void 0),o=f({file:`base`});return{codeHtmlBasic:e,codeHtmlReactive:t,codeJsBasic:n,codeJsReactive:r,modelBasic:a,modelReactive:f(void 0),sources:i,templateDataBasic:o,templateDataReactive:f({source:{file:`base`},note:``}),urlBasic:`/aloha/assets/mock/select-{{ file }}.json`,urlReactive:`/aloha/assets/mock/select-{{ source.file }}.json`}}};function Vn(e,t,n,a,s,f){let m=p(`a-select`),h=p(`a-checkbox`),g=p(`aloha-example`),_=p(`a-input`);return l(),c(o,null,[r(g,{"code-html":e.codeHtmlBasic,"code-js":e.codeJsBasic,header:`_A_UI_URL_TEMPLATE_BASIC_HEADER_`,description:`_A_UI_URL_TEMPLATE_BASIC_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:u(()=>[r(m,{modelValue:e.templateDataBasic.file,"onUpdate:modelValue":t[0]||=t=>e.templateDataBasic.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),r(h,{modelValue:e.modelBasic,"onUpdate:modelValue":t[1]||=t=>e.modelBasic=t,url:e.urlBasic,"url-template-data":e.templateDataBasic,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`},null,8,[`modelValue`,`url`,`url-template-data`]),i(`div`,null,`model: `+d(e.modelBasic),1)]),_:1},8,[`code-html`,`code-js`]),r(g,{"code-html":e.codeHtmlReactive,"code-js":e.codeJsReactive,header:`_A_UI_URL_TEMPLATE_REACTIVE_HEADER_`,description:`_A_UI_URL_TEMPLATE_REACTIVE_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:u(()=>[r(m,{modelValue:e.templateDataReactive.source.file,"onUpdate:modelValue":t[2]||=t=>e.templateDataReactive.source.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),r(_,{modelValue:e.templateDataReactive.note,"onUpdate:modelValue":t[3]||=t=>e.templateDataReactive.note=t,label:`_A_UI_URL_TEMPLATE_NOTE_`},null,8,[`modelValue`]),r(h,{modelValue:e.modelReactive,"onUpdate:modelValue":t[4]||=t=>e.modelReactive=t,url:e.urlReactive,"url-template-data":e.templateDataReactive,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`},null,8,[`modelValue`,`url`,`url-template-data`]),i(`div`,null,`model: `+d(e.modelReactive),1)]),_:1},8,[`code-html`,`code-js`])],64)}var Hn=b(Bn,[[`render`,Vn]]);function Un(){return{dataEvents:[{name:`focusin`,description:`_A_UI_EVENTS_FOCUSIN_DESCRIPTION_`,type:`Function`},{name:`focusout`,description:`_A_UI_EVENTS_FOCUSOUT_DESCRIPTION_`,type:`Function`},{name:`on-search-outside`,description:`_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Function`},{name:`update-data`,description:`_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_`,type:`Function`},{name:`toggle-collapse`,description:`_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_`,type:`Function`},{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function Wn(){let e=s(()=>g({placeholder:`_A_CHECKBOX_COMPONENT_NAME_`}));return{pageTitle:s(()=>`ACheckbox${e.value?` (${e.value})`:``}`)}}function Gn(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`api-save-id`,description:`_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`attributes-fieldset`,description:`_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`class-button-group-default`,description:`_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_`,type:`String / Object / Array`,default:`a_btn a_btn_outline_primary`,required:!1},{name:`class-data-parent`,description:`_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`collapsible`,description:`_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`data`,description:`_A_UI_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`data-extra`,description:`_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-border`,description:`_A_UI_PROPS_HAS_BORDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`has-control-checkbox`,description:`_A_CHECKBOX_PROPS_HAS_CONTROL_CHECKBOX_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_checkbox_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`inline`,description:`_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-button-group`,description:`_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-collapsed`,description:`_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-data-simple-array`,description:`_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-deselect-all`,description:`_A_CHECKBOX_PROPS_IS_DESELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-select-all`,description:`_A_CHECKBOX_PROPS_IS_SELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-width-auto`,description:`_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`key-disabled`,description:`_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-disabled-callback`,description:`_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-group`,description:`_A_UI_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-id`,description:`_A_UI_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`value`,required:!1},{name:`key-label`,description:`_A_UI_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-label-callback`,description:`_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-title`,description:`_A_UI_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-title-callback`,description:`_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`loading`,description:`_A_UI_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search`,description:`_A_UI_PROPS_SEARCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api`,description:`_A_UI_PROPS_SEARCH_API_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api-key`,description:`_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`search-in-group`,description:`_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-outside`,description:`_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-text-in-html`,description:`_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-timeout`,description:`_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`slot-append-name`,description:`_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`sort-order`,description:`_A_UI_PROPS_SORT_ORDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`sort-order-group`,description:`_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`text-deselect-all`,description:`_A_CHECKBOX_PROPS_TEXT_DESELECT_ALL_DESCRIPTION_`,type:`String`,default:`_A_CHECKBOX_DESELECT_ALL_`,required:!1},{name:`text-select-all`,description:`_A_CHECKBOX_PROPS_TEXT_SELECT_ALL_DESCRIPTION_`,type:`String`,default:`_A_CHECKBOX_SELECT_ALL_`,required:!1},{name:`texts`,description:`_A_CHECKBOX_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_CHECKBOX_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_CHECKBOX_SEARCH_",
      })`,required:!1},{name:`translate-data`,description:`_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`url`,description:`_A_UI_PROPS_URL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-params`,description:`_A_UI_PROPS_URL_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-template-data`,description:`_A_UI_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function Kn(){return{dataTranslate:[`_A_CHECKBOX_DESELECT_ALL_`,`_A_CHECKBOX_HAS_NOT_ELEMENTS_WITH_SEARCH_`,`_A_CHECKBOX_SEARCH_`,`_A_CHECKBOX_SELECT_ALL_`]}}var qn={name:`PageCheckbox`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:v,PageCheckboxBasic:T,PageCheckboxChange:A,PageCheckboxCollapse:L,PageCheckboxDataExtra:W,PageCheckboxError:q,PageCheckboxFocusBlur:Q,PageCheckboxGroup:ce,PageCheckboxHasBorder:he,PageCheckboxHasControlCheckbox:Se,PageCheckboxHelpText:De,PageCheckboxInline:Pe,PageCheckboxIsButtonGroup:ze,PageCheckboxIsDataSimpleArray:Ke,PageCheckboxIsWidthAuto:$e,PageCheckboxKeyDisabled:ot,PageCheckboxKeyLabelCallback:pt,PageCheckboxKeyTitle:bt,PageCheckboxLabelDescription:Tt,PageCheckboxLabelScreenReader:Mt,PageCheckboxReadonly:Lt,PageCheckboxRetrieve:Ht,PageCheckboxUrlTemplate:Hn,PageCheckboxSearch:Yt,PageCheckboxSearchTextInHtml:nn,PageCheckboxSelectAll:un,PageCheckboxSortOrder:_n,PageCheckboxSortOrderGroup:wn,PageCheckboxTranslateData:jn,PageCheckboxTwoColumns:Ln},setup(){let{pageTitle:e}=Wn(),{dataProps:t}=Gn(),{dataTranslate:n}=Kn(),{dataEvents:r}=Un();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function Jn(e,t,n,i,o,s){let c=p(`a-translation`),d=p(`page-checkbox-basic`),f=p(`page-checkbox-change`),m=p(`page-checkbox-help-text`),h=p(`page-checkbox-error`),g=p(`page-checkbox-label-description`),_=p(`page-checkbox-label-screen-reader`),v=p(`page-checkbox-group`),y=p(`page-checkbox-retrieve`),b=p(`page-checkbox-url-template`),x=p(`page-checkbox-search`),S=p(`page-checkbox-search-text-in-html`),C=p(`page-checkbox-select-all`),w=p(`page-checkbox-key-disabled`),T=p(`page-checkbox-translate-data`),E=p(`page-checkbox-is-button-group`),D=p(`page-checkbox-collapse`),O=p(`page-checkbox-data-extra`),k=p(`page-checkbox-inline`),A=p(`page-checkbox-has-control-checkbox`),j=p(`page-checkbox-two-columns`),M=p(`page-checkbox-has-border`),N=p(`page-checkbox-is-data-simple-array`),P=p(`page-checkbox-is-width-auto`),F=p(`page-checkbox-key-label-callback`),I=p(`page-checkbox-key-title`),L=p(`page-checkbox-sort-order`),R=p(`page-checkbox-sort-order-group`),z=p(`page-checkbox-focus-blur`),B=p(`page-checkbox-readonly`),V=p(`aloha-table-props`),H=p(`aloha-table-translate`),U=p(`aloha-table-css-vars`),W=p(`aloha-page`);return l(),a(W,{"page-title":e.pageTitle},{body:u(()=>[r(c,{tag:`p`,html:`_A_CHECKBOX_COMPONENT_DESCRIPTION_`}),r(d),r(f),r(m),r(h),r(g),r(_),r(v),r(y),r(b),r(x),r(S),r(C),r(w),r(T),r(E),r(D),r(O),r(k),r(A),r(j),r(M),r(N),r(P),r(F),r(I),r(L),r(R),r(z),r(B),r(V,{data:e.dataProps},null,8,[`data`]),r(V,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),r(H,{data:e.dataTranslate},null,8,[`data`]),r(U,{files:`utils/checkbox_radio`})]),_:1},8,[`page-title`])}var Yn=b(qn,[[`render`,Jn]]);export{Yn as default};