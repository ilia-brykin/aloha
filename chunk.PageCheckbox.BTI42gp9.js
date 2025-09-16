import{A,a as Y}from"./chunk.AlohaExample.C3L1UkGO.js";import{A as w}from"./chunk.AlohaTableProps.CsmGVTaG.js";import{A as W}from"./chunk.AlohaTableTranslate.DEL5xFUg.js";import{V as f,_ as u,g as Q,A as Z}from"./bundle.index.DboGiT63.js";import{r as i,V as m,aT as b,e as d,W as p,_ as s,Z as h,aU as k,d as P}from"./chunk.vendor.BAPLGb06.js";import"./chunk.vendor-lodash.CStjNiQe.js";import"./chunk.APageTabTitle.CwWCb_jA.js";import"./chunk.AlohaHighlightjs.BZkAdeSp.js";import"./chunk.ATable.CSZo7QMs.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function z(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function aa(){return{codeJs:`import {
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
};`}}const la={name:"PageCheckboxBasic",components:{ACheckbox:f,AlohaExample:A},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:t}=z(),{codeJs:n}=aa();return{codeHtml:t,codeJs:n,data:a,model:l}}};function ea(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["data","model-value","label"]},{default:b(()=>[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)]),_:1},8,["code-html","code-js"])}const oa=u(la,[["render",ea]]);function da(){return{codeHtml:`<a-checkbox
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ta(){return{codeJs:`import {
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
};`}}const na={name:"PageCheckboxChange",components:{ACheckbox:f,AlohaExample:A},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),t=({model:c,id:o,props:_})=>{l.value=c,console.log(o,_)},{codeHtml:n}=da(),{codeJs:r}=ta();return{changeModel:t,codeHtml:n,codeJs:r,data:a,model:l}}};function sa(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_CHANGE_HEADER_",description:"_A_UI_GROUP_CHANGE_DESCRIPTION_",props:["change","model-value"]},{default:b(()=>[s(o,{change:a.changeModel,data:a.data,"model-value":a.model,label:"Aloha"},null,8,["change","data","model-value"]),h("div",null,"model: "+k(a.model),1)]),_:1},8,["code-html","code-js"])}const ha=u(na,[["render",sa]]);function _a(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function ca(){return{codeJs:`import {
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
};`}}const ra={name:"PageCheckboxCollapse",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=_a(),{codeJs:l}=ca(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,toggleCollapse:({isCollapsed:c,id:o,props:_})=>{console.log(c,o,_)}}}},ia={class:"a_columns a_columns_count_12"},ua={class:"a_column a_column_6 a_columns_count_12_touch"};function ma(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_COLLAPSE_HEADER_",description:"_A_UI_GROUP_COLLAPSE_DESCRIPTION_",props:["collapsible","is-collapsed"],emits:["toggle-collapse"]},{default:b(()=>[h("div",ia,[h("div",ua,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),collapsible:!0,data:a.data,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),collapsible:!0,data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),collapsible:!0,data:a.data,"is-collapsed":!0,"key-id":"id","key-label":"label",label:"Aloha",onToggleCollapse:a.toggleCollapse},null,8,["modelValue","data","onToggleCollapse"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ba=u(ra,[["render",ma]]);function pa(){return{codeHtml:`<a-checkbox
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
<div>model2: {{ model2 }}</div>`}}function Aa(){return{codeJs:`import {
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
};`}}const fa={name:"PageCheckboxDataExtra",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=pa(),{codeJs:l}=Aa(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],r=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],c=i(void 0),o=i(void 0);return{codeHtml:a,codeJs:l,data:t,dataExtraArrayOfArrays:n,dataExtraArrayOfObjects:r,model1:c,model2:o}}},ka={class:"a_columns a_columns_count_12"},Ra={class:"a_column a_column_6 a_columns_count_12_touch"};function Ia(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_DATA_EXTRA_HEADER_",description:"_A_UI_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:b(()=>[h("div",ka,[h("div",Ra,[s(o,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model1=e),"data-extra":a.dataExtraArrayOfArrays,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)"},null,8,["modelValue","data-extra","data"]),h("div",null,"model1: "+k(a.model1),1),s(o,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model2=e),"data-extra":a.dataExtraArrayOfObjects,data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)"},null,8,["modelValue","data-extra","data"]),h("div",null,"model2: "+k(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Pa=u(fa,[["render",Ia]]);function Ca(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  errors="Aloha"
  label="Checkbox"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Ea(){return{codeJs:`import {
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
};`}}const ga={name:"PageCheckboxError",components:{ACheckbox:f,AlohaExample:A},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:t}=Ca(),{codeJs:n}=Ea();return{codeHtml:t,codeJs:n,data:a,model:l}}};function ya(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_ERRORS_HEADER_",description:"_A_UI_GROUP_ERRORS_DESCRIPTION_",props:["errors"]},{default:b(()=>[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,errors:"Aloha",label:"Checkbox"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)]),_:1},8,["code-html","code-js"])}const Ba=u(ga,[["render",ya]]);function Sa(){return{codeHtml:`<a-checkbox
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
></a-checkbox>`}}function xa(){return{codeJs:`import {
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
};`}}const Oa={name:"PageCheckboxFocusBlur",components:{AlohaExample:A,ACheckbox:f},setup(){const a=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],l=i(void 0),t=({event:e,props:R})=>{console.log("focusin1",e,R)},n=({event:e,props:R})=>{console.log("focusin2",e,R)},r=({event:e,props:R})=>{console.log("focusout1",e,R)},c=({event:e,props:R})=>{console.log("focusout2",e,R)},{codeHtml:o}=Sa(),{codeJs:_}=xa();return{codeHtml:o,codeJs:_,data:a,focusin1:t,focusin2:n,focusout1:r,focusout2:c,model:l}}};function Da(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_FOCUS_BLUR_HEADER_",description:"_A_UI_GROUP_FOCUS_BLUR_DESCRIPTION_",emits:["focusin","focusout"]},{default:b(()=>[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"key-id":"id","key-label":"label",label:"Radio1",onFocusin:a.focusin1,onFocusout:a.focusout1},null,8,["modelValue","data","onFocusin","onFocusout"]),s(o,{class:"a_mt_5",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"is-button-group":!0,search:!0,"key-id":"id","key-label":"label",label:"Radio2","class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap",onFocusin:a.focusin2,onFocusout:a.focusout2},null,8,["modelValue","data","onFocusin","onFocusout"])]),_:1},8,["code-html","code-js"])}const va=u(Oa,[["render",Da]]);function Ta(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Ua(){return{codeJs:`import {
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
};`}}const $a={name:"PageCheckboxGroup",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Ta(),{codeJs:l}=Ua(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onGroupLabelCallback:({group:c,item:o})=>c==="_not_grouped"?"---":c==="Alex"?`-${c}-`:c}}},Ha={class:"a_columns a_columns_count_12"},Na={class:"a_column a_column_6 a_columns_count_12_touch"};function Ka(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_GROUP_HEADER_",description:"_A_UI_GROUP_GROUP_DESCRIPTION_",props:["key-group","key-group-label-callback"]},{default:b(()=>[h("div",Ha,[h("div",Na,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"key-group"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-group-label-callback":a.onGroupLabelCallback,"key-id":"id","key-label":"label",label:"key-group + key-group-callback"},null,8,["modelValue","data","key-group-label-callback"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const La=u($a,[["render",Ka]]);function Va(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Ja(){return{codeJs:`import {
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
};`}}const Ga={name:"PageCheckboxHasBorder",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Va(),{codeJs:l}=Ja(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ja={class:"a_columns a_columns_count_12"},qa={class:"a_column a_column_6 a_columns_count_12_touch"};function Ma(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HAS_BORDER_HEADER_",description:"_A_UI_GROUP_HAS_BORDER_DESCRIPTION_",props:"has-border"},{default:b(()=>[h("div",ja,[h("div",qa,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"has-border":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"has-border":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Fa=u(Ga,[["render",Ma]]);function Xa(){return{codeHtml:`<a-checkbox
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
<div>model1: {{ model1 }}</div>`}}function Ya(){return{codeJs:`import {
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
};`}}const wa={name:"PageCheckboxHasControlCheckbox",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Xa(),{codeJs:l}=Ya(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0),r=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,model1:r}}},Wa={class:"a_columns a_columns_count_12"},Qa={class:"a_column a_column_6 a_columns_count_12_touch"};function Za(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_CHECKBOX_GROUP_HAS_CONTROL_CHECKBOX_HEADER_",description:"_A_CHECKBOX_GROUP_HAS_CONTROL_CHECKBOX_DESCRIPTION_",props:"has-control-checkbox"},{default:b(()=>[h("div",Wa,[h("div",Qa,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"has-control-checkbox":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"has-control-checkbox":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model1,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model1=e),data:a.data,"has-control-checkbox":!0,inline:!0,"key-id":"id","key-label":"label",label:"Aloha inline"},null,8,["modelValue","data"]),h("div",null,"model1: "+k(a.model1),1)])])]),_:1},8,["code-html","code-js"])}const za=u(wa,[["render",Za]]);function al(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  help-text="Aloha"
  label="Checkbox"
></a-checkbox>
<div>model: {{ model }}</div>`}}function ll(){return{codeJs:`import {
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
};`}}const el={name:"PageCheckboxHelpText",components:{ACheckbox:f,AlohaExample:A},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:t}=al(),{codeJs:n}=ll();return{codeHtml:t,codeJs:n,data:a,model:l}}};function ol(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_HELP_TEXT_HEADER_",description:"_A_UI_GROUP_HELP_TEXT_DESCRIPTION_",props:["help-text"]},{default:b(()=>[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"help-text":"Aloha",label:"Checkbox"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)]),_:1},8,["code-html","code-js"])}const dl=u(el,[["render",ol]]);function tl(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function nl(){return{codeJs:`import {
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
};`}}const sl={name:"PageCheckboxInline",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=tl(),{codeJs:l}=nl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},hl={class:"a_columns a_columns_count_12"},_l={class:"a_column a_column_6 a_columns_count_12_touch"};function cl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_INLINE_HEADER_",description:"_A_UI_GROUP_INLINE_DESCRIPTION_",props:"inline"},{default:b(()=>[h("div",hl,[h("div",_l,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,inline:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,inline:!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const rl=u(sl,[["render",cl]]);function il(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function ul(){return{codeJs:`import {
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
};`}}const ml={name:"PageCheckboxIsButtonGroup",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=il(),{codeJs:l}=ul(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}};function bl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_BUTTON_GROUP_HEADER_",description:"_A_UI_GROUP_IS_BUTTON_GROUP_DESCRIPTION_",props:["is-button-group","class-button-group-default"]},{default:b(()=>[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"is-button-group":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"is-button-group":!0,"class-button-group-default":"a_btn a_btn_outline_secondary a_text_nowrap","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),data:a.data,"is-button-group":!0,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)]),_:1},8,["code-html","code-js"])}const pl=u(ml,[["render",bl]]);function Al(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function fl(){return{codeJs:`import {
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
};`}}const kl={name:"PageCheckboxIsDataSimpleArray",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Al(),{codeJs:l}=fl(),t=["Aloha 1","Aloha 2","Aloha 3","Aloha 4","Aloha 5","Aloha 6"],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Rl={class:"a_columns a_columns_count_12"},Il={class:"a_column a_column_6 a_columns_count_12_touch"};function Pl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_HEADER_",description:"_A_UI_GROUP_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",props:"is-data-simple-array"},{default:b(()=>[h("div",Rl,[h("div",Il,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"is-data-simple-array":!0,label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Cl=u(kl,[["render",Pl]]);function El(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function gl(){return{codeJs:`import {
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
};`}}const yl={name:"PageCheckboxIsWidthAuto",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=El(),{codeJs:l}=gl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Bl={class:"a_columns a_columns_count_12"},Sl={class:"a_column a_column_6 a_columns_count_12_touch"};function xl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_IS_WIDTH_AUTO_HEADER_",description:"_A_UI_GROUP_IS_WIDTH_AUTO_DESCRIPTION_",props:"is-width-auto"},{default:b(()=>[h("div",Bl,[h("div",Sl,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"is-width-auto":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"is-width-auto":!1,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ol=u(yl,[["render",xl]]);function Dl(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function vl(){return{codeJs:`import {
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
};`}}const Tl={name:"PageCheckboxKeyDisabled",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Dl(),{codeJs:l}=vl(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Ul={class:"a_columns a_columns_count_12"},$l={class:"a_column a_column_6 a_columns_count_12_touch"};function Hl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_DISABLED_HEADER_",description:"_A_UI_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:b(()=>[h("div",Ul,[h("div",$l,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-disabled":"disabled","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Nl=u(Tl,[["render",Hl]]);function Kl(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function Ll(){return{codeJs:`import {
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
};`}}const Vl={name:"PageCheckboxKeyLabelCallback",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Kl(),{codeJs:l}=Ll(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyLabelCallback:({item:c})=>`--${c.label}--`}}},Jl={class:"a_columns a_columns_count_12"},Gl={class:"a_column a_column_6 a_columns_count_12_touch"};function jl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_LABEL_CALLBACK_HEADER_",description:"_A_UI_GROUP_KEY_LABEL_CALLBACK_DESCRIPTION_",props:"key-label-callback"},{default:b(()=>[h("div",Jl,[h("div",Gl,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-label-callback":a.onKeyLabelCallback,"key-id":"id",label:"Aloha"},null,8,["modelValue","data","key-label-callback"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ql=u(Vl,[["render",jl]]);function Ml(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Fl(){return{codeJs:`import {
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
};`}}const Xl={name:"PageCheckboxKeyTitle",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Ml(),{codeJs:l}=Fl(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n,onKeyTitleCallback:({item:c})=>`--${c.label}--`}}},Yl={class:"a_columns a_columns_count_12"},wl={class:"a_column a_column_6 a_columns_count_12_touch"};function Wl(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_KEY_TITLE_HEADER_",description:"_A_UI_GROUP_KEY_TITLE_DESCRIPTION_",props:["key-title","key-title-callback"]},{default:b(()=>[h("div",Yl,[h("div",wl,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label","key-title":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-title-callback":a.onKeyTitleCallback,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data","key-title-callback"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ql=u(Xl,[["render",Wl]]);function Zl(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  label="Checkbox"
  label-description="Aloha"
></a-checkbox>`}}function zl(){return{codeJs:`import {
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
};`}}const ae={name:"PageCheckboxLabelDescription",components:{ACheckbox:f,AlohaExample:A},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i([]),{codeHtml:t}=Zl(),{codeJs:n}=zl();return{codeHtml:t,codeJs:n,data:a,model:l}}};function le(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:b(()=>[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,label:"Checkbox","label-description":"Aloha"},null,8,["modelValue","data"])]),_:1},8,["code-html","code-js"])}const ee=u(ae,[["render",le]]);function oe(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
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
};`}}const te={name:"PageCheckboxLabelScreenReader",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=oe(),{codeJs:l}=de(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ne={class:"a_columns a_columns_count_12"},se={class:"a_column a_column_6 a_columns_count_12_touch"};function he(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_SCREEN_READER_HEADER_",description:"_A_UI_GROUP_LABEL_SCREEN_READER_DESCRIPTION_",props:"label-screen-reader"},{default:b(()=>[h("div",ne,[h("div",se,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label","label-screen-reader":"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const _e=u(te,[["render",he]]);function ce(){return{codeHtml:`<a-checkbox
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
></a-checkbox>`}}function re(){return{codeJs:`import {
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
};`}}const ie={name:"PageCheckboxReadonly",components:{ACheckbox:f,AlohaExample:A},setup(){const a=[{value:"aloha_1",label:"Aloha 1"},{value:"aloha_2",label:"Aloha 2"},{value:"aloha_3",label:"Aloha 3"},{value:"aloha_4",label:"Aloha 4"}],l=i(["aloha_1","aloha_4"]),t=i(void 0),{codeHtml:n}=ce(),{codeJs:r}=re();return{codeHtml:n,codeJs:r,data:a,model1:l,model2:t}}};function ue(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:b(()=>[s(o,{"model-value":a.model1,data:a.data,readonly:!0,label:"Checkbox 1"},null,8,["model-value","data"]),s(o,{class:"a_mt_3","model-value":a.model2,data:a.data,readonly:!0,label:"Checkbox 2"},null,8,["model-value","data"]),s(o,{class:"a_mt_3","model-value":a.model2,data:a.data,readonly:!0,"help-text":"Aloha",label:"Checkbox 3","readonly-default":"-"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const me=u(ie,[["render",ue]]);function be(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function pe(){return{codeJs:`import {
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
};`}}const Ae={name:"PageCheckboxSearch",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=be(),{codeJs:l}=pe(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},fe={class:"a_columns a_columns_count_12"},ke={class:"a_column a_column_6 a_columns_count_12_touch"};function Re(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_HEADER_",description:"_A_UI_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:b(()=>[h("div",fe,[h("div",ke,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ie=u(Ae,[["render",Re]]);function Pe(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Ce(){return{codeJs:`import {
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
};`}}const Ee={name:"PageCheckboxSearchTextInHtml",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=Pe(),{codeJs:l}=Ce(),t=[{label:"<span>Aloha</span> <strong>1</strong>",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],n=i(["aloha_7"]);return{codeHtml:a,codeJs:l,data:t,model:n}}},ge={class:"a_columns a_columns_count_12"},ye={class:"a_column a_column_6 a_columns_count_12_touch"};function Be(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html"]},{default:b(()=>[h("div",ge,[h("div",ye,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Se=u(Ee,[["render",Be]]);function xe(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Oe(){return{codeJs:`import {
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
};`}}const De={name:"PageCheckboxSortOrder",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=xe(),{codeJs:l}=Oe(),t=[{label:"Aloha 8",id:"aloha_8"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 7",id:"aloha_7"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ve={class:"a_columns a_columns_count_12"},Te={class:"a_column a_column_6 a_columns_count_12_touch"};function Ue(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_DESCRIPTION_",props:"sort-order"},{default:b(()=>[h("div",ve,[h("div",Te,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"sort-order":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"asc"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),data:a.data,"key-id":"id","key-label":"label",label:"Aloha","sort-order":"desc"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const $e=u(De,[["render",Ue]]);function He(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Ne(){return{codeJs:`import {
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
};`}}const Ke={name:"PageCheckboxSortOrderGroup",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=He(),{codeJs:l}=Ne(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Le={class:"a_columns a_columns_count_12"},Ve={class:"a_column a_column_6 a_columns_count_12_touch"};function Je(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SORT_ORDER_GROUP_HEADER_",description:"_A_UI_GROUP_SORT_ORDER_GROUP_DESCRIPTION_",props:["sort-order-group"]},{default:b(()=>[h("div",Le,[h("div",Ve,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"sort-order-group":void 0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"asc"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e),data:a.data,"key-group":["alohaBR","aloha"],"key-id":"id","key-label":"label",label:"Aloha","sort-order-group":"desc"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ge=u(Ke,[["render",Je]]);function je(){return{codeHtml:`<a-checkbox
  v-model="model"
  :data="data"
  :translate-data="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`}}function qe(){return{codeJs:`import {
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
};`}}const Me={name:"PageCheckboxTranslateData",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=je(),{codeJs:l}=qe(),t=[{label:"_A_UI_ELEMENT_0_",id:"aloha_0"},{label:"_A_UI_ELEMENT_1_",id:"aloha_1"},{label:"_A_UI_ELEMENT_2_",id:"aloha_2"},{label:"_A_UI_ELEMENT_3_",id:"aloha_3"},{label:"_A_UI_ELEMENT_4_",id:"aloha_4"},{label:"_A_UI_ELEMENT_5_",id:"aloha_5"},{label:"_A_UI_ELEMENT_6_",id:"aloha_6"},{label:"_A_UI_ELEMENT_7_",id:"aloha_7"},{label:"_A_UI_ELEMENT_8_",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Fe={class:"a_columns a_columns_count_12"},Xe={class:"a_column a_column_6 a_columns_count_12_touch"};function Ye(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_UI_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:b(()=>[h("div",Fe,[h("div",Xe,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"translate-data":!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const we=u(Me,[["render",Ye]]);function We(){return{codeHtml:`<a-checkbox
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
<div>model: {{ model }}</div>`}}function Qe(){return{codeJs:`import {
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
};`}}const Ze={name:"PageCheckboxTwoColumns",components:{ACheckbox:f,AlohaExample:A},setup(){const{codeHtml:a}=We(),{codeJs:l}=Qe(),t=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],n=i(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ze={class:"a_columns a_columns_count_12"},ao={class:"a_column a_column_6 a_columns_count_12_touch"};function lo(a,l,t,n,r,c){const o=d("a-checkbox"),_=d("aloha-example");return p(),m(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_TWO_COLUMNS_HEADER_",description:"_A_UI_GROUP_TWO_COLUMNS_DESCRIPTION_",props:"class-data-parent"},{default:b(()=>[h("div",ze,[h("div",ao,[s(o,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=e=>a.model=e),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),s(o,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=e=>a.model=e),data:a.data,"class-data-parent":"a_list_columns a_list_columns_2_desktop a_list_columns_2_widescreen a_list_columns_2_fullhd","key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),h("div",null,"model: "+k(a.model),1)])])]),_:1},8,["code-html","code-js"])}const eo=u(Ze,[["render",lo]]);function oo(){return{dataEvents:[{name:"focusin",description:"_A_UI_EVENTS_FOCUSIN_DESCRIPTION_",type:"Function"},{name:"focusout",description:"_A_UI_EVENTS_FOCUSOUT_DESCRIPTION_",type:"Function"},{name:"on-search-outside",description:"_A_UI_EVENTS_ON_SEARCH_OUTSIDE_DESCRIPTION_",type:"Function"},{name:"update-data",description:"_A_UI_EVENTS_UPDATE_DATA_DESCRIPTION_",type:"Function"},{name:"toggle-collapse",description:"_A_UI_EVENTS_TOGGLE_COLLAPSE_DESCRIPTION_",type:"Function"},{name:"update:model-value",description:"_A_UI_EVENTS_UPDATE_MODEL_VALUE_DESCRIPTION_",type:"Function"}]}}function to(){const a=P(()=>Q({placeholder:"_A_CHECKBOX_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ACheckbox${a.value?` (${a.value})`:""}`)}}function no(){return{dataProps:[{name:"always-translate",description:"_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"api-save-id",description:"_A_UI_PROPS_API_SAVE_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"attributes-fieldset",description:"_A_UI_PROPS_ATTRIBUTES_FIELDSET_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"change",description:"_A_UI_PROPS_CHANGE_DESCRIPTION_",type:"Function",default:"() => {}",required:!1},{name:"class-button-group-default",description:"_A_UI_PROPS_CLASS_BUTTON_GROUP_DEFAULT_DESCRIPTION_",type:"String / Object / Array",default:"a_btn a_btn_outline_primary",required:!1},{name:"class-data-parent",description:"_A_UI_PROPS_CLASS_DATA_PARENT_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"class-fieldset",description:"_A_UI_PROPS_CLASS_FIELDSET_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"collapsible",description:"_A_CHECKBOX_PROPS_COLLAPSIBLE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"data",description:"_A_UI_PROPS_DATA_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"data-extra",description:"_A_UI_PROPS_DATA_EXTRA_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"dependencies",description:"_A_UI_PROPS_DEPENDENCIES_DESCRIPTION_",type:"Array / Object",default:void 0,required:!1},{name:"disabled",description:"_A_UI_PROPS_DISABLED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"errors",description:"_A_UI_PROPS_ERRORS_DESCRIPTION_",type:"String / Array",default:void 0,required:!1},{name:"exclude-render-attributes",description:"_A_UI_PROPS_EXCLUDE_RENDER_ATTRIBUTES_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"extra",description:"_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",type:"Object",default:void 0,required:!1},{name:"has-border",description:"_A_UI_PROPS_HAS_BORDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"has-control-checkbox",description:"_A_CHECKBOX_PROPS_HAS_CONTROL_CHECKBOX_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"help-text",description:"_A_UI_PROPS_HELP_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"html-id",description:"_A_UI_PROPS_HTML_ID_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"id",description:"_A_UI_PROPS_ID_DESCRIPTION_",type:"String / Number",default:'() => uniqueId("a_checkbox_")',required:!1},{name:"id-prefix",description:"_A_UI_PROPS_ID_PREFIX_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"inline",description:"_A_CHECKBOX_PROPS_INLINE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-button-group",description:"_A_CHECKBOX_PROPS_IS_BUTTON_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-collapsed",description:"_A_CHECKBOX_PROPS_IS_COLLAPSED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-data-simple-array",description:"_A_UI_PROPS_IS_DATA_SIMPLE_ARRAY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-hide",description:"_A_UI_PROPS_IS_HIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"is-render",description:"_A_UI_PROPS_IS_RENDER_DESCRIPTION_",type:"Boolean",default:!0,required:!1},{name:"is-width-auto",description:"_A_CHECKBOX_PROPS_IS_WIDTH_AUTO_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"key-disabled",description:"_A_UI_PROPS_KEY_DISABLED_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-disabled-callback",description:"_A_UI_PROPS_KEY_DISABLED_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-group",description:"_A_UI_PROPS_KEY_GROUP_DESCRIPTION_",type:"String / Number / Array",default:void 0,required:!1},{name:"key-group-label-callback",description:"_A_UI_PROPS_KEY_GROUP_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-id",description:"_A_UI_PROPS_KEY_ID_DESCRIPTION_",type:"String",default:"value",required:!1},{name:"key-label",description:"_A_UI_PROPS_KEY_LABEL_DESCRIPTION_",type:"String",default:"label",required:!1},{name:"key-label-callback",description:"_A_UI_PROPS_KEY_LABEL_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"key-title",description:"_A_UI_PROPS_KEY_TITLE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"key-title-callback",description:"_A_UI_PROPS_KEY_TITLE_CALLBACK_DESCRIPTION_",type:"Function",default:void 0,required:!1},{name:"label",description:"_A_UI_PROPS_LABEL_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"label-class",description:"_A_UI_PROPS_LABEL_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"label-description",description:"_A_UI_PROPS_LABEL_DESCRIPTION_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"label-screen-reader",description:"_A_UI_PROPS_LABEL_SCREEN_READER_DESCRIPTION_",type:"String / Number",default:void 0,required:!1},{name:"loading",description:"_A_UI_PROPS_LOADING_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"model-dependencies",description:"_A_UI_PROPS_MODEL_DEPENDENCIES_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1},{name:"model-value",description:"_A_UI_PROPS_MODEL_VALUE_DESCRIPTION_",type:"Array",default:void 0,required:!1},{name:"readonly",description:"_A_UI_PROPS_READONLY_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"readonly-default",description:"_A_UI_PROPS_READONLY_DEFAULT_DESCRIPTION_",type:"String",default:"",required:!1},{name:"required",description:"_A_UI_PROPS_REQUIRED_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search",description:"_A_UI_PROPS_SEARCH_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api",description:"_A_UI_PROPS_SEARCH_API_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-api-key",description:"_A_UI_PROPS_SEARCH_API_KEY_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"search-in-group",description:"_A_UI_PROPS_SEARCH_IN_GROUP_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-outside",description:"_A_UI_PROPS_SEARCH_OUTSIDE_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-text-in-html",description:"_A_UI_PROPS_SEARCH_SEARCH_TEXT_IN_HTML_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"search-timeout",description:"_A_UI_PROPS_SEARCH_TIMEOUT_DESCRIPTION_",type:"Number",default:0,required:!1},{name:"slot-append-name",description:"_A_UI_PROPS_SLOT_APPEND_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"slot-name",description:"_A_UI_PROPS_SLOT_NAME_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order",description:"_A_UI_PROPS_SORT_ORDER_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"sort-order-group",description:"_A_UI_PROPS_SORT_ORDER_GROUP_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"texts",description:"_A_CHECKBOX_PROPS_TEXTS_DESCRIPTION_",type:"Object",default:`() => ({
        collapseClose: "_A_FIELDSET_COLLAPSE_CLOSE_",
        collapseOpen: "_A_FIELDSET_COLLAPSE_OPEN_",
        notElementsWithSearch: "_A_CHECKBOX_HAS_NOT_ELEMENTS_WITH_SEARCH_",
        search: "_A_CHECKBOX_SEARCH_",
      })`,required:!1},{name:"translate-data",description:"_A_UI_PROPS_TRANSLATE_DATA_DESCRIPTION_",type:"Boolean",default:void 0,required:!1},{name:"url",description:"_A_UI_PROPS_URL_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-params",description:"_A_UI_PROPS_URL_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function so(){return{dataTranslate:["_A_CHECKBOX_HAS_NOT_ELEMENTS_WITH_SEARCH_","_A_CHECKBOX_SEARCH_"]}}const ho={name:"PageCheckbox",components:{AlohaPage:Y,AlohaTableProps:w,AlohaTableTranslate:W,ATranslation:Z,PageCheckboxBasic:oa,PageCheckboxChange:ha,PageCheckboxCollapse:ba,PageCheckboxDataExtra:Pa,PageCheckboxError:Ba,PageCheckboxFocusBlur:va,PageCheckboxGroup:La,PageCheckboxHasBorder:Fa,PageCheckboxHasControlCheckbox:za,PageCheckboxHelpText:dl,PageCheckboxInline:rl,PageCheckboxIsButtonGroup:pl,PageCheckboxIsDataSimpleArray:Cl,PageCheckboxIsWidthAuto:Ol,PageCheckboxKeyDisabled:Nl,PageCheckboxKeyLabelCallback:ql,PageCheckboxKeyTitle:Ql,PageCheckboxLabelDescription:ee,PageCheckboxLabelScreenReader:_e,PageCheckboxReadonly:me,PageCheckboxSearch:Ie,PageCheckboxSearchTextInHtml:Se,PageCheckboxSortOrder:$e,PageCheckboxSortOrderGroup:Ge,PageCheckboxTranslateData:we,PageCheckboxTwoColumns:eo},setup(){const{pageTitle:a}=to(),{dataProps:l}=no(),{dataTranslate:t}=so(),{dataEvents:n}=oo();return{dataEvents:n,dataProps:l,dataTranslate:t,pageTitle:a}}};function _o(a,l,t,n,r,c){const o=d("a-translation"),_=d("page-checkbox-basic"),e=d("page-checkbox-change"),R=d("page-checkbox-help-text"),C=d("page-checkbox-error"),E=d("page-checkbox-label-description"),g=d("page-checkbox-label-screen-reader"),y=d("page-checkbox-group"),B=d("page-checkbox-search"),S=d("page-checkbox-search-text-in-html"),x=d("page-checkbox-key-disabled"),O=d("page-checkbox-translate-data"),D=d("page-checkbox-is-button-group"),v=d("page-checkbox-collapse"),T=d("page-checkbox-data-extra"),U=d("page-checkbox-inline"),$=d("page-checkbox-has-control-checkbox"),H=d("page-checkbox-two-columns"),N=d("page-checkbox-has-border"),K=d("page-checkbox-is-data-simple-array"),L=d("page-checkbox-is-width-auto"),V=d("page-checkbox-key-label-callback"),J=d("page-checkbox-key-title"),G=d("page-checkbox-sort-order"),j=d("page-checkbox-sort-order-group"),q=d("page-checkbox-focus-blur"),M=d("page-checkbox-readonly"),I=d("aloha-table-props"),F=d("aloha-table-translate"),X=d("aloha-page");return p(),m(X,{"page-title":a.pageTitle},{body:b(()=>[s(o,{tag:"p",html:"_A_CHECKBOX_COMPONENT_DESCRIPTION_"}),s(_),s(e),s(R),s(C),s(E),s(g),s(y),s(B),s(S),s(x),s(O),s(D),s(v),s(T),s(U),s($),s(H),s(N),s(K),s(L),s(V),s(J),s(G),s(j),s(q),s(M),s(I,{data:a.dataProps},null,8,["data"]),s(I,{"table-label":"Events",data:a.dataEvents,columns:["name","type","description"]},null,8,["data"]),s(F,{data:a.dataTranslate},null,8,["data"])]),_:1},8,["page-title"])}const Bo=u(ho,[["render",_o]]);export{Bo as default};
