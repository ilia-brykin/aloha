import{A as S,a as g}from"./chunk.AlohaExample.Bk8CMc1q.js";import{A as y}from"./chunk.AlohaTableProps.BjZxezHM.js";import{A as N}from"./chunk.AlohaTableTranslate.BXWBG3wC.js";import{a6 as A,_ as c,g as U,A as v}from"./bundle.index.CavcSUzF.js";import{r as u,U as m,aS as E,e as t,V as p,Z as r,Y as I,aT as R,d as P}from"./chunk.vendor.bx9jdKRu.js";import"./chunk.vendor-lodash.DXsmYJeZ.js";import"./chunk.APageTabTitle.58wIcnCk.js";import"./chunk.AlohaHighlightjs.ZYRFUDZw.js";import"./chunk.ATable.BF4Vj4yq.js";import"./chunk.translations-ar.B1tU3Thi.js";import"./chunk.translations-de.6bqr14hf.js";import"./chunk.translations-en.kS_X1Dpm.js";import"./chunk.translations-es.Bh18-jGc.js";import"./chunk.translations-fr.DCACfn4Y.js";import"./chunk.translations-hr.CK0n_g9T.js";import"./chunk.translations-it.BjZrT9vw.js";import"./chunk.translations-ru.XVlwDvpe.js";function B(){return{codeHtml:`<a-multiselect-ordered
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
<div>model2: {{ model2 }}</div>`}}function M(){return{codeJs:`import {
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
};`}}const q={name:"PageMultiselectOrderedBasic",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),o=u(void 0),{codeHtml:d}=B(),{codeJs:s}=M();return{codeHtml:d,codeJs:s,data:e,model1:a,model2:o}}};function H(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:E(()=>[r(_,{modelValue:e.model1,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model1=l),data:e.data,"key-id":"value","key-label":"label",label:"Select 1"},null,8,["modelValue","data"]),I("div",null,"model1: "+R(e.model1),1),r(_,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model2=l),data:e.data,"key-id":"value","key-label":"label",label:"Select 2"},null,8,["modelValue","data"]),I("div",null,"model2: "+R(e.model2),1)]),_:1},8,["code-html","code-js"])}const k=c(q,[["render",H]]);function $(){return{codeHtml:`<a-multiselect-ordered
  :change="changeModel"
  :model-value="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`}}function V(){return{codeJs:`import {
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
};`}}const J={name:"PageMultiselectOrderedChange",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),o=({model:i,id:_,props:n})=>{a.value=i,console.log(_,n)},{codeHtml:d}=$(),{codeJs:s}=V();return{changeModel:o,codeHtml:d,codeJs:s,data:e,model:a}}};function j(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:E(()=>[r(_,{change:e.changeModel,"model-value":e.model,data:e.data,"key-id":"value","key-label":"label",label:"Select"},null,8,["change","model-value","data"]),I("div",null,"model: "+R(e.model),1)]),_:1},8,["code-html","code-js"])}const G=c(J,[["render",j]]);function K(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  errors="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function Y(){return{codeJs:`import {
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
};`}}const F={name:"PageMultiselectOrderedErrors",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),{codeHtml:o}=K(),{codeJs:d}=Y();return{codeHtml:o,codeJs:d,data:e,model:a}}};function X(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:E(()=>[r(_,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),data:e.data,errors:"Aloha","key-id":"value","key-label":"label",label:"Select"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const w=c(F,[["render",X]]);function W(){return{codeHtml:`<a-multiselect-ordered
  v-model="model"
  :data="data"
  help-text="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`}}function x(){return{codeJs:`import {
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
};`}}const Q={name:"PageMultiselectOrderedHelpText",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),{codeHtml:o}=W(),{codeJs:d}=x();return{codeHtml:o,codeJs:d,data:e,model:a}}};function Z(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:E(()=>[r(_,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),data:e.data,"help-text":"Aloha","key-id":"value","key-label":"label",label:"Select"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const z=c(Q,[["render",Z]]);function ee(){return{codeHtml:`<a-multiselect-ordered
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
></a-multiselect-ordered>`}}function ae(){return{codeJs:`import {
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
};`}}const le={name:"PageMultiselectOrderedReadonly",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),o=u(void 0),{codeHtml:d}=ee(),{codeJs:s}=ae();return{codeHtml:d,codeJs:s,data:e,model1:a,model2:o}}};function te(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:E(()=>[r(_,{modelValue:e.model1,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model1=l),data:e.data,readonly:!0,"key-id":"value","key-label":"label",label:"Select 1"},null,8,["modelValue","data"]),r(_,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model2=l),data:e.data,readonly:!0,"key-id":"value","key-label":"label",label:"Select 2"},null,8,["modelValue","data"]),r(_,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[2]||(a[2]=l=>e.model2=l),data:e.data,readonly:!0,"key-id":"value","key-label":"label",label:"Select 3","readonly-default":"-"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const oe=c(le,[["render",te]]);function de(){return{codeHtml:`<a-multiselect-ordered
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
<div>model: {{ model }}</div>`}}function _e(){return{codeJs:`import {
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
};`}}const re={name:"PageMultiselectOrderedSearchTextInHtml",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const{codeHtml:e}=de(),{codeJs:a}=_e(),o=[{label:"<span>Aloha</span> <strong>1</strong>",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],d=u(["aloha_7"]);return{codeHtml:e,codeJs:a,data:o,model:d}}},ne={class:"a_columns a_columns_count_12"},se={class:"a_column a_column_6 a_columns_count_12_touch"};function ie(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html"]},{default:E(()=>[I("div",ne,[I("div",se,[r(_,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),data:e.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),r(_,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model=l),data:e.data,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),I("div",null,"model: "+R(e.model),1)])])]),_:1},8,["code-html","code-js"])}const ue=c(re,[["render",ie]]);function ce(){return{codeHtml:`<a-multiselect-ordered
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
></a-multiselect-ordered>`}}function me(){return{codeJs:`import {
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
};`}}const Ee={name:"PageMultiselectOrderedSelectDeselectAll",components:{AlohaExample:S,AMultiselectOrdered:A},setup(){const e=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],a=u(["aloha_4","aloha_2"]),o=u([]),d=u([]),{codeHtml:s}=ce(),{codeJs:i}=me();return{codeHtml:s,codeJs:i,data:e,model1:a,model2:o,model3:d}}};function pe(e,a,o,d,s,i){const _=t("a-multiselect-ordered"),n=t("aloha-example");return p(),m(n,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_MULTISELECT_ORDERED_GROUP_SELECT_DESELECT_ALL_HEADER_",description:"_A_MULTISELECT_ORDERED_GROUP_SELECT_DESELECT_ALL_DESCRIPTION_",props:["is-select-all","is-deselect-all"]},{default:E(()=>[r(_,{modelValue:e.model1,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model1=l),data:e.data,"is-deselect-all":!0,"is-select-all":!0,"key-id":"value","key-label":"label",label:"Select 1"},null,8,["modelValue","data"]),r(_,{class:"a_mt_3",modelValue:e.model2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.model2=l),data:e.data,"is-deselect-all":!0,"key-id":"value","key-label":"label",label:"Select 2"},null,8,["modelValue","data"]),r(_,{class:"a_mt_3",modelValue:e.model3,"onUpdate:modelValue":a[2]||(a[2]=l=>e.model3=l),data:e.data,"is-select-all":!0,"key-id":"value","key-label":"label",label:"Select 3"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const Se=c(Ee,[["render",pe]]);function Ae(){return{dataEvents:[{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Ie(){const e=P(()=>U({placeholder:"_A_MULTISELECT_ORDERED_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AMultiselectOrdered${e.value?` (${e.value})`:""}`)}}function Re(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"attributes-btn-deselect-all",description:"_A_MULTISELECT_ORDERED_PROPS_ATTRIBUTES_BTN_DESELECT_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"attributes-btn-select-all",description:"_A_MULTISELECT_ORDERED_PROPS_ATTRIBUTES_BTN_SELECT_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"attributes-fieldset",description:"_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"btn-delete-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_primary",required:!1},{name:"btn-delete-icon",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DELETE_ICON_DESCRIPTION_",type:"String",default:"Trash",required:!1},{name:"btn-down-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_outline_secondary",required:!1},{name:"btn-down-icon",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_DOWN_ICON_DESCRIPTION_",type:"String",default:"ChevronDown",required:!1},{name:"btn-group-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_GROUP_CLASS_DESCRIPTION_",type:"String",default:"a_btn_group",required:!1},{name:"btn-up-class",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_UP_CLASS_DESCRIPTION_",type:"String / Object",default:"a_btn a_btn_outline_secondary",required:!1},{name:"btn-up-icon",description:"_A_MULTISELECT_ORDERED_PROPS_BTN_UP_ICON_DESCRIPTION_",type:"String",default:"ChevronUp",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_m_select_ordered_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-deselect-all",description:"_A_UI_PROPS_IS_DESELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-select-all",description:"_A_UI_PROPS_IS_SELECT_ALL_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"list-item-class",description:"_A_MULTISELECT_ORDERED_PROPS_LIST_ITEM_CLASS_DESCRIPTION_",type:"String / Object / Array",default:"a_list_group__item",required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"options",description:"_A_UI_PROPS_OPTIONS_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-text-in-html",description:"_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"select-button-class",description:"_A_SELECT_PROPS_BUTTON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"select-button-class-default",description:"_A_SELECT_PROPS_BUTTON_CLASS_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_form_control a_select_toggle",required:!1},{name:"select-caret-icon",description:"_A_SELECT_PROPS_CARET_ICON_DESCRIPTION_",type:"String / Object",default:"ChevronDown",required:!1},{name:"select-has-caret",description:"_A_SELECT_PROPS_HAS_CARET_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-in-body",description:"_A_SELECT_PROPS_IN_BODY_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-is-close-by-click",description:"_A_SELECT_PROPS_IS_CLOSE_BY_CLICK_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"select-is-label-float",description:"_A_SELECT_PROPS_IS_LABEL_FLOAT_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-is-selection-closeable",description:"_A_SELECT_PROPS_IS_SELECTION_CLOSEABLE_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"select-label",description:"_A_SELECT_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:"_A_MULTISELECT_ORDERED_LABEL_SELECT_",required:!1},{name:"select-label-class",description:"_A_SELECT_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"select-label-screenreader",description:"_A_SELECT_PROPS_LABEL_SCREENREADER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"select-menu-class",description:"_A_SELECT_PROPS_MENU_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"select-menu-width-type",description:"_A_SELECT_PROPS_MENU_WIDTH_TYPE_DESCRIPTION_",type:"String",default:"as_button",required:!1},{name:"select-placeholder",description:"_A_SELECT_PROPS_PLACEHOLDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"select-placement",description:"_A_SELECT_PROPS_PLACEMENT_DESCRIPTION_",type:"String",default:"bottom-end",required:!1},{name:"select-popper-container-id",description:"_A_SELECT_PROPS_POPPER_CONTAINER_ID_DESCRIPTION_",type:"String",default:"a_select_container",required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:"asc",required:!1},{name:"texts",description:"_A_MULTISELECT_ORDERED_PROPS_TEXTS_DESCRIPTION_",type:"String",default:`{
        btnDeleteTitle: "_A_MULTISELECT_ORDERED_BTN_DELETE_",
        btnDownTitle: "_A_MULTISELECT_ORDERED_BTN_DOWN_",
        btnGroupAriaLabel: "_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_",
        btnUpTitle: "_A_MULTISELECT_ORDERED_BTN_UP_",
        deselectAll: "_A_MULTISELECT_ORDERED_DESELECT_ALL_",
        groupAllAriaLabel: "_A_MULTISELECT_ORDERED_GROUP_ALL_",
        modelEmpty: "_A_MULTISELECT_ORDERED_MODEL_EMPTY_",
        selectAll: "_A_MULTISELECT_ORDERED_SELECT_ALL_",
      }`,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Pe(){return{dataTranslate:["_A_MULTISELECT_ORDERED_BTN_DELETE_","_A_MULTISELECT_ORDERED_BTN_DOWN_","_A_MULTISELECT_ORDERED_BTN_GROUP_ARIA_LABEL_","_A_MULTISELECT_ORDERED_BTN_UP_","_A_MULTISELECT_ORDERED_DESELECT_ALL_","_A_MULTISELECT_ORDERED_GROUP_ALL_","_A_MULTISELECT_ORDERED_LABEL_SELECT_","_A_MULTISELECT_ORDERED_MODEL_EMPTY_","_A_MULTISELECT_ORDERED_SELECT_ALL_"]}}const Oe={name:"PageMultiselectOrdered",components:{AlohaPage:g,AlohaTableProps:y,AlohaTableTranslate:N,ATranslation:v,PageMultiselectOrderedBasic:k,PageMultiselectOrderedChange:G,PageMultiselectOrderedErrors:w,PageMultiselectOrderedHelpText:z,PageMultiselectOrderedReadonly:oe,PageMultiselectOrderedSearchTextInHtml:ue,PageMultiselectOrderedSelectDeselectAll:Se},setup(){const{pageTitle:e}=Ie(),{dataProps:a}=Re(),{dataTranslate:o}=Pe(),{dataEvents:d}=Ae();return{dataEvents:d,dataProps:a,dataTranslate:o,pageTitle:e}}};function Te(e,a,o,d,s,i){const _=t("a-translation"),n=t("page-multiselect-ordered-basic"),l=t("page-multiselect-ordered-change"),O=t("page-multiselect-ordered-help-text"),T=t("page-multiselect-ordered-errors"),f=t("page-multiselect-ordered-select-deselect-all"),h=t("page-multiselect-ordered-search-text-in-html"),D=t("page-multiselect-ordered-readonly"),b=t("aloha-table-props"),L=t("aloha-table-translate"),C=t("aloha-page");return p(),m(C,{"page-title":e.pageTitle},{body:E(()=>[r(_,{tag:"p",html:"_A_MULTISELECT_ORDERED_DESCRIPTION_"}),r(n),r(l),r(O),r(T),r(f),r(h),r(D),r(b,{data:e.dataProps},null,8,["data"]),r(L,{data:e.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Ve=c(Oe,[["render",Te]]);export{Ve as default};
