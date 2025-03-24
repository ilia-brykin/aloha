import{A as f,a as $}from"./chunk.AlohaExample.D-BUV1j9.js";import{A as S}from"./chunk.AlohaTableProps.D_3upck0.js";import{A as D}from"./chunk.AlohaTableTranslate.C7XFuXmT.js";import{R as y,_ as p,g as O,S as v,T as U,A as H,j as N}from"./bundle.index.B_GRLDdd.js";import{r as u,U as h,aS as m,e as a,V as _,Z as n,Y as b,aT as x,d as A}from"./chunk.vendor.BCr5dHHZ.js";import{X as J}from"./chunk.vendor-lodash.1bZ290WX.js";import{A as L}from"./chunk.AList.BgSaD3o_.js";import"./chunk.APageTabTitle.CHSnL-Cd.js";import"./chunk.AlohaHighlightjs.YRvFUhHX.js";import"./chunk.ATable.ErVspNMH.js";import"./chunk.translations-ar.BW4YNjOf.js";import"./chunk.translations-de.pnZGXXfR.js";import"./chunk.translations-en.CzHrEMzS.js";import"./chunk.translations-es.CVdE8egl.js";import"./chunk.translations-fr.hqb9JGfS.js";import"./chunk.translations-hr.DYwzCGFq.js";import"./chunk.translations-it.C5e5-FF3.js";import"./chunk.translations-ru.eTKud94F.js";function V(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function j(){return{codeJs:`import {
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
};`}}const G={name:"PageFieldsetChildrenBasic",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"},{type:"currency",label:"Currency",id:"aloha.currency"},{type:"date",label:"Date",id:"aloha.date"},{type:"file",label:"File",id:"aloha.file"}],l=u(void 0),{codeHtml:t}=V(),{codeJs:o}=j();return{children:e,codeHtml:t,codeJs:o,model:l}}};function M(e,l,t,o,s,i){const d=a("a-fieldset"),c=a("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["children"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const B=p(G,[["render",M]]);function Y(){return{codeHtml:`<a-fieldset
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
};`}}const w={name:"PageFieldsetChildrenClassColumn",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha1.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha1.checkbox"},{type:"currency",label:"Currency",id:"aloha1.currency"},{type:"date",label:"Date",id:"aloha1.date"},{type:"file",label:"File",id:"aloha1.file"}],l=u(void 0),{codeHtml:t}=Y(),{codeJs:o}=q();return{children:e,codeHtml:t,codeJs:o,model:l}}};function K(e,l,t,o,s,i){const d=a("a-fieldset"),c=a("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMN_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_",props:["class-column-default"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,"class-column-default":"a_column a_column_6 a_column_12_touch",label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const X=p(w,[["render",K]]);function Z(){return{codeHtml:`<a-fieldset
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
};`}}const Q={name:"PageFieldsetChildrenClassColumns",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha2.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha2.checkbox"},{type:"currency",label:"Currency",id:"aloha2.currency"},{type:"date",label:"Date",id:"aloha2.date"}],l=u(void 0),{codeHtml:t}=Z(),{codeJs:o}=z();return{children:e,codeHtml:t,codeJs:o,model:l}}};function W(e,l,t,o,s,i){const d=a("a-fieldset"),c=a("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMNS_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_",props:["class-columns"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,"class-column-default":"a_column a_column_4 a_column_8_touch","class-columns":"a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1",label:"Fieldset"},null,8,["modelValue","children"]),n(d,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=r=>e.model=r),children:e.children,"class-columns":"a_columns a_columns_count_12 a_columns_gap_y_4",label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const ee=p(Q,[["render",W]]);function le(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :errors-all="errorsAll"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function te(){return{codeJs:`import {
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
};`}}const ae={name:"PageFieldsetChildrenErrorsAll",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha3.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha3.checkbox"},{type:"currency",label:"Currency",id:"aloha3.currency"},{type:"date",label:"Date",id:"aloha3.date"}],l={aloha3:{text:"error",checkbox:"error",currency:"error",date:"error"}},t=u(void 0),{codeHtml:o}=le(),{codeJs:s}=te();return{children:e,errorsAll:l,codeHtml:o,codeJs:s,model:t}}};function oe(e,l,t,o,s,i){const d=a("a-fieldset"),c=a("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_ALL_HEADER_",description:"_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_",props:["errors-all"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,"errors-all":e.errorsAll,label:"Fieldset"},null,8,["modelValue","children","errors-all"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const ne=p(ae,[["render",oe]]);function de(){return{codeHtml:`<a-fieldset
  :model-value="model1"
  :children="children1"
  :readonly="true"
  label="Fieldset 1"
></a-fieldset>
<a-fieldset
  :model-value="model2"
  :children="children2"
  :readonly="true"
  class="a_mt_3"
  label="Fieldset 2"
  readonly-default="-"
></a-fieldset>`}}function ce(){return{codeJs:`import {
  ref,
} from "vue";

import { 
  AFieldset,
} from "aloha-vue";
    
export default {
  name: "PageFieldsetChildrenReadonly",
  components: {
    AFieldset,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha5.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha5.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha5.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha5.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha5.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha5.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha5.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha5.date",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha6.text1",
        readonlyDefault: "---",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha6.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha6.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha6.checkbox",
            readonlyDefault: "---",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha6.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha6.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha6.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha6.date",
      },
    ];
    const model1 = ref({
      aloha5: {
        text2: "Aloha",
        date: "2022-01-01",
      },
    });
    const model2 = ref(undefined);
    
    return {
      children1,
      children2,
      model1,
      model2,
    };
  },
};`}}const re={name:"PageFieldsetChildrenReadonly",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text 1",id:"aloha5.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha5.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha5.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha5.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha5.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha5.text3"},{type:"currency",label:"Currency",id:"aloha5.currency"}]},{type:"date",label:"Date",id:"aloha5.date"}],l=[{type:"text",label:"Text 1",id:"aloha6.text1",readonlyDefault:"---"},{type:"fieldset",label:"Fieldset 1",id:"aloha6.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha6.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha6.checkbox",readonlyDefault:"---"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha6.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha6.text3"},{type:"currency",label:"Currency",id:"aloha6.currency"}]},{type:"date",label:"Date",id:"aloha6.date"}],t=u({aloha5:{text2:"Aloha",date:"2022-01-01"}}),o=u(void 0),{codeHtml:s}=de(),{codeJs:i}=ce();return{children1:e,children2:l,codeHtml:s,codeJs:i,model1:t,model2:o}}};function se(e,l,t,o,s,i){const d=a("a-fieldset"),c=a("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:m(()=>[n(d,{"model-value":e.model1,children:e.children1,readonly:!0,label:"Fieldset 1"},null,8,["model-value","children"]),n(d,{class:"a_mt_3","model-value":e.model2,children:e.children2,readonly:!0,label:"Fieldset 2","readonly-default":"-"},null,8,["model-value","children"])]),_:1},8,["code-html","code-js"])}const ie=p(re,[["render",se]]);function me(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function ue(){return{codeJs:`import {
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
};`}}const pe={name:"PageFieldsetChildrenTree",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text 1",id:"aloha4.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha4.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha4.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha4.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha4.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha4.text3"},{type:"currency",label:"Currency",id:"aloha4.currency"}]},{type:"date",label:"Date",id:"aloha4.date"}],l=u(void 0),{codeHtml:t}=me(),{codeJs:o}=ue();return{children:e,codeHtml:t,codeJs:o,model:l}}};function he(e,l,t,o,s,i){const d=a("a-fieldset"),c=a("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_",description:"_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_",props:["children"]},{default:m(()=>[n(d,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const _e=p(pe,[["render",he]]);function fe(){const e=A(()=>O({placeholder:"_A_FIELDSET_CHILDREN_COMPONENT_NAME_"}));return{pageTitle:A(()=>`AFieldset${e.value?` (${e.value})`:""}`)}}function ye(){return{dataProps:[{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1}]}}function be(){const e={ACheckbox:{name:"PageCheckbox"},AInput:{name:"PageInput"},AInputCurrency:{name:"PageInputCurrency"},ADatepicker:{name:"PageDatepicker"},ADatepickerRange:{name:"PageDatepickerRange"},AInputFile:void 0,AInputNumber:{name:"PageInputNumber"},AInputNumberRange:{name:"PageInputNumberRange"},AJson:{name:"PageJson"},AOneCheckbox:{name:"PageOneCheckbox"},ARadio:{name:"PageRadio"},ASelect:{name:"PageSelect"},ASwitch:{name:"PageSwitch"},ATemplate:{name:"PageTemplate"},ATextarea:{name:"PageTextarea"},AFieldset:{name:"PageFieldset"},AGroup:""};return{types:A(()=>{const t=[];return J.forEach({...U,...v},(o,s)=>{const i={type:e[o.name]?"link":"text",to:e[o.name],text:s};t.push(i)}),t})}}const xe={name:"PageFieldsetChildren",components:{AElement:N,AList:L,AlohaPage:$,AlohaTableProps:S,AlohaTableTranslate:D,ATranslation:H,PageFieldsetChildrenBasic:B,PageFieldsetChildrenClassColumn:X,PageFieldsetChildrenClassColumns:ee,PageFieldsetChildrenErrorsAll:ne,PageFieldsetChildrenReadonly:ie,PageFieldsetChildrenTree:_e},setup(){const{pageTitle:e}=fe(),{dataProps:l}=ye(),{types:t}=be();return{dataProps:l,pageTitle:e,types:t}}};function Ce(e,l,t,o,s,i){const d=a("a-translation"),c=a("a-element"),r=a("a-list"),P=a("page-fieldset-children-basic"),F=a("page-fieldset-children-class-column"),g=a("page-fieldset-children-class-columns"),T=a("page-fieldset-children-errors-all"),I=a("page-fieldset-children-tree"),E=a("page-fieldset-children-readonly"),R=a("aloha-table-props"),k=a("aloha-page");return _(),h(k,{"page-title":e.pageTitle},{body:m(()=>[n(d,{tag:"p",html:"_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_"}),n(d,{tag:"h2",html:"_A_UI_TYPES_FOR_USE_"}),n(r,{class:"a_list_without_styles",data:e.types},{listItem:m(({item:C})=>[n(c,{text:C.text,to:C.to,type:C.type},null,8,["text","to","type"])]),_:1},8,["data"]),n(P),n(F),n(g),n(T),n(I),n(E),n(R,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Le=p(xe,[["render",Ce]]);export{Le as default};
