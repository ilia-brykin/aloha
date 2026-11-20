import{t as e}from"./chunk.AlohaPage.BqJxHLnf.js";import{t}from"./chunk.AlohaTableProps.CD1A8m99.js";import{t as n}from"./chunk.AlohaTableTranslate.DkpTtIt0.js";import{$t as r,Ft as i,It as a,Mt as o,Pt as s,Rt as c,Vt as l,hn as u,ln as d,rn as f,sn as p}from"./chunk.vendor.BvryzG0o.js";import{t as m}from"./chunk.AlohaExample.MiYgZhxO.js";import{$t as h,W as g,et as _,qt as v,z as y}from"./bundle.index.nBnUcnwG.js";import{t as b}from"./chunk._plugin-vue_export-helper.BDNMzG2s.js";function x(){return{codeHtml:`<a-multiselect-ordered
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
<div>model2: {{ model2 }}</div>`}}function S(){return{codeJs:`import {
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
};`}}var C={name:`PageMultiselectOrderedBasic`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),n=d(void 0),{codeHtml:r}=x(),{codeJs:i}=S();return{codeHtml:r,codeJs:i,data:e,model1:t,model2:n}}};function w(e,t,n,o,s,c){let d=f(`a-multiselect-ordered`),m=f(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_BASIC_USAGE_`,props:[`data`,`model-value`,`label`]},{default:p(()=>[l(d,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"key-id":`value`,"key-label":`label`,label:`Select 1`},null,8,[`modelValue`,`data`]),i(`div`,null,`model1: `+u(e.model1),1),l(d,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"key-id":`value`,"key-label":`label`,label:`Select 2`},null,8,[`modelValue`,`data`]),i(`div`,null,`model2: `+u(e.model2),1)]),_:1},8,[`code-html`,`code-js`])}var T=b(C,[[`render`,w]]);function ee(){return{codeHtml:`<a-multiselect-ordered
  :change="changeModel"
  :model-value="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
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
};`}}var E={name:`PageMultiselectOrderedChange`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),n=({model:e,id:n,props:r})=>{t.value=e,console.log(n,r)},{codeHtml:r}=ee(),{codeJs:i}=te();return{changeModel:n,codeHtml:r,codeJs:i,data:e,model:t}}};function D(e,t,n,o,s,c){let d=f(`a-multiselect-ordered`),m=f(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_CHANGE_HEADER_`,description:`_A_UI_GROUP_CHANGE_DESCRIPTION_`,props:[`change`,`model-value`]},{default:p(()=>[l(d,{change:e.changeModel,"model-value":e.model,data:e.data,"key-id":`value`,"key-label":`label`,label:`Select`},null,8,[`change`,`model-value`,`data`]),i(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var O=b(E,[[`render`,D]]);function k(){return{codeHtml:`<a-multiselect-ordered
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
<div>model: {{ model }}</div>`}}function A(){return{codeJs:`import {
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
};`}}var j={name:`PageMultiselectOrderedDataExtra`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`,group:`Main`},{value:`aloha_2`,label:`Aloha 2`,group:`Main`}],t=[{value:`extra_1`,label:`Extra 1`,group:`Recommended`},{value:`extra_2`,label:`Extra 2`,group:`Other`},{value:`extra_3`,label:`Extra 3`,group:`Other`}],n=d([]),{codeHtml:r}=k(),{codeJs:i}=A();return{codeHtml:r,codeJs:i,data:e,dataExtra:t,model:n}}};function M(e,t,n,o,s,c){let d=f(`a-multiselect-ordered`),m=f(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MULTISELECT_ORDERED_GROUP_DATA_EXTRA_HEADER_`,description:`_A_MULTISELECT_ORDERED_GROUP_DATA_EXTRA_DESCRIPTION_`,props:[`data-extra`,`key-group`]},{default:p(()=>[l(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"data-extra":e.dataExtra,"key-id":`value`,"key-label":`label`,"key-group":`group`,label:`Grouped data extra`,search:!0,"search-in-group":!0},null,8,[`modelValue`,`data`,`data-extra`]),i(`div`,null,`model: `+u(e.model),1)]),_:1},8,[`code-html`,`code-js`])}var N=b(j,[[`render`,M]]);function P(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  errors="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function F(){return{codeJs:`import {
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
};`}}var I={name:`PageMultiselectOrderedErrors`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),{codeHtml:n}=P(),{codeJs:r}=F();return{codeHtml:n,codeJs:r,data:e,model:t}}};function L(e,t,n,i,o,s){let c=f(`a-multiselect-ordered`),u=f(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_ERRORS_HEADER_`,description:`_A_UI_GROUP_ERRORS_DESCRIPTION_`,props:[`errors`]},{default:p(()=>[l(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,errors:`Aloha`,"key-id":`value`,"key-label":`label`,label:`Select`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var R=b(I,[[`render`,L]]);function z(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  help-text="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function B(){return{codeJs:`import {
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
};`}}var V={name:`PageMultiselectOrderedHelpText`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),{codeHtml:n}=z(),{codeJs:r}=B();return{codeHtml:n,codeJs:r,data:e,model:t}}};function H(e,t,n,i,o,s){let c=f(`a-multiselect-ordered`),u=f(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_HELP_TEXT_HEADER_`,description:`_A_UI_GROUP_HELP_TEXT_DESCRIPTION_`,props:[`help-text`]},{default:p(()=>[l(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"help-text":`Aloha`,"key-id":`value`,"key-label":`label`,label:`Select`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var U=b(V,[[`render`,H]]);function W(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
  label-description="Aloha"
></a-multiselect-ordered>`}}function G(){return{codeJs:`import {
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
};`}}var K={name:`PageMultiselectOrderedLabelDescription`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),{codeHtml:n}=W(),{codeJs:r}=G();return{codeHtml:n,codeJs:r,data:e,model:t}}};function q(e,t,n,i,o,s){let c=f(`a-multiselect-ordered`),u=f(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_`,description:`_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_`,props:[`label-description`]},{default:p(()=>[l(c,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-id":`value`,"key-label":`label`,label:`Select`,"label-description":`Aloha`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var J=b(K,[[`render`,q]]);function Y(){return{codeHtml:`<a-multiselect-ordered
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
></a-multiselect-ordered>`}}function X(){return{codeJs:`import {
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
};`}}var Z={name:`PageMultiselectOrderedReadonly`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),n=d(void 0),{codeHtml:r}=Y(),{codeJs:i}=X();return{codeHtml:r,codeJs:i,data:e,model1:t,model2:n}}};function Q(e,t,n,i,o,s){let c=f(`a-multiselect-ordered`),u=f(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:p(()=>[l(c,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,readonly:!0,"key-id":`value`,"key-label":`label`,label:`Select 1`},null,8,[`modelValue`,`data`]),l(c,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,readonly:!0,"key-id":`value`,"key-label":`label`,label:`Select 2`},null,8,[`modelValue`,`data`]),l(c,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[2]||=t=>e.model2=t,data:e.data,readonly:!0,"key-id":`value`,"key-label":`label`,label:`Select 3`,"readonly-default":`-`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var ne=b(Z,[[`render`,Q]]);function re(){return{codeHtml:`<a-multiselect-ordered
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Ordered list with retrieve"
  select-label="Add value"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`}}function ie(){return{codeJs:`import {
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
};`}}var ae={name:`PageMultiselectOrderedRetrieve`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let{codeHtml:e}=re(),{codeJs:t}=ie();return{codeHtml:e,codeJs:t,model1:d([`aloha_2`,`aloha_10`,`aloha_11`]),url:`/aloha/assets/mock/select-base.json`,urlRetrieve:`/aloha/assets/mock/select-retrieve.json`}}};function oe(e,t,n,o,s,c){let d=f(`a-multiselect-ordered`),m=f(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`Retrieve invalid entries`,description:`Loads ordered multiselect options from local JSON files and renders missing selected values inside a separate invalid entries group.`,props:[`url`,`url-retrieve`]},{default:p(()=>[l(d,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,"key-id":`id`,"key-label":`label`,label:`Ordered list with retrieve`,"select-label":`Add value`,url:e.url,"url-retrieve":e.urlRetrieve},null,8,[`modelValue`,`url`,`url-retrieve`]),i(`div`,null,`model1: `+u(e.model1),1)]),_:1},8,[`code-html`,`code-js`])}var se=b(ae,[[`render`,oe]]);function ce(){return{codeHtml:`<a-multiselect-ordered
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
<div>model: {{ model }}</div>`}}function le(){return{codeJs:`import {
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
};`}}var ue={name:`PageMultiselectOrderedSearchTextInHtml`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let{codeHtml:e}=ce(),{codeJs:t}=le();return{codeHtml:e,codeJs:t,data:[{label:`<span>Aloha</span> <strong>1</strong>`,id:`aloha_0`,aloha:``,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>2</strong>`,id:`aloha_1`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>3</strong>`,id:`aloha_2`,aloha:`Buba`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>4</strong>`,id:`aloha_3`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>5</strong>`,id:`aloha_4`,aloha:`Sandra`,alohaBR:`<strong>Köln</strong>`},{label:`<span>Aloha</span> <strong>6</strong>`,id:`aloha_5`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>7</strong>`,id:`aloha_6`,aloha:`Coco`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>8</strong>`,id:`aloha_7`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`},{label:`<span>Aloha</span> <strong>9</strong>`,id:`aloha_8`,aloha:`Alex`,alohaBR:`<strong>Düsseldorf</strong>`}],model:d([`aloha_7`])}}},de={class:`a_columns a_columns_count_12`},fe={class:`a_column a_column_6 a_columns_count_12_touch`};function pe(e,t,n,o,s,c){let d=f(`a-multiselect-ordered`),m=f(`aloha-example`);return r(),a(m,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_`,description:`_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,props:[`search`,`search-text-in-html`]},{default:p(()=>[i(`div`,de,[i(`div`,fe,[l(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||=t=>e.model=t,data:e.data,"key-group":[`alohaBR`,`aloha`],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha group`},null,8,[`modelValue`,`data`]),l(d,{class:`a_mt_3`,modelValue:e.model,"onUpdate:modelValue":t[1]||=t=>e.model=t,data:e.data,"search-text-in-html":!0,search:!0,"key-id":`id`,"key-label":`label`,label:`Aloha`},null,8,[`modelValue`,`data`]),i(`div`,null,`model: `+u(e.model),1)])])]),_:1},8,[`code-html`,`code-js`])}var me=b(ue,[[`render`,pe]]);function he(){return{codeHtml:`<a-multiselect-ordered
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
></a-multiselect-ordered>`}}function ge(){return{codeJs:`import {
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
};`}}var _e={name:`PageMultiselectOrderedSelectDeselectAll`,components:{AlohaExample:m,AMultiselectOrdered:g},setup(){let e=[{value:`aloha_1`,label:`Aloha 1`},{value:`aloha_2`,label:`Aloha 2`},{value:`aloha_3`,label:`Aloha 3`},{value:`aloha_4`,label:`Aloha 4`}],t=d([`aloha_4`,`aloha_2`]),n=d([]),r=d([]),{codeHtml:i}=he(),{codeJs:a}=ge();return{codeHtml:i,codeJs:a,data:e,model1:t,model2:n,model3:r}}};function ve(e,t,n,i,o,s){let c=f(`a-multiselect-ordered`),u=f(`aloha-example`);return r(),a(u,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_MULTISELECT_ORDERED_GROUP_SELECT_DESELECT_ALL_HEADER_`,description:`_A_MULTISELECT_ORDERED_GROUP_SELECT_DESELECT_ALL_DESCRIPTION_`,props:[`is-select-all`,`is-deselect-all`]},{default:p(()=>[l(c,{modelValue:e.model1,"onUpdate:modelValue":t[0]||=t=>e.model1=t,data:e.data,"is-deselect-all":!0,"is-select-all":!0,"key-id":`value`,"key-label":`label`,label:`Select 1`},null,8,[`modelValue`,`data`]),l(c,{class:`a_mt_3`,modelValue:e.model2,"onUpdate:modelValue":t[1]||=t=>e.model2=t,data:e.data,"is-deselect-all":!0,"key-id":`value`,"key-label":`label`,label:`Select 2`},null,8,[`modelValue`,`data`]),l(c,{class:`a_mt_3`,modelValue:e.model3,"onUpdate:modelValue":t[2]||=t=>e.model3=t,data:e.data,"is-select-all":!0,"key-id":`value`,"key-label":`label`,label:`Select 3`},null,8,[`modelValue`,`data`])]),_:1},8,[`code-html`,`code-js`])}var ye=b(_e,[[`render`,ve]]);function be(){return{codeHtmlBasic:`<a-select
  v-model="templateDataBasic.file"
  :data="sources"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_SOURCE_"
  type="select"
/>
<a-multiselect-ordered
  v-model="modelBasic"
  :url="urlBasic"
  :url-template-data="templateDataBasic"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  select-label="_A_UI_URL_TEMPLATE_ADD_"
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
<a-multiselect-ordered
  v-model="modelReactive"
  :url="urlReactive"
  :url-template-data="templateDataReactive"
  key-id="id"
  key-label="label"
  label="_A_UI_URL_TEMPLATE_OPTIONS_"
  select-label="_A_UI_URL_TEMPLATE_ADD_"
/>
<div>model: {{ modelReactive }}</div>`}}function $(){return{codeJsBasic:`import {
  ref,
} from "vue";

import {
  AMultiselectOrdered,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AMultiselectOrdered,
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
  AMultiselectOrdered,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AInput,
    AMultiselectOrdered,
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
};`}}var xe={name:`PageMultiselectOrderedUrlTemplate`,components:{AInput:_,AMultiselectOrdered:g,ASelect:y,AlohaExample:m},setup(){let{codeHtmlBasic:e,codeHtmlReactive:t}=be(),{codeJsBasic:n,codeJsReactive:r}=$(),i=[{id:`base`,label:`_A_UI_URL_TEMPLATE_SOURCE_FIRST_`},{id:`retrieve`,label:`_A_UI_URL_TEMPLATE_SOURCE_SECOND_`}],a=d(void 0),o=d({file:`base`});return{codeHtmlBasic:e,codeHtmlReactive:t,codeJsBasic:n,codeJsReactive:r,modelBasic:a,modelReactive:d(void 0),sources:i,templateDataBasic:o,templateDataReactive:d({source:{file:`base`},note:``}),urlBasic:`/aloha/assets/mock/select-{{ file }}.json`,urlReactive:`/aloha/assets/mock/select-{{ source.file }}.json`}}};function Se(e,t,n,a,s,d){let m=f(`a-select`),h=f(`a-multiselect-ordered`),g=f(`aloha-example`),_=f(`a-input`);return r(),c(o,null,[l(g,{"code-html":e.codeHtmlBasic,"code-js":e.codeJsBasic,header:`_A_UI_URL_TEMPLATE_BASIC_HEADER_`,description:`_A_UI_URL_TEMPLATE_BASIC_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:p(()=>[l(m,{modelValue:e.templateDataBasic.file,"onUpdate:modelValue":t[0]||=t=>e.templateDataBasic.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),l(h,{modelValue:e.modelBasic,"onUpdate:modelValue":t[1]||=t=>e.modelBasic=t,url:e.urlBasic,"url-template-data":e.templateDataBasic,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`,"select-label":`_A_UI_URL_TEMPLATE_ADD_`},null,8,[`modelValue`,`url`,`url-template-data`]),i(`div`,null,`model: `+u(e.modelBasic),1)]),_:1},8,[`code-html`,`code-js`]),l(g,{"code-html":e.codeHtmlReactive,"code-js":e.codeJsReactive,header:`_A_UI_URL_TEMPLATE_REACTIVE_HEADER_`,description:`_A_UI_URL_TEMPLATE_REACTIVE_DESCRIPTION_`,props:[`url`,`url-template-data`]},{default:p(()=>[l(m,{modelValue:e.templateDataReactive.source.file,"onUpdate:modelValue":t[2]||=t=>e.templateDataReactive.source.file=t,data:e.sources,"translate-data":!0,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_SOURCE_`,type:`select`},null,8,[`modelValue`,`data`]),l(_,{modelValue:e.templateDataReactive.note,"onUpdate:modelValue":t[3]||=t=>e.templateDataReactive.note=t,label:`_A_UI_URL_TEMPLATE_NOTE_`},null,8,[`modelValue`]),l(h,{modelValue:e.modelReactive,"onUpdate:modelValue":t[4]||=t=>e.modelReactive=t,url:e.urlReactive,"url-template-data":e.templateDataReactive,"key-id":`id`,"key-label":`label`,label:`_A_UI_URL_TEMPLATE_OPTIONS_`,"select-label":`_A_UI_URL_TEMPLATE_ADD_`},null,8,[`modelValue`,`url`,`url-template-data`]),i(`div`,null,`model: `+u(e.modelReactive),1)]),_:1},8,[`code-html`,`code-js`])],64)}var Ce=b(xe,[[`render`,Se]]);function we(){return{dataEvents:[{name:`on-search-outside`,description:`_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Function`},{name:`update-data`,description:`_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_`,type:`Function`},{name:`toggle-collapse`,description:`_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_`,type:`Function`},{name:`update:model-value`,description:`_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_`,type:`Function`}]}}function Te(){let e=s(()=>h({placeholder:`_A_MULTISELECT_ORDERED_COMPONENT_NAME_`}));return{pageTitle:s(()=>`AMultiselectOrdered${e.value?` (${e.value})`:``}`)}}function Ee(){return{dataProps:[{name:`always-translate`,description:`_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`api-save-id`,description:`_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`attributes-btn-deselect-all`,description:`_A_MULTISELECT_ORDERED_PROPS_ATTRIBUTES_BTN_DESELECT_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`attributes-btn-select-all`,description:`_A_MULTISELECT_ORDERED_PROPS_ATTRIBUTES_BTN_SELECT_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`attributes-fieldset`,description:`_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`btn-delete-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_primary`,required:!1},{name:`btn-delete-icon`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_ICON_DESCRIPTION_`,type:`String`,default:`Trash`,required:!1},{name:`btn-down-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_outline_secondary`,required:!1},{name:`btn-down-icon`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_ICON_DESCRIPTION_`,type:`String`,default:`ChevronDown`,required:!1},{name:`btn-group-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_GROUP_CLASS_DESCRIPTION_`,type:`String`,default:`a_btn_group`,required:!1},{name:`btn-up-class`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_UP_CLASS_DESCRIPTION_`,type:`String / Object`,default:`a_btn a_btn_outline_secondary`,required:!1},{name:`btn-up-icon`,description:`_A_MULTISELECT_ORDERED_PROPS_BTN_UP_ICON_DESCRIPTION_`,type:`String`,default:`ChevronUp`,required:!1},{name:`change`,description:`_A_UI_PROPS_CHANGE_DESCRIPTION_`,type:`Function`,default:`() => {}`,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`class-fieldset`,description:`_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`data`,description:`_A_UI_PROPS_DATA_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`data-extra`,description:`_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`merge-data`,description:`_A_UI_PROPS_MERGE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`dependencies`,description:`_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_`,type:`Array / Object`,default:void 0,required:!1},{name:`disabled`,description:`_A_UI_PROPS_DISABLED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`errors`,description:`_A_UI_PROPS_ERRORS_DESCRIPTION_`,type:`String / Array`,default:void 0,required:!1},{name:`exclude-render-attributes`,description:`_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`extra`,description:`_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`has-border`,description:`_A_UI_PROPS_HAS_BORDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`help-text`,description:`_A_UI_PROPS_HELP_TEXT_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`html-id`,description:`_A_UI_PROPS_HTML_ID_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`id`,description:`_A_UI_PROPS_ID_DESCRIPTION_`,type:`String / Number`,default:`() => uniqueId("a_m_select_ordered_")`,required:!1},{name:`id-prefix`,description:`_A_UI_PROPS_ID_PREFIX_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`is-data-simple-array`,description:`_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-deselect-all`,description:`_A_UI_PROPS_IS_DESELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`is-hide`,description:`_A_UI_PROPS_IS_HIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`is-render`,description:`_A_UI_PROPS_IS_RENDER_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`is-select-all`,description:`_A_UI_PROPS_IS_SELECT_ALL_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`key-disabled`,description:`_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`key-disabled-callback`,description:`_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-group`,description:`_A_UI_PROPS_KEY_GROUP_DESCRIPTION_`,type:`String / Number / Array`,default:void 0,required:!1},{name:`key-group-label-callback`,description:`_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`key-id`,description:`_A_UI_PROPS_KEY_ID_DESCRIPTION_`,type:`String`,default:`value`,required:!1},{name:`key-label`,description:`_A_UI_PROPS_KEY_LABEL_DESCRIPTION_`,type:`String`,default:`label`,required:!1},{name:`key-label-callback`,description:`_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_`,type:`Function`,default:void 0,required:!1},{name:`label`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`label-class`,description:`_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`label-description`,description:`_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`label-screen-reader`,description:`_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_`,type:`String / Number`,default:void 0,required:!1},{name:`list-item-class`,description:`_A_MULTISELECT_ORDERED_PROPS_LIST_ITEM_CLASS_DESCRIPTION_`,type:`String / Object / Array`,default:`a_list_group__item`,required:!1},{name:`loading`,description:`_A_UI_PROPS_LOADING_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`model-dependencies`,description:`_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`model-value`,description:`_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_`,type:`Array`,default:void 0,required:!1},{name:`options`,description:`_A_UI_PROPS_OPTIONS_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1},{name:`readonly`,description:`_A_UI_PROPS_READONLY_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`readonly-default`,description:`_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_`,type:`String`,default:``,required:!1},{name:`required`,description:`_A_UI_PROPS_REQUIRED_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search`,description:`_A_UI_PROPS_SEARCH_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api`,description:`_A_UI_PROPS_SEARCH_API_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-api-key`,description:`_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`search-in-group`,description:`_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-outside`,description:`_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-text-in-html`,description:`_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_`,type:`Boolean`,default:void 0,required:!1},{name:`search-timeout`,description:`_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_`,type:`Number`,default:0,required:!1},{name:`select-button-class`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`select-button-class-default`,description:`_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_form_control a_select_toggle`,required:!1},{name:`select-caret-icon`,description:`_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_`,type:`String / Object`,default:`ChevronDown`,required:!1},{name:`select-has-caret`,description:`_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-in-body`,description:`_A_SELECT_PROPS_IN_BODY_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-is-close-by-click`,description:`_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`select-is-label-float`,description:`_A_SELECT_PROPS_IS_LABEL_FLOAT_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-is-selection-closeable`,description:`_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_`,type:`Boolean`,default:!0,required:!1},{name:`select-label`,description:`_A_SELECT_PROPS_LABEL_DESCRIPTION_`,type:`String / Number`,default:`_A_MULTISELECT_ORDERED_LABEL_SELECT_`,required:!1},{name:`select-label-class`,description:`_A_SELECT_PROPS_LABEL_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`select-label-screenreader`,description:`_A_SELECT_PROPS_LABEL_SCREENREADER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`select-menu-class`,description:`_A_SELECT_PROPS_MENU_CLASS_DESCRIPTION_`,type:`String / Object`,default:void 0,required:!1},{name:`select-menu-width-type`,description:`_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_`,type:`String`,default:`as_button`,required:!1},{name:`select-placeholder`,description:`_A_SELECT_PROPS_PLACEHOLDER_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`select-placement`,description:`_A_SELECT_PROPS_PLACEMENT_DESCRIPTION_`,type:`String`,default:`bottom-end`,required:!1},{name:`select-popper-container-id`,description:`_A_SELECT_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_`,type:`String`,default:`a_select_container`,required:!1},{name:`slot-name`,description:`_A_UI_PROPS_SLOT_NAME_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`sort-order`,description:`_A_UI_PROPS_SORT_ORDER_DESCRIPTION_`,type:`String`,default:`asc`,required:!1},{name:`sort-order-group`,description:`_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_`,type:`String`,default:`asc`,required:!1},{name:`texts`,description:`_A_MULTISELECT_ORDERED_PROPS_TEXTS_DESCRIPTION_`,type:`String`,default:`{
        btnDeleteTitle: "_A_MULTISELECT_ORDERED_BTN_DELETE_",
        btnDownTitle: "_A_MULTISELECT_ORDERED_BTN_DOWN_",
        btnGroupAriaLabel: "_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_",
        btnUpTitle: "_A_MULTISELECT_ORDERED_BTN_UP_",
        deselectAll: "_A_MULTISELECT_ORDERED_DESELECT_ALL_",
        groupAllAriaLabel: "_A_MULTISELECT_ORDERED_GROUP_ALL_",
        modelEmpty: "_A_MULTISELECT_ORDERED_MODEL_EMPTY_",
        selectAll: "_A_MULTISELECT_ORDERED_SELECT_ALL_",
      }`,required:!1},{name:`translate-data`,description:`_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_`,type:`Boolean`,default:!1,required:!1},{name:`url`,description:`_A_UI_PROPS_URL_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-retrieve`,description:`_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_`,type:`String`,default:void 0,required:!1},{name:`url-params`,description:`_A_UI_PROPS_URL_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-retrieve-params`,description:`_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_`,type:`Object`,default:void 0,required:!1},{name:`url-template-data`,description:`_A_UI_PROPS_URL_TEMPLATE_DATA_DESCRIPTION_`,type:`Object`,default:void 0,required:!1}]}}function De(){return{dataTranslate:[`_A_MULTISELECT_ORDERED_BTN_DELETE_`,`_A_MULTISELECT_ORDERED_BTN_DOWN_`,`_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_`,`_A_MULTISELECT_ORDERED_BTN_UP_`,`_A_MULTISELECT_ORDERED_DESELECT_ALL_`,`_A_MULTISELECT_ORDERED_GROUP_ALL_`,`_A_MULTISELECT_ORDERED_LABEL_SELECT_`,`_A_MULTISELECT_ORDERED_MODEL_EMPTY_`,`_A_MULTISELECT_ORDERED_SELECT_ALL_`]}}var Oe={name:`PageMultiselectOrdered`,components:{AlohaPage:e,AlohaTableProps:t,AlohaTableTranslate:n,ATranslation:v,PageMultiselectOrderedBasic:T,PageMultiselectOrderedChange:O,PageMultiselectOrderedDataExtra:N,PageMultiselectOrderedErrors:R,PageMultiselectOrderedHelpText:U,PageMultiselectOrderedLabelDescription:J,PageMultiselectOrderedReadonly:ne,PageMultiselectOrderedRetrieve:se,PageMultiselectOrderedUrlTemplate:Ce,PageMultiselectOrderedSearchTextInHtml:me,PageMultiselectOrderedSelectDeselectAll:ye},setup(){let{pageTitle:e}=Te(),{dataProps:t}=Ee(),{dataTranslate:n}=De(),{dataEvents:r}=we();return{dataEvents:r,dataProps:t,dataTranslate:n,pageTitle:e}}};function ke(e,t,n,i,o,s){let c=f(`a-translation`),u=f(`page-multiselect-ordered-basic`),d=f(`page-multiselect-ordered-data-extra`),m=f(`page-multiselect-ordered-change`),h=f(`page-multiselect-ordered-help-text`),g=f(`page-multiselect-ordered-errors`),_=f(`page-multiselect-ordered-label-description`),v=f(`page-multiselect-ordered-retrieve`),y=f(`page-multiselect-ordered-url-template`),b=f(`page-multiselect-ordered-select-deselect-all`),x=f(`page-multiselect-ordered-search-text-in-html`),S=f(`page-multiselect-ordered-readonly`),C=f(`aloha-table-props`),w=f(`aloha-table-translate`),T=f(`aloha-page`);return r(),a(T,{"page-title":e.pageTitle},{body:p(()=>[l(c,{tag:`p`,html:`_A_MULTISELECT_ORDERED_DESCRIPTION_`}),l(u),l(d),l(m),l(h),l(g),l(_),l(v),l(y),l(b),l(x),l(S),l(C,{data:e.dataProps},null,8,[`data`]),l(w,{data:e.dataTranslate},null,8,[`data`])]),_:1},8,[`page-title`])}var Ae=b(Oe,[[`render`,ke]]);export{Ae as default};