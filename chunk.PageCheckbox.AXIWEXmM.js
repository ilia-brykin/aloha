import{A as k,a as M}from"./chunk.AlohaExample.D-BUV1j9.js";import{A as X}from"./chunk.AlohaTableProps.D_3upck0.js";import{A as Y}from"./chunk.AlohaTableTranslate.C7XFuXmT.js";import{Q as f,_ as m,g as w,A as F}from"./bundle.index.B_GRLDdd.js";import{r as i,U as u,aS as b,e as d,V as A,Z as t,Y as h,aT as p,d as P}from"./chunk.vendor.BCr5dHHZ.js";import"./chunk.vendor-lodash.1bZ290WX.js";import"./chunk.APageTabTitle.CHSnL-Cd.js";import"./chunk.AlohaHighlightjs.YRvFUhHX.js";import"./chunk.ATable.ErVspNMH.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function W(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Q(){return{codeJs:`import {
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
};`}}const Z={name:"PageCheckboxBasic",components:{ACheckbox:f,AlohaExample:k},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:n}=W(),{codeJs:_}=Q();return{codeHtml:n,codeJs:_,data:a,model:l}}};function z(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:b(()=>[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)]),_:1},8,["code-html","code-js"])}const aa=m(Z,[["render",z]]);function la(){return{codeHtml:`<a-checkbox
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ea(){return{codeJs:`import {
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
};`}}const oa={name:"PageCheckboxChange",components:{ACheckbox:f,AlohaExample:k},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),n=({model:s,id:o,props:c})=>{l.value=s,console.log(o,c)},{codeHtml:_}=la(),{codeJs:r}=ea();return{changeModel:n,codeHtml:_,codeJs:r,data:a,model:l}}};function da(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:b(()=>[t(o,{change:a.changeModel,data:a.data,"model-value":a.model,label:"Aloha"},null,8,["change","data","model-value"]),h("div",null,"model: "+p(a.model),1)]),_:1},8,["code-html","code-js"])}const ta=m(oa,[["render",da]]);function na(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function _a(){return{codeJs:`import {
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
};`}}const ha={name:"PageCheckboxCollapse",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=na(),{codeJs:l}=_a(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_,toggleCollapse:({isCollapsed:s,id:o,props:c})=>{console.log(s,o,c)}}}},ca={class:"a_columns a_columns_count_12"},sa={class:"a_column a_column_6 a_columns_count_12_touch"};function ra(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:b(()=>[h("div",ca,[h("div",sa,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),collapsible:!0,data:a.data,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),collapsible:!0,data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),collapsible:!0,data:a.data,"is-collapsed":!0,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ia=m(ha,[["render",ra]]);function ma(){return{codeHtml:`<a-checkbox
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
  label="Data extra (Array of Objects)"
></a-checkbox>
<div>model2: {{ model2 }}</div>`}}function ua(){return{codeJs:`import {
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
};`}}const ba={name:"PageCheckboxDataExtra",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=ma(),{codeJs:l}=ua(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],r=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],s=i(void 0),o=i(void 0);return{codeHtml:a,codeJs:l,data:n,dataExtraArrayOfArrays:_,dataExtraArrayOfObjects:r,model1:s,model2:o}}},Aa={class:"a_columns a_columns_count_12"},pa={class:"a_column a_column_6 a_columns_count_12_touch"};function ka(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_DATA_EXTRA_HEADER_",description:"_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:b(()=>[h("div",Aa,[h("div",pa,[t(o,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model1=e),"data-extra":a.dataExtraArrayOfArrays,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)"},null,8,["modelValue","data-extra","data"]),h("div",null,"model1: "+p(a.model1),1),t(o,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model2=e),"data-extra":a.dataExtraArrayOfObjects,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)"},null,8,["modelValue","data-extra","data"]),h("div",null,"model2: "+p(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const fa=m(ba,[["render",ka]]);function Ra(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Checkbox"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Pa(){return{codeJs:`import {
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
};`}}const Ia={name:"PageCheckboxError",components:{ACheckbox:f,AlohaExample:k},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:n}=Ra(),{codeJs:_}=Pa();return{codeHtml:n,codeJs:_,data:a,model:l}}};function Ea(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:b(()=>[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,errors:"Aloha",label:"Checkbox"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)]),_:1},8,["code-html","code-js"])}const Ca=m(Ia,[["render",Ea]]);function ya(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Sa(){return{codeJs:`import {
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
};`}}const Oa={name:"PageCheckboxGroup",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=ya(),{codeJs:l}=Sa(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_,onGroupLabelCallback:({group:s,item:o})=>s==="_not_grouped"?"---":s==="Alex"?`-${s}-`:s}}},xa={class:"a_columns a_columns_count_12"},Ba={class:"a_column a_column_6 a_columns_count_12_touch"};function ga(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_GROUP_HEADER_",description:"_A_UI_GROUP_GROUP_DESCRIPTION_",props:["key-group","key-group-label-callback"]},{default:b(()=>[h("div",xa,[h("div",Ba,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"key-group"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-group-label-callback":a.onGroupLabelCallback,"key-id":"id","key-label":"label",label:"key-group + key-group-callback"},null,8,["modelValue","data","key-group-label-callback"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Da=m(Oa,[["render",ga]]);function va(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Ta(){return{codeJs:`import {
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
};`}}const Ua={name:"PageCheckboxHasBorder",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=va(),{codeJs:l}=Ta(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},$a={class:"a_columns a_columns_count_12"},Ha={class:"a_column a_column_6 a_columns_count_12_touch"};function Na(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:b(()=>[h("div",$a,[h("div",Ha,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"has-border":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"has-border":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ka=m(Ua,[["render",Na]]);function La(){return{codeHtml:`<a-checkbox
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
<div>model1: {{ model1 }}</div>`}}function Va(){return{codeJs:`import {
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
};`}}const Ja={name:"PageCheckboxHasControlCheckbox",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=La(),{codeJs:l}=Va(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0),r=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_,model1:r}}},Ga={class:"a_columns a_columns_count_12"},ja={class:"a_column a_column_6 a_columns_count_12_touch"};function qa(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_CHECKBOX_GROUP_HAS_CONTROL_CHECKBOX_HEADER_",description:"_A_CHECKBOX_GROUP_HAS_CONTROL_CHECKBOX_DESCRIPTION_",props:"has-control-checkbox"},{default:b(()=>[h("div",Ga,[h("div",ja,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"has-control-checkbox":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"has-control-checkbox":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model1,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model1=e),data:a.data,"has-control-checkbox":!0,inline:!0,"key-id":"id","key-label":"label",label:"Aloha inline"},null,8,["modelValue","data"]),h("div",null,"model1: "+p(a.model1),1)])])]),_:1},8,["code-html","code-js"])}const Ma=m(Ja,[["render",qa]]);function Xa(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Checkbox"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Ya(){return{codeJs:`import {
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
};`}}const wa={name:"PageCheckboxHelpText",components:{ACheckbox:f,AlohaExample:k},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:n}=Xa(),{codeJs:_}=Ya();return{codeHtml:n,codeJs:_,data:a,model:l}}};function Fa(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:b(()=>[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"help-text":"Aloha",label:"Checkbox"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)]),_:1},8,["code-html","code-js"])}const Wa=m(wa,[["render",Fa]]);function Qa(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Za(){return{codeJs:`import {
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
};`}}const za={name:"PageCheckboxInline",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=Qa(),{codeJs:l}=Za(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},al={class:"a_columns a_columns_count_12"},ll={class:"a_column a_column_6 a_columns_count_12_touch"};function el(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_INLINE_HEADER_",description:"_A_UI_GROUP_INLINE_DESCRIPTION_",props:"inline"},{default:b(()=>[h("div",al,[h("div",ll,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,inline:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,inline:!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ol=m(za,[["render",el]]);function dl(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function tl(){return{codeJs:`import {
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
};`}}const nl={name:"PageCheckboxIsButtonGroup",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=dl(),{codeJs:l}=tl(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}};function _l(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_",description:"_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_",props:["is-button-group","class-button-group-default"]},{default:b(()=>[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"is-button-group":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"is-button-group":!0,"class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),data:a.data,"is-button-group":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)]),_:1},8,["code-html","code-js"])}const hl=m(nl,[["render",_l]]);function cl(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function sl(){return{codeJs:`import {
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
};`}}const rl={name:"PageCheckboxIsDataSimpleArray",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=cl(),{codeJs:l}=sl(),n=["Aloha 1","Aloha 2","Aloha 3","Aloha 4","Aloha 5","Aloha 6"],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},il={class:"a_columns a_columns_count_12"},ml={class:"a_column a_column_6 a_columns_count_12_touch"};function ul(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:"is-data-simple-array"},{default:b(()=>[h("div",il,[h("div",ml,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"is-data-simple-array":!0,label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const bl=m(rl,[["render",ul]]);function Al(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function pl(){return{codeJs:`import {
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
};`}}const kl={name:"PageCheckboxIsWidthAuto",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=Al(),{codeJs:l}=pl(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},fl={class:"a_columns a_columns_count_12"},Rl={class:"a_column a_column_6 a_columns_count_12_touch"};function Pl(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_",description:"_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_",props:"is-width-auto"},{default:b(()=>[h("div",fl,[h("div",Rl,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"is-width-auto":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"is-width-auto":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Il=m(kl,[["render",Pl]]);function El(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Cl(){return{codeJs:`import {
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
};`}}const yl={name:"PageCheckboxKeyDisabled",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=El(),{codeJs:l}=Cl(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},Sl={class:"a_columns a_columns_count_12"},Ol={class:"a_column a_column_6 a_columns_count_12_touch"};function xl(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_DISABLED_HEADER_",description:"_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:b(()=>[h("div",Sl,[h("div",Ol,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Bl=m(yl,[["render",xl]]);function gl(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Dl(){return{codeJs:`import {
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
};`}}const vl={name:"PageCheckboxKeyLabelCallback",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=gl(),{codeJs:l}=Dl(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_,onKeyLabelCallback:({item:s})=>`--${s.label}--`}}},Tl={class:"a_columns a_columns_count_12"},Ul={class:"a_column a_column_6 a_columns_count_12_touch"};function $l(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_",description:"_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_",props:"key-label-callback"},{default:b(()=>[h("div",Tl,[h("div",Ul,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-label-callback":a.onKeyLabelCallback,"key-id":"id",label:"Aloha"},null,8,["modelValue","data","key-label-callback"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Hl=m(vl,[["render",$l]]);function Nl(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Kl(){return{codeJs:`import {
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
};`}}const Ll={name:"PageCheckboxKeyTitle",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=Nl(),{codeJs:l}=Kl(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_,onKeyTitleCallback:({item:s})=>`--${s.label}--`}}},Vl={class:"a_columns a_columns_count_12"},Jl={class:"a_column a_column_6 a_columns_count_12_touch"};function Gl(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_TITLE_HEADER_",description:"_A_UI_GROUP_KEY_TITLE_DESCRIPTION_",props:["key-title","key-title-callback"]},{default:b(()=>[h("div",Vl,[h("div",Jl,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label","key-title":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-title-callback":a.onKeyTitleCallback,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data","key-title-callback"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const jl=m(Ll,[["render",Gl]]);function ql(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Ml(){return{codeJs:`import {
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
};`}}const Xl={name:"PageCheckboxLabelScreenReader",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=ql(),{codeJs:l}=Ml(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},Yl={class:"a_columns a_columns_count_12"},wl={class:"a_column a_column_6 a_columns_count_12_touch"};function Fl(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:"label-screen-reader"},{default:b(()=>[h("div",Yl,[h("div",wl,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label","label-screen-reader":"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Wl=m(Xl,[["render",Fl]]);function Ql(){return{codeHtml:`<a-checkbox
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
></a-checkbox>`}}function Zl(){return{codeJs:`import {
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
};`}}const zl={name:"PageCheckboxReadonly",components:{ACheckbox:f,AlohaExample:k},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i(["aloha_1","aloha_4"]),n=i(void 0),{codeHtml:_}=Ql(),{codeJs:r}=Zl();return{codeHtml:_,codeJs:r,data:a,model1:l,model2:n}}};function ae(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:b(()=>[t(o,{"model-value":a.model1,data:a.data,readonly:!0,label:"Checkbox 1"},null,8,["model-value","data"]),t(o,{class:"a_mt_3","model-value":a.model2,data:a.data,readonly:!0,label:"Checkbox 2"},null,8,["model-value","data"]),t(o,{class:"a_mt_3","model-value":a.model2,data:a.data,readonly:!0,"help-text":"Aloha",label:"Checkbox 3","readonly-default":"-"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const le=m(zl,[["render",ae]]);function ee(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function oe(){return{codeJs:`import {
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
};`}}const de={name:"PageCheckboxSearch",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=ee(),{codeJs:l}=oe(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},te={class:"a_columns a_columns_count_12"},ne={class:"a_column a_column_6 a_columns_count_12_touch"};function _e(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_HEADER_",description:"_A_UI_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:b(()=>[h("div",te,[h("div",ne,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const he=m(de,[["render",_e]]);function ce(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function se(){return{codeJs:`import {
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
};`}}const re={name:"PageCheckboxSortOrder",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=ce(),{codeJs:l}=se(),n=[{label:"Aloha 8",id:"aloha_8"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 7",id:"aloha_7"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},ie={class:"a_columns a_columns_count_12"},me={class:"a_column a_column_6 a_columns_count_12_touch"};function ue(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_DESCRIPTION_",props:"sort-order"},{default:b(()=>[h("div",ie,[h("div",me,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"sort-order":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"asc"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"desc"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const be=m(re,[["render",ue]]);function Ae(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function pe(){return{codeJs:`import {
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
};`}}const ke={name:"PageCheckboxSortOrderGroup",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=Ae(),{codeJs:l}=pe(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},fe={class:"a_columns a_columns_count_12"},Re={class:"a_column a_column_6 a_columns_count_12_touch"};function Pe(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_",props:["sort-order-group"]},{default:b(()=>[h("div",fe,[h("div",Re,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"sort-order-group":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"asc"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"desc"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ie=m(ke,[["render",Pe]]);function Ee(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Ce(){return{codeJs:`import {
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
};`}}const ye={name:"PageCheckboxTranslateData",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=Ee(),{codeJs:l}=Ce(),n=[{label:"_A_UI_ELEMENT_0_",id:"aloha_0"},{label:"_A_UI_ELEMENT_1_",id:"aloha_1"},{label:"_A_UI_ELEMENT_2_",id:"aloha_2"},{label:"_A_UI_ELEMENT_3_",id:"aloha_3"},{label:"_A_UI_ELEMENT_4_",id:"aloha_4"},{label:"_A_UI_ELEMENT_5_",id:"aloha_5"},{label:"_A_UI_ELEMENT_6_",id:"aloha_6"},{label:"_A_UI_ELEMENT_7_",id:"aloha_7"},{label:"_A_UI_ELEMENT_8_",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},Se={class:"a_columns a_columns_count_12"},Oe={class:"a_column a_column_6 a_columns_count_12_touch"};function xe(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:b(()=>[h("div",Se,[h("div",Oe,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"translate-data":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Be=m(ye,[["render",xe]]);function ge(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function De(){return{codeJs:`import {
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
};`}}const ve={name:"PageCheckboxTwoColumns",components:{ACheckbox:f,AlohaExample:k},setup(){const{codeHtml:a}=ge(),{codeJs:l}=De(),n=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],_=i(void 0);return{codeHtml:a,codeJs:l,data:n,model:_}}},Te={class:"a_columns a_columns_count_12"},Ue={class:"a_column a_column_6 a_columns_count_12_touch"};function $e(a,l,n,_,r,s){const o=d("a-checkbox"),c=d("aloha-example");return A(),u(c,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TWO_COLUMNS_HEADER_",description:"_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_",props:"class-data-parent"},{default:b(()=>[h("div",Te,[h("div",Ue,[t(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),t(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+p(a.model),1)])])]),_:1},8,["code-html","code-js"])}const He=m(ve,[["render",$e]]);function Ne(){return{dataEvents:[{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Ke(){const a=P(()=>w({placeholder:"_A_CHECKBOX_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ACheckbox${a.value?` (${a.value})`:""}`)}}function Le(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-button-group-default",description:"_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",type:"String / Object / Array",default:"a_btn a_btn_outline_primary",required:!1},{name:"class-data-parent",description:"_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"has-control-checkbox",description:"_A_CHECKBOX_PROPS_HAS_CONTROL_CHECKBOX_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_checkbox_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"inline",description:"_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-button-group",description:"_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"slot-append-name",description:"_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_CHECKBOX_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_CHECKBOX_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_CHECKBOX_SEARCH_",
      })`,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Ve(){return{dataTranslate:["_A_CHECKBOX_HAS_NOT_ELEMENTS_WITH_SEARCH_","_A_CHECKBOX_SEARCH_"]}}const Je={name:"PageCheckbox",components:{AlohaPage:M,AlohaTableProps:X,AlohaTableTranslate:Y,ATranslation:F,PageCheckboxBasic:aa,PageCheckboxChange:ta,PageCheckboxCollapse:ia,PageCheckboxDataExtra:fa,PageCheckboxError:Ca,PageCheckboxGroup:Da,PageCheckboxHasBorder:Ka,PageCheckboxHasControlCheckbox:Ma,PageCheckboxHelpText:Wa,PageCheckboxInline:ol,PageCheckboxIsButtonGroup:hl,PageCheckboxIsDataSimpleArray:bl,PageCheckboxIsWidthAuto:Il,PageCheckboxKeyDisabled:Bl,PageCheckboxKeyLabelCallback:Hl,PageCheckboxKeyTitle:jl,PageCheckboxLabelScreenReader:Wl,PageCheckboxReadonly:le,PageCheckboxSearch:he,PageCheckboxSortOrder:be,PageCheckboxSortOrderGroup:Ie,PageCheckboxTranslateData:Be,PageCheckboxTwoColumns:He},setup(){const{pageTitle:a}=Ke(),{dataProps:l}=Le(),{dataTranslate:n}=Ve(),{dataEvents:_}=Ne();return{dataEvents:_,dataProps:l,dataTranslate:n,pageTitle:a}}};function Ge(a,l,n,_,r,s){const o=d("a-translation"),c=d("page-checkbox-basic"),e=d("page-checkbox-change"),I=d("page-checkbox-help-text"),E=d("page-checkbox-error"),C=d("page-checkbox-label-screen-reader"),y=d("page-checkbox-group"),S=d("page-checkbox-search"),O=d("page-checkbox-key-disabled"),x=d("page-checkbox-translate-data"),B=d("page-checkbox-is-button-group"),g=d("page-checkbox-collapse"),D=d("page-checkbox-data-extra"),v=d("page-checkbox-inline"),T=d("page-checkbox-has-control-checkbox"),U=d("page-checkbox-two-columns"),$=d("page-checkbox-has-border"),H=d("page-checkbox-is-data-simple-array"),N=d("page-checkbox-is-width-auto"),K=d("page-checkbox-key-label-callback"),L=d("page-checkbox-key-title"),V=d("page-checkbox-sort-order"),J=d("page-checkbox-sort-order-group"),G=d("page-checkbox-readonly"),R=d("aloha-table-props"),j=d("aloha-table-translate"),q=d("aloha-page");return A(),u(q,{"page-title":a.pageTitle},{body:b(()=>[t(o,{tag:"p",html:"_A_CHECKBOX_COMPONENT_DESCRIPTION_"}),t(c),t(e),t(I),t(E),t(C),t(y),t(S),t(O),t(x),t(B),t(g),t(D),t(v),t(T),t(U),t($),t(H),t(N),t(K),t(L),t(V),t(J),t(G),t(R,{data:a.dataProps},null,8,["data"]),t(R,{"table-label":"Events",data:a.dataEvents,columns:["name","type","description"]},null,8,["data"]),t(j,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const _o=m(Je,[["render",Ge]]);export{_o as default};
