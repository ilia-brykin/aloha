import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{U as l,Z as ee,kt as u,t as d}from"./bundle.index.BmSiyQNH.js";import{n as f,t as p}from"./chunk.AlohaExample.CD4LlhAz.js";import{t as m}from"./chunk.AlohaTableProps.Dksi7fmb.js";import{t as h}from"./chunk.AlohaTableTranslate.C-b2Nle9.js";function g(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<div>model1: {{ model1 }}</div>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<div>model2: {{ model2 }}</div>`}}function _(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedBasic",
  components: {
    AMultiselectOrdered,
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
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};`}}var v={name:`PageMultiselectOrderedBasic`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),n=i(void 0),{codeHtml:r}=g(),{codeJs:a}=_();return{codeHtml:r,codeJs:a,data:e,model1:t,model2:n}}};function y(t,i,l,ee,u,d){let f=r(`a-multiselect-ordered`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`,`model-value`,`label`]},{default:o(()=>[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,data:t.data,"key-id":`value`,"key-label":`label`,label:`Select 1`},null,8,[`modelValue`,`data`]),s(`div`,null,`model1: `+e(t.model1),1),a(f,{class:`a_mt_3`,modelValue:t.model2,"onUpdate:modelValue":i[1]||=e=>t.model2=e,data:t.data,"key-id":`value`,"key-label":`label`,label:`Select 2`},null,8,[`modelValue`,`data`]),s(`div`,null,`model2: `+e(t.model2),1)]),_:1},8,[`code-html`,`code-js`])}var b=d(v,[[`render`,y]]);function x(){return{codeHtml:`<a-multiselect-ordered
  :change="changeModel"
  :model-value="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`}}function S(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedChange",
  components: {
    AMultiselectOrdered,
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
    const model = ref(["aloha_4", "aloha_2"]);
    
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
};`}}var C={name:`PageMultiselectOrderedChange`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),n=({model:e,id:n,props:r})=>{t.value=e,console.log(n,r)},{codeHtml:r}=x(),{codeJs:a}=S();return{changeModel:n,codeHtml:r,codeJs:a,data:e,model:t}}};function w(t,i,l,ee,u,d){let f=r(`a-multiselect-ordered`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:o(()=>[a(f,{change:t.changeModel,"model-value":t.model,data:t.data,"key-id":`value`,"key-label":`label`,label:`Select`},null,8,[`change`,`model-value`,`data`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var T=d(C,[[`render`,w]]);function E(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  :data-extra="dataExtra"
  key-id="value"
  key-label="label"
  key-group="group"
  label="Grouped data extra"
  :search="true"
  :search-in-group="true"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`}}function D(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
} from "aloha-vue";

export default {
  name: "PageMultiselectOrderedDataExtra",
  components: {
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
        group: "Main",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
        group: "Main",
      },
    ];
    const dataExtra = [
      {
        value: "extra_1",
        label: "Extra 1",
        group: "Recommended",
      },
      {
        value: "extra_2",
        label: "Extra 2",
        group: "Other",
      },
      {
        value: "extra_3",
        label: "Extra 3",
        group: "Other",
      },
    ];
    const model = ref([]);

    return {
      data,
      dataExtra,
      model,
    };
  },
};`}}var O={name:`PageMultiselectOrderedDataExtra`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`,group:`Main`},{value:`aloha_2`,label:`Aloha 2`,group:`Main`}],t=[{value:`extra_1`,label:`Extra 1`,group:`Recommended`},{value:`extra_2`,label:`Extra 2`,group:`Other`},{value:`extra_3`,label:`Extra 3`,group:`Other`}],n=i([]),{codeHtml:r}=E(),{codeJs:a}=D();return{codeHtml:r,codeJs:a,data:e,dataExtra:t,model:n}}};function k(t,i,l,ee,u,d){let f=r(`a-multiselect-ordered`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_MULTISELECT_ORDERED_GROUP_DATA_EXTRA_HEADER_`,description:`_A_MULTISELECT_ORDERED_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:o(()=>[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"data-extra":t.dataExtra,"key-id":`value`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra`,search:!0,"search-in-group":!0},null,8,[`modelValue`,`data`,`data-extra`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var A=d(O,[[`render`,k]]);function j(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  errors="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function M(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedErrors",
  components: {
    AMultiselectOrdered,
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
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};`}}var N={name:`PageMultiselectOrderedErrors`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),{codeHtml:n}=j(),{codeJs:r}=M();return{codeHtml:n,codeJs:r,data:e,model:t}}};function P(e,t,i,s,l,ee){let u=r(`a-multiselect-ordered`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,errors:`Aloha`,"key-id":`value`,"key-label":`label`,label:`Select`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var F=d(N,[[`render`,P]]);function I(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  help-text="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function L(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedHelpText",
  components: {
    AMultiselectOrdered,
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
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};`}}var R={name:`PageMultiselectOrderedHelpText`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),{codeHtml:n}=I(),{codeJs:r}=L();return{codeHtml:n,codeJs:r,data:e,model:t}}};function z(e,t,i,s,l,ee){let u=r(`a-multiselect-ordered`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"help-text":`Aloha`,"key-id":`value`,"key-label":`label`,label:`Select`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var B=d(R,[[`render`,z]]);function V(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
  label-description="Aloha"
></a-multiselect-ordered>`}}function H(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedLabelDescription",
  components: {
    AMultiselectOrdered,
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
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};`}}var U={name:`PageMultiselectOrderedLabelDescription`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),{codeHtml:n}=V(),{codeJs:r}=H();return{codeHtml:n,codeJs:r,data:e,model:t}}};function W(e,t,i,s,l,ee){let u=r(`a-multiselect-ordered`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:o(()=>[a(u,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`value`,"key-label":`label`,label:`Select`,"label-description":`Aloha`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var G=d(U,[[`render`,W]]);function K(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  :data="data"
  :readonly="true"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 3"
  readonly-default="-"
></a-multiselect-ordered>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedReadonly",
  components: {
    AMultiselectOrdered,
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
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref(undefined);
    
    return {
      data,
      model1,
      model2,
    };
  },
};`}}var te={name:`PageMultiselectOrderedReadonly`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),n=i(void 0),{codeHtml:r}=K(),{codeJs:a}=q();return{codeHtml:r,codeJs:a,data:e,model1:t,model2:n}}};function J(e,t,i,s,l,ee){let u=r(`a-multiselect-ordered`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,readonly:!0,"key-id":`value`,"key-label":`label`,label:`Select 1`},null,8,[`modelValue`,`data`]),a(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,readonly:!0,"key-id":`value`,"key-label":`label`,label:`Select 2`},null,8,[`modelValue`,`data`]),a(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[2]||=t=>e.model2=t,data:e.data,readonly:!0,"key-id":`value`,"key-label":`label`,label:`Select 3`,"readonly-default":`-`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var Y=d(te,[[`render`,J]]);function X(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Ordered list with retrieve"
  select-label="Add value"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`}}function Z(){return{codeJs:`import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
} from "aloha-vue";

export default {
  name: "PageMultiselectOrderedRetrieve",
  components: {
    AMultiselectOrdered,
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
};`}}var Q={name:`PageMultiselectOrderedRetrieve`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let{codeHtml:e}=X(),{codeJs:t}=Z();return{codeHtml:e,codeJs:t,model1:i([`aloha_2`,`aloha_10`,`aloha_11`]),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}};function ne(t,i,l,ee,u,d){let f=r(`a-multiselect-ordered`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`Retrieve invalid entries`,description:`Loads ordered multiselect options from local JSON files and renders missing selected values inside a separate invalid entries group.`,props:[`url`,`url-retrieve`]},{default:o(()=>[a(f,{modelValue:t.model1,"onUpdate:modelValue":i[0]||=e=>t.model1=e,"key-id":`id`,"key-label":`label`,label:`Ordered list with retrieve`,"select-label":`Add value`,url:t.url,"url-retrieve":t.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),s(`div`,null,`model1: `+e(t.model1),1)]),_:1},8,[`code-html`,`code-js`])}var re=d(Q,[[`render`,ne]]);function ie(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model"
  :data="data"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`}}function ae(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedSearchTextInHtml",
  components: {
    AMultiselectOrdered,
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
};`}}var oe={name:`PageMultiselectOrderedSearchTextInHtml`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let{codeHtml:e}=ie(),{codeJs:t}=ae();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],model:i([`aloha_7`])}}},se={class:`a_columns a_columns_count_12`},ce={class:`a_column a_column_6 a_columns_count_12_touch`};function le(t,i,l,ee,u,d){let f=r(`a-multiselect-ordered`),p=r(`aloha-example`);return c(),n(p,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`]},{default:o(()=>[s(`div`,se,[s(`div`,ce,[a(f,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,data:t.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),a(f,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,data:t.data,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),s(`div`,null,`model: `+e(t.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var ue=d(oe,[[`render`,le]]);function de(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  :data="data"
  :is-deselect-all="true"
  :is-select-all="true"
  key-id="value"
  key-label="label"
  label="Select 1"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model2"
  :data="data"
  :is-deselect-all="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 2"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model3"
  :data="data"
  :is-select-all="true"
  class="a_mt_3"
  key-id="value"
  key-label="label"
  label="Select 3"
></a-multiselect-ordered>`}}function fe(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedSelectDeselectAll",
  components: {
    AMultiselectOrdered,
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
    const model1 = ref(["aloha_4", "aloha_2"]);
    const model2 = ref([]);
    const model3 = ref([]);
    
    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};`}}var pe={name:`PageMultiselectOrderedSelectDeselectAll`,components:{AlohaExample:p,AMultiselectOrdered:l},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=i([`aloha_4`,`aloha_2`]),n=i([]),r=i([]),{codeHtml:a}=de(),{codeJs:o}=fe();return{codeHtml:a,codeJs:o,data:e,model1:t,model2:n,model3:r}}};function $(e,t,i,s,l,ee){let u=r(`a-multiselect-ordered`),d=r(`aloha-example`);return c(),n(d,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MULTISELECT_ORDERED_GROUP_SELECT_DESELECT_ALL_HEADER_`,description:`_A_MULTISELECT_ORDERED_GROUP_SELECT_DESELECT_ALL_DESCRIPTION_`,props:[`is-select-all`,`is-deselect-all`]},{default:o(()=>[a(u,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"is-deselect-all":!0,"is-select-all":!0,"key-id":`value`,"key-label":`label`,label:`Select 1`},null,8,[`modelValue`,`data`]),a(u,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"is-deselect-all":!0,"key-id":`value`,"key-label":`label`,label:`Select 2`},null,8,[`modelValue`,`data`]),a(u,{class:`a_mt_3`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,data:e.data,"is-select-all":!0,"key-id":`value`,"key-label":`label`,label:`Select 3`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var me=d(pe,[[`render`,$]]);function he(){return{dataEvents:[{name:`on-search-outside`,description:`_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Function`},{name:`update-data`,description:`_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_`,type:`Function`},{name:`toggle-collapse`,description:`_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_`,type:`Function`},{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function ge(){let e=t(()=>u({placeholder:`_A_MULTISELECT_ORDERED_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AMultiselectOrdered${e.value?` (${e.value})`:``}`)}}function _e(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`api-save-id`,description:`_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`attributes-btn-deselect-all`,description:`_A_MULTISELECT_ORDERED_PROPS_ATTRIBUTES_BTN_DESELECT_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`attributes-btn-select-all`,description:`_A_MULTISELECT_ORDERED_PROPS_ATTRIBUTES_BTN_SELECT_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`attributes-fieldset`,description:`_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`btn-delete-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`btn-delete-icon`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_ICON_DESCRIPTION_`,type:`String`,default:`Trash`,required:!1},{name:`btn-down-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_outline_secondary`,required:!1},{name:`btn-down-icon`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_ICON_DESCRIPTION_`,type:`String`,default:`ChevronDown`,required:!1},{name:`btn-group-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_GROUP_CLASS_DESCRIPTION_`,type:`String`,default:`a_btn_group`,required:!1},{name:`btn-up-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_UP_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_outline_secondary`,required:!1},{name:`btn-up-icon`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_UP_ICON_DESCRIPTION_`,type:`String`,default:`ChevronUp`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`data`,description:`_A_UI_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`data-extra`,description:`_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-border`,description:`_A_UI_PROPS_HAS_BORDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_m_select_ordered_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-data-simple-array`,description:`_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-deselect-all`,description:`_A_UI_PROPS_IS_DESELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-select-all`,description:`_A_UI_PROPS_IS_SELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`key-disabled`,description:`_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-disabled-callback`,description:`_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-group`,description:`_A_UI_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-id`,description:`_A_UI_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`value`,required:!1},{name:`key-label`,description:`_A_UI_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-label-callback`,description:`_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`list-item-class`,description:`_A_MULTISELECT_ORDERED_PROPS_LIST_ITEM_CLASS_DESCRIPTION_`,type:`String / Object / Array`,default:`a_list_group__item`,required:!1},{name:`loading`,description:`_A_UI_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`options`,description:`_A_UI_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search`,description:`_A_UI_PROPS_SEARCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api`,description:`_A_UI_PROPS_SEARCH_API_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api-key`,description:`_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`search-in-group`,description:`_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-outside`,description:`_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-text-in-html`,description:`_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-timeout`,description:`_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`select-button-class`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`select-button-class-default`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_form_control a_select_toggle`,required:!1},{name:`select-caret-icon`,description:`_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_`,type:`String / Object`,default:`ChevronDown`,required:!1},{name:`select-has-caret`,description:`_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-in-body`,description:`_A_SELECT_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-is-close-by-click`,description:`_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`select-is-label-float`,description:`_A_SELECT_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-is-selection-closeable`,description:`_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-label`,description:`_A_SELECT_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:`_A_MULTISELECT_ORDERED_LABEL_SELECT_`,required:!1},{name:`select-label-class`,description:`_A_SELECT_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`select-label-screenreader`,description:`_A_SELECT_PROPS_LABEL_SCREENREADER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`select-menu-class`,description:`_A_SELECT_PROPS_MENU_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`select-menu-width-type`,description:`_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_`,type:`String`,default:`as_button`,required:!1},{name:`select-placeholder`,description:`_A_SELECT_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`select-placement`,description:`_A_SELECT_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-end`,required:!1},{name:`select-popper-container-id`,description:`_A_SELECT_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_select_container`,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`sort-order`,description:`_A_UI_PROPS_SORT_ORDER_DESCRIPTION_`,type:`String`,default:`asc`,required:!1},{name:`sort-order-group`,description:`_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:`asc`,required:!1},{name:`texts`,description:`_A_MULTISELECT_ORDERED_PROPS_TEXTS_DESCRIPTION_`,type:`String`,default:`{
        btnDeleteTitle: "_A_MULTISELECT_ORDERED_BTN_DELETE_",
        btnDownTitle: "_A_MULTISELECT_ORDERED_BTN_DOWN_",
        btnGroupAriaLabel: "_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_",
        btnUpTitle: "_A_MULTISELECT_ORDERED_BTN_UP_",
        deselectAll: "_A_MULTISELECT_ORDERED_DESELECT_ALL_",
        groupAllAriaLabel: "_A_MULTISELECT_ORDERED_GROUP_ALL_",
        modelEmpty: "_A_MULTISELECT_ORDERED_MODEL_EMPTY_",
        selectAll: "_A_MULTISELECT_ORDERED_SELECT_ALL_",
      }`,required:!1},{name:`translate-data`,description:`_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`url`,description:`_A_UI_PROPS_URL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-params`,description:`_A_UI_PROPS_URL_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function ve(){return{dataTranslate:[`_A_MULTISELECT_ORDERED_BTN_DELETE_`,`_A_MULTISELECT_ORDERED_BTN_DOWN_`,`_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_`,`_A_MULTISELECT_ORDERED_BTN_UP_`,`_A_MULTISELECT_ORDERED_DESELECT_ALL_`,`_A_MULTISELECT_ORDERED_GROUP_ALL_`,`_A_MULTISELECT_ORDERED_LABEL_SELECT_`,`_A_MULTISELECT_ORDERED_MODEL_EMPTY_`,`_A_MULTISELECT_ORDERED_SELECT_ALL_`]}}var ye={name:`PageMultiselectOrdered`,components:{AlohaPage:f,AlohaTableProps:m,AlohaTableTranslate:h,ATranslation:ee,PageMultiselectOrderedBasic:b,PageMultiselectOrderedChange:T,PageMultiselectOrderedDataExtra:A,PageMultiselectOrderedErrors:F,PageMultiselectOrderedHelpText:B,PageMultiselectOrderedLabelDescription:G,PageMultiselectOrderedReadonly:Y,PageMultiselectOrderedRetrieve:re,PageMultiselectOrderedSearchTextInHtml:ue,PageMultiselectOrderedSelectDeselectAll:me},setup(){let{pageTitle:e}=ge(),{dataProps:t}=_e(),{dataTranslate:n}=ve(),{dataEvents:r}=he();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function be(e,t,i,s,l,ee){let u=r(`a-translation`),d=r(`page-multiselect-ordered-basic`),f=r(`page-multiselect-ordered-data-extra`),p=r(`page-multiselect-ordered-change`),m=r(`page-multiselect-ordered-help-text`),h=r(`page-multiselect-ordered-errors`),g=r(`page-multiselect-ordered-label-description`),_=r(`page-multiselect-ordered-retrieve`),v=r(`page-multiselect-ordered-select-deselect-all`),y=r(`page-multiselect-ordered-search-text-in-html`),b=r(`page-multiselect-ordered-readonly`),x=r(`aloha-table-props`),S=r(`aloha-table-translate`),C=r(`aloha-page`);return c(),n(C,{"page-title":e.pageTitle},{body:o(()=>[a(u,{tag:`p`,html:`_A_MULTISELECT_ORDERED_DESCRIPTION_`}),a(d),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y),a(b),a(x,{data:e.dataProps},null,8,[`data`]),a(S,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var xe=d(ye,[[`render`,be]]);export{xe as default};