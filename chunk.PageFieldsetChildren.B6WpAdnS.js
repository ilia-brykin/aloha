import{R as h,_ as u,g as S,S as $,T as k,A as O,j as D}from"./bundle.index.DL2yTFpX.js";import{r as f,O as p,aR as m,b as t,Q as _,V as n,U as b,aS as y,a as P}from"./chunk.vendor.G4HJ_FUy.js";import{A as U}from"./chunk.AList.Dsvma3qe.js";import{X as v}from"./chunk.vendor-lodash.DUClg1O3.js";import{A as C,a as H}from"./chunk.AlohaExample.C91B3qMe.js";import{A as N}from"./chunk.AlohaTableProps.B3-yuNNO.js";import{A as L}from"./chunk.AlohaTableTranslate.Dgv2Bg5x.js";import"./chunk.translations-ar.Bl94ryzA.js";import"./chunk.translations-de.B7d9jdMO.js";import"./chunk.translations-en.BtgGWXka.js";import"./chunk.translations-es.BSOZWCCF.js";import"./chunk.translations-fr.CcWHH1cx.js";import"./chunk.translations-hr.CJ7NF5Fz.js";import"./chunk.translations-it.DU_NwUPS.js";import"./chunk.translations-ru.FgtNK4nl.js";import"./chunk.APageTabTitle.DgYvm1Tm.js";import"./chunk.AlohaHighlightjs.Bnb6Sejr.js";import"./chunk.ATable.Dn-IzZAh.js";function J(){return{codeHtml:`<a-fieldset
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
};`}}const j={name:"PageFieldsetChildrenBasic",components:{AFieldset:h,AlohaExample:C},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"},{type:"currency",label:"Currency",id:"aloha.currency"},{type:"date",label:"Date",id:"aloha.date"},{type:"file",label:"File",id:"aloha.file"}],l=f(void 0),{codeHtml:o}=J(),{codeJs:a}=V();return{children:e,codeHtml:o,codeJs:a,model:l}}};function G(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["children"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const M=u(j,[["render",G]]);function B(){return{codeHtml:`<a-fieldset
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
};`}}const w={name:"PageFieldsetChildrenClassColumn",components:{AFieldset:h,AlohaExample:C},setup(){const e=[{type:"text",label:"Text",id:"aloha1.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha1.checkbox"},{type:"currency",label:"Currency",id:"aloha1.currency"},{type:"date",label:"Date",id:"aloha1.date"},{type:"file",label:"File",id:"aloha1.file"}],l=f(void 0),{codeHtml:o}=B(),{codeJs:a}=q();return{children:e,codeHtml:o,codeJs:a,model:l}}};function Y(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMN_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_",props:["class-column-default"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,"class-column-default":"a_column a_column_6 a_column_12_touch",label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const K=u(w,[["render",Y]]);function Q(){return{codeHtml:`<a-fieldset
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
<div>model: {{ model }}</div>`}}function X(){return{codeJs:`import {
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
};`}}const z={name:"PageFieldsetChildrenClassColumns",components:{AFieldset:h,AlohaExample:C},setup(){const e=[{type:"text",label:"Text",id:"aloha2.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha2.checkbox"},{type:"currency",label:"Currency",id:"aloha2.currency"},{type:"date",label:"Date",id:"aloha2.date"}],l=f(void 0),{codeHtml:o}=Q(),{codeJs:a}=X();return{children:e,codeHtml:o,codeJs:a,model:l}}};function W(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMNS_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_",props:["class-columns"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,"class-column-default":"a_column a_column_4 a_column_8_touch","class-columns":"a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1",label:"Fieldset"},null,8,["modelValue","children"]),n(d,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=c=>e.model=c),children:e.children,"class-columns":"a_columns a_columns_count_12 a_columns_gap_y_4",label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const Z=u(z,[["render",W]]);function ee(){return{codeHtml:`<a-fieldset
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
};`}}const oe={name:"PageFieldsetChildrenErrorsAll",components:{AFieldset:h,AlohaExample:C},setup(){const e=[{type:"text",label:"Text",id:"aloha3.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha3.checkbox"},{type:"currency",label:"Currency",id:"aloha3.currency"},{type:"date",label:"Date",id:"aloha3.date"}],l={aloha3:{text:"error",checkbox:"error",currency:"error",date:"error"}},o=f(void 0),{codeHtml:a}=ee(),{codeJs:s}=le();return{children:e,errorsAll:l,codeHtml:a,codeJs:s,model:o}}};function te(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_ALL_HEADER_",description:"_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_",props:["errors-all"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,"errors-all":e.errorsAll,label:"Fieldset"},null,8,["modelValue","children","errors-all"]),b("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const ae=u(oe,[["render",te]]);function ne(){return{codeHtml:`<a-fieldset
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
};`}}const ce={name:"PageFieldsetChildrenTree",components:{AFieldset:h,AlohaExample:C},setup(){const e=[{type:"text",label:"Text 1",id:"aloha4.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha4.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha4.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha4.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha4.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha4.text3"},{type:"currency",label:"Currency",id:"aloha4.currency"}]},{type:"date",label:"Date",id:"aloha4.date"}],l=f(void 0),{codeHtml:o}=ne(),{codeJs:a}=de();return{children:e,codeHtml:o,codeJs:a,model:l}}};function re(e,l,o,a,s,i){const d=t("a-fieldset"),r=t("aloha-example");return _(),p(r,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_",description:"_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_",props:["children"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=c=>e.model=c),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+y(e.model),1)]),_:1},8,["code-html","code-js"])}const se=u(ce,[["render",re]]);function ie(){const e=P(()=>S({placeholder:"_A_FIELDSET_CHILDREN_COMPONENT_NAME_"}));return{pageTitle:P(()=>`AFieldset${e.value?` (${e.value})`:""}`)}}function me(){return{dataProps:[{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1}]}}function ue(){const e={ACheckbox:{name:"PageCheckbox"},AInput:{name:"PageInput"},AInputCurrency:{name:"PageInputCurrency"},ADatepicker:{name:"PageDatepicker"},ADatepickerRange:{name:"PageDatepickerRange"},AInputFile:void 0,AInputNumber:{name:"PageInputNumber"},AInputNumberRange:{name:"PageInputNumberRange"},AJson:{name:"PageJson"},AOneCheckbox:{name:"PageOneCheckbox"},ARadio:{name:"PageRadio"},ASelect:{name:"PageSelect"},ASwitch:{name:"PageSwitch"},ATemplate:{name:"PageTemplate"},ATextarea:{name:"PageTextarea"},AFieldset:{name:"PageFieldset"},AGroup:""};return{types:P(()=>{const o=[];return v.forEach({...k,...$},(a,s)=>{const i={type:e[a.name]?"link":"text",to:e[a.name],text:s};o.push(i)}),o})}}const pe={name:"PageFieldsetChildren",components:{AElement:D,AList:U,AlohaPage:H,AlohaTableProps:N,AlohaTableTranslate:L,ATranslation:O,PageFieldsetChildrenBasic:M,PageFieldsetChildrenClassColumn:K,PageFieldsetChildrenClassColumns:Z,PageFieldsetChildrenErrorsAll:ae,PageFieldsetChildrenTree:se},setup(){const{pageTitle:e}=ie(),{dataProps:l}=me(),{types:o}=ue();return{dataProps:l,pageTitle:e,types:o}}};function _e(e,l,o,a,s,i){const d=t("a-translation"),r=t("a-element"),c=t("a-list"),x=t("page-fieldset-children-basic"),g=t("page-fieldset-children-class-column"),I=t("page-fieldset-children-class-columns"),F=t("page-fieldset-children-errors-all"),T=t("page-fieldset-children-tree"),E=t("aloha-table-props"),R=t("aloha-page");return _(),p(R,{"page-title":e.pageTitle},{body:m(()=>[n(d,{tag:"p",html:"_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_"}),n(d,{tag:"h2",html:"_A_UI_TYPES_FOR_USE_"}),n(c,{class:"a_list_without_styles",data:e.types},{listItem:m(({item:A})=>[n(r,{text:A.text,to:A.to,type:A.type},null,8,["text","to","type"])]),_:1},8,["data"]),n(x),n(g),n(I),n(F),n(T),n(E,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const De=u(pe,[["render",_e]]);export{De as default};
