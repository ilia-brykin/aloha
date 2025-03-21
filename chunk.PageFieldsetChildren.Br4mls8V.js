import{A as h,a as S}from"./chunk.AlohaExample.B5ovDb-9.js";import{A as $}from"./chunk.AlohaTableProps.D3lKP7S0.js";import{A as k}from"./chunk.AlohaTableTranslate.D7nJg35u.js";import{R as f,_ as u,g as O,S as D,T as U,A as v,j as H}from"./bundle.index.pdzM6QrC.js";import{r as b,R as p,aR as m,e as t,U as _,Y as n,W as y,aS as C,d as P}from"./chunk.vendor.C8MJL5OZ.js";import{W as N}from"./chunk.vendor-lodash.D7ZMGyiW.js";import{A as L}from"./chunk.AList.DM6H951I.js";import"./chunk.APageTabTitle.CC3X1X5a.js";import"./chunk.AlohaHighlightjs.BioRad36.js";import"./chunk.ATable.Dlsm2RTK.js";import"./chunk.translations-ar.CzcnPFVK.js";import"./chunk.translations-de.C1xfQ1k1.js";import"./chunk.translations-en.BKP-rnbC.js";import"./chunk.translations-es.C7Us-9pZ.js";import"./chunk.translations-fr.Xaz9i6Fy.js";import"./chunk.translations-hr.DheYJgB_.js";import"./chunk.translations-it.CHCnhUXw.js";import"./chunk.translations-ru.C-YH7Mmz.js";function J(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function V(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenBasic",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const j={name:"PageFieldsetChildrenBasic",components:{AFieldset:f,AlohaExample:h},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"},{type:"currency",label:"Currency",id:"aloha.currency"},{type:"date",label:"Date",id:"aloha.date"},{type:"file",label:"File",id:"aloha.file"}],l=b(void 0),{codeHtml:o}=J(),{codeJs:a}=V();return{children:e,codeHtml:o,codeJs:a,model:l}}};function G(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["children"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),y("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const M=u(j,[["render",G]]);function B(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_6 a_column_12_touch"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function q(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenClassColumn",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha1.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha1.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha1.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha1.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const w={name:"PageFieldsetChildrenClassColumn",components:{AFieldset:f,AlohaExample:h},setup(){const e=[{type:"text",label:"Text",id:"aloha1.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha1.checkbox"},{type:"currency",label:"Currency",id:"aloha1.currency"},{type:"date",label:"Date",id:"aloha1.date"},{type:"file",label:"File",id:"aloha1.file"}],l=b(void 0),{codeHtml:o}=B(),{codeJs:a}=q();return{children:e,codeHtml:o,codeJs:a,model:l}}};function Y(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMN_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_",props:["class-column-default"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,"class-column-default":"a_column a_column_6 a_column_12_touch",label:"Fieldset"},null,8,["modelValue","children"]),y("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const W=u(w,[["render",Y]]);function K(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_4 a_column_8_touch"
  class-columns="a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1"
  label="Fieldset"
></a-fieldset>
<a-fieldset
  v-model="model"
  :children="children"
  class-columns="a_columns a_columns_count_12 a_columns_gap_y_4"
  class="a_mt_3"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenClassColumns",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha2.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha2.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha2.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha2.file",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const Q={name:"PageFieldsetChildrenClassColumns",components:{AFieldset:f,AlohaExample:h},setup(){const e=[{type:"text",label:"Text",id:"aloha2.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha2.checkbox"},{type:"currency",label:"Currency",id:"aloha2.currency"},{type:"date",label:"Date",id:"aloha2.date"}],l=b(void 0),{codeHtml:o}=K(),{codeJs:a}=z();return{children:e,codeHtml:o,codeJs:a,model:l}}};function X(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMNS_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_",props:["class-columns"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,"class-column-default":"a_column a_column_4 a_column_8_touch","class-columns":"a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1",label:"Fieldset"},null,8,["modelValue","children"]),n(d,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=c=>e.model=c),children:e.children,"class-columns":"a_columns a_columns_count_12 a_columns_gap_y_4",label:"Fieldset"},null,8,["modelValue","children"]),y("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const Z=u(Q,[["render",X]]);function ee(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :errors-all="errorsAll"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function le(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenErrorsAll",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha3.text",
        classColumn: "a_column a_column_12"
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha3.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha3.currency",
      },
      {
        type: "date",
        label: "Date",
        id: "aloha3.date",
      },
    ];
    const errorsAll = {
      aloha3: {
        text: "error",
        checkbox: "error",
        currency: "error",
        date: "error",
      },
    };
    const model = ref(undefined);
    
    return {
      children,
      errorsAll,
      model,
    };
  },
};`}}const oe={name:"PageFieldsetChildrenErrorsAll",components:{AFieldset:f,AlohaExample:h},setup(){const e=[{type:"text",label:"Text",id:"aloha3.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha3.checkbox"},{type:"currency",label:"Currency",id:"aloha3.currency"},{type:"date",label:"Date",id:"aloha3.date"}],l={aloha3:{text:"error",checkbox:"error",currency:"error",date:"error"}},o=b(void 0),{codeHtml:a}=ee(),{codeJs:s}=le();return{children:e,errorsAll:l,codeHtml:a,codeJs:s,model:o}}};function te(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_ALL_HEADER_",description:"_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_",props:["errors-all"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,"errors-all":e.errorsAll,label:"Fieldset"},null,8,["modelValue","children","errors-all"]),y("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const ae=u(oe,[["render",te]]);function ne(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function de(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenTree",
  components: {
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha4.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha4.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha4.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha4.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha4.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha4.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha4.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha4.date",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`}}const ce={name:"PageFieldsetChildrenTree",components:{AFieldset:f,AlohaExample:h},setup(){const e=[{type:"text",label:"Text 1",id:"aloha4.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha4.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha4.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha4.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha4.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha4.text3"},{type:"currency",label:"Currency",id:"aloha4.currency"}]},{type:"date",label:"Date",id:"aloha4.date"}],l=b(void 0),{codeHtml:o}=ne(),{codeJs:a}=de();return{children:e,codeHtml:o,codeJs:a,model:l}}};function re(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_",description:"_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_",props:["children"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),y("div",null,"model: "+C(e.model),1)]),_:1},8,["code-html","code-js"])}const se=u(ce,[["render",re]]);function ie(){const e=P(()=>O({placeholder:"_A_FIELDSET_CHILDREN_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AFieldset${e.value?` (${e.value})`:""}`)}}function me(){return{dataProps:[{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1}]}}function ue(){const e={ACheckbox:{name:"PageCheckbox"},AInput:{name:"PageInput"},AInputCurrency:{name:"PageInputCurrency"},ADatepicker:{name:"PageDatepicker"},ADatepickerRange:{name:"PageDatepickerRange"},AInputFile:void 0,AInputNumber:{name:"PageInputNumber"},AInputNumberRange:{name:"PageInputNumberRange"},AJson:{name:"PageJson"},AOneCheckbox:{name:"PageOneCheckbox"},ARadio:{name:"PageRadio"},ASelect:{name:"PageSelect"},ASwitch:{name:"PageSwitch"},ATemplate:{name:"PageTemplate"},ATextarea:{name:"PageTextarea"},AFieldset:{name:"PageFieldset"},AGroup:""};return{types:P(()=>{const o=[];return N.forEach({...U,...D},(a,s)=>{const i={type:e[a.name]?"link":"text",to:e[a.name],text:s};o.push(i)}),o})}}const pe={name:"PageFieldsetChildren",components:{AElement:H,AList:L,AlohaPage:S,AlohaTableProps:$,AlohaTableTranslate:k,ATranslation:v,PageFieldsetChildrenBasic:M,PageFieldsetChildrenClassColumn:W,PageFieldsetChildrenClassColumns:Z,PageFieldsetChildrenErrorsAll:ae,PageFieldsetChildrenTree:se},setup(){const{pageTitle:e}=ie(),{dataProps:l}=me(),{types:o}=ue();return{dataProps:l,pageTitle:e,types:o}}};function _e(e,l,o,a,s,i){const d=t("a-translation"),r=t("a-element"),c=t("a-list"),x=t("page-fieldset-children-basic"),g=t("page-fieldset-children-class-column"),I=t("page-fieldset-children-class-columns"),F=t("page-fieldset-children-errors-all"),T=t("page-fieldset-children-tree"),E=t("aloha-table-props"),R=t("aloha-page");return _(),p(R,{"page-title":e.pageTitle},{body:m(()=>[n(d,{tag:"p",html:"_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_"}),n(d,{tag:"h2",html:"_A_UI_TYPES_FOR_USE_"}),n(c,{class:"a_list_without_styles",data:e.types},{listItem:m(({item:A})=>[n(r,{text:A.text,to:A.to,type:A.type},null,8,["text","to","type"])]),_:1},8,["data"]),n(x),n(g),n(I),n(F),n(T),n(E,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const De=u(pe,[["render",_e]]);export{De as default};
