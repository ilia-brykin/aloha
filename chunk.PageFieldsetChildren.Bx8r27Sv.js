import{$t as e,Ct as t,Tt as n,Ut as r,Yt as i,kt as a,qt as o,wt as s,zt as c}from"./chunk.vendor.CZPox1kV.js";import{Z as l,j as u,kt as d,t as f}from"./bundle.index.CLtYDDlb.js";import{n as p,t as m}from"./chunk.AlohaExample.BFgfeYtr.js";import{t as h}from"./chunk.AlohaTableProps.CiFmD1UR.js";import{t as g}from"./chunk.AlohaTableTranslate.SVFm06b7.js";import{t as _}from"./chunk.AlohaFormTypes.Cwzs4nMH.js";function v(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function y(){return{codeJs:`import {
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
};`}}var b={name:`PageFieldsetChildrenBasic`,components:{AFieldset:u,AlohaExample:m},setup(){let e=[{type:`text`,label:`Text`,id:`aloha.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha.checkbox`},{type:`currency`,label:`Currency`,id:`aloha.currency`},{type:`date`,label:`Date`,id:`aloha.date`},{type:`file`,label:`File`,id:`aloha.file`}],t=i(void 0),{codeHtml:n}=v(),{codeJs:r}=y();return{children:e,codeHtml:n,codeJs:r,model:t}}};function x(t,i,l,u,d,f){let p=r(`a-fieldset`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_BASIC_USAGE_`,props:[`children`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,children:t.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var S=f(b,[[`render`,x]]);function C(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  class-column-default="a_column a_column_6 a_column_12_touch"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function w(){return{codeJs:`import {
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
};`}}var T={name:`PageFieldsetChildrenClassColumn`,components:{AFieldset:u,AlohaExample:m},setup(){let e=[{type:`text`,label:`Text`,id:`aloha1.text`,classColumn:`a_column a_column_12`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha1.checkbox`},{type:`currency`,label:`Currency`,id:`aloha1.currency`},{type:`date`,label:`Date`,id:`aloha1.date`},{type:`file`,label:`File`,id:`aloha1.file`}],t=i(void 0),{codeHtml:n}=C(),{codeJs:r}=w();return{children:e,codeHtml:n,codeJs:r,model:t}}};function E(t,i,l,u,d,f){let p=r(`a-fieldset`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CLASS_COLUMN_HEADER_`,description:`_A_UI_GROUP_CLASS_COLUMN_DESCRIPTION_`,props:[`class-column-default`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,children:t.children,"class-column-default":`a_column a_column_6 a_column_12_touch`,label:`Fieldset`},null,8,[`modelValue`,`children`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var D=f(T,[[`render`,E]]);function O(){return{codeHtml:`<a-fieldset
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
<div>model: {{ model }}</div>`}}function k(){return{codeJs:`import {
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
};`}}var A={name:`PageFieldsetChildrenClassColumns`,components:{AFieldset:u,AlohaExample:m},setup(){let e=[{type:`text`,label:`Text`,id:`aloha2.text`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha2.checkbox`},{type:`currency`,label:`Currency`,id:`aloha2.currency`},{type:`date`,label:`Date`,id:`aloha2.date`}],t=i(void 0),{codeHtml:n}=O(),{codeJs:r}=k();return{children:e,codeHtml:n,codeJs:r,model:t}}};function j(t,i,l,u,d,f){let p=r(`a-fieldset`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_CLASS_COLUMNS_HEADER_`,description:`_A_UI_GROUP_CLASS_COLUMNS_DESCRIPTION_`,props:[`class-columns`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,children:t.children,"class-column-default":`a_column a_column_4 a_column_8_touch`,"class-columns":`a_columns a_columns_count_8 a_columns_gap_y_1 a_columns_gap_x_1`,label:`Fieldset`},null,8,[`modelValue`,`children`]),a(p,{class:`a_mt_3`,modelValue:t.model,"onUpdate:modelValue":i[1]||=e=>t.model=e,children:t.children,"class-columns":`a_columns a_columns_count_12 a_columns_gap_y_4`,label:`Fieldset`},null,8,[`modelValue`,`children`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var M=f(A,[[`render`,j]]);function N(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  :errors-all="errorsAll"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function P(){return{codeJs:`import {
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
};`}}var F={name:`PageFieldsetChildrenErrorsAll`,components:{AFieldset:u,AlohaExample:m},setup(){let e=[{type:`text`,label:`Text`,id:`aloha3.text`,classColumn:`a_column a_column_12`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha3.checkbox`},{type:`currency`,label:`Currency`,id:`aloha3.currency`},{type:`date`,label:`Date`,id:`aloha3.date`}],t={aloha3:{text:`error`,checkbox:`error`,currency:`error`,date:`error`}},n=i(void 0),{codeHtml:r}=N(),{codeJs:a}=P();return{children:e,errorsAll:t,codeHtml:r,codeJs:a,model:n}}};function I(t,i,l,u,d,f){let p=r(`a-fieldset`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_UI_GROUP_ERRORS_ALL_HEADER_`,description:`_A_UI_GROUP_ERRORS_ALL_DESCRIPTION_`,props:[`errors-all`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,children:t.children,"errors-all":t.errorsAll,label:`Fieldset`},null,8,[`modelValue`,`children`,`errors-all`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var L=f(F,[[`render`,I]]);function R(){return{codeHtml:`<a-fieldset
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
></a-fieldset>`}}function z(){return{codeJs:`import {
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
};`}}var B={name:`PageFieldsetChildrenReadonly`,components:{AFieldset:u,AlohaExample:m},setup(){let e=[{type:`text`,label:`Text 1`,id:`aloha5.text1`},{type:`fieldset`,label:`Fieldset 1`,id:`aloha5.fieldset1`,children:[{type:`text`,label:`Text 2`,id:`aloha5.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha5.checkbox`}]},{type:`fieldset`,label:`Fieldset 2`,id:`aloha5.fieldset2`,children:[{type:`text`,label:`Text 3`,id:`aloha5.text3`},{type:`currency`,label:`Currency`,id:`aloha5.currency`}]},{type:`date`,label:`Date`,id:`aloha5.date`}],t=[{type:`text`,label:`Text 1`,id:`aloha6.text1`,readonlyDefault:`---`},{type:`fieldset`,label:`Fieldset 1`,id:`aloha6.fieldset1`,children:[{type:`text`,label:`Text 2`,id:`aloha6.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha6.checkbox`,readonlyDefault:`---`}]},{type:`fieldset`,label:`Fieldset 2`,id:`aloha6.fieldset2`,children:[{type:`text`,label:`Text 3`,id:`aloha6.text3`},{type:`currency`,label:`Currency`,id:`aloha6.currency`}]},{type:`date`,label:`Date`,id:`aloha6.date`}],n=i({aloha5:{text2:`Aloha`,date:`2022-01-01`}}),r=i(void 0),{codeHtml:a}=R(),{codeJs:o}=z();return{children1:e,children2:t,codeHtml:a,codeJs:o,model1:n,model2:r}}};function V(e,t,i,s,l,u){let d=r(`a-fieldset`),f=r(`aloha-example`);return c(),n(f,{"code-html":e.codeHtml,"code-js":e.codeJs,header:`_A_UI_GROUP_READONLY_HEADER_`,description:`_A_UI_GROUP_READONLY_DESCRIPTION_`,props:[`readonly`,`readonly-default`]},{default:o(()=>[a(d,{"model-value":e.model1,children:e.children1,readonly:!0,label:`Fieldset 1`},null,8,[`model-value`,`children`]),a(d,{class:`a_mt_3`,"model-value":e.model2,children:e.children2,readonly:!0,"help-text":`Aloha`,label:`Fieldset 2`,"readonly-default":`-`},null,8,[`model-value`,`children`])]),_:1},8,[`code-html`,`code-js`])}var H=f(B,[[`render`,V]]);function U(){return{codeHtml:`<a-fieldset
  v-model="model"
  :children="children"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`}}function W(){return{codeJs:`import {
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
};`}}var G={name:`PageFieldsetChildrenTree`,components:{AFieldset:u,AlohaExample:m},setup(){let e=[{type:`text`,label:`Text 1`,id:`aloha4.text1`},{type:`fieldset`,label:`Fieldset 1`,id:`aloha4.fieldset1`,children:[{type:`text`,label:`Text 2`,id:`aloha4.text2`},{type:`oneCheckbox`,label:`Checkbox`,id:`aloha4.checkbox`}]},{type:`fieldset`,label:`Fieldset 2`,id:`aloha4.fieldset2`,children:[{type:`text`,label:`Text 3`,id:`aloha4.text3`},{type:`currency`,label:`Currency`,id:`aloha4.currency`}]},{type:`date`,label:`Date`,id:`aloha4.date`}],t=i(void 0),{codeHtml:n}=U(),{codeJs:r}=W();return{children:e,codeHtml:n,codeJs:r,model:t}}};function K(t,i,l,u,d,f){let p=r(`a-fieldset`),m=r(`aloha-example`);return c(),n(m,{"code-html":t.codeHtml,"code-js":t.codeJs,header:`_A_FIELDSET_CHILDREN_GROUP_TREE_HEADER_`,description:`_A_FIELDSET_CHILDREN_GROUP_TREE_DESCRIPTION_`,props:[`children`]},{default:o(()=>[a(p,{modelValue:t.model,"onUpdate:modelValue":i[0]||=e=>t.model=e,children:t.children,label:`Fieldset`},null,8,[`modelValue`,`children`]),s(`div`,null,`model: `+e(t.model),1)]),_:1},8,[`code-html`,`code-js`])}var q=f(G,[[`render`,K]]);function J(){let e=t(()=>d({placeholder:`_A_FIELDSET_CHILDREN_COMPONENT_NAME_`}));return{pageTitle:t(()=>`AFieldset${e.value?` (${e.value})`:``}`)}}function Y(){return{dataProps:[{name:`children`,description:`_A_UI_PROPS_CHILDREN_DESCRIPTION_`,type:`Array`,default:`() => []`,required:!1},{name:`class-column-default`,description:`_A_UI_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_`,type:`String / Object`,default:`a_column a_column_12`,required:!1},{name:`class-columns`,description:`_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_`,type:`String / Object`,default:`a_columns a_columns_count_12`,required:!1},{name:`errors-all`,description:`_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_`,type:`Object`,default:`() => ({})`,required:!1}]}}var X={name:`PageFieldsetChildren`,components:{AlohaFormTypes:_,AlohaPage:p,AlohaTableProps:h,AlohaTableTranslate:g,ATranslation:l,PageFieldsetChildrenBasic:S,PageFieldsetChildrenClassColumn:D,PageFieldsetChildrenClassColumns:M,PageFieldsetChildrenErrorsAll:L,PageFieldsetChildrenReadonly:H,PageFieldsetChildrenTree:q},setup(){let{pageTitle:e}=J(),{dataProps:t}=Y();return{dataProps:t,pageTitle:e}}};function Z(e,t,i,s,l,u){let d=r(`a-translation`),f=r(`aloha-form-types`),p=r(`page-fieldset-children-basic`),m=r(`page-fieldset-children-class-column`),h=r(`page-fieldset-children-class-columns`),g=r(`page-fieldset-children-errors-all`),_=r(`page-fieldset-children-tree`),v=r(`page-fieldset-children-readonly`),y=r(`aloha-table-props`),b=r(`aloha-page`);return c(),n(b,{"page-title":e.pageTitle},{body:o(()=>[a(d,{tag:`p`,html:`_A_FIELDSET_CHILDREN_COMPONENT_DESCRIPTION_`}),a(f),a(p),a(m),a(h),a(g),a(_),a(v),a(y,{data:e.dataProps},null,8,[`data`])]),_:1},8,[`page-title`])}var Q=f(X,[[`render`,Z]]);export{Q as default};