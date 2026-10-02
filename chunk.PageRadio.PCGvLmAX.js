import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{V as l,Z as ee,kt as u,t as d}from"./bundle.index.CLtYDDlb.js";import{n as f,t as p}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as m}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as h}from"./chunk.AlohaTableTranslate.SVFm06b7.js";function g(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function _(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioBasic",
  components: {
    ARadio,
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
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};`}}var v={name:`PageRadioBasic`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i(void 0),{codeHtml:n}=g(),{codeJs:r}=_();return{codeHtml:n,codeJs:r,data:e,model:t}}};function y(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`,`model-value`,`label`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var b=d(v,[[`render`,y]]);function x(){return{codeHtml:`<a-radio
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioChange",
  components: {
    ARadio,
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
    const model = ref(undefined);
    
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
};`}}var C={name:`PageRadioChange`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i(void 0),n=({model:e,id:n,props:r})=>{t.value=e,console.log(n,r)},{codeHtml:r}=x(),{codeJs:a}=S();return{changeModel:n,codeHtml:r,codeJs:a,data:e,model:t}}};function w(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(f,{change:t.changeModel,data:t.data,"model-value":t.model,label:`Aloha`},null,8,[`change`,`data`,`model-value`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=d(C,[[`render`,w]]);function E(){return{codeHtml:`<a-radio
  v-model="model"
  :collapsible="true"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-radio>
<a-radio
  v-model="model"
  :collapsible="true"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-radio>
<a-radio
  v-model="model"
  :collapsible="true"
  :data="data"
  :is-collapsed="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  @toggle-collapse="toggleCollapse"
></a-radio>
<div>model: {{ model }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioCollapse",
  components: {
    ARadio,
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
};`}}var O={name:`PageRadioCollapse`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=E(),{codeJs:t}=D();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0),toggleCollapse:({isCollapsed:e,id:t,props:n})=>{console.log(e,t,n)}}}},k={class:`a_columns a_columns_count_12`},A={class:`a_column a_column_6 a_columns_count_12_touch`};function j(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_COLLAPSE_HEADER_`,description:`_A_UI_GROUP_COLLAPSE_DESCRIPTION_`,props:[`collapsible`,`is-collapsed`],emits:[`toggle-collapse`]},{default:o(()=>[s(`div`,k,[s(`div`,A,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,collapsible:!0,data:t.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,onToggleCollapse:t.toggleCollapse},null,8,[`modelValue`,`data`,`onToggleCollapse`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,collapsible:!0,data:t.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`,onToggleCollapse:t.toggleCollapse},null,8,[`modelValue`,`data`,`onToggleCollapse`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,collapsible:!0,data:t.data,"is-collapsed":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`,onToggleCollapse:t.toggleCollapse},null,8,[`modelValue`,`data`,`onToggleCollapse`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var M=d(O,[[`render`,j]]);function N(){return{codeHtml:`<a-radio
  v-model="model1"
  :data-extra="dataExtraArrayOfArrays"
  :data="data"
  :search="true"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
></a-radio>
<div>model1: {{ model1 }}</div>
<a-radio
  v-model="model2"
  :data-extra="dataExtraArrayOfObjects"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  key-group="group"
  label="Grouped data extra (Array of Objects)"
></a-radio>
<div>model2: {{ model2 }}</div>`}}function P(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioDataExtra",
  components: {
    ARadio,
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
};`}}var F={name:`PageRadioDataExtra`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=N(),{codeJs:t}=P();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],dataExtraArrayOfArrays:[[`extra_id_1`,`Extra 1`],[`extra_id_2`,`Extra 2`]],dataExtraArrayOfObjects:[{label:`Extra 1`,id:`extra_id_1`,group:`Recommended`},{label:`Extra 2`,id:`extra_id_2`,group:`Other`},{label:`Extra 3`,id:`extra_id_3`,group:`Other`}],model1:i(void 0),model2:i(void 0)}}},I={class:`a_columns a_columns_count_12`},L={class:`a_column a_column_6 a_columns_count_12_touch`};function R(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_DATA_EXTRA_HEADER_`,description:`_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:o(()=>[s(`div`,I,[s(`div`,L,[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"data-extra":t.dataExtraArrayOfArrays,data:t.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Data extra (Array of Arrays)`},null,8,[`modelValue`,`data-extra`,`data`]),s(`div`,null,`model1: `+e(t.model1),1),a(f,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,"data-extra":t.dataExtraArrayOfObjects,data:t.data,search:!0,"key-id":`id`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra (Array of Objects)`},null,8,[`modelValue`,`data-extra`,`data`]),s(`div`,null,`model2: `+e(t.model2),1)])])]),_:1},8,[`code-html`,`code-js`])}var z=d(F,[[`render`,R]]);function B(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioError",
  components: {
    ARadio,
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
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};`}}var V={name:`PageRadioError`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i(void 0),{codeHtml:n}=B(),{codeJs:r}=te();return{codeHtml:n,codeJs:r,data:e,model:t}}};function H(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,errors:`Aloha`,label:`Radio`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var U=d(V,[[`render`,H]]);function W(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  key-id="id"
  key-label="label"
  label="Radio1"
  @focusin="focusin1"
  @focusout="focusout1"
></a-radio>
<a-radio
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
></a-radio>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioFocusBlur",
  components: {
    ARadio,
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
};`}}var K={name:`PageRadioFocusBlur`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],t=i(void 0),n=({event:e,props:t})=>{console.log(`focusin1`,e,t)},r=({event:e,props:t})=>{console.log(`focusin2`,e,t)},a=({event:e,props:t})=>{console.log(`focusout1`,e,t)},o=({event:e,props:t})=>{console.log(`focusout2`,e,t)},{codeHtml:s}=W(),{codeJs:c}=G();return{codeHtml:s,codeJs:c,data:e,focusin1:n,focusin2:r,focusout1:a,focusout2:o,model:t}}};function q(e,t,i,s,l,ee){let u=r(`a-radio`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_FOCUS_BLUR_HEADER_`,description:`_A_UI_GROUP_FOCUS_BLUR_DESCRIPTION_`,emits:[`focusin`,`focusout`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],search:!0,"key-id":`id`,"key-label":`label`,label:`Radio1`,onFocusin:e.focusin1,onFocusout:e.focusout1},null,8,[`modelValue`,`data`,`onFocusin`,`onFocusout`]),a(u,{class:`a_mt_5`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"is-button-group":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Radio2`,"class-button-group-default":`a_btn a_btn_outline_secondary a_text_nowrap`,onFocusin:e.focusin2,onFocusout:e.focusout2},null,8,[`modelValue`,`data`,`onFocusin`,`onFocusout`])]),_:1},8,[`code-html`,`code-js`])}var J=d(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="key-group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :key-group-label-callback="onGroupLabelCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="key-group + key-group-callback"
></a-radio>
<div>model: {{ model }}</div>`}}function X(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioGroup",
  components: {
    ARadio,
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
};`}}var Z={name:`PageRadioGroup`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=Y(),{codeJs:t}=X();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0),onGroupLabelCallback:({group:e,item:t})=>e===`_not_grouped`?`---`:e===`Alex`?`-${e}-`:e}}},Q={class:`a_columns a_columns_count_12`},ne={class:`a_column a_column_6 a_columns_count_12_touch`};function re(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_GROUP_HEADER_`,description:`_A_UI_GROUP_GROUP_DESCRIPTION_`,props:[`key-group`,`key-group-label-callback`]},{default:o(()=>[s(`div`,Q,[s(`div`,ne,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`key-group`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"key-group-label-callback":t.onGroupLabelCallback,"key-id":`id`,"key-label":`label`,label:`key-group + key-group-callback`},null,8,[`modelValue`,`data`,`key-group-label-callback`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ie=d(Z,[[`render`,re]]);function ae(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :has-border="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :has-border="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function oe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioHasBorder",
  components: {
    ARadio,
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
};`}}var se={name:`PageRadioHasBorder`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=ae(),{codeJs:t}=oe();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:i(void 0)}}},ce={class:`a_columns a_columns_count_12`},le={class:`a_column a_column_6 a_columns_count_12_touch`};function ue(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_HAS_BORDER_HEADER_`,description:`_A_UI_GROUP_HAS_BORDER_DESCRIPTION_`,props:`has-border`},{default:o(()=>[s(`div`,ce,[s(`div`,le,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"has-border":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"has-border":!1,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var de=d(se,[[`render`,ue]]);function fe(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function pe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioHelpText",
  components: {
    ARadio,
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
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};`}}var me={name:`PageRadioHelpText`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i(void 0),{codeHtml:n}=fe(),{codeJs:r}=pe();return{codeHtml:n,codeJs:r,data:e,model:t}}};function he(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"help-text":`Aloha`,label:`Radio`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var ge=d(me,[[`render`,he]]);function _e(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :inline="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :inline="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<div>model: {{ model }}</div>`}}function ve(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioInline",
  components: {
    ARadio,
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
};`}}var ye={name:`PageRadioInline`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=_e(),{codeJs:t}=ve();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0)}}},be={class:`a_columns a_columns_count_12`},xe={class:`a_column a_column_6 a_columns_count_12_touch`};function Se(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_INLINE_HEADER_`,description:`_A_UI_GROUP_INLINE_DESCRIPTION_`,props:`inline`},{default:o(()=>[s(`div`,be,[s(`div`,xe,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,inline:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,inline:!0,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ce=d(ye,[[`render`,Se]]);function we(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  class="a_mt_3"
  class-button-group-default="a_btn a_btn_outline_secondary a_text_nowrap"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Te(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioIsButtonGroup",
  components: {
    ARadio,
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
};`}}var Ee={name:`PageRadioIsButtonGroup`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=we(),{codeJs:t}=Te();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0)}}};function De(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_`,description:`_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_`,props:[`is-button-group`,`class-button-group-default`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"is-button-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"is-button-group":!0,"class-button-group-default":`a_btn a_btn_outline_secondary a_text_nowrap`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,data:t.data,"is-button-group":!0,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var Oe=d(Ee,[[`render`,De]]);function ke(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Ae(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioIsDataSimpleArray",
  components: {
    ARadio,
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
};`}}var je={name:`PageRadioIsDataSimpleArray`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=ke(),{codeJs:t}=Ae();return{codeHtml:e,codeJs:t,data:[`Aloha 1`,`Aloha 2`,`Aloha 3`,`Aloha 4`,`Aloha 5`,`Aloha 6`],model:i(void 0)}}},Me={class:`a_columns a_columns_count_12`},Ne={class:`a_column a_column_6 a_columns_count_12_touch`};function Pe(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_`,description:`_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,props:`is-data-simple-array`},{default:o(()=>[s(`div`,Me,[s(`div`,Ne,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"is-data-simple-array":!0,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Fe=d(je,[[`render`,Pe]]);function Ie(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-model-array="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Le(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSearch",
  components: {
    ARadio,
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
};`}}var Re={name:`PageRadioIsModelArray`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=Ie(),{codeJs:t}=Le();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0)}}},ze={class:`a_columns a_columns_count_12`},Be={class:`a_column a_column_6 a_columns_count_12_touch`};function Ve(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_RADIO_GROUP_IS_MODEL_ARRAY_HEADER_`,description:`_A_RADIO_GROUP_IS_MODEL_ARRAY_DESCRIPTION_`,props:`is-model-array`},{default:o(()=>[s(`div`,ze,[s(`div`,Be,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"is-model-array":!0,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var He=d(Re,[[`render`,Ve]]);function Ue(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-width-auto="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :is-width-auto="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function We(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioIsWidthAuto",
  components: {
    ARadio,
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
};`}}var Ge={name:`PageRadioIsWidthAuto`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=Ue(),{codeJs:t}=We();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:i(void 0)}}},Ke={class:`a_columns a_columns_count_12`},qe={class:`a_column a_column_6 a_columns_count_12_touch`};function Je(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_`,description:`_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_`,props:`is-width-auto`},{default:o(()=>[s(`div`,Ke,[s(`div`,qe,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"is-width-auto":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"is-width-auto":!1,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ye=d(Ge,[[`render`,Je]]);function Xe(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  key-disabled="disabled"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-disabled="disabled"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Ze(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioKeyDisabled",
  components: {
    ARadio,
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
};`}}var Qe={name:`PageRadioKeyDisabled`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=Xe(),{codeJs:t}=Ze();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`,disabled:!0},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`,disabled:!0},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0)}}},$e={class:`a_columns a_columns_count_12`},et={class:`a_column a_column_6 a_columns_count_12_touch`};function tt(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_KEY_DISABLED_HEADER_`,description:`_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_`,props:`key-disabled`},{default:o(()=>[s(`div`,$e,[s(`div`,et,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"key-disabled":`disabled`,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"key-disabled":`disabled`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var nt=d(Qe,[[`render`,tt]]);function rt(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function it(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioKeyLabelCallback",
  components: {
    ARadio,
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
};`}}var at={name:`PageRadioKeyLabelCallback`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=rt(),{codeJs:t}=it();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:i(void 0),onKeyLabelCallback:({item:e})=>`--${e.label}--`}}},ot={class:`a_columns a_columns_count_12`},st={class:`a_column a_column_6 a_columns_count_12_touch`};function ct(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_`,description:`_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_`,props:`key-label-callback`},{default:o(()=>[s(`div`,ot,[s(`div`,st,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-label-callback":t.onKeyLabelCallback,"key-id":`id`,label:`Aloha`},null,8,[`modelValue`,`data`,`key-label-callback`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var lt=d(at,[[`render`,ct]]);function ut(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  key-title="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-title-callback="onKeyTitleCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function dt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioKeyTitle",
  components: {
    ARadio,
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
};`}}var ft={name:`PageRadioKeyTitle`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=ut(),{codeJs:t}=dt();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:i(void 0),onKeyTitleCallback:({item:e})=>`--${e.label}--`}}},pt={class:`a_columns a_columns_count_12`},mt={class:`a_column a_column_6 a_columns_count_12_touch`};function ht(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_KEY_TITLE_HEADER_`,description:`_A_UI_GROUP_KEY_TITLE_DESCRIPTION_`,props:[`key-title`,`key-title-callback`]},{default:o(()=>[s(`div`,pt,[s(`div`,mt,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,"key-title":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"key-title-callback":t.onKeyTitleCallback,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`,`key-title-callback`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var gt=d(ft,[[`render`,ht]]);function _t(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  label="Radio"
  label-description="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function vt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioLabelDescription",
  components: {
    ARadio,
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
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};`}}var yt={name:`PageRadioLabelDescription`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i(void 0),{codeHtml:n}=_t(),{codeJs:r}=vt();return{codeHtml:n,codeJs:r,data:e,model:t}}};function bt(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,label:`Radio`,"label-description":`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var xt=d(yt,[[`render`,bt]]);function St(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label-screen-reader="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Ct(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioLabelScreenReader",
  components: {
    ARadio,
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
};`}}var wt={name:`PageRadioLabelScreenReader`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=St(),{codeJs:t}=Ct();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:i(void 0)}}},Tt={class:`a_columns a_columns_count_12`},Et={class:`a_column a_column_6 a_columns_count_12_touch`};function Dt(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_`,description:`_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_`,props:`label-screen-reader`},{default:o(()=>[s(`div`,Tt,[s(`div`,Et,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,"label-screen-reader":`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Ot=d(wt,[[`render`,Dt]]);function kt(){return{codeHtml:`<a-radio
  :model-value="model1"
  :data="data"
  :readonly="true"
  label="Radio 1"
></a-radio>
<a-radio
  :model-value="model2"
  :data="data"
  :is-model-array="true"
  :readonly="true"
  class="a_mt_3"
  label="Radio 2"
></a-radio>
<a-radio
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Radio 3"
></a-radio>
<a-radio
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Radio 4"
  readonly-default="-"
></a-radio>`}}function At(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioReadonly",
  components: {
    ARadio,
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
    const model1 = ref("aloha_1");
    const model2 = ref(["aloha_4", "aloha_5"]);
    const model3 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};`}}var jt={name:`PageRadioReadonly`,components:{AlohaExample:p,ARadio:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i(`aloha_1`),n=i([`aloha_4`,`aloha_5`]),r=i(void 0),{codeHtml:a}=kt(),{codeJs:o}=At();return{codeHtml:a,codeJs:o,data:e,model1:t,model2:n,model3:r}}};function Mt(e,t,i,s,l,ee){let u=r(`a-radio`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(u,{"model-value":e.model1,data:e.data,readonly:!0,label:`Radio 1`},null,8,[`model-value`,`data`]),a(u,{class:`a_mt_3`,"model-value":e.model2,data:e.data,"is-model-array":!0,readonly:!0,label:`Radio 2`},null,8,[`model-value`,`data`]),a(u,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,label:`Radio 3`},null,8,[`model-value`,`data`]),a(u,{class:`a_mt_3`,"model-value":e.model3,data:e.data,readonly:!0,label:`Radio 4`,"readonly-default":`-`},null,8,[`model-value`,`data`])]),_:1},8,[`code-html`,`code-js`])}var Nt=d(jt,[[`render`,Mt]]);function Pt(){return{codeHtml:`<a-radio
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Radio with retrieve"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`}}function Ft(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ARadio,
} from "aloha-vue";

export default {
  name: "PageRadioRetrieve",
  components: {
    ARadio,
  },
  setup() {
    const model1 = ref("aloha_10");
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;
    const urlRetrieve = \`\${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json\`;

    return {
      model1,
      url,
      urlRetrieve,
    };
  },
};`}}var It={name:`PageRadioRetrieve`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=Pt(),{codeJs:t}=Ft();return{codeHtml:e,codeJs:t,model1:i(`aloha_10`),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}};function Lt(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`Retrieve invalid entries`,description:`Loads radio options from local JSON files and renders missing selected values inside a separate invalid entries group.`,props:[`url`,`url-retrieve`]},{default:o(()=>[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"key-id":`id`,"key-label":`label`,label:`Radio with retrieve`,url:t.url,"url-retrieve":t.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),s(`div`,null,`model1: `+e(t.model1),1)]),_:1},8,[`code-html`,`code-js`])}var Rt=d(It,[[`render`,Lt]]);function zt(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Bt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSearch",
  components: {
    ARadio,
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
};`}}var Vt={name:`PageRadioSearch`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=zt(),{codeJs:t}=Bt();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0)}}},Ht={class:`a_columns a_columns_count_12`},Ut={class:`a_column a_column_6 a_columns_count_12_touch`};function Wt(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SEARCH_HEADER_`,description:`_A_UI_GROUP_SEARCH_DESCRIPTION_`,props:`search`},{default:o(()=>[s(`div`,Ht,[s(`div`,Ut,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],search:!0,"search-in-group":!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Gt=d(Vt,[[`render`,Wt]]);function Kt(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function qt(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSearchTextInHtml",
  components: {
    ARadio,
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
};`}}var Jt={name:`PageRadioSearchTextInHtml`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=Kt(),{codeJs:t}=qt();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],model:i(`aloha_7`)}}},Yt={class:`a_columns a_columns_count_12`},Xt={class:`a_column a_column_6 a_columns_count_12_touch`};function Zt(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`]},{default:o(()=>[s(`div`,Yt,[s(`div`,Xt,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var Qt=d(Jt,[[`render`,Zt]]);function $t(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :sort-order="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order="asc"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order="desc"
></a-radio>
<div>model: {{ model }}</div>`}}function en(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSortOrder",
  components: {
    ARadio,
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
};`}}var tn={name:`PageRadioSortOrder`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=$t(),{codeJs:t}=en();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 8`,id:`aloha_8`},{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 7`,id:`aloha_7`}],model:i(void 0)}}},nn={class:`a_columns a_columns_count_12`},rn={class:`a_column a_column_6 a_columns_count_12_touch`};function an(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SORT_ORDER_HEADER_`,description:`_A_UI_GROUP_SORT_ORDER_DESCRIPTION_`,props:`sort-order`},{default:o(()=>[s(`div`,nn,[s(`div`,rn,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"sort-order":void 0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order":`asc`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,data:t.data,"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order":`desc`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var on=d(tn,[[`render`,an]]);function sn(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :sort-order-group="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="asc"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="desc"
></a-radio>
<div>model: {{ model }}</div>`}}function cn(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioSortOrderGroup",
  components: {
    ARadio,
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
};`}}var ln={name:`PageRadioSortOrderGroup`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=sn(),{codeJs:t}=cn();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`,aloha:``,alohaBR:`Köln`},{label:`Aloha 1`,id:`aloha_1`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 2`,id:`aloha_2`,aloha:`Buba`,alohaBR:`Köln`},{label:`Aloha 3`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 4`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`Köln`},{label:`Aloha 5`,id:`aloha_5`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 6`,id:`aloha_6`,aloha:`Coco`,alohaBR:`Düsseldorf`},{label:`Aloha 7`,id:`aloha_7`,aloha:`Alex`,alohaBR:`Düsseldorf`},{label:`Aloha 8`,id:`aloha_8`,aloha:`Alex`,alohaBR:`Düsseldorf`}],model:i(void 0)}}},un={class:`a_columns a_columns_count_12`},dn={class:`a_column a_column_6 a_columns_count_12_touch`};function fn(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_`,description:`_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_`,props:[`sort-order-group`]},{default:o(()=>[s(`div`,un,[s(`div`,dn,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"sort-order-group":void 0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order-group":`asc`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[2]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"key-id":`id`,"key-label":`label`,label:`Aloha`,"sort-order-group":`desc`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var pn=d(ln,[[`render`,fn]]);function mn(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function hn(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioTranslateData",
  components: {
    ARadio,
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
};`}}var gn={name:`PageRadioTranslateData`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=mn(),{codeJs:t}=hn();return{codeHtml:e,codeJs:t,data:[{label:`_A_UI_ELEMENT_0_`,id:`aloha_0`},{label:`_A_UI_ELEMENT_1_`,id:`aloha_1`},{label:`_A_UI_ELEMENT_2_`,id:`aloha_2`},{label:`_A_UI_ELEMENT_3_`,id:`aloha_3`},{label:`_A_UI_ELEMENT_4_`,id:`aloha_4`},{label:`_A_UI_ELEMENT_5_`,id:`aloha_5`},{label:`_A_UI_ELEMENT_6_`,id:`aloha_6`},{label:`_A_UI_ELEMENT_7_`,id:`aloha_7`},{label:`_A_UI_ELEMENT_8_`,id:`aloha_8`}],model:i(void 0)}}},_n={class:`a_columns a_columns_count_12`},vn={class:`a_column a_column_6 a_columns_count_12_touch`};function yn(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_TRANSLATE_DATA_HEADER_`,description:`_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_`,props:`translate-data`},{default:o(()=>[s(`div`,_n,[s(`div`,vn,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var $=d(gn,[[`render`,yn]]);function bn(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  class-data-parent="a_list_columns a_list_columns_2"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  class-data-parent="a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function xn(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioTwoColumns",
  components: {
    ARadio,
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
};`}}var Sn={name:`PageRadioTwoColumns`,components:{AlohaExample:p,ARadio:l},setup(){let{codeHtml:e}=bn(),{codeJs:t}=xn();return{codeHtml:e,codeJs:t,data:[{label:`Aloha 0`,id:`aloha_0`},{label:`Aloha 1`,id:`aloha_1`},{label:`Aloha 2`,id:`aloha_2`},{label:`Aloha 3`,id:`aloha_3`},{label:`Aloha 4`,id:`aloha_4`},{label:`Aloha 5`,id:`aloha_5`},{label:`Aloha 6`,id:`aloha_6`},{label:`Aloha 7`,id:`aloha_7`},{label:`Aloha 8`,id:`aloha_8`}],model:i(void 0)}}},Cn={class:`a_columns a_columns_count_12`},wn={class:`a_column a_column_6 a_columns_count_12_touch`};function Tn(t,i,l,ee,u,d){let f=r(`a-radio`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_TWO_COLUMNS_HEADER_`,description:`_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_`,props:`class-data-parent`},{default:o(()=>[s(`div`,Cn,[s(`div`,wn,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"class-data-parent":`a_list_columns a_list_columns_2`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"class-data-parent":`a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd`,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var En=d(Sn,[[`render`,Tn]]);function Dn(){return{dataEvents:[{name:`focusin`,description:`_A_UI_EVENTS_FOCUSIN_DESCRIPTION_`,type:`Function`},{name:`focusout`,description:`_A_UI_EVENTS_FOCUSOUT_DESCRIPTION_`,type:`Function`},{name:`update-data`,description:`_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_`,type:`Function`},{name:`toggle-collapse`,description:`_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_`,type:`Function`},{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function On(){let e=t(()=>u({placeholder:`_A_RADIO_COMPONENT_NAME_`}));return{pageTitle:t(()=>`ARadio${e.value?` (${e.value})`:``}`)}}function kn(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`api-save-id`,description:`_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`attributes-fieldset`,description:`_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`class-button-group-default`,description:`_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_`,type:`String / Object / Array`,default:`a_btn a_btn_outline_primary`,required:!1},{name:`class-data-parent`,description:`_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`collapsible`,description:`_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`data`,description:`_A_UI_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`data-extra`,description:`_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-border`,description:`_A_UI_PROPS_HAS_BORDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_radio_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`inline`,description:`_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-button-group`,description:`_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-collapsed`,description:`_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-data-simple-array`,description:`_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-model-array`,description:`_A_RADIO_PROPS_IS_MODEL_ARRAY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-width-auto`,description:`_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`key-disabled`,description:`_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-disabled-callback`,description:`_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-group`,description:`_A_UI_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-id`,description:`_A_UI_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`value`,required:!1},{name:`key-label`,description:`_A_UI_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-label-callback`,description:`_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-title`,description:`_A_UI_PROPS_KEY_TITLE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-title-callback`,description:`_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`loading`,description:`_A_UI_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-undefined`,description:`_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_`,type:`String / Number / Object / Array / Boolean`,default:void 0,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search`,description:`_A_UI_PROPS_SEARCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api`,description:`_A_UI_PROPS_SEARCH_API_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api-key`,description:`_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`search-in-group`,description:`_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-outside`,description:`_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-text-in-html`,description:`_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-timeout`,description:`_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`slot-append-name`,description:`_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`sort-order`,description:`_A_UI_PROPS_SORT_ORDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`sort-order-group`,description:`_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`texts`,description:`_A_RADIO_PROPS_TEXTS_DESCRIPTION_`,type:`Object`,default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_RADIO_SEARCH_",
      })`,required:!1},{name:`translate-data`,description:`_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`url`,description:`_A_UI_PROPS_URL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-params`,description:`_A_UI_PROPS_URL_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function An(){return{dataTranslate:[`_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_`,`_A_RADIO_SEARCH_`]}}var jn={name:`PageRadio`,components:{AlohaPage:f,AlohaTableProps:m,AlohaTableTranslate:h,ATranslation:ee,PageRadioBasic:b,PageRadioChange:T,PageRadioCollapse:M,PageRadioDataExtra:z,PageRadioError:U,PageRadioFocusBlur:J,PageRadioGroup:ie,PageRadioHasBorder:de,PageRadioHelpText:ge,PageRadioInline:Ce,PageRadioIsButtonGroup:Oe,PageRadioIsDataSimpleArray:Fe,PageRadioIsModelArray:He,PageRadioIsWidthAuto:Ye,PageRadioKeyDisabled:nt,PageRadioKeyLabelCallback:lt,PageRadioKeyTitle:gt,PageRadioLabelDescription:xt,PageRadioLabelScreenReader:Ot,PageRadioReadonly:Nt,PageRadioRetrieve:Rt,PageRadioSearch:Gt,PageRadioSearchTextInHtml:Qt,PageRadioSortOrder:on,PageRadioSortOrderGroup:pn,PageRadioTranslateData:$,PageRadioTwoColumns:En},setup(){let{pageTitle:e}=On(),{dataProps:t}=kn(),{dataTranslate:n}=An(),{dataEvents:r}=Dn();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function Mn(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-radio-basic`),f=r(`page-radio-change`),p=r(`page-radio-help-text`),m=r(`page-radio-error`),h=r(`page-radio-label-description`),g=r(`page-radio-label-screen-reader`),_=r(`page-radio-group`),v=r(`page-radio-retrieve`),y=r(`page-radio-search`),b=r(`page-radio-search-text-in-html`),x=r(`page-radio-key-disabled`),S=r(`page-radio-translate-data`),C=r(`page-radio-is-button-group`),w=r(`page-radio-collapse`),T=r(`page-radio-data-extra`),E=r(`page-radio-inline`),D=r(`page-radio-two-columns`),O=r(`page-radio-has-border`),k=r(`page-radio-is-data-simple-array`),A=r(`page-radio-is-width-auto`),j=r(`page-radio-key-label-callback`),M=r(`page-radio-key-title`),N=r(`page-radio-sort-order`),P=r(`page-radio-sort-order-group`),F=r(`page-radio-is-model-array`),I=r(`page-radio-focus-blur`),L=r(`page-radio-readonly`),R=r(`aloha-table-props`),z=r(`aloha-table-translate`),B=r(`aloha-page`);return c(),n(B,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_RADIO_COMPONENT_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x),a(S),a(C),a(w),a(T),a(E),a(D),a(O),a(k),a(A),a(j),a(M),a(N),a(P),a(F),a(I),a(L),a(R,{data:e.dataProps},null,8,[`data`]),a(R,{"table-label":`Events`,data:e.dataEvents,columns:[`name`,`type`,`description`]},null,8,[`data`]),a(z,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var Nn=d(jn,[[`render`,Mn]]);export{Nn as default};