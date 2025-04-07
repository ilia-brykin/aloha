import{A as R,a as w}from"./chunk.AlohaExample.CsrLl0kL.js";import{A as X}from"./chunk.AlohaTableProps.CrCtSqTB.js";import{A as F}from"./chunk.AlohaTableTranslate.DIgSoIRH.js";import{L as f,_ as u,g as W,A as Q}from"./bundle.index.DSeGNeKz.js";import{r as m,U as c,aS as p,e as d,V as A,Z as r,Y as _,aT as b,d as P}from"./chunk.vendor.CJgiAfkr.js";import"./chunk.vendor-lodash.UgDJRseT.js";import"./chunk.APageTabTitle.BMBF49Tb.js";import"./chunk.AlohaHighlightjs.CS2rrB7v.js";import"./chunk.ATable.C2IMaX_l.js";import"./chunk.translations-ar.C215GjCi.js";import"./chunk.translations-de.2OTgW6Cj.js";import"./chunk.translations-en.BDnCg_Z9.js";import"./chunk.translations-es.BP9eJkFz.js";import"./chunk.translations-fr.BOe55yrn.js";import"./chunk.translations-hr.B3s_PrJE.js";import"./chunk.translations-it.Cc3k7wyX.js";import"./chunk.translations-ru.D-swuOFG.js";function Z(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
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
};`}}const x={name:"PageRadioBasic",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),{codeHtml:t}=Z(),{codeJs:n}=z();return{codeHtml:t,codeJs:n,data:a,model:l}}};function aa(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:p(()=>[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)]),_:1},8,["code-html","code-js"])}const la=u(x,[["render",aa]]);function oa(){return{codeHtml:`<a-radio
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function ea(){return{codeJs:`import {
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
};`}}const da={name:"PageRadioChange",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),t=({model:i,id:e,props:s})=>{l.value=i,console.log(e,s)},{codeHtml:n}=oa(),{codeJs:h}=ea();return{changeModel:t,codeHtml:n,codeJs:h,data:a,model:l}}};function ta(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[r(e,{change:a.changeModel,data:a.data,"model-value":a.model,label:"Aloha"},null,8,["change","data","model-value"]),_("div",null,"model: "+b(a.model),1)]),_:1},8,["code-html","code-js"])}const na=u(da,[["render",ta]]);function ra(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function _a(){return{codeJs:`import {
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
};`}}const sa={name:"PageRadioCollapse",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ra(),{codeJs:l}=_a(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,toggleCollapse:({isCollapsed:i,id:e,props:s})=>{console.log(i,e,s)}}}},ia={class:"a_columns a_columns_count_12"},ha={class:"a_column a_column_6 a_columns_count_12_touch"};function ma(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:p(()=>[_("div",ia,[_("div",ha,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),collapsible:!0,data:a.data,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),collapsible:!0,data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),collapsible:!0,data:a.data,"is-collapsed":!0,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ua=u(sa,[["render",ma]]);function ca(){return{codeHtml:`<a-radio
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
  label="Data extra (Array of Objects)"
></a-radio>
<div>model2: {{ model2 }}</div>`}}function pa(){return{codeJs:`import {
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
};`}}const Aa={name:"PageRadioDataExtra",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ca(),{codeJs:l}=pa(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],h=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],i=m(void 0),e=m(void 0);return{codeHtml:a,codeJs:l,data:t,dataExtraArrayOfArrays:n,dataExtraArrayOfObjects:h,model1:i,model2:e}}},ba={class:"a_columns a_columns_count_12"},Ra={class:"a_column a_column_6 a_columns_count_12_touch"};function fa(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_DATA_EXTRA_HEADER_",description:"_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:p(()=>[_("div",ba,[_("div",Ra,[r(e,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model1=o),"data-extra":a.dataExtraArrayOfArrays,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)"},null,8,["modelValue","data-extra","data"]),_("div",null,"model1: "+b(a.model1),1),r(e,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model2=o),"data-extra":a.dataExtraArrayOfObjects,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)"},null,8,["modelValue","data-extra","data"]),_("div",null,"model2: "+b(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Ia=u(Aa,[["render",fa]]);function Pa(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function Ea(){return{codeJs:`import {
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
};`}}const ga={name:"PageRadioError",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),{codeHtml:t}=Pa(),{codeJs:n}=Ea();return{codeHtml:t,codeJs:n,data:a,model:l}}};function ya(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,errors:"Aloha",label:"Radio"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)]),_:1},8,["code-html","code-js"])}const Sa=u(ga,[["render",ya]]);function Oa(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ba(){return{codeJs:`import {
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
};`}}const Da={name:"PageRadioGroup",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Oa(),{codeJs:l}=Ba(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onGroupLabelCallback:({group:i,item:e})=>i==="_not_grouped"?"---":i==="Alex"?`-${i}-`:i}}},va={class:"a_columns a_columns_count_12"},ka={class:"a_column a_column_6 a_columns_count_12_touch"};function Ta(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_GROUP_HEADER_",description:"_A_UI_GROUP_GROUP_DESCRIPTION_",props:["key-group","key-group-label-callback"]},{default:p(()=>[_("div",va,[_("div",ka,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"key-group"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-group-label-callback":a.onGroupLabelCallback,"key-id":"id","key-label":"label",label:"key-group + key-group-callback"},null,8,["modelValue","data","key-group-label-callback"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ca=u(Da,[["render",Ta]]);function Ua(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function $a(){return{codeJs:`import {
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
};`}}const Ha={name:"PageRadioHasBorder",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Ua(),{codeJs:l}=$a(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Na={class:"a_columns a_columns_count_12"},La={class:"a_column a_column_6 a_columns_count_12_touch"};function Ka(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:p(()=>[_("div",Na,[_("div",La,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"has-border":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"has-border":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Va=u(Ha,[["render",Ka]]);function Ja(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function Ga(){return{codeJs:`import {
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
};`}}const ja={name:"PageRadioHelpText",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),{codeHtml:t}=Ja(),{codeJs:n}=Ga();return{codeHtml:t,codeJs:n,data:a,model:l}}};function qa(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"help-text":"Aloha",label:"Radio"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)]),_:1},8,["code-html","code-js"])}const Ma=u(ja,[["render",qa]]);function Ya(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function wa(){return{codeJs:`import {
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
};`}}const Xa={name:"PageRadioInline",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Ya(),{codeJs:l}=wa(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Fa={class:"a_columns a_columns_count_12"},Wa={class:"a_column a_column_6 a_columns_count_12_touch"};function Qa(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_INLINE_HEADER_",description:"_A_UI_GROUP_INLINE_DESCRIPTION_",props:"inline"},{default:p(()=>[_("div",Fa,[_("div",Wa,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,inline:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,inline:!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Za=u(Xa,[["render",Qa]]);function za(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function xa(){return{codeJs:`import {
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
};`}}const al={name:"PageRadioIsButtonGroup",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=za(),{codeJs:l}=xa(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}};function ll(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_",description:"_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_",props:["is-button-group","class-button-group-default"]},{default:p(()=>[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-button-group":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"is-button-group":!0,"class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"is-button-group":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)]),_:1},8,["code-html","code-js"])}const ol=u(al,[["render",ll]]);function el(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function dl(){return{codeJs:`import {
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
};`}}const tl={name:"PageRadioIsDataSimpleArray",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=el(),{codeJs:l}=dl(),t=["Aloha 1","Aloha 2","Aloha 3","Aloha 4","Aloha 5","Aloha 6"],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},nl={class:"a_columns a_columns_count_12"},rl={class:"a_column a_column_6 a_columns_count_12_touch"};function _l(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:"is-data-simple-array"},{default:p(()=>[_("div",nl,[_("div",rl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-data-simple-array":!0,label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const sl=u(tl,[["render",_l]]);function il(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-model-array="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function hl(){return{codeJs:`import {
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
};`}}const ml={name:"PageRadioIsModelArray",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=il(),{codeJs:l}=hl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ul={class:"a_columns a_columns_count_12"},cl={class:"a_column a_column_6 a_columns_count_12_touch"};function pl(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_RADIO_GROUP_IS_MODEL_ARRAY_HEADER_",description:"_A_RADIO_GROUP_IS_MODEL_ARRAY_DESCRIPTION_",props:"is-model-array"},{default:p(()=>[_("div",ul,[_("div",cl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-model-array":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Al=u(ml,[["render",pl]]);function bl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Rl(){return{codeJs:`import {
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
};`}}const fl={name:"PageRadioIsWidthAuto",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=bl(),{codeJs:l}=Rl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Il={class:"a_columns a_columns_count_12"},Pl={class:"a_column a_column_6 a_columns_count_12_touch"};function El(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_",description:"_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_",props:"is-width-auto"},{default:p(()=>[_("div",Il,[_("div",Pl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-width-auto":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"is-width-auto":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const gl=u(fl,[["render",El]]);function yl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Sl(){return{codeJs:`import {
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
};`}}const Ol={name:"PageRadioKeyDisabled",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=yl(),{codeJs:l}=Sl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Bl={class:"a_columns a_columns_count_12"},Dl={class:"a_column a_column_6 a_columns_count_12_touch"};function vl(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_DISABLED_HEADER_",description:"_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[_("div",Bl,[_("div",Dl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const kl=u(Ol,[["render",vl]]);function Tl(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Cl(){return{codeJs:`import {
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
};`}}const Ul={name:"PageRadioKeyLabelCallback",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Tl(),{codeJs:l}=Cl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyLabelCallback:({item:i})=>`--${i.label}--`}}},$l={class:"a_columns a_columns_count_12"},Hl={class:"a_column a_column_6 a_columns_count_12_touch"};function Nl(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_",description:"_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_",props:"key-label-callback"},{default:p(()=>[_("div",$l,[_("div",Hl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-label-callback":a.onKeyLabelCallback,"key-id":"id",label:"Aloha"},null,8,["modelValue","data","key-label-callback"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ll=u(Ul,[["render",Nl]]);function Kl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Vl(){return{codeJs:`import {
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
};`}}const Jl={name:"PageRadioKeyTitle",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Kl(),{codeJs:l}=Vl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyTitleCallback:({item:i})=>`--${i.label}--`}}},Gl={class:"a_columns a_columns_count_12"},jl={class:"a_column a_column_6 a_columns_count_12_touch"};function ql(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_TITLE_HEADER_",description:"_A_UI_GROUP_KEY_TITLE_DESCRIPTION_",props:["key-title","key-title-callback"]},{default:p(()=>[_("div",Gl,[_("div",jl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label","key-title":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-title-callback":a.onKeyTitleCallback,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data","key-title-callback"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ml=u(Jl,[["render",ql]]);function Yl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function wl(){return{codeJs:`import {
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
};`}}const Xl={name:"PageRadioLabelScreenReader",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Yl(),{codeJs:l}=wl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Fl={class:"a_columns a_columns_count_12"},Wl={class:"a_column a_column_6 a_columns_count_12_touch"};function Ql(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:"label-screen-reader"},{default:p(()=>[_("div",Fl,[_("div",Wl,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label","label-screen-reader":"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Zl=u(Xl,[["render",Ql]]);function zl(){return{codeHtml:`<a-radio
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
></a-radio>`}}function xl(){return{codeJs:`import {
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
};`}}const ao={name:"PageRadioReadonly",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m("aloha_1"),t=m(["aloha_4","aloha_5"]),n=m(void 0),{codeHtml:h}=zl(),{codeJs:i}=xl();return{codeHtml:h,codeJs:i,data:a,model1:l,model2:t,model3:n}}};function lo(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[r(e,{"model-value":a.model1,data:a.data,readonly:!0,label:"Radio 1"},null,8,["model-value","data"]),r(e,{class:"a_mt_3","model-value":a.model2,data:a.data,"is-model-array":!0,readonly:!0,label:"Radio 2"},null,8,["model-value","data"]),r(e,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,label:"Radio 3"},null,8,["model-value","data"]),r(e,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,label:"Radio 4","readonly-default":"-"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const oo=u(ao,[["render",lo]]);function eo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function to(){return{codeJs:`import {
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
};`}}const no={name:"PageRadioSearch",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=eo(),{codeJs:l}=to(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ro={class:"a_columns a_columns_count_12"},_o={class:"a_column a_column_6 a_columns_count_12_touch"};function so(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_HEADER_",description:"_A_UI_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[_("div",ro,[_("div",_o,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const io=u(no,[["render",so]]);function ho(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function mo(){return{codeJs:`import {
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
};`}}const uo={name:"PageRadioSearchTextInHtml",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ho(),{codeJs:l}=mo(),t=[{label:"<span>Aloha</span> <strong>1</strong>",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],n=m("aloha_7");return{codeHtml:a,codeJs:l,data:t,model:n}}},co={class:"a_columns a_columns_count_12"},po={class:"a_column a_column_6 a_columns_count_12_touch"};function Ao(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html"]},{default:p(()=>[_("div",co,[_("div",po,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const bo=u(uo,[["render",Ao]]);function Ro(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function fo(){return{codeJs:`import {
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
};`}}const Io={name:"PageRadioSortOrder",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Ro(),{codeJs:l}=fo(),t=[{label:"Aloha 8",id:"aloha_8"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 7",id:"aloha_7"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Po={class:"a_columns a_columns_count_12"},Eo={class:"a_column a_column_6 a_columns_count_12_touch"};function go(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_DESCRIPTION_",props:"sort-order"},{default:p(()=>[_("div",Po,[_("div",Eo,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"sort-order":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"asc"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"desc"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const yo=u(Io,[["render",go]]);function So(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Oo(){return{codeJs:`import {
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
};`}}const Bo={name:"PageRadioSortOrderGroup",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=So(),{codeJs:l}=Oo(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Do={class:"a_columns a_columns_count_12"},vo={class:"a_column a_column_6 a_columns_count_12_touch"};function ko(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_",props:["sort-order-group"]},{default:p(()=>[_("div",Do,[_("div",vo,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"sort-order-group":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"asc"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"desc"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const To=u(Bo,[["render",ko]]);function Co(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Uo(){return{codeJs:`import {
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
};`}}const $o={name:"PageRadioTranslateData",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Co(),{codeJs:l}=Uo(),t=[{label:"_A_UI_ELEMENT_0_",id:"aloha_0"},{label:"_A_UI_ELEMENT_1_",id:"aloha_1"},{label:"_A_UI_ELEMENT_2_",id:"aloha_2"},{label:"_A_UI_ELEMENT_3_",id:"aloha_3"},{label:"_A_UI_ELEMENT_4_",id:"aloha_4"},{label:"_A_UI_ELEMENT_5_",id:"aloha_5"},{label:"_A_UI_ELEMENT_6_",id:"aloha_6"},{label:"_A_UI_ELEMENT_7_",id:"aloha_7"},{label:"_A_UI_ELEMENT_8_",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Ho={class:"a_columns a_columns_count_12"},No={class:"a_column a_column_6 a_columns_count_12_touch"};function Lo(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[_("div",Ho,[_("div",No,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"translate-data":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ko=u($o,[["render",Lo]]);function Vo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Jo(){return{codeJs:`import {
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
};`}}const Go={name:"PageRadioTwoColumns",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Vo(),{codeJs:l}=Jo(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},jo={class:"a_columns a_columns_count_12"},qo={class:"a_column a_column_6 a_columns_count_12_touch"};function Mo(a,l,t,n,h,i){const e=d("a-radio"),s=d("aloha-example");return A(),c(s,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TWO_COLUMNS_HEADER_",description:"_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_",props:"class-data-parent"},{default:p(()=>[_("div",jo,[_("div",qo,[r(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_("div",null,"model: "+b(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Yo=u(Go,[["render",Mo]]);function wo(){return{dataEvents:[{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Xo(){const a=P(()=>W({placeholder:"_A_RADIO_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ARadio${a.value?` (${a.value})`:""}`)}}function Fo(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"attributes-fieldset",description:"_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-button-group-default",description:"_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",type:"String / Object / Array",default:"a_btn a_btn_outline_primary",required:!1},{name:"class-data-parent",description:"_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_radio_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"inline",description:"_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-button-group",description:"_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-model-array",description:"_A_RADIO_PROPS_IS_MODEL_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-text-in-html",description:"_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"slot-append-name",description:"_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_RADIO_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_RADIO_SEARCH_",
      })`,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Wo(){return{dataTranslate:["_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_","_A_RADIO_SEARCH_"]}}const Qo={name:"PageRadio",components:{AlohaPage:w,AlohaTableProps:X,AlohaTableTranslate:F,ATranslation:Q,PageRadioBasic:la,PageRadioChange:na,PageRadioCollapse:ua,PageRadioDataExtra:Ia,PageRadioError:Sa,PageRadioGroup:Ca,PageRadioHasBorder:Va,PageRadioHelpText:Ma,PageRadioInline:Za,PageRadioIsButtonGroup:ol,PageRadioIsDataSimpleArray:sl,PageRadioIsModelArray:Al,PageRadioIsWidthAuto:gl,PageRadioKeyDisabled:kl,PageRadioKeyLabelCallback:Ll,PageRadioKeyTitle:Ml,PageRadioLabelScreenReader:Zl,PageRadioReadonly:oo,PageRadioSearch:io,PageRadioSearchTextInHtml:bo,PageRadioSortOrder:yo,PageRadioSortOrderGroup:To,PageRadioTranslateData:Ko,PageRadioTwoColumns:Yo},setup(){const{pageTitle:a}=Xo(),{dataProps:l}=Fo(),{dataTranslate:t}=Wo(),{dataEvents:n}=wo();return{dataEvents:n,dataProps:l,dataTranslate:t,pageTitle:a}}};function Zo(a,l,t,n,h,i){const e=d("a-translation"),s=d("page-radio-basic"),o=d("page-radio-change"),E=d("page-radio-help-text"),g=d("page-radio-error"),y=d("page-radio-label-screen-reader"),S=d("page-radio-group"),O=d("page-radio-search"),B=d("page-radio-search-text-in-html"),D=d("page-radio-key-disabled"),v=d("page-radio-translate-data"),k=d("page-radio-is-button-group"),T=d("page-radio-collapse"),C=d("page-radio-data-extra"),U=d("page-radio-inline"),$=d("page-radio-two-columns"),H=d("page-radio-has-border"),N=d("page-radio-is-data-simple-array"),L=d("page-radio-is-width-auto"),K=d("page-radio-key-label-callback"),V=d("page-radio-key-title"),J=d("page-radio-sort-order"),G=d("page-radio-sort-order-group"),j=d("page-radio-is-model-array"),q=d("page-radio-readonly"),I=d("aloha-table-props"),M=d("aloha-table-translate"),Y=d("aloha-page");return A(),c(Y,{"page-title":a.pageTitle},{body:p(()=>[r(e,{tag:"p",html:"_A_RADIO_COMPONENT_DESCRIPTION_"}),r(s),r(o),r(E),r(g),r(y),r(S),r(O),r(B),r(D),r(v),r(k),r(T),r(C),r(U),r($),r(H),r(N),r(L),r(K),r(V),r(J),r(G),r(j),r(q),r(I,{data:a.dataProps},null,8,["data"]),r(I,{"table-label":"Events",data:a.dataEvents,columns:["name","type","description"]},null,8,["data"]),r(M,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const pe=u(Qo,[["render",Zo]]);export{pe as default};
