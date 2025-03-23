import{A as R,a as M}from"./chunk.AlohaExample.2zt6mugM.js";import{A as Y}from"./chunk.AlohaTableProps.CijAev_y.js";import{A as w}from"./chunk.AlohaTableTranslate.p1HIai4a.js";import{L as f,_ as c,g as X,A as F}from"./bundle.index.Dp1Wrvxr.js";import{r as m,R as A,aR as p,e as d,U as b,Y as _,W as r,aS as u,d as P}from"./chunk.vendor.lDtj39a_.js";import"./chunk.vendor-lodash.CZTyXodc.js";import"./chunk.APageTabTitle.BGKP64mK.js";import"./chunk.AlohaHighlightjs.BZGUyHjY.js";import"./chunk.ATable.wMVaHntF.js";import"./chunk.translations-ar.CSRM3YJ8.js";import"./chunk.translations-de.Cdlrfk3w.js";import"./chunk.translations-en.BVrNHVVQ.js";import"./chunk.translations-es.DXEdiuYo.js";import"./chunk.translations-fr.CVKEU5Mu.js";import"./chunk.translations-hr.DL1l5v8s.js";import"./chunk.translations-it.BKw_NW0S.js";import"./chunk.translations-ru.CQ8apMH7.js";function W(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Q(){return{codeJs:`import {
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
};`}}const z={name:"PageRadioBasic",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),{codeHtml:t}=W(),{codeJs:n}=Q();return{codeHtml:t,codeJs:n,data:a,model:l}}};function Z(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:p(()=>[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)]),_:1},8,["code-html","code-js"])}const x=c(z,[["render",Z]]);function aa(){return{codeHtml:`<a-radio
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function la(){return{codeJs:`import {
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
};`}}const oa={name:"PageRadioChange",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),t=({model:s,id:e,props:i})=>{l.value=s,console.log(e,i)},{codeHtml:n}=aa(),{codeJs:h}=la();return{changeModel:t,codeHtml:n,codeJs:h,data:a,model:l}}};function ea(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[_(e,{change:a.changeModel,data:a.data,"model-value":a.model,label:"Aloha"},null,8,["change","data","model-value"]),r("div",null,"model: "+u(a.model),1)]),_:1},8,["code-html","code-js"])}const da=c(oa,[["render",ea]]);function ta(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function na(){return{codeJs:`import {
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
};`}}const _a={name:"PageRadioCollapse",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ta(),{codeJs:l}=na(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,toggleCollapse:({isCollapsed:s,id:e,props:i})=>{console.log(s,e,i)}}}},ra={class:"a_columns a_columns_count_12"},ia={class:"a_column a_column_6 a_columns_count_12_touch"};function sa(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:p(()=>[r("div",ra,[r("div",ia,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),collapsible:!0,data:a.data,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),collapsible:!0,data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),collapsible:!0,data:a.data,"is-collapsed":!0,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ha=c(_a,[["render",sa]]);function ma(){return{codeHtml:`<a-radio
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
<div>model2: {{ model2 }}</div>`}}function ua(){return{codeJs:`import {
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
};`}}const ca={name:"PageRadioDataExtra",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ma(),{codeJs:l}=ua(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],h=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],s=m(void 0),e=m(void 0);return{codeHtml:a,codeJs:l,data:t,dataExtraArrayOfArrays:n,dataExtraArrayOfObjects:h,model1:s,model2:e}}},Aa={class:"a_columns a_columns_count_12"},pa={class:"a_column a_column_6 a_columns_count_12_touch"};function ba(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_DATA_EXTRA_HEADER_",description:"_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:p(()=>[r("div",Aa,[r("div",pa,[_(e,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model1=o),"data-extra":a.dataExtraArrayOfArrays,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)"},null,8,["modelValue","data-extra","data"]),r("div",null,"model1: "+u(a.model1),1),_(e,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model2=o),"data-extra":a.dataExtraArrayOfObjects,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)"},null,8,["modelValue","data-extra","data"]),r("div",null,"model2: "+u(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Ra=c(ca,[["render",ba]]);function fa(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function Ia(){return{codeJs:`import {
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
};`}}const Pa={name:"PageRadioError",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),{codeHtml:t}=fa(),{codeJs:n}=Ia();return{codeHtml:t,codeJs:n,data:a,model:l}}};function Ea(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,errors:"Aloha",label:"Radio"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)]),_:1},8,["code-html","code-js"])}const ya=c(Pa,[["render",Ea]]);function Sa(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Oa(){return{codeJs:`import {
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
};`}}const ga={name:"PageRadioGroup",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Sa(),{codeJs:l}=Oa(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onGroupLabelCallback:({group:s,item:e})=>s==="_not_grouped"?"---":s==="Alex"?`-${s}-`:s}}},Ba={class:"a_columns a_columns_count_12"},Da={class:"a_column a_column_6 a_columns_count_12_touch"};function ka(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_GROUP_HEADER_",description:"_A_UI_GROUP_GROUP_DESCRIPTION_",props:["key-group","key-group-label-callback"]},{default:p(()=>[r("div",Ba,[r("div",Da,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"key-group"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-group-label-callback":a.onGroupLabelCallback,"key-id":"id","key-label":"label",label:"key-group + key-group-callback"},null,8,["modelValue","data","key-group-label-callback"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const va=c(ga,[["render",ka]]);function Ta(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ca(){return{codeJs:`import {
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
};`}}const Ua={name:"PageRadioHasBorder",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Ta(),{codeJs:l}=Ca(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},$a={class:"a_columns a_columns_count_12"},Ha={class:"a_column a_column_6 a_columns_count_12_touch"};function Na(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:p(()=>[r("div",$a,[r("div",Ha,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"has-border":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"has-border":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const La=c(Ua,[["render",Na]]);function Ka(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function Va(){return{codeJs:`import {
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
};`}}const Ja={name:"PageRadioHelpText",components:{AlohaExample:R,ARadio:f},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=m(void 0),{codeHtml:t}=Ka(),{codeJs:n}=Va();return{codeHtml:t,codeJs:n,data:a,model:l}}};function Ga(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"help-text":"Aloha",label:"Radio"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)]),_:1},8,["code-html","code-js"])}const ja=c(Ja,[["render",Ga]]);function qa(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ma(){return{codeJs:`import {
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
};`}}const Ya={name:"PageRadioInline",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=qa(),{codeJs:l}=Ma(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},wa={class:"a_columns a_columns_count_12"},Xa={class:"a_column a_column_6 a_columns_count_12_touch"};function Fa(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_INLINE_HEADER_",description:"_A_UI_GROUP_INLINE_DESCRIPTION_",props:"inline"},{default:p(()=>[r("div",wa,[r("div",Xa,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,inline:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,inline:!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Wa=c(Ya,[["render",Fa]]);function Qa(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function za(){return{codeJs:`import {
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
};`}}const Za={name:"PageRadioIsButtonGroup",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Qa(),{codeJs:l}=za(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}};function xa(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_",description:"_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_",props:["is-button-group","class-button-group-default"]},{default:p(()=>[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-button-group":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"is-button-group":!0,"class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"is-button-group":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)]),_:1},8,["code-html","code-js"])}const al=c(Za,[["render",xa]]);function ll(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function ol(){return{codeJs:`import {
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
};`}}const el={name:"PageRadioIsDataSimpleArray",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ll(),{codeJs:l}=ol(),t=["Aloha 1","Aloha 2","Aloha 3","Aloha 4","Aloha 5","Aloha 6"],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},dl={class:"a_columns a_columns_count_12"},tl={class:"a_column a_column_6 a_columns_count_12_touch"};function nl(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:"is-data-simple-array"},{default:p(()=>[r("div",dl,[r("div",tl,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-data-simple-array":!0,label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const _l=c(el,[["render",nl]]);function rl(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-model-array="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function il(){return{codeJs:`import {
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
};`}}const sl={name:"PageRadioIsModelArray",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=rl(),{codeJs:l}=il(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},hl={class:"a_columns a_columns_count_12"},ml={class:"a_column a_column_6 a_columns_count_12_touch"};function ul(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_RADIO_GROUP_IS_MODEL_ARRAY_HEADER_",description:"_A_RADIO_GROUP_IS_MODEL_ARRAY_DESCRIPTION_",props:"is-model-array"},{default:p(()=>[r("div",hl,[r("div",ml,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-model-array":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const cl=c(sl,[["render",ul]]);function Al(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function pl(){return{codeJs:`import {
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
};`}}const bl={name:"PageRadioIsWidthAuto",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Al(),{codeJs:l}=pl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Rl={class:"a_columns a_columns_count_12"},fl={class:"a_column a_column_6 a_columns_count_12_touch"};function Il(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_",description:"_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_",props:"is-width-auto"},{default:p(()=>[r("div",Rl,[r("div",fl,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-width-auto":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"is-width-auto":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Pl=c(bl,[["render",Il]]);function El(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function yl(){return{codeJs:`import {
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
};`}}const Sl={name:"PageRadioKeyDisabled",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=El(),{codeJs:l}=yl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Ol={class:"a_columns a_columns_count_12"},gl={class:"a_column a_column_6 a_columns_count_12_touch"};function Bl(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_DISABLED_HEADER_",description:"_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[r("div",Ol,[r("div",gl,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Dl=c(Sl,[["render",Bl]]);function kl(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function vl(){return{codeJs:`import {
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
};`}}const Tl={name:"PageRadioKeyLabelCallback",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=kl(),{codeJs:l}=vl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyLabelCallback:({item:s})=>`--${s.label}--`}}},Cl={class:"a_columns a_columns_count_12"},Ul={class:"a_column a_column_6 a_columns_count_12_touch"};function $l(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_",description:"_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_",props:"key-label-callback"},{default:p(()=>[r("div",Cl,[r("div",Ul,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-label-callback":a.onKeyLabelCallback,"key-id":"id",label:"Aloha"},null,8,["modelValue","data","key-label-callback"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Hl=c(Tl,[["render",$l]]);function Nl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ll(){return{codeJs:`import {
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
};`}}const Kl={name:"PageRadioKeyTitle",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Nl(),{codeJs:l}=Ll(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyTitleCallback:({item:s})=>`--${s.label}--`}}},Vl={class:"a_columns a_columns_count_12"},Jl={class:"a_column a_column_6 a_columns_count_12_touch"};function Gl(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_TITLE_HEADER_",description:"_A_UI_GROUP_KEY_TITLE_DESCRIPTION_",props:["key-title","key-title-callback"]},{default:p(()=>[r("div",Vl,[r("div",Jl,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label","key-title":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-title-callback":a.onKeyTitleCallback,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data","key-title-callback"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const jl=c(Kl,[["render",Gl]]);function ql(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ml(){return{codeJs:`import {
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
};`}}const Yl={name:"PageRadioLabelScreenReader",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ql(),{codeJs:l}=Ml(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},wl={class:"a_columns a_columns_count_12"},Xl={class:"a_column a_column_6 a_columns_count_12_touch"};function Fl(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:"label-screen-reader"},{default:p(()=>[r("div",wl,[r("div",Xl,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label","label-screen-reader":"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Wl=c(Yl,[["render",Fl]]);function Ql(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function zl(){return{codeJs:`import {
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
};`}}const Zl={name:"PageRadioSearch",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Ql(),{codeJs:l}=zl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},xl={class:"a_columns a_columns_count_12"},ao={class:"a_column a_column_6 a_columns_count_12_touch"};function lo(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_HEADER_",description:"_A_UI_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[r("div",xl,[r("div",ao,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const oo=c(Zl,[["render",lo]]);function eo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function to(){return{codeJs:`import {
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
};`}}const no={name:"PageRadioSortOrder",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=eo(),{codeJs:l}=to(),t=[{label:"Aloha 8",id:"aloha_8"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 7",id:"aloha_7"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},_o={class:"a_columns a_columns_count_12"},ro={class:"a_column a_column_6 a_columns_count_12_touch"};function io(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_DESCRIPTION_",props:"sort-order"},{default:p(()=>[r("div",_o,[r("div",ro,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"sort-order":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"asc"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"desc"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const so=c(no,[["render",io]]);function ho(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function mo(){return{codeJs:`import {
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
};`}}const uo={name:"PageRadioSortOrderGroup",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=ho(),{codeJs:l}=mo(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},co={class:"a_columns a_columns_count_12"},Ao={class:"a_column a_column_6 a_columns_count_12_touch"};function po(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_",props:["sort-order-group"]},{default:p(()=>[r("div",co,[r("div",Ao,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"sort-order-group":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"asc"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"desc"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const bo=c(uo,[["render",po]]);function Ro(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function fo(){return{codeJs:`import {
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
};`}}const Io={name:"PageRadioTranslateData",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Ro(),{codeJs:l}=fo(),t=[{label:"_A_UI_ELEMENT_0_",id:"aloha_0"},{label:"_A_UI_ELEMENT_1_",id:"aloha_1"},{label:"_A_UI_ELEMENT_2_",id:"aloha_2"},{label:"_A_UI_ELEMENT_3_",id:"aloha_3"},{label:"_A_UI_ELEMENT_4_",id:"aloha_4"},{label:"_A_UI_ELEMENT_5_",id:"aloha_5"},{label:"_A_UI_ELEMENT_6_",id:"aloha_6"},{label:"_A_UI_ELEMENT_7_",id:"aloha_7"},{label:"_A_UI_ELEMENT_8_",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Po={class:"a_columns a_columns_count_12"},Eo={class:"a_column a_column_6 a_columns_count_12_touch"};function yo(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[r("div",Po,[r("div",Eo,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"translate-data":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const So=c(Io,[["render",yo]]);function Oo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function go(){return{codeJs:`import {
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
};`}}const Bo={name:"PageRadioTwoColumns",components:{AlohaExample:R,ARadio:f},setup(){const{codeHtml:a}=Oo(),{codeJs:l}=go(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=m(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Do={class:"a_columns a_columns_count_12"},ko={class:"a_column a_column_6 a_columns_count_12_touch"};function vo(a,l,t,n,h,s){const e=d("a-radio"),i=d("aloha-example");return b(),A(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TWO_COLUMNS_HEADER_",description:"_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_",props:"class-data-parent"},{default:p(()=>[r("div",Do,[r("div",ko,[_(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),_(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+u(a.model),1)])])]),_:1},8,["code-html","code-js"])}const To=c(Bo,[["render",vo]]);function Co(){return{dataEvents:[{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function Uo(){const a=P(()=>X({placeholder:"_A_RADIO_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ARadio${a.value?` (${a.value})`:""}`)}}function $o(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-button-group-default",description:"_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",type:"String / Object / Array",default:"a_btn a_btn_outline_primary",required:!1},{name:"class-data-parent",description:"_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_radio_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"inline",description:"_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-button-group",description:"_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-model-array",description:"_A_RADIO_PROPS_IS_MODEL_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"slot-append-name",description:"_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_RADIO_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_RADIO_SEARCH_",
      })`,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Ho(){return{dataTranslate:["_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_","_A_RADIO_SEARCH_"]}}const No={name:"PageRadio",components:{AlohaPage:M,AlohaTableProps:Y,AlohaTableTranslate:w,ATranslation:F,PageRadioBasic:x,PageRadioChange:da,PageRadioCollapse:ha,PageRadioDataExtra:Ra,PageRadioError:ya,PageRadioGroup:va,PageRadioHasBorder:La,PageRadioHelpText:ja,PageRadioInline:Wa,PageRadioIsButtonGroup:al,PageRadioIsDataSimpleArray:_l,PageRadioIsModelArray:cl,PageRadioIsWidthAuto:Pl,PageRadioKeyDisabled:Dl,PageRadioKeyLabelCallback:Hl,PageRadioKeyTitle:jl,PageRadioLabelScreenReader:Wl,PageRadioSearch:oo,PageRadioSortOrder:so,PageRadioSortOrderGroup:bo,PageRadioTranslateData:So,PageRadioTwoColumns:To},setup(){const{pageTitle:a}=Uo(),{dataProps:l}=$o(),{dataTranslate:t}=Ho(),{dataEvents:n}=Co();return{dataEvents:n,dataProps:l,dataTranslate:t,pageTitle:a}}};function Lo(a,l,t,n,h,s){const e=d("a-translation"),i=d("page-radio-basic"),o=d("page-radio-change"),E=d("page-radio-help-text"),y=d("page-radio-error"),S=d("page-radio-label-screen-reader"),O=d("page-radio-group"),g=d("page-radio-search"),B=d("page-radio-key-disabled"),D=d("page-radio-translate-data"),k=d("page-radio-is-button-group"),v=d("page-radio-collapse"),T=d("page-radio-data-extra"),C=d("page-radio-inline"),U=d("page-radio-two-columns"),$=d("page-radio-has-border"),H=d("page-radio-is-data-simple-array"),N=d("page-radio-is-width-auto"),L=d("page-radio-key-label-callback"),K=d("page-radio-key-title"),V=d("page-radio-sort-order"),J=d("page-radio-sort-order-group"),G=d("page-radio-is-model-array"),I=d("aloha-table-props"),j=d("aloha-table-translate"),q=d("aloha-page");return b(),A(q,{"page-title":a.pageTitle},{body:p(()=>[_(e,{tag:"p",html:"_A_RADIO_COMPONENT_DESCRIPTION_"}),_(i),_(o),_(E),_(y),_(S),_(O),_(g),_(B),_(D),_(k),_(v),_(T),_(C),_(U),_($),_(H),_(N),_(L),_(K),_(V),_(J),_(G),_(I,{data:a.dataProps},null,8,["data"]),_(I,{"table-label":"Events",data:a.dataEvents,columns:["name","type","description"]},null,8,["data"]),_(j,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const le=c(No,[["render",Lo]]);export{le as default};
