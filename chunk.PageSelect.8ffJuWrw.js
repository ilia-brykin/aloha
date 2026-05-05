import{A as f,a as U}from"./chunk.AlohaExample.0czaXE0h.js";import{A as J}from"./chunk.AlohaTableProps.xIZOnmIH.js";import{f as A,_ as b,g as K,A as M,b as j}from"./bundle.index.BS8ywY37.js";import{r as u,W as m,V as E,aT as p,e as n,Z as a,_ as o,aU as c,d as v,Y as T}from"./chunk.vendor.7qYoMuVo.js";import"./chunk.vendor-lodash.CDw4fzB6.js";import"./chunk.APageTabTitle.CroeXW2D.js";import"./chunk.AlohaHighlightjs.CqftpDCI.js";import"./chunk.ATable.DbKSc2dE.js";import"./chunk.translations-ar.McCs_fFr.js";import"./chunk.translations-de.BbOvqAJ_.js";import"./chunk.translations-en.D2Z6fxw-.js";import"./chunk.translations-es.CdNsJSkL.js";import"./chunk.translations-fr.DrnZiyDw.js";import"./chunk.translations-hr.DcJaeEil.js";import"./chunk.translations-it.BeIfmSIC.js";import"./chunk.translations-ru.CDl-kDqa.js";function x(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function G(){return{codeJs:`import {
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
};`}}const X={name:"PageSelectBasic",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=x(),{codeJs:e}=G(),s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},q={class:"a_columns a_columns_count_12"},w={class:"a_column a_column_6 a_columns_count_12_touch"};function F(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:p(()=>[a("div",q,[a("div",w,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const Y=b(X,[["render",F]]);function W(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function Z(){return{codeJs:`import {
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
};`}}const z={name:"PageSelectDataExtra",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=W(),{codeJs:e}=Z(),s=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],i=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],h=u(void 0),t=u(void 0);return{codeHtml:l,codeJs:e,data:s,dataExtraArrayOfArrays:r,dataExtraArrayOfObjects:i,model1:h,model2:t}}},Q={class:"a_columns a_columns_count_12"},ll={class:"a_column a_column_6 a_columns_count_12_touch"};function el(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_DATA_EXTRA_HEADER_",description:"_A_SELECT_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:p(()=>[a("div",Q,[a("div",ll,[o(t,{modelValue:l.model1,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model1=d),data:l.data,"data-extra":l.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),a("div",null,"model1: "+c(l.model1),1),o(t,{class:"a_mt_3",modelValue:l.model2,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model2=d),data:l.data,"data-extra":l.dataExtraArrayOfObjects,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),a("div",null,"model2: "+c(l.model2),1)])])]),_:1},8,["code-html","code-js"])}const al=b(z,[["render",el]]);function ol(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function tl(){return{codeJs:`import {
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
};`}}const dl={name:"PageSelectExclusiveOption",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=ol(),{codeJs:e}=tl(),s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r="_A_SELECT_EXCLUSIVE_",i="aloha_exclusive",h=u(void 0);return{codeHtml:l,codeJs:e,data:s,exclusiveOptionLabel:r,exclusiveOptionValue:i,model:h}}},nl={class:"a_columns a_columns_count_12"},sl={class:"a_column a_column_6 a_columns_count_12_touch"};function rl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_EXCLUSIVE_OPTION_HEADER_",description:"_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_",props:["exclusive-option-label","exclusive-option-value","is-exclusive-option-enabled"]},{default:p(()=>[a("div",nl,[a("div",sl,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"exclusive-option-label":l.exclusiveOptionLabel,"exclusive-option-value":l.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),a("div",null,"model: "+c(l.model),1),o(t,{class:"a_mt_3",modelValue:l.model,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model=d),data:l.data,"exclusive-option-label":l.exclusiveOptionLabel,"exclusive-option-value":l.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const _l=b(dl,[["render",rl]]);function il(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function cl(){return{codeJs:`import {
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
};`}}const hl={name:"PageSelectGroup",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=il(),{codeJs:e}=cl(),s=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},ul={class:"a_columns a_columns_count_12"},ml={class:"a_column a_column_6 a_columns_count_12_touch"};function pl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:p(()=>[a("div",ul,[a("div",ml,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const Al=b(hl,[["render",pl]]);function bl(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function El(){return{codeJs:`import {
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
};`}}const fl={name:"PageSelectKeyDisabled",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=bl(),{codeJs:e}=El(),s=[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},Sl={class:"a_columns a_columns_count_12"},yl={class:"a_column a_column_6 a_columns_count_12_touch"};function Rl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[a("div",Sl,[a("div",yl,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1),o(t,{class:"a_mt_3",modelValue:l.model,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model=d),data:l.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const Tl=b(fl,[["render",Rl]]);function gl(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-label-float="false"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function vl(){return{codeJs:`import {
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
};`}}const kl={name:"PageSelectLabelDescription",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=gl(),{codeJs:e}=vl(),s=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},Pl={class:"a_columns a_columns_count_12"},Ol={class:"a_column a_column_6 a_columns_count_12_touch"};function Bl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[a("div",Pl,[a("div",Ol,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"is-label-float":!1,"key-id":"id","key-label":"label",label:"Select","label-description":"Aloha",type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const Ll=b(kl,[["render",Bl]]);function Il(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function Cl(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectLabelNotFound",
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
};`}}const $l={name:"PageSelectLabelNotFound",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=Il(),{codeJs:e}=Cl(),s=[{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=u("aloha_9"),i=u(["aloha_8","aloha_9"]);return{codeHtml:l,codeJs:e,data:s,model1:r,model2:i}}},Dl={class:"a_columns a_columns_count_12"},Nl={class:"a_column a_column_6 a_columns_count_12_touch"};function Vl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_LABEL_NOT_FOUND_HEADER_",description:"_A_SELECT_GROUP_LABEL_NOT_FOUND_DESCRIPTION_",props:"labelNotFound"},{default:p(()=>[a("div",Dl,[a("div",Nl,[o(t,{modelValue:l.model1,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model1=d),data:l.data,"key-id":"id","key-label":"label",label:"Select","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"select"},null,8,["modelValue","data"]),a("div",null,"model1: "+c(l.model1),1),o(t,{class:"a_mt_3",modelValue:l.model2,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model2=d),data:l.data,"show-not-found":!0,"key-id":"id","key-label":"label",label:"Multiselect","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model2: "+c(l.model2),1)])])]),_:1},8,["code-html","code-js"])}const Hl=b($l,[["render",Vl]]);function Ul(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :translate-data="true"
  key-group="group"
  key-id="id"
  key-label="label"
  label="Aloha"
  mode="one_per_group"
  type="multiselect"
></a-select>
<div>model: {{ model }}</div>`}}function Jl(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  ASelect,
} from "aloha-vue";
    
export default {
  name: "PageSelectModeOnePerGroup",
  components: {
    ASelect,
  },
  setup() {
    const data = [
      {
        label: "_TXT_POSITIVE_",
        id: "koeln_true",
        group: "Köln",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "koeln_false",
        group: "Köln",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "koeln_null",
        group: "Köln",
      },
      {
        label: "_TXT_POSITIVE_",
        id: "bonn_true",
        group: "Bonn",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "bonn_false",
        group: "Bonn",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "bonn_null",
        group: "Bonn",
      },
      {
        label: "_TXT_POSITIVE_",
        id: "duesseldorf_true",
        group: "Düsseldorf",
      },
      {
        label: "_TXT_NEGATIVE_",
        id: "duesseldorf_false",
        group: "Düsseldorf",
      },
      {
        label: "_TXT_NEUTRAL_",
        id: "duesseldorf_null",
        group: "Düsseldorf",
      },
    ];
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`}}const Kl={name:"PageSelectModeOnePerGroup",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=Ul(),{codeJs:e}=Jl(),s=[{label:"_TXT_POSITIVE_",id:"koeln_true",group:"Köln"},{label:"_TXT_NEGATIVE_",id:"koeln_false",group:"Köln"},{label:"_TXT_NEUTRAL_",id:"koeln_null",group:"Köln"},{label:"_TXT_POSITIVE_",id:"bonn_true",group:"Bonn"},{label:"_TXT_NEGATIVE_",id:"bonn_false",group:"Bonn"},{label:"_TXT_NEUTRAL_",id:"bonn_null",group:"Bonn"},{label:"_TXT_POSITIVE_",id:"duesseldorf_true",group:"Düsseldorf"},{label:"_TXT_NEGATIVE_",id:"duesseldorf_false",group:"Düsseldorf"},{label:"_TXT_NEUTRAL_",id:"duesseldorf_null",group:"Düsseldorf"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},Ml={class:"a_columns a_columns_count_12"},jl={class:"a_column a_column_6 a_columns_count_12_touch"};function xl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_",description:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_",props:"mode='one_per_group'"},{default:p(()=>[a("div",Ml,[a("div",jl,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"translate-data":!0,"key-group":"group","key-id":"id","key-label":"label",label:"Aloha",mode:"one_per_group",type:"multiselect"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const Gl=b(Kl,[["render",xl]]);function Xl(){return{codeHtml:`<a-select
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
></a-select>`}}function ql(){return{codeJs:`import {
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
};`}}const wl={name:"PageSelectReadonly",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=Xl(),{codeJs:e}=ql(),s=[{label:"Aloha -1",id:"aloha_-1"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],r=u("aloha_7"),i=u(["aloha_6","aloha_7"]),h=u(void 0);return{codeHtml:l,codeJs:e,data:s,model1:r,model2:i,model3:h}}};function Fl(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[o(t,{"model-value":l.model1,data:l.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 1",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":l.model2,data:l.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 2",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":l.model3,data:l.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 3",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":l.model3,data:l.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 4",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":l.model3,data:l.data,readonly:!0,"help-text":"Aloha","key-id":"id","key-label":"label",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const Yl=b(wl,[["render",Fl]]);function Wl(){return{codeHtml:`<a-select
  v-model="model1"
  :show-not-found="true"
  key-id="id"
  key-label="label"
  label="Select with retrieve"
  label-not-found="_A_SELECT_LABEL_NOT_FOUND_"
  type="select"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>

<a-select
  v-model="model2"
  :show-not-found="true"
  key-id="id"
  key-label="label"
  label="Multiselect with retrieve"
  label-not-found="_A_SELECT_LABEL_NOT_FOUND_"
  type="multiselect"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model2: {{ model2 }}</div>`}}function Zl(){return{codeJs:`import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectRetrieve",
  components: {
    ASelect,
  },
  setup() {
    const model1 = ref("aloha_10");
    const model2 = ref(["aloha_2", "aloha_10", "aloha_11", "aloha_998", "aloha_999"]);
    const url = \`\${ import.meta.env.BASE_URL }assets/mock/select-base.json\`;
    const urlRetrieve = \`\${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json\`;

    return {
      model1,
      model2,
      url,
      urlRetrieve,
    };
  },
};

/*
app.use(ADataRetrievePlugin, {
  callbacks: {
    retrieve: async ({ modelArray = [], url = "" }) => {
      const response = await fetch(url);
      const data = await response.json();

      return data.filter(item => modelArray.includes(item.id));
    },
  },
});
*/`}}const zl={name:"PageSelectRetrieve",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=Wl(),{codeJs:e}=Zl(),s=u("aloha_10"),r=u(["aloha_2","aloha_10","aloha_11","aloha_998","aloha_999"]);return{codeHtml:l,codeJs:e,model1:s,model2:r,url:"/aloha/assets/mock/select-base.json",urlRetrieve:"/aloha/assets/mock/select-retrieve.json"}}},Ql={class:"a_columns a_columns_count_12"},le={class:"a_column a_column_6 a_columns_count_12_touch"},ee={class:"a_column a_column_6 a_columns_count_12_touch"};function ae(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,description:"_A_SELECT_GROUP_RETRIEVE_DESCRIPTION_",header:"_A_SELECT_GROUP_RETRIEVE_HEADER_"},{default:p(()=>[a("div",Ql,[a("div",le,[o(t,{modelValue:l.model1,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model1=d),"show-not-found":!0,"key-id":"id","key-label":"label",label:"Select with retrieve","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"select",url:l.url,"url-retrieve":l.urlRetrieve},null,8,["modelValue","url","url-retrieve"]),a("div",null,"model1: "+c(l.model1),1)]),a("div",ee,[o(t,{modelValue:l.model2,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model2=d),"show-not-found":!0,"key-id":"id","key-label":"label",label:"Multiselect with retrieve","label-not-found":"_A_SELECT_LABEL_NOT_FOUND_",type:"multiselect",url:l.url,"url-retrieve":l.urlRetrieve},null,8,["modelValue","url","url-retrieve"]),a("div",null,"model2: "+c(l.model2),1)])])]),_:1},8,["code-html","code-js"])}const oe=b(zl,[["render",ae]]);function te(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
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
};`}}const ne={name:"PageSelectSearch",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=te(),{codeJs:e}=de(),s=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},se={class:"a_columns a_columns_count_12"},re={class:"a_column a_column_6 a_columns_count_12_touch"};function _e(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[a("div",se,[a("div",re,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1),o(t,{class:"a_mt_3",modelValue:l.model,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model=d),data:l.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const ie=b(ne,[["render",_e]]);function ce(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function he(){return{codeJs:`import {
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
};`}}const ue={name:"PageSelectSearchTextInHtml",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=ce(),{codeJs:e}=he(),s=[{label:"<span>Aloha</span> <strong>1</strong>",title:"Aloha 1",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",title:"Aloha 2",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",title:"Aloha 3",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",title:"Aloha 4",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",title:"Aloha 5",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",title:"Aloha 6",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",title:"Aloha 7",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",title:"Aloha 8",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",title:"Aloha 9",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],r=u(["aloha_7"]),i=u("aloha_7");return{codeHtml:l,codeJs:e,data:s,keyTitleCallback:({item:t})=>`--${t.title}--`,model1:r,model2:i}}},me={class:"a_columns a_columns_count_12"},pe={class:"a_column a_column_6 a_columns_count_12_touch"};function Ae(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html","key-title","key-title-callback"]},{default:p(()=>[a("div",me,[a("div",pe,[o(t,{modelValue:l.model1,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model1=d),data:l.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 1",type:"multiselect"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:l.model1,"onUpdate:modelValue":e[1]||(e[1]=d=>l.model1=d),data:l.data,"key-title-callback":l.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","key-title-callback"]),a("div",null,"model1: "+c(l.model1),1),o(t,{class:"a_mt_3",modelValue:l.model2,"onUpdate:modelValue":e[2]||(e[2]=d=>l.model2=d),data:l.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 2",type:"select"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:l.model2,"onUpdate:modelValue":e[3]||(e[3]=d=>l.model2=d),data:l.data,"key-title-callback":l.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"select"},null,8,["modelValue","data","key-title-callback"]),a("div",null,"model2: "+c(l.model2),1)])])]),_:1},8,["code-html","code-js"])}const be=b(ue,[["render",Ae]]);function Ee(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function fe(){return{codeJs:`import {
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
};`}}const Se={name:"PageSelectTranslateData",components:{AlohaExample:f,ASelect:A},setup(){const{codeHtml:l}=Ee(),{codeJs:e}=fe(),s=[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],r=u(void 0);return{codeHtml:l,codeJs:e,data:s,model:r}}},ye={class:"a_columns a_columns_count_12"},Re={class:"a_column a_column_6 a_columns_count_12_touch"};function Te(l,e,s,r,i,h){const t=n("a-select"),_=n("aloha-example");return m(),E(_,{"code-html":l.codeHtml,"code-js":l.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[a("div",ye,[a("div",Re,[o(t,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=d=>l.model=d),data:l.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])])]),_:1},8,["code-html","code-js"])}const ge=b(Se,[["render",Te]]);function ve(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function ke(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function Pe(){const l=v(()=>K({placeholder:"_A_SELECT_COMPONENT_NAME_"}));return{pageTitle:v(()=>`ASelect${l.value?` (${l.value})`:""}`)}}function Oe(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1},{name:"url-retrieve",description:"_A_UI_PROPS_URL_RETRIEVE_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"url-retrieve-params",description:"_A_UI_PROPS_URL_RETRIEVE_PARAMS_DESCRIPTION_",type:"Object",default:void 0,required:!1}]}}function Be(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const Le={name:"PageSelect",components:{AIcon:j,AlohaPage:U,AlohaTableProps:J,ASelect:A,ATranslation:M,PageSelectBasic:Y,PageSelectDataExtra:al,PageSelectExclusiveOption:_l,PageSelectGroup:Al,PageSelectKeyDisabled:Tl,PageSelectLabelDescription:Ll,PageSelectLabelNotFound:Hl,PageSelectModeOnePerGroup:Gl,PageSelectReadonly:Yl,PageSelectRetrieve:oe,PageSelectSearch:ie,PageSelectSearchTextInHtml:be,PageSelectTranslateData:ge},setup(){const{pageTitle:l}=Pe(),{dataProps:e}=Oe(),{dataSlots:s}=Be(),{dataEvents:r}=ve(),{dataExposes:i}=ke();return{dataEvents:r,dataExposes:i,dataProps:e,dataSlots:s,pageTitle:l}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:l}){return`callback: ${l.label}`}}},Ie={class:"a_columns a_columns_count_12"},Ce={class:"a_column a_column_6"},$e=["innerHTML"],De=["innerHTML"],Ne=["innerHTML"],Ve=["innerHTML"];function He(l,e,s,r,i,h){const t=n("a-translation"),_=n("page-select-basic"),d=n("page-select-label-description"),k=n("page-select-group"),P=n("page-select-search"),O=n("page-select-search-text-in-html"),B=n("page-select-key-disabled"),L=n("page-select-translate-data"),I=n("page-select-data-extra"),C=n("page-select-exclusive-option"),$=n("page-select-readonly"),D=n("page-select-mode-one-per-group"),N=n("page-select-label-not-found"),V=n("page-select-retrieve"),R=n("a-select"),g=n("a-icon"),H=n("aloha-page");return m(),E(H,{"page-title":l.pageTitle},{body:p(()=>[o(t,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),o(_),o(d),o(k),o(P),o(O),o(B),o(L),o(I),o(C),o($),o(D),o(N),o(V),a("div",null,[a("div",Ie,[a("div",Ce,[o(R,{modelValue:l.model,"onUpdate:modelValue":e[0]||(e[0]=S=>l.model=S),data:l.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),a("div",null,"model: "+c(l.model),1)])]),o(R,{modelValue:l.model,"onUpdate:modelValue":e[1]||(e[1]=S=>l.model=S),data:l.data,"key-id":"id","key-label-callback":l.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),e[4]||(e[4]=a("br",null,null,-1)),o(R,{modelValue:l.modelArr,"onUpdate:modelValue":e[2]||(e[2]=S=>l.modelArr=S),data:l.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect","is-label-float":!1,placeholder:"placeholder",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:p(({label:S,labelFiltered:y})=>[o(g,{class:"a_mr_1",icon:"Cog"}),y?(m(),T("span",{key:0,innerHTML:y},null,8,$e)):(m(),T("span",{key:1,innerHTML:S},null,8,De))]),_:1},8,["modelValue","data"]),a("div",null,"modelArr: "+c(l.modelArr),1),e[5]||(e[5]=a("br",null,null,-1)),o(R,{modelValue:l.modelArr2,"onUpdate:modelValue":e[3]||(e[3]=S=>l.modelArr2=S),data:l.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:p(({label:S,labelFiltered:y})=>[o(g,{class:"a_mr_1",icon:"Cog"}),y?(m(),T("span",{key:0,innerHTML:y},null,8,Ne)):(m(),T("span",{key:1,innerHTML:S},null,8,Ve))]),_:1},8,["modelValue","data"]),a("div",null,"modelArr2: "+c(l.modelArr2),1)])]),_:1},8,["page-title"])}const la=b(Le,[["render",He]]);export{la as default};
