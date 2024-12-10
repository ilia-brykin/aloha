import{A as S,a as I}from"./chunk.AlohaExample.Ch828iNY.js";import{A as v}from"./chunk.AlohaTableProps.C36Ex24p.js";import{m as b,_ as E,g as k,A as $,a as N}from"./bundle.index.C5ESvXvL.js";import{r as p,m as d,C as f,L as m,B as c,F as e,G as o,M as h,a as P,E as y}from"./chunk.vendor.D-Y3mz6a.js";import"./chunk.vendor-lodash.ClBXVCWL.js";import"./chunk.ATable.C4VIyU-j.js";import"./chunk.utilsMath.7PmiGUbm.js";import"./chunk.AForm.DSIL6mB0.js";import"./chunk.ADatepicker.DHZnNTS-.js";import"./chunk.UiMixinProps.BVfs3aDc.js";import"./chunk.AInputNumber.kHSOqT_P.js";import"./chunk.ATinymce.CslL0xeu.js";import"./chunk.vendor-tinymce.2RT9eEW9.js";function H(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function K(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
    
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
};`}}const V={name:"PageSelectBasic",components:{AlohaExample:S,ASelect:b},setup(){const{codeHtml:a}=H(),{codeJs:l}=K(),t=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],n=p(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},M={class:"a_columns a_columns_count_12"},J={class:"a_column a_column_6 a_columns_count_12_touch"};function x(a,l,t,n,u,A){const _=d("a-select"),r=d("aloha-example");return c(),f(r,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:m(()=>[e("div",M,[e("div",J,[o(_,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const U=E(V,[["render",x]]);function j(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function G(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
    
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
};`}}const q={name:"PageSelectDataExtra",components:{AlohaExample:S,ASelect:b},setup(){const{codeHtml:a}=j(),{codeJs:l}=G(),t=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],u=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],A=p(void 0),_=p(void 0);return{codeHtml:a,codeJs:l,data:t,dataExtraArrayOfArrays:n,dataExtraArrayOfObjects:u,model1:A,model2:_}}},X={class:"a_columns a_columns_count_12"},w={class:"a_column a_column_6 a_columns_count_12_touch"};function F(a,l,t,n,u,A){const _=d("a-select"),r=d("aloha-example");return c(),f(r,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_DATA_EXTRA_HEADER_",description:"_A_SELECT_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:m(()=>[e("div",X,[e("div",w,[o(_,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model1=s),data:a.data,"data-extra":a.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),e("div",null,"model1: "+h(a.model1),1),o(_,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model2=s),data:a.data,"data-extra":a.dataExtraArrayOfObjects,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),e("div",null,"model2: "+h(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const Y=E(q,[["render",F]]);function z(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Q(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
    
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
};`}}const W={name:"PageSelectGroup",components:{AlohaExample:S,ASelect:b},setup(){const{codeHtml:a}=z(),{codeJs:l}=Q(),t=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=p(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Z={class:"a_columns a_columns_count_12"},aa={class:"a_column a_column_6 a_columns_count_12_touch"};function la(a,l,t,n,u,A){const _=d("a-select"),r=d("aloha-example");return c(),f(r,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:m(()=>[e("div",Z,[e("div",aa,[o(_,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ea=E(W,[["render",la]]);function oa(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function da(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
    
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
};`}}const ta={name:"PageSelectKeyDisabled",components:{AlohaExample:S,ASelect:b},setup(){const{codeHtml:a}=oa(),{codeJs:l}=da(),t=[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=p(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},na={class:"a_columns a_columns_count_12"},sa={class:"a_column a_column_6 a_columns_count_12_touch"};function _a(a,l,t,n,u,A){const _=d("a-select"),r=d("aloha-example");return c(),f(r,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:m(()=>[e("div",na,[e("div",sa,[o(_,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1),o(_,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ra=E(ta,[["render",_a]]);function ha(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ia(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
    
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
};`}}const ca={name:"PageSelectSearch",components:{AlohaExample:S,ASelect:b},setup(){const{codeHtml:a}=ha(),{codeJs:l}=ia(),t=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],n=p(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},ua={class:"a_columns a_columns_count_12"},ma={class:"a_column a_column_6 a_columns_count_12_touch"};function Aa(a,l,t,n,u,A){const _=d("a-select"),r=d("aloha-example");return c(),f(r,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:m(()=>[e("div",ua,[e("div",ma,[o(_,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1),o(_,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=s=>a.model=s),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const pa=E(ca,[["render",Aa]]);function ba(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function Ea(){return{codeJs:`import {
  ref,
} from "vue";

import ASelect from "aloha-vue/src/ui/ASelect/ASelect";
    
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
};`}}const fa={name:"PageSelectTranslateData",components:{AlohaExample:S,ASelect:b},setup(){const{codeHtml:a}=ba(),{codeJs:l}=Ea(),t=[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],n=p(void 0);return{codeHtml:a,codeJs:l,data:t,model:n}}},Sa={class:"a_columns a_columns_count_12"},Ra={class:"a_column a_column_6 a_columns_count_12_touch"};function Ta(a,l,t,n,u,A){const _=d("a-select"),r=d("aloha-example");return c(),f(r,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:m(()=>[e("div",Sa,[e("div",Ra,[o(_,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=s=>a.model=s),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ya=E(fa,[["render",Ta]]);function Ba(){const a=P(()=>k({placeholder:"_A_SELECT_COMPONENT_NAME_"}));return{pageTitle:P(()=>`ASelect${a.value?` (${a.value})`:""}`)}}function Pa(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function La(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}function Ca(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function Oa(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}const ga={name:"PageSelect",components:{AlohaPage:I,AlohaTableProps:v,ATranslation:$,AIcon:N,ASelect:b,PageSelectBasic:U,PageSelectDataExtra:Y,PageSelectGroup:ea,PageSelectSearch:pa,PageSelectKeyDisabled:ra,PageSelectTranslateData:ya},setup(){const{pageTitle:a}=Ba(),{dataProps:l}=Pa(),{dataSlots:t}=La(),{dataEvents:n}=Ca(),{dataExposes:u}=Oa();return{dataEvents:n,dataExposes:u,dataProps:l,dataSlots:t,pageTitle:a}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:a}){return`callback: ${a.label}`}}},Da={class:"a_columns a_columns_count_12"},Ia={class:"a_column a_column_6"},va=e("br",null,null,-1),ka=["innerHTML"],$a=["innerHTML"],Na=e("br",null,null,-1),Ha=["innerHTML"],Ka=["innerHTML"];function Va(a,l,t,n,u,A){const _=d("a-translation"),r=d("page-select-basic"),s=d("page-select-group"),L=d("page-select-search"),C=d("page-select-key-disabled"),O=d("page-select-translate-data"),g=d("page-select-data-extra"),T=d("a-select"),B=d("a-icon"),D=d("aloha-page");return c(),f(D,{"page-title":a.pageTitle},{body:m(()=>[o(_,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),o(r),o(s),o(L),o(C),o(O),o(g),e("div",null,[e("div",Da,[e("div",Ia,[o(T,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=i=>a.model=i),data:a.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])]),o(T,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=i=>a.model=i),data:a.data,"key-id":"id","key-label-callback":a.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),va,o(T,{modelValue:a.modelArr,"onUpdate:modelValue":l[2]||(l[2]=i=>a.modelArr=i),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect","is-label-float":!1,placeholder:"placeholder",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:m(({label:i,labelFiltered:R})=>[o(B,{class:"a_mr_1",icon:"Cog"}),R?(c(),y("span",{key:0,innerHTML:R},null,8,ka)):(c(),y("span",{key:1,innerHTML:i},null,8,$a))]),_:1},8,["modelValue","data"]),e("div",null,"modelArr: "+h(a.modelArr),1),Na,o(T,{modelValue:a.modelArr2,"onUpdate:modelValue":l[3]||(l[3]=i=>a.modelArr2=i),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:m(({label:i,labelFiltered:R})=>[o(B,{class:"a_mr_1",icon:"Cog"}),R?(c(),y("span",{key:0,innerHTML:R},null,8,Ha)):(c(),y("span",{key:1,innerHTML:i},null,8,Ka))]),_:1},8,["modelValue","data"]),e("div",null,"modelArr2: "+h(a.modelArr2),1)])]),_:1},8,["page-title"])}const Wa=E(ga,[["render",Va]]);export{Wa as default};
