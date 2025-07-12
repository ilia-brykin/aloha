import{A as y,a as H}from"./chunk.AlohaExample.CFPjMnTE.js";import{A as V}from"./chunk.AlohaTableProps.DLB5jOeH.js";import{G as b,_ as E,g as N,A as K,b as x}from"./bundle.index.C-cqUZil.js";import{r as m,V as f,aT as A,e as d,W as u,Z as e,_ as o,aU as _,d as v,Y as g}from"./chunk.vendor.BxCHGHAU.js";import"./chunk.vendor-lodash.BMPrua2s.js";import"./chunk.APageTabTitle.BViNoojp.js";import"./chunk.AlohaHighlightjs.B3F2oL8_.js";import"./chunk.ATable.-9JL2_v7.js";import"./chunk.translations-ar.D8MQqUIX.js";import"./chunk.translations-de.Cn_yzXHt.js";import"./chunk.translations-en.Cabsq1fv.js";import"./chunk.translations-es.CTtyunpM.js";import"./chunk.translations-fr.tpgV9obb.js";import"./chunk.translations-hr.v7YKJpdX.js";import"./chunk.translations-it.Dqw3KhB-.js";import"./chunk.translations-ru.Cm34nVPu.js";function U(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function J(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectBasic",
  components: {
    ASelect,
  },
  setup() {
    const data = [
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
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const M={name:"PageSelectBasic",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=U(),{codeJs:l}=J(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:r}}},j={class:"a_columns a_columns_count_12"},G={class:"a_column a_column_6 a_columns_count_12_touch"};function q(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:A(()=>[e("div",j,[e("div",G,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const X=E(M,[["render",q]]);function Y(){return{codeHtml:`<a-select
  v-model="model1"
  :data="data"
  :data-extra="dataExtraArrayOfArrays"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
  :search="true"
></a-select>
<div>model1: {{ model1 }}</div>
<a-select
  v-model="model2"
  class="a_mt_3"
  :data="data"
  :data-extra="dataExtraArrayOfObjects"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Objects)"
  :search="true"
></a-select>
<div>model2: {{ model2 }}</div>`}}function w(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectDataExtra",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
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
};`}}const F={name:"PageSelectDataExtra",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=Y(),{codeJs:l}=w(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],h=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],c=m(void 0),t=m(void 0);return{codeHtml:a,codeJs:l,data:n,dataExtraArrayOfArrays:r,dataExtraArrayOfObjects:h,model1:c,model2:t}}},W={class:"a_columns a_columns_count_12"},Z={class:"a_column a_column_6 a_columns_count_12_touch"};function z(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_DATA_EXTRA_HEADER_",description:"_A_SELECT_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:A(()=>[e("div",W,[e("div",Z,[o(t,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model1=s),data:a.data,"data-extra":a.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),e("div",null,"model1: "+_(a.model1),1),o(t,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model2=s),data:a.data,"data-extra":a.dataExtraArrayOfObjects,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),e("div",null,"model2: "+_(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Q=E(F,[["render",z]]);function aa(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  :is-exclusive-option-enabled="true"
  key-id="id"
  key-label="label"
  label="Aloha 1"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  :is-deselect-all="true"
  :is-exclusive-option-enabled="true"
  :is-select-all="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 2"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>`}}function la(){return{codeJs:`import {
  ref,
} from "vue";
import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectExclusiveOption",
  components: {
    ASelect,
  },
  setup() {
    const data = [
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
    ];
    const exclusiveOptionLabel = '_A_SELECT_EXCLUSIVE_';    
    const exclusiveOptionValue = 'aloha_exclusive';
    const model = ref(undefined);

    return {
      codeHtml,
      codeJs,
      data,
      exclusiveOptionLabel,
      exclusiveOptionValue,
      model,
    };
  },
};`}}const ea={name:"PageSelectExclusiveOption",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=aa(),{codeJs:l}=la(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r="_A_SELECT_EXCLUSIVE_",h="aloha_exclusive",c=m(void 0);return{codeHtml:a,codeJs:l,data:n,exclusiveOptionLabel:r,exclusiveOptionValue:h,model:c}}},oa={class:"a_columns a_columns_count_12"},ta={class:"a_column a_column_6 a_columns_count_12_touch"};function da(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_EXCLUSIVE_OPTION_HEADER_",description:"_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_",props:["exclusive-option-label","exclusive-option-value","is-exclusive-option-enabled"]},{default:A(()=>[e("div",oa,[e("div",ta,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"exclusive-option-label":a.exclusiveOptionLabel,"exclusive-option-value":a.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),e("div",null,"model: "+_(a.model),1),o(t,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model=s),data:a.data,"exclusive-option-label":a.exclusiveOptionLabel,"exclusive-option-value":a.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const sa=E(ea,[["render",da]]);function na(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function ra(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectGroup",
  components: {
    ASelect,
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
};`}}const ia={name:"PageSelectGroup",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=na(),{codeJs:l}=ra(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:r}}},ha={class:"a_columns a_columns_count_12"},ca={class:"a_column a_column_6 a_columns_count_12_touch"};function _a(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:A(()=>[e("div",ha,[e("div",ca,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ua=E(ia,[["render",_a]]);function ma(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  key-disabled="disabled"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  class="a_mt_3"
  :data="data"
  key-id="id"
  key-label="label"
  key-disabled="disabled"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>`}}function Aa(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectKeyDisabled",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
        disabled: true,
      },
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
};`}}const pa={name:"PageSelectKeyDisabled",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=ma(),{codeJs:l}=Aa(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:r}}},ba={class:"a_columns a_columns_count_12"},Ea={class:"a_column a_column_6 a_columns_count_12_touch"};function fa(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:A(()=>[e("div",ba,[e("div",Ea,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1),o(t,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ya=E(pa,[["render",fa]]);function Sa(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-label-float="false"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Ra(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectLabelDescription",
  components: {
    ASelect,
  },
  setup() {
    const data = [
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
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const ga={name:"PageSelectLabelDescription",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=Sa(),{codeJs:l}=Ra(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:r}}},Ta={class:"a_columns a_columns_count_12"},va={class:"a_column a_column_6 a_columns_count_12_touch"};function ka(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:A(()=>[e("div",Ta,[e("div",va,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"is-label-float":!1,"key-id":"id","key-label":"label",label:"Select","label-description":"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Pa=E(ga,[["render",ka]]);function Ba(){return{codeHtml:`<a-select
  :model-value="model1"
  :data="data"
  :readonly="true"
  key-id="id"
  key-label="label"
  label="Select 1"
  type="select"
></a-select>
<a-select
  :model-value="model2"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 2"
  type="multiselect"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 3"
  type="select"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Select 4"
  type="multiselect"
></a-select>
<a-select
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  key-id="id"
  key-label="label"
  label="Select 5"
  readonly-default="-"
  type="select"
></a-select>`}}function La(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectReadonly",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
      },
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
    const model1 = ref("aloha_7");
    const model2 = ref(["aloha_6", "aloha_7"]);
    const model3 = ref(undefined);

    return {
      data,
      model1,
      model2,
      model3,
    };
  },
};`}}const Oa={name:"PageSelectReadonly",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=Ba(),{codeJs:l}=La(),n=[{label:"Aloha -1",id:"aloha_-1"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=m("aloha_7"),h=m(["aloha_6","aloha_7"]),c=m(void 0);return{codeHtml:a,codeJs:l,data:n,model1:r,model2:h,model3:c}}};function Ca(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:A(()=>[o(t,{"model-value":a.model1,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 1",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model2,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 2",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 3",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 4",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,"help-text":"Aloha","key-id":"id","key-label":"label",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const Ia=E(Oa,[["render",Ca]]);function Da(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search="true"
  :search-in-group="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  :data="data"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-select>
<div>model: {{ model }}</div>`}}function $a(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectSearch",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "Aloha -1",
        id: "aloha_-1",
        aloha: "",
      },
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
};`}}const Ha={name:"PageSelectSearch",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=Da(),{codeJs:l}=$a(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:r}}},Va={class:"a_columns a_columns_count_12"},Na={class:"a_column a_column_6 a_columns_count_12_touch"};function Ka(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:A(()=>[e("div",Va,[e("div",Na,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1),o(t,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model=s),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const xa=E(Ha,[["render",Ka]]);function Ua(){return{codeHtml:`<a-select
  v-model="model1"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  key-title="title"
  label="Aloha group 1"
  type="multiselect"
></a-select>
<a-select
  v-model="model1"
  :data="data"
  :key-title-callback="keyTitleCallback"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 1"
  type="multiselect"
></a-select>
<div>model1: {{ model1 }}</div>
<a-select
  v-model="model2"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  key-title="title"
  label="Aloha group 2"
  type="select"
></a-select>
<a-select
  v-model="model2"
  :data="data"
  :key-title-callback="keyTitleCallback"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha 2"
  type="select"
></a-select>
<div>model2: {{ model2 }}</div>`}}function Ja(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectSearchTextInHtml",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "<span>Aloha</span> <strong>1</strong>",
        title: "Aloha 1",
        id: "aloha_0",
        aloha: "",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>2</strong>",
        title: "Aloha 2",
        id: "aloha_1",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>3</strong>",
        title: "Aloha 3",
        id: "aloha_2",
        aloha: "Buba",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>4</strong>",
        title: "Aloha 4",
        id: "aloha_3",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>5</strong>",
        title: "Aloha 5",
        id: "aloha_4",
        aloha: "Sandra",
        alohaBR: "<strong>Köln</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>6</strong>",
        title: "Aloha 6",
        id: "aloha_5",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>7</strong>",
        title: "Aloha 7",
        id: "aloha_6",
        aloha: "Coco",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>8</strong>",
        title: "Aloha 8",
        id: "aloha_7",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
      {
        label: "<span>Aloha</span> <strong>9</strong>",
        title: "Aloha 9",
        id: "aloha_8",
        aloha: "Alex",
        alohaBR: "<strong>Düsseldorf</strong>",
      },
    ];
    const model1 = ref(["aloha_7"]);
    const model2 = ref("aloha_7");

    const keyTitleCallback = ({ item }) => {
      return \`--\${ item.title }--\`;
    };

    return {
      data,
      keyTitleCallback,
      model1,
      model2,
    };
  },
};`}}const Ma={name:"PageSelectSearchTextInHtml",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=Ua(),{codeJs:l}=Ja(),n=[{label:"<span>Aloha</span> <strong>1</strong>",title:"Aloha 1",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",title:"Aloha 2",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",title:"Aloha 3",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",title:"Aloha 4",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",title:"Aloha 5",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",title:"Aloha 6",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",title:"Aloha 7",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",title:"Aloha 8",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",title:"Aloha 9",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],r=m(["aloha_7"]),h=m("aloha_7");return{codeHtml:a,codeJs:l,data:n,keyTitleCallback:({item:t})=>`--${t.title}--`,model1:r,model2:h}}},ja={class:"a_columns a_columns_count_12"},Ga={class:"a_column a_column_6 a_columns_count_12_touch"};function qa(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html","key-title","key-title-callback"]},{default:A(()=>[e("div",ja,[e("div",Ga,[o(t,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model1=s),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 1",type:"multiselect"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:a.model1,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model1=s),data:a.data,"key-title-callback":a.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","key-title-callback"]),e("div",null,"model1: "+_(a.model1),1),o(t,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[2]||(l[2]=s=>a.model2=s),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 2",type:"select"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[3]||(l[3]=s=>a.model2=s),data:a.data,"key-title-callback":a.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"select"},null,8,["modelValue","data","key-title-callback"]),e("div",null,"model2: "+_(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Xa=E(Ma,[["render",qa]]);function Ya(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function wa(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectTranslateData",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "_A_SELECT_ELEMENT_0_",
        id: "aloha_0",
      },
      {
        label: "_A_SELECT_ELEMENT_1_",
        id: "aloha_1",
      },
      {
        label: "_A_SELECT_ELEMENT_2_",
        id: "aloha_2",
      },
      {
        label: "_A_SELECT_ELEMENT_3_",
        id: "aloha_3",
      },
      {
        label: "_A_SELECT_ELEMENT_4_",
        id: "aloha_4",
      },
      {
        label: "_A_SELECT_ELEMENT_5_",
        id: "aloha_5",
      },
      {
        label: "_A_SELECT_ELEMENT_6_",
        id: "aloha_6",
      },
      {
        label: "_A_SELECT_ELEMENT_7_",
        id: "aloha_7",
      },
      {
        label: "_A_SELECT_ELEMENT_8_",
        id: "aloha_8",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const Fa={name:"PageSelectTranslateData",components:{AlohaExample:y,ASelect:b},setup(){const{codeHtml:a}=Ya(),{codeJs:l}=wa(),n=[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],r=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:r}}},Wa={class:"a_columns a_columns_count_12"},Za={class:"a_column a_column_6 a_columns_count_12_touch"};function za(a,l,n,r,h,c){const t=d("a-select"),i=d("aloha-example");return u(),f(i,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:A(()=>[e("div",Wa,[e("div",Za,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Qa=E(Fa,[["render",za]]);function al(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function ll(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function el(){const a=v(()=>N({placeholder:"_A_SELECT_COMPONENT_NAME_"}));return{pageTitle:v(()=>`ASelect${a.value?` (${a.value})`:""}`)}}function ol(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function tl(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const dl={name:"PageSelect",components:{AIcon:x,AlohaPage:H,AlohaTableProps:V,ASelect:b,ATranslation:K,PageSelectBasic:X,PageSelectDataExtra:Q,PageSelectExclusiveOption:sa,PageSelectGroup:ua,PageSelectKeyDisabled:ya,PageSelectLabelDescription:Pa,PageSelectReadonly:Ia,PageSelectSearch:xa,PageSelectSearchTextInHtml:Xa,PageSelectTranslateData:Qa},setup(){const{pageTitle:a}=el(),{dataProps:l}=ol(),{dataSlots:n}=tl(),{dataEvents:r}=al(),{dataExposes:h}=ll();return{dataEvents:r,dataExposes:h,dataProps:l,dataSlots:n,pageTitle:a}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:a}){return`callback: ${a.label}`}}},sl={class:"a_columns a_columns_count_12"},nl={class:"a_column a_column_6"},rl=["innerHTML"],il=["innerHTML"],hl=["innerHTML"],cl=["innerHTML"];function _l(a,l,n,r,h,c){const t=d("a-translation"),i=d("page-select-basic"),s=d("page-select-label-description"),k=d("page-select-group"),P=d("page-select-search"),B=d("page-select-search-text-in-html"),L=d("page-select-key-disabled"),O=d("page-select-translate-data"),C=d("page-select-data-extra"),I=d("page-select-exclusive-option"),D=d("page-select-readonly"),R=d("a-select"),T=d("a-icon"),$=d("aloha-page");return u(),f($,{"page-title":a.pageTitle},{body:A(()=>[o(t,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),o(i),o(s),o(k),o(P),o(B),o(L),o(O),o(C),o(I),o(D),e("div",null,[e("div",sl,[e("div",nl,[o(R,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=p=>a.model=p),data:a.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),e("div",null,"model: "+_(a.model),1)])]),o(R,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=p=>a.model=p),data:a.data,"key-id":"id","key-label-callback":a.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),l[4]||(l[4]=e("br",null,null,-1)),o(R,{modelValue:a.modelArr,"onUpdate:modelValue":l[2]||(l[2]=p=>a.modelArr=p),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect","is-label-float":!1,placeholder:"placeholder",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:A(({label:p,labelFiltered:S})=>[o(T,{class:"a_mr_1",icon:"Cog"}),S?(u(),g("span",{key:0,innerHTML:S},null,8,rl)):(u(),g("span",{key:1,innerHTML:p},null,8,il))]),_:1},8,["modelValue","data"]),e("div",null,"modelArr: "+_(a.modelArr),1),l[5]||(l[5]=e("br",null,null,-1)),o(R,{modelValue:a.modelArr2,"onUpdate:modelValue":l[3]||(l[3]=p=>a.modelArr2=p),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:A(({label:p,labelFiltered:S})=>[o(T,{class:"a_mr_1",icon:"Cog"}),S?(u(),g("span",{key:0,innerHTML:S},null,8,hl)):(u(),g("span",{key:1,innerHTML:p},null,8,cl))]),_:1},8,["modelValue","data"]),e("div",null,"modelArr2: "+_(a.modelArr2),1)])]),_:1},8,["page-title"])}const Ll=E(dl,[["render",_l]]);export{Ll as default};
