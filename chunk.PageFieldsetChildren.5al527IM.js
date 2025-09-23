import{A as E}from"./chunk.AlohaFormTypes.DzHkGXUa.js";import{A as f,a as R}from"./chunk.AlohaExample.I_T8ZN4A.js";import{A as k}from"./chunk.AlohaTableProps.HfVEufZi.js";import{A as D}from"./chunk.AlohaTableTranslate.Z_UvtTlb.js";import{W as y,_ as u,g as v,A as O}from"./bundle.index.BPjh6AGg.js";import{r as m,V as h,aT as p,e as t,W as _,_ as d,Z as b,aU as x,d as C}from"./chunk.vendor.DmOTRqbf.js";import"./chunk.vendor-lodash.DsZvX3G1.js";import"./chunk.AList.CyMXaqoh.js";import"./chunk.APageTabTitle.BbOSMcnk.js";import"./chunk.AlohaHighlightjs.8HRkfNnH.js";import"./chunk.ATable.DpXpfRYO.js";import"./chunk.translations-ar.BiLIUuBX.js";import"./chunk.translations-de.Cy_u5T72.js";import"./chunk.translations-en.CWj0a7ej.js";import"./chunk.translations-es.D-4cj_p_.js";import"./chunk.translations-fr.LwkSu7L_.js";import"./chunk.translations-hr.G7gNG4Fu.js";import"./chunk.translations-it.BilXvddc.js";import"./chunk.translations-ru.XOcS94ap.js";function S(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function H(){return{codeJs:`import {
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
};`}}const U={name:"PageFieldsetChildrenBasic",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha.checkbox"},{type:"currency",label:"Currency",id:"aloha.currency"},{type:"date",label:"Date",id:"aloha.date"},{type:"file",label:"File",id:"aloha.file"}],l=m(void 0),{codeHtml:o}=S(),{codeJs:a}=H();return{children:e,codeHtml:o,codeJs:a,model:l}}};function N(e,l,o,a,s,i){const n=t("a-fieldset"),c=t("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_BASIC_USAGE_",props:["children"]},{default:p(()=>[d(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const J=u(U,[["render",N]]);function L(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_6 a_column_12_touch"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function V(){return{codeJs:`import {
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
};`}}const j={name:"PageFieldsetChildrenClassColumn",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha1.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha1.checkbox"},{type:"currency",label:"Currency",id:"aloha1.currency"},{type:"date",label:"Date",id:"aloha1.date"},{type:"file",label:"File",id:"aloha1.file"}],l=m(void 0),{codeHtml:o}=L(),{codeJs:a}=V();return{children:e,codeHtml:o,codeJs:a,model:l}}};function G(e,l,o,a,s,i){const n=t("a-fieldset"),c=t("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMN_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_",props:["class-column-default"]},{default:p(()=>[d(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,"class-column-default":"a_column a_column_6 a_column_12_touch",label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const M=u(j,[["render",G]]);function B(){return{codeHtml:`<a-fieldset
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
<div>model: {{ model }}</div>`}}function q(){return{codeJs:`import {
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
};`}}const W={name:"PageFieldsetChildrenClassColumns",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha2.text"},{type:"oneCheckbox",label:"Checkbox",id:"aloha2.checkbox"},{type:"currency",label:"Currency",id:"aloha2.currency"},{type:"date",label:"Date",id:"aloha2.date"}],l=m(void 0),{codeHtml:o}=B(),{codeJs:a}=q();return{children:e,codeHtml:o,codeJs:a,model:l}}};function Y(e,l,o,a,s,i){const n=t("a-fieldset"),c=t("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_CLASS_COLUMNS_HEADER_",description:"_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_",props:["class-columns"]},{default:p(()=>[d(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,"class-column-default":"a_column a_column_4 a_column_8_touch","class-columns":"a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1",label:"Fieldset"},null,8,["modelValue","children"]),d(n,{class:"a_mt_3",modelValue:e.model,"onUpdate:modelValue":l[1]||(l[1]=r=>e.model=r),children:e.children,"class-columns":"a_columns a_columns_count_12 a_columns_gap_y_4",label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const w=u(W,[["render",Y]]);function Z(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :errors-all="errorsAll"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function z(){return{codeJs:`import {
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
};`}}const K={name:"PageFieldsetChildrenErrorsAll",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text",id:"aloha3.text",classColumn:"a_column a_column_12"},{type:"oneCheckbox",label:"Checkbox",id:"aloha3.checkbox"},{type:"currency",label:"Currency",id:"aloha3.currency"},{type:"date",label:"Date",id:"aloha3.date"}],l={aloha3:{text:"error",checkbox:"error",currency:"error",date:"error"}},o=m(void 0),{codeHtml:a}=Z(),{codeJs:s}=z();return{children:e,errorsAll:l,codeHtml:a,codeJs:s,model:o}}};function Q(e,l,o,a,s,i){const n=t("a-fieldset"),c=t("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_ERRORS_ALL_HEADER_",description:"_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_",props:["errors-all"]},{default:p(()=>[d(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,"errors-all":e.errorsAll,label:"Fieldset"},null,8,["modelValue","children","errors-all"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const X=u(K,[["render",Q]]);function ee(){return{codeHtml:`<a-fieldset
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
  help-text="Aloha"
  label="Fieldset 2"
  readonly-default="-"
></a-fieldset>`}}function le(){return{codeJs:`import {
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
};`}}const te={name:"PageFieldsetChildrenReadonly",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text 1",id:"aloha5.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha5.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha5.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha5.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha5.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha5.text3"},{type:"currency",label:"Currency",id:"aloha5.currency"}]},{type:"date",label:"Date",id:"aloha5.date"}],l=[{type:"text",label:"Text 1",id:"aloha6.text1",readonlyDefault:"---"},{type:"fieldset",label:"Fieldset 1",id:"aloha6.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha6.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha6.checkbox",readonlyDefault:"---"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha6.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha6.text3"},{type:"currency",label:"Currency",id:"aloha6.currency"}]},{type:"date",label:"Date",id:"aloha6.date"}],o=m({aloha5:{text2:"Aloha",date:"2022-01-01"}}),a=m(void 0),{codeHtml:s}=ee(),{codeJs:i}=le();return{children1:e,children2:l,codeHtml:s,codeJs:i,model1:o,model2:a}}};function oe(e,l,o,a,s,i){const n=t("a-fieldset"),c=t("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_UI_GROUP_READONLY_HEADER_",description:"_A_UI_GROUP_READONLY_DESCRIPTION_",props:["readonly","readonly-default"]},{default:p(()=>[d(n,{"model-value":e.model1,children:e.children1,readonly:!0,label:"Fieldset 1"},null,8,["model-value","children"]),d(n,{class:"a_mt_3","model-value":e.model2,children:e.children2,readonly:!0,"help-text":"Aloha",label:"Fieldset 2","readonly-default":"-"},null,8,["model-value","children"])]),_:1},8,["code-html","code-js"])}const ae=u(te,[["render",oe]]);function de(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function ne(){return{codeJs:`import {
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
};`}}const ce={name:"PageFieldsetChildrenTree",components:{AFieldset:y,AlohaExample:f},setup(){const e=[{type:"text",label:"Text 1",id:"aloha4.text1"},{type:"fieldset",label:"Fieldset 1",id:"aloha4.fieldset1",children:[{type:"text",label:"Text 2",id:"aloha4.text2"},{type:"oneCheckbox",label:"Checkbox",id:"aloha4.checkbox"}]},{type:"fieldset",label:"Fieldset 2",id:"aloha4.fieldset2",children:[{type:"text",label:"Text 3",id:"aloha4.text3"},{type:"currency",label:"Currency",id:"aloha4.currency"}]},{type:"date",label:"Date",id:"aloha4.date"}],l=m(void 0),{codeHtml:o}=de(),{codeJs:a}=ne();return{children:e,codeHtml:o,codeJs:a,model:l}}};function re(e,l,o,a,s,i){const n=t("a-fieldset"),c=t("aloha-example");return _(),h(c,{"code-html":e.codeHtml,"code-js":e.codeJs,header:"_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_",description:"_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_",props:["children"]},{default:p(()=>[d(n,{modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=r=>e.model=r),children:e.children,label:"Fieldset"},null,8,["modelValue","children"]),b("div",null,"model: "+x(e.model),1)]),_:1},8,["code-html","code-js"])}const se=u(ce,[["render",re]]);function ie(){const e=C(()=>v({placeholder:"_A_FIELDSET_CHILDREN_COMPONENT_NAME_"}));return{pageTitle:C(()=>`AFieldset${e.value?` (${e.value})`:""}`)}}function me(){return{dataProps:[{name:"children",description:"_A_UI_PROPS_CHILDREN_DESCRIPTION_",type:"Array",default:"() => []",required:!1},{name:"class-column-default",description:"_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",type:"String / Object",default:"a_column a_column_12",required:!1},{name:"class-columns",description:"_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",type:"String / Object",default:"a_columns a_columns_count_12",required:!1},{name:"errors-all",description:"_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",type:"Object",default:"() => ({})",required:!1}]}}const ue={name:"PageFieldsetChildren",components:{AlohaFormTypes:E,AlohaPage:R,AlohaTableProps:k,AlohaTableTranslate:D,ATranslation:O,PageFieldsetChildrenBasic:J,PageFieldsetChildrenClassColumn:M,PageFieldsetChildrenClassColumns:w,PageFieldsetChildrenErrorsAll:X,PageFieldsetChildrenReadonly:ae,PageFieldsetChildrenTree:se},setup(){const{pageTitle:e}=ie(),{dataProps:l}=me();return{dataProps:l,pageTitle:e}}};function he(e,l,o,a,s,i){const n=t("a-translation"),c=t("aloha-form-types"),r=t("page-fieldset-children-basic"),A=t("page-fieldset-children-class-column"),F=t("page-fieldset-children-class-columns"),P=t("page-fieldset-children-errors-all"),T=t("page-fieldset-children-tree"),I=t("page-fieldset-children-readonly"),g=t("aloha-table-props"),$=t("aloha-page");return _(),h($,{"page-title":e.pageTitle},{body:p(()=>[d(n,{tag:"p",html:"_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_"}),d(c),d(r),d(A),d(F),d(P),d(T),d(I),d(g,{data:e.dataProps},null,8,["data"])]),_:1},8,["page-title"])}const Oe=u(ue,[["render",he]]);export{Oe as default};
