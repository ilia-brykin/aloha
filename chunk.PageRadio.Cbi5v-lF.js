import{A as b,a as w}from"./chunk.AlohaExample.CJoE_APG.js";import{A as X}from"./chunk.AlohaTableProps.DHEhro59.js";import{A as W}from"./chunk.AlohaTableTranslate.ByZVYOIv.js";import{N as R,_ as m,g as Q,A as Z}from"./bundle.index.nJVzHaa-.js";import{r as u,U as c,aS as p,e as d,V as A,Z as s,Y as r,aT as f,d as E}from"./chunk.vendor.COYgx38y.js";import"./chunk.vendor-lodash.DdGPhwvj.js";import"./chunk.APageTabTitle.7L8gXGnZ.js";import"./chunk.AlohaHighlightjs.CW1W2LCP.js";import"./chunk.ATable.DYo-6hdm.js";import"./chunk.translations-ar.BK-I-Hx5.js";import"./chunk.translations-de.C9TxFyqs.js";import"./chunk.translations-en.CsPlAkig.js";import"./chunk.translations-es.CYHOkAqg.js";import"./chunk.translations-fr.CAIevAU9.js";import"./chunk.translations-hr.DGLM7S8k.js";import"./chunk.translations-it.DNGKTHD6.js";import"./chunk.translations-ru.M3pt0S0M.js";function z(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function x(){return{codeJs:`import {
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
};`}}const aa={name:"PageRadioBasic",components:{AlohaExample:b,ARadio:R},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=u(void 0),{codeHtml:t}=z(),{codeJs:n}=x();return{codeHtml:t,codeJs:n,data:a,model:l}}};function la(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:p(()=>[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)]),_:1},8,["code-html","code-js"])}const oa=m(aa,[["render",la]]);function ea(){return{codeHtml:`<a-radio
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function da(){return{codeJs:`import {
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
};`}}const ta={name:"PageRadioChange",components:{AlohaExample:b,ARadio:R},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=u(void 0),t=({model:i,id:e,props:_})=>{l.value=i,console.log(e,_)},{codeHtml:n}=ea(),{codeJs:h}=da();return{changeModel:t,codeHtml:n,codeJs:h,data:a,model:l}}};function na(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:p(()=>[s(e,{change:a.changeModel,data:a.data,"model-value":a.model,label:"Aloha"},null,8,["change","data","model-value"]),r("div",null,"model: "+f(a.model),1)]),_:1},8,["code-html","code-js"])}const sa=m(ta,[["render",na]]);function ra(){return{codeHtml:`<a-radio
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
};`}}const ia={name:"PageRadioCollapse",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=ra(),{codeJs:l}=_a(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,toggleCollapse:({isCollapsed:i,id:e,props:_})=>{console.log(i,e,_)}}}},ha={class:"a_columns a_columns_count_12"},ua={class:"a_column a_column_6 a_columns_count_12_touch"};function ma(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:p(()=>[r("div",ha,[r("div",ua,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),collapsible:!0,data:a.data,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),collapsible:!0,data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),collapsible:!0,data:a.data,"is-collapsed":!0,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ca=m(ia,[["render",ma]]);function pa(){return{codeHtml:`<a-radio
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
<div>model2: {{ model2 }}</div>`}}function Aa(){return{codeJs:`import {
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
};`}}const ba={name:"PageRadioDataExtra",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=pa(),{codeJs:l}=Aa(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],h=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],i=u(void 0),e=u(void 0);return{codeHtml:a,codeJs:l,data:t,dataExtraArrayOfArrays:n,dataExtraArrayOfObjects:h,model1:i,model2:e}}},Ra={class:"a_columns a_columns_count_12"},fa={class:"a_column a_column_6 a_columns_count_12_touch"};function Ia(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_DATA_EXTRA_HEADER_",description:"_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:p(()=>[r("div",Ra,[r("div",fa,[s(e,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model1=o),"data-extra":a.dataExtraArrayOfArrays,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)"},null,8,["modelValue","data-extra","data"]),r("div",null,"model1: "+f(a.model1),1),s(e,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model2=o),"data-extra":a.dataExtraArrayOfObjects,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)"},null,8,["modelValue","data-extra","data"]),r("div",null,"model2: "+f(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Pa=m(ba,[["render",Ia]]);function Ea(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function ga(){return{codeJs:`import {
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
};`}}const ya={name:"PageRadioError",components:{AlohaExample:b,ARadio:R},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=u(void 0),{codeHtml:t}=Ea(),{codeJs:n}=ga();return{codeHtml:t,codeJs:n,data:a,model:l}}};function Sa(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:p(()=>[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,errors:"Aloha",label:"Radio"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)]),_:1},8,["code-html","code-js"])}const Ba=m(ya,[["render",Sa]]);function Oa(){return{codeHtml:`<a-radio
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
></a-radio>`}}function Da(){return{codeJs:`import {
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
};`}}const va={name:"PageRadioFocusBlur",components:{AlohaExample:b,ARadio:R},setup(){const a=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],l=u(void 0),t=({event:o,props:I})=>{console.log("focusin1",o,I)},n=({event:o,props:I})=>{console.log("focusin2",o,I)},h=({event:o,props:I})=>{console.log("focusout1",o,I)},i=({event:o,props:I})=>{console.log("focusout2",o,I)},{codeHtml:e}=Oa(),{codeJs:_}=Da();return{codeHtml:e,codeJs:_,data:a,focusin1:t,focusin2:n,focusout1:h,focusout2:i,model:l}}};function ka(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_FOCUS_BLUR_HEADER_",description:"_A_UI_GROUP_FOCUS_BLUR_DESCRIPTION_",emits:["focusin","focusout"]},{default:p(()=>[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"key-id":"id","key-label":"label",label:"Radio1",onFocusin:a.focusin1,onFocusout:a.focusout1},null,8,["modelValue","data","onFocusin","onFocusout"]),s(e,{class:"a_mt_5",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"is-button-group":!0,search:!0,"key-id":"id","key-label":"label",label:"Radio2","class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap",onFocusin:a.focusin2,onFocusout:a.focusout2},null,8,["modelValue","data","onFocusin","onFocusout"])]),_:1},8,["code-html","code-js"])}const Ta=m(va,[["render",ka]]);function Ua(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ca(){return{codeJs:`import {
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
};`}}const $a={name:"PageRadioGroup",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Ua(),{codeJs:l}=Ca(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onGroupLabelCallback:({group:i,item:e})=>i==="_not_grouped"?"---":i==="Alex"?`-${i}-`:i}}},Ha={class:"a_columns a_columns_count_12"},Na={class:"a_column a_column_6 a_columns_count_12_touch"};function Ka(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_GROUP_HEADER_",description:"_A_UI_GROUP_GROUP_DESCRIPTION_",props:["key-group","key-group-label-callback"]},{default:p(()=>[r("div",Ha,[r("div",Na,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"key-group"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-group-label-callback":a.onGroupLabelCallback,"key-id":"id","key-label":"label",label:"key-group + key-group-callback"},null,8,["modelValue","data","key-group-label-callback"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const La=m($a,[["render",Ka]]);function Va(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ja(){return{codeJs:`import {
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
};`}}const Ga={name:"PageRadioHasBorder",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Va(),{codeJs:l}=Ja(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ja={class:"a_columns a_columns_count_12"},qa={class:"a_column a_column_6 a_columns_count_12_touch"};function Ma(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:p(()=>[r("div",ja,[r("div",qa,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"has-border":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"has-border":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Fa=m(Ga,[["render",Ma]]);function Ya(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Radio"
></a-radio>
<div>model: {{ model }}</div>`}}function wa(){return{codeJs:`import {
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
};`}}const Xa={name:"PageRadioHelpText",components:{AlohaExample:b,ARadio:R},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=u(void 0),{codeHtml:t}=Ya(),{codeJs:n}=wa();return{codeHtml:t,codeJs:n,data:a,model:l}}};function Wa(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:p(()=>[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"help-text":"Aloha",label:"Radio"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)]),_:1},8,["code-html","code-js"])}const Qa=m(Xa,[["render",Wa]]);function Za(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function za(){return{codeJs:`import {
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
};`}}const xa={name:"PageRadioInline",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Za(),{codeJs:l}=za(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},al={class:"a_columns a_columns_count_12"},ll={class:"a_column a_column_6 a_columns_count_12_touch"};function ol(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_INLINE_HEADER_",description:"_A_UI_GROUP_INLINE_DESCRIPTION_",props:"inline"},{default:p(()=>[r("div",al,[r("div",ll,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,inline:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,inline:!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const el=m(xa,[["render",ol]]);function dl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function tl(){return{codeJs:`import {
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
};`}}const nl={name:"PageRadioIsButtonGroup",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=dl(),{codeJs:l}=tl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}};function sl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_",description:"_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_",props:["is-button-group","class-button-group-default"]},{default:p(()=>[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-button-group":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"is-button-group":!0,"class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"is-button-group":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)]),_:1},8,["code-html","code-js"])}const rl=m(nl,[["render",sl]]);function _l(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function il(){return{codeJs:`import {
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
};`}}const hl={name:"PageRadioIsDataSimpleArray",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=_l(),{codeJs:l}=il(),t=["Aloha 1","Aloha 2","Aloha 3","Aloha 4","Aloha 5","Aloha 6"],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ul={class:"a_columns a_columns_count_12"},ml={class:"a_column a_column_6 a_columns_count_12_touch"};function cl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:"is-data-simple-array"},{default:p(()=>[r("div",ul,[r("div",ml,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-data-simple-array":!0,label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const pl=m(hl,[["render",cl]]);function Al(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :is-model-array="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function bl(){return{codeJs:`import {
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
};`}}const Rl={name:"PageRadioIsModelArray",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Al(),{codeJs:l}=bl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},fl={class:"a_columns a_columns_count_12"},Il={class:"a_column a_column_6 a_columns_count_12_touch"};function Pl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_RADIO_GROUP_IS_MODEL_ARRAY_HEADER_",description:"_A_RADIO_GROUP_IS_MODEL_ARRAY_DESCRIPTION_",props:"is-model-array"},{default:p(()=>[r("div",fl,[r("div",Il,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-model-array":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const El=m(Rl,[["render",Pl]]);function gl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function yl(){return{codeJs:`import {
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
};`}}const Sl={name:"PageRadioIsWidthAuto",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=gl(),{codeJs:l}=yl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Bl={class:"a_columns a_columns_count_12"},Ol={class:"a_column a_column_6 a_columns_count_12_touch"};function Dl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_",description:"_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_",props:"is-width-auto"},{default:p(()=>[r("div",Bl,[r("div",Ol,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"is-width-auto":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"is-width-auto":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const vl=m(Sl,[["render",Dl]]);function kl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Tl(){return{codeJs:`import {
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
};`}}const Ul={name:"PageRadioKeyDisabled",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=kl(),{codeJs:l}=Tl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Cl={class:"a_columns a_columns_count_12"},$l={class:"a_column a_column_6 a_columns_count_12_touch"};function Hl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_DISABLED_HEADER_",description:"_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[r("div",Cl,[r("div",$l,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Nl=m(Ul,[["render",Hl]]);function Kl(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Ll(){return{codeJs:`import {
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
};`}}const Vl={name:"PageRadioKeyLabelCallback",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Kl(),{codeJs:l}=Ll(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyLabelCallback:({item:i})=>`--${i.label}--`}}},Jl={class:"a_columns a_columns_count_12"},Gl={class:"a_column a_column_6 a_columns_count_12_touch"};function jl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_",description:"_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_",props:"key-label-callback"},{default:p(()=>[r("div",Jl,[r("div",Gl,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-label-callback":a.onKeyLabelCallback,"key-id":"id",label:"Aloha"},null,8,["modelValue","data","key-label-callback"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ql=m(Vl,[["render",jl]]);function Ml(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Fl(){return{codeJs:`import {
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
};`}}const Yl={name:"PageRadioKeyTitle",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Ml(),{codeJs:l}=Fl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyTitleCallback:({item:i})=>`--${i.label}--`}}},wl={class:"a_columns a_columns_count_12"},Xl={class:"a_column a_column_6 a_columns_count_12_touch"};function Wl(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_TITLE_HEADER_",description:"_A_UI_GROUP_KEY_TITLE_DESCRIPTION_",props:["key-title","key-title-callback"]},{default:p(()=>[r("div",wl,[r("div",Xl,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label","key-title":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-title-callback":a.onKeyTitleCallback,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data","key-title-callback"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ql=m(Yl,[["render",Wl]]);function Zl(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function zl(){return{codeJs:`import {
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
};`}}const xl={name:"PageRadioLabelScreenReader",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Zl(),{codeJs:l}=zl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ao={class:"a_columns a_columns_count_12"},lo={class:"a_column a_column_6 a_columns_count_12_touch"};function oo(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:"label-screen-reader"},{default:p(()=>[r("div",ao,[r("div",lo,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label","label-screen-reader":"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const eo=m(xl,[["render",oo]]);function to(){return{codeHtml:`<a-radio
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
></a-radio>`}}function no(){return{codeJs:`import {
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
};`}}const so={name:"PageRadioReadonly",components:{AlohaExample:b,ARadio:R},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=u("aloha_1"),t=u(["aloha_4","aloha_5"]),n=u(void 0),{codeHtml:h}=to(),{codeJs:i}=no();return{codeHtml:h,codeJs:i,data:a,model1:l,model2:t,model3:n}}};function ro(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[s(e,{"model-value":a.model1,data:a.data,readonly:!0,label:"Radio 1"},null,8,["model-value","data"]),s(e,{class:"a_mt_3","model-value":a.model2,data:a.data,"is-model-array":!0,readonly:!0,label:"Radio 2"},null,8,["model-value","data"]),s(e,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,label:"Radio 3"},null,8,["model-value","data"]),s(e,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,label:"Radio 4","readonly-default":"-"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const _o=m(so,[["render",ro]]);function io(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function ho(){return{codeJs:`import {
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
};`}}const uo={name:"PageRadioSearch",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=io(),{codeJs:l}=ho(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},mo={class:"a_columns a_columns_count_12"},co={class:"a_column a_column_6 a_columns_count_12_touch"};function po(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_HEADER_",description:"_A_UI_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[r("div",mo,[r("div",co,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ao=m(uo,[["render",po]]);function bo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Ro(){return{codeJs:`import {
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
};`}}const fo={name:"PageRadioSearchTextInHtml",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=bo(),{codeJs:l}=Ro(),t=[{label:"<span>Aloha</span> <strong>1</strong>",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],n=u("aloha_7");return{codeHtml:a,codeJs:l,data:t,model:n}}},Io={class:"a_columns a_columns_count_12"},Po={class:"a_column a_column_6 a_columns_count_12_touch"};function Eo(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html"]},{default:p(()=>[r("div",Io,[r("div",Po,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const go=m(fo,[["render",Eo]]);function yo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function So(){return{codeJs:`import {
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
};`}}const Bo={name:"PageRadioSortOrder",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=yo(),{codeJs:l}=So(),t=[{label:"Aloha 8",id:"aloha_8"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 7",id:"aloha_7"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Oo={class:"a_columns a_columns_count_12"},Do={class:"a_column a_column_6 a_columns_count_12_touch"};function vo(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_DESCRIPTION_",props:"sort-order"},{default:p(()=>[r("div",Oo,[r("div",Do,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"sort-order":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"asc"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"desc"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ko=m(Bo,[["render",vo]]);function To(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Uo(){return{codeJs:`import {
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
};`}}const Co={name:"PageRadioSortOrderGroup",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=To(),{codeJs:l}=Uo(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},$o={class:"a_columns a_columns_count_12"},Ho={class:"a_column a_column_6 a_columns_count_12_touch"};function No(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_",props:["sort-order-group"]},{default:p(()=>[r("div",$o,[r("div",Ho,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"sort-order-group":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"asc"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=o=>a.model=o),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"desc"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ko=m(Co,[["render",No]]);function Lo(){return{codeHtml:`<a-radio
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`}}function Vo(){return{codeJs:`import {
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
};`}}const Jo={name:"PageRadioTranslateData",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Lo(),{codeJs:l}=Vo(),t=[{label:"_A_UI_ELEMENT_0_",id:"aloha_0"},{label:"_A_UI_ELEMENT_1_",id:"aloha_1"},{label:"_A_UI_ELEMENT_2_",id:"aloha_2"},{label:"_A_UI_ELEMENT_3_",id:"aloha_3"},{label:"_A_UI_ELEMENT_4_",id:"aloha_4"},{label:"_A_UI_ELEMENT_5_",id:"aloha_5"},{label:"_A_UI_ELEMENT_6_",id:"aloha_6"},{label:"_A_UI_ELEMENT_7_",id:"aloha_7"},{label:"_A_UI_ELEMENT_8_",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Go={class:"a_columns a_columns_count_12"},jo={class:"a_column a_column_6 a_columns_count_12_touch"};function qo(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[r("div",Go,[r("div",jo,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"translate-data":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Mo=m(Jo,[["render",qo]]);function Fo(){return{codeHtml:`<a-radio
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
<div>model: {{ model }}</div>`}}function Yo(){return{codeJs:`import {
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
};`}}const wo={name:"PageRadioTwoColumns",components:{AlohaExample:b,ARadio:R},setup(){const{codeHtml:a}=Fo(),{codeJs:l}=Yo(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=u(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Xo={class:"a_columns a_columns_count_12"},Wo={class:"a_column a_column_6 a_columns_count_12_touch"};function Qo(a,l,t,n,h,i){const e=d("a-radio"),_=d("aloha-example");return A(),c(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TWO_COLUMNS_HEADER_",description:"_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_",props:"class-data-parent"},{default:p(()=>[r("div",Xo,[r("div",Wo,[s(e,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=o=>a.model=o),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(e,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=o=>a.model=o),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),r("div",null,"model: "+f(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Zo=m(wo,[["render",Qo]]);function zo(){return{dataEvents:[{name:"focusin",description:"_A_UI_EVENTS_FOCUSIN_DESCRIPTION_",type:"Function"},{name:"focusout",description:"_A_UI_EVENTS_FOCUSOUT_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function xo(){const a=E(()=>Q({placeholder:"_A_RADIO_COMPONENT_NAME_"}));return{pageTitle:E(()=>`ARadio${a.value?` (${a.value})`:""}`)}}function ae(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"attributes-fieldset",description:"_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-button-group-default",description:"_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",type:"String / Object / Array",default:"a_btn a_btn_outline_primary",required:!1},{name:"class-data-parent",description:"_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_radio_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"inline",description:"_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-button-group",description:"_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-model-array",description:"_A_RADIO_PROPS_IS_MODEL_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-undefined",description:"_A_UI_PROPS_MODEL_UNDEFINED_DESCRIPTION_",type:"String / Number / Object / Array / Boolean",default:void 0,required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-text-in-html",description:"_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"slot-append-name",description:"_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_RADIO_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_RADIO_SEARCH_",
      })`,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function le(){return{dataTranslate:["_A_RADIO_HAS_NOT_ELEMENTS_WITH_SEARCH_","_A_RADIO_SEARCH_"]}}const oe={name:"PageRadio",components:{AlohaPage:w,AlohaTableProps:X,AlohaTableTranslate:W,ATranslation:Z,PageRadioBasic:oa,PageRadioChange:sa,PageRadioCollapse:ca,PageRadioDataExtra:Pa,PageRadioError:Ba,PageRadioFocusBlur:Ta,PageRadioGroup:La,PageRadioHasBorder:Fa,PageRadioHelpText:Qa,PageRadioInline:el,PageRadioIsButtonGroup:rl,PageRadioIsDataSimpleArray:pl,PageRadioIsModelArray:El,PageRadioIsWidthAuto:vl,PageRadioKeyDisabled:Nl,PageRadioKeyLabelCallback:ql,PageRadioKeyTitle:Ql,PageRadioLabelScreenReader:eo,PageRadioReadonly:_o,PageRadioSearch:Ao,PageRadioSearchTextInHtml:go,PageRadioSortOrder:ko,PageRadioSortOrderGroup:Ko,PageRadioTranslateData:Mo,PageRadioTwoColumns:Zo},setup(){const{pageTitle:a}=xo(),{dataProps:l}=ae(),{dataTranslate:t}=le(),{dataEvents:n}=zo();return{dataEvents:n,dataProps:l,dataTranslate:t,pageTitle:a}}};function ee(a,l,t,n,h,i){const e=d("a-translation"),_=d("page-radio-basic"),o=d("page-radio-change"),I=d("page-radio-help-text"),g=d("page-radio-error"),y=d("page-radio-label-screen-reader"),S=d("page-radio-group"),B=d("page-radio-search"),O=d("page-radio-search-text-in-html"),D=d("page-radio-key-disabled"),v=d("page-radio-translate-data"),k=d("page-radio-is-button-group"),T=d("page-radio-collapse"),U=d("page-radio-data-extra"),C=d("page-radio-inline"),$=d("page-radio-two-columns"),H=d("page-radio-has-border"),N=d("page-radio-is-data-simple-array"),K=d("page-radio-is-width-auto"),L=d("page-radio-key-label-callback"),V=d("page-radio-key-title"),J=d("page-radio-sort-order"),G=d("page-radio-sort-order-group"),j=d("page-radio-is-model-array"),q=d("page-radio-focus-blur"),M=d("page-radio-readonly"),P=d("aloha-table-props"),F=d("aloha-table-translate"),Y=d("aloha-page");return A(),c(Y,{"page-title":a.pageTitle},{body:p(()=>[s(e,{tag:"p",html:"_A_RADIO_COMPONENT_DESCRIPTION_"}),s(_),s(o),s(I),s(g),s(y),s(S),s(B),s(O),s(D),s(v),s(k),s(T),s(U),s(C),s($),s(H),s(N),s(K),s(L),s(V),s(J),s(G),s(j),s(q),s(M),s(P,{data:a.dataProps},null,8,["data"]),s(P,{"table-label":"Events",data:a.dataEvents,columns:["name","type","description"]},null,8,["data"]),s(F,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Pe=m(oe,[["render",ee]]);export{Pe as default};
