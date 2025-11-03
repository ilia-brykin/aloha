import{A as y,a as H}from"./chunk.AlohaExample.Df0hry5G.js";import{A as N}from"./chunk.AlohaTableProps.DglM_ctG.js";import{G as A,_ as b,g as U,A as K,b as J}from"./bundle.index.DARcGWQg.js";import{r as m,V as E,aT as p,e as d,W as u,Z as e,_ as o,aU as h,d as v,Y as g}from"./chunk.vendor.D7UxhUfn.js";import"./chunk.vendor-lodash.BXqI5TOP.js";import"./chunk.APageTabTitle.Hh8sjLMM.js";import"./chunk.AlohaHighlightjs.dFk8X2lo.js";import"./chunk.ATable.BCOO8ogi.js";import"./chunk.translations-ar.COHWTLjj.js";import"./chunk.translations-de.CMsDi58c.js";import"./chunk.translations-en.Dg6d-iTX.js";import"./chunk.translations-es.BLJ15RYR.js";import"./chunk.translations-fr.tH5K_M0t.js";import"./chunk.translations-hr.DsOKZruz.js";import"./chunk.translations-it.B_6_ZtEA.js";import"./chunk.translations-ru.BTxZGSVv.js";function x(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function M(){return{codeJs:`import {
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
};`}}const G={name:"PageSelectBasic",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=x(),{codeJs:l}=M(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},j={class:"a_columns a_columns_count_12"},X={class:"a_column a_column_6 a_columns_count_12_touch"};function q(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_BASIC_USAGE_",props:["model-value","data","key-id","key-label","label","type"]},{default:p(()=>[e("div",j,[e("div",X,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Y=b(G,[["render",q]]);function w(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function F(){return{codeJs:`import {
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
};`}}const W={name:"PageSelectDataExtra",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=w(),{codeJs:l}=F(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],s=[["extra_id_1","Extra 1"],["extra_id_2","Extra 2"]],i=[{label:"Extra 1",id:"extra_id_1"},{label:"Extra 2",id:"extra_id_2"}],c=m(void 0),t=m(void 0);return{codeHtml:a,codeJs:l,data:n,dataExtraArrayOfArrays:s,dataExtraArrayOfObjects:i,model1:c,model2:t}}},Z={class:"a_columns a_columns_count_12"},z={class:"a_column a_column_6 a_columns_count_12_touch"};function Q(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_DATA_EXTRA_HEADER_",description:"_A_SELECT_GROUP_DATA_EXTRA_DESCRIPTION_",props:"data-extra"},{default:p(()=>[e("div",Z,[e("div",z,[o(t,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model1=r),data:a.data,"data-extra":a.dataExtraArrayOfArrays,"key-id":"id","key-label":"label",label:"Data extra (Array of Arrays)",search:!0},null,8,["modelValue","data","data-extra"]),e("div",null,"model1: "+h(a.model1),1),o(t,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[1]||(l[1]=r=>a.model2=r),data:a.data,"data-extra":a.dataExtraArrayOfObjects,"key-id":"id","key-label":"label",label:"Data extra (Array of Objects)",search:!0},null,8,["modelValue","data","data-extra"]),e("div",null,"model2: "+h(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const aa=b(W,[["render",Q]]);function la(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function ea(){return{codeJs:`import {
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
};`}}const oa={name:"PageSelectExclusiveOption",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=la(),{codeJs:l}=ea(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],s="_A_SELECT_EXCLUSIVE_",i="aloha_exclusive",c=m(void 0);return{codeHtml:a,codeJs:l,data:n,exclusiveOptionLabel:s,exclusiveOptionValue:i,model:c}}},ta={class:"a_columns a_columns_count_12"},da={class:"a_column a_column_6 a_columns_count_12_touch"};function na(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_EXCLUSIVE_OPTION_HEADER_",description:"_A_SELECT_EXCLUSIVE_OPTION_DESCRIPTION_",props:["exclusive-option-label","exclusive-option-value","is-exclusive-option-enabled"]},{default:p(()=>[e("div",ta,[e("div",da,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"exclusive-option-label":a.exclusiveOptionLabel,"exclusive-option-value":a.exclusiveOptionValue,"is-exclusive-option-enabled":!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),e("div",null,"model: "+h(a.model),1),o(t,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=r=>a.model=r),data:a.data,"exclusive-option-label":a.exclusiveOptionLabel,"exclusive-option-value":a.exclusiveOptionValue,"is-deselect-all":!0,"is-exclusive-option-enabled":!0,"is-select-all":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"multiselect"},null,8,["modelValue","data","exclusive-option-label","exclusive-option-value"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const sa=b(oa,[["render",na]]);function ra(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function _a(){return{codeJs:`import {
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
};`}}const ia={name:"PageSelectGroup",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=ra(),{codeJs:l}=_a(),n=[{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},ca={class:"a_columns a_columns_count_12"},ha={class:"a_column a_column_6 a_columns_count_12_touch"};function ua(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_GROUPS_HEADER_",description:"_A_SELECT_GROUP_GROUPS_DESCRIPTION_",props:"key-group"},{default:p(()=>[e("div",ca,[e("div",ha,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],label:"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const ma=b(ia,[["render",ua]]);function pa(){return{codeHtml:`<a-select
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
};`}}const ba={name:"PageSelectKeyDisabled",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=pa(),{codeJs:l}=Aa(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:"",disabled:!0},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln",disabled:!0},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln",disabled:!0},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},Ea={class:"a_columns a_columns_count_12"},fa={class:"a_column a_column_6 a_columns_count_12_touch"};function ya(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_KEY_DISABLED_HEADER_",description:"_A_SELECT_GROUP_KEY_DISABLED_DESCRIPTION_",props:"key-disabled"},{default:p(()=>[e("div",Ea,[e("div",fa,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"key-id":"id","key-label":"label","key-group":["alohaBR","aloha"],"key-disabled":"disabled",label:"Aloha group"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1),o(t,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=r=>a.model=r),data:a.data,"key-id":"id","key-label":"label","key-disabled":"disabled",label:"Aloha"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Sa=b(ba,[["render",ya]]);function Ta(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  :is-label-float="false"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function ga(){return{codeJs:`import {
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
};`}}const Ra={name:"PageSelectLabelDescription",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=Ta(),{codeJs:l}=ga(),n=[{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},va={class:"a_columns a_columns_count_12"},ka={class:"a_column a_column_6 a_columns_count_12_touch"};function Pa(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_LABEL_DESCRIPTION_HEADER_",description:"_A_UI_GROUP_LABEL_DESCRIPTION_DESCRIPTION_",props:["label-description"]},{default:p(()=>[e("div",va,[e("div",ka,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"is-label-float":!1,"key-id":"id","key-label":"label",label:"Select","label-description":"Aloha",type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ba=b(Ra,[["render",Pa]]);function Oa(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function Ia(){return{codeJs:`import {
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
};`}}const La={name:"PageSelectModeOnePerGroup",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=Oa(),{codeJs:l}=Ia(),n=[{label:"_TXT_POSITIVE_",id:"koeln_true",group:"Köln"},{label:"_TXT_NEGATIVE_",id:"koeln_false",group:"Köln"},{label:"_TXT_NEUTRAL_",id:"koeln_null",group:"Köln"},{label:"_TXT_POSITIVE_",id:"bonn_true",group:"Bonn"},{label:"_TXT_NEGATIVE_",id:"bonn_false",group:"Bonn"},{label:"_TXT_NEUTRAL_",id:"bonn_null",group:"Bonn"},{label:"_TXT_POSITIVE_",id:"duesseldorf_true",group:"Düsseldorf"},{label:"_TXT_NEGATIVE_",id:"duesseldorf_false",group:"Düsseldorf"},{label:"_TXT_NEUTRAL_",id:"duesseldorf_null",group:"Düsseldorf"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},Ca={class:"a_columns a_columns_count_12"},Da={class:"a_column a_column_6 a_columns_count_12_touch"};function $a(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_HEADER_",description:"_A_SELECT_GROUP_MODE_ONE_PER_GROUP_DESCRIPTION_",props:"mode='one_per_group'"},{default:p(()=>[e("div",Ca,[e("div",Da,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"translate-data":!0,"key-group":"group","key-id":"id","key-label":"label",label:"Aloha",mode:"one_per_group",type:"multiselect"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Va=b(La,[["render",$a]]);function Ha(){return{codeHtml:`<a-select
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
></a-select>`}}function Na(){return{codeJs:`import {
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
};`}}const Ua={name:"PageSelectReadonly",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=Ha(),{codeJs:l}=Na(),n=[{label:"Aloha -1",id:"aloha_-1"},{label:"Aloha 0",id:"aloha_0"},{label:"Aloha 1",id:"aloha_1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5"},{label:"Aloha 6",id:"aloha_6"},{label:"Aloha 7",id:"aloha_7"},{label:"Aloha 8",id:"aloha_8"}],s=m("aloha_7"),i=m(["aloha_6","aloha_7"]),c=m(void 0);return{codeHtml:a,codeJs:l,data:n,model1:s,model2:i,model3:c}}};function Ka(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[o(t,{"model-value":a.model1,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 1",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model2,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 2",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 3",type:"select"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,"key-id":"id","key-label":"label",label:"Select 4",type:"multiselect"},null,8,["model-value","data"]),o(t,{class:"a_mt_3","model-value":a.model3,data:a.data,readonly:!0,"help-text":"Aloha","key-id":"id","key-label":"label",label:"Select 5","readonly-default":"-",type:"select"},null,8,["model-value","data"])]),_:1},8,["code-html","code-js"])}const Ja=b(Ua,[["render",Ka]]);function xa(){return{codeHtml:`<a-select
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
<div>model: {{ model }}</div>`}}function Ma(){return{codeJs:`import {
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
};`}}const Ga={name:"PageSelectSearch",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=xa(),{codeJs:l}=Ma(),n=[{label:"Aloha -1",id:"aloha_-1",aloha:""},{label:"Aloha 0",id:"aloha_0",aloha:"",alohaBR:"Köln"},{label:"Aloha 1",id:"aloha_1",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 2",id:"aloha_2",aloha:"Buba",alohaBR:"Köln"},{label:"Aloha 3",id:"aloha_3",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 4",id:"aloha_4",aloha:"Sandra",alohaBR:"Köln"},{label:"Aloha 5",id:"aloha_5",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 6",id:"aloha_6",aloha:"Coco",alohaBR:"Düsseldorf"},{label:"Aloha 7",id:"aloha_7",aloha:"Alex",alohaBR:"Düsseldorf"},{label:"Aloha 8",id:"aloha_8",aloha:"Alex",alohaBR:"Düsseldorf"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},ja={class:"a_columns a_columns_count_12"},Xa={class:"a_column a_column_6 a_columns_count_12_touch"};function qa(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_SEARCH_HEADER_",description:"_A_SELECT_GROUP_SEARCH_DESCRIPTION_",props:"search"},{default:p(()=>[e("div",ja,[e("div",Xa,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"key-group":["alohaBR","aloha"],search:!0,"search-in-group":!0,"key-id":"id","key-label":"label",label:"Aloha group"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1),o(t,{class:"a_mt_3",modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=r=>a.model=r),data:a.data,search:!0,"key-id":"id","key-label":"label",label:"Aloha"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const Ya=b(Ga,[["render",qa]]);function wa(){return{codeHtml:`<a-select
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
<div>model2: {{ model2 }}</div>`}}function Fa(){return{codeJs:`import {
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
};`}}const Wa={name:"PageSelectSearchTextInHtml",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=wa(),{codeJs:l}=Fa(),n=[{label:"<span>Aloha</span> <strong>1</strong>",title:"Aloha 1",id:"aloha_0",aloha:"",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>2</strong>",title:"Aloha 2",id:"aloha_1",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>3</strong>",title:"Aloha 3",id:"aloha_2",aloha:"Buba",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>4</strong>",title:"Aloha 4",id:"aloha_3",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>5</strong>",title:"Aloha 5",id:"aloha_4",aloha:"Sandra",alohaBR:"<strong>Köln</strong>"},{label:"<span>Aloha</span> <strong>6</strong>",title:"Aloha 6",id:"aloha_5",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>7</strong>",title:"Aloha 7",id:"aloha_6",aloha:"Coco",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>8</strong>",title:"Aloha 8",id:"aloha_7",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"},{label:"<span>Aloha</span> <strong>9</strong>",title:"Aloha 9",id:"aloha_8",aloha:"Alex",alohaBR:"<strong>Düsseldorf</strong>"}],s=m(["aloha_7"]),i=m("aloha_7");return{codeHtml:a,codeJs:l,data:n,keyTitleCallback:({item:t})=>`--${t.title}--`,model1:s,model2:i}}},Za={class:"a_columns a_columns_count_12"},za={class:"a_column a_column_6 a_columns_count_12_touch"};function Qa(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_HEADER_",description:"_A_UI_GROUP_SEARCH_TEXT_IN_HTML_DESCRIPTION_",props:["search","search-text-in-html","key-title","key-title-callback"]},{default:p(()=>[e("div",Za,[e("div",za,[o(t,{modelValue:a.model1,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model1=r),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 1",type:"multiselect"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:a.model1,"onUpdate:modelValue":l[1]||(l[1]=r=>a.model1=r),data:a.data,"key-title-callback":a.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 1",type:"multiselect"},null,8,["modelValue","data","key-title-callback"]),e("div",null,"model1: "+h(a.model1),1),o(t,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[2]||(l[2]=r=>a.model2=r),data:a.data,"key-group":["alohaBR","aloha"],"search-in-group":!0,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label","key-title":"title",label:"Aloha group 2",type:"select"},null,8,["modelValue","data"]),o(t,{class:"a_mt_3",modelValue:a.model2,"onUpdate:modelValue":l[3]||(l[3]=r=>a.model2=r),data:a.data,"key-title-callback":a.keyTitleCallback,"search-text-in-html":!0,search:!0,"key-id":"id","key-label":"label",label:"Aloha 2",type:"select"},null,8,["modelValue","data","key-title-callback"]),e("div",null,"model2: "+h(a.model2),1)])])]),_:1},8,["code-html","code-js"])}const al=b(Wa,[["render",Qa]]);function ll(){return{codeHtml:`<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
  :translate-data="true"
  type="select"
></a-select>
<div>model: {{ model }}</div>`}}function el(){return{codeJs:`import {
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
};`}}const ol={name:"PageSelectTranslateData",components:{AlohaExample:y,ASelect:A},setup(){const{codeHtml:a}=ll(),{codeJs:l}=el(),n=[{label:"_A_SELECT_ELEMENT_0_",id:"aloha_0"},{label:"_A_SELECT_ELEMENT_1_",id:"aloha_1"},{label:"_A_SELECT_ELEMENT_2_",id:"aloha_2"},{label:"_A_SELECT_ELEMENT_3_",id:"aloha_3"},{label:"_A_SELECT_ELEMENT_4_",id:"aloha_4"},{label:"_A_SELECT_ELEMENT_5_",id:"aloha_5"},{label:"_A_SELECT_ELEMENT_6_",id:"aloha_6"},{label:"_A_SELECT_ELEMENT_7_",id:"aloha_7"},{label:"_A_SELECT_ELEMENT_8_",id:"aloha_8"}],s=m(void 0);return{codeHtml:a,codeJs:l,data:n,model:s}}},tl={class:"a_columns a_columns_count_12"},dl={class:"a_column a_column_6 a_columns_count_12_touch"};function nl(a,l,n,s,i,c){const t=d("a-select"),_=d("aloha-example");return u(),E(_,{"code-html":a.codeHtml,"code-js":a.codeJs,header:"_A_SELECT_GROUP_TRANSLATE_DATA_HEADER_",description:"_A_SELECT_GROUP_TRANSLATE_DATA_DESCRIPTION_",props:"translate-data"},{default:p(()=>[e("div",tl,[e("div",dl,[o(t,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=r=>a.model=r),data:a.data,"key-id":"id","key-label":"label",label:"Aloha",search:!0,"translate-data":!0,type:"select"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])])]),_:1},8,["code-html","code-js"])}const sl=b(ol,[["render",nl]]);function rl(){return{dataEvents:[{name:"close",description:"_A_ALERT_EVENTS_CLOSE_DESCRIPTION_",type:"Function"}]}}function _l(){return{dataExposes:[{name:"close",description:"_A_ALERT_EXPOSES_CLOSE_DESCRIPTION_",type:"Function"},{name:"isHidden",description:"_A_ALERT_EXPOSES_IS_HIDDEN_DESCRIPTION_",type:"Boolean"}]}}function il(){const a=v(()=>U({placeholder:"_A_SELECT_COMPONENT_NAME_"}));return{pageTitle:v(()=>`ASelect${a.value?` (${a.value})`:""}`)}}function cl(){return{dataProps:[{name:"alert-class",description:"_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"alert-content-class",description:"_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",type:"String / Object",default:void 0,required:!1},{name:"btn-close-attributes",description:"_A_ALERT_PROPS_BTN_CLOSE_ATTRIBUTES_DESCRIPTION_",type:"Object",default:"{}",required:!1},{name:"closable",description:"_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"show-icon",description:"_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"html",description:"_A_ALERT_PROPS_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon",description:"_A_ALERT_PROPS_ICON_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"icon-class",description:"_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"is-visible",description:"_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"removeAlertOnClose",description:"_A_ALERT_PROPS_REMOVE_ALERT_ON_CLOSE_DESCRIPTION_",type:"Boolean",default:!1,required:!1},{name:"safe-html",description:"_A_ALERT_PROPS_SAFE_HTML_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text",description:"_A_ALERT_PROPS_TEXT_DESCRIPTION_",type:"String",default:void 0,required:!1},{name:"text-close",description:"_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",type:"String",default:"_ALERT_CLOSE_",required:!1},{name:"type",description:"_A_ALERT_PROPS_TYPE_DESCRIPTION_",type:"String",default:"danger",required:!1}]}}function hl(){return{dataSlots:[{name:"default",description:"_A_ALERT_SLOTS_DEFAULT_DESCRIPTION_"}]}}const ul={name:"PageSelect",components:{AIcon:J,AlohaPage:H,AlohaTableProps:N,ASelect:A,ATranslation:K,PageSelectBasic:Y,PageSelectDataExtra:aa,PageSelectExclusiveOption:sa,PageSelectGroup:ma,PageSelectKeyDisabled:Sa,PageSelectLabelDescription:Ba,PageSelectModeOnePerGroup:Va,PageSelectReadonly:Ja,PageSelectSearch:Ya,PageSelectSearchTextInHtml:al,PageSelectTranslateData:sl},setup(){const{pageTitle:a}=il(),{dataProps:l}=cl(),{dataSlots:n}=hl(),{dataEvents:s}=rl(),{dataExposes:i}=_l();return{dataEvents:s,dataExposes:i,dataProps:l,dataSlots:n,pageTitle:a}},data(){return{model:void 0,modelArr:void 0,modelArr2:void 0,data:[{label:"Aloha 1",id:"aloha_1",group:"group 1"},{label:"Aloha 2",id:"aloha_2"},{label:"Aloha 3",id:"aloha_3",group:"group 1"},{label:"Aloha 4",id:"aloha_4"},{label:"Aloha 5",id:"aloha_5",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAl ohaAlohaAlohaAlohaAlohaAloha AlohaAlohaAlohaAlohaAlohaAlohaAloha 6",id:"aloha_6",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",id:"aloha_7",group:"group 2"},{label:"AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",id:"aloha_8"}]}},methods:{getLabel({item:a}){return`callback: ${a.label}`}}},ml={class:"a_columns a_columns_count_12"},pl={class:"a_column a_column_6"},Al=["innerHTML"],bl=["innerHTML"],El=["innerHTML"],fl=["innerHTML"];function yl(a,l,n,s,i,c){const t=d("a-translation"),_=d("page-select-basic"),r=d("page-select-label-description"),k=d("page-select-group"),P=d("page-select-search"),B=d("page-select-search-text-in-html"),O=d("page-select-key-disabled"),I=d("page-select-translate-data"),L=d("page-select-data-extra"),C=d("page-select-exclusive-option"),D=d("page-select-readonly"),$=d("page-select-mode-one-per-group"),T=d("a-select"),R=d("a-icon"),V=d("aloha-page");return u(),E(V,{"page-title":a.pageTitle},{body:p(()=>[o(t,{tag:"p",html:"_A_SELECT_COMPONENT_DESCRIPTION_"}),o(_),o(r),o(k),o(P),o(B),o(O),o(I),o(L),o(C),o(D),o($),e("div",null,[e("div",ml,[e("div",pl,[o(T,{modelValue:a.model,"onUpdate:modelValue":l[0]||(l[0]=f=>a.model=f),data:a.data,"key-id":"id","key-label":"label",label:"Test label",type:"select",search:!0,"key-group":"group","sort-order-group":"desc","is-menu-width-as-button":!1,"menu-width-type":"by_content"},null,8,["modelValue","data"]),e("div",null,"model: "+h(a.model),1)])]),o(T,{modelValue:a.model,"onUpdate:modelValue":l[1]||(l[1]=f=>a.model=f),data:a.data,"key-id":"id","key-label-callback":a.getLabel,label:"Test label callback",type:"select",search:!0,"sort-order":"desc"},null,8,["modelValue","data","key-label-callback"]),l[4]||(l[4]=e("br",null,null,-1)),o(T,{modelValue:a.modelArr,"onUpdate:modelValue":l[2]||(l[2]=f=>a.modelArr=f),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect",type:"multiselect","is-label-float":!1,placeholder:"placeholder",search:!0,"is-select-all":!0,"is-deselect-all":!0,"slot-name":"test","max-count-multiselect":2},{test:p(({label:f,labelFiltered:S})=>[o(R,{class:"a_mr_1",icon:"Cog"}),S?(u(),g("span",{key:0,innerHTML:S},null,8,Al)):(u(),g("span",{key:1,innerHTML:f},null,8,bl))]),_:1},8,["modelValue","data"]),e("div",null,"modelArr: "+h(a.modelArr),1),l[5]||(l[5]=e("br",null,null,-1)),o(T,{modelValue:a.modelArr2,"onUpdate:modelValue":l[3]||(l[3]=f=>a.modelArr2=f),data:a.data,"key-id":"id","key-label":"label",label:"Test label multiselect2",type:"multiselect",search:!0,"is-select-all":!0,"is-deselect-all":!0,"is-selection-closeable":!1,"slot-name":"aloha"},{aloha:p(({label:f,labelFiltered:S})=>[o(R,{class:"a_mr_1",icon:"Cog"}),S?(u(),g("span",{key:0,innerHTML:S},null,8,El)):(u(),g("span",{key:1,innerHTML:f},null,8,fl))]),_:1},8,["modelValue","data"]),e("div",null,"modelArr2: "+h(a.modelArr2),1)])]),_:1},8,["page-title"])}const Nl=b(ul,[["render",yl]]);export{Nl as default};
